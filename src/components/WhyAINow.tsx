import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useMemo } from "react";

// Dot grid: 50 cols x 50 rows = 2500 dots ≈ 8.1B people
// Grey: 2100 dots (84% never used AI ~6.8B)
// Green: 400 dots (16% free chatbot users ~1.3B)
// Amber/Yellow: ~8 dots (0.3% pays for AI ~15-25M)
// Red: 1 dot (0.04% builders ~2-5M)
const COLS = 50;
const TOTAL = 2500;
const GREY = 2100;
const GREEN = 391;
const AMBER = 8;
// RED = 1

const DotGrid = () => {
  const dots = useMemo(() => {
    const arr: string[] = [];
    for (let i = 0; i < TOTAL; i++) {
      if (i < GREY) arr.push("grey");
      else if (i < GREY + GREEN) arr.push("green");
      else if (i < GREY + GREEN + AMBER) arr.push("amber");
      else arr.push("red");
    }
    return arr;
  }, []);

  const colorMap: Record<string, string> = {
    grey: "bg-foreground/15",
    green: "bg-emerald-500/70",
    amber: "bg-primary/80",
    red: "bg-red-500/90",
  };

  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {dots.map((color, i) => (
          <motion.div
            key={i}
            className={`aspect-square rounded-[1.5px] ${colorMap[color]}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.01, delay: Math.min(i * 0.0004, 0.8) }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5 text-[11px] md:text-[12px]">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-foreground/15 inline-block" />
          <span className="text-muted-foreground">Never used AI · <span className="text-foreground font-semibold">~6.8B</span> (84%)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/70 inline-block" />
          <span className="text-muted-foreground">Free chatbot user · <span className="text-foreground font-semibold">~1.3B</span> (16%)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-primary/80 inline-block" />
          <span className="text-muted-foreground">Pays for AI · <span className="text-foreground font-semibold">~15-25M</span> (~0.3%)</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-red-500/90 inline-block" />
          <span className="text-muted-foreground">Builders · <span className="text-foreground font-semibold">~2-5M</span> (~0.04%)</span>
        </span>
      </div>
    </div>
  );
};

const WhyAINow = () => {
  return (
    <SectionWrapper id="why-ai" label="WHY AI. WHY NOW.">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-4">
        AI is the most important<br />skill of <span className="text-primary">this decade.</span>
      </h2>

      <p className="text-[16px] text-muted-foreground max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        Every industry is being reshaped by AI. The question is not whether you should learn it. The question is how fast you can start building with it.
      </p>

      {/* Insight callout */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[600px] mx-auto mb-12 text-center"
      >
        <p className="text-[17px] text-foreground leading-relaxed font-semibold mb-2">
          You think AI is crowded because you're in an echo chamber.
        </p>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          The real world hasn't even started. The builders who move now will define the next decade.
        </p>
      </motion.div>

      {/* Dot grid visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <p className="text-center font-bold text-[20px] md:text-[26px] text-foreground mb-1">
          Each dot is ~3.2 million people
        </p>
        <p className="text-center text-[13px] text-muted-foreground/60 mb-6 font-mono">
          2,500 dots = 8.1 billion humans. Color = most advanced AI interaction.
        </p>
        <DotGrid />
      </motion.div>

      {/* Caption below matrix */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-[22px] md:text-[28px] text-muted-foreground mt-8 mb-14 max-w-[600px] mx-auto leading-snug font-medium"
      >
        That tiny sliver of builders?<br />That's where <span className="text-foreground font-bold">Forge puts you.</span>
      </motion.p>
    </SectionWrapper>
  );
};

export default WhyAINow;
