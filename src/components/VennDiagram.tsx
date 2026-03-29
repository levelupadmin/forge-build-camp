import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const VennDiagram = () => {
  const r = 130;
  const rMobile = 85;
  const cx = 250;
  const cy = 220;
  const offset = 80;
  const offsetMobile = 52;

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center">
        {/* Desktop Venn */}
        <div className="hidden md:block relative">
          <svg width={500} height={440} viewBox="0 0 500 440" className="overflow-visible">
            <defs>
              <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glow in center */}
            <circle cx={cx} cy={cy + 20} r={80} fill="url(#center-glow)" />

            {/* Learning - top left */}
            <motion.circle
              cx={cx - offset}
              cy={cy - offset + 20}
              r={r}
              fill="none"
              stroke="hsl(var(--foreground) / 0.12)"
              strokeWidth={1.5}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
            />
            <motion.text
              x={cx - offset - 30}
              y={cy - offset - 30}
              textAnchor="middle"
              className="fill-foreground/60 text-[13px] font-semibold uppercase tracking-[0.15em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Learning
            </motion.text>

            {/* Networking - top right */}
            <motion.circle
              cx={cx + offset}
              cy={cy - offset + 20}
              r={r}
              fill="none"
              stroke="hsl(var(--foreground) / 0.12)"
              strokeWidth={1.5}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            />
            <motion.text
              x={cx + offset + 30}
              y={cy - offset - 30}
              textAnchor="middle"
              className="fill-foreground/60 text-[13px] font-semibold uppercase tracking-[0.15em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Networking
            </motion.text>

            {/* Building - bottom center */}
            <motion.circle
              cx={cx}
              cy={cy + offset + 20}
              r={r}
              fill="none"
              stroke="hsl(var(--foreground) / 0.12)"
              strokeWidth={1.5}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.text
              x={cx}
              y={cy + offset + r - 10}
              textAnchor="middle"
              className="fill-foreground/60 text-[13px] font-semibold uppercase tracking-[0.15em]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Building
            </motion.text>

            {/* Center text */}
            <motion.text
              x={cx}
              y={cy + 14}
              textAnchor="middle"
              className="fill-primary text-[22px] font-serif italic font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              the Forge
            </motion.text>
          </svg>
        </div>

        {/* Mobile Venn */}
        <div className="block md:hidden relative">
          <svg width={320} height={300} viewBox="0 0 320 300" className="overflow-visible">
            <defs>
              <radialGradient id="center-glow-m" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={160} cy={155} r={55} fill="url(#center-glow-m)" />

            <motion.circle cx={160 - offsetMobile} cy={155 - offsetMobile + 15} r={rMobile} fill="none" stroke="hsl(var(--foreground) / 0.12)" strokeWidth={1.2}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
            <motion.text x={160 - offsetMobile - 20} y={155 - offsetMobile - 30} textAnchor="middle" className="fill-foreground/60 text-[11px] font-semibold uppercase tracking-[0.12em]"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>Learning</motion.text>

            <motion.circle cx={160 + offsetMobile} cy={155 - offsetMobile + 15} r={rMobile} fill="none" stroke="hsl(var(--foreground) / 0.12)" strokeWidth={1.2}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} />
            <motion.text x={160 + offsetMobile + 20} y={155 - offsetMobile - 30} textAnchor="middle" className="fill-foreground/60 text-[11px] font-semibold uppercase tracking-[0.12em]"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.45 }}>Networking</motion.text>

            <motion.circle cx={160} cy={155 + offsetMobile + 15} r={rMobile} fill="none" stroke="hsl(var(--foreground) / 0.12)" strokeWidth={1.2}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} />
            <motion.text x={160} y={155 + offsetMobile + rMobile - 5} textAnchor="middle" className="fill-foreground/60 text-[11px] font-semibold uppercase tracking-[0.12em]"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>Building</motion.text>

            <motion.text x={160} y={160} textAnchor="middle" className="fill-primary text-[16px] font-serif italic font-bold"
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>the Forge</motion.text>
          </svg>
        </div>

        {/* Narrative line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground text-center max-w-[560px] mt-8 md:mt-12"
        >
          We meet builders at the intersection of{" "}
          <span className="font-semibold text-foreground">learning</span>,{" "}
          <span className="font-semibold text-foreground">networking</span>, and{" "}
          <span className="font-semibold text-foreground">building</span> — to turn them into AI-native operators.
        </motion.p>
      </div>
    </SectionWrapper>
  );
};

export default VennDiagram;
