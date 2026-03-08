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
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {partners.map((p) => (
            <span key={p} className="text-[14px] text-muted-foreground/50 font-semibold tracking-wide">
              {p}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PoweredBy;
