# Detailed Execution Playbook (Branch-First, Skill-Orchestrated)

## Phase 0: Branch and Baseline
Skill owner:
1. `concise-planning` (execution kickoff checklist)

Actions:
1. Create branch:
```bash
git checkout -b feat/portfolio-motion
```
2. Push upstream:
```bash
git push -u origin feat/portfolio-motion
```
3. Capture baseline:
```bash
npm run lint
npm run type-check
npm run build
```

Artifacts:
1. Clean baseline report (known issues listed explicitly).
2. Branch ready for phased commits.

Acceptance:
1. Branch active and tracked.
2. Baseline status documented.

## Phase 1: Plan and Gate (No UI mutation yet)
Skill owners:
1. `concise-planning`
2. `brainstorming`
3. `design-orchestration`

Deliverables:
1. Locked scope list for all routes under `src/app/(main)`.
2. Decision log for animation budget and depth strategy.
3. Gate approval to enter design.

Scope (In):
1. Home, Projects, Project details, About, Contact.
2. Experience, Skills, Academic, Research, Blog, Blog details.
3. Shared layout/navigation/footer and global styles.

Scope (Out):
1. Backend/API redesign.
2. CMS integration.
3. New product features unrelated to portfolio presentation.

Acceptance:
1. Risk and constraints documented.
2. No unresolved high-impact decisions.

## Phase 2: Design System and Visual Direction
Skill owners:
1. `prompt-engineer` (prompt packaging)
2. `ui-ux-pro-max` (tokens)
3. `frontend-design` (DFII and component visual language)
4. `canvas-design` (asset pack)

## 2.1 Token Architecture
Files:
1. `src/app/globals.css`
2. `tailwind.config.js`
3. `src/lib/design-tokens.ts` (new)
4. `src/lib/motion-tokens.ts` (new)

