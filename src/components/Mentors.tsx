import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const mentors = [
  { title: "AI Creative Director", bio: "Uses AI daily to produce content, ads, and visual campaigns for real brands.", tag: "CREATIVITY" },
  { title: "Automation Architect", bio: "Runs AI-powered automations across multiple businesses. Builds systems that save hundreds of hours.", tag: "AUTOMATIONS" },
  { title: "AI Product Builder", bio: "Ships AI products for a living. Has built and launched multiple products with AI tools.", tag: "PRODUCT" },
];

const Mentors = () => {
  return (
    <SectionWrapper id="mentors" label="YOUR MENTORS">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-4">
        Learn from people who<br /><span className="text-primary">use AI for a living.</span>
      </h2>

      <p className="text-[17px] text-muted-foreground max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Your mentors are not professors. They are builders, creators, and operators who use AI every single day in their work.
      </p>

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
            <p className="font-bold text-[18px] text-foreground">{m.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{m.bio}</p>
            <span className="inline-block mt-3 text-[10px] text-primary border border-primary/30 rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
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
