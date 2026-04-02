import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { toolLogos } from "@/lib/toolLogos";
import pillar01 from "/pillars/pillar-01.jpg";
import pillar02 from "/pillars/pillar-02.jpg";
import pillar03 from "/pillars/pillar-03.jpg";

interface PillarData {
  num: string;
  tag: string;
  title: string;
  desc: string;
  builds: string[];
  tools: string[];
  image: string;
  gradient: string;
}

const pillars: PillarData[] = [
  {
    num: "01",
    tag: "PILLAR 01",
    title: "CONTENT",
    desc: "Create content, visuals, and video that used to need a full production team.",
    builds: [
      "AI generated scripts, UGC ads and social media creatives",
      "A content system you can repeat after you leave",
    ],
    tools: ["Higgsfield", "Midjourney", "HeyGen", "ElevenLabs", "Runway"],
    image: pillar01,
    gradient: "linear-gradient(135deg, #0d0818, #1a0d2e)",
  },
  {
    num: "02",
    tag: "PILLAR 02",
    title: "OPERATIONS",
    desc: "Map the manual work in your business and build AI that handles it for you.",
    builds: [
      "2 live AI automations and an AI agent of your choice",
      "A workflow saving at least 5 hours a week, running without you",
    ],
    tools: ["n8n", "Make", "Claude", "OpenAI"],
    image: pillar02,
    gradient: "linear-gradient(135deg, #0a1a0f, #0f1a2e)",
  },
  {
    num: "03",
    tag: "PILLAR 03",
    title: "PRODUCT",
    desc: "Build a working product without writing a single line of code. Spec it, prompt it, ship it.",
    builds: [
      "A functional product or internal tool you can demo live on Day 9",
      "The foundation to keep building back home",
    ],
    tools: ["Lovable", "Replit", "Supabase"],
    image: pillar03,
    gradient: "linear-gradient(135deg, #0a0f1a, #1a0f08)",
  },
];

interface PillarsProps {
  onOpenModal: () => void;
}

const Pillars = ({ onOpenModal }: PillarsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % 3);
      }
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    startTimer();
  };

  return (
    <SectionWrapper id="pillars" label="THE CORE">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        Three{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          Pillars.
        </span>{" "}
        <br />
        Nine days.
      </h2>
      <p className="text-center text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10">
        Each pillar gives you real skills, real tools, and real output you take home.
      </p>

      {/* MOBILE: Image on top, content below */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-5">
          {pillars.map((p, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`flex-1 py-2.5 px-2 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all duration-300 ${
                activeIndex === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-muted-foreground"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={pillars[activeIndex].image}
              alt={pillars[activeIndex].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="text-center">
          <span className="inline-block font-mono text-[11px] text-primary uppercase tracking-wider mb-2">
            {pillars[activeIndex].tag}
          </span>
          <h3 className="font-bold text-[30px] leading-[1.1] mb-3 text-foreground">
            {pillars[activeIndex].title}
          </h3>
          <p className="text-[14px] leading-[1.65] max-w-[340px] mx-auto mb-5 text-muted-foreground">
            {pillars[activeIndex].desc}
          </p>

          {/* Tool logos */}
          <div className="flex items-center justify-center mb-5">
            {pillars[activeIndex].tools.map((t, ti) => (
              <div key={t} style={{ marginLeft: ti > 0 ? "-6px" : 0 }}>
                <div className="w-9 h-9 rounded-full bg-white/90 border border-white/20 flex items-center justify-center overflow-hidden p-1.5">
                  <img src={toolLogos[t] || ""} alt={t} className="w-full h-full object-contain" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* What you'll build */}
          <div className="text-left max-w-[320px] mx-auto">
            <span className="font-bold text-[13px] text-foreground block mb-2">What you'll build</span>
            {pillars[activeIndex].builds.map((b) => (
              <p key={b} className="text-[13px] leading-relaxed text-muted-foreground mb-1">
                <span className="text-primary mr-2">→</span>{b}
              </p>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 h-[2px] bg-foreground/10 rounded-full overflow-hidden">
          <div key={`progress-mobile-${activeIndex}`} className="h-full bg-primary pillar-progress-bar" />
        </div>
      </div>

      {/* DESKTOP: Full-bleed hero with thumbnail cards */}
      <div
        className="hidden md:block relative rounded-2xl overflow-hidden h-[600px]"
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {/* Full-bleed background image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${pillars[activeIndex].image})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.25) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Content layer */}
        <div className="relative z-10 flex h-full">
          {/* Left: Active pillar content */}
          <div className="flex-1 flex flex-col justify-end p-12 pr-8 max-w-[60%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <span className="inline-block bg-primary text-primary-foreground text-[12px] font-semibold px-3.5 py-1.5 rounded-md mb-4">
                  {pillars[activeIndex].tag}
                </span>
                <h3 className="font-bold text-[56px] leading-[1.0] mb-4 text-white">
                  {pillars[activeIndex].title}
                </h3>
                <p className="text-[16px] leading-[1.7] max-w-[480px] mb-6 text-white/65">
                  {pillars[activeIndex].desc}
                </p>

                {/* Tool logos */}
                <div className="flex items-center mb-6 gap-[-6px]">
                  {pillars[activeIndex].tools.map((t, ti) => (
                    <div key={t} className="group relative" style={{ marginLeft: ti > 0 ? "-6px" : 0 }}>
                      <div className="w-10 h-10 rounded-full bg-white/90 border border-white/20 flex items-center justify-center overflow-hidden p-1.5 transition-transform group-hover:scale-110">
                        <img src={toolLogos[t] || ""} alt={t} className="w-full h-full object-contain" />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>

                {/* What you'll build */}
                <div className="mt-2">
                  <span className="font-bold text-[14px] text-white block mb-2">What you'll build</span>
                  {pillars[activeIndex].builds.map((b) => (
                    <p key={b} className="text-[14px] leading-relaxed text-white/70">
                      <span className="text-primary mr-2">→</span>{b}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Thumbnail cards for inactive pillars only */}
          <div className="flex items-end gap-4 p-8 pl-0 pb-12">
            {pillars
              .map((p, i) => ({ p, i }))
              .filter(({ i }) => i !== activeIndex)
              .map(({ p, i }) => (
                <div
                  key={i}
                  onClick={() => handleClick(i)}
                  className="relative rounded-xl overflow-hidden cursor-pointer w-[200px] h-[280px] transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col justify-end h-full p-4">
                    <span className="font-mono text-[9px] text-primary uppercase tracking-wider mb-1">
                      {p.tag}
                    </span>
                    <span className="font-semibold text-[15px] text-white leading-tight">
                      {p.title}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
          <div key={`progress-desktop-${activeIndex}`} className="h-full bg-primary pillar-progress-bar" />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <button
          onClick={onOpenModal}
          className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
        >
          Request an Invite
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Pillars;
