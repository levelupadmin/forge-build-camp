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
    subtitle: "Five sessions before you arrive",
    image: imgOnlinePrep,
    rows: [
      { icon: BookOpen, time: "Session 1", title: "The AI Mindset" },
      { icon: BookOpen, time: "Session 2", title: "Prompting and Context Engineering" },
      { icon: Users, time: "Session 3", title: "AI and Business Thinking" },
      { icon: FileCheck2, time: "Session 4", title: "Case Study Breakdown" },
      { icon: Compass, time: "Session 5", title: "Pre-Arrival Alignment" },
    ],
  },
  {
    key: "d1",
    label: "DAY 1",
    subtitle: "Welcome to the Forge",
    image: imgDay1,
    rows: [
      { icon: LogIn, time: "2:00 PM", title: "Check In" },
      { icon: Compass, time: "5:30 PM – 7:30 PM", title: "Orientation" },
      { icon: BookOpen, time: "7:30 PM – 8:30 PM", title: "Learn Psychology Behind Storytelling" },
      { icon: UtensilsCrossed, time: "8:30 PM – 9:30 PM", title: "Dinner" },
      { icon: BookOpen, time: "9:30 PM – 10:30 PM", title: "Storytelling — Part II" },
    ],
  },
  {
    key: "d23",
    label: "DAYS 2 + 3",
    subtitle: "Generative AI Foundations",
    image: imgDays23,
    rows: [
      { icon: Users, time: "9:00 AM", title: "Morning Standup and Focus" },
      { icon: Sparkles, time: "9:15 AM – 11:15 AM", title: "Advanced Prompting for Real Work" },
      { icon: Sparkles, time: "11:15 AM – 12:30 PM", title: "Build Your First Prompt Chain" },
      { icon: UtensilsCrossed, time: "12:30 PM – 1:30 PM", title: "Lunch" },
      { icon: Sparkles, time: "1:30 PM – 3:00 PM", title: "AI Image Generation" },
      { icon: Sparkles, time: "3:00 PM – 6:00 PM", title: "Build Your Brand Visual Pack + First AI Ad" },
      { icon: UtensilsCrossed, time: "7:00 PM", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d45",
    label: "DAYS 4 + 5",
    subtitle: "Automations And Agents",
    image: imgDays45,
    rows: [
      { icon: Users, time: "9:00 AM", title: "Morning Standup and Focus" },
      { icon: Workflow, time: "9:15 AM – 11:15 AM", title: "Automation Thinking + Building with n8n" },
      { icon: Workflow, time: "11:15 AM – 12:30 PM", title: "Build Your First Automation" },
      { icon: UtensilsCrossed, time: "12:30 PM – 1:30 PM", title: "Lunch" },
      { icon: Workflow, time: "1:30 PM – 6:30 PM", title: "Claude Code + AI Agents + Build Systems" },
      { icon: UtensilsCrossed, time: "7:00 PM – 10:30 PM", title: "Dinner + Build Night" },
    ],
  },
  {
    key: "d678",
    label: "DAYS 6 – 8",
    subtitle: "Product + Launch Sprint",
    image: imgDays678,
    rows: [
      { icon: Users, time: "9:00 AM", title: "Morning Standup and Focus" },
      { icon: Rocket, time: "9:15 AM – 12:30 PM", title: "Workflow Design + Full Business Systems" },
      { icon: UtensilsCrossed, time: "12:30 PM – 1:30 PM", title: "Lunch" },
      { icon: Rocket, time: "1:30 PM – 6:30 PM", title: "Landing Page · Funnel · MVP Build" },
      { icon: Sparkles, time: "7:00 PM onwards", title: "Experience Night + Extended Build Session" },
    ],
  },
  {
    key: "d9",
    label: "DAY 9",
    subtitle: "Demo Day and Graduation",
    image: imgDay9,
    rows: [
      { icon: UtensilsCrossed, time: "8:00 AM – 9:00 AM", title: "Breakfast" },
      { icon: Rocket, time: "9:00 AM – 12:30 PM", title: "Demo Day" },
      { icon: PartyPopper, time: "12:30 PM – 1:30 PM", title: "Farewell and Graduation" },
      { icon: LogIn, time: "1:30 PM", title: "Checkout" },
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
        description="Five pre-arrival sessions to prime you. Then you land in Dharamshala and build with AI every day, morning to night, until you walk out with three real things shipped."
      >
        <Accent>Nine&nbsp;days.</Accent> Three builds. <br className="md:hidden" />
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
