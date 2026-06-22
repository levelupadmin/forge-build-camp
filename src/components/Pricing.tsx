import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
// Sri Lanka venue image bundled locally so the image always loads.
import venueImage from "@/assets/venue-srilanka.jpg";

interface PricingProps {
  onOpenModal: () => void;
}

const inclusions = [
  "Residential stay on double occupancy",
  "All meals throughout the program",
  "Both tracks: Operations + Product",
  "Expert faculty throughout the residency",
  "Curated experiences during the program",
  "Community access after the program",
  "The Forge AI Goodie Bag",
  "Demo Day on Day 7",
];

const exclusions = [
  "Travel to and from the venue",
  "Travel insurance",
  "Personal expenses",
];

const Pricing = ({ onOpenModal }: PricingProps) => {
  return (
    <SectionWrapper id="pricing">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.025em] text-foreground text-center mb-3">
        What it costs to be in <span className="font-editorial italic text-primary" style={{ fontWeight: 600 }}>the room.</span>
      </h2>
      <p className="text-center text-foreground/55 text-[15px] md:text-[16px] mb-14 md:mb-16 max-w-[520px] mx-auto">
        One fee. Everything covered. Twenty seats per cohort.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10 max-w-[1100px] mx-auto">
        {/* LEFT: Venue hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
        <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[4/5.2] shadow-lg">
          <img
            src={venueImage}
            alt="Sri Lanka, the Forge AI Edition 1 venue"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

          {/* Top badge */}
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
            <span className="text-[10px] tracking-[0.28em] uppercase text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/20">
              VENUE
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-white bg-primary px-3 py-1.5">
              Early Bird Open
            </span>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <p className="font-editorial italic text-[42px] md:text-[56px] leading-[0.95] tracking-[-0.02em]">
              Sri Lanka
            </p>
            <p className="text-white/80 text-[14px] md:text-[15px] mt-3 max-w-[340px] leading-[1.5]">
              A 7-day residency at a private villa estate. The room, the meals, the work, the magic. All inside.
            </p>
          </div>
        </div>

        {/* Dates row directly below venue image */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border p-4 md:p-5">
            <p className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">Online Prep</p>
            <p className="font-bold text-[18px] md:text-[20px] text-foreground leading-tight">5 sessions</p>
            <p className="text-foreground/60 text-[12px] md:text-[13px] mt-1">Sept 5 to 9, 2026</p>
          </div>
          <div className="bg-card border border-border p-4 md:p-5">
            <p className="text-[10px] uppercase tracking-wider text-foreground/55 font-semibold mb-1">In Residence</p>
            <p className="font-bold text-[18px] md:text-[20px] text-foreground leading-tight">7 days</p>
            <p className="text-foreground/60 text-[12px] md:text-[13px] mt-1">Sept 11 to 17, 2026</p>
          </div>
        </div>
        </motion.div>

        {/* RIGHT: Price + Inclusions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          {/* Price block */}
          <div className="bg-card border border-border p-7 md:p-9 mb-6">
            <p className="text-[10px] tracking-[0.28em] uppercase text-foreground/55 mb-3">
              Program fee
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[14px] md:text-[16px] text-foreground/55 self-start mt-3">INR</span>
              <span className="font-bold text-[60px] md:text-[88px] leading-[0.9] tracking-[-0.03em] text-foreground tabular-nums">
                1,20,000
              </span>
            </div>
            <p className="text-foreground/55 text-[13px] md:text-[14px] mt-2">
              Per person. Inclusive of GST.
            </p>

            {/* EMI option */}
            <div className="mt-5 border-t border-border pt-5">
              <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-2">No-cost EMI available</p>
              <p className="text-foreground/70 text-[13px] md:text-[14px] leading-relaxed">
                Pay 20% on confirmation after you are accepted into the program. The balance over 6 months, no-cost EMI.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full mt-7 bg-primary text-primary-foreground font-semibold rounded-xl py-4 text-sm uppercase tracking-wider btn-glow"
            >
              Request an Invite
            </button>
            <p className="text-foreground/45 text-[12px] text-center mt-3 font-mono tracking-[0.18em] uppercase">
              20 invites per cohort
            </p>
          </div>

          {/* What is included */}
          <div className="bg-card border border-border p-7 md:p-9">
            <p className="text-[10px] tracking-[0.28em] uppercase text-foreground/55 mb-5">
              What is included
            </p>
            <ul className="space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] md:text-[15px] text-foreground leading-[1.5]">
                  <Check size={16} strokeWidth={2} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-5 border-t border-border/60">
              <p className="text-[10px] tracking-[0.28em] uppercase text-foreground/45 mb-3">
                Not included
              </p>
              <ul className="space-y-2">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-foreground/55 leading-[1.5]">
                    <X size={14} strokeWidth={2} className="text-foreground/35 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
