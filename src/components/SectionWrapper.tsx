import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
  bg?: string;
}

const SectionWrapper = ({ id, label, children, className = "", variant = "default", bg }: SectionWrapperProps) => {
  const bgClass = bg ? bg : variant === "muted" ? "bg-[hsl(30,15%,95%)]" : "";

  return (
    <section id={id} className={`py-16 md:py-24 overflow-hidden ${bgClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        {label && (
          <p className="section-label text-center mb-6">{label}</p>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
