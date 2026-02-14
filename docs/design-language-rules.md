# Design Language Rules (Phase 2)

## Direction

Name: `Editorial-Tech Depth`  
DFII: `12` (Impact 4 + Fit 4 + Feasibility 3 + Performance 3 - Risk 2)

Principles:
1. Reading-first hierarchy with restrained futuristic accents.
2. Strong typography rhythm across all routes.
3. Motion used to guide attention, never to distract.
4. Shared surfaces and border language for card consistency.

## Typography Contract

1. Display font: `Spline Sans`
2. Body font: `Plus Jakarta Sans`
3. Mapping:
   - `h1` page hero: `type-display-2`
   - `h2` section title: `type-h2`
   - `h3` card title: `type-h3`
   - lead paragraph: `type-body-lg`
   - body copy: `type-body`
   - metadata/chips/date: `type-caption` or `type-micro`

## Color and Surface Contract

1. Base layers:
   - `--bg-base`
   - `--bg-elev-1`
   - `--bg-elev-2`
2. Text layers:
   - `--text-primary`
   - `--text-secondary`
   - `--text-muted`
3. Accent layers:
   - `--accent-primary`
   - `--accent-cyan`
   - `--accent-warm`
4. Borders and depth:
   - `--border-soft`
   - `--border-strong`
   - `--shadow-soft`
   - `--shadow-elevated`

## Motion Contract

1. `pageEnter`: low-displacement route entrance.
2. `sectionReveal`: staged reveal with controlled stagger.
3. `cardHover`: subtle lift and scale.
4. `ctaEmphasis`: small, slow emphasis only on high-value CTA.
5. Reduced motion:
   - no continuous loops
   - replace transform-heavy transitions with opacity-first transitions

## Component Behavior Rules

1. Buttons: rounded pill, uppercase micro text, clear focus ring.
2. Cards: unified radius, border, and depth tokens.
3. Metadata chips: caption or micro token only.
4. Forms: body font, high contrast label + helper text, keyboard-visible states.

## Consistency Guardrails

1. No arbitrary `text-*` sizing in new code; use type utility tokens.
2. No hardcoded color hex values in new UI components unless justified.
3. No page-specific one-off motion constants outside `src/lib/motion-tokens.ts`.
