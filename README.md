# IHMOROL Portfolio

A production-ready personal portfolio built with Next.js 14, TypeScript, and the App Router.
It showcases projects, research, writing, experience, and contact workflows in a single, maintainable codebase.

## Highlights

- Multi-page portfolio with dedicated routes for:
  - Home
  - Projects + project detail pages
  - About
  - Skills
  - Experience
  - Academic
  - Research
  - Blog + blog post pages
  - Contact
- Data-driven content architecture via `src/data/*`.
- Markdown-based blog content in `src/content/blog`.
- Contact API route at `src/app/api/contact/route.ts` with SMTP-ready setup.
- Strict TypeScript and Next.js linting workflow for release safety.

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript (`strict` mode)
- Styling: Tailwind CSS + global CSS tokens
- UI/Animation: Framer Motion, Radix UI primitives, Lucide icons
- Forms/Validation: React Hook Form, Zod
- Content: Markdown (`gray-matter`, `remark`)
- Email: Nodemailer / Resend-compatible environment setup

## Project Structure

```text
src/
  app/                 # Routes, layouts, globals, API handlers
  components/          # Feature-based UI components
  data/                # Structured data for pages/sections
  content/blog/        # Markdown blog posts
  lib/                 # Utilities, helpers, constants
  types/               # Shared TypeScript types
public/
  images/              # Static assets
  robots.txt
  resume.html
docs/                  # Planning and execution documents
```

## Getting Started

### 1) Prerequisites

- Node.js 18.17+ (or Node.js 20 LTS recommended)
- npm (project uses `package-lock.json`)

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment

Copy `.env.local.example` to `.env.local` and update values.

```bash
cp .env.local.example .env.local
```

Required/commonly used values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=IHMOROL - Portfolio
NEXT_PUBLIC_SITE_DESCRIPTION=Computer Science Student | AI Engineer | Software Developer

CONTACT_EMAIL=your.email@example.com

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_app_password

RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4) Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production build
- `npm run lint` - Run Next.js ESLint checks
- `npm run type-check` - Run TypeScript checks without emitting files
- `npm run format` - Format codebase with Prettier

## Quality Gate (Recommended Before PR/Merge)

Run all three:

```bash
npm run lint
npm run type-check
npm run build
```

For UI-heavy work, manually verify desktop and mobile on:

- `/`
- `/projects`
- `/blog`
- `/contact`

## Content Workflow

- Update section/page content through files in `src/data/*`.
- Add or edit blog posts in `src/content/blog`.
- Keep reusable section logic inside `src/components/*`.

## Deployment Notes

- Build command: `npm run build`
- Runtime command: `npm run start`
- Ensure `.env.local`/platform env vars are configured in your hosting environment.
- Keep secrets (SMTP/API keys) out of git.

## Planning Docs

- `docs/plan-01-overview.md`
- `docs/plan-02-detailed-execution.md`
- `docs/plan-03-parallel-execution-matrix.md`
- `docs/plan-04-complete-subagent-implementation-plan.md`

## Security

- Do not commit real API keys, SMTP credentials, or analytics secrets.
- Use `.env.local` for local development secrets.

