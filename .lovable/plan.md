# Premium "What Is Forge" Redesign + Global Cleanup

## 1. SectionWrapper — Remove borders, tighten padding

Remove `border-t border-border` from all sections. Reduce padding to `py-8 md:py-12`. This creates the seamless, flowy homepage feel.

## 2. WhatIsForge.tsx — Full premium redesign

**Layout: Headline → Description → Bento Grid**

**Headline block:**

- Small label: "THE RESIDENCY" in JetBrains Mono uppercase
- "What is the" in DM Sans medium (muted)
- "Forge AI Residency" in DM Sans bold
- Staggered fade-in animations on each line (framer-motion)

**Description:**

- Updated copy: "A 9-day fully residential program where handpicked founders, marketers, and operators learn to build with AI..."
- Centered, max-w-[640px], with a subtle fade-up animation

**Bento grid (3 cards):**
Three glass-morphism cards in a horizontal row, connected by `×` symbols between them:

| **20** Builders | × | **9** Days | × | **1** Bootcamp |

Each card:

- Frosted glass background (`bg-white/60 backdrop-blur-sm border border-black/5`)
- Large number in blue (Satoshi, ~64-80px)
- Label underneath in DM Sans uppercase tracking
- Subtle hover: card lifts (`translateY(-4px)`) with soft blue shadow
- Staggered entrance animation (scale + fade, 0.1s delay between cards)
- The `×` symbols float between cards in muted color

**Premium touches:**

- Subtle radial gradient glow behind the bento grid (blue, ~5% opacity)
- Each card has a faint inner gradient shimmer on hover
- Numbers animate in with a counting effect using framer-motion

## 3. Premium transitions (global)

Ensure all SectionWrapper animations use smooth `easeOut` curves with staggered children where applicable. The existing framer-motion setup handles this — just ensuring consistency.

## Files changed


| File                                | Change                                                                |
| ----------------------------------- | --------------------------------------------------------------------- |
| `src/components/SectionWrapper.tsx` | Remove border, reduce padding                                         |
| `src/components/WhatIsForge.tsx`    | Full redesign with bento cards, new copy, premium animations          |
| `src/index.css`                     | Add any needed utility classes for glass cards if not already present |
