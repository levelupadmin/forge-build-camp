

## Plan: Clean Up Labels, Hover Effects, and Schedule Capitalization

### 1. Remove all section labels across the entire page
- **SectionWrapper.tsx**: Remove the `label` prop rendering (lines 23-25) so no section displays its monospace label
- **WhatIsForge.tsx**: Remove the standalone `section-label` element ("THE RESIDENCY")
- **FinalCTA.tsx**: Remove the `section-label` element ("LIMITED INVITES · APPLY NOW")
- All components passing `label=` to SectionWrapper will simply have it ignored

### 2. Fix "Online Prep" capitalization in Schedule
- **Schedule.tsx** line 15: Change `label: "Online Prep"` to `label: "ONLINE PREP"` to match the uppercase style of DAY 01, DAYS 02 + 03, etc.

### 3. Remove hover effects on mobile
Target the custom hover interactions (not standard browser/button hovers):
- **WhoIsFor.tsx**: Change `whileHover={{ scale: 1.02 }}` to only apply on non-touch / md+ screens, and change `group-hover:scale-105` on images to `md:group-hover:scale-105`
- **Schedule.tsx**: Change `group-hover:text-foreground` to `md:group-hover:text-foreground`
- **CSS (index.css)**: Update `.glass-card-hover:hover` and `.card-premium:hover` transforms to only apply at `@media (hover: hover)` so touch devices skip them

### Files to edit
1. `src/components/SectionWrapper.tsx` — remove label rendering
2. `src/components/WhatIsForge.tsx` — remove standalone label
3. `src/components/FinalCTA.tsx` — remove standalone label
4. `src/components/Schedule.tsx` — capitalize "Online Prep" → "ONLINE PREP"
5. `src/components/WhoIsFor.tsx` — disable mobile hover
6. `src/index.css` — wrap hover transforms in `@media (hover: hover)`

