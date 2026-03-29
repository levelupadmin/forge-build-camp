import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const mentors = [
  { title: "AI Creative Director", bio: "Uses AI daily to produce content, ads, and visual campaigns for real brands.", tag: "CREATIVITY", gradient: "from-blue-400 to-purple-500" },
  { title: "Automation Architect", bio: "Runs AI-powered automations across multiple businesses. Builds systems that save hundreds of hours.", tag: "AUTOMATIONS", gradient: "from-emerald-400 to-teal-500" },
  { title: "AI Product Builder", bio: "Ships AI products for a living. Has built and launched multiple products with AI tools.", tag: "PRODUCT", gradient: "from-orange-400 to-rose-500" },
];

const Mentors = () => {
  return (
    <SectionWrapper id="mentors" label="YOUR MENTORS">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        Learn from people who<br /><span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>use AI for a living.</span>
      </h2>

      <p className="text-[16px] text-muted-foreground max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Your mentors are not professors. They are builders, creators, and operators who use AI every single day in their work.
      </p>

      <div className="grid md:grid-cols-3 gap-5 max-w-[840px] mx-auto">
        {mentors.map((m, i) => (
          <motion.div
            key={m.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-card border border-border rounded-2xl p-7 text-center shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
          >
            <div className={`w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${m.gradient} opacity-80`} />
            <p className="font-bold text-[18px] text-foreground">{m.title}</p>
            <p className="text-[14px] text-muted-foreground mt-1 leading-relaxed">{m.bio}</p>
            <span className="inline-block mt-3 text-[10px] text-primary border border-primary/20 rounded-full px-3 py-1 font-semibold uppercase tracking-wider">
              {m.tag}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-[13px] text-muted-foreground/50 text-center mt-8">
        Mentor profiles announced closer to program dates.
      </p>
    </SectionWrapper>
  );
};

export default Mentors;
