# Master Orchestration Plan (Phase-by-Phase, Skill-Driven)

## Intent
Create a world-class developer portfolio that feels modern, slick, and professional, demonstrates real frontend depth (3D + scroll + interaction), and stays disciplined in consistency, readability, and performance.

This document is the orchestration blueprint and role map. It follows the exact 5-phase workflow from `.codex/HOW_TO_USE.md` and team responsibilities from `.codex/PORTFOLIO_TEAM.md`.

## Orchestration Rule (Non-Negotiable)
Run phases in order:
1. Plan
2. Design
3. Build
4. Content & SEO
5. Ship

No implementation starts before Phase 1 gate passes. No content pass starts before Build + Clean Code gate passes.

## Team Map (Who Owns What)

| Division | Role | Skill | Responsibility |
|---|---|---|---|
| Leadership & Strategy | Project Lead | `concise-planning` | Scope, milestones, atomic work plan |
| Leadership & Strategy | Creative Director | `brainstorming` | Validate direction, assumptions, constraints |
| Leadership & Strategy | Design Gatekeeper | `design-orchestration` | Risk gate, readiness gate |
| Leadership & Strategy | Prompt Architect | `prompt-engineer` | Sharpen phase prompts and handoffs |
| Visual Design | UI/UX Director | `ui-ux-pro-max` | Design tokens, palette, type system, spacing |
| Visual Design | Visual Identity Lead | `frontend-design` | DFII direction, component visual behavior |
| Visual Design | Asset Creator | `canvas-design` | Hero/background assets |
| Frontend Development | Portfolio Architect | `interactive-portfolio` | Section architecture and overall implementation |
| Frontend Development | 3D Engineer | `3d-web-experience` | R3F/Three.js depth scenes + fallbacks |
| Frontend Development | Scroll Animator | `scroll-experience` | Scroll choreography and narrative pacing |
| Frontend Development | Code Quality Lead | `clean-code` | DRY/SRP/KISS quality gate |
| Content & SEO | Copywriter | `copywriting` | High-impact professional messaging |
| Content & SEO | SEO Strategist | `seo-fundamentals` | Metadata, semantics, E-E-A-T structure |
| Content & SEO | Content Producer | `content-creator` | Integrate final copy + consistency |
| Quality & Deployment | Performance Engineer | `web-performance-optimization` | CWV and runtime optimization |

## Cross-Phase Technical Decisions
1. Animation stack:
- Framer Motion for route/section/component motion.
- React Three Fiber (Three.js) for hero-grade depth scenes.
- CSS + lightweight canvas for hover/interactivity and ambient background effects.
2. Motion philosophy: selective premium.
- High impact in hero and transitions.
- Subtle in repeated UI patterns.
- No animation overload.
3. Accessibility: strict `prefers-reduced-motion` support.
4. Performance targets:
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms
- Lighthouse >= 90 on primary pages

## Typography System Baseline (Global Consistency)

| Token | Usage | Size (mobile -> desktop) | Weight | Line-height |
|---|---|---|---|---|
| `--type-display-1` | Main page heroes | 40px -> 72px | 700 | 1.05 |
| `--type-display-2` | Section hero/title | 32px -> 56px | 700 | 1.1 |
| `--type-h1` | Major page headers | 28px -> 42px | 700 | 1.15 |
| `--type-h2` | Section titles | 24px -> 32px | 650 | 1.2 |
| `--type-h3` | Card headings | 18px -> 24px | 600 | 1.25 |
| `--type-body-lg` | Intro paragraph | 18px -> 20px | 400 | 1.65 |
| `--type-body` | Default body | 16px -> 18px | 400 | 1.65 |
| `--type-caption` | Metadata/tags | 12px -> 13px | 500 | 1.4 |
| `--type-micro` | Pills/overlines | 10px -> 11px | 700 | 1.2 |

Global rules:
1. One display font + one body font only.
2. Uniform heading rhythm across all pages.
3. Metadata always uses caption/micro tokens.
4. Do not mix arbitrary text sizing in components.

## Phase-by-Phase Orchestration

## Phase 1: PLAN
Owner skills (in order):
1. `concise-planning`
2. `brainstorming`
3. `design-orchestration`

Objectives:
1. Lock scope, constraints, and success criteria.
2. Validate aesthetic + interaction direction.
3. Approve implementation readiness via gate.

Inputs:
1. Existing Next.js portfolio codebase.
2. User goals: modern slick pro vibe, hybrid animations, no overdoing.

Outputs:
1. Atomic implementation checklist.
2. Validated design assumptions and decision log.
3. Gate verdict: proceed to Phase 2.

Gate to exit:
1. Clear in/out-of-scope list.
2. Risk acknowledged for 3D/scroll complexity.
3. Decision-complete implementation path approved.

## Phase 2: DESIGN
Owner skills (in order):
1. `prompt-engineer`
2. `ui-ux-pro-max`
3. `frontend-design`
4. `canvas-design` (parallel with `frontend-design`)

Objectives:
1. Build complete design system tokens.
2. Define visual direction with DFII scoring.
3. Produce original visual assets consistent with style.

Outputs:
1. CSS token sheet (color, spacing, typography, radius, motion).
2. Component design rules (cards, navbar, badges, forms, timelines).
3. Asset set for hero and section backgrounds.

Design constraints:
1. Editorial-tech minimal base.
2. Futuristic depth only where meaningful.
3. No template-like UI patterns.

Gate to exit:
1. Design token schema finalized.
2. Typography scale finalized and mapped to all page templates.
3. Asset list approved with usage map.

## Phase 3: BUILD
Owner skills (in order):
1. `interactive-portfolio`
2. `3d-web-experience` (parallel track)
3. `scroll-experience` (parallel track)
4. `clean-code` (final gate)

