import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { motion } from "framer-motion";
import { Search, Lock, Brain, Wrench, Server, Bot, MessageSquare, Palette } from "lucide-react";

const categories = [
  { icon: Brain, label: "Agent skills", count: "7,748" },
  { icon: Wrench, label: "Tools", count: "3,537" },
  { icon: Server, label: "MCP servers", count: "1,725" },
  { icon: Bot, label: "Agents", count: "800" },
  { icon: MessageSquare, label: "LLMs", count: "585" },
  { icon: Palette, label: "Design systems", count: "70" },
];

const LevelUpAIVault = () => {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        align="center"
        description="14,465 resources. Yours from Day 1. Prompts, workflows, agent templates, tool comparisons, case walkthroughs, all of it maintained and expanded across every cohort."
      >
        Lifetime access to <Accent>the LevelUp AI Vault.</Accent>
      </SectionHeading>

      {/* Product mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[820px] mx-auto mt-8 md:mt-12"
      >
        <div className="bg-[#f5f3ef] overflow-hidden border border-white/10 shadow-2xl">
          {/* Browser chrome */}
          <div className="bg-white px-4 md:px-5 py-3 border-b border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
              <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
              <div className="w-2 h-2 rounded-full bg-[#28c840]" />
              <div className="flex items-center gap-1.5 ml-3">
                <Lock size={10} className="text-black/40" strokeWidth={2.5} />
                <span className="text-[10px] md:text-[11px] text-black/45 font-semibold uppercase tracking-wider">Private · Forge builders only</span>
              </div>
            </div>
            <span className="hidden md:inline text-[9px] uppercase tracking-wider text-black/40 font-semibold">Live preview</span>
          </div>

          {/* Header + search */}
          <div className="px-5 md:px-7 pt-5 md:pt-6 pb-4 md:pb-5 border-b border-black/10">
            <div className="flex items-start md:items-center justify-between mb-4 md:mb-5 gap-3 flex-col md:flex-row">
              <div>
                <div className="text-[16px] md:text-[18px] font-bold text-black tracking-[-0.01em]">LevelUp AI Library</div>
                <div className="text-[11px] md:text-[12px] text-black/55 mt-0.5">14,465 resources · free for Forge builders</div>
              </div>
              <div className="flex gap-3 md:gap-5 text-[11px] md:text-[12px] text-black/70">
                <span className="font-semibold">All resources</span>
                <span>Start here</span>
                <span>My Stack</span>
                <span>Perks ↗</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-white border border-black/10 px-3 md:px-4 py-2.5 md:py-3">
              <Search size={14} className="text-black/40 shrink-0" strokeWidth={2} />
              <span className="text-[12px] md:text-[13px] text-black/45 flex-1">Search 14,465 skills, tools, agents, servers</span>
              <span className="text-[10px] text-black/55 bg-black/[0.05] px-2 py-0.5 font-mono">⌘K</span>
            </div>
          </div>

          {/* Category grid */}
          <div className="px-5 md:px-7 py-5 md:py-6">
            <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-black/45 mb-3 font-semibold">Browse by category</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-2.5">
              {categories.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="bg-white border border-black/10 p-3 md:p-3.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon size={14} className="text-primary" strokeWidth={2} />
                      <span className="text-[10px] md:text-[11px] text-black/55 font-semibold">{c.label}</span>
                    </div>
                    <div className="text-[18px] md:text-[20px] font-bold text-black tracking-[-0.01em] tabular-nums leading-none">
                      {c.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer chip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center gap-3 mt-8 md:mt-10"
      >
        <span className="h-px w-8 bg-white/20" />
        <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">
          Included in your Forge seat · Yours to keep
        </span>
        <span className="h-px w-8 bg-white/20" />
      </motion.div>
    </SectionWrapper>
  );
};

export default LevelUpAIVault;
