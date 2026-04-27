import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  label?: string;
  /** Section number — "01 / 10" style. If provided, renders as a mono label above `label`. */
  number?: string;
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
  /** Suppress the edge-lighting rays (for sections where it would compete with content) */
  noEdges?: boolean;
}

const SectionWrapper = ({
  id,
  children,
  className = "",
  variant = "light",
  noEdges = false,
}: SectionWrapperProps) => {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`py-20 md:py-28 overflow-hidden relative ${className}`}
      style={isDark ? {
        background: "#000000",
        ["--foreground" as string]: "0 0% 98%",
        ["--muted-foreground" as string]: "0 0% 100% / 0.55",
        ["--card" as string]: "0 0% 6%",
        ["--card-foreground" as string]: "0 0% 98%",
        ["--border" as string]: "0 0% 100% / 0.08",
      } : undefined}
    >
      {isDark && (
        <>
          {!noEdges && <div className="forge-edges" aria-hidden />}
          <div className="forge-grain" aria-hidden />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </>
      )}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 lg:px-20"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
