# Comprehensive Content & Typography Update

This is a large update touching 8 components plus global styles. Here is the full plan.

---

## 1. Global Font Changes

`**index.html**` — Update Google Fonts import to include DM Sans (400/500), Playfair Display (ital 700-900), and JetBrains Mono (400).

`**src/index.css**` — Change base body font to `'DM Sans'`. Change heading font to `'DM Sans'` (Playfair Display used only for accent words inline). Update `.section-label` to use `'JetBrains Mono'` with `letter-spacing: 0.12em`.

`**tailwind.config.ts**` — Update font families: `sans: ['DM Sans']`, `serif: ['Playfair Display']`, `mono: ['JetBrains Mono']`.

---

## 2. Hero Section (`Hero.tsx`)

- Headline: `Learn AI by <span class="text-[#3B82F6]">Building</span> with AI.`
- Descriptor: "An invite-only residency for founders, marketers, and operators..."
- Stats strip: `600+ Alumni | 25+ Editions | 400+ Projects | 11 Cities`
- Below CTA: `"Block 1 of 20 invites open."` in small muted text
- Apply Playfair Display italic on "Building"

---

## 3. Navbar (`Navbar.tsx`)

- Change logo text from "FORGE / AI RESIDENCY" to "LevelUp Learning"

---

## 4. Who This Is For (`WhoIsFor.tsx`)

- Headline: "Built for people who move the needle."
- Remove Creator, Builder, Curious One cards
- Keep: Founder, Marketer, Operator + add Professional
- Professional description as specified
- Grid changes to 2x2

---

## 5. Pillars (`Pillars.tsx`)

- Headline: "Three Pillars. Nine days."
- Pillar 1: "Generative AI" with new description and builds
- Pillar 2: "AI Automations" with new builds
- Pillar 3: "AI Product Building" with new builds
- Remove day references from tags
- Apply Playfair italic to pillar names in headings

---

## 6. Outcomes (`Outcomes.tsx`)

- Label: "Your Outcomes"
- Headline: "Not just learning. Real building."
- Replace all 6 cards with new titles/descriptions as specified

---

## 7. Schedule (`Schedule.tsx`)

- Headline: "14 days. Here is exactly what happens."
- Remove PRE 01/02/03/04 labels from prep cards
- Replace 4 prep sessions with 5 new ones (The AI Mindset, Prompting and Context Engineering, AI and Business Thinking, What Good Looks Like, Pre-Arrival Alignment)

---

## 8. Pricing (`Pricing.tsx`)

- Price: `INR 1,20,000`
- Headline: "The most focused nine days you will spend on your business this year."
- Update inclusions list (9 items as specified)
- Add exclusions list (3 items) with "✗" markers
- Below CTA: "20 seats per cohort. Payment collected after acceptance only."

---

## 9. FAQs (`FAQs.tsx`)

- Headline: "Questions we get asked a lot."
- Replace all FAQs with exactly 9 new Q&As as specified

---

## 10. Final CTA (`FinalCTA.tsx`)

- Headline: "Think YCombinator meets an AI hackathon."
- Subline: "20 seats. 14 days. One focus."
- Remove "15 days from now" text
- Keep REQUEST AN INVITE button

---

## Typography Pattern for Headlines

Throughout, headlines use DM Sans bold with select accent words wrapped in `<span className="font-serif italic font-black">`. For example: "Three *Pillars.* Nine days." where "Pillars" is Playfair Display italic weight 900.

**Files modified:** `index.html`, `src/index.css`, `tailwind.config.ts`, `src/components/Hero.tsx`, `src/components/Navbar.tsx`, `src/components/WhoIsFor.tsx`, `src/components/Pillars.tsx`, `src/components/Outcomes.tsx`, `src/components/Schedule.tsx`, `src/components/Pricing.tsx`, `src/components/FAQs.tsx`, `src/components/FinalCTA.tsx`

Also the logo of the program should come in the hero section ask the user for the logo