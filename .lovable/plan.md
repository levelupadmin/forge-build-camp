# Typography Consistency Audit & Fix Plan

## Current State — Font Audit

Here is every section heading, subheading, and body text style found across the site:

### Font System (3 fonts)

- **DM Sans** — primary font for headings, body, UI
- **Playfair Display** — italic accent on select words
- **JetBrains Mono** — labels, tags, mono elements

### Inconsistencies Found

#### Section Headings (h2)


| Section        | Current Style                           | Issue                                   |
| -------------- | --------------------------------------- | --------------------------------------- |
| Hero           | `text-5xl` (48px) / hardcoded `#F2EEE8` | SKIP (user wants to keep)               |
| WhatIsForge    | `text-7xl` / `md:text-[96px]`           | SKIP (user wants to keep)               |
| WhyAINow       | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |
| Pillars        | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |
| **Experience** | `text-[32px] md:text-[48px]`            | **Smaller** — should be 36/56           |
| **OnlinePrep** | `text-[32px] md:text-[48px]`            | **Smaller** — should be 36/56           |
| **Contrast**   | `text-[32px] md:text-[48px]`            | **Smaller** — should be 36/56           |
| Outcomes       | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |
| WhoIsFor       | `text-3xl md:text-[56px]`               | Mobile too small (30px vs 36px)         |
| Community      | `text-3xl md:text-[56px]`               | Mobile too small                        |
| Mentors        | `text-3xl md:text-[56px]`               | Mobile too small                        |
| Schedule       | `text-3xl md:text-[56px]`               | Mobile too small                        |
| SocialProof    | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |
| Pricing        | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |
| FAQs           | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |
| FinalCTA       | `text-2xl md:text-[72px]`               | Mobile way too small; desktop different |
| Process        | `text-[36px] md:text-[56px]`            | ✓ Consistent                            |


#### Tracking on Headings

Most use `tracking-[-0.025em]` but Experience, OnlinePrep, and Contrast use `tracking-tight` (different Tailwind shorthand, slightly different value).

#### Playfair Display Usage

Used correctly as `font-serif italic text-primary` with `fontWeight: 700` on accent words in: Pillars, WhyAINow, Outcomes, WhoIsFor, Mentors, SocialProof, FAQs, FinalCTA, Process. **Missing** from: Experience, OnlinePrep, Contrast (these have no italic accent word — acceptable but worth noting). The Contrast section uses `text-primary` on "build." without Playfair — should add `font-serif italic`.

#### Body/Description Text

Most sections use `text-muted-foreground` with `text-[16px]` or `text-[17px]`. Consistent enough — no changes needed.

#### Section Labels

All use the `.section-label` class via SectionWrapper — consistent.

---

## Plan — Changes to Make

### 1. Standardize all h2 headings to `text-[36px] md:text-[56px]`

**Files:** Experience.tsx, OnlinePrep.tsx, Contrast.tsx, WhoIsFor.tsx, Community.tsx, Mentors.tsx, Schedule.tsx, FinalCTA.tsx

- **Experience.tsx** line 17: `text-[32px] md:text-[48px]` → `text-[36px] md:text-[56px]`, `tracking-tight` → `tracking-[-0.025em]`
- **OnlinePrep.tsx** line 14: `text-[32px] md:text-[48px]` → `text-[36px] md:text-[56px]`, `tracking-tight` → `tracking-[-0.025em]`
- **Contrast.tsx** line 17: `text-[32px] md:text-[48px]` → `text-[36px] md:text-[56px]`, `tracking-tight` → `tracking-[-0.025em]`
- **WhoIsFor.tsx** line 39: `text-3xl` → `text-[36px]`
- **Community.tsx** line 22: `text-3xl` → `text-[36px]`
- **Mentors.tsx** line 89: `text-3xl` → `text-[36px]`
- **Schedule.tsx** line 74: `text-3xl` → `text-[36px]`
- **FinalCTA.tsx** line 21: `text-2xl md:text-[72px]` → `text-[36px] md:text-[56px]`

### 2. Add Playfair accent to Contrast heading

**File:** Contrast.tsx line 19: Change `<span className="text-primary">build.</span>` → `<span className="font-serif italic text-primary" style={{ fontWeight: 700 }}>build.</span>`

### 3. Consistent heading class pattern

All h2s will use: `font-bold text-[36px] md:text-[56px] leading-[1.1] tracking-[-0.025em] text-foreground text-center`

---

## Files to Modify


| File                            | Change                               |
| ------------------------------- | ------------------------------------ |
| `src/components/Experience.tsx` | h2 size + tracking                   |
| `src/components/OnlinePrep.tsx` | h2 size + tracking                   |
| `src/components/Contrast.tsx`   | h2 size + tracking + Playfair accent |
| `src/components/WhoIsFor.tsx`   | Mobile h2 size                       |
| `src/components/Community.tsx`  | Mobile h2 size                       |
| `src/components/Mentors.tsx`    | Mobile h2 size                       |
| `src/components/Schedule.tsx`   | Mobile h2 size                       |
| `src/components/FinalCTA.tsx`   | h2 size (both mobile + desktop)      |


**Excluded:** WhatIsForge.tsx (per user request), Hero.tsx (hero section has its own visual treatment over video).