Objectives:
1. Implement unified architecture and motion primitives.
2. Integrate 3D and scroll systems without regressions.
3. Standardize every page to one visual/motion language.

Scope coverage:
1. Home
2. Projects + project details
3. About
4. Contact
5. Skills
6. Experience
7. Academic
8. Research
9. Blog + blog details

Build deliverables:
1. Shared motion primitives and variants.
2. Shared typography/layout primitives.
3. Per-page migration completed with consistent standards.
4. Clean-code review completed.

Gate to exit:
1. All pages migrated to shared tokens and motion patterns.
2. No major design drift between pages.
3. Core interactions stable across desktop and mobile.

## Phase 4: CONTENT & SEO
Owner skills (in order):
1. `copywriting`
2. `seo-fundamentals`
3. `content-creator`

Objectives:
1. Make copy concise, professional, impact-driven.
2. Ensure discoverability and structured semantic quality.
3. Integrate content in centralized data files.

Outputs:
1. Finalized hero/about/project/contact messaging.
2. SEO metadata and heading hierarchy pass.
3. Consistent voice across all pages.

Gate to exit:
1. Content quality approved.
2. SEO checklist complete.
3. No placeholder text remains.

## Phase 5: SHIP
Owner skill:
1. `web-performance-optimization`

Objectives:
1. Hit CWV and runtime performance targets.
2. Optimize visual assets and animation runtime.
3. Final QA and release readiness.

Outputs:
1. Performance report with before/after metrics.
2. Optimization patch list completed.
3. Release candidate checklist pass.

Gate to exit:
1. Lighthouse >= 90 for primary pages.
2. 3D/canvas fallbacks verified.
3. Reduced-motion and accessibility checks passed.

## Exact Skill Invocation Templates
Use these prompts as handoff contracts between phases.

1. `concise-planning`
```text
Use the concise-planning skill. Build an actionable implementation plan for this Next.js portfolio.
Scope all pages under src/app/(main), include typography system, hybrid animation stack
(Framer Motion + R3F + CSS/canvas), accessibility, and performance gates.
```
2. `brainstorming`
```text
Use the brainstorming skill. Validate the approved plan direction for a modern editorial-tech portfolio
with selective futuristic depth. Confirm constraints, non-goals, and risk assumptions one by one.
```
3. `design-orchestration`
```text
Use the design-orchestration skill. Perform a gate check on our validated design.
Confirm whether we can proceed to implementation and list required phase sequencing.
```
4. `ui-ux-pro-max`
```text
Use the ui-ux-pro-max skill. Create a full design token system (colors, typography, spacing, radius, motion)
for a dark premium portfolio that stays readable and consistent on all pages.
```
5. `frontend-design`
```text
Use the frontend-design skill. Define visual direction with DFII scoring and convert the approved token system
into foundational component rules and layout behavior.
```
6. `canvas-design`
```text
Use the canvas-design skill. Create original visual assets for hero depth, section dividers,
and background overlays aligned with the design system.
```
7. `interactive-portfolio`
```text
Use the interactive-portfolio skill. Implement the portfolio architecture and migrate all pages
to shared typography, layout, and motion primitives while preserving content clarity.
```
8. `3d-web-experience`
```text
Use the 3d-web-experience skill. Add a performant R3F hero depth scene with quality tiers and static fallback.
Keep runtime smooth and avoid interaction blocking.
```
9. `scroll-experience`
```text
Use the scroll-experience skill. Add section reveal/parallax choreography with selective intensity,
no scroll hijacking, and strict reduced-motion behavior.
```
10. `clean-code`
```text
Use the clean-code skill. Review all migrated code for SRP/DRY/KISS and remove ad-hoc style/motion duplication.
```
11. `copywriting`
```text
Use the copywriting skill. Rewrite hero/about/projects/contact copy to be concise, professional,
outcome-focused, and conversion-friendly.
```
12. `seo-fundamentals`
```text
Use the seo-fundamentals skill. Audit metadata, heading hierarchy, semantics, and E-E-A-T readiness
for all main routes.
```
13. `content-creator`
```text
Use the content-creator skill. Integrate finalized copy and ensure brand voice consistency across all pages.
```
14. `web-performance-optimization`
```text
Use the web-performance-optimization skill. Run final performance hardening for CWV and animation runtime,
and provide the launch readiness report.
```

## Page Consistency Standards (Applies to Every Route)
1. Layout:
- Consistent `max-width`, side spacing, and vertical rhythm.
- Reuse shared `PageHeader` conventions or upgraded replacement.
2. Typography:
- Use tokenized text styles only.
- Enforce single heading hierarchy pattern per page type.
3. Surface language:
- Unified card radius, border alpha, background depth treatment.
4. Motion:
- Entry + hover + scroll behavior from shared variants only.
- No one-off animation constants in random components.
5. Interaction:
- CTA styling, hover/focus states, and transitions are system-based.
6. Content:
- Text sourced from `src/data/*` when possible for maintainability.

## Risks and Controls
1. Risk: visual inconsistency after partial migration.
- Control: migrate by page template and run parity checklist.
2. Risk: 3D hurting performance on low-end devices.
- Control: quality tiers + lazy loading + static fallback.
3. Risk: motion fatigue.
- Control: selective premium budget and reduced-motion pathway.
4. Risk: typography drift.
- Control: enforce token usage and remove hardcoded text sizes.

## Done Definition
1. All routes share one design system and motion grammar.
2. Hybrid animation stack is visible but disciplined.
3. Portfolio communicates technical depth without noise.
4. Performance and accessibility targets are met.
