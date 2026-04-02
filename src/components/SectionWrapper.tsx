import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

const SectionWrapper = ({ id, children, className = "", variant = "light" }: SectionWrapperProps) => {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`py-[23px] md:py-[70px] overflow-hidden relative ${className}`}
      style={isDark ? {
        background: "#0A0A0A",
        // Override CSS variables locally for dark sections
        ["--foreground" as string]: "0 0% 96%",
        ["--muted-foreground" as string]: "0 0% 100% / 0.55",
        ["--card" as string]: "0 0% 12%",
        ["--card-foreground" as string]: "0 0% 96%",
        ["--border" as string]: "0 0% 100% / 0.08",
      } : undefined}
    >
      {/* Subtle top/bottom border for dark sections */}
      {isDark && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
