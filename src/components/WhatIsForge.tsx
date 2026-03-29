import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionWrapper from "./SectionWrapper";

function AnimatedNumber({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(motionVal, value, { duration: 1.2, ease: "easeOut" });
    }, delay * 1000);
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return () => { clearTimeout(timeout); unsub(); };
  }, [value, delay, motionVal, rounded]);

  return <span ref={ref}>0</span>;
}

const cards = [
  { value: 20, label: "Builders" },
  { value: 9, label: "Days" },
  { value: 1, label: "Bootcamp" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const WhatIsForge = () => {
  return (
    <SectionWrapper id="what-is-forge">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label text-center mb-6"
        >
          THE RESIDENCY
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-4"
        >
          <p className="text-[18px] md:text-[22px] text-muted-foreground font-medium mb-1">What is the</p>
          <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-foreground">
            <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>Forge</span> AI Residency
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px] md:text-[17px] leading-[1.8] text-muted-foreground text-center max-w-[640px] mx-auto mb-14"
        >
          A 9-day fully residential program where handpicked founders, marketers, and operators learn to build with AI by creating products, automating their business, and creating AI-powered content while living and working alongside a community of like-minded builders and AI experts as their mentors.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative z-10"
        >
          {cards.map((card, i) => (
            <div key={card.label} className="flex items-center gap-4 md:gap-6">
              {i > 0 && (
                <motion.span
                  variants={itemVariants}
                  className="text-[32px] md:text-[48px] font-light text-muted-foreground/25 select-none hidden md:block"
                >
                  ×
                </motion.span>
              )}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: "0 16px 48px hsla(217, 91%, 60%, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative w-[200px] md:w-[220px] py-10 md:py-12 rounded-2xl text-center cursor-default overflow-hidden bg-white border border-black/[0.06] shadow-sm"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
                <p className="text-[56px] md:text-[72px] font-bold text-primary leading-none relative z-10">
                  <AnimatedNumber value={card.value} delay={0.3 + i * 0.15} />
                </p>
                <p className="text-[11px] md:text-[12px] uppercase tracking-[0.14em] text-muted-foreground/60 font-semibold mt-3 relative z-10">
                  {card.label}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIsForge;
