# Premium Redesign — Inspired by Filmmaking Site

## What I Learned from the Filmmaking Reference Site

The filmmaking page uses a **dark/warm cinematic theme** with a very specific flow:

1. **Full-screen video hero** with clean CTA
2. **Logo strip** (As Seen On) — infinite marquee
3. **Stats strip** with large animated numbers (7 Cities, 15 Editions, 320 Shortfilms) — image-based, cinematic
4. **One-liner description** of the program
5. **Video trailer** embed
6. **"Why" section** — image cards with reasons (6 cards in a grid, each with photo + text)
7. **Outcomes section** — large image cards showing deliverables
8. **"Learn → Do → Screen" process** — a 3-phase narrative arc with images
9. **Mentors** — circular photos with name/role cards
10. **Day-by-day schedule** — clean timeline
11. **Venue carousel** — location photos in a horizontal slider
12. **Community section** — "Come for the Learning, Stay for the Community" with activity carousel
13. **Alumni profiles** — photo grid of past participants
14. **Alumni stats** ("80% never touched a camera")
15. **Video testimonials** — embedded Vimeo carousel
16. **Pricing** section
17. **FAQs** — accordion
18. **Final CTA** — full-width

Key design principles: **one continuous background color**, heavy use of **full-width imagery**, **narrative storytelling** flow (Learn → Do → Launch), **large typography with cinematic feel**, **image-driven sections** rather than icon-based cards.

---

## The Plan

### 1. Unified Background — Remove All Section Color Alternation

**Files**: `SectionWrapper.tsx`, `index.css`

- Set the entire site to a single off-white background: `#F5F3EF` (warm cream, matching the filmmaking site's feel)
- Remove the `variant="muted"` alternating system entirely — every section gets the same background
- Remove `bg-[#F7F7F7]` muted variant from `SectionWrapper`
- Update `--background` CSS variable to match

### 2. SectionWrapper — Seamless Flow with Better Spacing

**File**: `SectionWrapper.tsx`

- Remove `variant` prop and all background alternation logic
- Increase spacing to `py-20 md:py-28` for breathing room (the filmmaking site has generous whitespace)
- Keep the `motion.div` fade-in animation

### 3. Narrative Storytelling — Add a "Learn → Do → Launch" Process Section

**File**: New component `src/components/Process.tsx`

Inspired by the filmmaking site's "Learn → Do → Screen" arc. Create a 3-phase visual narrative:

- **Phase 1: LEARN** — "Master the AI mindset, tools, and frameworks"
- **Phase 2: BUILD** — "Create real products, automations, and content"  
- **Phase 3: LAUNCH** — "Demo Day. Ship what you built. Leave with proof."

Layout: Three large cards, each with a big phase number (01, 02, 03), a one-word verb in large italic serif, and a short description. Staggered scroll-triggered fade-in. This replaces or complements the existing "Three Pillars" section — the pillars become the detail layer, and "Process" becomes the narrative overview.

### 4. Enhanced Section Transitions and Animations

**Files**: All section components

Add scroll-triggered animations inspired by the filmmaking site:

- **Staggered text reveals**: Headlines animate word-by-word or line-by-line (using framer-motion `variants` with staggerChildren)
- **Image/card parallax**: Cards get subtle `y` parallax on scroll using `useTransform` with `scrollYProgress`
- **Counter animations**: Keep existing AnimatedNumber but add them to a new stats strip
- **Smooth section-to-section transitions**: Add a subtle `opacity` fade as sections enter viewport (already partially done, but standardize all to use `whileInView` with consistent timing)

### 6. WhatIsForge — Elevate with Cinematic Feel

**File**: `WhatIsForge.tsx`

- Keep the blue bento cards (20 × 9 × 1) but refine:
  - Add subtle hover glow effect
  - Make the × separators slightly animated (fade in with delay)
- Add a full-width atmospheric image below the description (a photo from the residency/working space) to break the text monotony — similar to how the filmmaking site uses imagery between sections

### 7. WhyAINow — Keep but Polish

**File**: `WhyAINow.tsx`

- Already has the dot grid and narrative — keep as is
- Add a brief narrative intro line before the grid: a provocative one-liner that draws the reader in

### 8. Pillars — More Visual, Less Boxy

**File**: `Pillars.tsx`

- Make each pillar card larger with more breathing room
- Add a subtle gradient accent line on the left side of each card (colored by pillar theme)
- Add a background number watermark that's larger and more cinematic (similar to filmmaking site's large typography overlays)

### 9. Community — Narrative Rewrite

**File**: `Community.tsx`

Inspired by filmmaking site's "Come for the Learning, Stay for the Community":

- Replace the network visualization (SVG circles) with narrative prose only — the community story is strong enough without abstract graphics
- Keep the three feature cards (Private Group, Alumni Network, Accountability)
- Add a pull quote or statistic: "The group chat stays active. The referrals keep coming."

### 10. Social Proof — Larger, More Impactful

**File**: `SocialProof.tsx`

- Make testimonial cards larger with more padding
- Add a large decorative quotation mark (like the filmmaking site uses for testimonials)
- Consider stacking them vertically on mobile for better readability instead of horizontal scroll

### 11. Pricing — Cleaner

**File**: `Pricing.tsx`

- Remove the `bg-primary/[0.03]` from FinalCTA since we're going single-background
- Keep the pricing card styling but ensure it stands out on the unified cream background (slightly stronger shadow)

### 12. Index.tsx — Add New Process Section

**File**: `Index.tsx`

Insert the new Process component between WhatIsForge and WhyAINow (or between Trailer and WhoIsFor) to create the narrative arc:

```
Hero → LogoStrip → WhatIsForge → Process (NEW) → WhyAINow → Trailer → WhoIsFor → Pillars → Outcomes → Schedule → Mentors → Community → SocialProof → Pricing → FAQs → FinalCTA → Footer
```

### 13. FinalCTA — Full Unified Background

**File**: `FinalCTA.tsx`

- Remove the separate tinted background (`bg-primary/[0.03]`)
- Keep it on the same cream background as everything else
- Make the typography larger and more cinematic

---

## Files Changed Summary


| File                                | Change                                                         |
| ----------------------------------- | -------------------------------------------------------------- |
| `src/index.css`                     | Unified warm cream background `#F5F3EF`, remove muted variants |
| `src/components/SectionWrapper.tsx` | Remove variant system, unified bg, increase spacing            |
| `src/components/Process.tsx`        | **NEW** — Learn → Build → Launch narrative section             |
| `src/pages/Index.tsx`               | Add Process component to page flow                             |
| `src/components/WhatIsForge.tsx`    | Refine bento cards, add atmospheric image                      |
| `src/components/WhyAINow.tsx`       | Polish narrative intro                                         |
| `src/components/Pillars.tsx`        | Larger cards, gradient accents, cinematic numbers              |
| `src/components/Community.tsx`      | Remove SVG viz, strengthen narrative prose                     |
| `src/components/SocialProof.tsx`    | Larger cards, stronger visual impact                           |
| `src/components/FinalCTA.tsx`       | Remove separate bg tint                                        |
| `src/components/Outcomes.tsx`       | Remove muted variant                                           |
| `src/components/Mentors.tsx`        | Remove muted variant                                           |
| `src/components/Pricing.tsx`        | Remove muted variant, stronger shadow                          |
