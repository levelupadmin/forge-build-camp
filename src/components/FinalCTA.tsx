import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA = ({ onOpenModal }: FinalCTAProps) => {
  return (
    <section
      className="relative overflow-hidden py-[6px] md:py-[120px]"
      style={{
        background: "#0A0A0A",
        ["--foreground" as string]: "0 0% 96%",
        ["--muted-foreground" as string]: "0 0% 100% / 0.55",
      }}
    >
      {/* Radial blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 text-center max-w-[720px] mx-auto px-6"
      >

        <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground">
          Think <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>YCombinator</span> <br />meets an AI hackathon.
        </h2>

        <p className="text-[17px] text-muted-foreground max-w-[460px] mx-auto mt-4 leading-relaxed">
          20 builders. 9 days. One focus.
        </p>

        <button
          onClick={onOpenModal}
          className="mt-8 w-full sm:w-auto sm:min-w-[280px] bg-primary text-primary-foreground font-semibold rounded-full px-10 py-4 text-sm uppercase tracking-wider btn-glow"
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
