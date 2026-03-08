

## Plan: Visual Overhaul for High-Ticket Conversion

### Overview
Transform the page from a standard section-based layout into an immersive, narrative-driven experience with parallax effects, a trailer embed section, and an application fee mention in the invite modal.

### Changes

#### 1. Parallax Scroll Effects
- Add a `useParallax` hook using `window.scrollY` with `requestAnimationFrame` for smooth GPU-accelerated transforms
- **Hero**: Background video and glow blob move at 0.3x scroll speed, creating depth
- **Experience section**: Image parallax (moves slower than text)
- **Final CTA**: Glow blob drifts with parallax
- **Pull quotes**: Slight parallax offset for cinematic feel
- All parallax disabled on mobile (use `useIsMobile` check) to preserve 60fps on Android

#### 2. Trailer Section (new component)
- Create `Trailer.tsx` — placed between Experience and Pillars (after "What is the Forge AI Residency" narrative)
- Full-width cinematic section with a YouTube/Vimeo embed
- Dark overlay thumbnail with a large centered play button (circle with triangle)
- On tap/click: reveal the iframe embed (lazy-loaded)
- Aspect ratio 16:9, max-width 900px centered, rounded-2xl with subtle amber border glow
- Section label: "SEE THE EXPERIENCE"
- Placeholder YouTube URL that you can swap later

#### 3. Application Fee in Modal
- Add a note in the `InviteModal` between the form header and fields:
  `"A small application fee of ₹500 is charged after review to confirm your seat. No payment required now."`
- Style: DM Sans 13px equivalent (text-sm), amber-dim color, with a subtle info icon
- Keep the form submission free (no Stripe integration)

#### 4. Visual Polish Across All Sections
- **Hero**: Add a subtle parallax drift to the amber glow blob based on scroll position
- **SectionWrapper**: Add `overflow-hidden` to prevent parallax bleed; slightly increase entrance animation distance (y: 32 instead of 24) for more drama
- **Contrast section**: Add staggered row reveals with slightly more delay (0.12s) for a cascade effect
- **Pillar cards**: Add a subtle hover/tap lift effect (`hover:translate-y-[-2px]` with transition)
- **Pricing card**: Add a slow ambient amber border pulse animation (opacity oscillation on the border)
- **Community network visualization**: Make the dots slightly larger and add connecting lines between adjacent nodes using SVG
- **Glass cards everywhere**: Add `backdrop-blur-sm` for a frosted-glass feel on supported browsers

#### 5. Section Order Update
```text
Navbar
Hero (with parallax video bg)
PoweredBy
ToolsMarquee
WhyAINow
Contrast
Experience
Trailer  ← NEW
Pillars
OnlinePrep
Schedule
Outcomes
Mentors
Community
SocialProof
WhoIsFor
Pricing
FAQs
FinalCTA
Footer
```

### Files Modified
- `src/pages/Index.tsx` — add Trailer import, update section order
- `src/components/Trailer.tsx` — new component
- `src/components/Hero.tsx` — add parallax to video and glow blob
- `src/components/Experience.tsx` — parallax on image
- `src/components/SectionWrapper.tsx` — increase animation distance
- `src/components/InviteModal.tsx` — add application fee note
- `src/components/Contrast.tsx` — increase stagger delay
- `src/components/Pillars.tsx` — add hover lift
- `src/components/Pricing.tsx` — add ambient border pulse
- `src/components/Community.tsx` — enhance network visual with SVG lines
- `src/index.css` — add parallax and ambient pulse keyframes, backdrop-blur utility for glass cards

