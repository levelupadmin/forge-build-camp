import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Sparkles, TrendingUp, Layers, Zap, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import perksData from "@/data/perks.json";
import { displayName } from "@/lib/perkUtils";

interface Perk {
  company: string;
  category: string;
  credits: string;
  creditsNumeric: number;
  partner: boolean;
  featured: boolean;
  featuredOnTop: boolean;
  approvalIndex: string;
  logoUrl: string;
  regions: string[];
}

// Vault positioning reflects India-default (what every Forge resident gets by default).
// US-only perks are only surfaced inside the directory behind the region switch.
const ALL_PERKS = (perksData as Perk[]).filter((p) => p.regions.includes("IN"));
const TOTAL_CREDITS = ALL_PERKS.reduce((s, p) => s + p.creditsNumeric, 0);
const CATEGORIES = new Set(ALL_PERKS.map((p) => p.category)).size;

// Top 9 featured — modeled on getaiperks.com's editorial selection.
// Skews toward AI tools most relevant to Forge builders + curated for Indian founders
// (US-only perks like OpenAI-via-partner, Mercury, Ramp, Carta intentionally excluded).
const FEATURED_9: Array<{ company: string; creditsMatch?: string }> = [
  { company: "Claude (via Partner)" },
  { company: "Gemini" },
  { company: "OpenAI", creditsMatch: "$1,200" },
  { company: "ElevenLabs" },
  { company: "Anthropic (via Partner)" },
  { company: "Perplexity" },
  { company: "Apollo.io" },
  { company: "Framer" },
  { company: "Notion" },
];

interface PerksVaultProps {
  onOpenModal: () => void;
  onUnlock: (perk: Perk) => void;
}

const PerksVault = ({ onOpenModal, onUnlock }: PerksVaultProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(counterRef, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, TOTAL_CREDITS, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, mv]);

  const featured = FEATURED_9.map(({ company, creditsMatch }) =>
    ALL_PERKS.find((p) => p.company === company && (creditsMatch ? p.credits === creditsMatch : true)),
  ).filter((p): p is Perk => !!p);

  const scrollToDirectory = () => {
    document.getElementById("perks-directory")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="perks-vault" label="THE VAULT">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.06] tracking-[-0.025em] text-foreground mb-5">
          Your invite unlocks{" "}
          <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
            the vault.
          </span>
        </h2>
        <p className="text-muted-foreground text-[16px] md:text-[18px] leading-relaxed max-w-[620px] mx-auto mb-10">
          Every Forge resident gets the AI Perks Vault. A live, growing library of credits,
          discounts, and partner access — curated for Indian founders. Included with your seat. Lifetime.
        </p>

        {/* The Number — animated counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block"
        >
          <div className="absolute -inset-8 bg-primary/5 rounded-[40px] blur-2xl" aria-hidden />
          <div className="relative">
            <span className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Total credits waiting
            </span>
            <span
              ref={counterRef}
              className="block font-bold text-primary tabular-nums tracking-[-0.03em] leading-[0.9]"
              style={{ fontSize: "clamp(56px, 11vw, 128px)" }}
            >
              ${display.toLocaleString("en-US")}
            </span>
            <span className="block mt-3 text-[13px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              and counting · updated weekly
            </span>
          </div>
        </motion.div>

        {/* Stat strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { icon: Layers, label: "Perks", value: ALL_PERKS.length.toString() },
            { icon: TrendingUp, label: "Credits", value: "$7.63M+" },
            { icon: Sparkles, label: "Categories", value: CATEGORIES.toString() },
            { icon: Zap, label: "Updates", value: "Weekly" },
          ].map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card px-4 py-5 text-center"
            >
              <Icon className="mx-auto text-primary mb-2" size={16} />
              <div className="font-bold text-foreground text-[22px] md:text-[26px] leading-none">
                {value}
              </div>
              <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured nine */}
      <div className="mt-16 md:mt-24">
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <span className="section-label">FEATURED INSIDE</span>
            <h3 className="font-bold text-[22px] md:text-[28px] tracking-[-0.015em] text-foreground mt-2">
              Nine of the ones you'll actually use.
            </h3>
          </div>
          <button
            onClick={scrollToDirectory}
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:gap-2.5 transition-all"
          >
            Browse all {ALL_PERKS.length} <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
          {featured.map((p, i) => (
            <motion.div
              key={p.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="glass-card-hover p-4 md:p-5 flex items-center gap-3 md:gap-4 group cursor-pointer"
              onClick={() => onUnlock(p)}
            >
              <div className="sm:hidden">
                <LogoTile company={p.company} logoUrl={p.logoUrl} size={40} />
              </div>
              <div className="hidden sm:block">
                <LogoTile company={p.company} logoUrl={p.logoUrl} size={48} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-foreground text-[13px] md:text-[15px] leading-tight line-clamp-2 break-words">
                  {displayName(p.company)}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{p.category}</div>
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold font-mono">
                  {p.credits}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <button
            onClick={scrollToDirectory}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary"
          >
            Browse all {ALL_PERKS.length} perks <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Legitimacy line */}
      <div className="mt-14 md:mt-20 max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground text-[14px] md:text-[15px] leading-relaxed">
          Names, values, and approval rates are public so you can see exactly what you're getting.{" "}
          <span className="text-foreground">The claim links and referral codes are gated behind your invite.</span>
        </p>
        <button
          onClick={onOpenModal}
          className="mt-6 bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm uppercase tracking-wider btn-glow"
        >
          Request an Invite
        </button>
      </div>
    </SectionWrapper>
  );
};

/** Logo tile with graceful fallback to initials */
export const LogoTile = ({
  company,
  logoUrl,
  size = 48,
}: {
  company: string;
  logoUrl?: string;
  size?: number;
}) => {
  const [errored, setErrored] = useState(false);
  const initials = company
    .replace(/\(via.*\)/i, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!logoUrl || errored) {
    return (
      <div
        className="shrink-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-bold text-primary"
        style={{ width: size, height: size, fontSize: size * 0.36 }}
        aria-label={company}
      >
        {initials}
      </div>
    );
  }
  return (
    <div
      className="shrink-0 rounded-xl bg-white border border-black/5 flex items-center justify-center p-1.5 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img
        src={logoUrl}
        alt={company}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={() => setErrored(true)}
      />
    </div>
  );
};

export default PerksVault;
