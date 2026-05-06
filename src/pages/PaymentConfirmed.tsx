import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import forgeLogo from "@/assets/forge-logo.png";
import { fireGoogleAdsConversion, CONVERSION_LABELS } from "@/lib/gtag";

/** Booking link — applicants are sent here after payment success. */
const BOOKING_URL = "https://calendly.com/levelupedtech/the-forge-ai-interview";

/** Default ₹ value of the application fee — used internally for conversion tracking only, never displayed. */
const DEFAULT_FEE_VALUE = 900;

/** Redirect delay — slightly longer here so applicants notice the payment landed. */
const REDIRECT_DELAY_MS = 3500;

const PaymentConfirmed = () => {
  const { value, transactionId } = useMemo(() => readPaymentContext(), []);
  const nextUrl = useMemo(() => buildNextUrl(BOOKING_URL), []);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fireGoogleAdsConversion(CONVERSION_LABELS.applicationFeePaid, {
      value,
      currency: "INR",
      transactionId,
    });
  }, [value, transactionId]);

  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const pct = Math.min(1, (now - start) / REDIRECT_DELAY_MS);
      setProgress(pct);
      if (pct < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const timer = setTimeout(() => {
      window.location.href = nextUrl;
    }, REDIRECT_DELAY_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [nextUrl]);

  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-16"
      style={{ background: "#000000" }}
    >
      <div className="forge-edges" aria-hidden />
      <div className="forge-grain" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="forge-glow-center" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-[520px] w-full"
      >
        <img src={forgeLogo} alt="The Forge AI" className="h-9 md:h-10 mx-auto mb-12" />

        <h1
          className="font-bold tracking-[-0.025em] leading-[0.98] text-white mb-6"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          Payment <br />
          <span className="font-editorial italic text-[#3D7EFF]">received.</span>
        </h1>

        <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.6] max-w-[380px] mx-auto mb-12">
          Redirecting you to book your interview slot.
        </p>

        {/* Progress strip */}
        <div className="w-full max-w-[280px] mx-auto mb-3">
          <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#3D7EFF]"
              style={{ width: `${progress * 100}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/40 mb-10">
          Opening scheduler
        </p>

        <a
          href={nextUrl}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[12px] font-mono uppercase tracking-[0.18em] transition-colors"
        >
          Continue manually <ArrowRight size={13} />
        </a>
      </motion.div>
    </main>
  );
};

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
