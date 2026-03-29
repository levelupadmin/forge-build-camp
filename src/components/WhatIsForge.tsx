import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
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
      className="text-[16px] md:text-[17px] leading-[1.8] text-center max-w-[640px] mx-auto mb-10"
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
  const [playing, setPlaying] = useState(false);

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
          className="flex flex-col items-center mb-6"
        >
          <p className="text-[64px] md:text-[96px] font-bold leading-[0.95] tracking-[-0.03em] text-foreground px-[60px] text-left pl-[39px] pr-[111px]">
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

        {/* Trailer Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[900px] mx-auto mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-foreground/[0.08] shadow-lg">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
                  alt="Forge AI Residency trailer thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-primary-foreground ml-1" size={32} fill="currentColor" />
                </div>
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 font-semibold tracking-wide z-10">
                  Watch the trailer
                </p>
              </button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Forge AI Residency Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
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
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-primary rounded-xl p-4 md:p-6 text-center min-w-[100px] md:min-w-[130px]"
            >
              <p className="text-primary-foreground font-bold text-[28px] md:text-[36px] leading-none">
                {s.value}
              </p>
              <p className="text-primary-foreground/80 text-[10px] md:text-[12px] uppercase tracking-[0.15em] mt-1 font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIsForge;
