

# Redesign: Schedule Section — Hero Image + Day Accordion

## Reference

The uploaded screenshots from `creators.forgebylevelup.com/filmmaking` show:
- Heading ("your Forge Journey") + subheading, center-aligned
- One large photo below (rounded corners, full-width within container)
- Below the image: a list of days as accordion rows — each row has a day title on the left and a `+`/`×` icon on the right
- Clicking a day expands it to show the description; clicking also changes the hero image above
- Clean, minimal — no bento grid cards, no timeline dots

## What Changes

Rewrite `src/components/Schedule.tsx` entirely. No other files affected.

### New Structure

```text
┌─────────────────────────────────────┐
│         THE SCHEDULE (label)        │
│         The Gameplan (h2)           │
│     Subheading text (muted)         │
│                                     │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │      HERO IMAGE             │    │
│  │   (changes per active day)  │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  ─────────────────────────────────  │
│  Online Prep                    +   │
│  ─────────────────────────────────  │
│  Day 1 — Arrive + Orient       +   │
│  ─────────────────────────────────  │
│  Days 2 + 3 — AI Creativity    ×   │
│    Full immersion in AI...          │
│    Outcome: Your first AI...        │
│  ─────────────────────────────────  │
│  Days 4 + 5 — Automation        +   │
│  ─────────────────────────────────  │
│  Days 6, 7 + 8 — Product       +   │
│  ─────────────────────────────────  │
│  Day 9 — Demo Day              +   │
│  ─────────────────────────────────  │
└─────────────────────────────────────┘
```

### Data Restructuring

Merge the 5 online prep sessions into a single accordion row called **"Online Prep"** with a combined description listing all 5 topics. The remaining 5 schedule entries stay as individual rows. Total: **6 accordion rows**.

Each row gets an associated placeholder image (will generate 6 images or reuse existing assets). The hero image cross-fades when a different row is clicked/expanded.

### Accordion Behavior

- One row open at a time (clicking a new row closes the previous)
- Active row shows `×` icon; inactive rows show `+`
- Clicking a row both expands its content AND swaps the hero image above
- `AnimatePresence` handles the image cross-fade and content expand/collapse

### Image Block

- `aspect-[16/10]` or `aspect-[16/9]`, `rounded-2xl`, `overflow-hidden`
- Full container width (`max-w-[680px] mx-auto` matching accordion width)
- Cross-fade animation on change using `motion.img` with `AnimatePresence`

### Accordion Row Styling

- No cards, no background color — just horizontal divider lines (`border-b border-border`)
- Day label: bold, 18-20px, left-aligned (e.g., "Day 1 — Arrive + Orient")
- Right side: `+` or `×` icon, toggling on click
- Expanded content: description text + outcome, with slide-down animation
- No timeline dots, no phase labels — clean minimal list

### Mobile

Same layout works at all breakpoints — single column, image on top, accordion below. Image aspect ratio may shift slightly (`aspect-[4/3]` on mobile for taller images).

### Placeholder Images

Generate 6 simple placeholder images for: Online prep (laptop/remote learning), Day 1 (arrival/orientation), Days 2-3 (creative tools), Days 4-5 (automation), Days 6-8 (building/product), Day 9 (demo day/celebration).

### File

**`src/components/Schedule.tsx`** — full rewrite. No other files changed.

