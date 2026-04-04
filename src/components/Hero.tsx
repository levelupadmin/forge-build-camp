import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";
import forgeLogo from "@/assets/forge-logo.png";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-110 md:object-center object-[50%_30%]"
          poster=""
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-float will-change-transform"
        style={{
          background: "radial-gradient(circle, hsla(217,91%,60%,0.12), transparent 70%)",
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.15}px))`,
        }}
      />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 text-center max-w-[720px] px-6 pt-20"
      >
        <img src={forgeLogo} alt="The Forge AI" className="h-14 md:h-20 mx-auto mb-8" />

        <h1 className="font-bold tracking-[-0.025em] leading-[1.08] text-[48px] md:text-[80px]" style={{ color: '#F2EEE8' }}>
          <span className="block text-5xl">Learn AI by</span>
          <span className="block text-5xl mr-px pl-0 pr-0 text-center">
            <span className="font-serif italic" style={{ fontWeight: 700, color: '#3B82F6' }}>Building</span> with AI.
          </span>
        </h1>

        <p className="mt-6 md:text-[17px] tracking-wide leading-relaxed max-w-[540px] mx-auto text-sm text-primary-foreground">
          An invite-only residency for founders, marketers, and operators who want to stop watching AI happen and start building with it.
        </p>

        <div className="mt-8">
          <button
            onClick={onOpenModal}
            className="bg-[#3B82F6] text-white font-semibold rounded-full px-7 py-3 text-sm btn-glow"
          >
            REQUEST AN INVITE
          </button>
        </div>

        <p className="mt-3 text-[11px] tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Block 1 of 20 invites
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
