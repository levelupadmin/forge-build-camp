

# Redesign Pillars Section — Street Loom Hero Style

## Reference Analysis

The uploaded image shows a split layout:
- **Left ~60%**: Full-bleed hero image with large bold stacked text overlay (title), a short description, and a CTA — all bottom-left aligned
- **Right ~40%**: A row of tall portrait-oriented thumbnail cards that act as navigation. Each card has its own background image with a label overlay at the bottom. These are the "inactive" items.
- A **progress indicator** and slide counter at the bottom-right
- Dark, cinematic color palette throughout

## What Changes

Rewrite the desktop layout in `src/components/Pillars.tsx` to match this split hero + thumbnail cards pattern. Keep all existing data, copy, tools, and mobile behavior intact.

### Desktop Layout (md+)

```text
┌──────────────────────────────┬────────┬────────┬────────┐
│                              │        │        │        │
│   PILLAR 01                  │ [img]  │ [img]  │ [img]  │
│   GENERATIVE                 │        │        │        │
│   AI                         │  P.01  │  P.02  │  P.03  │
│                              │ Gen AI │ Auto.  │ Prod.  │
│   Description text...        │        │        │        │
│   [tool icons]               │        │        │        │
│   You will build: ...        │        │        │        │
│                              │        │        │        │
│   ── REQUEST AN INVITE       │        │        │        │
│                              │  02    │──── 03 │        │
│                     01 ━━━━━ 03       │        │        │
└──────────────────────────────┴────────┴────────┴────────┘
```

- **Container**: Full-width, `h-[560px]`, `rounded-2xl overflow-hidden`, dark background
- **Left panel (~60%)**: The active pillar's full-bleed background image with a dark gradient overlay (left-heavy). Content bottom-left: pillar tag, large stacked title (bold uppercase, ~48-52px), description, tool logos, "you will build" items
- **Right panel (~40%)**: 3 tall thumbnail cards side by side. The active card has a blue border/highlight. Inactive cards are clickable. Each card shows the pillar image with a dark overlay and the pillar number + title at the bottom
- **Progress indicator**: Bottom-right area showing current slide number (large) and a thin progress line, matching the reference's `01 ━━━ 03` counter style
- Clicking any thumbnail card on the right switches the active pillar (left panel updates)
- Auto-rotate every 5s with progress bar, pause on hover — same logic as current

### Key Differences from Current

1. **No accordion** — instead, a fixed split: large hero left + thumbnail strip right
2. **All 3 thumbnails always visible** on the right (not just inactive ones)
3. **Active thumbnail** gets a highlighted border (blue) or reduced overlay
4. **Slide counter** bottom-right showing `01 ━━━━ 03` with the active number emphasized
5. **Title styling**: Large uppercase stacked text instead of italic serif — closer to the reference's "MODERN KNIT MINIMALIST" style. Will use bold uppercase DM Sans for the title words stacked on separate lines

### Mobile Behavior

Keep current mobile layout (toggle pills + full-width card) — no changes.

### Files Changed

1. **`src/components/Pillars.tsx`** — Rewrite desktop section only. Replace the `hidden md:flex` accordion with the new split hero + thumbnails layout. Mobile section stays identical.

No new assets needed — reuses existing `pillar-01.jpg`, `pillar-02.jpg`, `pillar-03.jpg`.

