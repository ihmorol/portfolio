# Parallel Execution Matrix Addendum (Subagent-Orchestrated Delivery)

## Summary
This addendum defines exactly how to run simultaneous skill/subagent workstreams for the portfolio plans, including dependencies, merge points, ownership, artifact contracts, and conflict-avoidance rules.

It keeps required gates sequential while maximizing parallel throughput in Design, Build, and Content phases.

## Parallelization Model
- Sequential gates: `Phase 1` gate, `design-orchestration`, `clean-code`, final performance sign-off.
- Parallel zones: `Phase 2`, `Phase 3`, and partial `Phase 4`.
- Integration style: short-lived feature branches per work package, merge to one integration branch per phase.

## Important Interfaces / Contracts
- Token contract:
  - `src/lib/design-tokens.ts`
  - `src/lib/motion-tokens.ts`
  - `src/app/globals.css` token variables
- Motion primitive contract:
  - `src/components/motion/PageTransition.tsx`
  - `src/components/motion/Reveal.tsx`
  - `src/components/motion/StaggerGroup.tsx`
  - `src/components/motion/ParallaxLayer.tsx`
- 3D contract:
  - `src/components/3d/SceneCanvas.tsx`
  - `src/components/3d/hero/HeroDepthScene.tsx`
  - `src/components/3d/shared/useSceneQuality.ts`
- Content contract:
  - `src/data/home-data.ts`
  - `src/data/projects-data.ts`
  - `src/data/about-data.ts`
  - `src/data/contact-data.ts`
  - `src/data/layout-data.ts`

All parallel tracks must consume these contracts, not redefine local variants.

## Phase-by-Phase Matrix

## Phase 1 (Sequential Only): Plan & Gate
1. Track P1-A: `concise-planning`
   - Output: atomic implementation scope/checklist.
2. Track P1-B: `brainstorming` (starts after P1-A)
   - Output: validated design assumptions + decision log.
3. Track P1-C: `design-orchestration` (starts after P1-B)
   - Output: gate verdict (`approved for build`).

Merge point:
- Single approved spec package (no code changes).

## Phase 2 (Parallel): Design System + Asset System
Prerequisite: Phase 1 gate approved.

1. Track P2-A (Lead): `ui-ux-pro-max`
   - Scope: color/type/spacing/radius/motion token system.
   - Artifacts: token definitions and component style rules.

2. Track P2-B (Parallel after P2-A draft): `frontend-design`
   - Scope: DFII direction, composition rules, per-page visual behavior.
   - Depends on: token draft from P2-A.

3. Track P2-C (Parallel with P2-B): `canvas-design`
   - Scope: hero/background/divider assets aligned with token palette.
   - Depends on: color/type direction from P2-A.

Merge point:
- Phase 2 integration pack:
  - finalized token map
  - typography map
  - asset usage map
  - component visual guidelines

Conflict avoidance:
- P2-A owns token naming.
- P2-B cannot rename tokens; only consume.
- P2-C cannot introduce off-palette assets.

## Phase 3 (Parallel): Build Tracks
Prerequisite: Phase 2 integration pack finalized.

### Track B0 (Foundation, short sequential bootstrap)
- Owner: `interactive-portfolio` (with prior contracts)
- Scope: add shared primitives and baseline wiring in layout.
- Artifacts: motion primitives + route transition skeleton + placeholder hooks for 3D/scroll.

After B0, run B1/B2/B3 in parallel:

1. Track B1: `interactive-portfolio` (Page migration track)
   - Scope: Home/Projects/About/Contact + remaining pages migration to shared tokens/primitives.
   - Files: page and section components under `src/app/(main)` + `src/components/*`.

2. Track B2: `3d-web-experience`
   - Scope: hero 3D depth scene, quality tiers, static fallback.
   - Files: `src/components/3d/*`.
   - Dependency: mounts exposed by B0/B1.

3. Track B3: `scroll-experience`
   - Scope: section reveal/parallax choreography and reduced-motion variants.
   - Files: motion wrappers and page-level reveal configuration.
   - Dependency: motion primitive interfaces from B0.

Merge point:
- Build integration branch merges B1+B2+B3.
- Then run `clean-code` as mandatory quality gate.

Conflict avoidance:
- B1 owns page layout/content structure.
- B2 owns only `src/components/3d/*` and scene mounting API usage.
- B3 owns only reveal/parallax behavior via shared motion components.
- No track may hardcode new timing constants outside `motion-tokens`.

## Phase 4 (Parallel-then-Merge): Content & SEO
Prerequisite: clean-code gate passed.

1. Track C1: `copywriting`
   - Scope: rewrite high-impact copy (hero, about, projects, CTA).

2. Track C2: `seo-fundamentals`
   - Scope: metadata, heading hierarchy, semantics, structured-data checklist.

3. Track C3: `content-creator` (merge track; starts after C1+C2)
   - Scope: integrate final copy + SEO recommendations into data/page files.

Merge point:
- Content integration branch with final message+SEO consistency.

Conflict avoidance:
- C1 proposes wording.
- C2 proposes structure/metadata constraints.
- C3 is sole integrator for final text placement.

## Phase 5 (Sequential): Ship Gate
1. Track S1: `web-performance-optimization`
   - Scope: CWV and runtime optimization, bundle and animation audit.
2. Final release gate:
   - LCP/CLS/INP targets
   - Lighthouse threshold
   - reduced-motion verification

## Work Packaging and Branching Strategy
- Base feature branch: `feat/portfolio-next-level-motion-system`
- Per-track branch naming:
  - `phase2/tokens-uiux`
  - `phase2/frontend-direction`
  - `phase2/canvas-assets`
  - `phase3/build-foundation`
  - `phase3/build-pages`
  - `phase3/build-3d`
  - `phase3/build-scroll`
  - `phase4/content-copy`
  - `phase4/content-seo`
  - `phase4/content-integration`
  - `phase5/perf-gate`
- Merge order:
  1. Phase branch integration
  2. Gate validation
  3. Next phase starts only after gate passes

## Test Cases and Scenarios for Parallel Workflow
1. Contract stability test:
   - All tracks compile against same token/motion interfaces.
2. Merge conflict test:
   - No overlapping ownership violations by path.
3. Cross-track regression test:
   - 3D and scroll can coexist on same page without animation clashes.
4. Accessibility test:
   - Reduced-motion behavior still coherent after all merges.
5. Performance test:
   - 3D+scroll-enabled pages meet runtime and CWV targets.
6. Content integrity test:
   - Final copy + metadata merged without losing tokenized typography styles.

## Assumptions and Defaults
1. Subagents map to skills listed in `.codex/PORTFOLIO_TEAM.md`.
2. Track ownership rules are enforced by review before merge.
3. `clean-code` gate is mandatory before Content phase.
4. `web-performance-optimization` is the final single-threaded release gate.
5. If user does not override, this matrix is the execution default for all future implementation turns.
