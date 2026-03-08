import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const criteria = [
  "They have built real things with AI, not just taught about it",
  "They are actively working in their field right now",
  "They guide your actual build, not just deliver slides",
  "They commit to all 9 days, in person, with you",
];

const mentors = [
  { title: "AI Creativity Mentor", bio: "Builder and creator working in AI content", tag: "CREATIVITY" },
  { title: "AI Automation Expert", bio: "Systems builder with automations running across multiple businesses", tag: "AUTOMATIONS" },
  { title: "AI Product Builder", bio: "Founder who has shipped multiple AI-powered products", tag: "PRODUCT" },
];

const Mentors = () => {
  return (
    <SectionWrapper id="mentors" label="YOUR MENTORS">
      <h2 className="font-syne font-[800] text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-4">
        Learn from builders.<br />Not professors.
      </h2>

      <p className="text-[17px] text-forge-muted max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Each pillar is led by a mentor who has already shipped AI products, built automations at scale, and launched things people actually use.
      </p>

      {/* Criteria card */}
      <div className="glass-card border-l-2 border-l-primary max-w-[600px] mx-auto p-6 mb-12">
        <p className="text-sm text-forge-dim font-medium mb-3">Every Forge AI mentor is selected because:</p>
        {criteria.map((c) => (
          <p key={c} className="text-[15px] text-foreground leading-[2]">
            <span className="text-primary mr-2">✦</span>{c}
          </p>
        ))}
      </div>

      {/* Mentor cards */}
      <div className="grid md:grid-cols-3 gap-4 max-w-[840px] mx-auto">
        {mentors.map((m, i) => (
          <motion.div
            key={m.tag}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[rgba(255,255,255,0.03)] border border-primary/20" />
            <p className="font-syne font-[700] text-[18px] text-foreground">{m.title}</p>
            <p className="text-sm text-forge-muted mt-1">{m.bio}</p>
            <span className="inline-block mt-3 font-mono text-[10px] text-primary border border-primary/30 rounded-full px-3 py-1">
              {m.tag}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-[13px] text-forge-dim text-center mt-8">
        Mentor profiles announced with Cohort 01 dates. All mentors are active builders in the AI space.
      </p>
    </SectionWrapper>
  );
};

export default Mentors;
