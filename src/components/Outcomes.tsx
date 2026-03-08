import { motion } from "framer-motion";
import { Palette, Cog, Wrench, Rocket, Handshake, Lightbulb } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const outcomes = [
  { icon: Palette, title: "AI Creative Workflow", desc: "A repeatable system for generating content, ads, and visuals. Yours to use from Day 1 back home." },
  { icon: Cog, title: "Working Automation", desc: "One live automation already running in your business before you even land back." },
  { icon: Wrench, title: "Product or MVP", desc: "A launched or near-launch prototype you built with your own hands in 9 days." },
  { icon: Rocket, title: "Launch Funnel", desc: "A landing page and basic funnel ready to drive real traffic to your product." },
  { icon: Handshake, title: "Your Cohort", desc: "20 handpicked builders from across India. Lifetime community access after the program." },
  { icon: Lightbulb, title: "Momentum", desc: "The confidence and clarity to keep building with AI long after you leave." },
];

const Outcomes = () => {
  return (
    <SectionWrapper label="OUTCOMES">
      <h2 className="font-syne font-[800] text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        You leave with<br /><span className="text-primary">real work.</span> Not notes.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[840px] mx-auto">
        {outcomes.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-5"
          >
            <o.icon className="text-primary mb-3" size={28} />
            <p className="font-medium text-foreground text-[15px]">{o.title}</p>
            <p className="text-sm text-forge-muted mt-1">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Outcomes;
