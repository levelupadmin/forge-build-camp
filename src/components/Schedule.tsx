import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading, { Accent } from "./SectionHeading";

import imgOnlinePrep from "@/assets/schedule-online-prep.png";
import imgDay1 from "@/assets/11de0180-9fd9-4966-a4a4-aa091c0adaf9.png";
import imgDays23 from "@/assets/schedule-days23-v2.png";
import imgDays45 from "@/assets/schedule-days45.png";
import imgDays678 from "@/assets/schedule-days678.jpg";
import imgDay9 from "@/assets/8254fb1b-ea7c-433b-b7a4-8796e3238dd5.jpg";
import imgAIHills from "@/assets/schedule-ai-hills.jpg";
import imgAIBeach from "@/assets/schedule-ai-beach.jpg";
import imgAIGroup from "@/assets/schedule-ai-group.jpg";

interface ScheduleDay {
  key: string;
  label: string;
  subtitle: string;
  prose: string;
  image: string;
}

const days: ScheduleDay[] = [
  { key: "prep", label: "ONLINE PREP", subtitle: "Five sessions before you board the plane",
    prose: "Before you arrive, we hand you the tools. Five sessions to install Claude, Claude Code, n8n, Supabase, Vercel, and lock the spec of what you will build. By the time you land, you are not learning. You are already building.",
    image: imgOnlinePrep },
  { key: "d1", label: "DAY 1", subtitle: "Arrival. The Psychology of Storytelling.",
    prose: "You touch down. You meet the room. Rahul opens the week with the psychology behind every product, every pitch, every cohort. Tonight, the building starts.",
    image: imgDay1 },
  { key: "d2", label: "DAY 2", subtitle: "Product I. Spec It. Make It Intelligent.",
    prose: "How LLMs actually work. The ₹999 problem-framing test. System design without code. By dinner you have written the spec for your real product. Ankur walks you into your first MCP tool with Claude Code.",
    image: imgAIHills },
  { key: "d3", label: "DAY 3", subtitle: "Product II. Ship It. Prove It.",
    prose: "Production architecture. Messages API. Streaming. Prompt caching. Payments. End of day, Build One is live on a real URL. With an eval scorecard to prove it works.",
    image: imgDays45 },
  { key: "d4", label: "DAY 4", subtitle: "Operations I. Automate It, Then Make It Think.",
    prose: "n8n unlocks the layer beneath your product. Triggers, steps, the think-act-observe loop. A ticket-classifying support agent. By the end of day, your apps connect to AI through MCP, and you have a personal assistant that knows your work.",
    image: imgAIBeach },
  { key: "d5", label: "DAY 5", subtitle: "Operations II. Connect It, Ground It, Give It a Voice.",
    prose: "Browser agents that fill forms while you sleep. RAG that grounds your agents in your own docs. Voice agents that handle outbound calls. Parth walks you through it, then sits with you one on one.",
    image: imgDays23 },
  { key: "d6", label: "DAY 6", subtitle: "Operations III. The Full Pipeline.",
    prose: "Multi-agent orchestration. Human-in-the-loop. An invoice and payment assistant. Then we take the work outside. An outdoor hackathon ends with the golden-hour showcase. Build Two ships.",
    image: imgAIGroup },
  { key: "d7", label: "DAY 7", subtitle: "Demo Day + the 90-Day Roadmap.",
    prose: "Eight minutes each. No slides. Just real working demos in front of the room. Then your 90-day commitments, locked in front of the cohort. Then home, but you take the tribe with you.",
    image: imgDay9 },
];

