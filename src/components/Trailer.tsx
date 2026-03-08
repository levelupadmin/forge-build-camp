import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const Trailer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <SectionWrapper id="trailer" label="SEE THE EXPERIENCE">
      <h2 className="font-bold text-[32px] md:text-[48px] leading-[1.1] tracking-tight text-foreground text-center mb-12">
        This is what <span className="text-primary">9 days</span> looks like.
      </h2>

      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden aspect-video border border-primary/20 shadow-[0_0_60px_rgba(240,165,0,0.08)]"
        >
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 z-10 flex items-center justify-center group cursor-pointer"
            >
              {/* Thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
                alt="Forge AI Residency trailer thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/60" />

              {/* Play button */}
              <motion.div
                className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_40px_rgba(240,165,0,0.4)] group-hover:scale-110 transition-transform duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play className="text-primary-foreground ml-1" size={32} fill="currentColor" />
              </motion.div>

              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-foreground/70 font-semibold tracking-wide z-10">
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
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Trailer;
