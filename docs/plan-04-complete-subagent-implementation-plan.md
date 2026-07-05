# Complete Phase-by-Phase Implementation Plan (Subagent Parallel Ready)

## Approach
Use a gated 7-phase delivery model for this Next.js 14 + TypeScript portfolio.
Keep high-risk gates sequential (`Plan`, `Design Gate`, `Clean Code`, `Ship`), and run implementation-heavy work in parallel through subagent tracks with strict file ownership.

## Scope
- In:
  - All routes in `src/app/(main)` and shared app shell files.
  - Design-system consistency (typography, spacing, surface, motion).
  - Hybrid motion stack already present in repo (Framer Motion first, optional progressive 3D/scroll).
  - Content, metadata, and release quality gates (`lint`, `type-check`, `build`).
- Out:
  - Backend/API redesign outside current `src/app/api/contact/route.ts` needs.
  - CMS migration or external content platform migration.
  - New product features unrelated to portfolio presentation quality.

## Assumptions
- Branch-based workflow is available.
- Parallel tracks use short-lived branches merged into a per-phase integration branch.
- Path ownership rules are enforced during review.
- If a phase gate fails, downstream phases do not start.

## Phase Overview
| Phase | Goal | Parallel? | Exit Gate |
|---|---|---|---|
| 0 | Baseline and contracts | No | Clean baseline report |
| 1 | Planning and design lock | No | Approved plan + decision log |
| 2 | Design system + asset direction | Yes | Final token and visual contract |
| 3 | Build foundations | Partial | Shared primitives stable |
| 4 | Route migration and feature polish | Yes | Visual/motion parity across routes |
| 5 | Content + SEO integration | Yes | Content and metadata completeness |
| 6 | Performance + release hardening | No | Ship-ready quality report |

## Branching and Merge Strategy
- Base branch: `feat/portfolio-complete-refresh`
- Integration branches:
  - `integration/phase2-design`
  - `integration/phase3-foundation`
  - `integration/phase4-routes`
  - `integration/phase5-content`
- Track branch naming:
  - `phase{N}/{track-id}-{short-purpose}`
- Merge order:
  - Track branch -> phase integration branch -> base feature branch.
- Required checks before each merge:
  - `npm run lint`
  - `npm run type-check`
  - `npm run build`

## Subagent Working Contract
Each subagent track must define:
1. `Track ID`
2. `Owner skill`
3. `Owned paths` (exclusive write access)
4. `Forbidden paths` (no edits)
5. `Depends on` track IDs
6. `Deliverables`
7. `Validation commands`
8. `PR checklist`

Use this execution prompt per track:
```text
You own Track <ID>. You are not alone in the codebase.
Only edit these paths: <OWNED_PATHS>.
Do not edit: <FORBIDDEN_PATHS>.
Dependency status: <DEPENDENCIES>.
Deliverables: <DELIVERABLES>.
Run validation: npm run lint && npm run type-check && npm run build.
If blocked, report blocker with exact file/path and a minimal proposed fix.
```

## Phase 0: Baseline and Contract Freeze (Sequential)
### Objectives
- Capture current repo health.
- Freeze shared contracts before parallel coding begins.

### Action Items
- [ ] Create base branch: `feat/portfolio-complete-refresh`.
- [ ] Run baseline checks and store results.
- [ ] Confirm final shared contract paths:
  - `src/app/globals.css`
  - `src/components/ui/*`
  - `src/components/shared/*`
  - `src/lib/*` (token and helper modules)
- [ ] Define no-conflict ownership map for later phases.

### Exit Gate
- [ ] Baseline report exists.
- [ ] Contract paths and ownership map approved.

## Phase 1: Planning and Design Lock (Sequential)
### Skills
- Primary: `concise-planning`
- Validation: `brainstorming`
- Gate: `design-orchestration`

### Objectives
- Convert project goals into atomic execution plan.
- Lock assumptions and non-goals.
- Approve build-readiness gate.

### Action Items
- [ ] Finalize in-scope route list from `src/app/(main)`.
- [ ] Finalize non-functional requirements:
  - Performance: Lighthouse >= 90 on core routes.
  - Accessibility: reduced-motion support, keyboard navigability.
  - Reliability: no build regressions.
  - Maintainability: shared tokens and reusable motion primitives.
