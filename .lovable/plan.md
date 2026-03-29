

# Mentors Carousel — One Card Per View with Swipe

## Change

Replace the 4-column grid in `Mentors.tsx` with an Embla-based carousel (already installed via `src/components/ui/carousel.tsx`). One mentor card visible at a time, swipeable left/right. Add dot indicators below for current position.

## Technical Details

| File | Change |
|------|--------|
| `src/components/Mentors.tsx` | Replace grid with `Carousel`, `CarouselContent`, `CarouselItem` from `@/components/ui/carousel`. Each `CarouselItem` contains one mentor card. Add `CarouselPrevious`/`CarouselNext` arrows on desktop. Add dot pagination using Embla API's `selectedScrollSnap`. Set carousel options: `{ align: "center", loop: true }`. Card max-width ~400px centered within each slide. |

## Layout

- **Mobile (current viewport 390px)**: Full-width card, swipe to navigate, dots below
- **Desktop**: Centered card (~400px), left/right arrow buttons, dots below
- Keep existing card design (gradient avatar, name, role, bullets, LinkedIn link)

