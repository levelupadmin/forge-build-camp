import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

import founderImg from "/personas/founder.jpg";
import marketerImg from "/personas/marketer.jpg";
import operatorImg from "/personas/operator.jpg";
import professionalImg from "/personas/professional.jpg";

interface WhoIsForProps {
  onOpenModal: () => void;
}

const personas = [
  {
    title: "The Founder",
    tagline: "Ship faster. Smaller team.",
    desc: "Your competitors are shipping faster, spending less, and doing it with smaller teams. AI is why. You don't need to hire more — you need to build smarter.",
    image: founderImg,
  },
  {
    title: "The Marketer",
    tagline: "End the manual grind.",
    desc: "Your briefs take hours. Your content calendar is always behind. Your reports are still manual. There's a version of your job where none of that is true. AI gets you there.",
    image: marketerImg,
  },
  {
    title: "The Operator",
    tagline: "Kill the busywork.",
    desc: "You can see exactly where the hours are being wasted. You've just not had the tools to fix it. Automations will feel like someone finally listened to you.",
    image: operatorImg,
  },
  {
    title: "The Professional",
    tagline: "Move faster. Charge more.",
    desc: "You're good at what you do. But the person who knows how to use AI in your field will move faster, charge more, and get chosen first.",
    image: professionalImg,
  },
];

const WhoIsFor = ({ onOpenModal }: WhoIsForProps) => {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper>
      <SectionHeading label="WHO THIS IS FOR">
        Built for people who <Accent>move the needle.</Accent>
      </SectionHeading>

      {/* Desktop: 4-up compact editorial grid */}
      <div className="hidden md:grid grid-cols-4 gap-4 max-w-[1100px] mx-auto">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-foreground/5"
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-transparent" />

            {/* Default state — name + tagline */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 transition-opacity duration-300 group-hover:opacity-0">
              <p className="font-bold text-white text-[20px] leading-tight">{p.title}</p>
              <p className="text-primary text-[12px] font-semibold uppercase tracking-[0.14em] mt-1.5 font-mono">
                {p.tagline}
              </p>
            </div>

            {/* Hover — full description */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-bold text-white text-[20px] leading-tight">{p.title}</p>
              <p className="text-white/80 text-[13px] mt-2 leading-[1.55]">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: tab strip + single focused card */}
      <div className="md:hidden max-w-[420px] mx-auto">
        <div className="flex gap-1.5 mb-4 overflow-x-auto scrollbar-hide -mx-5 px-5">
          {personas.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`shrink-0 px-3.5 py-2 rounded-full text-[11px] uppercase tracking-[0.14em] font-semibold transition-colors ${
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-foreground/5 text-muted-foreground"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-foreground/5"
          >
            <img
              src={personas[active].image}
              alt={personas[active].title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <p className="font-bold text-white text-[22px] leading-tight">{personas[active].title}</p>
              <p className="text-primary text-[11px] font-semibold uppercase tracking-[0.14em] mt-1.5 font-mono">
                {personas[active].tagline}
              </p>
              <p className="text-white/85 text-[13px] mt-3 leading-[1.55]">
                {personas[active].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-center mt-10 md:mt-12">
        <button
          onClick={onOpenModal}
          className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm uppercase tracking-wider btn-glow"
        >
          REQUEST AN INVITE
        </button>
      </div>
    </SectionWrapper>
  );
};

export default WhoIsFor;
