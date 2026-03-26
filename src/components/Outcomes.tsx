import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const outcomes = [
  {
    title: "A Working Product",
    desc: "Built on a vibe coding platform. A landing page, a website, or a mini funnel setup you can show someone today.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  },
  {
    title: "A Live Automation",
    desc: "A workflow running without you, supported by AI agents. Saves you and your team hours every single week.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    title: "An AI Content System",
    desc: "A repeatable process for content, visuals, and video. A pack created by you with just your words and creativity.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  },
  {
    title: "A Network",
    desc: "A community of like-minded founders, operators, and builders you can depend on even after the program. Friends for life.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    title: "The Muscle Memory",
    desc: "You have built with AI under pressure. Now you have the skillset to build anything back home and adapt to what is coming.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
  {
    title: "A Head Start",
    desc: "The mindset and confidence to build with AI for the future.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const Outcomes = () => {
  return (
    <SectionWrapper label="YOUR OUTCOMES">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Not just learning. <span className="font-serif italic font-black">Real building.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[840px] mx-auto">
        {outcomes.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card relative overflow-hidden rounded-2xl min-h-[200px] group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${o.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
            <div className="relative z-10 p-5 flex flex-col justify-end h-full">
              <p className="font-semibold text-foreground text-[15px]">{o.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{o.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Outcomes;
