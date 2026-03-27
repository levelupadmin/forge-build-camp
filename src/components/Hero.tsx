import { motion } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";
import forgeLogo from "@/assets/forge-logo.png";

interface HeroProps {
  onOpenModal: () => void;
}

const stats = [
  { number: "600+", label: "Alumni" },
  { number: "25+", label: "Editions" },
  { number: "400+", label: "Projects" },
  { number: "11", label: "Cities" },
];

const Hero = ({ onOpenModal }: HeroProps) => {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
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
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-110"
          poster="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
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
        className="relative z-10 text-center max-w-[720px] px-6 mb-24"
      >
        <img src={forgeLogo} alt="The Forge AI" className="h-14 md:h-20 mx-auto mb-6" />

        <h1 className="font-serif italic font-black tracking-[-0.025em] leading-[1.08] text-[48px] md:text-[80px]" style={{ color: '#F2EEE8' }}>
          <span className="block">Learn AI by</span>
          <span className="block">
            <span className="font-serif italic" style={{ fontWeight: 700, color: '#3B82F6' }}>Building</span> with AI.
          </span>
        </h1>

        <p className="mt-6 text-[15px] md:text-[17px] tracking-wide leading-relaxed max-w-[540px] mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
          An invite-only residency for founders, marketers, and operators who want to stop watching AI happen and start building with it.
        </p>

        <div className="mt-8">
          <button
            onClick={onOpenModal}
            className="bg-[#3B82F6] text-white font-semibold rounded-full px-7 py-3 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            REQUEST AN INVITE
          </button>
        </div>

        <p className="mt-3 font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.85)' }}>
          <span className="text-[#3B82F6]">·</span> Block 1 of 20 invites
        </p>
      </motion.div>

      {/* Stats bar pinned to bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-center py-5 px-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex-1 flex items-center justify-center">
              {i > 0 && <div className="w-px h-10 bg-white/15 flex-shrink-0" />}
              <div className="text-center flex-1">
                <div
                  className="font-serif italic font-black text-[28px] md:text-[36px]"
                  style={{ color: "#F2EEE8" }}
                >
                  {stat.number}
                </div>
                <div
                  className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
