# Asset Usage Map (Phase 2)

## Generated Assets

1. `public/images/brand/mesh-hero-01.svg`
2. `public/images/brand/noise-soft-01.png`
3. `public/images/brand/divider-flow-01.svg`
4. `public/images/brand/blob-depth-01.svg`

## Placement Plan

1. Hero sections:
   - Background layer 1: `mesh-hero-01.svg`
   - Texture layer: `noise-soft-01.png` at low opacity
2. Section transitions:
   - `divider-flow-01.svg` between major route sections
3. Featured cards:
   - `blob-depth-01.svg` as soft accent behind highlighted cards

## Accessibility and Performance Rules

1. Assets are decorative by default and should use empty `alt` where applicable.
2. Use optimized dimensions and avoid full-viewport raster bloat.
3. Keep texture overlays below 14% opacity to preserve readability.
4. Reduced-motion mode keeps assets static (no looped transform effects).
