import { motion } from "framer-motion";
import studentAarya from "@/assets/community/student-aarya.jpg";

/**
 * Editorial pull-quote section.
 * Sits between Pillars and Mentors. Establishes the kind of person who pays ₹1.5L
 * and what they came for. The voice is the buyer's, not ours.
 */
const AaryaQuote = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center"
        >
          {/* Photo column */}
          <div className="flex md:block justify-center">
            <div className="relative w-[120px] h-[150px] md:w-[180px] md:h-[225px] overflow-hidden">
              <img
                src={studentAarya}
                alt="Aarya Jain"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Quote column */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/45 block mb-5">
              WHY WE BUILT THIS
            </span>
            <blockquote className="font-editorial italic text-[24px] md:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em] text-foreground">
              <span className="text-primary">&ldquo;</span>What excites me most about AI is not content generation or productivity hacks. It is the possibility of redesigning how organizations think and execute.<span className="text-primary">&rdquo;</span>
            </blockquote>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-foreground/30" />
              <div>
                <p className="font-semibold text-foreground text-[15px] md:text-[16px]">
                  Aarya Jain
                </p>
                <p className="text-foreground/55 text-[12px] md:text-[13px]">
                  Director, Naprod Life Sciences
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AaryaQuote;
