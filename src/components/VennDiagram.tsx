import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const narratives = [
  {
    label: "Learning",
    description: "AI moves fast. We give you the frameworks, tools, and mental models to not just keep up, but lead.",
  },
  {
    label: "Networking",
    description: "You're only as good as the room you're in. We curate a cohort of builders who push each other forward.",
  },
  {
    label: "Building",
    description: "Theory without execution is noise. You ship real products, automations, and content, every single day.",
  },
];

const VennDiagram = () => {
  // Desktop dimensions
  const cx = 260;
  const cy = 230;
  const r = 140;
  const offset = 85;

  // Mobile dimensions
  const mcx = 165;
  const mcy = 165;
  const mr = 95;
  const moffset = 58;

  const circlePositions = [
    { x: -1, y: -1 },   // top-left: Learning
    { x: 1, y: -1 },    // top-right: Networking
    { x: 0, y: 1 },     // bottom-center: Building
  ];

  const labelOffsets = [
    { dx: -45, dy: -55 },
    { dx: 45, dy: -55 },
    { dx: 0, dy: 65 },
  ];

  return (
    <SectionWrapper id="ethos" label="OUR ETHOS" variant="dark">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-6">
        What makes{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
          the Forge
        </span>{" "}
        different
      </h2>

      <p className="text-[16px] md:text-[17px] leading-[1.8] text-muted-foreground text-center max-w-[520px] mx-auto mb-16">
        Three forces, one intersection. Every part of the residency is designed around this philosophy.
      </p>

      <div className="flex flex-col items-center">
        {/* Desktop SVG */}
        <div className="hidden md:block relative">
          <svg width={520} height={480} viewBox="0 0 520 480" className="overflow-visible">
            <defs>
              <radialGradient id="ethos-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Center glow */}
            <motion.circle
              cx={cx}
              cy={cy + 10}
              r={90}
              fill="url(#ethos-glow)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 1.2 }}
            />

            {/* Circles */}
            {circlePositions.map((pos, i) => (
              <motion.circle
                key={i}
                cx={cx + pos.x * offset}
                cy={cy + pos.y * offset + 10}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={1.5}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.4, ease: "easeOut" }}
                style={{ transformOrigin: `${cx + pos.x * offset}px ${cy + pos.y * offset + 10}px` }}
              />
            ))}

            {/* Labels */}
            {circlePositions.map((pos, i) => (
              <motion.text
                key={`label-${i}`}
                x={cx + pos.x * offset + labelOffsets[i].dx}
                y={cy + pos.y * offset + 10 + labelOffsets[i].dy}
                textAnchor="middle"
                className="fill-foreground/50 text-[12px] font-semibold uppercase tracking-[0.18em]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.4 + 0.3 }}
              >
                {narratives[i].label}
              </motion.text>
            ))}

            {/* Center text */}
            <motion.g
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
              style={{ transformOrigin: `${cx}px ${cy + 10}px` }}
            >
              <text
                x={cx}
                y={cy + 5}
                textAnchor="middle"
                className="fill-muted-foreground text-[13px] font-medium"
              >
                the
              </text>
              <text
                x={cx}
                y={cy + 28}
                textAnchor="middle"
                className="fill-primary text-[26px] font-serif italic font-bold"
              >
                Forge
              </text>
            </motion.g>
          </svg>
        </div>

        {/* Mobile SVG */}
        <div className="block md:hidden relative">
          <svg width={330} height={340} viewBox="0 0 330 340" className="overflow-visible">
            <defs>
              <radialGradient id="ethos-glow-m" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </radialGradient>
            </defs>

            <motion.circle
              cx={mcx}
              cy={mcy + 8}
              r={60}
              fill="url(#ethos-glow-m)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 1.2 }}
            />

            {circlePositions.map((pos, i) => (
              <motion.circle
                key={i}
                cx={mcx + pos.x * moffset}
                cy={mcy + pos.y * moffset + 8}
                r={mr}
                fill="none"
                stroke="hsl(var(--foreground) / 0.1)"
                strokeWidth={1.2}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.4, ease: "easeOut" }}
                style={{ transformOrigin: `${mcx + pos.x * moffset}px ${mcy + pos.y * moffset + 8}px` }}
              />
            ))}

            {circlePositions.map((pos, i) => {
              const mLabelOffsets = [
                { dx: -30, dy: -38 },
                { dx: 30, dy: -38 },
                { dx: 0, dy: 48 },
              ];
              return (
                <motion.text
                  key={`mlabel-${i}`}
                  x={mcx + pos.x * moffset + mLabelOffsets[i].dx}
                  y={mcy + pos.y * moffset + 8 + mLabelOffsets[i].dy}
                  textAnchor="middle"
                  className="fill-foreground/50 text-[10px] font-semibold uppercase tracking-[0.14em]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.4 + 0.3 }}
                >
                  {narratives[i].label}
                </motion.text>
              );
            })}

            <motion.g
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
              style={{ transformOrigin: `${mcx}px ${mcy + 8}px` }}
            >
              <text x={mcx} y={mcy + 3} textAnchor="middle" className="fill-muted-foreground text-[11px] font-medium">the</text>
              <text x={mcx} y={mcy + 22} textAnchor="middle" className="fill-primary text-[20px] font-serif italic font-bold">Forge</text>
            </motion.g>
          </svg>
        </div>

        {/* Narrative cards below the diagram */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-[900px] mt-12 md:mt-16 w-full">
          {narratives.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
              className="text-center"
            >
              <h3 className="font-serif italic text-[24px] md:text-[28px] text-foreground font-bold mb-3">
                {n.label}
              </h3>
              <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.8]">
                {n.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VennDiagram;
