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
        What happens when you<br />build with the <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>right people.</span>
      </h2>

      <p className="text-sm text-muted-foreground/50 text-center mb-10">
        These quotes are from past Forge residential programs. Forge AI Residency follows the same format.
      </p>

      <div className="grid md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white border border-black/[0.06] rounded-2xl p-7 relative shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
          >
            <span className="font-serif text-[72px] text-primary/15 absolute top-1 left-4 leading-none">"</span>
            <p className="text-[15px] text-foreground italic leading-[1.7] mt-10">{t.quote}</p>
            <div className="mt-6">
              <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
              <p className="text-[13px] text-muted-foreground">{t.role}</p>
              <p className="text-[13px] text-muted-foreground">{t.program}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-[12px] text-muted-foreground/50 text-center mt-8 italic">
        Forge AI Residency participants will be featured after the program completes.
      </p>
    </SectionWrapper>
  );
};

export default SocialProof;
