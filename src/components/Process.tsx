import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const phases = [
  {
    num: "01",
    verb: "Learn",
    desc: "Master the AI mindset, tools, and frameworks. Understand how AI thinks before you build with it.",
  },
  {
    num: "02",
    verb: "Build",
    desc: "Create real products, automations, and content. Ship something tangible every single day.",
  },
  {
    num: "03",
    verb: "Launch",
    desc: "Demo Day. Present what you built. Leave with proof of work, not just notes.",
  },
];

const Process = () => {
  return (
    <SectionWrapper label="THE ARC">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-16">
        Nine days. One{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          narrative.
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-[960px] mx-auto">
        {phases.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative group"
          >
            {/* Large watermark number */}
            <span className="block font-bold text-[120px] md:text-[160px] leading-none text-foreground/[0.04] select-none -mb-12 md:-mb-16">
              {p.num}
            </span>

            {/* Accent line */}
            <div className="w-10 h-[2px] bg-primary mb-5" />

            {/* Verb */}
            <h3 className="font-serif italic text-[32px] md:text-[40px] text-foreground font-bold leading-tight mb-3">
              {p.verb}
            </h3>

            {/* Description */}
            <p className="text-[15px] text-muted-foreground leading-[1.8]">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Process;
