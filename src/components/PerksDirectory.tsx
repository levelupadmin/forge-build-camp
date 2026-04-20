import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Lock, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { LogoTile } from "./PerksVault";
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
  conditions: string;
  description: string;
  logoUrl: string;
  regions: string[];
}

const ALL_PERKS = perksData as Perk[];
const PAGE_SIZE = 12;

type Region = "IN" | "US";
type SortKey = "featured" | "credits" | "approval";

const approvalScore = (a: string) => (a === "high" ? 3 : a === "average" ? 2 : 1);

const inRegion = (p: Perk, r: Region) => p.regions.includes(r);

interface PerksDirectoryProps {
  onUnlock: (perk: Perk) => void;
}

const PerksDirectory = ({ onUnlock }: PerksDirectoryProps) => {
  const [region, setRegion] = useState<Region>("IN");
  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [page, setPage] = useState(0);

  // Region-scoped base pool + category counts re-derived per region.
  const regionPool = useMemo(() => ALL_PERKS.filter((p) => inRegion(p, region)), [region]);
  const categories = useMemo(() => {
    const counts = regionPool.reduce<Record<string, number>>((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return [
      { label: "All", count: regionPool.length },
      ...Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([label, count]) => ({ label, count })),
    ];
  }, [regionPool]);

  // If the active category drops to 0 in the new region, reset to "All".
  const safeCat = useMemo(() => {
    if (activeCat === "All") return "All";
    const found = categories.find((c) => c.label === activeCat);
    return found && found.count > 0 ? activeCat : "All";
  }, [activeCat, categories]);

  const filtered = useMemo(() => {
    let list = regionPool;
    if (safeCat !== "All") list = list.filter((p) => p.category === safeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.company.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
      );
    }
    const sorted = [...list];
    if (sort === "credits") sorted.sort((a, b) => b.creditsNumeric - a.creditsNumeric);
    else if (sort === "approval")
      sorted.sort((a, b) => approvalScore(b.approvalIndex) - approvalScore(a.approvalIndex));
    else {
      sorted.sort((a, b) => {
        const ra = (a.featuredOnTop ? 0 : a.featured ? 1 : 2);
        const rb = (b.featuredOnTop ? 0 : b.featured ? 1 : 2);
        if (ra !== rb) return ra - rb;
        return b.creditsNumeric - a.creditsNumeric;
      });
    }
    return sorted;
  }, [regionPool, safeCat, query, sort]);

  const visibleCredits = filtered.reduce((s, p) => s + p.creditsNumeric, 0);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const pageItems = filtered.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);

  const onCatClick = (label: string) => {
    setActiveCat(label);
    setPage(0);
  };
  const onSortChange = (v: SortKey) => {
    setSort(v);
    setPage(0);
  };
  const onQueryChange = (v: string) => {
    setQuery(v);
    setPage(0);
  };
  const onRegionChange = (r: Region) => {
    setRegion(r);
    setPage(0);
  };


  return (
    <SectionWrapper id="perks-directory" label="THE CATALOG">
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
        <h2 className="font-bold text-[36px] md:text-[56px] leading-[1.06] tracking-[-0.025em] text-foreground mb-4">
          Browse every perk{" "}
          <span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>
            inside.
          </span>
        </h2>
        <p className="text-muted-foreground text-[15px] md:text-[17px] leading-relaxed max-w-[620px] mx-auto">
          Filter by category, sort by value, search by name. The list is public.
          The claim links are not.
        </p>
      </div>

      {/* Controls */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder={`Search ${regionPool.length} perks…`}
              className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground shrink-0">
            <Filter size={13} className="hidden md:block" />
            <span className="hidden md:inline">Sort</span>
            <div className="flex bg-card border border-border rounded-full p-1 w-full md:w-auto">
              {(
                [
                  ["featured", "Featured", "Featured"],
                  ["credits", "Highest credits", "Credits"],
                  ["approval", "Most likely", "Likely"],
                ] as const
              ).map(([v, longLabel, shortLabel]) => (
                <button
                  key={v}
                  onClick={() => onSortChange(v)}
                  className={`flex-1 md:flex-none px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors whitespace-nowrap ${
                    sort === v
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="md:hidden">{shortLabel}</span>
                  <span className="hidden md:inline">{longLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Region toggle + Category pills — region is sticky on the left */}
        <div className="flex items-stretch gap-2">
          {/* Region switch (fixed) */}
          <div
            role="tablist"
            aria-label="Region filter"
            className="flex shrink-0 items-center bg-card border border-border rounded-full p-1"
          >
            {([
              { v: "IN" as const, flag: "🇮🇳", label: "India" },
              { v: "US" as const, flag: "🇺🇸", label: "US" },
            ]).map(({ v, flag, label }) => (
              <button
                key={v}
                role="tab"
                aria-selected={region === v}
                onClick={() => onRegionChange(v)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  region === v
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-[13px] leading-none" aria-hidden>
                  {flag}
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Category pills — horizontally scrollable */}
          <div className="relative flex-1 min-w-0">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((c) => (
                <button
                  key={c.label}
                  onClick={() => onCatClick(c.label)}
                  className={`shrink-0 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-colors border ${
                    safeCat === c.label
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
                  }`}
                >
                  {c.label}{" "}
                  <span className={safeCat === c.label ? "opacity-70" : "opacity-50"}>
                    {c.count}
                  </span>
                </button>
              ))}
            </div>
            {/* Right-edge fade when scrollable */}
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>

        {/* Region hint — only shown when user switches away from India default */}
        {region === "US" && (
          <p className="text-[12px] text-muted-foreground font-mono tracking-[0.1em] uppercase flex items-center gap-1.5">
            <span aria-hidden>🇺🇸</span> Showing full catalog incl. US-only perks (Mercury, Brex, Ramp, Carta, etc.)
          </p>
        )}
      </div>

      {/* Results meta */}
      <div className="flex items-center justify-between mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
        <span>
          {filtered.length} perk{filtered.length === 1 ? "" : "s"}
          {filtered.length ? (
            <>
              {" · "}${(visibleCredits / 1_000_000).toFixed(2)}M visible
            </>
          ) : null}
        </span>
        {pageCount > 1 ? (
          <span>
            Page {safePage + 1} / {pageCount}
          </span>
        ) : null}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${region}-${safeCat}-${sort}-${query}-${safePage}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {pageItems.length === 0 ? (
            <div className="col-span-full text-center py-16 text-muted-foreground">
              No perks match that.
            </div>
          ) : (
            pageItems.map((p) => <PerkCard key={p.company + p.credits} perk={p} onUnlock={() => onUnlock(p)} />)
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            onClick={() => setPage(Math.max(0, safePage - 1))}
            disabled={safePage === 0}
            aria-label="Previous page"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: pageCount }).map((_, i) => {
            // Show 1, current-1, current, current+1, last, with ellipsis
            if (
              i === 0 ||
              i === pageCount - 1 ||
              (i >= safePage - 1 && i <= safePage + 1)
            ) {
              return (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`min-w-9 h-9 px-2.5 rounded-full text-[13px] font-semibold transition-colors ${
                    i === safePage
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              );
            }
            if (i === 1 && safePage > 2) return <span key={i} className="text-muted-foreground">…</span>;
            if (i === pageCount - 2 && safePage < pageCount - 3)
              return <span key={i} className="text-muted-foreground">…</span>;
            return null;
          })}
          <button
            onClick={() => setPage(Math.min(pageCount - 1, safePage + 1))}
            disabled={safePage === pageCount - 1}
            aria-label="Next page"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

const approvalLabel = (a: string) =>
  a === "high" ? "High" : a === "average" ? "Average" : "Selective";

const ApprovalBar = ({ value }: { value: string }) => {
  const score = approvalScore(value);
  return (
    <div className="flex items-center gap-1.5" title={`Approval: ${approvalLabel(value)}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
        Approval
      </span>
      <div className="flex gap-0.5">
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={`block w-3 h-1 rounded-full ${
              s <= score
                ? score === 3
                  ? "bg-emerald-500"
                  : score === 2
                  ? "bg-amber-500"
                  : "bg-red-500"
                : "bg-foreground/10"
            }`}
          />
        ))}
      </div>
      <span className="text-[10px] font-semibold text-foreground/70">{approvalLabel(value)}</span>
    </div>
  );
};

const PerkCard = ({ perk, onUnlock }: { perk: Perk; onUnlock: () => void }) => {
  return (
    <div className="group relative glass-card-hover p-5 flex flex-col">
      {/* Header row */}
      <div className="flex items-start gap-3 mb-3">
        <LogoTile company={perk.company} logoUrl={perk.logoUrl} size={44} />
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-foreground text-[15px] leading-tight line-clamp-2 break-words">
            {displayName(perk.company)}
          </div>
          <div className="text-[11px] text-muted-foreground mt-0.5 truncate">{perk.category}</div>
          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
            {perk.featuredOnTop && (
              <span className="shrink-0 text-[9px] font-mono uppercase tracking-wider bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                Featured
              </span>
            )}
            {perk.partner && (
              <span className="shrink-0 text-[9px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-700 px-1.5 py-0.5 rounded">
                Partner
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Credits chip */}
      <div className="inline-flex self-start items-baseline gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono font-semibold text-[13px] mb-3">
        <span>{perk.credits}</span>
        <span className="text-[10px] text-primary/70 font-normal">credits</span>
      </div>

      {/* Condition */}
      {perk.conditions ? (
        <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-2 mb-4 min-h-[34px] first-letter:uppercase">
          {perk.conditions}
        </p>
      ) : (
        <p className="text-[12px] text-muted-foreground italic leading-relaxed mb-4 min-h-[34px]">
          Standard eligibility applies.
        </p>
      )}

      {/* Footer: approval + CTA */}
      <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between">
        <ApprovalBar value={perk.approvalIndex} />
        <button
          onClick={onUnlock}
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-foreground/80 hover:text-primary transition-colors"
        >
          <Lock size={12} /> Unlock
        </button>
      </div>
    </div>
  );
};

export default PerksDirectory;
