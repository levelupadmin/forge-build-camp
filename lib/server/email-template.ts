/**
 * Branded "your application fee is in, here's your Calendly link" email.
 * Pure functions, no SDK deps — just produces { html, text, subject }.
 */

interface InviteArgs {
  name: string;
  email: string;
  phone?: string;
  paymentId: string;
  feeRupees: number;
}

/** Forge AI Calendly event slug. Single source of truth — matches PaymentConfirmed.tsx. */
const CALENDLY_BASE = "https://calendly.com/levelupedtech/the-forge-ai-interview";

function buildCalendlyUrl(args: InviteArgs): string {
  const u = new URL(CALENDLY_BASE);
  if (args.name)  u.searchParams.set("name", args.name);
  if (args.email) u.searchParams.set("email", args.email);
  // Custom-field answers (a1, a2, a3 map to the event's custom_fields in order):
  u.searchParams.set("a1", "Dharamshala June 2026");        // "Which edition would you like to attend?"
  if (args.phone) u.searchParams.set("a2", args.phone);     // "Your Whatsapp number"
  // a3 = "Which category have you applied for?" — applicant chooses (Grant / Non-Grant)
  // UTM tag the email so we can attribute booking clicks back to the email send
  u.searchParams.set("utm_source", "email");
  u.searchParams.set("utm_medium", "transactional");
  u.searchParams.set("utm_campaign", "forge-ai-payment-confirmed");
  return u.toString();
}

export function buildInterviewInviteEmail(args: InviteArgs) {
  const calendlyUrl = buildCalendlyUrl(args);
  const firstName = args.name.split(" ")[0] || args.name;
  const subject = "You're in. Now book your Forge AI interview.";

  // Plain-text version — for clients that don't render HTML
  const text =
`Hey ${firstName},

Your application fee is in. Payment ID: ${args.paymentId}.

You have one last step: a 20-minute interview with our admissions team. Not a quiz, not a test — a real conversation to see if you're the kind of person who builds things, breaks things, and drags others up with them.

Book your slot here:
${calendlyUrl}

We've pre-filled your details. You just need to pick a time that works.

A few notes:
  • Spots are limited. The sooner you book, the more flexibility you'll have.
  • The interview is on Zoom. Show up with a stable connection, working mic + camera, and a quiet corner.
  • Reschedules are fine if life happens — but try to lock something in this week.
  • If you get in, you'll pay 20% of the program fee to hold your spot.

Questions? Just reply to this email.

— the Forge by LevelUp Learning
forge@leveluplearning.in
`;

  // HTML version — keep it simple, table-based, inline styles (Gmail-safe)
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'DM Sans',Helvetica,Arial,sans-serif;color:#E8E8E8;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0A0A0F;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;background:#0E0E14;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr><td style="padding:32px 32px 8px;">
            <div style="display:inline-block;padding:4px 10px;background:rgba(16,185,129,0.10);border:1px solid rgba(16,185,129,0.30);border-radius:999px;color:#34D399;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">
              Payment received
            </div>
          </td></tr>

          <!-- Headline -->
          <tr><td style="padding:16px 32px 4px;">
            <h1 style="margin:0;font-size:30px;line-height:1.15;font-weight:700;color:#F5F5F5;letter-spacing:-0.02em;">
              You're in, ${firstName}.<br/>
              <span style="font-style:italic;color:#3D7EFF;font-family:Georgia,'Times New Roman',serif;font-weight:700;">Now book your interview.</span>
            </h1>
          </td></tr>

          <!-- Body copy -->
          <tr><td style="padding:18px 32px 8px;">
            <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:rgba(255,255,255,0.72);">
              Your application fee is in. One last step — a 20-minute conversation with our admissions team. Not a quiz. A real conversation to see if you're the kind of person who builds things, breaks things, and drags others up with them.
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:rgba(255,255,255,0.72);">
              We've pre-filled your details on the booking page. You just pick a time.
            </p>
          </td></tr>

          <!-- Primary CTA -->
          <tr><td style="padding:8px 32px 24px;" align="center">
            <a href="${calendlyUrl}" style="display:inline-block;background:#1A6AFF;color:#FFFFFF;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:999px;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;">
              Book my interview slot
            </a>
            <div style="margin-top:10px;font-size:11px;color:rgba(255,255,255,0.45);letter-spacing:0.05em;">
              Spots are limited — sooner you book, more flexibility you'll have.
            </div>
          </td></tr>

          <!-- The fine print -->
          <tr><td style="padding:8px 32px 4px;">
            <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:20px;">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:600;">A few notes</p>
              <ul style="margin:0;padding:0 0 0 18px;color:rgba(255,255,255,0.65);font-size:13px;line-height:1.65;">
                <li style="margin-bottom:6px;">Interview is on Zoom. Bring a working mic + camera and a quiet corner.</li>
                <li style="margin-bottom:6px;">Try to lock a time in this week. Reschedules are fine but try not to.</li>
                <li style="margin-bottom:6px;">If you're accepted, you'll pay <strong style="color:#FFF;">20% of the program fee</strong> to hold your spot.</li>
                <li style="margin-bottom:6px;">Application fee is <strong style="color:#FFF;">fully refundable</strong> if you're not accepted.</li>
              </ul>
            </div>
          </td></tr>

          <!-- Backup link -->
          <tr><td style="padding:20px 32px 4px;">
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:14px 16px;">
              <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.45);font-weight:600;">
                If the button doesn't work
              </p>
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.65);word-break:break-all;font-family:Menlo,Consolas,monospace;">
                <a href="${calendlyUrl}" style="color:#3D7EFF;text-decoration:none;">${calendlyUrl}</a>
              </p>
            </div>
          </td></tr>

          <!-- Footer -->
          <tr><td style="padding:28px 32px 32px;">
            <p style="margin:0 0 8px;font-size:12px;color:rgba(255,255,255,0.50);line-height:1.6;">
              Questions? Just reply to this email or write to <a href="mailto:forge@leveluplearning.in" style="color:#3D7EFF;text-decoration:none;">forge@leveluplearning.in</a>.
            </p>
            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.30);line-height:1.5;">
              — the Forge by LevelUp Learning<br/>
              Payment reference: ${args.paymentId} · ₹${args.feeRupees.toFixed(0)} application fee
            </p>
          </td></tr>

        </table>

        <p style="max-width:560px;margin:14px auto 0;font-size:11px;color:rgba(255,255,255,0.30);text-align:center;line-height:1.5;">
          You're receiving this email because you applied to the Forge AI Residency and paid the application fee.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { html, text, subject };
}
