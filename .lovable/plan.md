

## Redesign Testimonials Section (No Images)

### Overview
Remove all testimonial images and redesign the carousel cards to be visually striking using typography, color accents, and layout alone. Add location data to each testimonial for diversity context.

### Data Changes
Update testimonial objects: remove `image` field, add `location` field, fix Ananya's empty role.

| Name | Role | Location |
|------|------|----------|
| Rishi Malhotra | Co-founder, Koda Labs | Mumbai |
| Ananya Iyer | Freelance Designer | Chennai |
| Kabir Sehgal | Founder, Blok Studio | Delhi |
| Meera Nambiar | Brand Strategist, Swiggy | Bangalore |
| Aryan Kapoor | Head of Operations, Vahan | Pune |
| Priya Sood | Founder, The Copy Co. | Jaipur |
| Vikram Nair | Senior Marketing Manager, CRED | Bangalore |
| Shreya Bhatia | Founder, Mosaic Ventures | Mumbai |

### Visual Design
- Remove all image imports and the image block from cards
- Card layout: large opening quotation mark (decorative, serif italic, primary color, ~80px), quote text prominently displayed, then attribution at bottom
- Card gets a subtle gradient border or primary accent line on the left/top
- Name in bold, role + company in muted foreground, location with a small map-pin icon or dot separator
- Increase card max-width slightly to ~640px to let quotes breathe
- Add a large decorative quote mark as a visual anchor (replaces the image as the visual element)
- Keep the swipe/drag carousel and dot navigation as-is

### File Changes
1. **`src/components/SocialProof.tsx`** -- Remove all image imports, update testimonial data with locations, redesign card markup (no image, add decorative quote mark, attribution with location)

