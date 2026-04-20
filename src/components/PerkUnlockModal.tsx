import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check, ArrowRight, X } from "lucide-react";
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { LogoTile } from "./PerksVault";
import { displayName } from "@/lib/perkUtils";
import perksData from "@/data/perks.json";

export interface ModalPerk {
  company: string;
  category: string;
  credits: string;
  creditsNumeric: number;
  logoUrl: string;
}

interface PerkUnlockModalProps {
  perk: ModalPerk | null;
  onClose: () => void;
  onRequestInvite: () => void;
}

const ALL = perksData as { creditsNumeric: number }[];
const TOTAL = ALL.reduce((s, p) => s + p.creditsNumeric, 0);
const COUNT = ALL.length;

/** Formats "others" credit remainder in $M / $K */
function fmtRemainder(cents: number): string {
  if (cents >= 1_000_000) return `$${(cents / 1_000_000).toFixed(2)}M`;
  if (cents >= 1_000) return `$${Math.round(cents / 1_000)}K`;
  return `$${cents}`;
}

const PerkUnlockModal = ({ perk, onClose, onRequestInvite }: PerkUnlockModalProps) => {
  const open = !!perk;
  const otherPerksValue = perk ? TOTAL - perk.creditsNumeric : TOTAL;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogPortal>
        <DialogOverlay className="bg-black/70 backdrop-blur-sm" />
        <AnimatePresence>
          {open && perk && (
            <DialogContent
              className="p-0 border-0 bg-transparent shadow-none max-w-[460px] w-[calc(100%-2rem)]"
              onEscapeKeyDown={onClose}
              onPointerDownOutside={onClose}
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-background border border-border rounded-2xl p-7 md:p-8 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* Ambient glow */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, hsla(217,91%,60%,0.18), transparent 70%)" }}
                />
                <div
                  className="pointer-events-none absolute -bottom-32 -left-24 w-80 h-80 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, hsla(217,91%,60%,0.10), transparent 70%)" }}
                />

                {/* Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors z-10"
                >
                  <X size={15} />
                </button>

                <div className="relative">
                  {/* Lock chip */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-[0.15em] font-semibold mb-5">
                    <Lock size={11} /> Invite required
                  </div>

                  {/* Perk identity */}
                  <div className="flex items-center gap-3 mb-5">
                    <LogoTile company={perk.company} logoUrl={perk.logoUrl} size={48} />
                    <div className="min-w-0">
                      <div className="font-bold text-foreground text-[18px] leading-tight truncate">
                        {displayName(perk.company)}
                      </div>
                      <div className="text-[12px] text-muted-foreground truncate">{perk.category}</div>
                    </div>
                  </div>

                  {/* CRO headline */}
                  <h3 className="font-bold text-foreground text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.015em] mb-3">
                    {displayName(perk.company)} is one of{" "}
                    <span className="text-primary">{COUNT} perks</span> inside the Forge Vault.
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                    You don't apply to this one separately. One invite unlocks the entire vault — this perk included, and {COUNT - 1}{" "}
                    more — for life.
                  </p>

                  {/* Value breakdown */}
                  <div className="bg-card border border-border rounded-xl p-4 mb-6">
                    <div className="space-y-2.5">
                      <ValueRow
                        icon={<Check size={13} strokeWidth={3} />}
                        label={`${perk.credits} in ${displayName(perk.company)} credits`}
                        accent
                      />
                      <ValueRow
                        icon={<Check size={13} strokeWidth={3} />}
                        label={`${fmtRemainder(otherPerksValue)}+ across ${COUNT - 1} other tools`}
                      />
                      <ValueRow
                        icon={<Check size={13} strokeWidth={3} />}
                        label="Lifetime vault access · weekly new perks"
                      />
                    </div>
                  </div>

                  {/* Primary CTA */}
                  <button
                    onClick={() => {
                      onRequestInvite();
                      onClose();
                    }}
                    className="w-full bg-primary text-primary-foreground font-semibold rounded-full py-3.5 text-[14px] uppercase tracking-wider btn-glow inline-flex items-center justify-center gap-2"
                  >
                    Request my Forge invite <ArrowRight size={14} />
                  </button>

                  {/* Secondary */}
                  <button
                    onClick={onClose}
                    className="w-full mt-2 py-2.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Keep browsing perks
                  </button>

                  {/* Trust line */}
                  <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Applications reviewed within 48 hours
                  </p>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </DialogPortal>
    </Dialog>
  );
};

const ValueRow = ({
  icon,
  label,
  accent = false,
}: {
  icon: React.ReactNode;
  label: string;
  accent?: boolean;
}) => (
  <div className="flex items-start gap-2.5">
    <div
      className={`mt-0.5 w-5 h-5 rounded-full shrink-0 flex items-center justify-center ${
        accent ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
      }`}
    >
      {icon}
    </div>
    <div
      className={`text-[13px] leading-snug ${accent ? "font-semibold text-foreground" : "text-foreground/80"}`}
    >
      {label}
    </div>
  </div>
);

export default PerkUnlockModal;
