/**
 * Case-study data for every project detail page. Every claim here is grounded
 * in the corresponding GitHub repository (README, file listing, commit history)
 * as of November 2026 — nothing is asserted beyond what the repos show.
 */

export interface ProjectFeature {
  title: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  description?: string;
  list?: string[];
}

export interface ProjectMetric {
  icon: string;
  val: string;
  label: string;
  color: string;
  bg: string;
}

export interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
  heroImage: string;
  tags: string[];
  screens: string[];
  role: string;
  duration: string;
  date: string;
  client: string;
  stats: { label: string; value: string }[];
  features: ProjectFeature[];
  impact: {
    title: string;
    description: string;
    metrics: ProjectMetric[];
    testimonials?: { quote: string; author: string }[];
  };
  links?: { label: string; url: string; primary?: boolean }[];
}

export const projectDetailsData: Record<string, ProjectDetail> = {
  "elearning-platform": {
    title: "E-Learning Platform",
    subtitle: "Live IELTS preparation platform with real students",
    description: "A four-app production system: student portal, REST API, admin dashboard, and a Python central service.",
    heroDescription: "A commercial IELTS-preparation platform for RimonsIELTS that I build and operate as the sole remote software engineer. Students take full-length mock tests, video courses, reading and writing practice, and track progress in a Next.js 15 / React 19 portal; an Express + TypeScript API handles auth, courses, exams, Vimeo/Zoom streaming, AI features, and cloud file storage with enforced OpenAPI contract parity; a React 19 + Vite admin manages content, users, exams, and analytics with a unit-to-E2E test pyramid; and a Python central service carries the QA and content-pipeline tooling.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["Next.js 15", "React 19", "Express", "TypeScript", "Python", "MongoDB", "Zod", "TanStack Query / Router", "Vimeo/Zoom API"],
    screens: [],
    role: "Sole Software Engineer (Remote)",
    duration: "Ongoing",
    date: "2025 - Present",
    client: "RimonsIELTS",
    stats: [
      { label: "Commits (client / API / admin)", value: "665 / 544 / 522" },
      { label: "Production Apps", value: "4" },
      { label: "CI Workflows (API)", value: "3" },
      { label: "Status", value: "Live" }
    ],
    features: [
      {
        title: "The Challenge",
        icon: "warning",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Paying students depend on the platform daily. Video streaming, exam workflows, and payments have to keep working through every release, and the admin team needs full control without touching code."
      },
      {
        title: "The Engineering Discipline",
        icon: "verified",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "The API enforces OpenAPI inventory parity in CI (missing or extra endpoints fail the build) alongside a security gate with authz smoke tests, dependency audit, and secret scanning. The admin runs a full test pyramid — unit, integration, contract, accessibility, and Playwright E2E with MSW mocks — plus knip dead-code detection and generated API types.",
        list: [
          "OpenAPI contract-parity gate with zero drift tolerance",
          "CI security workflows: authz smoke, dependency audit, gitleaks",
          "Admin test pyramid: Vitest, Testing Library, MSW, Playwright",
          "Rate limiting on all /api routes, stricter on auth"
        ]
      },
      {
        title: "Key Features",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Full-length IELTS mock tests (Reading, Listening, Writing)",
          "Video courses via Vimeo/Zoom integration",
          "Admin control plane: content, users, exam sessions, audit logs, feature flags, billing",
          "Progress tracking dashboard, blog, and study resources",
          "Payments and exam-session score management"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A commercial product with real users, run with real engineering discipline.",
      metrics: [
        { icon: 'devices', val: '4', label: 'Apps in Production', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'commit', val: '1.7k+', label: 'Commits Across Suite', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'verified', val: 'CI', label: 'Contract & Security Gates', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ],
      testimonials: [
        {
          quote: "Operating software that students rely on changed how I write code. I validate everything, run checklists before deploys, and never let a failure pass silently.",
          author: "Personal Reflection"
        }
      ]
    },
    links: [
      { label: "Live Site", url: "https://rimonsielts.com", primary: true },
      { label: "Admin", url: "https://admin.rimonsielts.com" }
    ]
  },

  "advyon": {
    title: "Advyon",
    subtitle: "Legal-tech platform · Champion, UIU CSE Project Show",
    description: "A legal-tech platform with case management, document workflows, community discussions, and AI-assisted legal insights.",
    heroDescription: "Advyon changes how people reach legal help. Clients file cases and documents through smart intake, discuss issues in a moderated community, and get AI-assisted insights backed by a legal database service. The public client is a React 19 + Vite SPA organized as self-contained feature modules (auth, cases, community) that each own their components, API hooks, and types. I led a five-member team through requirements, design, implementation, and testing, and the project won Champion at the UIU CSE Project Show.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["React 19", "Vite", "TypeScript", "TanStack Query", "Zustand", "React Router v7", "MongoDB", "JWT"],
    screens: [],
    role: "Team Lead & Full-Stack Developer",
    duration: "One Trimester",
    date: "2025",
    client: "University SE Project",
    stats: [
      { label: "Client Commits", value: "279" },
      { label: "Team Members Led", value: "5" },
      { label: "Project Show Result", value: "Champion" }
    ],
    features: [
      {
        title: "The Challenge",
        icon: "warning",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Legal help is intimidating and fragmented. Case tracking, document handling, and initial guidance all live in different places. We set out to bring them into one secure platform while coordinating five developers on a strict trimester deadline."
      },
      {
        title: "The Architecture",
        icon: "architecture",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Feature-driven modularity kept five developers unblocked: every feature ships as a self-contained module with its own components, API hooks, and types. Server state runs through TanStack Query, client state through Zustand, forms through React Hook Form with Zod, and a shared shadcn-style component layer keeps the UI consistent.",
        list: [
          "Self-contained feature modules (auth, cases, community)",
          "Nested layouts via React Router v7 (AppLayout, AuthLayout)",
          "Shared atomic UI component layer (Radix-based)"
        ]
      },
      {
        title: "Key Features",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Case management & document workflows",
          "Smart intake with AI-driven insights",
          "Community discussions",
          "Secure auth & role-based access"
        ]
      }
    ],
    impact: {
      title: "Project Outcomes",
      description: "What the project delivered and what it taught me about leading a team.",
      metrics: [
        { icon: 'emoji_events', val: '1st', label: 'CSE Project Show (SE Lab)', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'group', val: '5', label: 'Member Team Led', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'commit', val: '279', label: 'Client Commits', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ],
      testimonials: [
        {
          quote: "Leading five people through a full SDLC taught me more about interfaces, both human and API, than any solo project could.",
          author: "Personal Reflection"
        }
      ]
    },
    links: [
      { label: "Live Site", url: "https://advyon.vercel.app", primary: true },
      { label: "Client Repo", url: "https://github.com/ihmorol/advyon-client" }
    ]
  },

  "lorenz-ann-thesis": {
    title: "Lorenz ODE Thesis",
    subtitle: "FYDP: PINNs and architecture search on the Lorenz-1960 system",
    description: "Thesis code: a PINN trained on the ODE residual alone, validated against a DOP853 reference, with an immutable run catalog and archived experiments.",
    heroDescription: "My FYDP thesis code, public and evidence-first. A physics-informed neural network solves the Lorenz-1960 system from the equations alone — the loss is the ODE residual, with the reference solver called only after training — and an 11,283-parameter network reaches within 3e-05 of a high-accuracy RK4/DOP853 baseline in under six minutes on a laptop CPU. Alongside it sits the controlled 69-run ANN architecture and optimizer search from the FYDP proposal. The repo preserves an immutable run catalog with settings hashes, per-collocation-point loss exports audited by hand, a two-branch source-code audit with repair notes, and an ICEEICT 2027 manuscript draft with provenance docs covering sixteen paper runs.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["Python", "PyTorch", "SciPy", "PINN", "RK4 / DOP853", "pytest"],
    screens: [],
    role: "Thesis Researcher (Team Lead)",
    duration: "2025 - Present",
    date: "2025 - Present",
    client: "UIU Final Year Design Project",
    stats: [
      { label: "Commits", value: "118" },
      { label: "Tests Defined", value: "41" },
      { label: "Reference Agreement", value: "~3e-05" },
      { label: "Archived Runs", value: "Immutable catalog" }
    ],
    features: [
      {
        title: "The Question",
        icon: "science",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Can a plain, data-driven neural network learn a coupled nonlinear ODE system, and which architecture does it best? The FYDP answers with a controlled 69-run search over depth (1-4), width (20-100), five activations, and three optimizers on a solver-verified ground truth."
      },
      {
        title: "Training You Can Audit",
        icon: "fact_check",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "The PINN's answer-key-free setup is provable: the loss is the ODE residual alone, the reference solver runs post-training, and per-collocation-point loss contributions are exported to CSV before each optimizer step. Historical runs are immutable, each with checkpoints, configs, and metrics.",
        list: [
          "Per-point loss CSV before every optimizer step",
          "Immutable run catalog with settings hashes",
          "Two-branch source-code audit and repair notes",
          "Recovered trained models alongside the code"
        ]
      },
      {
        title: "Companion Archive",
        icon: "inventory_2",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "A checksum-verified windowed-PINN archive (14-arm ablation)",
          "verify_archive.py reloads all 16 models on a fixed 13,265-point reference grid",
          "Adam + L-BFGS refinement with causal residual weighting"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "FYDP-I defended June 2026; ICEEICT manuscript draft in progress.",
      metrics: [
        { icon: 'functions', val: '~3e-05', label: 'Agreement vs DOP853', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'science', val: '69', label: 'Controlled Runs', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'article', val: 'Draft', label: 'ICEEICT 2027 Manuscript', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Thesis Code", url: "https://github.com/ihmorol/lorenz1960-pinn", primary: true },
      { label: "Windowed-PINN Archive", url: "https://github.com/ihmorol/lorenz1960-windowed-pinn" }
    ]
  },

  "briefli": {
    title: "BriefLi",
    subtitle: "A shortlink manager I built and use every day",
    description: "A shortlink management dashboard with AI slug suggestions, running live at s.ihmorol.cv.",
    heroDescription: "BriefLi is my personal link infrastructure, running live at s.ihmorol.cv. It creates and organizes shortlinks with Gemini-suggested slugs, tracks clicks atomically through a Postgres RPC, separates public and personal link spaces behind Clerk authentication, and supports soft delete with trash and restore. Built with React 19 and TypeScript on Vite, a Vercel serverless API, and Supabase Postgres with two documented SQL migrations.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["React 19", "TypeScript", "Vite", "Supabase", "Clerk", "Vercel", "Gemini API", "Zod"],
    screens: [],
    role: "Creator & Maintainer",
    duration: "Ongoing",
    date: "2025 - Present",
    client: "Personal Product",
    stats: [
      { label: "Status", value: "Live" },
      { label: "Commits", value: "56" },
      { label: "SQL Migrations", value: "2" }
    ],
    features: [
      {
        title: "The Itch",
        icon: "warning",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "I share study guides, project trackers, and resources constantly, and long URLs with random slugs are impossible to remember or manage. Existing shorteners don't organize links or suggest meaningful names."
      },
      {
        title: "The Product",
        icon: "lightbulb",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Every link gets a unique, collision-checked code or an AI-suggested human-readable slug — the Gemini key stays server-side. Redirects run through Vercel rewrites that serve /:slug from serverless functions; every redirect increments the click counter atomically via a Postgres RPC. Zod validates every payload, and the README documents the full API surface and authorization rules.",
        list: [
          "AI slug suggestions (Gemini, server-side key)",
          "Atomic click counting via Postgres RPC",
          "Public + Clerk-authenticated personal links",
          "Recoverable trash instead of hard deletes"
        ]
      },
      {
        title: "Shipped Extras",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Two SQL migrations with a documented path",
          "USER_MANUAL.md for non-technical use",
          "Full API-surface table in the README"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "Small product, real daily utility.",
      metrics: [
        { icon: 'link', val: 'Live', label: 'at s.ihmorol.cv', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'smart_toy', val: 'AI', label: 'Slug Suggestions', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'storage', val: 'SQL', label: 'Supabase + Migrations', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ],
      testimonials: [
        {
          quote: "Building a product you personally depend on is the fastest feedback loop there is.",
          author: "Personal Reflection"
        }
      ]
    },
    links: [
      { label: "Live Site", url: "https://s.ihmorol.cv", primary: true },
      { label: "Repo", url: "https://github.com/ihmorol/briefli" }
    ]
  },

  "shera-bot": {
    title: "Shera Bot",
    subtitle: "A multi-agent AI runtime where agents propose and the runtime decides",
    description: "A TypeScript monorepo prototype: agent packs, approval-gated execution, and an append-only event journal.",
    heroDescription: "Shera Bot is my most engineering-heavy repository: 637 commits across a pnpm + Turborepo monorepo with a Next.js web client, an Express control plane, and an agent-pack SDK. Agents never act directly — they propose, the runtime validates and executes, and risky work sits behind scoped, expiring, revocable approvals with five fixed choices. Every event lands in an append-only journal where live, replayed, delayed, and disconnected states are visually distinct. Per-user containers keep product state in container-local SQLite (WAL) while central PostgreSQL holds only control-plane records.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["TypeScript", "Turborepo", "Next.js", "Express", "PostgreSQL", "SQLite WAL", "Zod"],
    screens: [],
    role: "Creator",
    duration: "2026",
    date: "2026",
    client: "Personal Prototype",
    stats: [
      { label: "Commits", value: "637" },
      { label: "Agents in Student Pack", value: "6 + 3 ops" },
      { label: "Test Tiers", value: "6" }
    ],
    features: [
      {
        title: "Agents Propose, the Runtime Decides",
        icon: "smart_toy",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "No agent action shows as done before runtime validation. Approvals are runtime objects — scoped, expiring, revocable grants with five fixed choices — so dangerous operations need explicit human sign-off."
      },
      {
        title: "Honest Events",
        icon: "history",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "An append-only event journal is the source of truth. The UI renders live, replayed, delayed, and disconnected states differently, so you always know what the system actually did versus what it claims."
      },
      {
        title: "Engineering Depth",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "agent-pack-sdk with SHA-256 pack integrity checks",
          "API clients generated from Zod contracts (pnpm gen:clients)",
          "Six test tiers: contract, integration, e2e, recovery, security, benchmark",
          "Docs suite: PRD, decision records, glossary, traceability, build plan"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "The prototype ships an agent pack with six student agents — Researcher, Developer, Citation Manager, Programming Tutor, Study Planner, General Assistant — plus three operations.",
      metrics: [
        { icon: 'commit', val: '637', label: 'Commits', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'smart_toy', val: '6+3', label: 'Agents + Operations', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'security', val: 'Gated', label: 'Approval Runtime', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/shera-bot", primary: true }
    ]
  },

  "voicekey": {
    title: "VoiceKey",
    subtitle: "Offline, privacy-first voice-to-keyboard for Linux and Windows",
    description: "Real-time voice typing on faster-whisper with daemon mode, a CLI, and an opt-in cloud fallback.",
    heroDescription: "VoiceKey types what you say, entirely offline, using faster-whisper. It runs as a daemon or in the foreground, ships a CLI with status, devices, and config commands, and offers an explicit opt-in hybrid mode with an OpenAI-compatible cloud fallback — local stays the default. The installer supports skip flags and model profiles (tiny, base, small), and the project is packaged the way real tools are: CI plus a release workflow, a MkDocs documentation site, and architecture, requirements, security, and changelog documents.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["Python", "faster-whisper", "PortAudio / ALSA", "ffmpeg", "CLI", "MkDocs"],
    screens: [],
    role: "Creator & Maintainer",
    duration: "2026",
    date: "2026",
    client: "Personal Tool",
    stats: [
      { label: "Commits", value: "259" },
      { label: "Docs Site", value: "MkDocs" },
      { label: "Release Pipeline", value: "Yes" }
    ],
    features: [
      {
        title: "Local First, Cloud Optional",
        icon: "lock",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Local faster-whisper is the primary engine; the cloud fallback is an explicit opt-in through an OpenAI-compatible endpoint. Nothing leaves the machine unless you turn it on."
      },
      {
        title: "Built Like a Product",
        icon: "build",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "pip-installable with a pyproject, a one-command installer with --skip-system-deps, --skip-model-download, --autostart, and --model-profile flags, plus daemon mode with a documented background contract.",
        list: [
          "voicekey start --daemon, status, devices, config",
          "Model profiles: tiny / base / small",
          "Monthly patch cadence with CHANGELOG"
        ]
      },
      {
        title: "Engineering Hygiene",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "CI and release workflows on GitHub Actions",
          "MkDocs documentation site",
          "architecture.md, software_requirements.md, SECURITY.md, CONTRIBUTING.md"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A daily-driver utility with an uncommon level of packaging discipline for a personal tool.",
      metrics: [
        { icon: 'mic', val: 'Offline', label: 'Local-First Typing', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'terminal', val: 'CLI', label: 'Daemon + Commands', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'commit', val: '259', label: 'Commits', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/voicekey", primary: true }
    ]
  },

  "ode-3d-orbit": {
    title: "ODE 3D Orbit",
    subtitle: "An interactive 3D explorer for nonlinear dynamics, live in the browser",
    description: "Sixteen built-in ODE systems, live-editable equations, RK4 integration, and conserved-quantity drift feedback.",
    heroDescription: "ODE 3D Orbit lets you edit the equations, scrub the constants, and watch chaotic attractors integrate live in 3D. Sixteen systems ship built in — Lorenz 1960 and 1963, Lorenz-96 rings, Thomas, Lotka-Volterra, Kuramoto, Rössler, Chen, Halvorsen, Aizawa, Rabinovich-Fabrikant, and two four-variable hyperchaotic systems — with a ring generator that copies one rule across up to 40 wrapping variables the way Lorenz-96 is constructed. Integration is RK4 with step-size control, and the Lorenz-1960 view shows conserved-quantity drift so a bad time step is visible immediately. Zero build step: vanilla ES modules and Three.js, MIT-licensed, live on Vercel.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["JavaScript", "Three.js", "RK4", "ODEs", "Visualization", "Zero-build"],
    screens: [],
    role: "Creator",
    duration: "2026",
    date: "2026",
    client: "Personal Project",
    stats: [
      { label: "Built-in Systems", value: "16" },
      { label: "Integration", value: "RK4 + step control" },
      { label: "Status", value: "Live" }
    ],
    features: [
      {
        title: "Change Anything While It Runs",
        icon: "edit_note",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "The equations, the starting values, and the constants are all editable live. Every constant gets a slider, step buttons, and a draggable name chip."
      },
      {
        title: "Numerical Honesty",
        icon: "insights",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Equations compile into one solver function with plain-language error messages, and the Lorenz-1960 view displays conserved-quantity drift — big drift means a bad time step. Numerics you can see, not just trust."
      },
      {
        title: "Viewing Tools",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Perspective and orthographic cameras, plane views, turntable spin",
          "Four color palettes and keyboard shortcuts",
          "Ring generator for up to 40 wrapping variables"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A side project that makes my thesis domain tangible for anyone with a browser.",
      metrics: [
        { icon: 'orbit', val: '16', label: 'Systems Included', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'play_circle', val: 'Live', label: 'On Vercel', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'code_off', val: '0', label: 'Build Steps', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Live Site", url: "https://ode-3d-orbit.vercel.app", primary: true },
      { label: "Repo", url: "https://github.com/ihmorol/ode-3d-orbit" }
    ]
  },

  "meme-research-console": {
    title: "Meme Research Console",
    subtitle: "A live research instrument for collecting perception data on Bangla memes",
    description: "A Next.js + Supabase survey app covering ~500 stratified Bangla memes, live and documented.",
    heroDescription: "A research data-collection web app that surveys user viewpoints on roughly 500 Bangla memes, deployed live for an ongoing study. It is built on the Next.js App Router with Supabase Auth and PostgreSQL, and the repository ships the research instruments alongside the code: the stratified meme dataset and the question set live in-repo. The documentation is unusually thorough for its size — a standalone MkDocs site with a system architecture doc covering component, data-flow, database, API, and security architecture with mermaid diagrams.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "MkDocs"],
    screens: [],
    role: "Developer",
    duration: "2026",
    date: "2026",
    client: "Ongoing Research Study",
    stats: [
      { label: "Memes in Dataset", value: "~500" },
      { label: "Status", value: "Live" },
      { label: "Docs", value: "MkDocs site" }
    ],
    features: [
      {
        title: "Research Instruments In-Repo",
        icon: "dataset",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "The Stratified_Dataset and questions directories ship with the code, so the instrument and the application version together."
      },
      {
        title: "Documented Architecture",
        icon: "schema",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "A full architecture document covers implementation plan, UX flows, database design, API architecture, and security architecture — with mermaid diagrams and a matching dark-theme docs site."
      },
      {
        title: "Key Features",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Structured response capture across meme categories",
          "Supabase Auth-secured participation",
          "Vercel deployment ready with .env.example"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "The instrument behind an ongoing perception study, serving real respondents.",
      metrics: [
        { icon: 'dataset', val: '~500', label: 'Stratified Memes', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'public', val: 'Live', label: 'On Vercel', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'menu_book', val: 'Docs', label: 'Architecture Site', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Live Site", url: "https://meme-console.vercel.app", primary: true },
      { label: "Repo", url: "https://github.com/ihmorol/data-collection-web" }
    ]
  },

  "pinn-cps-robo": {
    title: "PINN Attack Detection",
    subtitle: "Physics-residual detection of CAN masquerade attacks on the ROAD dataset",
    description: "Vehicle-kinematics consistency residuals catch 3 of 4 attack classes at a 0.1% ambient false-positive rate, with an honest negative on PINN attribution.",
    heroDescription: "A cyber-physical security study on the ROAD dataset (Oak Ridge National Laboratory): 33 verified attack captures including 13 masquerade and 12 ambient drives. The work recovered the signal map from raw DBC mismatches, built a physics taxonomy of all 26 injection captures — every class except reverse-light violates at least one kinematic consistency law, with ratios of 178-1273× — and showed physics plus range statistics catch 3 of 4 classes with recall 1.0 at a 0.1% ambient false-positive rate, detecting within a single CAN frame. Milestone four reports an honest negative: the PINN twin shows parity with the physics-free model across four data regimes and three loss weights, so attribution credit goes to the physics, not the neural network. All five pre-registered milestones are complete and a five-page paper draft is compiled.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["Python", "PyTorch", "scikit-learn", "XGBoost", "CAN Bus", "ROAD Dataset"],
    screens: [],
    role: "Independent Researcher",
    duration: "2026",
    date: "2026",
    client: "Independent Research",
    stats: [
      { label: "Pre-registered Milestones", value: "5 / 5" },
      { label: "Recall (3 of 4 classes)", value: "1.0" },
      { label: "Ambient FPR", value: "0.1%" },
      { label: "Paper Draft", value: "Compiled" }
    ],
    features: [
      {
        title: "Pre-registered Protocol",
        icon: "rule",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Research questions and hypotheses were frozen before experiments ran, with a strict temporal-split rule and explicit carrying of dataset caveats through every result."
      },
      {
        title: "Physics That Catches Attacks",
        icon: "security",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Wheel speeds versus speedometer versus temporal continuity: every masquerade class except reverse-light breaks at least one consistency law by ratios of 178-1273×, which is what makes the detections decisive.",
        list: [
          "Signal map recovered despite shipped DBC mismatch",
          "Detection within one CAN frame",
          "26 injection captures taxonomized by physics"
        ]
      },
      {
        title: "An Honest Negative",
        icon: "balance",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "The PINN-versus-physics-free ablation showed parity across every regime tested — reported as a negative attribution result, not buried. One script reproduces raw data to final figures."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "Five milestones, a compiled paper draft, and a reproducibility rule enforced end to end.",
      metrics: [
        { icon: 'security', val: '3/4', label: 'Classes Caught', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'speed', val: '1 frame', label: 'Detection Latency', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'article', val: 'Draft', label: 'Paper Compiled', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/pinn-cps-robo", primary: true }
    ]
  },

  "dt-nb-noise-removal": {
    title: "DT-NB Hybrid Study",
    subtitle: "NB filtering vs tree-based attribute weighting, submitted to ICEEICT 2027",
    description: "A twelve-arm conference study with Holm-corrected statistics and a self-audit that documents what the protocol can and cannot claim.",
    heroDescription: "A conference study comparing Naive Bayes instance filtering and decision-tree attribute selection/weighting for noise handling in DT-NB hybrids, run separately and in both orders. The authoritative experiment uses Weka J48 3.8.6 and FaithfulNB over the original attribute columns with seeds 0-9 and stratified 10-fold cross-validation, refitting every supervised step inside each training fold and scoring on held-out rows. Plain C4.5 averaged 86.33% accuracy against 81.21% (instances-first) and 80.89% (attributes-first), and none of the eight post-hoc comparisons survived Holm correction — framed honestly as a protocol-sensitivity study rather than a win claim. Results are archived with hashes, and the repo carries three manuscript variants including the anonymous ICEEICT 2027 submission.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["Weka", "J48", "FaithfulNB", "Python", "Cross-Validation", "Statistics"],
    screens: [],
    role: "Researcher",
    duration: "2026",
    date: "2026",
    client: "Conference Submission",
    stats: [
      { label: "Experimental Arms", value: "12" },
      { label: "Seeds × Folds", value: "10 × 10" },
      { label: "Status", value: "Submitted" }
    ],
    features: [
      {
        title: "Fold-Refit Protocol",
        icon: "sync",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "All supervised steps — filtering, weighting, training — refit inside each training fold and score on held-out rows, eliminating the leakage that plagues pipeline comparisons."
      },
      {
        title: "Statistics With Discipline",
        icon: "calculate",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Eight post-hoc accuracy comparisons were Holm-adjusted; none were significant, and the paper says so. An audit document supersedes stale status claims and records that exact reproduction of the original scores remains unresolved.",
        list: [
          "Result artifacts archived with SHA-256-style hashes",
          "Verification scripts, including a non-overwriting E9f runner",
          "Supervisor-review and plain-language full-results variants in-repo"
        ]
      },
      {
        title: "Findings",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "No combined NB method beats attribute weighting alone",
          "Cleaning before CV changes label access — a documented audit finding",
          "Anonymous submission prepared for ICEEICT 2027"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A complete, self-audited study cycle from hypothesis to anonymous submission.",
      metrics: [
        { icon: 'science', val: '12', label: 'Arms Compared', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'article', val: '2027', label: 'ICEEICT Submission', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'verified', val: 'Hashed', label: 'Archived Results', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/dt-nb-noise-removal", primary: true }
    ]
  },

  "pinn-shape-optimization": {
    title: "PhORM",
    subtitle: "PINN-in-the-loop shape optimization for a small mobile robot",
    description: "Fifteen geometry and mass-layout variables optimized against a multi-physics objective, certified against an independent finite-volume solver.",
    heroDescription: "PhORM optimizes a small mobile robot's shape with physics-informed neural networks in the loop: fifteen bounded geometric and mass-layout variables against an objective combining ZMP tipover margins, rolling and drag energy, a shape-conditioned thermal PINN, Helmholtz speaker acoustics, and packaging constraints. The PINN-in-the-loop iteration improved the objective by 15.0% over the stock design (mass -12%, stability margin +24%, energy -11%), and an independent finite-volume certification confirmed the optimized thermal maximum at 54.6°C versus the stock 56.3°C. A multi-seed probe that did not beat the budget seed is reported as an explicit negative, and PINN-to-finite-volume verification errors of -2.0% to -3.1% on T_max are archived in results JSONs.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["Python", "PyTorch", "PINN", "Optimization", "Robotics", "Thermal"],
    screens: [],
    role: "Independent Researcher",
    duration: "2026",
    date: "2026",
    client: "Independent Research",
    stats: [
      { label: "Objective Improvement", value: "+15.0%" },
      { label: "Optimized Variables", value: "15" },
      { label: "Independent Certification", value: "Finite-volume" }
    ],
    features: [
      {
        title: "Multi-Physics Objective",
        icon: "hub",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Stability, energy, thermal, acoustic, and packaging constraints compete in one differentiable objective, with PDE residuals differentiable with respect to shape."
      },
      {
        title: "Cross-Verified Results",
        icon: "verified",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "The thermal PINN is checked against an independent finite-volume solver on both stock and optimized designs, with per-component temperatures and a quantified ~0.5°C PINN noise floor.",
        list: [
          "iter6 locomotion-weighted variant: energy -13%, ramp -13%, margin +31%",
          "Champion and result JSONs archived in results/"
        ]
      },
      {
        title: "Negative Results Kept",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "The multi-seed probe (σ=0.15) did not beat seed 0 at the budget — reported, not dropped. An audited research log maps every hypothesis to its experiment and outcome."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A quantified, externally certified optimization result with a Q1-journal submission target.",
      metrics: [
        { icon: 'trending_up', val: '+15%', label: 'Objective vs Stock', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'device_thermostat', val: '54.6°C', label: 'Certified T_max', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'monitor_weight', val: '-12%', label: 'Mass vs Stock', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/pinn-shape-optimization", primary: true }
    ]
  },

  "fall-detection-wearable": {
    title: "Fall Detection",
    subtitle: "A complete embedded-ML IoT safety system, firmware to dashboard",
    description: "Wearable device that detects falls with on-device TinyML and alerts caregivers in real time.",
    heroDescription: "A four-layer system built end to end. An Arduino-based wearable written in C++ runs an Edge Impulse-trained fall-detection model on-device through EloquentTinyML, streaming from accelerometer and gyroscope sensors; a Node.js API with JWT auth, Joi validation, helmet, and rate limiting ingests events and triggers alerts; and a Next.js dashboard gives caregivers live monitoring. One of the few student projects where hardware, embedded ML, and web engineering all had to work together.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["Arduino", "C++", "Edge Impulse", "TinyML", "Node.js", "Next.js"],
    screens: [],
    role: "Developer",
    duration: "One Trimester",
    date: "2025",
    client: "University Project",
    stats: [
      { label: "System Layers", value: "4" },
      { label: "Stack Span", value: "Firmware → Web" },
      { label: "Inference", value: "On-device" }
    ],
    features: [
      {
        title: "The Challenge",
        icon: "warning",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Detecting a fall reliably from noisy accelerometer data, while keeping the pipeline fast enough that an alert reaches a caregiver when it matters."
      },
      {
        title: "Embedded ML Pipeline",
        icon: "sensors",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Raw accelerometer-gyroscope data trains an Edge Impulse model that is exported to the wearable for on-device inference — no cloud round-trip for the classification decision. The raw sensor dataset ships in the repo.",
        list: [
          "ei-fall_detection-arduino export via EloquentTinyML",
          "Raw acc_gyr.csv sensor dataset included"
        ]
      },
      {
        title: "Server & Dashboard",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Node.js API with Mongoose, JWT, Joi, helmet, express-rate-limit, bcryptjs",
          "Next.js App Router dashboard for caregivers"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "Hardware-to-cloud engineering in one project.",
      metrics: [
        { icon: 'sensors', val: 'C++', label: 'Wearable Firmware', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'model_training', val: 'TinyML', label: 'On-Device Classifier', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'monitor_heart', val: 'Live', label: 'Alert Dashboard', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ],
      testimonials: [
        {
          quote: "IoT projects punish hand-waving. Every layer either works or the demo fails in front of everyone.",
          author: "Personal Reflection"
        }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/fall-detection-wearable-device", primary: true }
    ]
  },

  "spatial-spectral-forensics": {
    title: "AI-Image Forensics",
    subtitle: "Which simple features expose AI-generated images?",
    description: "A pre-registered, five-experiment feature-level study under matched JPEG compression and unseen generators.",
    heroDescription: "A measurement study, explicitly not a new detector: five pre-registered experiments (E1-E5) mapped to four hypotheses test which explainable feature set — pixel-pattern, frequency-spectrum, or combined — best separates real photographs from AI-generated images. The pipeline specification was locked at v1.0 (stages 0-10) before results ran, with a deliberate negative-control experiment for mismatch shortcuts, JPEG quality levels 90/75/50, and an unseen-generator holdout, culminating in the headline E5 condition (unseen generator + JPEG 75). The repo carries the final results, a separate limitations report, a 20-paper curated reference set with BibTeX, and a CITATION.cff — with a written scope statement of what the study is not.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["Python", "Computer Vision", "Forensics", "JPEG", "Pre-registration"],
    screens: [],
    role: "Independent Researcher",
    duration: "2026",
    date: "2026",
    client: "Independent Research",
    stats: [
      { label: "Pre-registered Experiments", value: "5" },
      { label: "Pipeline Spec", value: "Locked v1.0" },
      { label: "Final Manuscript", value: "In-repo" }
    ],
    features: [
      {
        title: "Locked Before Results",
        icon: "lock",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "The experimental pipeline was frozen at v1.0 with a self-checking figure script, so the analysis could not drift to fit the outcomes."
      },
      {
        title: "Negative Controls",
        icon: "rule",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "A deliberate mismatch-shortcut experiment (H2) checks that the classifier is not cheating through generator fingerprints, alongside the unseen-generator holdout.",
        list: [
          "JPEG 90 / 75 / 50 robustness ladder",
          "Strict split by image group"
        ]
      },
      {
        title: "Complete Research Layout",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "reports/final_results.md and reports/limitations.md",
          "20-paper curated reference set with BibTeX",
          "CITATION.cff, LICENSE, per-experiment protocol/code/results/analysis"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A finished measurement study with every artifact a reviewer would ask for.",
      metrics: [
        { icon: 'image_search', val: 'E1-E5', label: 'Pre-registered Experiments', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'article', val: 'Final', label: 'Manuscript In-Repo', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'menu_book', val: '20', label: 'Curated References', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/spatial-spectral-forensics", primary: true }
    ]
  },

  "printslot": {
    title: "PrintSlot",
    subtitle: "A bilingual campus print-shop app from a five-person team",
    description: "Expo Router mobile app, NestJS API, live WebSocket order tracking, and four user roles in a Turborepo monorepo.",
    heroDescription: "A team project (Team ParaDox, five members) for a Mobile Application Development course: students upload files, set per-file print options — color mode, paper size, orientation, copies, duplex, page range — see the server-computed price before paying, then join a Print Now live queue or book a pickup slot. Orders track in real time over WebSocket with a 30-second polling fallback, staff and owners move jobs through stages, and the platform admin approves shops and reads analytics. The stack is a Turborepo monorepo: Expo Router mobile app, NestJS REST + WebSocket API, a shared package, Supabase PostgreSQL via Prisma, and a bilingual English/Bengali UI via i18next.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["React Native", "Expo Router", "NestJS", "WebSocket", "Prisma", "Supabase", "i18next"],
    screens: [],
    role: "Team Member (Team ParaDox)",
    duration: "One Trimester",
    date: "2026",
    client: "Mobile App Development Course",
    stats: [
      { label: "Commits", value: "155" },
      { label: "User Roles", value: "4" },
      { label: "Languages", value: "EN + BN" }
    ],
    features: [
      {
        title: "Real Orders, Real Roles",
        icon: "group",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Four roles span the whole workflow — Customer, Staff, Shop Owner, Platform Admin — with in-app wallet and cash payments, push notifications, and a ready-time ETA estimated from recent shop jobs."
      },
      {
        title: "Live Tracking",
        icon: "swap_horiz",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Order state moves over WebSocket with a polling fallback, so customers watch their job advance without refreshing."
      },
      {
        title: "Researched, Documented, Typed",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "User-research survey report shipped as a PDF in-repo",
          "Docs map: problem statement, personas, API explanation",
          "Shared types package across mobile and API"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "The most fully documented team project I have shipped, from research to bilingual release build.",
      metrics: [
        { icon: 'commit', val: '155', label: 'Commits', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'group', val: '4', label: 'User Roles', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'translate', val: 'EN/BN', label: 'Bilingual UI', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo (fork)", url: "https://github.com/ihmorol/PrintSlot", primary: true }
    ]
  },

  "paradox-prism": {
    title: "Paradox Prism",
    subtitle: "Anonymous reporting with reviewer assessment and steganography",
    description: "A full-stack platform for anonymous reports, a public artwork gallery, and decoding data hidden in images.",
    heroDescription: "Paradox Prism combines three unusual capabilities in one full-stack app: anonymous reporting with confirmation and tracking, a reviewer console for secure content assessment, and a public digital-artwork gallery with an image Decode feature that reveals messages embedded through partial steganography. The React + Vite frontend (Tailwind, Radix UI, Zustand, React Query) talks to an Express + TypeScript backend with MongoDB, Zod validation, JWT, and Cloudinary storage.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["React", "Vite", "Express", "TypeScript", "MongoDB", "Steganography", "Cloudinary"],
    screens: [],
    role: "Full-Stack Developer",
    duration: "2026",
    date: "2026",
    client: "Personal Project",
    stats: [
      { label: "Core Capabilities", value: "3" },
      { label: "Apps", value: "Frontend + Backend" }
    ],
    features: [
      {
        title: "Anonymous by Design",
        icon: "visibility_off",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Reports carry confirmation and tracking without identity, while a reviewer console handles assessment behind authentication."
      },
      {
        title: "Steganography Decode",
        icon: "key",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Gallery images can carry hidden payloads; the Decode feature reveals partial-steganography data embedded in images from the public interface."
      },
      {
        title: "Stack",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Frontend: React + Vite, Tailwind, Radix UI, Zustand, React Query",
          "Backend: Express + TypeScript, MongoDB, Zod, JWT",
          "Cloudinary for artwork storage, UI design screenshots in-repo"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A working end-to-end product with an uncommon security-flavored concept.",
      metrics: [
        { icon: 'security', val: 'Anon', label: 'Anonymous Reporting', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'key', val: 'Decode', label: 'Steganography Feature', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'palette', val: 'Gallery', label: 'Public Artwork Space', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/paradoxical-prism", primary: true }
    ]
  },

  "skill-paradox": {
    title: "Skill Paradox",
    subtitle: "A skill-exchange platform specified like a product, built like one",
    description: "Barter and paid skill sessions with booking, real-time chat, and endorsement-based ranking — MySQL, Express, React 19.",
    heroDescription: "Skill Paradox is a skill-sharing platform where users list what they offer and what they need, barter or pay for sessions, book timeslots, and chat in real time. The backend README reads like a full product spec: users must list at least one skill to appear publicly, listings support public/private visibility with pricing and category constraints, search filters by category, location, price range, availability, and rating, and results rank by endorsements, trending, and completed sessions. Payments run through a secure gateway with admin verification and refunds, and booking enforces confirmations, reminders, and double-booking prevention. The committed SQL schema and a React 19 + Vite frontend complete the picture.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["TypeScript", "Express", "MySQL", "JWT", "Zod", "React 19", "Vite"],
    screens: [],
    role: "Full-Stack Developer",
    duration: "2025",
    date: "2025",
    client: "Personal Project",
    stats: [
      { label: "Backend Commits", value: "22" },
      { label: "Frontend Commits", value: "46" },
      { label: "Database", value: "MySQL (SQL schema in-repo)" }
    ],
    features: [
      {
        title: "Exchange Mechanics",
        icon: "swap_horiz",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Barter exchanges and paid sessions both work, with a secure payment gateway, admin verification, and refunds behind them."
      },
      {
        title: "Booking That Respects Time",
        icon: "schedule",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Timeslot booking with confirmations, reminders, and explicit double-booking prevention — plus real-time chat once a session is set."
      },
      {
        title: "Discovery",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "Search and filter by category, location, price, availability, rating",
          "Ranking by endorsements, trending, and completed sessions",
          "Admin suspend controls; one-skill minimum for public profiles"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A complete two-sided platform with its schema, spec, and both apps in public repos.",
      metrics: [
        { icon: 'swap_horiz', val: '2', label: 'Exchange Modes', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'storage', val: 'MySQL', label: 'Schema Committed', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'chat', val: 'Realtime', label: 'In-App Chat', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Backend Repo", url: "https://github.com/ihmorol/skill-paradox-backend", primary: true },
      { label: "Frontend Repo", url: "https://github.com/ihmorol/skill-paradox-frontend" }
    ]
  },

  "carried": {
    title: "Carried",
    subtitle: "The line a book left in you — shared, no account needed",
    description: "A no-account web app for underlining book lines: real-time cards, Open Library covers, and an offline mode where the link itself carries the line.",
    heroDescription: "Carried is a tiny product with real engineering inside: pick a book, write the line you would underline, stamp it with your name, and share a printable catalog-card link — with no accounts anywhere. Lines land on book pages and the home ticker live (6-8 second polling), slugs are cut deterministically from the line's own words plus a hash, and covers come from Open Library with an Internet Archive fallback and find-the-book links to Open Library, Internet Archive, Bookshop.org, and WorldCat — no API keys anywhere. Underline voting uses anonymous device IDs stored as unique-voter sets, and the app runs in two storage modes: Upstash Redis, or an offline mode where the base64url link itself carries the line. OG cards render through satori, and the shareable card draws client-side on canvas.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript", "Upstash Redis", "satori", "Vitest"],
    screens: [],
    role: "Creator",
    duration: "2026",
    date: "2026",
    client: "Personal Product",
    stats: [
      { label: "Accounts Required", value: "0" },
      { label: "API Keys", value: "0" },
      { label: "Status", value: "Live" }
    ],
    features: [
      {
        title: "Zero-Friction Sharing",
        icon: "share",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "No sign-up, no API keys: deterministic slugs from the line itself, shareable OG card images via satori, and a 1080×1350 PNG card drawn client-side on canvas."
      },
      {
        title: "Two Storage Modes",
        icon: "storage",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Global mode uses Upstash Redis; offline mode encodes the whole line into the link as base64url JSON — the URL is the database. Legacy base64 links still resolve.",
        list: [
          "Live ticker and book pages via 6-8s polling",
          "Underline voting with unique anonymous voter sets"
        ]
      },
      {
        title: "Tested Small",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "Vitest covers the payload codec, search, and store validation; the repo includes 1,100 editorial seed lines and a documented virality playbook."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A polished, live micro-product built in days, not months.",
      metrics: [
        { icon: 'public', val: 'Live', label: 'On Vercel', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'person_off', val: '0', label: 'Accounts Needed', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'vpn_key_off', val: '0', label: 'API Keys', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Live Site", url: "https://carried-pi.vercel.app", primary: true },
      { label: "Repo", url: "https://github.com/ihmorol/carried" }
    ]
  },

  "task-manager-mobile": {
    title: "Task Manager",
    subtitle: "A spec-first mobile assignment, scoped honestly",
    description: "A React Native + Expo task board built PRD-first, deliberately frontend-only with local state.",
    heroDescription: "A scoped course assignment executed spec-first: PRD, mobile UI spec, an agent build brief, and a feature checklist went into docs/ before any code. The result is a single-screen visual task manager with Board, List, and Activity tabs — task creation, drag-and-drop status changes, deadline color coding, in-app push-style notifications, a deadline-sorted list view, and an activity log. The README documents explicit non-goals: no backend and no persistence, local React state only. Built in a day, exactly to spec.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["React Native", "Expo", "TypeScript"],
    screens: [],
    role: "Developer",
    duration: "One day (scoped assignment)",
    date: "2026",
    client: "Mobile App Development Assignment",
    stats: [
      { label: "Planning Docs Before Code", value: "4" },
      { label: "Build Time", value: "1 day" },
      { label: "Backend (by design)", value: "None" }
    ],
    features: [
      {
        title: "Spec Before Code",
        icon: "description",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "PRD, mobile UI spec, build brief, and feature checklist came first — the implementation just follows them."
      },
      {
        title: "The Board",
        icon: "view_kanban",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Drag-and-drop status changes, deadline color coding, deadline-sorted list view, in-app notifications, and a running activity log across three tabs.",
      },
      {
        title: "Honest Scope",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "The README's non-goals say plainly what this is not: no backend, no persistence. Small, finished, and honest."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A demonstration that process scales down as well as up.",
      metrics: [
        { icon: 'view_kanban', val: '3', label: 'Views (Board, List, Activity)', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'timer', val: '1 day', label: 'Concept to Done', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'rule', val: 'Scoped', label: 'Documented Non-Goals', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: []
  },

  "unsw-nb15-ids": {
    title: "Class Imbalance Study",
    subtitle: "A university term paper on imbalanced classification, UNSW-NB15",
    description: "An 18-run reproducible grid comparing class-imbalance strategies, with Friedman tests and rare-class analysis.",
    heroDescription: "A university term paper executed with research-grade discipline: an 18-experiment grid — two tasks (binary and multiclass) × three models (LR, RF, XGBoost) × three strategies (no balancing, class weighting, SMOTE) — on the UNSW-NB15 dataset. Preprocessing fits only on training data to prevent leakage, seeds and config snapshots are fixed, and the results archive includes Friedman nonparametric tests, metric confidence intervals, per-class metrics, and rare-class aggregates for Worms (0.07%) and Shellcode (0.65%), moving well past raw accuracy with macro-F1, ROC-AUC, and G-Mean. A one-click Colab notebook reruns the study, and IEEE-style paper drafts with a professor review report live in the private repo.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["Python", "scikit-learn", "XGBoost", "SMOTE", "UNSW-NB15", "Statistics"],
    screens: [],
    role: "Student Researcher",
    duration: "One term",
    date: "2025 - 2026",
    client: "University Term Paper",
    stats: [
      { label: "Experiment Grid", value: "18 runs" },
      { label: "Statistical Tests", value: "Friedman + CIs" },
      { label: "Commits", value: "81" }
    ],
    features: [
      {
        title: "The Question",
        icon: "help",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Which class-imbalance strategy actually helps on rare attack classes, and does the answer change between binary and multiclass settings?"
      },
      {
        title: "Leakage-Proof by Construction",
        icon: "shield",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Preprocessing fits on training data only, with fixed seeds, exact config snapshots, and a Docker-ready structure — results regenerate from configs, not memory.",
        list: [
          "Friedman test with metric confidence intervals",
          "Rare-class analysis: Worms 0.07%, Shellcode 0.65%",
          "One-click Colab rerun with badge"
        ]
      },
      {
        title: "Coursework Plus",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "MkDocs documentation tree, results tables and metrics JSON, and IEEE-style paper drafts with a professor review report — private repo, so no code link."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "The most statistically complete study in my portfolio, kept honestly scoped as coursework.",
      metrics: [
        { icon: 'science', val: '18', label: 'Controlled Runs', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'calculate', val: 'Friedman', label: 'Nonparametric Testing', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'replay', val: '100%', label: 'Reproducible from Configs', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: []
  },

  "ann-nanofluid-model": {
    title: "Nanofluid Flow Model",
    subtitle: "An ANN surrogate for hybrid nanofluid boundary-layer flow",
    description: "A nine-layer Levenberg-Marquardt network trained on ~32,400 physics-generated samples, validated against numerical solutions.",
    heroDescription: "An independent scientific-ML study: a nine-layer neural network trained with Levenberg-Marquardt optimization models hybrid nanofluid boundary-layer flow and heat transfer over a stretching sheet. Training data — about 32,400 samples — is generated from the physics equations themselves, so no experimental dataset dependency exists. The workflow runs end to end from one command (python src/main.py all: clean, generate, train with real-time visualization, save model and scalers in 8-22 minutes), followed by a separate validation stage computing MSE, RMSE, MAE, and R² against numerical solutions with publication-quality comparison plots. Implementation documentation ships in three formats.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["Python", "Neural Networks", "Levenberg-Marquardt", "SciML", "Heat Transfer"],
    screens: [],
    role: "Independent Researcher",
    duration: "2026",
    date: "2026",
    client: "Independent Study",
    stats: [
      { label: "Training Samples", value: "~32,400" },
      { label: "Network Layers", value: "9" },
      { label: "One-Command Pipeline", value: "Yes" }
    ],
    features: [
      {
        title: "Physics as the Data Source",
        icon: "functions",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "The ~32,400-sample training set is generated from the governing equations, keeping the study fully self-contained."
      },
      {
        title: "End-to-End Runnable",
        icon: "play_arrow",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "A single command cleans, generates, trains with real-time visualization, and persists model plus scalers; a separate stage validates against numerical solutions.",
        list: [
          "MSE, RMSE, MAE, R² validation metrics",
          "Publication-quality prediction plots to outputs/plots/"
        ]
      },
      {
        title: "Documented Three Ways",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "IMPLEMENTATION_DOCUMENTATION.md plus PDF, and implementation_steps.md plus DOCX — the repo explains itself. Private repo, so no code link."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A complete surrogate-modeling study, runnable by anyone with the repo.",
      metrics: [
        { icon: 'model_training', val: '9-layer', label: 'LM-Optimized Network', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'dataset', val: '32.4k', label: 'Physics-Generated Samples', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'analytics', val: 'R²', label: 'Validated vs Numerics', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: []
  },

  "shera-clip": {
    title: "Shera Clip",
    subtitle: "Turn IELTS class recordings into reviewed clips, locally",
    description: "A spec-first local tool: Zoom import, AI-ranked candidate clips, human-approved rendering, cost-capped paid steps.",
    heroDescription: "A local product for Rimons IELTS that turns Zoom class recordings into reviewable Facebook/YouTube clips: import MP4/VTT from Zoom cloud recordings month-at-a-time, rank candidate clips with AI, and render only after human approval in the review UI — paid work is explicitly authorized and capped at USD 1.50 per class. One codebase serves three interfaces — web (python -m shera), desktop (shera desktop), and CLI with JSON output so scripts and agents can drive the machine stages. The one-command installer sets up Python 3.12 and FFmpeg, creates the venv, adds Start-menu shortcuts, and finishes with a shera doctor checklist. This is a spec-first repo: the PRD is the sole authority, decisions carry recorded IDs, acceptance gates must pass on real classes before anything is publish-ready, and a phase-1 prototype is working today.",
    heroImage: "/images/brand/mesh-hero-01.svg",
    tags: ["Python", "FFmpeg", "OpenRouter", "Zoom API", "CLI"],
    screens: [],
    role: "Product Engineer",
    duration: "2026",
    date: "2026",
    client: "Rimons IELTS Internal Tool",
    stats: [
      { label: "Interfaces", value: "3 (web/desktop/CLI)" },
      { label: "Paid-Step Cap", value: "$1.50 / class" },
      { label: "Prototype Stage", value: "Phase 1" }
    ],
    features: [
      {
        title: "Human-in-the-Loop by Default",
        icon: "how_to_reg",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "AI ranks candidate clips, but every render needs explicit human approval, and paid AI work is authorized per class with a hard dollar cap."
      },
      {
        title: "One Codebase, Three Fronts",
        icon: "devices",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Web, desktop, and CLI share the same server; the CLI's JSON output lets scripts and agents drive machine stages without touching the human stages.",
        list: [
          "Zoom cloud-recording import, month at a time",
          "Single OpenRouter key covers ranking, drafts, and speech-to-text fallback"
        ]
      },
      {
        title: "Spec-First Governance",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        list: [
          "PRD as sole authority with recorded decision IDs",
          "Acceptance gates on real classes before publish-readiness",
          "Installer with shera doctor checklist; tests and docs CI"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A working phase-1 prototype with the governance documents to keep it honest as it grows.",
      metrics: [
        { icon: 'movie', val: '3', label: 'Interfaces from One Server', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'how_to_reg', val: 'Human', label: 'Approved Renders', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'payments', val: '$1.50', label: 'Class Cost Cap', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/shera-clip", primary: true }
    ]
  },

  "email-template-generator": {
    title: "Email Templates",
    subtitle: "A small static tool for reusable HTML emails",
    description: "Form-based generation of reusable HTML email templates with live preview pages.",
    heroDescription: "A deliberately small utility: static HTML pages with form inputs that generate reusable email templates for transactional and marketing sends, with live preview pages for each template variant. No build system, no backend — six HTML files that solve a repeated chore. Built mainly to speed up creating and customizing HTML emails for class communication.",
    heroImage: "/images/brand/divider-flow-01.svg",
    tags: ["HTML", "Email", "Static"],
    screens: [],
    role: "Developer",
    duration: "2025 - 2026",
    date: "2026",
    client: "Personal Utility",
    stats: [
      { label: "Footprint", value: "6 static pages" },
      { label: "Build Steps", value: "0" }
    ],
    features: [
      {
        title: "Form In, Email Out",
        icon: "edit_note",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Configurable inputs (live-form, record-form) produce ready-to-send HTML for class announcements and records."
      },
      {
        title: "Live Preview",
        icon: "visibility",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Dedicated preview pages (live-mail, record-mail) show the rendered result before anything ships."
      },
      {
        title: "Kept Small On Purpose",
        icon: "star",
        iconColor: "text-accent-green",
        iconBg: "bg-accent-green/20",
        description: "No framework, no deploy pipeline — the smallest tool in my portfolio, and honest about it."
      }
    ],
    impact: {
      title: "Outcomes",
      description: "A chore-killer that stays out of the way.",
      metrics: [
        { icon: 'mail', val: 'HTML', label: 'Reusable Templates', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'bolt', val: '0', label: 'Build Dependencies', color: 'accent-green', bg: 'bg-accent-green/20' }
      ]
    },
    links: [
      { label: "Repo", url: "https://github.com/ihmorol/email-template-generator", primary: true }
    ]
  },

  "portfolio-website": {
    title: "This Portfolio",
    subtitle: "Designed and built from scratch",
    description: "Next.js 14, TypeScript strict, a custom design-token and motion system, and a markdown blog pipeline.",
    heroDescription: "The site you're reading: Next.js 14 (App Router) with strict TypeScript, a custom design-token and motion system, Tailwind + global CSS tokens, Framer Motion and Radix UI primitives, and a data-driven content architecture — every page renders from src/data files, and the blog runs on a gray-matter + remark markdown pipeline with 30 posts. The contact API route is typed and SMTP/Resend-ready, pages statically generate with a sitemap, and the whole thing passes strict lint and type-check gates. Designed and built from scratch.",
    heroImage: "/images/brand/blob-depth-01.svg",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Markdown"],
    screens: [],
    role: "Designer & Developer",
    duration: "2025 - Present",
    date: "2025 - Present",
    client: "Personal Site",
    stats: [
      { label: "Routes", value: "67 generated" },
      { label: "Blog Posts", value: "30" },
      { label: "Status", value: "Live" }
    ],
    features: [
      {
        title: "Data-Driven Content",
        icon: "dataset",
        iconColor: "text-accent-red",
        iconBg: "bg-accent-red/20",
        description: "Every page renders from typed data files — projects, experience, research, skills — so content updates never touch components."
      },
      {
        title: "Design System, Not Ad-Hoc Styling",
        icon: "palette",
        iconColor: "text-accent-blue",
        iconBg: "bg-accent-blue/20",
        description: "Custom design tokens (type scale, accents, surfaces) and shared motion tokens keep every page consistent.",
        list: [
          "Markdown blog pipeline with 30 posts",
          "Typed contact API (Nodemailer / Resend ready)",
          "Static generation with sitemap.xml"
        ]
      }
    ],
    impact: {
      title: "Outcomes",
      description: "The portfolio you are looking at, running as statically generated pages.",
      metrics: [
        { icon: 'web', val: '67', label: 'Static Pages', color: 'accent-blue', bg: 'bg-accent-blue/20' },
        { icon: 'article', val: '30', label: 'Markdown Posts', color: 'accent-green', bg: 'bg-accent-green/20' },
        { icon: 'public', val: 'Live', label: 'at ihmorol.me', color: 'accent-peach', bg: 'bg-accent-peach/20' }
      ]
    },
    links: [
      { label: "Live Site", url: "https://ihmorol.me", primary: true },
      { label: "Repo", url: "https://github.com/ihmorol/portfolio" }
    ]
  }
};
