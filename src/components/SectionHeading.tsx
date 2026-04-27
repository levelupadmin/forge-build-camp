import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  /** Short uppercase kicker label above the headline (e.g. "YOUR OUTCOMES") */
  label?: string;
  /** Headline content. Wrap accent words in <Accent>…</Accent> for consistent styling. */
  children: ReactNode;
  /** Optional description paragraph below the headline */
  description?: ReactNode;
  /** Alignment — center by default */
  align?: "left" | "center";
  /** Variant — controls label/text colors in dark sections */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Wrap any highlighted words inside a headline with this to get the brand-consistent
 * editorial italic serif + primary-blue treatment.
 */
export const Accent = ({ children }: { children: ReactNode }) => (
  <span className="font-editorial italic text-primary" style={{ fontWeight: 600 }}>
    {children}
  </span>
);

const SectionHeading = ({
  label,
  children,
  description,
  align = "center",
  variant = "light",
  className = "",
}: SectionHeadingProps) => {
  const isDark = variant === "dark";
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const maxW = align === "center" ? "max-w-[720px] mx-auto" : "max-w-[720px]";

  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-14 ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-px w-6 bg-primary/50" />
          <span
            className={`font-mono text-[10px] md:text-[11px] tracking-[0.28em] uppercase ${
              isDark ? "text-white/55" : "text-primary/70"
            }`}
          >
            {label}
          </span>
          <span className="h-px w-6 bg-primary/50" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={`font-bold tracking-[-0.025em] leading-[1.02] ${
          isDark ? "text-white" : "text-foreground"
        } ${maxW}`}
        style={{ fontSize: "clamp(34px, 6.2vw, 72px)" }}
      >
        {children}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`mt-5 md:mt-6 text-[15px] md:text-[17px] leading-[1.65] ${
            isDark ? "text-white/60" : "text-muted-foreground"
          } max-w-[560px] ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
