import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Amber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, hsla(40,100%,47%,0.10), transparent 70%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 text-center max-w-[720px] mx-auto px-6"
      >
        <p className="font-mono text-[11px] text-primary uppercase tracking-[0.18em] mb-6">
          COHORT 01 &middot; DHARAMSHALA &middot; 20 SEATS ONLY
        </p>

        <h2 className="font-syne font-[800] text-[42px] md:text-[72px] leading-[1.08] tracking-[-0.025em] text-foreground">
          9 days from now,<br />you could have built<br /><span className="text-primary">something real.</span>
        </h2>

        <p className="text-[17px] text-forge-muted max-w-[460px] mx-auto mt-4 leading-relaxed">
          Cohort 01 is forming now. 20 seats. The people in this room will be building for years.
        </p>

        <button
          onClick={onOpenModal}
          className="mt-8 w-full sm:w-auto sm:min-w-[280px] bg-primary text-primary-foreground font-semibold rounded-full px-10 py-4 text-lg cta-pulse"
        >
          Request Your Invite →
        </button>

        <p className="text-[13px] text-forge-dim mt-3">
          Applications reviewed within 48 hours &middot; Not first come, first served
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
