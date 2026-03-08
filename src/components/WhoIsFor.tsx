import { motion } from "framer-motion";
import { Zap, Megaphone, Clapperboard, HardHat, Wrench, Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const personas = [
  { icon: Zap, title: "The Founder", desc: "You want AI leverage in your business. Automate work, build faster, stop depending on developers." },
  { icon: Megaphone, title: "The Marketer", desc: "You want to create better content, automate campaigns, and use AI to scale what you already do." },
  { icon: Clapperboard, title: "The Creator", desc: "You want to explore AI filmmaking, AI content tools, and what the new creative stack actually looks like." },
  { icon: HardHat, title: "The Builder", desc: "You have an idea and want to ship an MVP. AI tools are your new toolkit." },
  { icon: Wrench, title: "The Operator", desc: "You want to automate workflows, cut manual work, and run your business more efficiently." },
  { icon: Rocket, title: "The Curious One", desc: "You just know AI matters and you want to learn it by actually building something real." },
];

const WhoIsFor = () => {
  return (
    <SectionWrapper label="WHO THIS IS FOR">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Built for people who<br />learn by doing.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[840px] mx-auto">
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
