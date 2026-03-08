import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const reasons = [
  {
    icon: TrendingUp,
    title: "AI is moving faster than ever",
    desc: "New tools launch every week. The gap between people who use AI and people who don't is growing every day.",
  },
  {
    icon: Zap,
    title: "Builders win. Watchers fall behind.",
    desc: "Reading about AI is not the same as building with it. The people shipping AI products today will own the next decade.",
  },
  {
    icon: Clock,
    title: "The window is now",
    desc: "Right now, AI tools are accessible to everyone. You don't need to code. You don't need a team. You just need to start building.",
  },
];

const WhyAINow = () => {
  return (
    <SectionWrapper id="why-ai" label="WHY AI. WHY NOW.">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-4">
        AI is the most important<br />skill of <span className="text-primary">this decade.</span>
      </h2>

      <p className="text-[16px] text-forge-muted max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Every industry is being reshaped by AI. The question is not whether you should learn it. The question is how fast you can start building with it.
      </p>

      <div className="grid md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <r.icon className="text-primary mb-4" size={28} />
            <p className="font-bold text-foreground text-[17px] mb-2">{r.title}</p>
            <p className="text-sm text-forge-muted leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyAINow;
