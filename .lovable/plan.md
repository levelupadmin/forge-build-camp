

# Pricing Redesign + Testimonial Carousel

## 1. Pricing Section (`src/components/Pricing.tsx`)

Keep heading + subheading as-is. Replace the single card with:

**Location Hero Card** — Full-width rounded card with a cinematic Dharamshala mountain image background. Large translucent "DHARAMSHALA" text overlay. Small "Coming Soon" badge.

**Date Strip** — Two columns below the image:
- Left: "Online" badge, "7 Days", "June 9 — 17, 2026"
- Right: "Offline" badge, "8 Days", "June 19 — 27, 2026"

**Price Row** — "Program Fee" label + "INR 1,20,000" bold + "per person, inclusive of GST"

**CTA Button** — Same "REQUEST AN INVITE" full-width button

**Inclusions/Exclusions Toggle Card** — Separate rounded card with two pill toggle buttons:
- Green pill = "Inclusions" (active: `bg-emerald-500 text-white`), shows 9 items with green checkmarks
- Red pill = "Exclusions" (active: `bg-red-500 text-white`), shows 3 items with red crosses
- `useState` toggles between tabs; `AnimatePresence` for content swap

**Footer** — "20 seats per cohort..." note

**New asset**: Generate `src/assets/pricing-dharamshala.jpg` placeholder.

## 2. Testimonial Carousel (`src/components/SocialProof.tsx`)

Replace the 3-column grid with a single-card carousel:

- One testimonial visible at a time, centered, max-w-[600px]
- Each card: placeholder avatar image (circular, 64px), name, designation, program, and large italic quote
- Auto-rotates every 5 seconds using `setInterval` + `useState`
- Dot indicators at bottom (3 dots), clickable
- Swipeable left/right via drag gesture (`motion.div` with `drag="x"`)
- `AnimatePresence mode="wait"` for smooth cross-fade between cards
- Add placeholder avatar images or use initials fallback

**New assets**: Generate 3 placeholder avatar images (`src/assets/testimonial-rahul.jpg`, etc.)

## Files Changed
- `src/components/Pricing.tsx` — full rewrite
- `src/components/SocialProof.tsx` — full rewrite
- New assets: 1 Dharamshala image + 3 avatar images

