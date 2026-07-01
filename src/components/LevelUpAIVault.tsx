import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const LevelUpAIVault = () => {
  return (
    <SectionWrapper variant="dark" className="!py-16 md:!py-24">
      <div className="max-w-[880px] mx-auto text-center">
        {/* Kicker chip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-6 bg-primary/50" />
          <span className="text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-white/60 font-semibold">
            Bonus · Included with your seat
          </span>
          <span className="h-px w-6 bg-primary/50" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-bold tracking-[-0.025em] leading-[1.02] text-white text-[40px] md:text-[64px] lg:text-[72px] mb-6 md:mb-8"
        >
          <span className="font-editorial italic text-primary" style={{ fontWeight: 600 }}>14,000+</span> resources.
          <br />
          <span className="font-editorial italic text-primary" style={{ fontWeight: 600 }}>Yours from Day 1.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/75 text-[15px] md:text-[17px] leading-[1.65] max-w-[640px] mx-auto"
        >
          Every builder gets full access to the LevelUp AI Vault: the internal library our team and mentors use in their own businesses. Prompts, workflows, agent templates, tool comparisons, case walkthroughs, all of it maintained and expanded across every cohort.
        </motion.p>

        {/* Footer chip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 md:mt-14 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-white/20" />
          <span className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">
            Included in your Forge seat · Yours to keep
          </span>
          <span className="h-px w-8 bg-white/20" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default LevelUpAIVault;
