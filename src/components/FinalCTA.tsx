import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section className="relative md:py-32 overflow-hidden py-[6px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 text-center max-w-[720px] mx-auto px-6"
      >
        <p className="section-label mb-6">
          LIMITED INVITES · APPLY NOW
        </p>

        <h2 className="font-bold md:text-[72px] leading-[1.08] tracking-[-0.025em] text-foreground text-2xl">
          Think <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>YCombinator</span> <br />meets an AI hackathon.
        </h2>

        <p className="text-[17px] text-muted-foreground max-w-[460px] mx-auto mt-4 leading-relaxed">
          20 builders. 9 days. One focus.
        </p>

        <button
          onClick={onOpenModal}
          className="mt-8 w-full sm:w-auto sm:min-w-[280px] bg-primary text-primary-foreground font-semibold rounded-full px-10 py-4 text-sm uppercase tracking-wider"
        >
          REQUEST AN INVITE
        </button>

        <p className="text-[13px] text-muted-foreground/40 mt-3">
          Applications reviewed within 48 hours · Not first come, first served
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
