# Redesign: Three Pillars → Interactive Horizontal Accordion

## Summary

Replace the current `Pillars.tsx` with an interactive horizontal accordion panel. Desktop: 3 panels in a row, one expanded (65%), two collapsed (17.5%). Auto-rotates every 5s. Mobile: vertical stack with toggle tabs at top. Full-bleed background images with gradient overlays, tool logos with hover tooltips.

## Files Changed

### 1. `src/components/Pillars.tsx` — Full rewrite

**Data structure** — 3 pillars with updated copy per spec:

- Pillar 01: "Generative AI" — tools: Higgsfield, Midjourney, HeyGen, ElevenLabs, Runway
- Pillar 02: "AI Automations" — tools: n8n, Make, Claude, OpenAI
- Pillar 03: "AI Product Building" — tools: Lovable, Replit, Supabase (note: "Emergent" not in toolLogos, will use Replit as substitute)

**State management:**

- `activeIndex` state (0/1/2), starts at 0
- `useEffect` with 5s `setInterval` for auto-rotation, cycles 0→1→2→0
- Pause on hover (`onMouseEnter`/`onMouseLeave` sets `isPaused` ref)
- Click on inactive panel sets `activeIndex` and resets timer
- Progress bar animation via CSS `@keyframes` tied to a `key` that resets on panel change

**Desktop layout (md+):**

- Container: `flex` row, `h-[560px]`, `rounded-2xl overflow-hidden`
- Active panel: `w-[65%]`, transition `width 0.6s ease-in-out`
- Inactive panels: `w-[17.5%]`, cursor pointer
- Each panel has a background image with CSS `background-size: cover`
- Active overlay: `linear-gradient(to right, rgba(0,0,0,0.80), rgba(0,0,0,0.25))`
- Inactive overlay: `rgba(0,0,0,0.72)`, hover reduces to 0.55
- Inactive text: `writing-mode: vertical-rl` for rotated pillar number + name
- Active content: positioned bottom-left with padding 48px

**Mobile layout (<768px):**

- Three toggle tabs at top (pill buttons): "Generative AI", "AI Automations", "AI Product Building"
- Active tab highlighted with blue background
- Below tabs: active pillar shown full-width, height 420px
- Full-bleed image background with gradient overlay
- All content (tag, headline, descriptor, tools, builds) visible
- Tap a different tab to switch pillar, auto-rotate still runs

**Tool logos row (both layouts):**

- 36px circles with white bg, border `rgba(255,255,255,0.2)`
- Overlapping with `-ml-1.5` (negative margin)
- Uses existing `toolLogos` map from `@/lib/toolLogos`
- Tooltip on hover showing tool name (using Radix Tooltip or simple CSS tooltip)

**Progress bar:**

- 2px bar at bottom of each panel
- Inactive: `rgba(255,255,255,0.15)` background
- Active: animates width 0→100% over 5s in `#3B82F6`
- Resets when active panel changes (via React `key` prop)

**Section header:**

- Label: "The Core" — JetBrains Mono 10px, blue, uppercase
- Headline: "Three Pillars. Nine days." — Playfair Display italic 900, white, centered
- 48px margin below before panels

**CTA below panels:**

- "Request an Invite" button — blue bg, white text, rounded-full, auto-width centered
- Calls `onOpenModal`

### 2. `src/lib/toolLogos.ts` — Add missing entry

- Add `"Emergent"` logo URL if available, otherwise map to a placeholder

### 3. Generate 3 background images

- `public/pillars/pillar-01.jpg` — cinematic creative studio
- `public/pillars/pillar-02.jpg` — automation/workflow aesthetic
- `public/pillars/pillar-03.jpg` — collaborative building scene

No other files or sections are touched.

## Technical Notes

- All transitions use inline `style={{ transition: 'width 0.6s ease-in-out' }}` or Tailwind `transition-all duration-[600ms] ease-in-out`
- Progress bar animation uses CSS `@keyframes` with `animation: progress 5s linear` and resets via changing the React `key`
- Mobile tabs use simple button group, no carousel needed
- Tooltip for tool logos: lightweight CSS-only tooltip (pseudo-element) to avoid adding dependencies