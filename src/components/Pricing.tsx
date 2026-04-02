import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import dharamshalaImg from "@/assets/pricing-dharamshala.jpg";

interface PricingProps {
  onOpenModal: () => void;
}

const inclusions = [
  "Residential stay on double occupancy",
  "All meals throughout the program",
  "All three tracks: Generative AI, Automations, Product Building",
  "Expert faculty throughout the residency",
  "Curated experiences during the program",
  "Community access after the program",
  "Perks from partner brands",
  "The Forge AI Goodie Bag",
  "Demo Day on Day 9",
];

const exclusions = [
  "Travel to and from the venue",
  "Personal expenses",
  "Single occupancy room upgrade (available at additional cost)",
];

const Pricing = ({ onOpenModal }: PricingProps) => {
  const [activeTab, setActiveTab] = useState<"inclusions" | "exclusions">("inclusions");

  return (
    <SectionWrapper label="THE INVESTMENT" className="py-[20px]">
      <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center mb-12">
        The most focused nine days you will<br />spend on your business{" "}
        <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>this year.</span>
      </h2>

      <div className="max-w-[520px] mx-auto space-y-4">
        {/* Location Hero Card */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg">
          <img
            src={dharamshalaImg}
            alt="Dharamshala, Himachal Pradesh"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Coming Soon Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1.5 rounded-full">
              Coming Soon
            </span>
          </div>

          {/* Location Name */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">Location</p>
            <h3 className="text-white font-bold text-[36px] md:text-[48px] leading-none tracking-[-0.02em]">
              DHARAMSHALA
            </h3>
            <p className="text-white/60 text-sm mt-1">Himachal Pradesh, India</p>
          </div>
        </div>

        {/* Date Strip */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <span className="inline-block bg-primary/10 text-primary text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full mb-2">
              Online
            </span>
            <p className="font-bold text-foreground text-lg">7 Days</p>
            <p className="text-muted-foreground text-[13px]">June 9 — 17, 2026</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <span className="inline-block bg-primary/10 text-primary text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full mb-2">
              Offline
            </span>
            <p className="font-bold text-foreground text-lg">8 Days</p>
            <p className="text-muted-foreground text-[13px]">June 19 — 27, 2026</p>
          </div>
        </div>

        {/* Price + CTA Card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">Program Fee</span>
          </div>
          <p className="font-bold text-[36px] md:text-[44px] text-foreground leading-none">INR 1,20,000</p>
          <p className="text-sm text-muted-foreground mt-1 mb-6">per person, inclusive of GST</p>

          <button
            onClick={onOpenModal}
            className="w-full bg-primary text-primary-foreground font-semibold rounded-full py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            REQUEST AN INVITE
          </button>

          <p className="text-[13px] text-muted-foreground/50 text-center mt-4">
            20 seats per cohort. Payment collected after acceptance only.
          </p>
        </div>

        {/* Inclusions / Exclusions Toggle Card */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          {/* Toggle Pills */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("inclusions")}
              className={`flex-1 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "inclusions"
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              ✓ Inclusions
            </button>
            <button
              onClick={() => setActiveTab("exclusions")}
              className={`flex-1 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "exclusions"
                  ? "bg-red-500 text-white shadow-md shadow-red-500/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              ✗ Exclusions
            </button>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-1"
            >
              {activeTab === "inclusions"
                ? inclusions.map((item) => (
                    <p key={item} className="text-[15px] text-foreground leading-[2.1]">
                      <span className="text-emerald-500 mr-2">✓</span>{item}
                    </p>
                  ))
                : exclusions.map((item) => (
                    <p key={item} className="text-[15px] text-foreground leading-[2.1]">
                      <span className="text-red-500 mr-2">✗</span>{item}
                    </p>
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Pricing;
