import { motion } from "framer-motion";
import { Box, Workflow, Film } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

interface OutcomesProps {
  onOpenModal: () => void;
}

import outcomeProduct from "@/assets/2e22c1e7-d613-4897-84a2-4783a9591a9d.png";
import outcomeAutomation from "@/assets/9b52020a-7e98-4938-b652-f587cb24fd35.png";
import outcomeContent from "@/assets/7729dfc9-8472-4b35-90a7-f8d61dbc9814.png";

const heroOutcomes = [
  {
    number: "01",
    icon: Box,
    kicker: "Deliverable One",
    title: "A Working Product",
    desc: "Built on a vibe coding platform. A landing page, a website, or a mini funnel setup you can show someone today.",
    image: outcomeProduct,
  },
  {
    number: "02",
    icon: Workflow,
    kicker: "Deliverable Two",
    title: "A Live Automation",
    desc: "A workflow running without you, supported by AI agents. Saves you and your team hours every single week.",
    image: outcomeAutomation,
  },
  {
    number: "03",
    icon: Film,
    kicker: "Deliverable Three",
    title: "An AI Content System",
    desc: "A repeatable process for content, visuals, and video. A pack created by you with just your words and creativity.",
    image: outcomeContent,
  },
];

const Outcomes = ({ onOpenModal }: OutcomesProps) => {
  return (
    <SectionWrapper id="outcomes">
      <SectionHeading
        label="YOUR OUTCOMES"
        description="Three deliverables shipped in nine days. Things you can show, run, and ship the day you walk out."
      >
        Not just learning. <Accent>Real building.</Accent>
      </SectionHeading>

      {/* Hero deliverables — editorial numbered blocks */}
      <div className="space-y-20 md:space-y-32 max-w-[1100px] mx-auto">
        {heroOutcomes.map((o, i) => {
          const isReversed = i % 2 === 1;
          const Icon = o.icon;
          return (
            <div
              key={o.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${
                isReversed ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative md:[direction:ltr]"
              >
                {/* Giant number ghost */}
                <span
                  aria-hidden
                  className="absolute -top-6 -left-2 md:-top-10 md:-left-6 font-editorial italic text-primary/15 leading-none select-none pointer-events-none z-0"
                  style={{ fontSize: "clamp(96px, 18vw, 220px)", fontWeight: 600 }}
                >
                  {o.number}
                </span>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[5/4] shadow-xl border border-foreground/[0.06]">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    width={960}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="md:[direction:ltr] text-center md:text-left"
              >
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={16} strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80">
                    {o.kicker}
                  </span>
                </div>
                <h3
                  className="font-bold tracking-[-0.02em] leading-[1.05] text-foreground"
                  style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
                >
                  {o.title}
                </h3>
                <p className="mt-5 text-muted-foreground text-[15px] md:text-[17px] leading-[1.65] max-w-[460px] mx-auto md:mx-0">
                  {o.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16 md:mt-20">
        <button
          onClick={onOpenModal}
          className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm uppercase tracking-wider btn-glow"
        >
          REQUEST AN INVITE
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Outcomes;
