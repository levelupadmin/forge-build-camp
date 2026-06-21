import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";

interface PillarData {
  num: string;
  title: string;
  desc: string;
  builds: string[];
  tools: string[];
}

const pillars: PillarData[] = [
  {
    num: "01",
    title: "Operations",
    desc: "Map the manual work in your business and build AI that handles it for you. Automations, agents, knowledge bases, voice. The layer that runs your business while you sleep.",
    builds: [
      "2 live AI automations and a personal AI assistant",
      "A knowledge-grounded agent + voice agent for your business",
    ],
    tools: ["n8n", "Claude", "MCP", "Cowork"],
  },
  {
    num: "02",
    title: "Product",
    desc: "Build a working AI product without writing code. Spec it, prompt it, ship it live on a real URL with payments and security.",
    builds: [
      "A functional AI product or internal tool live on a real URL",
      "An eval scorecard that proves it works on real tasks",
    ],
    tools: ["Claude Code", "Lovable", "Supabase", "Vercel"],
  },
];

interface PillarsProps {
  onOpenModal: () => void;
}

const Pillars = ({ onOpenModal }: PillarsProps) => {
  return (
    <SectionWrapper id="pillars" variant="dark">
      <SectionHeading
        label="THE CORE"
        variant="dark"
        description="Each pillar gives you the skills, the tools, and the output you take home."
      >
        Two <Accent>Pillars.</Accent>
      </SectionHeading>

      {/* Clean 2-card editorial grid. Sharp corners. No background images. */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 max-w-[1200px] mx-auto">
        {pillars.map((p, i) => (
          <motion.article
            key={p.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-colors duration-300 p-7 md:p-10 lg:p-12 flex flex-col"
          >
            {/* Top: kicker number */}
            <div className="flex items-baseline gap-3 mb-6 md:mb-8">
              <span className="font-mono text-[40px] md:text-[56px] leading-none font-bold text-primary tabular-nums">
                {p.num}
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
                PILLAR
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-[36px] md:text-[44px] lg:text-[52px] leading-[0.95] tracking-[-0.02em] text-white mb-5 md:mb-6">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-white/75 text-[15px] md:text-[16px] leading-[1.65] mb-8 md:mb-10 max-w-[440px]">
              {p.desc}
            </p>

            {/* What you'll build */}
            <div className="mb-8 md:mb-10">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 mb-4">
                What you ship
              </p>
              <ul className="space-y-3">
                {p.builds.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white text-[14px] md:text-[15px] leading-[1.55]">
                    <ArrowRight size={16} strokeWidth={2} className="text-primary mt-1 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="mt-auto pt-6 md:pt-8 border-t border-white/[0.08]">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/45 mb-3">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-white/[0.04] border border-white/15 text-white/85 text-[12px] md:text-[13px] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Single CTA below both pillars */}
      <div className="text-center mt-12 md:mt-16">
        <button
          onClick={onOpenModal}
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold rounded-xl px-8 py-3.5 text-sm uppercase tracking-wider btn-glow"
        >
          Request an Invite
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Pillars;
