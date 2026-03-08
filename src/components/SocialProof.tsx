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
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-4">
        What happens when you<br />build with the right people.
      </h2>

      <p className="text-sm text-forge-dim text-center mb-8">
        These quotes are from past Forge residential programs in filmmaking and content creation. Forge AI Residency follows the same format. Immersive. Mentor-led. Build-first.
      </p>

      <div className="grid md:grid-cols-3 gap-4 max-w-[960px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 relative"
          >
            <span className="font-bold text-[64px] text-primary/20 absolute top-2 left-4 leading-none">"</span>
            <p className="text-[16px] text-foreground italic leading-[1.7] mt-8">{t.quote}</p>
            <div className="mt-6">
              <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
              <p className="text-[13px] text-forge-muted">{t.role}</p>
              <p className="text-[13px] text-forge-muted">{t.program}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[12px] text-forge-dim text-center mt-8 italic">
        Forge AI Residency participants will be featured after Cohort 01 completes.
      </p>
    </SectionWrapper>
  );
};

export default SocialProof;
