import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading, { Accent } from "./SectionHeading";

import imgOnlinePrep from "@/assets/schedule-online-prep-opt.jpg";
import imgDay1 from "@/assets/schedule-day1-opt.jpg";
import imgDays23 from "@/assets/schedule-days23-opt.jpg";
import imgDays45 from "@/assets/schedule-days45-opt.jpg";
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
  { key: "prep", label: "ONLINE PREP", subtitle: "Five evenings that get you ready to build, not ready to learn.",
    prose: "Five live sessions before the residency get every tool live and the theory out of the way. You learn what AI actually does inside a business, the product and design instincts behind anything customers will trust, and the automation and agent mindset you will use across the on-ground week. Session 5 is a 1:1 review where your build plan gets pressure-tested and locked. By the time you land, the toolchain is done and you go straight into building.",
    image: imgOnlinePrep },
  { key: "d1", label: "DAY 1", subtitle: "First, learn to tell the story that makes people care.",
    prose: "You arrive, meet the cohort, and spend the evening on the one tool every founder underuses: the story behind what you sell. Most products fail not because they do not work, but because nobody understands why they matter. You walk out with a narrative framework you will use across pitches, sales conversations, ad copy, and the way you describe your business for years.",
    image: imgDay1 },
  { key: "d2", label: "DAY 2", subtitle: "Turn a vague idea into a working AI feature.",
    prose: "How LLMs actually work and where they break, so you stop guessing at \"where AI fits\" and start with a customer-grade problem. A framing test that scopes what you build down to the one thing customers will pay for. System design without code, then your first AI feature making real model calls by dinner. You leave with a spec your business can stand behind and the first working version of it.",
    image: imgAIHills },
  { key: "d3", label: "DAY 3", subtitle: "Production architecture and a live URL by the end of the day.",
    prose: "A real product stack: a database that stores customer data safely, user accounts with access controls, payment hookups, and the plumbing connecting it to the AI model. By dinner you have a working product live on a real URL, plus a before/after scorecard that proves the AI is actually doing the job. The product you leave with is one you can put in front of a paying customer the day you get home.",
    image: imgDays45 },
  { key: "d4", label: "DAY 4", subtitle: "Build the agent that runs your back office while you sleep.",
    prose: "The agent loop in plain terms, then a real automation triaging tickets, leads, or customer requests in n8n. Wired into the apps your business already runs on (email, CRM, sheets, calendar, WhatsApp). Every hour your team currently spends on busywork becomes a candidate for automation. You walk out with the first version of your own personal AI assistant already running.",
    image: imgAIBeach },
  { key: "d5", label: "DAY 5", subtitle: "Stop guessing. Answer from what your business actually knows.",
    prose: "Most AI fails inside a business because it knows nothing about that specific business. Today you fix that with RAG over your own documents (SOPs, contracts, product catalogs, sales call transcripts) so the AI answers from your data, not the open internet. Plus voice agents that handle outbound calls on your behalf. You leave with an assistant that knows your business and can speak on its behalf.",
    image: imgDays23 },
  { key: "d6", label: "DAY 6", subtitle: "Multiple agents working together. A human in the loop where it matters.",
    prose: "Multi-agent orchestration: one agent classifies, another responds, a third escalates, and you stay in control of the calls that matter. Build an invoice and payments assistant that handles the workflow end-to-end. Then an outdoor hackathon where you stress-test the whole thing in the wild, against real pressure, in front of the cohort. You leave with an operations layer running a real function inside your business, not a single demo trick.",
    image: imgAIGroup },
  { key: "d7", label: "DAY 7", subtitle: "Show the real thing. Commit the next three builds.",
    prose: "Eight minutes each. No slides. No \"imagine this works.\" Live demos to the room of what you actually shipped, with the impact in real numbers if you have them. Then you write down the next three builds you will do across the 90 days after, and step into the cohort that holds you to it.",
    image: imgDay9 },
];

interface ScheduleProps { onOpenModal: () => void; }

const Schedule = ({ onOpenModal }: ScheduleProps) => {
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
              <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-foreground">
                Seven days. Two builds.{" "}
                <span className="font-editorial italic text-primary" style={{ fontWeight: 600 }}>One unforgettable week.</span>
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
                  <span className="text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white inline-block bg-black/55 backdrop-blur-sm px-2.5 py-1 border border-white/25">
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
                    <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-foreground/55">
                      {day.label}
                    </span>
                    <h3 className="font-editorial italic text-[26px] md:text-[36px] text-foreground mt-1.5 mb-3 md:mb-4 leading-[1.1] tracking-[-0.01em]">
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
