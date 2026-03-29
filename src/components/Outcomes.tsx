import { motion } from "framer-motion";
import { Box, Workflow, Film, Users, Brain, Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const outcomes = [
  { icon: Box, title: "A Working Product", desc: "Built on a vibe coding platform. A landing page, a website, or a mini funnel setup you can show someone today." },
  { icon: Workflow, title: "A Live Automation", desc: "A workflow running without you, supported by AI agents. Saves you and your team hours every single week." },
  { icon: Film, title: "An AI Content System", desc: "A repeatable process for content, visuals, and video. A pack created by you with just your words and creativity." },
  { icon: Users, title: "A Network", desc: "A community of like-minded founders, operators, and builders you can depend on even after the program. Friends for life." },
  { icon: Brain, title: "The Muscle Memory", desc: "You have built with AI under pressure. Now you have the skillset to build anything back home and adapt to what is coming." },
  { icon: Rocket, title: "A Head Start", desc: "The mindset and confidence to build with AI for the future." },
];

const Outcomes = () => {
  return (
    <SectionWrapper label="YOUR OUTCOMES">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-12">
        Not just learning. <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>Real building.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[840px] mx-auto">
        {outcomes.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center mb-4">
              <o.icon className="text-primary" size={20} />
            </div>
            <p className="font-semibold text-foreground text-[16px]">{o.title}</p>
            <p className="text-[14px] text-muted-foreground mt-2 leading-relaxed">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Outcomes;
