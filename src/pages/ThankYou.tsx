import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import forgeLogo from "@/assets/forge-logo.png";
import { fireGoogleAdsConversion, CONVERSION_LABELS } from "@/lib/gtag";
import { fireTwitterEvent, TWITTER_EVENT_IDS } from "@/lib/twitterPixel";

/** Payment gateway URL — applicants are sent here after submitting the Tally form. */
const PAYMENT_URL = "https://rzp.io/rzp/wpzv8C7I";

/** Redirect delay — long enough to feel intentional, short enough to keep momentum. */
const REDIRECT_DELAY_MS = 3000;

const ThankYou = () => {
  const nextUrl = useMemo(() => buildNextUrl(PAYMENT_URL), []);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fireGoogleAdsConversion(CONVERSION_LABELS.applicationSubmitted, {
      value: 1,
      currency: "INR",
    });
    fireTwitterEvent(TWITTER_EVENT_IDS.formSubmitted, {
      value: 1,
      currency: "INR",
    });
  }, []);

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
          Application <br />
          <span className="font-editorial italic text-[#3D7EFF]">received.</span>
        </h1>

        <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.6] max-w-[380px] mx-auto mb-12">
          Redirecting you to complete your application fee.
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
          Opening payment gateway
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
