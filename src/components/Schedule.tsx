import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

import imgOnlinePrep from "@/assets/schedule-online-prep.png";
import imgDay1 from "@/assets/11de0180-9fd9-4966-a4a4-aa091c0adaf9.png";
import imgDays23 from "@/assets/schedule-days23-v2.png";
import imgDays45 from "@/assets/schedule-days45.png";
import imgDay4Ops from "@/assets/schedule-days45.jpg";
import imgDay5Ops from "@/assets/schedule-default.jpg";
import imgDays678 from "@/assets/schedule-days678.jpg";
import imgDay9 from "@/assets/8254fb1b-ea7c-433b-b7a4-8796e3238dd5.jpg";

interface ScheduleDay {
  key: string;
  label: string;
  subtitle: string;
  prose: string;
  image: string;
}

const days: ScheduleDay[] = [
  {
    key: "prep",
    label: "ONLINE PREP",
    subtitle: "Five sessions before you board the plane",
    prose: "Before you arrive, we hand you the tools. Five sessions to install Claude, Claude Code, n8n, Supabase, Vercel, and lock the spec of what you will build. By the time you land, you are not learning. You are already building.",
    image: imgOnlinePrep,
  },
  {
    key: "d1",
    label: "DAY 1",
    subtitle: "Arrival. The Psychology of Storytelling.",
    prose: "You touch down. You meet the room. Rahul opens the week with the psychology behind every product, every pitch, every cohort. Tonight, the building starts.",
    image: imgDay1,
  },
  {
    key: "d2",
    label: "DAY 2",
    subtitle: "Product I. Spec It. Make It Intelligent.",
    prose: "How LLMs actually work. The ₹999 problem-framing test. System design without code. By dinner you have written the spec for your real product. Ankur walks you into your first MCP tool with Claude Code.",
    image: imgDays23,
  },
  {
    key: "d3",
    label: "DAY 3",
    subtitle: "Product II. Ship It. Prove It.",
    prose: "Production architecture. Messages API. Streaming. Prompt caching. Payments. End of day, Build One is live on a real URL. With an eval scorecard to prove it works.",
    image: imgDays45,
  },
  {
    key: "d4",
    label: "DAY 4",
    subtitle: "Operations I. Automate It, Then Make It Think.",
    prose: "n8n unlocks the layer beneath your product. Triggers, steps, the think-act-observe loop. A ticket-classifying support agent. By the end of day, your apps connect to AI through MCP, and you have a personal assistant that knows your work.",
    image: imgDay4Ops,
  },
  {
    key: "d5",
    label: "DAY 5",
    subtitle: "Operations II. Connect It, Ground It, Give It a Voice.",
    prose: "Browser agents that fill forms while you sleep. RAG that grounds your agents in your own docs. Voice agents that handle outbound calls. Parth walks you through it, then sits with you one on one.",
    image: imgDay5Ops,
  },
  {
    key: "d6",
    label: "DAY 6",
    subtitle: "Operations III. The Full Pipeline.",
    prose: "Multi-agent orchestration. Human-in-the-loop. An invoice and payment assistant. Then we take the work outside. An outdoor hackathon ends with the golden-hour showcase. Build Two ships.",
    image: imgDays678,
  },
  {
    key: "d7",
    label: "DAY 7",
    subtitle: "Demo Day + the 90-Day Roadmap.",
    prose: "Eight minutes each. No slides. Just real working demos in front of the room. Then your 90-day commitments, locked in front of the cohort. Then home, but you take the tribe with you.",
    image: imgDay9,
  },
];

const Schedule = () => {
  const [activeIdx, setActiveIdx] = useState(0);

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

      {/* Sticky-image storytelling: image pins on left, prose scrolls on right.
          The active image swaps as each day enters the viewport. */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-[1200px] mx-auto">
        {/* LEFT: sticky image stack (only one fades in at a time) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 aspect-[4/5] overflow-hidden">
            {days.map((d, i) => (
              <motion.img
                key={d.key}
                src={d.image}
                alt={d.subtitle}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{ opacity: activeIdx === i ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
            {/* Day label overlay (also crossfades) */}
            <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/85 via-black/20 to-transparent">
              <motion.div
                key={days[activeIdx].key + "-label"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
                  {days[activeIdx].label}
                </span>
                <p className="font-editorial italic text-[26px] text-white mt-1 leading-tight">
                  {days[activeIdx].subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT: prose blocks for each day. Each fires onViewportEnter to update active. */}
        <div className="space-y-20 lg:space-y-40">
          {days.map((day, i) => (
            <motion.article
              key={day.key}
              onViewportEnter={() => setActiveIdx(i)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:min-h-[55vh] flex flex-col justify-center"
            >
              {/* Mobile image (since left column hides on small) */}
              <div className="lg:hidden relative aspect-[4/5] overflow-hidden mb-6">
                <img src={day.image} alt={day.subtitle} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
                    {day.label}
                  </span>
                  <p className="font-editorial italic text-[22px] text-white mt-1 leading-tight">
                    {day.subtitle}
                  </p>
                </div>
              </div>

              {/* Prose block */}
              <div>
                <div className="hidden lg:flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/45">
                    {String(i + 1).padStart(2, "0")} / {String(days.length).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.08]" />
                </div>
                <span className="hidden lg:inline font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                  {day.label}
                </span>
                <h3 className="hidden lg:block font-editorial italic text-[26px] lg:text-[32px] text-white mt-2 mb-4 leading-tight">
                  {day.subtitle}
                </h3>
                <p className="text-white/70 text-[15px] lg:text-[17px] leading-[1.65] max-w-[480px]">
                  {day.prose}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Schedule;
