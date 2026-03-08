import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" />

      {/* Amber glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full amber-glow-blob"
        style={{ background: "radial-gradient(circle, hsla(40,100%,47%,0.08), transparent 70%)" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 text-center max-w-[640px] px-6"
      >
        {/* Cohort badge */}
        <div className="inline-flex items-center gap-2 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary dot-pulse inline-block" />
          <span className="font-mono text-[11px] text-primary tracking-[0.1em]">
            COHORT 01 &middot; DHARAMSHALA &middot; 20 SEATS
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-[800] text-[40px] md:text-[76px] leading-[1.08] md:leading-[1.05] tracking-[-0.025em] text-foreground">
          Learn AI by<br />
          <span className="text-primary">Building</span> with AI.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-[17px] md:text-[19px] text-forge-muted max-w-[520px] mx-auto leading-relaxed">
          A 9-day residential program in the Himalayas.<br className="hidden sm:block" />
          Three AI skills. Real mentors. Real builds.<br className="hidden sm:block" />
          Leave with products, not certificates.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center">
          <button onClick={onOpenModal} className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold rounded-full px-8 py-4 sm:py-3.5 text-base cta-pulse">
            Request an Invite →
          </button>
          <a href="#pillars" className="w-full sm:w-auto border border-[rgba(255,255,255,0.18)] text-foreground font-medium rounded-full px-8 py-4 sm:py-3.5 text-base text-center hover:border-[rgba(255,255,255,0.3)] transition-colors">
            See What You'll Build
          </a>
        </div>

        {/* Stats */}
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap text-[13px] text-forge-muted">
          <span>9 Days Residential</span>
          <span className="text-forge-dim">|</span>
          <span>3 AI Mentors</span>
          <span className="text-forge-dim">|</span>
          <span>20 Seats Only</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 chevron-bounce">
        <ChevronDown className="text-primary" size={24} />
      </div>
    </section>
  );
};

export default Hero;
