import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useMemo } from "react";

const COLS = 40;
const TOTAL = 1000;
const GREY = 840;
const GREEN = 152;
const AMBER = 7;

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
    grey: "bg-white/[0.15]",
    green: "bg-emerald-500/80",
    amber: "bg-primary/70",
    red: "bg-red-500/80",
  };

  return (
    <div className="w-full max-w-[520px] mx-auto">
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
            transition={{ duration: 0.01, delay: Math.min(i * 0.0006, 0.6) }}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5 text-[11px] md:text-[12px]">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-foreground/25 inline-block" />
          <span className="text-muted-foreground">Never used AI · <span className="text-foreground font-semibold">~6.8B</span></span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80 inline-block" />
          <span className="text-muted-foreground">Free chatbot user · <span className="text-foreground font-semibold">~1.3B</span></span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-primary/70 inline-block" />
          <span className="text-muted-foreground">Pays for AI · <span className="text-foreground font-semibold">~15-25M</span></span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-red-500/80 inline-block" />
          <span className="text-muted-foreground">Builders · <span className="text-foreground font-semibold">~2-5M</span></span>
        </span>
      </div>
    </div>
  );
};

const WhyAINow = () => {
  return (
    <SectionWrapper id="why-ai" label="WHY AI. WHY NOW." variant="dark">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-4">
        AI is not the Future.<br />
        It is the&nbsp;Present.<br />
      </h2>

      <p className="text-[16px] md:text-[18px] text-muted-foreground max-w-[520px] mx-auto text-center mb-12 leading-relaxed">
        The businesses that ignored the internet in 2005 did not survive 2015. The ones ignoring AI today will not survive 2030.
        <br /><br />
        You think AI is crowded because you're in an echo chamber, but the real world hasn't even started.
      </p>

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
          1,000 dots = 8.1 billion humans
        </p>
        <DotGrid />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-[22px] md:text-[28px] text-muted-foreground mt-10 max-w-[600px] mx-auto leading-snug font-medium"
      >
        That tiny dot of builders?<br />That's where <span className="text-foreground font-bold">Forge puts you.</span>
      </motion.p>
    </SectionWrapper>
  );
};

export default WhyAINow;
