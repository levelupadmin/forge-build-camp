

## Plan: Premium Visual Overhaul — Alternating Dark/Light Sections

### The Problem
Every section shares the same warm cream background, making the page feel like a continuous document rather than a curated landing page. There's no visual rhythm or breathing room between content blocks.

### What Premium Sites Do (from Refero research)
Sites like Revolut, Raycast, and Resend use **alternating dark and light sections** to create visual rhythm. Key patterns:
- Dark (#0b0b0d to #111) sections for hero moments, social proof, and final CTAs
- Light sections for informational/scannable content (features, pricing, FAQs)
- Full-bleed backgrounds that break the "container" feel
- Subtle gradients and glows within dark sections for depth

### The Approach

Assign each section a "dark" or "light" treatment, creating a deliberate rhythm:

```text
SECTION               TREATMENT
─────────────────────────────────
Hero                  DARK (already dark — video bg)
LogoStrip             LIGHT (cream, as-is)
WhatIsForge           LIGHT
WhyAINow              DARK  ← dramatic dot grid on dark
WhoIsFor              LIGHT
Pillars               DARK  ← already has dark card, make full-bleed dark
Outcomes              LIGHT
VennDiagram (Ethos)   DARK  ← cinematic contrast
Schedule              LIGHT
Mentors               LIGHT
Community             DARK  ← marquee cards pop on dark
SocialProof           LIGHT
Pricing               LIGHT
FAQs                  LIGHT
FinalCTA              DARK  ← closing punch
Footer                DARK  ← standard premium pattern
```

### Technical Changes

**1. Add dark section support to SectionWrapper**
- Add a `variant` prop: `"light"` (default cream) or `"dark"` (near-black bg, white text)
- Dark variant applies: `bg-[#0A0A0A]` background, `text-white` for headings, `text-white/60` for muted text
- Full-width background via negative margin + padding trick or wrapper outside max-width

**2. Create CSS variables for dark sections**
- Add `--section-dark-bg: #0A0A0A` and associated foreground colors
- Dark sections override `--foreground`, `--muted-foreground` locally so existing utility classes adapt automatically

**3. Update individual sections for dark treatment**
- **WhyAINow**: Wrap in dark variant; dot grid colors adjust (grey dots become subtle white/10, rest stay vibrant); text becomes white
- **Pillars**: Already has a dark desktop card — extend the dark bg to the full section so the tabs and mobile view also sit on dark
- **VennDiagram**: Dark bg makes the animated circles glow and pop
- **Community**: Dark bg behind the marquee; card overlays adjust
- **FinalCTA**: Dark bg with a subtle radial blue glow behind the heading
- **Footer**: Switch from `bg-background` to dark; links become white/60

**4. Add subtle depth cues to dark sections**
- Radial gradient glow (primary color at ~5% opacity) behind key headings
- Faint top/bottom gradient borders (1px white at 6% opacity) to separate sections cleanly
- Noise overlay already exists — it works on dark sections too

**5. Ensure smooth transitions between light/dark**
- No hard cuts — add a subtle gradient fade (8-12px) at section boundaries via pseudo-elements or border gradients

### Files to edit
1. `src/components/SectionWrapper.tsx` — add dark variant with local CSS variable overrides
2. `src/index.css` — add dark section utility classes and transition gradients
3. `src/components/WhyAINow.tsx` — apply dark variant
4. `src/components/Pillars.tsx` — apply dark variant, adjust mobile styles
5. `src/components/VennDiagram.tsx` — apply dark variant
6. `src/components/Community.tsx` — apply dark variant
7. `src/components/FinalCTA.tsx` — apply dark variant with radial glow
8. `src/components/Footer.tsx` — switch to dark bg, adjust text colors
9. `src/pages/Index.tsx` — pass variant props where needed

