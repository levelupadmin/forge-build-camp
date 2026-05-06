import { useEffect, useMemo } from "react";
import { CalendarCheck2 } from "lucide-react";
import forgeLogo from "@/assets/forge-logo.png";
import { fireGoogleAdsConversion, CONVERSION_LABELS } from "@/lib/gtag";

/**
 * Calendly link the applicant is sent to after Razorpay payment success.
 * Update this constant if the booking link changes.
 */
const CALENDLY_URL = "https://calendly.com/forge-by-levelup/interview"; // TODO: replace with the real Calendly URL

/** Default ₹ value of the application fee — used if no value is in the URL. */
const DEFAULT_FEE_VALUE = 900;

/** How long to show the confirmation screen before auto-redirecting. */
const REDIRECT_DELAY_MS = 2500;

/**
 * Page user lands on after Razorpay payment success.
 * Fires the Google Ads "Application Fee Paid" conversion (secondary, tracked but not bid-optimized),
 * then auto-forwards to Calendly with UTM context preserved.
 */
const PaymentConfirmed = () => {
  const { value, transactionId } = useMemo(() => readPaymentContext(), []);
  const nextUrl = useMemo(() => buildNextUrl(CALENDLY_URL), []);

  useEffect(() => {
    fireGoogleAdsConversion(CONVERSION_LABELS.applicationFeePaid, {
      value,
      currency: "INR",
      transactionId,
    });

    const timer = setTimeout(() => {
      window.location.href = nextUrl;
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timer);
  }, [nextUrl, value, transactionId]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-[460px] w-full">
        <img src={forgeLogo} alt="The Forge AI" className="h-10 mx-auto mb-10 dark:invert" />

        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-6">
          <CalendarCheck2 className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>

        <h1
          className="font-bold tracking-[-0.02em] leading-[1.1] text-foreground mb-4"
          style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
        >
          Payment <span className="font-editorial italic text-primary">confirmed.</span>
        </h1>

        <p className="text-muted-foreground text-[15px] md:text-[16px] leading-[1.6] mb-10">
          Last step — book your interview slot with the Forge team. Redirecting you to the calendar…
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/80 font-mono uppercase tracking-[0.18em]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Opening Calendly
        </div>

        <p className="mt-8 text-[12px] text-muted-foreground/70">
          Not redirected?{" "}
          <a href={nextUrl} className="text-primary font-semibold underline underline-offset-4">
            Open the booking page manually
          </a>
        </p>
      </div>
    </main>
  );
};

/** Parse `value` and `transaction_id` from the URL if Razorpay's success redirect supplies them. */
function readPaymentContext(): { value: number; transactionId?: string } {
  if (typeof window === "undefined") return { value: DEFAULT_FEE_VALUE };
  const params = new URLSearchParams(window.location.search);
  const rawValue = params.get("value") ?? params.get("amount");
  const parsed = rawValue ? Number(rawValue) : NaN;
  const value = Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_FEE_VALUE;
  const transactionId =
    params.get("razorpay_payment_id") ||
    params.get("payment_id") ||
    params.get("transaction_id") ||
    undefined;
  return { value, transactionId };
}

function buildNextUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;
  const incoming = window.location.search;
  if (!incoming) return baseUrl;
  try {
    const url = new URL(baseUrl);
    const params = new URLSearchParams(incoming);
    params.forEach((value, key) => {
      if (value) url.searchParams.set(key, value);
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}

export default PaymentConfirmed;
