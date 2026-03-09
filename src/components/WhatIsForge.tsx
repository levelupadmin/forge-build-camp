import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { number: "24", label: "Builders" },
  { number: "15", label: "Days" },
  { number: "3", label: "Pillars" },
];

const WhatIsForge = () => {
  return (
    <SectionWrapper id="what-is-forge" label="THE RESIDENCY">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-6">
        What is the Forge<br />AI Residency?
      </h2>

      <p className="text-[17px] leading-[1.75] text-muted-foreground text-center max-w-[600px] mx-auto mb-12">
        A fully residential, 15-day intensive where you step away from everything
        and do one thing — learn to build with AI. No fluff. No theory. Just building,
        every single day, surrounded by serious people.
      </p>

      <div className="flex items-center justify-center gap-8 md:gap-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-[48px] md:text-[64px] font-bold text-primary leading-none">
              {s.number}
            </p>
            <p className="text-[13px] text-muted-foreground/60 uppercase tracking-wider font-semibold mt-2">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhatIsForge;
