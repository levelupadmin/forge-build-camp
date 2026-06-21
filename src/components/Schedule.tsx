import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import {
  LogIn,
  Compass,
  BookOpen,
  UtensilsCrossed,
  Sparkles,
  Workflow,
  Rocket,
  PartyPopper,
  FileCheck2,
  Users,
  LucideIcon,
} from "lucide-react";

import imgOnlinePrep from "@/assets/schedule-online-prep.png";
import imgDay1 from "@/assets/11de0180-9fd9-4966-a4a4-aa091c0adaf9.png";
import imgDays23 from "@/assets/schedule-days23-v2.png";
import imgDays45 from "@/assets/schedule-days45.png";
import imgDays678 from "@/assets/schedule-days678.jpg";
import imgDay9 from "@/assets/8254fb1b-ea7c-433b-b7a4-8796e3238dd5.jpg";

interface Row {
  icon: LucideIcon;
  time: string;
  title: string;
  sub?: string;
}

interface ScheduleDay {
  key: string;
  label: string;      // "DAY 1"
  subtitle: string;   // "Welcome to the Forge"
  image: string;
  rows: Row[];
}

const days: ScheduleDay[] = [
  {
    key: "prep",
    label: "ONLINE PREP",
    subtitle: "Five sessions before you travel",
    image: imgOnlinePrep,
    rows: [
      { icon: BookOpen, time: "Session", title: "Session 1 — Orientation", sub: "Welcome to the Forge. Get every tool live: Claude, Claude Code, n8n, Supabase, Vercel. Build your second brain." },
      { icon: BookOpen, time: "Session", title: "Session 2 — Product Thinking Fundamentals", sub: "The AI-shaped problem filter, validating the idea, and the build spec that becomes your blueprint. With Ankur." },
      { icon: BookOpen, time: "Session", title: "Session 3 — Design Fundamentals", sub: "Visual hierarchy, layout, type and colour. What makes a product feel trustworthy." },
      { icon: Workflow, time: "Session", title: "Session 4 — Automation & Workflows 101", sub: "Triggers, steps, the think-act-observe loop. With Parth." },
      { icon: FileCheck2, time: "Session", title: "Session 5 — Review & Align (1-on-1)", sub: "Present your build brief, get live mentor feedback, leave with a locked plan." },
    ],
  },
  {
    key: "d1",
    label: "DAY 1",
    subtitle: "Arrival · The Psychology of Storytelling",
    image: imgDay1,
    rows: [
      { icon: LogIn, time: "Afternoon", title: "Check In" },
      { icon: Compass, time: "Late Afternoon", title: "Orientation — meet the room" },
      { icon: BookOpen, time: "Evening", title: "The Psychology Behind Storytelling — with Rahul" },
      { icon: UtensilsCrossed, time: "Late Evening", title: "Dinner" },
      { icon: BookOpen, time: "Late Evening", title: "Storytelling — Part II" },
    ],
  },
  {
    key: "d2",
    label: "DAY 2",
    subtitle: "Product I — Spec It & Make It Intelligent",
    image: imgDays23,
    rows: [
      { icon: Users, time: "Morning", title: "Morning Standup" },
      { icon: Sparkles, time: "Morning", title: "How LLMs Actually Work + The ₹999 Problem-Framing Test" },
      { icon: Sparkles, time: "Late Morning", title: "System Design Without Code + Write Your Spec" },
      { icon: UtensilsCrossed, time: "Late Morning", title: "Lunch" },
      { icon: Sparkles, time: "Afternoon", title: "Claude Code + Your First MCP Tool — with Ankur" },
      { icon: UtensilsCrossed, time: "Evening", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d3",
    label: "DAY 3",
    subtitle: "Product II — Ship It & Prove It",
    image: imgDays45,
    rows: [
      { icon: Users, time: "Morning", title: "Morning Standup" },
      { icon: Rocket, time: "Morning", title: "Production Architecture: UI, Postgres, Auth, RLS, Edge Functions" },
      { icon: UtensilsCrossed, time: "Late Morning", title: "Lunch" },
      { icon: Rocket, time: "Afternoon", title: "Messages API · Streaming · Prompt Caching · Webhooks + Payments" },
      { icon: FileCheck2, time: "Late Afternoon", title: "Ship #1 Live + Build Your Eval Scorecard — with Ankur" },
      { icon: UtensilsCrossed, time: "Evening", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d4",
    label: "DAY 4",
    subtitle: "Operations I — Automate It, Then Make It Think",
    image: imgDays678,
    rows: [
      { icon: Users, time: "Morning", title: "Morning Standup" },
      { icon: Workflow, time: "Morning", title: "Automation Thinking + AI Agents in n8n (brain, memory, tools)" },
      { icon: UtensilsCrossed, time: "Late Morning", title: "Lunch" },
      { icon: Workflow, time: "Afternoon", title: "Build a Ticket-Classifying Support Agent" },
      { icon: Workflow, time: "Late Afternoon", title: "Connect Your Apps with MCP + Build Your Personal AI Assistant — with Parth" },
      { icon: UtensilsCrossed, time: "Evening", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d5",
    label: "DAY 5",
    subtitle: "Operations II — Connect It, Ground It, Give It a Voice",
    image: imgDays678,
    rows: [
      { icon: Users, time: "Morning", title: "Morning Standup" },
      { icon: Workflow, time: "Morning", title: "Browser Agents + Claude Cowork" },
      { icon: UtensilsCrossed, time: "Late Morning", title: "Lunch" },
      { icon: Workflow, time: "Afternoon", title: "Ground Agents in Your Docs (RAG)" },
      { icon: Workflow, time: "Late Afternoon", title: "Voice Agents for Outbound Calling + Protected 1:1s — with Parth" },
      { icon: UtensilsCrossed, time: "Evening", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d6",
    label: "DAY 6",
    subtitle: "Operations III · Full Pipeline & Outdoor Hackathon",
    image: imgDays678,
    rows: [
      { icon: Users, time: "Morning", title: "Morning Standup" },
      { icon: Workflow, time: "Morning", title: "Design a Full Business Process · Multi-Agent Orchestration · Human-in-the-Loop" },
      { icon: UtensilsCrossed, time: "Late Morning", title: "Lunch" },
      { icon: Workflow, time: "Afternoon", title: "Build an Invoice & Payment Assistant" },
      { icon: Sparkles, time: "Late Afternoon", title: "Outdoor Hackathon + Golden-Hour Showcase" },
      { icon: UtensilsCrossed, time: "Evening", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d7",
    label: "DAY 7",
    subtitle: "Demo Day + Your 90-Day Roadmap",
    image: imgDay9,
    rows: [
      { icon: UtensilsCrossed, time: "Morning", title: "Breakfast" },
      { icon: Rocket, time: "Morning", title: "Demo Day — 8 minutes each, no slides, real working demo" },
      { icon: PartyPopper, time: "Late Morning", title: "Farewell + 90-Day Roadmap Commitments" },
      { icon: LogIn, time: "Afternoon", title: "Checkout" },
    ],
  },
];

const Schedule = () => {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <SectionWrapper id="schedule" variant="dark">
      <SectionHeading
        label="THE GAMEPLAN"
        variant="dark"
        description="Five pre-arrival sessions to prime you. Then you arrive on the ground and build with AI every day, morning to night, until you walk out with two shipped things — a product and the operations that run it."
      >
        <Accent>Seven&nbsp;days.</Accent> Two builds. <br className="md:hidden" />
        <span className="text-white/55">One unforgettable week.</span>
      </SectionHeading>

      {/* Day tabs — horizontal scrolling strip */}
      <div className="mb-10 md:mb-14 -mx-6 lg:-mx-20 overflow-x-auto scrollbar-hide">
        <div className="px-6 lg:px-20 flex gap-2 min-w-max">
          {days.map((d, i) => {
            const isActive = i === active;
            return (
              <button
                key={d.key}
                onClick={() => setActive(i)}
                className={`group relative shrink-0 px-5 py-3 rounded-full border transition-all ${
                  isActive
                    ? "border-[#1A6AFF] bg-[#1A6AFF]/15 text-white"
                    : "border-white/10 text-white/50 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                  {d.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Two-column layout: image + rows */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_1.3fr] gap-10 lg:gap-16 items-start">
        {/* LEFT — image */}
        <div className="lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={day.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src={day.image}
                alt={day.label + " — " + day.subtitle}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60">
                  {day.label}
                </span>
                <p className="font-editorial italic text-[22px] md:text-[28px] text-white mt-1 leading-tight">
                  {day.subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — rows (matches the PDF's icon + time + title rhythm) */}
        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.ul
              key={day.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-1"
            >
              {day.rows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <motion.li
                    key={row.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.04 }}
                    className="flex items-center gap-4 md:gap-5 py-4 border-b border-white/[0.06] group"
                  >
                    <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-[#1A6AFF]/10 text-[#3D7EFF] border border-[#1A6AFF]/20 group-hover:bg-[#1A6AFF]/18 transition-colors">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#3D7EFF]">
                        {row.time}
                      </p>
                      <p className="text-[15px] md:text-[17px] font-semibold text-white leading-snug mt-1">
                        {row.title}
                      </p>
                      {row.sub && (
                        <p className="text-[13px] text-white/55 mt-1 leading-relaxed">{row.sub}</p>
                      )}
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Schedule;
