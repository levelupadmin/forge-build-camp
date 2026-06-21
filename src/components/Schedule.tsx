import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabStripRef = useRef<HTMLDivElement>(null);
  const didMountRef = useRef(false);

  // Auto-advance every 5.5s, pause on hover
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % days.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  // Auto-scroll the day-strip so the active chip stays visible
  // Skip on first mount so the page does not jump to this section on load.
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    const strip = tabStripRef.current;
    if (!strip) return;
    const activeBtn = strip.querySelector(`[data-day-idx="${activeIdx}"]`) as HTMLElement | null;
    if (activeBtn && strip.scrollWidth > strip.clientWidth) {
      // Use scrollTo on the strip itself instead of scrollIntoView (which scrolls ancestors too).
      const stripRect = strip.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offsetLeft = btnRect.left - stripRect.left + strip.scrollLeft - (stripRect.width - btnRect.width) / 2;
      strip.scrollTo({ left: offsetLeft, behavior: "smooth" });
    }
  }, [activeIdx]);

  const day = days[activeIdx];
  const goPrev = () => setActiveIdx((i) => (i - 1 + days.length) % days.length);
  const goNext = () => setActiveIdx((i) => (i + 1) % days.length);

  return (
    <SectionWrapper id="schedule" variant="dark">
      <SectionHeading
        label="THE GAMEPLAN"
        variant="dark"
        description="Five pre-arrival sessions to prime you. Then you arrive on the ground and build with AI every day, morning to night, until you walk out with two shipped things, a product and the operations that run it."
      >
        <Accent>Seven&nbsp;days.</Accent> Two builds. <br className="md:hidden" />
        <span className="text-white/55">One unforgettable week.</span>
      </SectionHeading>

      <div
        className="max-w-[1200px] mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Day picker strip — horizontal scrollable on mobile */}
        <div ref={tabStripRef} className="-mx-6 lg:mx-0 overflow-x-auto scrollbar-hide mb-8 md:mb-12">
          <div className="px-6 lg:px-0 flex gap-2 min-w-max">
            {days.map((d, i) => (
              <button
                key={d.key}
                data-day-idx={i}
                onClick={() => setActiveIdx(i)}
                className={`shrink-0 px-4 md:px-5 py-2.5 border transition-all text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-mono ${
                  activeIdx === i
                    ? "border-[#1A6AFF] bg-[#1A6AFF]/15 text-white"
                    : "border-white/10 text-white/45 hover:text-white/75 hover:border-white/20"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Single viewport carousel: image + text crossfade together */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-stretch">
          {/* LEFT: image carousel */}
          <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.img
                key={day.key + "-img"}
                src={day.image}
                alt={day.subtitle}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={day.key + "-label"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/75 inline-block bg-black/40 backdrop-blur-sm px-2.5 py-1 border border-white/20">
                    {day.label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={goPrev}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white transition-colors border border-white/20"
              aria-label="Previous day"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white transition-colors border border-white/20"
              aria-label="Next day"
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>

            {/* Progress dots */}
            <div className="absolute top-4 md:top-5 left-0 right-0 flex justify-center gap-1.5">
              {days.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] transition-all duration-500 ${
                    activeIdx === i ? "w-8 bg-white" : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: prose */}
          <div className="flex flex-col justify-center min-h-[320px] lg:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={day.key + "-text"}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/50">
                    {String(activeIdx + 1).padStart(2, "0")} / {String(days.length).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.1]" />
                </div>
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/55">
                  {day.label}
                </span>
                <h3 className="font-editorial italic text-[26px] md:text-[34px] lg:text-[38px] text-white mt-2 mb-5 leading-[1.1] tracking-[-0.01em]">
                  {day.subtitle}
                </h3>
                <p className="text-white/92 text-[15px] md:text-[17px] leading-[1.7]">
                  {day.prose}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Schedule;
