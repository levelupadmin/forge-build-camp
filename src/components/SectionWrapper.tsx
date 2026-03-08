import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  bg?: string;
}

const SectionWrapper = ({ id, label, children, className = "", bg = "" }: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-20 md:py-28 border-t border-[rgba(255,255,255,0.05)] ${bg} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        {label && <p className="section-label text-center mb-4">{label}</p>}
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
