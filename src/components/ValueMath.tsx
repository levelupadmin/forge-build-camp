import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface ValueMathProps {
  onOpenModal: () => void;
}

const givens = [
  { label: "9-day residency in Dharamshala", sub: "All meals, residential stay, curated experiences" },
  { label: "20-builder curated cohort", sub: "Hand-selected from applications — not first come, first served" },
  { label: "Lifetime Forge community", sub: "Alumni guest lectures, meet-ups, private channel" },
  { label: "Three expert-led tracks", sub: "Generative AI · Automations · Product Building" },
  { label: "Mentor access + Demo Day", sub: "Working builders, not lecturers" },
  {
    label: "AI Perks Vault — $7,739,956+ in credits",
    sub: "220 tools, 19 categories. Lifetime access. Updated weekly.",
    emphasize: true,
  },
];

const ValueMath = ({ onOpenModal }: ValueMathProps) => {
  return (
    <SectionWrapper id="value-math" label="THE MATH" variant="dark">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.06] tracking-[-0.025em] text-foreground mb-5">
          You pay once. You get back{" "}
          <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
            multiples.
          </span>
        </h2>
        <p className="text-muted-foreground text-[16px] md:text-[18px] leading-relaxed max-w-[620px] mx-auto mb-14">
          It's not a course fee. It's the lowest-cost entry point we've seen into the AI builder
          economy. Look at what shows up on your side of the ledger.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] gap-6 md:gap-8 items-start">
        {/* LEFT: You pay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border p-8 md:p-9 bg-white/[0.02] md:sticky md:top-24"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            You pay
          </span>
          <div className="mt-3">
            <div className="text-[13px] text-muted-foreground mb-1">Program fee</div>
            <div className="font-bold text-[44px] md:text-[52px] text-foreground leading-none tabular-nums">
              ₹1,20,000
            </div>
            <div className="text-[12px] text-muted-foreground mt-2">
              ≈ <span className="tabular-nums">$1,440</span> inclusive of GST. One-time.
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Break-even
            </div>
            <p className="text-[14px] text-foreground leading-relaxed">
              If you claim even <span className="text-primary font-semibold">2% of the vault</span>,
              you've made back the fee. At 10%, you've made <span className="font-semibold">~6×</span>.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: What you get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/[0.04] to-transparent p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              What you get
            </span>
            <ul className="mt-5 space-y-4">
              {givens.map((g, i) => (
                <motion.li
                  key={g.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                  className={`flex items-start gap-3 pb-4 ${
                    i < givens.length - 1 ? "border-b border-border/40" : ""
                  }`}
                >
                  <div
                    className={`mt-0.5 w-6 h-6 rounded-full shrink-0 flex items-center justify-center ${
                      g.emphasize ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-[15px] md:text-[16px] leading-snug ${
                        g.emphasize ? "font-bold text-foreground" : "font-semibold text-foreground"
                      }`}
                    >
                      {g.label}
                    </div>
                    <div className="text-[13px] text-muted-foreground mt-0.5 leading-relaxed">
                      {g.sub}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center mt-14 md:mt-20"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
          The headline
        </p>
        <p className="font-bold text-foreground text-[22px] md:text-[32px] leading-[1.25] tracking-[-0.015em]">
          ₹1,20,000 in. <span className="text-primary">Up to $7.74M</span> back in AI credits.{" "}
          <br className="hidden md:block" />
          <span className="font-serif italic text-muted-foreground" style={{ fontWeight: 500 }}>
            Plus everything else.
          </span>
        </p>
        <button
          onClick={onOpenModal}
          className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm uppercase tracking-wider btn-glow"
        >
          Request an Invite <ArrowRight size={14} />
        </button>
        <p className="mt-3 text-[11px] tracking-[0.12em] uppercase text-muted-foreground">
          Applications reviewed within 48 hours
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default ValueMath;
