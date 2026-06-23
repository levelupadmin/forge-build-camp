/**
 * Razorpay → Resend email pipeline.
 *
 * Trigger:
 *   Razorpay sends a POST to this URL on every `payment.captured` (and other)
 *   event we subscribe to in the dashboard. The payload is signed with HMAC
 *   using the webhook secret we configured. See:
 *     https://razorpay.com/docs/webhooks/
 *
 * What this does:
 *   1. Verifies the signature so random callers can't fire emails.
 *   2. Filters to the Forge AI application-fee payment page only (other Forge
 *      programs run on different payment pages; we'll wire them later).
 *   3. Sends a branded confirmation email from forge@leveluplearning.in with a
 *      one-click Calendly link pre-filled with the applicant's name, email,
 *      phone, and the AI cohort answer.
 *
 * Required env vars (set in Vercel project settings):
 *   RAZORPAY_WEBHOOK_SECRET   secret you set in the Razorpay dashboard
 *   RESEND_API_KEY            from resend.com → API keys (server-side only)
 *   FROM_EMAIL                e.g. "forge@leveluplearning.in"  (must be on a verified domain)
 *   FROM_NAME                 e.g. "The Forge by LevelUp"      (display name)
 *   REPLY_TO_EMAIL            usually same as FROM_EMAIL
 *
 * Idempotency note:
 *   Razorpay retries webhooks if we don't 200 in time. The same payment.captured
 *   event can be delivered up to ~24 times over the next 24h on failure. We
 *   return 200 immediately after queuing the email, but if the email send itself
 *   throws we'll re-process on retry — that's the only realistic duplicate
 *   scenario. Worst case is a single duplicate confirmation email, which is
 *   fine. For stronger dedupe, add Vercel KV / Upstash and key on payment id.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "node:crypto";
import { Resend } from "resend";
import { buildInterviewInviteEmail } from "../lib/server/email-template";

// Razorpay sends the raw body — we need it for HMAC verification.
// Vercel auto-parses JSON by default, so we have to opt out.
export const config = { api: { bodyParser: false } };

async function readRawBody(req: VercelRequest): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

interface RzpPayment {
  id: string;
  entity: "payment";
  amount: number;
  currency: string;
  status: string;
  order_id?: string;
  invoice_id?: string;
  email?: string;
  contact?: string;
  notes?: Record<string, string>;
  payment_link_id?: string;
}

interface RzpWebhookEvent {
  entity: "event";
  event: string;
  payload: { payment: { entity: RzpPayment } };
}

/** The Forge AI Razorpay payment page id (rzp.io/rzp/wpzv8C7I → pl_SYCEPxHQ7BH42S). */
const FORGE_AI_PAYMENT_LINK_ID = "pl_SYCEPxHQ7BH42S";
/** Application fee for Forge AI, in paise. */
const FORGE_AI_FEE_PAISE = 90000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST from Razorpay
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Required env
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const resendApiKey  = process.env.RESEND_API_KEY;
  const fromEmail     = process.env.FROM_EMAIL    || "forge@leveluplearning.in";
  const fromName      = process.env.FROM_NAME     || "The Forge by LevelUp";
  const replyTo       = process.env.REPLY_TO_EMAIL || fromEmail;
  if (!webhookSecret || !resendApiKey) {
    console.error("Missing RAZORPAY_WEBHOOK_SECRET or RESEND_API_KEY");
    res.status(500).json({ error: "Server misconfigured" });
    return;
  }

  // 1. Read raw body + verify HMAC
  const rawBody = await readRawBody(req);
  const signature = (req.headers["x-razorpay-signature"] as string) || "";
  const expected = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");
  const validSig =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!validSig) {
    console.warn("Invalid Razorpay webhook signature");
    res.status(401).json({ error: "Invalid signature" });
    return;
  }

  // 2. Parse
  let event: RzpWebhookEvent;
  try {
    event = JSON.parse(rawBody);
  } catch {
    res.status(400).json({ error: "Invalid JSON" });
    return;
  }

  // We only care about successful payments
  if (event.event !== "payment.captured") {
    res.status(200).json({ ok: true, ignored: event.event });
    return;
  }

  const payment = event.payload?.payment?.entity;
  if (!payment || payment.status !== "captured") {
    res.status(200).json({ ok: true, ignored: "not captured" });
    return;
  }

  // 3. Filter to the Forge AI payment-link only.
  //    Razorpay's `payment.notes` includes `payment_link_id` when the payment
  //    originates from a Payment Page / Payment Link. We belt-and-suspenders
  //    on the amount too in case notes are missing on some payments.
  const linkId =
    payment.notes?.payment_link_id ||
    (payment as RzpPayment & { payment_link_id?: string }).payment_link_id;
  const matchesLinkId = linkId === FORGE_AI_PAYMENT_LINK_ID;
  const matchesAmount = payment.amount === FORGE_AI_FEE_PAISE;
  if (!matchesLinkId && !matchesAmount) {
    res.status(200).json({ ok: true, ignored: "not forge AI payment", amount: payment.amount });
    return;
  }

  // 4. Need an email to send to
  const recipient = payment.email;
  if (!recipient) {
    console.warn(`Payment ${payment.id} captured but no email on payment object`);
    res.status(200).json({ ok: true, ignored: "no email" });
    return;
  }

  // 5. Build + send
  const applicantName =
    payment.notes?.full_name ||
    payment.notes?.name ||
    recipient.split("@")[0];
  const phone = payment.contact || payment.notes?.phone || "";

  const { html, text, subject } = buildInterviewInviteEmail({
    name: applicantName,
    email: recipient,
    phone,
    paymentId: payment.id,
    feeRupees: payment.amount / 100,
  });

  try {
    const resend = new Resend(resendApiKey);
    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: recipient,
      replyTo,
      subject,
      html,
      text,
      tags: [
        { name: "program", value: "forge-ai" },
        { name: "event", value: "payment_captured" },
        { name: "payment_id", value: payment.id },
      ],
    });
    if (result.error) {
      console.error("Resend error", result.error);
      // Return 500 so Razorpay retries
      res.status(500).json({ error: "Email send failed", detail: String(result.error) });
      return;
    }
    console.log(`Sent interview invite to ${recipient} for payment ${payment.id}`);
    res.status(200).json({ ok: true, emailId: result.data?.id, sentTo: recipient });
  } catch (err) {
    console.error("Resend threw", err);
    res.status(500).json({ error: "Email send threw" });
  }
}
