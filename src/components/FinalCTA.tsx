import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-40 bg-black"
      style={{
        ["--foreground" as string]: "0 0% 98%",
        ["--muted-foreground" as string]: "0 0% 100% / 0.55",
      }}
    >
      {/* Edge rays — signature */}
      <div className="forge-edges" aria-hidden />
      <div className="forge-grain" aria-hidden />

      {/* Centered ambient glow */}
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
          Cohort 01 · 20 invites · June – July 2026
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

        <p className="mt-10 text-[16px] md:text-[18px] text-white/65 max-w-[520px] mx-auto leading-[1.6]">
          Think YCombinator meets an AI hackathon — 20 builders, 9 days, one focus.
          You leave with three real builds and a network you'll talk to every week.
        </p>

        <button
          onClick={onOpenModal}
          className="group mt-10 inline-flex items-center gap-2.5 bg-[#1A6AFF] text-white font-semibold rounded-full px-9 py-4 text-[13px] tracking-[0.16em] uppercase btn-glow"
        >
          Request an invite
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
            <path d="M1 7h12m-5-5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
