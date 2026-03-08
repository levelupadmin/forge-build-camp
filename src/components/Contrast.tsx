import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const rows = [
  ["Watch 40 hours of video", "Build something real every day"],
  ["Learn alone on your laptop", "Live and build with serious people"],
  ["Generic curriculum for all", "Three focused pillars for builders"],
  ["Online classes on Zoom", "Fully residential, fully immersive"],
  ["A certificate you barely use", "A product, an automation, and a workflow"],
  ["Finish and figure it out yourself", "Leave with builds, a network, and momentum"],
];

const Contrast = () => {
  return (
    <SectionWrapper id="contrast" label="WHY FORGE">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        Every AI course teaches.<br />
        Forge makes you <span className="text-primary">build.</span>
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="hidden md:grid grid-cols-2 gap-4 mb-4">
          <span className="text-[13px] text-muted-foreground/50 uppercase font-semibold">What others do</span>
          <span className="text-[13px] text-primary uppercase font-semibold">Forge AI Residency</span>
        </div>

        <div className="flex flex-col gap-3">
          {rows.map(([left, right], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="glass-card backdrop-blur-sm p-4 md:grid md:grid-cols-2 md:gap-4 flex flex-col gap-3"
            >
              <div className="flex items-start gap-3 text-muted-foreground/50 text-sm">
                <X size={16} className="mt-0.5 shrink-0 opacity-40" />
                <span>{left}</span>
              </div>
              <div className="flex items-start gap-3 text-foreground text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>{right}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contrast;