Changes:
1. Define semantic color tokens:
- `--bg-base`, `--bg-elev-1`, `--bg-elev-2`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--accent-primary`, `--accent-cyan`, `--accent-warm`
- `--border-soft`, `--border-strong`
2. Define spacing tokens:
- `--space-2` to `--space-24`
3. Define radius tokens:
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
4. Define shadow/depth tokens:
- `--shadow-soft`, `--shadow-elevated`, `--glow-accent`
5. Define type scale tokens and utility classes.

## 2.2 Typography Specification
Primary families:
1. Display: `Spline Sans` (existing)
2. Body: `Plus Jakarta Sans` (existing)

Rules:
1. Headings use display font only.
2. Body/captions/forms use body font only.
3. Tag/pill/meta uses uppercase micro token with consistent tracking.

Per-element mapping:
1. Page title (`h1`): `display-2` token.
2. Section title (`h2`): `h2` token.
3. Card title (`h3`/`h4`): `h3` token.
4. Lead paragraph: `body-lg` token.
5. Standard paragraph/list: `body` token.
6. Meta/date/tag: `caption` token.

## 2.3 Motion Design Contract
Motion presets in `src/lib/motion-tokens.ts`:
1. `pageEnter`: 0.35s, low displacement.
2. `sectionReveal`: stagger 0.06-0.1s.
3. `cardHover`: translateY + scale micro.
4. `ctaEmphasis`: subtle scale pulse on intent.
5. `ambientLoop`: ultra-low amplitude for background only.

Reduced motion:
1. Replace translate/parallax with opacity transitions.
2. Disable continuous loops and scroll-linked effects.

## 2.4 Asset Pack Plan
Skill owner:
1. `canvas-design`

Assets to produce:
1. `public/images/brand/mesh-hero-01.(svg|webp)`
2. `public/images/brand/noise-soft-01.png`
3. `public/images/brand/divider-flow-01.svg`
4. `public/images/brand/blob-depth-01.svg`

Usage map:
1. Hero background layers.
2. Section transition dividers.
3. Featured project background accents.

Acceptance:
1. Tokens compiled and used by pilot components.
2. Type scale applied consistently in pilot sections.
3. Asset pack approved and optimized.

## Phase 3: Build System Foundations
Skill owners:
1. `interactive-portfolio`
2. `3d-web-experience` (parallel)
3. `scroll-experience` (parallel)
4. `clean-code` (gate)

## 3.1 Shared Component Foundations
Create:
1. `src/components/motion/PageTransition.tsx`
2. `src/components/motion/Reveal.tsx`
3. `src/components/motion/StaggerGroup.tsx`
4. `src/components/motion/ParallaxLayer.tsx`
5. `src/components/motion/HoverField.tsx`
6. `src/components/3d/SceneCanvas.tsx`
7. `src/components/3d/hero/HeroDepthScene.tsx`
8. `src/components/3d/shared/useSceneQuality.ts`

Update:
1. `src/app/layout.tsx` route transition wrapper and reduced-motion branching.
2. `src/app/globals.css` utility classes for typography and section rhythm.

## 3.2 Quality Tiers for 3D
`useSceneQuality` policy:
1. Tier High: desktop/high GPU, full hero scene.
2. Tier Medium: simplified geometry/particles.
3. Tier Low: static or near-static background fallback.

Fallback policy:
1. Mobile low-tier defaults to static gradient + subtle CSS movement.
2. No blocking hydration due to 3D payload.

Acceptance:
1. Shared primitives compile and are reusable.
2. 3D fallback works on constrained devices.

## Phase 4: Page-by-Page Migration (Consistency + Depth)
Skill owners:
1. `interactive-portfolio` (structure)
2. `3d-web-experience` (targeted scenes)
3. `scroll-experience` (narrative motion)
4. `clean-code` (review after each page cluster)

## 4.1 Home
Files:
1. `src/app/(main)/page.tsx`
2. `src/components/home/HeroSection.tsx`
3. `src/components/home/StatsSection.tsx`
4. `src/components/home/FeaturedProjects.tsx`
5. `src/components/home/SkillsOverview.tsx`
6. `src/components/home/ScheduleMeeting.tsx`
7. `src/components/home/ContactGrid.tsx`
8. `src/components/home/SocialChannels.tsx`

Changes:
1. Hero: layered composition with R3F depth scene behind readable content.
2. Sections: ordered reveal with consistent spacing/heading rhythm.
3. Card hover: unified hover preset and focus-visible states.
4. Replace hardcoded sizes/colors with tokens.

Acceptance:
1. Home looks premium and coherent top-to-bottom.
2. Hero motion remains smooth and non-distracting.

## 4.2 Projects and Project Detail
Files:
1. `src/app/(main)/projects/page.tsx`
2. `src/app/(main)/projects/[slug]/page.tsx`
3. `src/components/projects/*`

Changes:
1. Filter controls: consistent pill system and animated state transitions.
2. Featured project: subtle depth background and stronger type hierarchy.
3. Grid cards: unified metadata styling and hover behavior.
4. Detail page: content blocks and media rhythm aligned to type tokens.

Acceptance:
1. Filtering is smooth and stable.
2. Project proof remains primary focus over effects.

## 4.3 About
Files:
1. `src/app/(main)/about/page.tsx`
2. `src/components/about/*`

Changes:
1. Introduce narrative reveal pacing (bio -> values -> journey).
2. Normalize cards to shared surface and type rules.
3. Add restrained parallax/background accent only to key moments.

Acceptance:
1. About reads as a polished narrative, not disconnected widgets.

## 4.4 Contact
Files:
1. `src/app/(main)/contact/page.tsx`
2. `src/components/contact/*`

Changes:
1. Simplify visual hierarchy around contact actions.
2. Make CTA buttons, form fields, and labels fully tokenized.
3. Keep decorative motion behind usability and clarity.

Acceptance:
1. Contact journey is clean and conversion-focused.
2. Keyboard/focus states are clear.

## 4.5 Remaining Pages
Files:
1. `src/app/(main)/skills/page.tsx` + `src/components/skills/*`
2. `src/app/(main)/experience/page.tsx` + `src/components/experience/*`
3. `src/app/(main)/academic/page.tsx`
4. `src/app/(main)/research/page.tsx` + `src/components/research/*`
5. `src/app/(main)/blog/page.tsx`
6. `src/app/(main)/blog/[slug]/page.tsx`
7. `src/components/blog/*`

Changes:
1. Apply same heading/paragraph/meta token mapping.
2. Replace ad-hoc transitions with shared reveal/hover presets.
3. Align section spacing and card depth language.

Acceptance:
1. Zero page feels visually out-of-family.

## 4.6 Route-by-Route Migration Matrix

| Route | Typography Actions | Motion Actions | Visual Consistency Actions |
|---|---|---|---|
| `/` | Standardize hero/section hierarchy to display-2, h2, body-lg tokens | Hero R3F depth + staged section reveals | Unify card radius/border/depth across all home sections |
| `/projects` | Normalize filter labels/meta/date tokens | Filter state animation + card reveal stagger | Align featured and grid cards to same surface language |
| `/projects/[slug]` | Apply content rhythm tokens for challenge/process/results blocks | Reveal media/content blocks on scroll | Keep detail page visuals aligned with projects listing style |
| `/about` | Enforce narrative heading/paragraph hierarchy | Sequential reveal for bio, values, timeline | Normalize component surfaces and spacing cadence |
| `/contact` | Tokenize form labels, helper text, CTA hierarchy | Subtle form/CTA micro-motion only | Reduce decorative overload and increase clarity |
| `/skills` | Apply consistent title/group/skill-chip token mapping | Group reveal and restrained hover feedback | Standardize chips/cards with shared styles |
| `/experience` | Normalize role/company/date typography | Timeline/card reveal with consistent timing | Align with skills/about card language |
| `/academic` | Harmonize section headers and metadata styles | Replace ad-hoc animations with shared variants | Normalize educational cards and panels |
| `/research` | Consistent publication title/meta/summary hierarchy | Controlled reveal for lists and sidebars | Align sidebar cards and tags to system tokens |
| `/blog` | Standardize post title/excerpt/meta tokens | Grid/list reveal and hover transitions | Align blog cards with projects card language |
| `/blog/[slug]` | Consistent article typography scale and spacing | Minimal reveal only (reading-first) | Ensure prose styles match global type system |

Matrix acceptance:
1. Every route has explicit token mapping.
2. Every route uses shared motion variants.
3. Every route passes the same visual parity checklist.

## Phase 5: Content and Messaging Integration
Skill owners:
1. `copywriting`
2. `seo-fundamentals`
3. `content-creator`

## 5.1 Copy Refresh
Files:
1. `src/data/home-data.ts`
2. `src/data/projects-data.ts`
3. `src/data/about-data.ts`
4. `src/data/contact-data.ts`
5. `src/data/layout-data.ts`

Changes:
1. Hero message: sharper positioning + value proposition.
2. Project descriptions: outcome-first phrasing.
3. CTA text: consistent action language.

## 5.2 SEO and Semantics
Files:
1. `src/app/layout.tsx`
2. `src/app/sitemap.ts`
3. relevant page metadata exports

Changes:
1. Verify title templates and descriptions per page.
2. Heading hierarchy verification route by route.
3. Improve image alt text quality where needed.
4. Add/verify structured data as appropriate.

Acceptance:
1. No placeholder copy.
2. Metadata and heading hierarchy consistent.

## Phase 6: Ship Readiness and Performance Gate
Skill owner:
1. `web-performance-optimization`

Validation commands:
```bash
npm run lint
npm run type-check
npm run build
```

Performance checks:
1. Lighthouse on Home/Projects/About/Contact.
2. Runtime frame checks on hero and card-heavy pages.
3. Verify dynamic import and code-split behavior for 3D/canvas modules.

Accessibility checks:
1. `prefers-reduced-motion` on/off behavior.
2. Keyboard-only navigation flow.
3. Contrast and readable overlays on animated backgrounds.

Acceptance:
1. CWV targets met or documented with remediation tasks.
2. Lighthouse >= 90 on primary pages.
3. Final quality gate approved.

## Implementation Sequence and Commit Strategy
1. `chore/foundation-tokens-and-motion-primitives`
2. `feat/homepage-depth-and-motion-system`
3. `feat/projects-about-consistency-migration`
4. `feat/contact-and-remaining-pages-migration`
5. `feat/content-seo-polish`
6. `perf/final-optimization-and-a11y-hardening`

Each commit must include:
1. Files changed list.
2. Visual/behavior change summary.
3. Validation command results.

## Review Checklist (Use Before Every Merge)
1. Typography tokens only, no random text sizing.
2. Motion presets only, no random transition constants.
3. Surfaces and borders consistent with token system.
4. CTA styles consistent across pages.
5. Reduced-motion path verified.
6. Mobile layout and performance verified.

## Final Definition of Done
1. All pages are visually and behaviorally consistent.
2. Hybrid animation stack showcases depth without clutter.
3. Portfolio feels premium, modern, and professional.
4. Performance and accessibility constraints are satisfied.
