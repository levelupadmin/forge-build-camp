

# Redesign "Who This Is For" — Bento Grid Layout

## What We're Building

An asymmetric bento grid replacing the current 4 uniform cards. Two personas get large tiles with prominent photography, two get smaller tiles — creating visual hierarchy and an editorial, magazine-like feel.

```text
Mobile (390px):              Desktop (1024px+):
┌──────────────┐             ┌─────────────────────┬──────────┐
│              │             │                     │  [PHOTO] │
│   [PHOTO]    │             │     [PHOTO]         │ Marketer │
│  The Founder │             │     The Founder     │  desc... │
│   desc...    │             │     desc...         ├──────────┤
│              │             │                     │  [PHOTO] │
├──────────────┤             │                     │ Operator │
│   [PHOTO]    │             │                     │  desc... │
│  Marketer    │             └─────────────────────┴──────────┘
├──────────────┤             ┌────────────────────────────────┐
│   [PHOTO]    │             │  [PHOTO]  The Professional    │
│  Operator    │             │           desc...             │
├──────────────┤             └────────────────────────────────┘
│   [PHOTO]    │
│ Professional │
└──────────────┘
```

## Key Design Details

- **Photography**: Generate 4 AI portraits (founder at laptop, marketer presenting, operator at whiteboard, professional in meeting) using the image generation skill. Save to `public/personas/`.
- **Gradient overlay**: Each card has a bottom-to-top dark gradient over the photo so white text is legible.
- **Hover effect**: Cards lift slightly with `scale(1.02)` and increased shadow on hover via framer-motion.
- **Stagger animation**: Cards animate in with opacity + y-translate, staggered by 0.1s.
- **Card styling**: `rounded-2xl overflow-hidden` with the photo as a CSS `background-image` covering the full card. Text sits at the bottom over the gradient.

## Grid Structure (Desktop)

- CSS Grid: `grid-cols-3 grid-rows-2`
- Founder card: spans 2 columns, 2 rows (large hero tile)
- Marketer card: 1 column, 1 row (top-right)
- Operator card: 1 column, 1 row (bottom-right, below marketer)
- Professional card: spans 3 columns, 1 row (full-width bottom banner, shorter height)

## Files Changed

1. **`src/components/WhoIsFor.tsx`** — Full rebuild with bento grid layout, photo backgrounds, gradient overlays, and framer-motion animations.
2. **`public/personas/`** — 4 generated AI portrait images.

## Mobile Behavior

On mobile (< 640px), the grid collapses to a single column with all 4 cards stacked, each showing a photo background with gradient text overlay. The Founder card remains taller than the others to preserve hierarchy.

