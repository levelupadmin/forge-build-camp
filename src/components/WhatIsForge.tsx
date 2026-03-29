import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const stats = [
  { value: "20", label: "BUILDERS" },
  { value: "9", label: "DAYS" },
  { value: "1", label: "BOOTCAMP" },
];

const WhatIsForge = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <SectionWrapper id="what-is-forge">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label text-center mb-6"
        >
          THE RESIDENCY
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-4"
        >
          <p className="text-[18px] md:text-[22px] text-muted-foreground font-medium mb-1">What is the</p>
          <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-foreground">
            <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>Forge</span> AI Residency
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px] md:text-[17px] leading-[1.8] text-muted-foreground text-center max-w-[640px] mx-auto mb-14"
        >
          A 9-day fully residential program where handpicked founders, marketers, and operators learn to build with AI by creating products, automating their business, and creating AI-powered content while living and working alongside a community of like-minded builders and AI experts as their mentors.
        </motion.p>

        {/* Trailer Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[900px] mx-auto mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-foreground/[0.08] shadow-lg">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
                  alt="Forge AI Residency trailer thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-primary-foreground ml-1" size={32} fill="currentColor" />
                </div>
                <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 font-semibold tracking-wide z-10">
                  Watch the trailer
                </p>
              </button>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Forge AI Residency Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 md:gap-6"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 md:gap-6">
              {i > 0 && (
                <span className="text-foreground/20 text-[14px] md:text-[18px] font-light select-none">|</span>
              )}
              <p className="text-primary font-bold text-[14px] md:text-[18px] uppercase tracking-[0.2em]">
                {s.value} {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhatIsForge;
