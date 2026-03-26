import { motion } from "framer-motion";
import { Zap, Megaphone, Wrench, Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const personas = [
  { icon: Zap, title: "The Founder", desc: "You want AI leverage in your business. Automate work, build faster, stop depending on developers." },
  { icon: Megaphone, title: "The Marketer", desc: "You want to create better content, automate campaigns, and use AI to scale what you already do." },
  { icon: Wrench, title: "The Operator", desc: "You want to automate workflows, cut manual work, and run your business more efficiently." },
  { icon: Briefcase, title: "The Professional", desc: "You are good at what you do. AI makes you significantly better at it. You want to be the person in your industry who figured this out early." },
];

const WhoIsFor = () => {
  return (
    <SectionWrapper label="WHO THIS IS FOR">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Built for people who <span className="font-serif italic font-black">move the needle.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px] mx-auto">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-5 hover:translate-y-[-2px] active:translate-y-[-2px] transition-transform"
          >
            <p.icon className="text-primary mb-3" size={24} />
            <p className="font-semibold text-foreground text-[15px]">{p.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhoIsFor;
