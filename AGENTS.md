# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 14 + TypeScript portfolio app using the App Router.
- `src/app`: routes, layouts, globals, and API handlers (for example `src/app/api/contact/route.ts`).
- `src/components`: reusable UI and page sections grouped by feature (`home`, `projects`, `research`, `ui`, etc.).
- `src/data`: structured content/config used by pages.
- `src/content/blog`: Markdown blog posts.
- `src/lib` and `src/types`: shared utilities, constants, and types.
- `public`: static assets (`images`, `resume.html`, `robots.txt`).
- `docs`: planning and execution docs for larger redesign work.

## Build, Test, and Development Commands
Use `npm` (lockfile is `package-lock.json`).
- `npm run dev`: start local dev server at `http://localhost:3000`.
- `npm run build`: production build (also catches many integration issues).
- `npm run start`: run the production build locally.
- `npm run lint`: run Next.js ESLint checks.
- `npm run type-check`: run strict TypeScript checks without emitting files.
- `npm run format`: apply Prettier formatting across the repo.

## Coding Style & Naming Conventions
- TypeScript is `strict`; prefer explicit, narrow types and avoid `any`.
- Prettier rules: 2-space indent, single quotes, semicolons, trailing commas (`es5`), 80-char width.
- Follow existing naming:
  - Components/files: `PascalCase` (for example `HeroSection.tsx`).
  - Data modules: `kebab-case` with `-data` suffix (for example `projects-data.ts`).
  - Route folders: lowercase, App Router conventions (`[slug]`, route groups like `(main)`).
- Use `@/*` import alias for `src/*`.

## Testing Guidelines
There is no dedicated unit/integration test framework configured yet. Minimum quality gate for every change:
1. `npm run lint`
2. `npm run type-check`
3. `npm run build`

For UI-heavy changes, include manual checks across key routes (`/`, `/projects`, `/blog`, `/contact`) on desktop and mobile widths.

## Commit & Pull Request Guidelines
Recent history favors Conventional Commit prefixes (`feat:`, `fix:`, `chore:`, `build:`). Keep messages imperative and scoped.
- Example: `feat: add dynamic blog slug page metadata`

PRs should include:
1. Clear summary of user-visible and technical changes.
2. Linked issue/task (if available).
3. Screenshots/GIFs for visual updates.
4. Verification notes with commands run (`lint`, `type-check`, `build`).

## Security & Configuration Tips
- Copy `.env.local.example` to `.env.local` for local setup.
- Never commit real API keys, SMTP credentials, or analytics secrets.
