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
    <SectionWrapper label="WHO THIS IS FOR" variant="muted">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-12">
        Built for people who <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>move the needle.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px] mx-auto">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white border border-black/[0.06] rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0">
              <p.icon className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-semibold text-foreground text-[16px]">{p.title}</p>
              <p className="text-[14px] text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhoIsFor;
