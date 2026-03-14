import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with parallax */}
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

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Accent glow blob with parallax */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-float will-change-transform"
        style={{
          background: "radial-gradient(circle, hsla(217,91%,60%,0.12), transparent 70%)",
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 text-center max-w-[720px] px-6"
      >
        <h1 className="font-bold tracking-[-0.025em] text-foreground leading-[1.0]">
          <span className="block text-[48px] md:text-[88px]">the <span className="text-shimmer">Forge</span></span>
          <span className="block text-[48px] md:text-[88px]">AI <span className="font-serif italic font-normal">Residency</span></span>
        </h1>

        <p className="mt-6 text-[15px] md:text-[17px] text-muted-foreground tracking-wide leading-relaxed max-w-[600px] mx-auto">
          An invite-only residency designed to help you learn AI by building, experimenting, and launching while collaborating with a community of like-minded builders.
        </p>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 flex items-center justify-center gap-3 md:gap-6 text-[13px] md:text-[14px] text-muted-foreground/70 tracking-wide"
        >
          <span>24 Builders</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span>9 Days</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span>1 Villa</span>
        </motion.div>

        <div className="mt-8">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold rounded-full px-12 py-4 sm:py-4 text-base btn-shine cta-pulse"
          >
            REQUEST AN INVITE →
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 font-semibold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground/40 scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
