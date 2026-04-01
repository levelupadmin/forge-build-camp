

# Redesign Pillars Mobile Layout — Image on Top, Content Below

## Reference Analysis

The uploaded screenshots from forgebylevelup.com show a mobile layout where:
- A **large photo** sits at the top, rounded corners, taking significant vertical space
- Below the image: **center-aligned content** — title, description, tool/tag pills, bullet outcomes, and a CTA
- Clean separation between image and text — no overlay text on the image

## What Changes

Rewrite only the mobile section (`md:hidden`) in `src/components/Pillars.tsx`. Desktop layout stays untouched.

### New Mobile Layout Structure

```text
┌────────────────────────┐
│ [Gen AI] [Auto] [Prod] │  ← toggle pills (keep existing)
├────────────────────────┤
│                        │
│      ┌──────────┐      │
│      │          │      │
│      │  IMAGE   │      │
│      │          │      │
│      └──────────┘      │
│                        │
│      PILLAR 01         │  ← tag, blue, mono, uppercase
│    Generative AI       │  ← bold title, centered
│                        │
│   Description text     │  ← centered, muted
│   centered here...     │
│                        │
│   [logo] [logo] [logo] │  ← tool icons row, centered
│                        │
│   ✓ Build outcome 1    │  ← "What you'll build" items
│   ✓ Build outcome 2    │
│                        │
│   ━━━━━━━━━━━━━━━━━    │  ← progress bar
└────────────────────────┘
```

### Details

1. **Toggle pills** — keep as-is at the top
2. **Image block** — `rounded-2xl overflow-hidden aspect-[16/10]` with the pillar's background image, `object-cover`. Animates with cross-fade on change. No text overlay on the image.
3. **Content below image** — all center-aligned (`text-center`):
   - Pillar tag: mono, blue, uppercase, 11px
   - Title: bold, 28-32px, white
   - Description: 14px, muted, max-w-[340px] mx-auto
   - Tool logos: row of circles, centered, with overlapping style
   - "What you'll build": left-aligned or centered list with arrow prefix
4. **Progress bar** — thin 2px bar at very bottom
5. **Auto-rotate** — same 5s timer logic, unchanged

### File Changed

**`src/components/Pillars.tsx`** — Replace lines 107-178 (the `md:hidden` block) with the new stacked image-on-top layout. No other files touched.

