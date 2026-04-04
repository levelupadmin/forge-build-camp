import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

import imgDefault from "@/assets/schedule-default.jpg";
import imgOnlinePrep from "@/assets/schedule-online-prep.png";
import imgDay1 from "@/assets/schedule-day1.png";
import imgDays23 from "@/assets/schedule-days23.webp";
import imgDays45 from "@/assets/schedule-days45.jpg";
import imgDays678 from "@/assets/schedule-days678.jpg";
import imgDay9 from "@/assets/schedule-day9.webp";
interface ScheduleItem {
  label: string;
  title: string;
  image: string;
  desc: string;
  bullets?: string[];
  outcome: string;
}

const scheduleData: ScheduleItem[] = [
  {
    label: "ONLINE PREP",
    title: "Online Prep: Prep Sessions",
    image: imgOnlinePrep,
    desc: "Before you touch a single tool on-site, you complete five focused sessions. You start by understanding how AI actually thinks, then learn to talk to it and get useful output every time. From there you map your own business and find the stuck lever, see real outputs built by real people like you, and finish with a full day-by-day brief so you land ready to build from Day 1.",

    outcome: "You arrive sharp, aligned, and ready to build from Day 1.",
  },
  {
    label: "DAY 1",
    title: "Day 1: Arrive + Orient",
    image: imgDay1,
    desc: "Check in. Meet your group. Meet your mentors. Set your personal build goal.",
    outcome: "Your roadmap for the next 8 days.",
  },
  {
    label: "DAYS 2 + 3",
    title: "Days 2 + 3: AI Creativity Sprint",
    image: imgDays23,
    desc: "Full immersion in AI creative tools. Prompting, image generation, video creation, content workflows.",
    outcome: "Your first AI creative output: an ad, reel, or short film.",
  },
  {
    label: "DAYS 4 + 5",
    title: "Days 4 + 5: Automation Sprint",
    image: imgDays45,
    desc: "Build your first automation. Connect your tools. Create a pipeline that saves you real time.",
    outcome: "One live automation running by the end of Day 5.",
  },
  {
    label: "DAYS 6, 7 + 8",
    title: "Days 6, 7 + 8: Product + Launch Sprint",
    image: imgDays678,
    desc: "Build your MVP. Create a landing page. Set up a basic funnel. Daily mentor feedback sessions. Iterate fast.",
    outcome: "A working product and a funnel ready to test.",
  },
  {
    label: "DAY 9",
    title: "Day 9: Demo Day",
    image: imgDay9,
    desc: "Present everything you built. Celebrate. Reflect. Leave with proof of work.",
    outcome: "Three real builds. One unforgettable experience.",
  },
];

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <SectionWrapper id="schedule" label="THE SCHEDULE">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        The&nbsp;Gameplan
      </h2>
      <p className="text-[16px] text-muted-foreground text-center mb-10 md:mb-14 leading-relaxed max-w-[560px] mx-auto">
        Your Itinerary through the online and offline residency and how you will learn, build and grow.
      </p>

      {/* Hero Image */}
      <div className="max-w-[780px] mx-auto mb-8 md:mb-12">
        <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex ?? "default"}
              src={activeIndex !== null ? scheduleData[activeIndex].image : imgDefault}
              alt={activeIndex !== null ? scheduleData[activeIndex].title : "Forge Residency"}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              width={1280}
              height={800}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Accordion */}
      <div className="max-w-[780px] mx-auto">
        {scheduleData.map((item, i) => {
          const isOpen = activeIndex === i;
          return (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => handleToggle(i)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[11px] tracking-wider text-primary shrink-0 w-[90px] md:w-[120px] font-sans">
                    {item.label}
                  </span>
                  <span className={`font-bold text-[16px] md:text-[18px] transition-colors ${isOpen ? "text-foreground" : "text-muted-foreground md:group-hover:text-foreground"}`}>
                    {item.title.split(": ")[1] || item.title}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {isOpen ? <X size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-0 md:pl-[136px]">
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[520px]">
                        {item.desc}
                      </p>
                      {item.bullets && (
                        <ul className="mt-3 space-y-1.5">
                          {item.bullets.map((b, bi) => (
                            <li key={bi} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">→</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <p className="text-sm mt-4">
                        <span className="text-primary font-medium">You'll have: </span>
                        <span className="text-foreground">{item.outcome}</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Schedule;
