import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const schedule = [
  {
    phase: "PRE-PROGRAM",
    title: "Online Prep (before you arrive)",
    desc: "Short daily sessions covering AI basics, tool setup, and prompting. You arrive knowing your tools and your build idea.",
    outcome: "Your idea locked. Tools ready. Excited to get there.",
  },
  {
    phase: "DAY 01",
    title: "Arrive + Orient",
    desc: "Check in. Meet your cohort. Meet your mentors. Set your personal 9-day build goal.",
    outcome: "Your roadmap for the next 8 days.",
  },
  {
    phase: "DAYS 02 + 03",
    title: "AI Creativity Sprint",
    desc: "Full immersion in AI creative tools. Prompting, image generation, video creation, content workflows.",
    outcome: "Your first AI creative output. An ad, reel, or short film.",
  },
  {
    phase: "DAYS 04 + 05",
    title: "Automation Sprint",
    desc: "Build your first automation. Connect your tools. Create a pipeline that saves you real time.",
    outcome: "One live automation running by the end of Day 5.",
  },
  {
    phase: "DAYS 06, 07 + 08",
    title: "Product + Launch Sprint",
    desc: "Build your MVP. Create a landing page. Set up a basic funnel. Daily mentor feedback sessions. Iterate fast.",
    outcome: "A working product and a funnel ready to test.",
  },
  {
    phase: "DAY 09",
    title: "Demo Day",
    desc: "Present everything you built to the cohort. Celebrate. Reflect. Leave with proof of work.",
    outcome: "Three real builds. One unforgettable experience.",
  },
];

const Schedule = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id="schedule" label="THE SCHEDULE">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        9 days.<br />Here is exactly what happens.
      </h2>

      <div className="max-w-[680px] mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute left-[11px] top-0 bottom-0 w-px bg-primary/20" />

          {schedule.map((s, i) => (
            <div key={i} className="relative md:pl-10 mb-1">
              <div className="hidden md:block absolute left-0 top-5 w-[23px] h-[23px] rounded-full border-2 border-primary/40 bg-background z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 border-b border-[rgba(255,255,255,0.06)] flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-[11px] text-primary tracking-wider font-semibold">{s.phase}</span>
                  <p className="font-bold text-foreground text-[18px] mt-1">{s.title}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`shrink-0 mt-4 text-primary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pt-2">
                      <p className="text-sm text-forge-muted leading-relaxed">{s.desc}</p>
                      <p className="text-sm text-primary mt-3">
                        You'll have: <span className="text-foreground">{s.outcome}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Schedule;
