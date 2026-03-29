import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const preps = [
  { title: "The AI Mindset", desc: "Before you touch a single tool, understand how AI actually thinks. The mental model that makes every tool faster to learn." },
  { title: "Prompting and Context Engineering", desc: "How to talk to AI and consistently get useful output. Works across every AI model ever built." },
  { title: "AI and Business Thinking", desc: "Map your own business, find the stuck lever, and understand which pillar creates the most impact for your situation." },
  { title: "What Good Looks Like", desc: "Real outputs built by real people like you. Founders, marketers, and operators with no technical background." },
  { title: "Pre-Arrival Alignment", desc: "Final questions answered. What to expect day by day. Everything you need before you arrive." },
];

const schedule = [
  { phase: "DAY 01", title: "Arrive + Orient", desc: "Check in. Meet your group. Meet your mentors. Set your personal build goal.", outcome: "Your roadmap for the next 8 days." },
  { phase: "DAYS 02 + 03", title: "AI Creativity Sprint", desc: "Full immersion in AI creative tools. Prompting, image generation, video creation, content workflows.", outcome: "Your first AI creative output. An ad, reel, or short film." },
  { phase: "DAYS 04 + 05", title: "Automation Sprint", desc: "Build your first automation. Connect your tools. Create a pipeline that saves you real time.", outcome: "One live automation running by the end of Day 5." },
  { phase: "DAYS 06, 07 + 08", title: "Product + Launch Sprint", desc: "Build your MVP. Create a landing page. Set up a basic funnel. Daily mentor feedback sessions. Iterate fast.", outcome: "A working product and a funnel ready to test." },
  { phase: "DAY 09", title: "Demo Day", desc: "Present everything you built. Celebrate. Reflect. Leave with proof of work.", outcome: "Three real builds. One unforgettable experience." },
];

const Schedule = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id="schedule" label="THE SCHEDULE">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        5 days prep + 9 days residency.<br />Here is exactly <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>what happens.</span>
      </h2>

      <div className="max-w-[680px] mx-auto mb-12">
        <p className="text-[16px] text-muted-foreground text-center mb-6 leading-relaxed">
          Before you arrive, you get access to a focused online prep series short daily sessions so you land ready to build from Day 1.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {preps.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-white border border-black/[0.06] rounded-2xl p-4 shadow-sm"
            >
              <p className="font-semibold text-foreground text-[14px]">{p.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[680px] mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute left-[11px] top-0 bottom-0 w-px bg-primary/20" />

          {schedule.map((s, i) => (
            <div key={i} className="relative md:pl-10 mb-1">
              <div className="hidden md:block absolute left-0 top-5 w-[23px] h-[23px] rounded-full border-2 border-primary/30 bg-background z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 border-b border-border flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-[11px] text-primary tracking-wider font-mono">{s.phase}</span>
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
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
