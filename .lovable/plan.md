# Premium Polish & Multi-Section Upgrade Plan

## Summary

Seven changes across multiple files to elevate visual quality, fix specific text/layout issues, add mentor photos, redesign the footer, and remove distracting UI elements.

---

## 1. Fix "PRODUCT" to all-caps (Pillars)

**File:** `src/components/Pillars.tsx`

- Change `title: "Product"` to `title: "PRODUCT"` on line 50.

## 2. Add separators between stats (WhatIsForge)

**File:** `src/components/WhatIsForge.tsx`

- Between the three stat boxes (20 BUILDERS, 9 DAYS, 1 BOOTCAMP), insert small `×` characters rendered as styled spans between each box. Use a `text-foreground/30` color, slightly smaller font.

## 3. Remove side fade gradients from Community marquee

**File:** `src/components/Community.tsx`

- Delete the two `pointer-events-none` gradient divs (lines 39-40) that create the white fade-out on left and right edges of the scrolling images.

## 4. Add real mentor photos

**File:** `src/components/Mentors.tsx`

- Add four high-quality headshot images from Unsplash (professional portrait photos showing faces clearly) as assets or direct URLs.
- Replace the gradient+initials placeholder in each mentor card with an `<img>` tag showing the mentor's photo.
- Use `object-cover` with `object-position: top` to ensure face visibility.
- Mentor photo URLs (Unsplash, professional headshots):
  - Vaibhav Kejriwal — Indian male professional headshot
  - Kevin Adams — male creative professional
  - Sabilashan Ganeshan — male professional
  - Rahul Reddy — Indian male founder
- Each image will be stored as `src/assets/mentor-{name}.jpg` assets copied from Unsplash.

## 5. Premium animations & transitions (global)

**Files:** `src/index.css`, multiple section components

- Add a subtle `backdrop-blur` to the Navbar for a frosted glass effect.
- Add smooth `hover:shadow-xl hover:-translate-y-1` transitions to all card-based sections (Outcomes, Pricing, WhoIsFor).
- Add staggered fade-in animations to the FAQ accordion items.
- Add a subtle scale-on-scroll effect to the Pricing hero image using `whileInView`.
- Enhance the CTA buttons site-wide with a subtle glow/shadow on hover: `hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]`.

## 6. Footer redesign — 3 variations presented as options

**File:** `src/components/Footer.tsx`

The user will pick one. All three share these elements: Forge logo, tagline, program links, connect links, email/newsletter CTA, social icons (Instagram, LinkedIn, WhatsApp), copyright, and a "back to top" action.

### Variation A — "Editorial Split"

Inspired by Wealthsimple. Two-column layout: left side has the Forge logo, tagline ("Learn AI by Building with AI"), and a brief one-liner about the program. Right side has three columns: Program links, Connect links, and a "Stay Updated" email input with a subscribe button. Bottom bar has copyright + legal links.

## 7. Visual narrative polish

- Increase letter-spacing on all section labels (`section-label` class) from `0.12em` to `0.15em`.
- Add a subtle divider line between major sections using the existing `section-divider` class where transitions feel abrupt.

---

## Files to be modified


| File                             | Change                                          |
| -------------------------------- | ----------------------------------------------- |
| `src/components/Pillars.tsx`     | "PRODUCT" all-caps                              |
| `src/components/WhatIsForge.tsx` | × separators between stat boxes                 |
| `src/components/Community.tsx`   | Remove fade gradients                           |
| `src/components/Mentors.tsx`     | Add real headshot photos                        |
| `src/components/Footer.tsx`      | Redesign with 4 variation options               |
| `src/index.css`                  | Enhanced animations, button glow, label spacing |
| `src/components/Navbar.tsx`      | Frosted glass backdrop-blur                     |
| `src/components/FinalCTA.tsx`    | Button hover glow                               |
| `src/components/Pricing.tsx`     | Button hover glow, card hover effects           |
| `src/components/Hero.tsx`        | Button hover glow                               |
| 4 new assets                     | `src/assets/mentor-*.jpg`                       |
