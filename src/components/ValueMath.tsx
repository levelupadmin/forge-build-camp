import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import dharamshalaImg from "@/assets/pricing-dharamshala.jpg";

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
    label: "AI Perks Vault — $7,627,856+ in credits",
    sub: "210 tools curated for Indian founders. Lifetime access. Updated weekly.",
    emphasize: true,
  },
];

const exclusions = [
  { label: "Travel to and from the venue", sub: "Flights, trains, local transport to Dharamshala" },
  { label: "Personal expenses", sub: "Anything outside the program inclusions" },
  { label: "Single occupancy room upgrade", sub: "Available at additional cost on request" },
];

const ValueMath = ({ onOpenModal }: ValueMathProps) => {
  const [tab, setTab] = useState<"inclusions" | "exclusions">("inclusions");
  const items = tab === "inclusions" ? givens : exclusions;
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
          className="rounded-2xl border border-border bg-white/[0.02] md:sticky md:top-24 overflow-hidden"
        >
          {/* Location banner */}
          <div className="relative aspect-[16/10]">
            <img
              src={dharamshalaImg}
              alt="Dharamshala, Himachal Pradesh"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                The venue
              </span>
              <h3 className="text-white font-bold text-[24px] md:text-[28px] leading-none tracking-[-0.02em] mt-1">
                DHARAMSHALA
              </h3>
              <p className="text-white/70 text-[12px] mt-1">Himachal Pradesh · June 19–27, 2026</p>
            </div>
          </div>

          <div className="p-7 md:p-8">
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
            {/* Tabs */}
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {tab === "inclusions" ? "What you get" : "What's not included"}
              </span>
              <div className="inline-flex gap-1.5 p-1 rounded-full bg-white/[0.03] border border-border/60">
                <button
                  type="button"
                  onClick={() => setTab("inclusions")}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    tab === "inclusions"
                      ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={tab === "inclusions"}
                >
                  Inclusions
                </button>
                <button
                  type="button"
                  onClick={() => setTab("exclusions")}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    tab === "exclusions"
                      ? "bg-red-500 text-white shadow-sm shadow-red-500/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={tab === "exclusions"}
                >
                  Exclusions
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={tab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {items.map((it, i) => {
                  const emphasize = "emphasize" in it && it.emphasize;
                  const isExcluded = tab === "exclusions";
                  return (
                    <li
                      key={it.label}
                      className={`flex items-start gap-3 pb-4 ${
                        i < items.length - 1 ? "border-b border-border/40" : ""
                      }`}
                    >
                      <div
                        className={`mt-0.5 w-6 h-6 rounded-full shrink-0 flex items-center justify-center ${
                          isExcluded
                            ? "bg-red-500/10 text-red-500"
                            : emphasize
                              ? "bg-primary text-primary-foreground"
                              : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isExcluded ? (
                          <X size={14} strokeWidth={3} />
                        ) : (
                          <Check size={14} strokeWidth={3} />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-[15px] md:text-[16px] leading-snug ${
                            emphasize ? "font-bold text-foreground" : "font-semibold text-foreground"
                          }`}
                        >
                          {it.label}
                        </div>
                        <div className="text-[13px] text-muted-foreground mt-0.5 leading-relaxed">
                          {it.sub}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
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
          ₹1,20,000 in. <span className="text-primary">Up to $7.63M</span> back in AI credits.{" "}
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
