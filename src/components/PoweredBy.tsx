import { motion } from "framer-motion";

const PoweredBy = () => {
  return (
    <section className="py-10 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        <p className="text-[11px] text-muted-foreground/50 uppercase tracking-[0.18em] text-center mb-6 font-semibold">
          Powered by
        </p>
        <div className="flex items-center justify-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/480px-Claude_AI_logo.svg.png"
            alt="Claude AI"
            className="w-7 h-7 object-contain"
          />
          <span className="text-[16px] text-muted-foreground/70 font-semibold tracking-wide">
            Claude
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default PoweredBy;
