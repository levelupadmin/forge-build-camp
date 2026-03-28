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
    <section id={id} className={`py-8 md:py-12 overflow-hidden ${bg} ${className}`}>
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
