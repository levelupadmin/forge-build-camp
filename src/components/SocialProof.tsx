import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    quote: "I came expecting to watch and take notes. By Day 3 I had already built something I was proud of. The environment just pushes you into motion whether you are ready or not.",
    name: "Rahul M.",
    role: "Founder, Bangalore",
    program: "Past Forge Filmmaking Residency",
  },
  {
    quote: "Being in the same room as people who are as serious as you completely changes your energy. You do not want to fall behind. You want to build more. It is addictive in the best way.",
    name: "Priya S.",
    role: "Marketer, Mumbai",
    program: "Past Forge Creator Residency",
  },
  {
    quote: "The mentors do not lecture. They sit next to you, look at your actual work, and help you fix it in real time. That alone was worth the entire experience for me.",
    name: "Aditya K.",
    role: "Agency Owner, Delhi",
    program: "Past Forge Filmmaking Residency",
  },
];

const SocialProof = () => {
  return (
    <SectionWrapper label="FROM PAST FORGE PARTICIPANTS">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        What happens when you build with the <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>right people.</span>
      </h2>

      <p className="text-sm text-muted-foreground/50 text-center mb-12">
        Dreamers became builders not just because of the right guidance but the people they surrounded themselves with.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-card border border-border rounded-2xl p-8 relative shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
          >
            <span className="font-serif text-[80px] text-primary/10 absolute top-0 left-5 leading-none select-none">"</span>
            <p className="text-[15px] text-foreground italic leading-[1.8] mt-12">{t.quote}</p>
            <div className="mt-8">
              <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
              <p className="text-[13px] text-muted-foreground">{t.role}</p>
              <p className="text-[13px] text-muted-foreground">{t.program}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default SocialProof;
