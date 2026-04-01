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
    title: "Generative AI",
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
    title: "AI Automations",
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
    title: "AI Product Building",
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
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-12">
        Three{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          Pillars.
        </span>{" "}
        Nine days.
      </h2>

      {/* MOBILE: Toggle tabs + stacked view */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-4">
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

        <div className="relative rounded-2xl overflow-hidden h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${pillars[activeIndex].image})` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.15) 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 pb-8">
                <span className="font-mono text-[9px] text-[#3B82F6] uppercase tracking-[0.12em] mb-2.5">
                  {pillars[activeIndex].tag}
                </span>
                <h3
                  className="font-serif italic text-[32px] leading-[1.0] mb-3"
                  style={{ color: "#F2EEE8", fontWeight: 900 }}
                >
                  {pillars[activeIndex].title}
                </h3>
                <p className="text-[14px] leading-[1.65] max-w-[340px] mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {pillars[activeIndex].desc}
                </p>

                {/* Tool logos */}
                <div className="flex items-center mb-5">
                  {pillars[activeIndex].tools.map((t, ti) => (
                    <div key={t} className="group relative" style={{ marginLeft: ti > 0 ? "-6px" : 0 }}>
                      <div className="w-9 h-9 rounded-full bg-white/90 border border-white/20 flex items-center justify-center overflow-hidden p-1.5">
                        <img src={toolLogos[t] || ""} alt={t} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {t}
                      </span>
                    </div>
                  ))}
                </div>

                {/* You will build */}
                <div className="mt-1">
                  <span className="font-mono text-[9px] text-[#3B82F6] uppercase tracking-[0.12em] block mb-2">
                    You will build
                  </span>
                  {pillars[activeIndex].builds.map((b) => (
                    <p key={b} className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      <span className="text-[#3B82F6] mr-2">→</span>
                      {b}
                    </p>
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15">
                <div
                  key={`progress-mobile-${activeIndex}`}
                  className="h-full bg-[#3B82F6] pillar-progress-bar"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* DESKTOP: Horizontal accordion */}
      <div
        className="hidden md:flex h-[560px] rounded-2xl overflow-hidden"
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
      >
        {pillars.map((p, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`relative overflow-hidden transition-all duration-[600ms] ease-in-out ${
                isActive ? "cursor-default" : "cursor-pointer"
              }`}
              style={{
                width: isActive ? "65%" : "17.5%",
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${p.image})`,
                  transform: !isActive ? "scale(1)" : "scale(1)",
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: isActive
                    ? "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 100%)"
                    : "rgba(0,0,0,0.72)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "rgba(0,0,0,0.55)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "rgba(0,0,0,0.72)";
                }}
              />

              {/* ACTIVE content */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative z-10 flex flex-col justify-end h-full p-12"
                >
                  <span className="font-mono text-[9px] text-[#3B82F6] uppercase tracking-[0.12em] mb-2.5">
                    {p.tag}
                  </span>
                  <h3
                    className="font-serif italic text-[52px] leading-[1.0] mb-3.5"
                    style={{ color: "#F2EEE8", fontWeight: 900 }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] max-w-[380px] mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {p.desc}
                  </p>

                  {/* Tool logos */}
                  <div className="flex items-center mb-5">
                    {p.tools.map((t, ti) => (
                      <div key={t} className="group relative" style={{ marginLeft: ti > 0 ? "-6px" : 0 }}>
                        <div className="w-9 h-9 rounded-full bg-white/90 border border-white/20 flex items-center justify-center overflow-hidden p-1.5 transition-transform group-hover:scale-110">
                          <img src={toolLogos[t] || ""} alt={t} className="w-full h-full object-contain" />
                        </div>
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* You will build */}
                  <div>
                    <span className="font-mono text-[9px] text-[#3B82F6] uppercase tracking-[0.12em] block mb-2">
                      You will build
                    </span>
                    {p.builds.map((b) => (
                      <p key={b} className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <span className="text-[#3B82F6] mr-2">→</span>
                        {b}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* INACTIVE content — vertical text */}
              {!isActive && (
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div
                    className="flex flex-col items-center gap-4"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    <span className="font-mono text-[9px] text-[#3B82F6] uppercase tracking-[0.12em]">
                      {p.tag}
                    </span>
                    <span className="font-semibold text-[16px]" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {p.title}
                    </span>
                  </div>
                </div>
              )}

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15">
                {isActive && (
                  <div
                    key={`progress-${activeIndex}`}
                    className="h-full bg-[#3B82F6] pillar-progress-bar"
                  />
                )}
              </div>
            </div>
          );
        })}
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
