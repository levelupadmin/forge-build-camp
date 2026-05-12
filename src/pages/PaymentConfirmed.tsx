import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, CheckCircle2 } from "lucide-react";
import forgeLogo from "@/assets/forge-logo.png";
import { fireGoogleAdsConversion, CONVERSION_LABELS } from "@/lib/gtag";

/** Calendly event for the Forge AI interview */
const CALENDLY_URL = "https://calendly.com/levelupedtech/the-forge-ai-interview";

/** Default ₹ value of the application fee — used internally for conversion tracking only, never displayed. */
const DEFAULT_FEE_VALUE = 900;

/** Razorpay key — public key id, safe to ship to the browser (it's already in the rzp.io page metadata) */
const RAZORPAY_KEY_ID = "rzp_live_S2svI6zntFhvBx";

/**
 * Read the razorpay_payment_id from URL and fetch the user's name/email/phone
 * so we can prefill Calendly. Fails gracefully if Razorpay refuses CORS — the user
 * still gets a working Book Interview button, just without prefill.
 */
type Prefill = { name?: string; email?: string; phone?: string };

async function fetchRazorpayContact(paymentId: string): Promise<Prefill> {
  // The Razorpay payments API can be hit anonymously for public payment-page payments
  // when only the key_id is needed. If this fails (it often does because of CORS),
  // we silently fall back to no prefill — Calendly will just ask the user.
  try {
    const res = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Basic ${btoa(`${RAZORPAY_KEY_ID}:`)}`,
      },
    });
    if (!res.ok) return {};
    const d = await res.json();
    return {
      name: d.notes?.full_name || d.notes?.name || d.email?.split("@")[0],
      email: d.email,
      phone: d.contact,
    };
  } catch {
    return {};
  }
}

interface PaymentContext {
  value: number;
  transactionId?: string;
}

function readPaymentContext(): PaymentContext {
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

/**
 * Build the Calendly URL with prefill query params for name/email/phone
 * and answers for the event's custom fields, so the user only needs to pick a slot.
 *
 * Custom-field mapping (verified via Calendly's event_types/lookup API):
 *   a1 = "Which edition would you like to attend?"  -> "Dharamshala June 2026"
 *   a2 = "Your Whatsapp number"                     -> phone
 *   a3 = "Which category have you applied for?"     -> blank (user picks)
 */
function buildCalendlyUrl(prefill: Prefill, originalSearch: string): string {
  const u = new URL(CALENDLY_URL);
  if (prefill.name)  u.searchParams.set("name", prefill.name);
  if (prefill.email) u.searchParams.set("email", prefill.email);
  if (prefill.phone) u.searchParams.set("a2", prefill.phone);
  u.searchParams.set("a1", "Dharamshala June 2026");
  // Forward any UTM params so attribution survives
  if (originalSearch) {
    const incoming = new URLSearchParams(originalSearch);
    incoming.forEach((value, key) => {
      if (value && key.startsWith("utm_")) u.searchParams.set(key, value);
    });
  }
  return u.toString();
}

const PaymentConfirmed = () => {
  const { value, transactionId } = useMemo(() => readPaymentContext(), []);
  const [prefill, setPrefill] = useState<Prefill>({});
  const [embedReady, setEmbedReady] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = useMemo(
    () => buildCalendlyUrl(prefill, typeof window !== "undefined" ? window.location.search : ""),
    [prefill],
  );

  // Fire the application-fee-paid conversion as before
  useEffect(() => {
    fireGoogleAdsConversion(CONVERSION_LABELS.applicationFeePaid, {
      value,
      currency: "INR",
      transactionId,
    });
  }, [value, transactionId]);

  // Fetch the user's contact info from Razorpay so we can prefill Calendly
  useEffect(() => {
    if (!transactionId) return;
    let cancelled = false;
    fetchRazorpayContact(transactionId).then((p) => {
      if (!cancelled) setPrefill(p);
    });
    return () => {
      cancelled = true;
    };
  }, [transactionId]);

  // Load the Calendly inline-embed widget. If the script fails (privacy tools, etc.),
  // the page still works via the explicit CTA below — no auto-redirect, no dead end.
  useEffect(() => {
    const SCRIPT_ID = "calendly-widget-js";
    if (document.getElementById(SCRIPT_ID)) {
      setEmbedReady(true);
      return;
    }
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = () => setEmbedReady(true);
    s.onerror = () => setEmbedReady(false);
    document.body.appendChild(s);

    // Stylesheet
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);
  }, []);

  // Once both the script and prefill are ready, initialise the inline widget.
  useEffect(() => {
    if (!embedReady) return;
    const w = window as unknown as {
      Calendly?: { initInlineWidget: (opts: Record<string, unknown>) => void };
    };
    if (!w.Calendly || !widgetRef.current) return;
    // Clear any previous mount
    widgetRef.current.innerHTML = "";
    w.Calendly.initInlineWidget({
      url: calendlyUrl,
      parentElement: widgetRef.current,
      prefill: {
        name: prefill.name,
        email: prefill.email,
        customAnswers: { a1: "Dharamshala June 2026", a2: prefill.phone || "" },
      },
      utm: {},
    });
  }, [embedReady, calendlyUrl, prefill]);

  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 py-10 md:py-16"
      style={{ background: "#000000" }}
    >
      <div className="forge-edges" aria-hidden />
      <div className="forge-grain" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[920px] mx-auto"
      >
        <div className="text-center">
          <img src={forgeLogo} alt="The Forge AI" className="h-9 md:h-10 mx-auto mb-8" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono uppercase tracking-[0.18em] mb-6">
            <CheckCircle2 size={14} />
            Payment received
          </div>

          <h1
            className="font-bold tracking-[-0.025em] leading-[0.98] text-white mb-5"
            style={{ fontSize: "clamp(34px, 5.5vw, 60px)" }}
          >
            One last step:{" "}
            <span className="font-editorial italic text-[#3D7EFF]">book your interview.</span>
          </h1>

          <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.55] max-w-[540px] mx-auto mb-2">
            Pick a 20-minute slot below. It's not a quiz — just a real conversation with our admissions team.
          </p>
          <p className="text-white/40 text-[12px] md:text-[13px] mb-8">
            Spots are limited. The sooner you book, the more flexibility you'll have.
          </p>

          {/* Explicit, primary CTA — works even if the inline embed below fails */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="payment-confirmed-primary"
              className="group inline-flex items-center gap-2.5 bg-[#1A6AFF] hover:bg-[#0F5CE6] text-white font-semibold rounded-full px-9 py-4 text-[13px] tracking-[0.16em] uppercase btn-glow transition-colors"
            >
              <Calendar size={15} />
              Book my interview slot
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-[11px] tracking-[0.06em] text-white/45">
              Opens in a new tab so this page stays safe as a fallback.
            </p>
          </div>
        </div>

        {/* Inline Calendly embed. Gracefully degrades if the widget JS fails to load. */}
        <div className="relative mt-4">
          <div
            ref={widgetRef}
            className="calendly-inline-widget rounded-xl overflow-hidden"
            style={{ minWidth: 320, height: 720, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
            data-url={calendlyUrl}
          />
          {!embedReady && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white/50 text-[13px] text-center max-w-[360px] px-6">
                Loading scheduler… if this doesn't render in a few seconds, use the <span className="text-white">Book my interview slot</span> button above.
              </p>
            </div>
          )}
        </div>

        {/* Fallback — email recovery path */}
        <div className="mt-10 md:mt-12 max-w-[560px] mx-auto rounded-xl border border-white/10 bg-white/[0.02] p-5 md:p-6 flex items-start gap-3">
          <Mail size={18} className="text-[#3D7EFF] shrink-0 mt-0.5" />
          <div className="text-left">
            <p className="text-white text-[14px] font-semibold mb-1">Booked it? You're done.</p>
            <p className="text-white/55 text-[13px] leading-[1.55]">
              You'll get a calendar invite to <span className="text-white">{prefill.email || "your email"}</span> right after you pick a slot. If you can't book right now, save this link and come back to it:
            </p>
            <p className="mt-3 font-mono text-[11px] text-white/70 break-all bg-black/40 rounded-md px-3 py-2 border border-white/10">
              {CALENDLY_URL}
            </p>
            <p className="mt-3 text-white/40 text-[12px]">
              Questions? Email{" "}
              <a href="mailto:forge@leveluplearning.in" className="text-[#3D7EFF] hover:underline">
                forge@leveluplearning.in
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default PaymentConfirmed;
