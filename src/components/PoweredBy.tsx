import { motion } from "framer-motion";

const partners = [
  "LevelUp Learning",
  "Google AI",
  "OpenAI",
  "Runway",
  "Lovable",
];

const PoweredBy = () => {
  return (
    <section className="py-10 border-t border-[rgba(255,255,255,0.05)]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        <p className="text-[11px] text-forge-dim uppercase tracking-[0.18em] text-center mb-6 font-semibold">
          Powered by
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {partners.map((p) => (
            <span key={p} className="text-[14px] text-forge-dim font-semibold tracking-wide">
              {p}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PoweredBy;
