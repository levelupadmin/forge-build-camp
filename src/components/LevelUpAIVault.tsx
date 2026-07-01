import SectionWrapper from "./SectionWrapper";
import SectionHeading, { Accent } from "./SectionHeading";
import { motion } from "framer-motion";

const LevelUpAIVault = () => {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        align="center"
        description="14,000+ resources. Yours from Day 1. Prompts, workflows, agent templates, tool comparisons, case walkthroughs, all of it maintained and expanded across every cohort."
      >
        Lifetime access to <Accent>the LevelUp AI Vault.</Accent>
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-3 mt-6 md:mt-8"
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
