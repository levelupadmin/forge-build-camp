

# Full Site Redesign Plan — Forge AI Residency

## Problems Identified

1. **Typography inconsistency**: Headings mix font weights/styles unpredictably. Some use `font-serif italic font-black`, others `font-serif italic font-normal`, some just `text-primary`. No system.
2. **Dark-theme artifacts on white background**: `glass-card` uses `rgba(0,0,0,0.4)` backgrounds (Pillars "You'll build" box), borders reference `rgba(255,255,255,...)`, input classes use dark-mode colors. The modal form inputs are styled for dark mode.
3. **Section spacing is uneven**: Some sections feel cramped, others have too much whitespace. The "14 days" heading says 14 but program is 9 days.
4. **Cards lack visual hierarchy**: Outcomes, WhoIsFor, Community, Mentors all use near-identical `glass-card` pattern — everything looks the same.
5. **Mobile issues**: Nav disappears on scroll (intentional but odd), cards stack poorly, the dot grid is too wide, pricing text overflows.
6. **No visual differentiation between sections**: After removing borders, sections blend into each other with no rhythm.
7. **CTA inconsistency**: Some CTAs use `cta-pulse` animation, some don't. The `rounded-full` vs `rounded-xl` mix.
8. **Outcomes section**: Background images with dark gradient overlay look muddy on white theme.
9. **Schedule section**: Says "14 days" but program is 9 days. Timeline dots use dark-mode colors.

---

## Design References (from Refero)

**Cursor.com pricing** (screen `1d484bbd`): Clean dark cards on dark background, consistent card sizing, subtle borders, clear hierarchy. Takeaway → consistent card sizing and clear type hierarchy.

**Relume.io landing** (screen `635a8952`): Soft beige `#F7F3EF` background, clean vertical sections, logo wall in grayscale, testimonial cards with generous white space, pill-shaped CTAs. Takeaway → warm white/cream palette, structured vertical rhythm, clean card styling.

**Partiful** (screen `d967ccf7`): Frosted-glass cards, theatrical display type, consistent card radii and padding. Takeaway → premium card styling with consistent inner padding.

---

## Redesign Plan by Section

### 1. Global Theme & Typography System

**Files**: `src/index.css`, `tailwind.config.ts`

