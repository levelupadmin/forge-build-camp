# Post-Payment Email Pipeline — Setup Guide

This pipeline sends an automated email from `forge@leveluplearning.in` to every
applicant who pays the Forge AI application fee on Razorpay. The email contains a
one-click Calendly link, pre-filled with the applicant's name / email / phone, so
they only need to pick an interview slot.

```
Razorpay payment.captured  ──webhook──▶  /api/razorpay-webhook  ──Resend SDK──▶  applicant's inbox
```

Total setup time: about **30 minutes**, one-time.

---

## 1 · Resend setup (8 minutes)

1. Create an account at **https://resend.com** using `forge@leveluplearning.in`.
2. Go to **Domains → Add Domain → leveluplearning.in**.
3. Resend will show 3 DNS records to add. Open Cloudflare/Route53/whatever hosts
   the `leveluplearning.in` DNS and paste them in. They look like:

   | Type | Name | Value |
   |------|------|-------|
   | TXT  | send | `v=spf1 include:amazonses.com ~all` |
   | TXT  | resend._domainkey | `(long key Resend gives you)` |
   | MX   | feedback-smtp.us-east-1 | `feedback-smtp.us-east-1.amazonses.com` (priority 10) |

   Wait 5–15 minutes, then click **Verify** in Resend. (DKIM propagation is the slow part.)

4. **API Keys → Create API Key** → name it `forge-payment-webhook`, permission
   `Sending access`, full access to the verified domain. Copy the `re_…` value.
   You'll paste it into Vercel in a moment.

---

## 2 · Vercel env vars (2 minutes)

In your Vercel project for `forgebylevelup.com`:

1. **Settings → Environment Variables** → add four:

   | Key | Value | Environments |
   |-----|-------|--------------|
   | `RESEND_API_KEY` | `re_…` from step 1.4 | Production + Preview |
   | `RAZORPAY_WEBHOOK_SECRET` | *(filled in step 3.2 below)* | Production + Preview |
   | `FROM_EMAIL` | `forge@leveluplearning.in` | Production + Preview |
   | `FROM_NAME` | `The Forge by LevelUp` | Production + Preview |

2. Redeploy. Vercel will pick up the function at `/api/razorpay-webhook`.

---

## 3 · Razorpay webhook (5 minutes)

You have **two Razorpay accounts** — the Forge AI application fee is captured on
the **Admin RP** account (`rzp_live_S2svI6zntFhvBx`), not Edtech RP.

1. Log in to Razorpay → switch to the **Admin RP** account.
2. **Settings → Webhooks → Add New Webhook**.
   - **Webhook URL:** `https://www.forgebylevelup.com/api/razorpay-webhook`
   - **Secret:** generate any strong string (e.g. with `openssl rand -base64 32`),
     copy it, paste it back into Vercel as `RAZORPAY_WEBHOOK_SECRET`. Redeploy.
   - **Active Events:** check `payment.captured` only (for now — other events get
     ignored by the function but we keep traffic clean).
   - Save.
3. Razorpay shows the new webhook with a "Test" button — click it. You should get
   a 200 response. (The function will return `"ignored: payment.captured.test event"`
   if Razorpay sent a test rather than a real payment, which is fine.)

---

## 4 · End-to-end test (5 minutes)

The safest test is a real ₹900 payment through the live page (you can refund it
after via Razorpay):

1. Go to `https://www.forgebylevelup.com/ai/` and submit the Tally form.
2. Pay ₹900 on Razorpay using a card or UPI you control.
3. Watch:
   - Vercel → Functions → razorpay-webhook → invocation logs show `200 ok`
   - Resend → Emails → status shows `delivered`
   - You receive the email at the address you entered
4. Click "Book my interview slot" in the email → confirm Calendly loads with
   your name + email + phone + edition prefilled.
5. **Refund the test payment** in Razorpay if it was a real one.

A faster (but less complete) test is to replay a recent real payment:

```bash
# In Razorpay → Webhooks → click the webhook → click "Resend" on a recent
# payment.captured event. The function will fire again and send a duplicate
# email — fine for testing, just let the actual customer know if it was theirs.
```

---

## 5 · Idempotency & failure modes

| Failure | What happens | How we handle |
|---------|--------------|---------------|
| Razorpay webhook duplicate | Function fires twice → duplicate email | Acceptable for v1. If duplicates accumulate, add Upstash Redis dedupe on `payment.id`. |
| Function 500s (e.g. Resend down) | Razorpay retries up to ~24 times over 24h | Function returns 500 → retry handles it automatically. |
| Email lands in spam | Applicant misses it | DKIM/SPF/DMARC on `leveluplearning.in` (step 1) prevents this. Monitor Resend's bounce/spam reports weekly for the first month. |
| Payment amount changes (e.g. ₹900 → ₹999) | Webhook ignores it | Update `FORGE_AI_FEE_PAISE` in `api/razorpay-webhook.ts`. The function also matches by Payment Link ID, so you'd usually only need to update the amount. |

---

## 6 · Expanding to the other programs

To add Filmmaking / Creators / Writing later:
1. Identify each program's Razorpay Payment Link ID (the `pl_*` from the page).
2. Build matching email templates (one per program — different copy, different
   Calendly slug). Keep them in `lib/server/email-templates/`.
3. In `api/razorpay-webhook.ts`, replace the single-program filter with a
   switch:

```ts
const programByLinkId: Record<string, ProgramConfig> = {
  "pl_SYCEPxHQ7BH42S": { slug: "forge-ai", fee: 90000, template: aiTemplate },
  "pl_XYZ":            { slug: "filmmaking", fee: 80000, template: fmTemplate },
  // etc
};
```

This keeps everything one function, one webhook, one Resend domain.
