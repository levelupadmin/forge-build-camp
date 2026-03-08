import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  const scrollY = useParallax();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
      <div className="absolute inset-0 dot-grid" />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, hsla(40,100%,47%,0.10), transparent 70%)",
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.1}px))`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 text-center max-w-[720px] mx-auto px-6"
      >
        <p className="text-[11px] text-primary uppercase tracking-[0.18em] mb-6 font-semibold">
          COHORT 01 · LIMITED SEATS
        </p>

        <h2 className="font-bold text-[42px] md:text-[72px] leading-[1.08] tracking-[-0.025em] text-foreground">
          9 days from now,<br />you could have built<br /><span className="text-primary">something real.</span>
        </h2>

        <p className="text-[17px] text-muted-foreground max-w-[460px] mx-auto mt-4 leading-relaxed">
          Cohort 01 is forming now. The people in this room will be building for years.
        </p>

        <button
          onClick={onOpenModal}
          className="mt-8 w-full sm:w-auto sm:min-w-[280px] bg-primary text-primary-foreground font-semibold rounded-full px-10 py-4 text-lg cta-pulse"
        >
          Request Your Invite
        </button>

        <p className="text-[13px] text-muted-foreground/40 mt-3">
          Applications reviewed within 48 hours · Not first come, first served
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
