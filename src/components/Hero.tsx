import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

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
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-110"
          poster="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Accent glow blob with parallax */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full amber-glow-blob will-change-transform"
        style={{
          background: "radial-gradient(circle, hsla(217,91%,60%,0.10), transparent 70%)",
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
        <h1 className="font-bold text-[40px] md:text-[72px] leading-[1.08] md:leading-[1.05] tracking-[-0.025em] text-foreground">
          Learn AI by<br />
          <span className="text-primary">Building</span> with AI.
        </h1>

        <p className="mt-6 text-[15px] md:text-[17px] text-muted-foreground tracking-wide">
          <span className="text-primary font-semibold">20 builders</span> × <span className="text-primary font-semibold">15 days</span> × <span className="text-primary font-semibold">1 room</span> = Infinite learning
        </p>

        <div className="mt-8">
          <button onClick={onOpenModal} className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold rounded-full px-10 py-4 sm:py-3.5 text-base cta-pulse">
            Request an Invite
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
