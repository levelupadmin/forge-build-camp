import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const outcomes = [
  {
    title: "AI Creative Workflow",
    desc: "A repeatable system for generating content, ads, and visuals. Yours to use from Day 1 back home.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  },
  {
    title: "Working Automation",
    desc: "One live automation already running in your business before you even get back.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
  },
  {
    title: "Product or MVP",
    desc: "A launched or near-launch prototype you built with your own hands.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  },
  {
    title: "Launch Funnel",
    desc: "A landing page and basic funnel ready to drive real traffic to your product.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Your Cohort",
    desc: "Handpicked builders from across the country. Lifetime community access after the program.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    title: "Momentum",
    desc: "The confidence and clarity to keep building with AI long after you leave.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  },
];

const Outcomes = () => {
  return (
    <SectionWrapper label="OUTCOMES">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        You leave with<br /><span className="text-primary">real work.</span> Not notes.
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
