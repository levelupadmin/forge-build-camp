import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import forgeLogoBlack from "@/assets/forge-ai-logo.png";

const stats = [
  { value: "20", label: "BUILDERS" },
  { value: "9", label: "DAYS" },
  { value: "1", label: "BOOTCAMP" },
];

const descriptionText =
  "A 9-day fully residential program where handpicked founders, marketers, and operators learn to build with AI by creating products, automating their business, and creating AI-powered content while living and working alongside a community of like-minded builders and AI experts as their mentors.";

const ScrollBoldText = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.4"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-[16px] md:text-[17px] leading-[1.2] text-center max-w-[640px] mx-auto mb-10"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return <ScrollWord key={i} word={word} progress={scrollYProgress} start={start} end={end} />;
      })}{" "}
    </p>
  );
};

const ScrollWord = ({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: any;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0.3, 1]);
  const fontWeight = useTransform(progress, [start, end], [400, 700]);
  const color = useTransform(progress, [start, end], [
    "hsl(var(--muted-foreground))",
    "hsl(var(--foreground))",
  ]);

  return (
    <motion.span style={{ opacity, fontWeight, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
};

const WhatIsForge = () => {

  return (
    <SectionWrapper id="what-is-forge">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />


        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center mb-6"
        >
          <p className="md:text-[96px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground px-[60px] text-left pl-[39px] pr-[111px] text-7xl">
            What
          </p>
          <div className="flex items-center gap-3 md:gap-5">
            <p className="text-[64px] md:text-[96px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground">
              is
            </p>
            <img
              src={forgeLogoBlack}
              alt="The Forge AI Residency"
              className="h-[86px] md:h-[132px] dark:invert"
            />
          </div>
        </motion.div>

        <ScrollBoldText text={descriptionText} />

        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[900px] mx-auto mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden border border-foreground/[0.08] shadow-lg">
            <img
              src={`${import.meta.env.BASE_URL}2d652f1e-e754-4017-ade5-55a42e443589.jpg`}
              alt="Forge AI Residency group photo — outdoor team photo"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </motion.div>

        {/* Bento Stat Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 md:gap-4"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 md:gap-4">
              <div className="bg-primary rounded-xl p-4 md:p-6 text-center min-w-[100px] md:min-w-[130px]">
                <p className="text-primary-foreground font-bold text-[28px] md:text-[36px] leading-none">
                  {s.value}
                </p>
                <p className="text-primary-foreground/80 text-[10px] md:text-[12px] uppercase tracking-[0.15em] mt-1 font-semibold">
                  {s.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <span className="text-foreground/30 text-[18px] md:text-[22px] font-light select-none">×</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIsForge;
