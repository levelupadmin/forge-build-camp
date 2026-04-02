import { motion } from "framer-motion";
import { Box, Workflow, Film, Users, Brain, Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface OutcomesProps {
  onOpenModal: () => void;
}

import outcomeProduct from "@/assets/outcome-product.jpg";
import outcomeAutomation from "@/assets/outcome-automation.jpg";
import outcomeContent from "@/assets/outcome-content.jpg";
import outcomeNetwork from "@/assets/outcome-network.jpg";
import outcomeMuscle from "@/assets/outcome-muscle.jpg";
import outcomeHeadstart from "@/assets/outcome-headstart.jpg";

const heroOutcomes = [
  {
    icon: Box,
    title: "A Working Product",
    desc: "Built on a vibe coding platform. A landing page, a website, or a mini funnel setup you can show someone today.",
    image: outcomeProduct,
  },
  {
    icon: Workflow,
    title: "A Live Automation",
    desc: "A workflow running without you, supported by AI agents. Saves you and your team hours every single week.",
    image: outcomeAutomation,
  },
  {
    icon: Film,
    title: "An AI Content System",
    desc: "A repeatable process for content, visuals, and video. A pack created by you with just your words and creativity.",
    image: outcomeContent,
  },
];

const compactOutcomes = [
  {
    icon: Users,
    title: "A Network",
    desc: "A community of like-minded founders, operators, and builders you can depend on even after the program.",
    image: outcomeNetwork,
  },
  {
    icon: Brain,
    title: "The Muscle Memory",
    desc: "You have built with AI under pressure. Now you have the skillset to build anything back home.",
    image: outcomeMuscle,
  },
  {
    icon: Rocket,
    title: "A Head Start",
    desc: "The mindset and confidence to build with AI for the future.",
    image: outcomeHeadstart,
  },
];

const Outcomes = () => {
  return (
    <SectionWrapper id="outcomes" label="YOUR OUTCOMES">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-16 md:mb-20">
        Not just learning. <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>Real building.</span>
      </h2>

      {/* Full-bleed stacked panels — top 3 outcomes */}
      <div className="space-y-10 md:space-y-16">
        {heroOutcomes.map((o, i) => {
          const isReversed = i % 2 === 1;
          return (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="w-full md:w-[55%] flex-shrink-0"
              >
                <div className="rounded-2xl overflow-hidden aspect-[16/10] shadow-lg">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    width={960}
                    height={640}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="w-full md:w-[45%] text-center md:text-left"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <o.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-primary font-mono text-[11px] uppercase tracking-[0.15em] font-semibold">
                    Outcome {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
                  {o.title}
                </h3>
                <p className="text-muted-foreground text-[15px] md:text-[17px] leading-relaxed max-w-[400px] mx-auto md:mx-0">
                  {o.desc}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Compact row — bottom 3 outcomes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14 md:mt-20">
        {compactOutcomes.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md"
          >
            <img
              src={o.image}
              alt={o.title}
              loading="lazy"
              width={960}
              height={640}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <div className="flex items-center gap-2 mb-2">
                <o.icon className="text-white/80" size={16} />
                <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.15em]">
                  {i === 0 ? "\n" : i === 1 ? "​" : "\n"}
                </span>
              </div>
              <h4 className="font-bold text-white text-[18px] md:text-[20px] leading-tight mb-1.5">
                {o.title}
              </h4>
              <p className="text-white/70 text-[13px] leading-relaxed">
                {o.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
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
