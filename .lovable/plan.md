

# Hero & Navbar Overhaul

## Files to modify
- `src/components/Navbar.tsx` — Complete redesign
- `src/components/Hero.tsx` — Content, background, stats bar integration
- `src/components/StatsStrip.tsx` — Delete (stats move into Hero)
- `src/pages/Index.tsx` — Remove StatsStrip and ToolsOrbit imports

---

## 1. Navbar (`Navbar.tsx`)

**Desktop:**
- Left: LevelUp Learning logo (larger, `h-6`)
- Center: Frosted glass pill with links (About, Outcomes, Schedule, Pricing, Brochure). Pill styles: `backdrop-blur-[20px]`, `bg-[rgba(255,255,255,0.1)]`, `border border-[rgba(255,255,255,0.15)]`, `rounded-full`, `px-6 py-2.5`. Link text: DM Sans 500, 14px, white
- Right: Remove REQUEST AN INVITE button from navbar entirely (keep only in hero)

**Mobile:**
- Frosted glass bar that hides on scroll (use scrolled state to toggle visibility with opacity/translate transition)
- Left: LevelUp Learning logo (larger), no text
- Right: Hamburger icon (Menu from lucide)
- Mobile menu: Full-screen overlay with 5 links (About, Outcomes, Schedule, Pricing, Brochure) + REQUEST AN INVITE button at bottom

**Nav links update:**
```ts
const navLinks = [
  { label: "About", href: "#experience" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
];
// Brochure as separate link with FileText icon
```

---

## 2. Hero Background (`Hero.tsx`)

- Video opacity: change from `opacity-40` to `opacity-70` (much more visible)
- Dark overlay: change from `bg-background/60` to `bg-black/35`
- Section height: `min-h-[85vh] md:min-h-[85vh]` (down from `min-h-screen`)
- Remove the scroll indicator (ChevronDown) at bottom since stats bar takes that space

---

## 3. Hero Content (`Hero.tsx`)

**Headline:**
```tsx
<h1 className="font-serif italic font-black tracking-[-0.025em] text-[#F2EEE8] leading-[1.08] text-[48px] md:text-[80px]">
  <span className="block">Learn AI by</span>
  <span className="block">
    <span className="font-bold not-italic" style={{ fontWeight: 700, color: '#3B82F6' }}>Building</span> with AI.
  </span>
</h1>
```
- "Building" = Playfair Display italic weight 700, blue #3B82F6, NOT bold
- Rest = Playfair Display italic weight 900, white #F2EEE8

**Button:**
- `w-auto px-7 py-3 text-sm font-semibold rounded-full bg-[#3B82F6] text-white`
- No arrow, no glow, no animation, centered

**Block text:**
- `text-[11px] font-mono text-[rgba(255,255,255,0.85)]`
- Content: `"· Block 1 of 20 invites"` (blue dot + text)

---

## 4. Stats Bar (inside Hero, pinned to bottom)

Move stats from separate `StatsStrip` component into the Hero section, positioned absolutely at the bottom.

```tsx
<div className="absolute bottom-0 left-0 right-0 z-10"
     style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
  <div className="max-w-5xl mx-auto flex items-center justify-center py-5 px-6">
    {stats.map((stat, i) => (
      <div className="flex-1 text-center flex items-center justify-center">
        {i > 0 && <div className="w-px h-10 bg-white/15 mr-auto" />}
        <div>
          <div className="font-serif italic font-black text-[36px] text-[#F2EEE8]">{stat.number}</div>
          <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">{stat.label}</div>
        </div>
      </div>
    ))}
  </div>
</div>
```

Stats: 600+ Alumni, 25+ Editions, 400+ Projects, 11 Cities. Thin vertical dividers between stats, no box borders.

---

## 5. Remove ToolsOrbit

- Remove `<ToolsOrbit />` from `Index.tsx`
- Remove the import
- Keep `ToolsOrbit.tsx` file (just unused)

---

## 6. Remove StatsStrip

- Remove `<StatsStrip />` from `Index.tsx`
- Remove the import

---

## Stats Bar Design Notes

Since the Refero MCP subscription is expired, the stats bar design follows the user's detailed spec directly: large Playfair Display italic numbers with small JetBrains Mono labels underneath, separated by thin vertical dividers, on a frosted dark background. This is a common pattern seen on sites like TheExperience.co and BHX Project for impact metrics.

