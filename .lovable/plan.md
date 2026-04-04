

## Fix Persona Grid to Show Full Images

### Problem
The current grid uses `object-cover` on absolutely positioned images, which crops them to fill their containers. The asymmetric layout (Founder spans 2 cols + 2 rows, Professional spans 3 cols) means images get heavily cropped.

### Solution
Switch to a uniform 2x2 grid with equal-sized cards and use `object-cover` with generous fixed aspect ratios so images are visible with minimal cropping.

### Changes — `src/components/WhoIsFor.tsx`

1. **Remove per-card `className`** from the personas array (no more col-span/row-span overrides)
2. **Change grid** from `grid-cols-3` to `grid-cols-2` on desktop, keeping `grid-cols-1` on mobile
3. **Set a consistent aspect ratio** on each card using `aspect-[4/5]` (portrait-ish) so images have room to breathe
4. **Keep `object-cover`** but now each card is the same size, so cropping is minimal and consistent
5. Remove `min-h-*` classes since aspect ratio handles sizing

Result: 4 equal cards in a 2×2 grid, each with a portrait aspect ratio showing nearly all of each image.

