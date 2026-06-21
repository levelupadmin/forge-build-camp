import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyMobileCTAProps {
  onOpenModal: () => void;
}

/**
 * Always-visible bottom CTA bar on mobile. Appears once the user scrolls
 * past the hero. Hidden on desktop. Critical for mobile-first conversion.
 */
const StickyMobileCTA = ({ onOpenModal }: StickyMobileCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past 60% of the first viewport
      const threshold = window.innerHeight * 0.6;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-3 bg-gradient-to-t from-background via-background/95 to-transparent"
        >
          <button
            onClick={onOpenModal}
            className="w-full bg-primary text-primary-foreground font-semibold rounded-xl py-4 text-sm uppercase tracking-wider btn-glow shadow-2xl"
          >
            Request an Invite
          </button>
          <p className="text-center mt-2 font-mono text-[9px] tracking-[0.22em] uppercase text-foreground/45">
            20 invites per cohort
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
