

## Fix LogoStrip Faded Appearance

The logos look faded due to two things:
1. **Image opacity** set to `opacity-80` (line 43) — should be `opacity-100`
2. **Text opacity** set to `text-foreground/50` (line 45) — should be `text-foreground/70` or higher

### Changes in `src/components/LogoStrip.tsx`

- Line 43: Change `opacity-80` → remove it (full opacity)
- Line 45: Change `text-foreground/50` → `text-foreground/70`

This will make logos fully visible and text labels more readable while still keeping a subtle, non-distracting feel.

