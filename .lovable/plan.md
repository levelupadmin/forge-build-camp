

# Restructure: Merge Trailer into WhatIsForge + Add Venn Diagram + Remove Process

## What Changes

### 1. Merge WhatIsForge + Trailer into one cohesive section (`WhatIsForge.tsx`)

New flow inside the component (top to bottom):
1. **Label**: "THE RESIDENCY"
2. **Heading**: "What is the *Forge* AI Residency"
3. **Description paragraph** (existing text)
4. **Trailer video embed** (moved from Trailer.tsx — play button with thumbnail, click to play YouTube)
5. **Stats strip**: `20 BUILDERS | 9 DAYS | 1 BOOTCAMP` — styled as a single horizontal line of large uppercase text with pipe separators (like the filmmaking screenshot: `24 FILMMAKERS | 12 DAYS | 1 RESORT`), not cards. Blue text, centered below the trailer.

### 2. Create Venn Diagram section (`VennDiagram.tsx`)

Inspired by the Ethos page from forgebylevelup.com (screenshots provided). Three overlapping circles in a Venn diagram layout:
- **Learning** (top-left circle)
- **Networking** (top-right circle)  
- **Building** (bottom-center circle)
- Center intersection: **"the Forge"** in primary/blue with a subtle radial glow

Implementation: SVG-based circles with thin borders (`stroke: foreground/20`), text labels inside each circle. The center intersection gets a warm radial gradient glow (using the site's blue primary instead of the gold from the filmmaking site). Scroll-triggered animation — circles fade in and drift into position.

Below the Venn diagram, a narrative line: *"We meet builders at the intersection of **learning**, **networking**, and **building** to turn them into AI-native operators."*

### 3. Remove Process section

Delete `Process.tsx` from the page flow. The "Learn → Build → Launch" narrative is replaced by the Venn diagram concept (Learning, Networking, Building).

### 4. Remove Trailer section

`Trailer.tsx` is no longer rendered separately — its video embed is absorbed into `WhatIsForge.tsx`.

### 5. Update Index.tsx

New flow:
```
Hero → LogoStrip → WhatIsForge (now includes trailer + stats) → VennDiagram (NEW) → WhyAINow → WhoIsFor → Pillars → Outcomes → Schedule → Mentors → Community → SocialProof → Pricing → FAQs → FinalCTA → Footer
```

Remove `Process` and `Trailer` imports/renders.

---

## Technical Details

### WhatIsForge.tsx — rebuilt
- Remove the blue bento cards and `AnimatedNumber` component
- Add trailer video (state: `playing`, thumbnail with play button, iframe on click)
- Stats strip below trailer: simple text `20 BUILDERS  |  9 DAYS  |  1 BOOTCAMP` in `text-primary font-bold text-[14px] md:text-[18px] uppercase tracking-[0.2em]`

### VennDiagram.tsx — new component
- Three SVG circles (r ~120px desktop, ~80px mobile) with `stroke` borders and transparent fill
- Positioned with slight overlaps (classic Venn arrangement)
- Center intersection has a radial gradient glow (`bg-primary/20 blur-[40px]`)
- "the Forge" text in center using primary color, italic serif
- `motion.svg` with `whileInView` fade-in for each circle (staggered)
- Below: narrative prose line with bold keywords

### Files

| File | Change |
|------|--------|
| `src/components/WhatIsForge.tsx` | Rebuild — heading + description + trailer + stats strip |
| `src/components/VennDiagram.tsx` | **NEW** — Venn diagram with Learning/Networking/Building |
| `src/pages/Index.tsx` | Remove Process + Trailer, add VennDiagram |
| `src/components/Process.tsx` | No longer imported (can delete later) |
| `src/components/Trailer.tsx` | No longer imported (can delete later) |

