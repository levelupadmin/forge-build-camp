import { motion } from "framer-motion";

const stats = ["600+ Alumni", "25+ Editions", "400+ Projects", "11 Cities"];

const StatsStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full border-t border-b border-border/30 bg-background/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 md:gap-5 py-4 px-6 text-[12px] md:text-[13px] font-mono uppercase tracking-wider text-muted-foreground/70">
        {stats.map((stat, i) => (
          <span key={stat} className="flex items-center gap-3 md:gap-5">
            {i > 0 && <span className="w-px h-3 bg-muted-foreground/30" />}
            <span>{stat}</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsStrip;
