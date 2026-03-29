

# Fixes: WhatIsForge Cards, WhyAINow Dots, Background Consistency, Logo Sources

## Reference Insights (Refero)

**ManyChat landing** — Uses compact inline stat blocks (large bold numbers + small descriptors) in a horizontal row with generous whitespace. Pill-shaped CTAs, alternating section backgrounds between white and tinted panels.

**Intercom pricing** — Cards side-by-side with one highlighted in dark/colored background and white text, others on white. Clear visual hierarchy through color contrast.

**Key takeaway**: The "highlighted stat card" pattern (colored bg + white text) is a proven premium pattern. Cards should be compact and horizontal.

---

## 1. WhatIsForge — Blue cards side-by-side (`WhatIsForge.tsx`)

**Problem**: Cards stack vertically on mobile, taking too much space. Currently white bg with blue text.

**Fix**:
- Change cards to `bg-primary` (blue) with white text/labels
- Make cards compact: `w-[100px] md:w-[160px] py-6 md:py-8` so all 3 fit side-by-side even on mobile
- Change layout from `flex-col md:flex-row` → `flex-row` always (horizontal on all screens)
- Show `×` symbols on mobile too (remove `hidden md:block`)
- Reduce number font size on mobile: `text-[36px] md:text-[64px]`
- Labels: white, `text-white/80`

## 2. WhyAINow — Fix dot visibility (`WhyAINow.tsx`)

**Problem**: Grey dots (`bg-foreground/12`) are nearly invisible on the warm off-white background.

**Fix**:
- Change grey dots from `bg-foreground/12` → `bg-foreground/25` for clear visibility
- Change green dots from `bg-emerald-500/60` → `bg-emerald-500/80`
- Add back the "echo chamber" narrative line: "You think AI is crowded because you're in an echo chamber." before "The real world hasn't even started."
- Update the legend dot colors to match

## 3. Background consistency (`SectionWrapper.tsx`, `index.css`)

**Problem**: Alternating `hsl(30,15%,95%)` muted sections create a jarring off-white/white switch.

**Fix**:
- Remove the warm tint entirely. Set `--background: 0 0% 100%` (pure white)
- Change muted variant from `bg-[hsl(30,15%,95%)]` → `bg-[#F7F7F7]` (neutral light gray, no warm tint)
- Update `--bg-base`, `--card`, `--popover` to pure white equivalents
- This eliminates the "keeps changing" feel — it's now white vs very subtle gray

## 4. LogoStrip — Source real logos (`LogoStrip.tsx`)

**Problem**: Some logos may not load (Wikipedia URLs can be unreliable). Need complete set.

**Fix**: Replace all logo URLs with more reliable sources and add missing ones. Keep the two-row marquee layout. Update logos to use brand icon CDNs or direct SVG URLs where possible. Ensure all company/university names match their actual logos:

**Row 1 (Companies)**: CRED, Google, McKinsey, Amazon, Netflix, Meta, Microsoft, Swiggy
**Row 2 (Universities/Institutions)**: IIM, NIFT, Ashoka University, Christ University, Symbiosis, Loyola, Government of India

Use `logo.clearbit.com` as a reliable fallback for company logos (e.g., `https://logo.clearbit.com/google.com`). Keep Wikipedia URLs for institutions where Clearbit won't work.

---

## Files Changed

| File | Change |
|------|--------|
| `src/components/WhatIsForge.tsx` | Blue bg cards, always horizontal, compact sizing |
| `src/components/WhyAINow.tsx` | Fix dot opacity, add echo chamber line back |
| `src/components/SectionWrapper.tsx` | Neutral gray muted variant |
| `src/index.css` | Pure white background, remove warm tint |
| `src/components/LogoStrip.tsx` | Reliable logo URLs via Clearbit + Wikipedia |

