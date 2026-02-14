# Phase 0 Baseline Report

Date: 2026-02-14  
Branch: `feat/portfolio-complete-refresh`

## Commands

```bash
npm run lint
npm run type-check
npm run build
```

## Results

1. `npm run lint`: pass with 1 warning
   - `src/app/layout.tsx`: Next.js warning for raw Google Fonts `<link>` usage (`@next/next/no-page-custom-font`).
2. `npm run type-check`: pass
3. `npm run build`: pass

## Baseline Build Snapshot

- Home (`/`) first load JS: 141 kB
- Projects (`/projects`) first load JS: 106 kB
- About (`/about`) first load JS: 102 kB
- Contact (`/contact`) first load JS: 97 kB

## Known Issues Carried Forward

1. Replace raw font `<link>` in `src/app/layout.tsx` and rely on `next/font`.
2. Global style system is not yet fully tokenized; many ad-hoc sizes/colors still exist across pages.