- Warm the white background slightly: `--background: 30 20% 98%` (warm off-white like Relume's `#F7F3EF`)
- Fix all dark-mode color artifacts: replace `rgba(255,255,255,...)` borders/backgrounds with light-mode equivalents
- Establish strict type scale:
  - **Section label**: JetBrains Mono, 11px, uppercase, tracking 0.12em, primary color (keep as-is)
  - **H2 headlines**: DM Sans Bold, 36px mobile / 56px desktop, tracking -0.025em, `text-foreground`
  - **Accent word per headline**: Playfair Display Italic 700, `text-primary` — max ONE per heading
  - **Body**: DM Sans Regular, 16px, `text-muted-foreground`, line-height 1.7
  - **Cards**: DM Sans Semibold 16px title, Regular 14px body
- Remove `cta-pulse` animation from all CTAs — keep buttons clean and static (premium feel)
- Standardize all CTAs: `rounded-full px-8 py-3.5 text-sm font-semibold uppercase tracking-wider`
- Glass card restyle: `bg-white border border-black/[0.06] rounded-2xl shadow-sm` — no backdrop-blur on white background (it's invisible anyway)

### 2. Navbar

**File**: `src/components/Navbar.tsx`

- Desktop: Keep frosted pill but update for white theme — `bg-white/80 backdrop-blur-xl border border-black/[0.06]` with dark text
- Nav links: `text-foreground/70 hover:text-foreground` instead of white
- Mobile: Keep hamburger but don't hide on scroll — always visible. White background with subtle bottom border

### 3. Hero

**File**: `src/components/Hero.tsx`

- Keep video background and current layout — it works well
- Increase logo size slightly on mobile (`h-12` → `h-14`)
- Ensure "Block 1 of 20 invites" uses DM Sans (already done)

### 4. Logo Strip

**File**: `src/components/LogoStrip.tsx`

- Keep dual-row marquee — it's working well
- Ensure logos have enough contrast on warm-white background

### 5. What Is Forge (recently redesigned)

**File**: `src/components/WhatIsForge.tsx`

- Keep bento cards layout — verify glass cards look good on warm-white
- Update card styling to new `bg-white border border-black/[0.06] shadow-sm`

### 6. Why AI Now (Dot Grid)

**File**: `src/components/WhyAINow.tsx`

- Keep the dot grid — it's a strong visual differentiator
- Reduce 2500 dots to improve performance and visual clarity: 40×25 = 1000 dots
- Add more breathing room above and below
- Caption text should follow the type system

### 7. Trailer

**File**: `src/components/Trailer.tsx`

- Update overlay from `bg-background/60` to `bg-black/40`
- Remove amber/orange glow shadow — use subtle `shadow-lg` instead
- Keep play button but remove pulsing animation — just a clean circle

### 8. Who Is For (Personas)

**File**: `src/components/WhoIsFor.tsx`

- Upgrade from basic cards to **feature-style layout**: icon on left, text on right, larger cards
- Add subtle left-border accent in primary color on each card
- Better hover: slight shadow increase, no translate

### 9. Three Pillars

**File**: `src/components/Pillars.tsx`

- Fix the dark "You'll build" box: `bg-[rgba(0,0,0,0.4)]` → `bg-primary/[0.04] border-l-2 border-primary`
- Increase card padding for breathing room
- Tool logo icons: add subtle background circle behind each

### 10. Outcomes

**File**: `src/components/Outcomes.tsx`

- Remove background images — they look muddy on white theme
- Switch to clean numbered list or icon-based cards with colored accents
- Use primary-tinted backgrounds per card (very subtle `bg-primary/[0.03]`)

### 11. Schedule

**File**: `src/components/Schedule.tsx`

- Fix headline: "14 days" → match actual program (9 days + 5 days online prep)
- Fix accordion border: `rgba(255,255,255,0.06)` → `border-border`
- Style timeline dots for light theme: white bg with primary border

### 12. Mentors

**File**: `src/components/Mentors.tsx`

- Replace empty avatar circles with colored gradient placeholder circles (initials or icons)
- Fix `glass-card-hover` styling for white theme

### 13. Community

**File**: `src/components/Community.tsx`

- Fix `bg-card` section background — ensure it creates subtle contrast on warm-white
- Network visualization: update node colors for light theme visibility
- SVG line colors: increase opacity for light background

### 14. Social Proof

**File**: `src/components/SocialProof.tsx`

- Keep quote card layout
- Add quotation mark styling: `text-primary/10` → `text-primary/15` for visibility on white
- Fix `glass-card-hover` for white theme

### 15. Pricing

**File**: `src/components/Pricing.tsx`

- Remove `pricing-card-glow` animation — keep it static and clean
- Update card: `bg-white border border-black/[0.08] shadow-lg rounded-2xl`
- Add a subtle primary-colored top border (2px) for visual interest
- Checkmarks and X marks: ensure visible on white

### 16. FAQs

**File**: `src/components/FAQs.tsx`

- Fix border: `rgba(255,255,255,0.06)` → `border-border`
- Keep accordion pattern — it's clean

### 17. Final CTA

**File**: `src/components/FinalCTA.tsx`

- Remove `dot-grid` background (too subtle on white)
- Add a warm cream/primary-tinted background (`bg-primary/[0.03]`) to differentiate from rest of page
- Remove CTA pulse animation

### 18. Footer

**File**: `src/components/Footer.tsx`

- Keep clean and simple — just fix border colors for white theme

### 19. Invite Modal

**File**: `src/components/InviteModal.tsx`

- Fix input styling: dark-mode `rgba(255,255,255,0.04)` → `bg-white border border-black/[0.08]`
- Fix modal background: `bg-card` → explicit `bg-white`
- Fix border-top: keep primary color accent

### 20. Section Rhythm (SectionWrapper)

**File**: `src/components/SectionWrapper.tsx`

- Add alternating subtle backgrounds: every other section gets `bg-[#F9F8F6]` (warm gray) to create visual rhythm without borders
- Pass a `variant` prop: `"default" | "muted"` to alternate

---

## Files Changed Summary

| File | Change |
|------|--------|
| `src/index.css` | Warm white palette, fix dark-mode artifacts, remove pulse animations |
| `src/components/Navbar.tsx` | Light theme frosted pill, always-visible mobile nav |
| `src/components/SectionWrapper.tsx` | Add alternating background variant |
| `src/components/WhatIsForge.tsx` | Update card styling for light theme |
| `src/components/WhyAINow.tsx` | Optimize dot grid, fix colors |
| `src/components/Trailer.tsx` | Fix overlay and shadow for light theme |
| `src/components/WhoIsFor.tsx` | Better card layout with left accent border |
| `src/components/Pillars.tsx` | Fix dark "You'll build" box, update cards |
| `src/components/Outcomes.tsx` | Remove muddy images, clean card style |
| `src/components/Schedule.tsx` | Fix "14 days" text, light theme borders |
| `src/components/Mentors.tsx` | Gradient avatar placeholders, fix cards |
| `src/components/Community.tsx` | Fix network viz colors, section bg |
| `src/components/SocialProof.tsx` | Fix quote cards for white theme |
| `src/components/Pricing.tsx` | Remove glow animation, clean card style |
| `src/components/FAQs.tsx` | Fix border colors |
| `src/components/FinalCTA.tsx` | Tinted background, remove pulse |
| `src/components/Footer.tsx` | Fix border for light theme |
| `src/components/InviteModal.tsx` | Fix inputs and modal bg for white theme |

