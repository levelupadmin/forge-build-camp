import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

import founderImg from "/personas/founder.jpg";
import marketerImg from "/personas/marketer.jpg";
import operatorImg from "/personas/operator.jpg";
import professionalImg from "/personas/professional.jpg";

const personas = [
  {
    title: "The Founder",
    desc: "Your competitors are shipping faster, spending less, and doing it with smaller teams. AI is why.\nYou do not need to hire more. You need to build smarter.",
    image: founderImg,
    className: "md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[480px]",
  },
  {
    title: "The Marketer",
    desc: "Your briefs take hours. Your content calendar is always behind. Your reports are still manual.\nThere is a version of your job where none of that is true. AI gets you there.",
    image: marketerImg,
    className: "min-h-[240px] md:min-h-0",
  },
  {
    title: "The Operator",
    desc: "You can see exactly where the hours are being wasted. You have just not had the tools to fix it. Automations will feel like someone finally listened to you.",
    image: operatorImg,
    className: "min-h-[240px] md:min-h-0",
  },
  {
    title: "The Professional",
    desc: "You are good at what you do. But the person who knows how to use AI in your field will always move faster, charge more, and get chosen first. That person should be you.",
    image: professionalImg,
    className: "md:col-span-3 min-h-[240px] md:min-h-[220px]",
  },
];

const WhoIsFor = () => {
  return (
    <SectionWrapper label="WHO THIS IS FOR" variant="muted" className="pl-0 pt-[18px] pb-[29px]">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-12">
        Built for people who{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          move the needle.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[1fr_1fr_auto] gap-3 md:gap-4 max-w-[960px] mx-auto">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className={`relative rounded-2xl overflow-hidden cursor-default group ${p.className}`}
          >
            {/* Photo background */}
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-5 md:p-6">
              <p className="font-bold text-white text-lg md:text-xl tracking-tight">
                {p.title}
              </p>
              <p className="text-white/80 text-sm md:text-[15px] mt-1.5 leading-relaxed max-w-md">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhoIsFor;
