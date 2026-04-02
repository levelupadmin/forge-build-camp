

# Copy Logo Assets from Forge Home Page

## What's happening now
The current `LogoStrip.tsx` already has the "Join 600+ dreamers from" marquee with the same structure. However, it uses external URLs (Clearbit API, Wikipedia) which can be unreliable. The [Forge Home Page](/projects/79557e20-106f-4094-81ea-00560819e60d) project has proper local PNG logo files for all these companies and institutions.

## Plan

### 1. Copy 17 logo PNGs from Forge Home Page
Copy all assets from `public/images/learners/` in the Forge Home Page project to `public/images/learners/` in this project:

Row 1 (companies): `google.png`, `mckinsey.png`, `amazon.png`, `netflix.png`, `meta.png`, `microsoft.png`, `swiggy.png`, `zomato.png`, `cred.png`

Row 2 (institutions): `amex.png`, `ashoka.png`, `iim.png`, `symbiosis.png`, `christ.png`, `govt-india.png`, `nift.png`, `loyola.png`

### 2. Update `src/components/LogoStrip.tsx`
- Replace all external URLs with local paths (`/images/learners/google.png`, etc.)
- Add Zomato and American Express (present in the Forge Home Page but missing here)
- Keep the same dark-theme styling (grayscale, 50% opacity) and marquee animation
- Keep the two-row layout with opposite scroll directions

### Files changed
- **`src/components/LogoStrip.tsx`** — update image URLs to local paths, add Zomato + Amex
- **17 new assets** copied to `public/images/learners/`