- [ ] Record decision log for:
  - motion budget
  - optional 3D depth policy
  - scroll choreography limits
- [ ] Approve go/no-go gate for design phase.

### Exit Gate
- [ ] Scope lock complete.
- [ ] Decision log complete.
- [ ] Design gate approved.

## Phase 2: Design System and Asset Direction (Parallel)
### Shared Output Contract
- `src/lib/design-tokens.ts` (if added)
- `src/lib/motion-tokens.ts` (if added)
- `src/app/globals.css` token variables/utilities
- Asset plan under `public/images/brand/*`

### Parallel Tracks
#### Track P2-A: Token Architecture
- Owner skill: `ui-ux-pro-max`
- Owns paths:
  - `src/app/globals.css`
  - `tailwind.config.js`
  - `src/lib/design-tokens.ts`
  - `src/lib/motion-tokens.ts`
- Depends on: none
- Deliverables:
  - semantic color/type/spacing/radius/motion tokens
  - utility mapping guidance

#### Track P2-B: Visual Language Rules
- Owner skill: `frontend-design`
- Owns paths:
  - `docs/design-language-rules.md` (new)
- Depends on: P2-A draft
- Deliverables:
  - per-page composition rules
  - component visual behavior rules
  - desktop/mobile layout rhythm guidance

#### Track P2-C: Asset Direction
- Owner skill: `canvas-design`
- Owns paths:
  - `public/images/brand/*`
  - `docs/asset-usage-map.md` (new)
- Depends on: P2-A palette and type direction
- Deliverables:
  - original hero/background/divider assets
  - asset usage and fallback map

### Exit Gate
- [ ] Token names finalized and stable.
- [ ] Visual rules documented and approved.
- [ ] Asset pack complete and optimized.

## Phase 3: Build Foundations (Sequential Bootstrap + Parallel)
### Bootstrap Track (Sequential)
#### Track P3-0: Shared Primitive Bootstrap
- Owner skill: `interactive-portfolio`
- Owns paths:
  - `src/components/motion/*`
  - `src/app/layout.tsx`
  - `src/app/globals.css` (integration-only changes)
- Depends on: Phase 2 gate
- Deliverables:
  - page/section reveal wrappers
  - consistent transition variants
  - reduced-motion baseline behavior

### Parallel Tracks After P3-0
#### Track P3-1: 3D Depth (Optional Progressive)
- Owner skill: `3d-web-experience`
- Owns paths:
  - `src/components/3d/*`
- Depends on: P3-0 mount interface
- Deliverables:
  - quality-tiered scene
  - static fallback behavior

#### Track P3-2: Scroll Choreography
- Owner skill: `scroll-experience`
- Owns paths:
  - `src/components/motion/*` (scroll modules only)
  - route-level animation config files
- Depends on: P3-0 primitives
- Deliverables:
  - controlled reveal/parallax behaviors
  - strict reduced-motion alternatives

### Exit Gate
- [ ] Shared primitives stable.
- [ ] 3D fallback verified on low capability contexts.
- [ ] Scroll effects do not hijack normal reading flow.

## Phase 4: Route Migration and UI Consistency (Parallel)
### Parallel Tracks
#### Track P4-A: Home + Projects Cluster
- Owner skill: `interactive-portfolio`
- Owns paths:
  - `src/app/(main)/page.tsx`
  - `src/app/(main)/projects/*`
  - `src/components/home/*`
  - `src/components/projects/*`
- Depends on: Phase 3 gate
- Deliverables:
  - consistent hero-to-grid rhythm
  - tokenized card/filter interactions

#### Track P4-B: About + Contact Cluster
- Owner skill: `interactive-portfolio`
- Owns paths:
  - `src/app/(main)/about/page.tsx`
  - `src/app/(main)/contact/page.tsx`
  - `src/components/about/*`
  - `src/components/contact/*`
- Depends on: Phase 3 gate
- Deliverables:
  - polished narrative flow
  - clear conversion-focused contact experience

