import { useEffect, useMemo } from "react";
import { CheckCircle2 } from "lucide-react";
import forgeLogo from "@/assets/forge-logo.png";
import { fireGoogleAdsConversion, CONVERSION_LABELS } from "@/lib/gtag";

/**
 * Razorpay payment link applicants are sent to after submitting the Tally form.
 * Update this constant if the payment link changes.
 */
const RAZORPAY_URL = "https://rzp.io/rzp/forge-ai"; // TODO: replace with the real Razorpay URL

/** How long to show the confirmation screen before auto-redirecting. */
const REDIRECT_DELAY_MS = 2000;

/**
 * Pages user lands on right after submitting the Tally application form.
 * Fires the Google Ads "Application Submitted" conversion (primary bidding goal),
 * then auto-forwards to Razorpay with all UTMs / click IDs preserved.
 */
const ThankYou = () => {
  // Build the Razorpay URL with all incoming UTM/click-ID parameters forwarded.
  const nextUrl = useMemo(() => buildNextUrl(RAZORPAY_URL), []);

  useEffect(() => {
    // Fire Google Ads conversion (Application Submitted).
    // Token value of 1 INR — Google needs *some* numeric value to optimize for it.
    fireGoogleAdsConversion(CONVERSION_LABELS.applicationSubmitted, {
      value: 1,
      currency: "INR",
    });

    // Auto-redirect to Razorpay after a short delay so the conversion has time to fire.
    const timer = setTimeout(() => {
      window.location.href = nextUrl;
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timer);
  }, [nextUrl]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-[460px] w-full">
        <img src={forgeLogo} alt="The Forge AI" className="h-10 mx-auto mb-10 dark:invert" />

        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-6">
          <CheckCircle2 className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>

        <h1
          className="font-bold tracking-[-0.02em] leading-[1.1] text-foreground mb-4"
          style={{ fontSize: "clamp(28px, 5vw, 40px)" }}
        >
          Application <span className="font-editorial italic text-primary">received.</span>
        </h1>

        <p className="text-muted-foreground text-[15px] md:text-[16px] leading-[1.6] mb-10">
          Now complete your <span className="font-semibold text-foreground">₹900 application fee</span> to
          confirm your interview slot. Redirecting you to payment…
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/80 font-mono uppercase tracking-[0.18em]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Securely handing off
        </div>

        <p className="mt-8 text-[12px] text-muted-foreground/70">
          Not redirected?{" "}
          <a href={nextUrl} className="text-primary font-semibold underline underline-offset-4">
            Continue to payment manually
          </a>
        </p>
      </div>
    </main>
  );
};

/**
 * Build the redirect URL with UTM/click-ID params forwarded.
 * Defensively merges incoming params onto the destination so Razorpay's success
 * webhook can surface attribution data back when the user pays.
 */
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

export default ThankYou;
