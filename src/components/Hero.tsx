import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";
import { ChevronDown } from "lucide-react";
import forgeLogo from "@/assets/forge-logo.png";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110"
          poster="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-background/60" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-float will-change-transform"
        style={{
          background: "radial-gradient(circle, hsla(217,91%,60%,0.12), transparent 70%)",
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 text-center max-w-[720px] px-6"
      >
        <h1 className="font-bold tracking-[-0.025em] text-foreground leading-[1.08] text-[48px] md:text-[80px]">
          Learn AI by <span className="font-serif italic font-black text-primary">Building</span> with AI.
        </h1>

        <p className="mt-6 text-[15px] md:text-[17px] text-muted-foreground tracking-wide leading-relaxed max-w-[540px] mx-auto">
          An invite-only residency for founders, marketers, and operators who want to stop watching AI happen and start building with it.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 flex items-center justify-center gap-3 md:gap-5 text-[12px] md:text-[13px] font-mono uppercase tracking-wider text-muted-foreground/70"
        >
          <span>600+ Alumni</span>
          <span className="w-px h-3 bg-muted-foreground/30" />
          <span>25+ Editions</span>
          <span className="w-px h-3 bg-muted-foreground/30" />
          <span>400+ Projects</span>
          <span className="w-px h-3 bg-muted-foreground/30" />
          <span>11 Cities</span>
        </motion.div>

        <div className="mt-8">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold rounded-full px-12 py-4 sm:py-4 text-base btn-shine cta-pulse"
          >
            REQUEST AN INVITE →
          </button>
        </div>

        <p className="text-[13px] text-muted-foreground/40 mt-3">
          Block 1 of 20 invites open.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-mono">Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground/40 scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