#### Track P4-C: Knowledge Cluster (Skills, Experience, Academic, Research, Blog)
- Owner skill: `interactive-portfolio`
- Owns paths:
  - `src/app/(main)/skills/page.tsx`
  - `src/app/(main)/experience/page.tsx`
  - `src/app/(main)/academic/page.tsx`
  - `src/app/(main)/research/page.tsx`
  - `src/app/(main)/blog/*`
  - `src/components/skills/*`
  - `src/components/experience/*`
  - `src/components/research/*`
  - `src/components/blog/*`
- Depends on: Phase 3 gate
- Deliverables:
  - consistent typography hierarchy
  - unified metadata and card surface system

#### Track P4-D: Quality Gate Sweep
- Owner skill: `clean-code`
- Owns paths: repo-wide refactor-only edits approved after P4-A/B/C merge
- Depends on: P4-A + P4-B + P4-C merge
- Deliverables:
  - duplicate style/motion removal
  - shared primitive enforcement
  - simplified component interfaces

### Exit Gate
- [ ] Every route matches shared token and motion language.
- [ ] No cluster-specific visual drift remains.
- [ ] Clean-code gate passes.

## Phase 5: Content and SEO (Parallel)
### Parallel Tracks
#### Track P5-A: Copy Refresh
- Owner skill: `copywriting`
- Owns paths:
  - `src/data/*`
  - copy-only sections in route/component files
- Depends on: Phase 4 gate
- Deliverables:
  - concise, professional, outcome-focused copy

#### Track P5-B: SEO and Semantic Pass
- Owner skill: `seo-fundamentals`
- Owns paths:
  - metadata exports in `src/app/(main)/*`
  - `src/app/layout.tsx`
  - `src/app/sitemap.ts`
- Depends on: Phase 4 gate
- Deliverables:
  - route metadata consistency
  - heading hierarchy correctness
  - semantic structure checklist

#### Track P5-C: Content Integration
- Owner skill: `content-creator`
- Owns paths:
  - final integration edits in `src/data/*` and route copy bindings
- Depends on: P5-A + P5-B
- Deliverables:
  - consistent voice across all routes
  - no placeholder content

### Exit Gate
- [ ] Copy finalized and integrated.
- [ ] Metadata and semantic checks pass.
- [ ] No stale or placeholder text remains.

## Phase 6: Ship Gate (Sequential)
### Owner Skill
- `web-performance-optimization`

### Action Items
- [ ] Run full quality commands:
  - `npm run lint`
  - `npm run type-check`
  - `npm run build`
- [ ] Run performance audit on core routes:
  - `/`
  - `/projects`
  - `/about`
  - `/contact`
- [ ] Verify reduced-motion behavior and keyboard flow.
- [ ] Optimize heavy assets and animation runtime hotspots.
- [ ] Produce final release readiness report.

### Exit Gate
- [ ] Core Web Vitals within target ranges.
- [ ] Accessibility checks passed.
- [ ] Release candidate approved.

## Notion Execution Board Template
Create a database with these properties:
- `Track ID` (title)
- `Phase` (select)
- `Status` (select: Todo, In Progress, Blocked, In Review, Done)
- `Owner Skill` (select)
- `Branch` (text)
- `Owned Paths` (text)
- `Depends On` (relation/text)
- `PR Link` (url)
- `Gate` (select)
- `Last Check` (date)

Recommended board views:
1. By `Phase` (Kanban).
2. Blocked tracks only.
3. Gate readiness (`Gate` grouped view).

## Execution Rules to Prevent Parallel Drift
- No subagent edits outside owned paths.
- No token/motion constant duplication outside shared token files.
- No merge into next phase before current gate passes.
- Every track PR must include:
  - files changed
  - user-visible behavior changes
  - validation results
  - known risks and follow-up tasks

## Final Atomic Checklist
- [ ] Complete Phase 0 baseline and ownership map.
- [ ] Complete Phase 1 scope and design lock gate.
- [ ] Complete Phase 2 token/visual/asset integration gate.
- [ ] Complete Phase 3 foundation and motion stability gate.
- [ ] Complete Phase 4 full route migration and clean-code gate.
- [ ] Complete Phase 5 content + SEO integration gate.
- [ ] Complete Phase 6 ship readiness gate.

