import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const preps = [
  { num: "PRE 01", title: "AI Foundations", desc: "What AI can actually do for founders and creators. The honest overview." },
  { num: "PRE 02", title: "Tool Setup", desc: "Every tool configured, accounts created, and workflows ready before you arrive." },
  { num: "PRE 03", title: "Prompting Basics", desc: "How to talk to AI so it actually does what you want. Core prompting patterns that carry through all three pillars." },
  { num: "PRE 04", title: "Your Build Idea", desc: "Lock in your idea for the residency. What you want to automate. What product you want to build. You land with a plan." },
];

const OnlinePrep = () => {
  return (
    <SectionWrapper label="BEFORE THE RESIDENCY">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-6">
        You arrive ready.<br />Not from scratch.
      </h2>

      <p className="text-[16px] text-muted-foreground max-w-[560px] mx-auto text-center mb-12 leading-relaxed">
        Before the residency starts, you get access to a focused online prep series. Short daily sessions, 1 to 2 hours each. So when you arrive, you are set up and ready to build from Day 1.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-[700px] mx-auto">
        {preps.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-5"
          >
            <span className="text-[11px] text-primary font-semibold">{p.num}</span>
            <p className="font-semibold text-foreground mt-2 text-[15px]">{p.title}</p>
            <p className="text-sm text-forge-muted mt-1">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-forge-dim text-center mt-8 italic">
        Sessions are recorded. Attend live or catch up at your pace. You just need a laptop and 1 to 2 hours a day.
      </p>
    </SectionWrapper>
  );
};

export default OnlinePrep;