const Schedule = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const tabStripRef = useRef<HTMLDivElement>(null);
  const didMountRef = useRef(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll-driven card change: the sentinel is (days.length * 90vh) tall.
  // As the user scrolls through it, scrollYProgress goes 0 -> 1, mapped to days[0..N-1].
  const { scrollYProgress } = useScroll({
    target: sentinelRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(days.length - 1, Math.max(0, Math.floor(latest * days.length)));
    setActiveIdx(idx);
  });

  // Auto-scroll the strip horizontally (skip on first mount to avoid page jump)
  useEffect(() => {
    if (!didMountRef.current) { didMountRef.current = true; return; }
    const strip = tabStripRef.current;
    if (!strip) return;
    const activeBtn = strip.querySelector(`[data-day-idx="${activeIdx}"]`) as HTMLElement | null;
    if (activeBtn && strip.scrollWidth > strip.clientWidth) {
      const stripRect = strip.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offsetLeft = btnRect.left - stripRect.left + strip.scrollLeft - (stripRect.width - btnRect.width) / 2;
      strip.scrollTo({ left: offsetLeft, behavior: "smooth" });
    }
  }, [activeIdx]);

  const day = days[activeIdx];

  // Manual navigation: scroll the page by a fraction of the sentinel height
  const scrollToDay = (idx: number) => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const rect = sentinel.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const target = sectionTop + (rect.height * idx) / days.length + 1;
    window.scrollTo({ top: target, behavior: "smooth" });
  };
  const goPrev = () => scrollToDay(Math.max(0, activeIdx - 1));
  const goNext = () => scrollToDay(Math.min(days.length - 1, activeIdx + 1));

  return (
    <section id="schedule" className="bg-background">
      {/* Tall sentinel that drives scroll progress. Sticky inner panel stays in view through 8x viewport heights. */}
      <div
        ref={sentinelRef}
        className="relative"
        style={{ height: `${days.length * 90}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-background py-10 md:py-14">
          <div className="max-w-[1300px] w-full mx-auto px-6 lg:px-12 py-2 md:py-4">
            <div className="text-center mb-4 md:mb-6">
              <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/50">
                THE GAMEPLAN
              </span>
              <h2 className="font-bold text-[26px] md:text-[40px] leading-[1.05] tracking-[-0.02em] text-foreground mt-2 md:mt-3">
                <span className="font-editorial italic">Seven&nbsp;days.</span> Two builds.{" "}
                <span className="text-foreground/55">One unforgettable week.</span>
              </h2>
            </div>

            {/* Day picker strip */}
            <div ref={tabStripRef} className="-mx-6 lg:mx-0 overflow-x-auto scrollbar-hide mb-4 md:mb-6">
              <div className="px-6 lg:px-0 flex gap-1.5 md:gap-2 min-w-max justify-center">
                {days.map((d, i) => (
                  <button
                    key={d.key}
                    data-day-idx={i}
                    onClick={() => scrollToDay(i)}
                    className={`shrink-0 px-3 md:px-4 py-2 border transition-all text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-mono ${
                      activeIdx === i
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-foreground/15 text-foreground/45 hover:text-foreground/75 hover:border-foreground/30"
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Single carousel: image + text crossfade */}
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-12 items-stretch max-w-[1100px] mx-auto">
              {/* LEFT: image */}
              <div className="relative aspect-[16/10] md:aspect-[3/2] lg:aspect-[4/5] max-h-[60vh] lg:max-h-[65vh] overflow-hidden bg-foreground/5">
                <AnimatePresence>
                  <motion.img
                    key={day.key + "-img"}
                    src={day.image}
                    alt={day.subtitle}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5">
                  <span className="font-mono text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white inline-block bg-black/55 backdrop-blur-sm px-2.5 py-1 border border-white/25">
                    {day.label}
                  </span>
                </div>

                {/* Arrows */}
                <button
                  onClick={goPrev}
                  className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white transition-colors border border-white/25"
                  aria-label="Previous day"
                >
                  <ChevronLeft size={16} strokeWidth={1.8} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white transition-colors border border-white/25"
                  aria-label="Next day"
                >
                  <ChevronRight size={16} strokeWidth={1.8} />
                </button>

                {/* Progress bar */}
                <div className="absolute top-2 md:top-3 left-3 right-3 flex gap-1">
                  {days.map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-[2px] transition-all duration-500 ${
                        activeIdx >= i ? "bg-white" : "bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: prose */}
              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={day.key + "-text"}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/55">
                        {String(activeIdx + 1).padStart(2, "0")} / {String(days.length).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-foreground/15" />
                    </div>
                    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-foreground/55">
                      {day.label}
                    </span>
                    <h3 className="font-editorial italic text-[22px] md:text-[30px] lg:text-[34px] text-foreground mt-1.5 mb-3 md:mb-4 leading-[1.1] tracking-[-0.01em]">
                      {day.subtitle}
                    </h3>
                    <p className="text-foreground text-[14px] md:text-[16px] leading-[1.65]" style={{ opacity: 1 }}>
                      {day.prose}
                    </p>
                    <p className="mt-4 text-foreground/40 text-[11px] tracking-wider uppercase font-mono">
                      ↓ scroll to continue
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
