import { motion } from "framer-motion";
import { Mail, FileCheck, Plane } from "lucide-react";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const steps = [
  { icon: Mail, label: "1. Apply", body: "~3 minutes. 7 short questions about you and what you want to build." },
  { icon: FileCheck, label: "2. Hear back in 48 hours", body: "If you're a fit, you'll get a call to confirm details. No pressure, no payment yet." },
  { icon: Plane, label: "3. Pay the program fee", body: "Only after you're accepted and choose to confirm your seat. Refundable until June 1." },
];

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-36 bg-black"
      style={{
        ["--foreground" as string]: "0 0% 98%",
        ["--muted-foreground" as string]: "0 0% 100% / 0.55",
      }}
    >
      {/* Edge rays — signature */}
      <div className="forge-edges" aria-hidden />
      <div className="forge-grain" aria-hidden />
      <div className="forge-glow-center" aria-hidden />

      {/* Hairline borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-[960px] mx-auto px-6"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
          Cohort 01 · 20 invites · June 27 – July 4, 2026 · Dharamshala
        </span>

        <h2
          className="mt-8 font-bold tracking-[-0.03em] leading-[0.98] text-white"
          style={{ fontSize: "clamp(44px, 8.5vw, 110px)" }}
        >
          <span className="block">
            <span className="font-editorial italic text-primary">Build.</span>
          </span>
          <span className="block">Automate.</span>
          <span className="block">
            <span className="font-editorial italic text-primary">Launch.</span>
          </span>
        </h2>

        <p className="mt-10 text-[16px] md:text-[18px] text-white/65 max-w-[560px] mx-auto leading-[1.6]">
          Think YCombinator meets an AI hackathon — 20 builders, 9 days, one focus.
          You leave with three real builds and a network you'll talk to every week.
        </p>

        {/* "What happens next" — three-step reassurance strip.
            Sets expectations BEFORE the click so users don't bounce mid-form. */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 max-w-[820px] mx-auto text-left">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:p-5"
              >
                <div className="flex items-center gap-2 text-white/85">
                  <Icon size={16} className="text-primary shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]">{s.label}</span>
                </div>
                <p className="mt-2 text-[13px] text-white/65 leading-[1.55]">{s.body}</p>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={onOpenModal}
          data-cta="final-cta"
          className="group mt-12 inline-flex items-center gap-2.5 bg-[#1A6AFF] hover:bg-[#0F5CE6] text-white font-semibold rounded-full px-9 py-4 text-[13px] tracking-[0.16em] uppercase btn-glow transition-colors"
          aria-label="Apply to the Forge AI Residency Cohort 01"
        >
          Apply to Cohort 01
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
            <path d="M1 7h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="mt-4 font-mono text-[10px] tracking-[0.22em] uppercase text-white/40">
          Reviewed within 48 hours · Not first come, first served
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
