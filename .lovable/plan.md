

# WhatIsForge + WhyAINow Refinements

## Changes

### 1. WhatIsForge.tsx — Logo, scroll-bold animation, bento stats

**Heading area:**
- Replace the text "Forge AI Residency" with the uploaded logo image (black version for light bg). Copy `the_forge_ai_logos_1.png` to `src/assets/`. Display as an `<img>` next to "What is the" text.
- Add a **scroll-driven word-bolding animation** for the description paragraph: as the user scrolls, each word transitions from `text-muted-foreground font-normal` to `text-foreground font-bold` progressively. Use `useScroll` + `useTransform` from framer-motion on the paragraph's ref, splitting the text into individual `<motion.span>` elements whose opacity/font-weight maps to scroll progress.

**Stats strip → Bento boxes:**
- Replace the pipe-separated text strip with three small square blue cards in a horizontal row.
- Each card: `bg-primary rounded-xl p-4 md:p-6` with the number large and bold in white, label small underneath in white/80. Compact sizing, centered row with `gap-3 md:gap-4`.

**Spacing:**
- Reduce `mb-14` on description to `mb-10`, `mb-12` on trailer to `mb-8`.

### 2. WhyAINow.tsx — Remove italic opener, restructure copy

- **Remove** the italic line "Everyone is talking about AI. Almost nobody is building with it." (lines 73-81)
- **Keep** the headline "AI is the most important skill of this decade."
- **Merge** the echo chamber lines into a single description paragraph below the headline: "You think AI is crowded because you're in an echo chamber. The real world hasn't even started."
- Then transition into "To prove it…" → dot grid visualization (keep as-is)

### 3. SectionWrapper.tsx — Tighter spacing

- Reduce padding from `py-20 md:py-28` to `py-14 md:py-20` for tighter section spacing.

---

## Files

| File | Change |
|------|--------|
| `src/assets/forge-ai-logo.png` | Copy uploaded logo |
| `src/components/WhatIsForge.tsx` | Logo in heading, scroll-bold description, bento stat boxes, tighter spacing |
| `src/components/WhyAINow.tsx` | Remove italic opener, restructure description |
| `src/components/SectionWrapper.tsx` | Reduce vertical padding |

