import {
  Brain,
  Smartphone,
  Globe,
  Scale,
  Link2,
  Activity,
  Mic,
  ShieldCheck,
  FlaskConical,
  Printer,
  Users,
  Database,
  Mail,
  Waves,
  Layout,
  Bot,
  BookOpen,
  Orbit,
  Radar,
  Shapes,
  ScanSearch,
  Video,
  Filter
} from 'lucide-react';

export const projectsData = {
  header: {
    title: "Selected",
    titleIcon: "Star",
    titleSuffix: "Works",
    description: "Ranked by impact and completeness: production platforms first, then research with archived evidence, then team projects and tools. Every entry links to code or a live site where one exists."
  },
  categories: ["All Projects", "Full Stack", "Research", "Mobile & IoT", "Tools", "Systems"],
  featuredProject: {
    badge: "Featured Project",
    title: "E-Learning Platform",
    description: "The live IELTS-preparation platform I engineer solo for RimonsIELTS: four production apps — a Next.js 15 student portal, an Express + TypeScript API with OpenAPI contract gates, a React admin with a full test pyramid, and a Python central service — serving real students daily at rimonsielts.com.",
    techStack: ["Next.js 15", "Express + TypeScript", "React 19", "Python"],
    ctaText: "View Case Study",
    ctaLink: "/projects/elearning-platform",
    github: "",
    live: "https://rimonsielts.com",
    image: "/images/brand/blob-depth-01.svg"
  },
  projects: [
    {
      title: "E-Learning Platform",
      slug: "elearning-platform",
      category: "Full Stack",
      date: "2025 - Present",
      description: "The live IELTS platform I engineer solo for RimonsIELTS: a Next.js 15 student portal, an Express + TypeScript API with enforced OpenAPI contract parity, a React admin with a full unit-to-E2E test pyramid, and a Python central service — 1,700+ commits across the suite, live at rimonsielts.com.",
      tags: ["#NextJS15", "#Express", "#TypeScript", "#Python"],
      github: "",
      live: "https://rimonsielts.com",
      icon: Globe,
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "group-hover:text-purple-400",
      accent: "text-purple-400"
    },
    {
      title: "Advyon",
      slug: "advyon",
      category: "Full Stack",
      date: "2025",
      description: "A legal-tech platform with case management, document workflows, community discussions, and AI-assisted insights, built on a feature-module React 19 architecture. I led the five-member team that won Champion at the UIU CSE Project Show.",
      tags: ["#React", "#Express", "#TypeScript", "#MongoDB"],
      github: "https://github.com/ihmorol/advyon-client",
      live: "https://advyon.vercel.app",
      icon: Scale,
      color: "from-indigo-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-blue-400",
      accent: "text-blue-400"
    },
    {
      title: "Lorenz ODE Thesis",
      slug: "lorenz-ann-thesis",
      category: "Research",
      date: "2025 - Present",
      description: "My FYDP thesis: a PINN trained on the ODE residual alone tracks a high-accuracy DOP853 reference to ~3e-05, alongside a controlled 69-run ANN architecture search. The public repo archives every run immutably with 41 tests and an ICEEICT manuscript draft.",
      tags: ["#PyTorch", "#PINN", "#SciPy", "#ScientificML"],
      github: "https://github.com/ihmorol/lorenz1960-pinn",
      live: "",
      icon: FlaskConical,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "BriefLi",
      slug: "briefli",
      category: "Tools",
      date: "2025 - Present",
      description: "My own shortlink platform, live at s.ihmorol.cv: Gemini-suggested slugs, atomic click counting through a Postgres RPC, public and personal link spaces behind Clerk auth, and trash with restore. Ships with SQL migrations and a user manual.",
      tags: ["#React", "#TypeScript", "#Supabase", "#Vercel"],
      github: "https://github.com/ihmorol/briefli",
      live: "https://s.ihmorol.cv",
      icon: Link2,
      color: "from-amber-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-amber-400",
      accent: "text-amber-400"
    },
    {
      title: "Shera Bot",
      slug: "shera-bot",
      category: "Systems",
      date: "2026",
      description: "A multi-agent AI platform prototype in a TypeScript monorepo: agents propose, a runtime validates and executes, and risky actions sit behind scoped, expiring approvals. Ships an agent-pack SDK with integrity checks, a Next.js client, and tiered contract-to-E2E tests.",
      tags: ["#TypeScript", "#Monorepo", "#AIAgents"],
      github: "https://github.com/ihmorol/shera-bot",
      live: "",
      icon: Bot,
      color: "from-purple-500/20 to-indigo-500/20",
      hoverColor: "group-hover:text-purple-400",
      accent: "text-purple-400"
    },
    {
      title: "VoiceKey",
      slug: "voicekey",
      category: "Systems",
      date: "2026",
      description: "Offline voice-to-keyboard typing for Linux and Windows on faster-whisper: daemon mode, a CLI, model profiles, and an opt-in cloud fallback — packaged with a release pipeline, CI, and its own documentation site.",
      tags: ["#Python", "#Whisper", "#CLI", "#Linux"],
      github: "https://github.com/ihmorol/voicekey",
      live: "",
      icon: Mic,
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "group-hover:text-emerald-400",
      accent: "text-emerald-400"
    },
    {
      title: "ODE 3D Orbit",
      slug: "ode-3d-orbit",
      category: "Tools",
      date: "2026",
      description: "An interactive 3D explorer for nonlinear dynamics, live with 16 built-in systems from Lorenz to Kuramoto: edit equations and constants while they integrate, with RK4 step-size control and conserved-quantity drift feedback.",
      tags: ["#JavaScript", "#ThreeJS", "#ODEs", "#Visualization"],
      github: "https://github.com/ihmorol/ode-3d-orbit",
      live: "https://ode-3d-orbit.vercel.app",
      icon: Orbit,
      color: "from-violet-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-violet-400",
      accent: "text-violet-400"
    },
    {
      title: "Meme Research Console",
      slug: "meme-research-console",
      category: "Research",
      date: "2026",
      description: "A live survey instrument collecting human perception data on ~500 stratified Bangla memes, built on Next.js and Supabase with the full dataset and a documented system architecture in-repo.",
      tags: ["#TypeScript", "#NextJS", "#DataCollection"],
      github: "https://github.com/ihmorol/data-collection-web",
      live: "https://meme-console.vercel.app",
      icon: Database,
      color: "from-fuchsia-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-fuchsia-400",
      accent: "text-fuchsia-400"
    },
    {
      title: "PINN Attack Detection",
      slug: "pinn-cps-robo",
      category: "Research",
      date: "2026",
      description: "Physics-residual detection of CAN masquerade attacks on the ROAD dataset: kinematic-consistency checks catch 3 of 4 attack classes at a 0.1% ambient false-positive rate, with an honestly reported negative result on PINN attribution. All five pre-registered milestones are complete and a paper draft is compiled.",
      tags: ["#Python", "#PINN", "#Security", "#Automotive"],
      github: "https://github.com/ihmorol/pinn-cps-robo",
      live: "",
      icon: Radar,
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "group-hover:text-emerald-400",
      accent: "text-emerald-400"
    },
    {
      title: "DT-NB Hybrid Study",
      slug: "dt-nb-noise-removal",
      category: "Research",
      date: "2026",
      description: "A conference study of Naive Bayes instance filtering vs tree-based attribute weighting in DT-NB hybrids: twelve arms, ten seeds, Holm-corrected statistics, and a self-audit documenting what the protocol can and cannot claim. Manuscript submitted to ICEEICT 2027.",
      tags: ["#Weka", "#DecisionTrees", "#NaiveBayes", "#CrossValidation"],
      github: "https://github.com/ihmorol/dt-nb-noise-removal",
      live: "",
      icon: Filter,
      color: "from-lime-500/20 to-green-500/20",
      hoverColor: "group-hover:text-lime-400",
      accent: "text-lime-400"
    },
    {
      title: "PhORM",
      slug: "pinn-shape-optimization",
      category: "Research",
      date: "2026",
      description: "PINN-in-the-loop shape optimization for a small mobile robot: 15 geometry and mass-layout variables against a multi-physics objective, a +15% objective improvement, and results certified against an independent finite-volume solver.",
      tags: ["#Python", "#PINN", "#Optimization", "#Robotics"],
      github: "https://github.com/ihmorol/pinn-shape-optimization",
      live: "",
      icon: Shapes,
      color: "from-teal-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-teal-400",
      accent: "text-teal-400"
    },
    {
      title: "Fall Detection",
      slug: "fall-detection-wearable",
      category: "Mobile & IoT",
      date: "2025",
      description: "A complete embedded-ML pipeline: an Arduino wearable running an Edge Impulse-trained TinyML fall model on-device, a Node.js alert API with JWT and rate limiting, and a Next.js dashboard for caregivers.",
      tags: ["#Arduino", "#TinyML", "#Node.js", "#IoT"],
      github: "https://github.com/ihmorol/fall-detection-wearable-device",
      live: "",
      icon: Activity,
      color: "from-red-500/20 to-rose-500/20",
      hoverColor: "group-hover:text-red-400",
      accent: "text-red-400"
    },
    {
      title: "AI-Image Forensics",
      slug: "spatial-spectral-forensics",
      category: "Research",
      date: "2026",
      description: "A pre-registered, five-experiment study of which explainable feature set (pixel-pattern, frequency, or combined) best detects AI-generated images under matched JPEG compression and unseen generators. Final manuscript and limitations report in-repo.",
      tags: ["#Python", "#Forensics", "#ComputerVision"],
      github: "https://github.com/ihmorol/spatial-spectral-forensics",
      live: "",
      icon: ScanSearch,
      color: "from-rose-500/20 to-red-500/20",
      hoverColor: "group-hover:text-rose-400",
      accent: "text-rose-400"
    },
    {
      title: "PrintSlot",
      slug: "printslot",
      category: "Mobile & IoT",
      date: "2026",
      description: "A bilingual (English/Bengali) campus print-shop app from a five-person team: per-file print pricing, live WebSocket order tracking, four user roles, and wallet payments — a Turborepo monorepo with Expo Router, a NestJS API, and Supabase.",
      tags: ["#ReactNative", "#NestJS", "#Expo", "#WebSocket"],
      github: "https://github.com/ihmorol/PrintSlot",
      live: "",
      icon: Printer,
      color: "from-teal-500/20 to-emerald-500/20",
      hoverColor: "group-hover:text-teal-400",
      accent: "text-teal-400"
    },
    {
      title: "Paradox Prism",
      slug: "paradox-prism",
      category: "Full Stack",
      date: "2026",
      description: "An anonymous reporting platform with reviewer-based content assessment, a public artwork gallery, and a steganography feature that decodes data hidden in images.",
      tags: ["#React", "#Express", "#MongoDB", "#Steganography"],
      github: "https://github.com/ihmorol/paradoxical-prism",
      live: "",
      icon: Brain,
      color: "from-pink-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-pink-400",
      accent: "text-pink-400"
    },
    {
      title: "Skill Paradox",
      slug: "skill-paradox",
      category: "Full Stack",
      date: "2025",
      description: "A skill-exchange platform where users barter or pay for sessions: booking with double-booking prevention, real-time chat, endorsement-based ranking, and admin controls — a full product spec, SQL schema, Express + TypeScript API, and a React 19 frontend.",
      tags: ["#TypeScript", "#Express", "#MySQL", "#React"],
      github: "https://github.com/ihmorol/skill-paradox-backend",
      live: "",
      icon: Users,
      color: "from-orange-500/20 to-amber-500/20",
      hoverColor: "group-hover:text-orange-400",
      accent: "text-orange-400"
    },
    {
      title: "Carried",
      slug: "carried",
      category: "Full Stack",
      date: "2026",
      description: "A no-account web app for the line a book left in you: pick a book, underline a line, stamp it with your name, and share the card — real-time updates, Open Library covers, and an offline mode where the link itself carries the line.",
      tags: ["#TypeScript", "#NextJS", "#Product"],
      github: "https://github.com/ihmorol/carried",
      live: "https://carried-pi.vercel.app",
      icon: BookOpen,
      color: "from-amber-500/20 to-red-500/20",
      hoverColor: "group-hover:text-amber-400",
      accent: "text-amber-400"
    },
    {
      title: "Task Manager",
      slug: "task-manager-mobile",
      category: "Mobile & IoT",
      date: "2026",
      description: "A spec-first React Native assignment: PRD and UI spec before code, then a task board with drag-and-drop status changes, deadline color coding, notifications, and an activity log. Deliberately frontend-only with local state.",
      tags: ["#ReactNative", "#Expo", "#TypeScript"],
      github: "",
      live: "",
      icon: Smartphone,
      color: "from-sky-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-sky-400",
      accent: "text-sky-400"
    },
    {
      title: "Class Imbalance Study",
      slug: "unsw-nb15-ids",
      category: "Research",
      date: "2025 - 2026",
      description: "A university term paper: an 18-run reproducible grid comparing class-imbalance strategies (class weighting, SMOTE) on UNSW-NB15, with Friedman tests, confidence intervals, and rare-class analysis.",
      tags: ["#Python", "#XGBoost", "#ScikitLearn", "#SMOTE"],
      github: "",
      live: "",
      icon: ShieldCheck,
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "group-hover:text-green-400",
      accent: "text-green-400"
    },
    {
      title: "Nanofluid Flow Model",
      slug: "ann-nanofluid-model",
      category: "Research",
      date: "2026",
      description: "A nine-layer neural network trained with Levenberg-Marquardt optimization to model hybrid nanofluid boundary layer flow and heat transfer, using about 32,400 physics-generated samples and validated against numerical solutions.",
      tags: ["#Python", "#DeepLearning", "#SciML", "#Physics"],
      github: "",
      live: "",
      icon: Waves,
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "Shera Clip",
      slug: "shera-clip",
      category: "Tools",
      date: "2026",
      description: "A local class-to-clip tool for Rimons IELTS in spec-first style: Zoom recording import, AI-ranked candidate clips with human approval, and cost-capped paid steps. Phase-1 prototype with the full PRD and acceptance gates in-repo.",
      tags: ["#Python", "#Video", "#Automation"],
      github: "https://github.com/ihmorol/shera-clip",
      live: "",
      icon: Video,
      color: "from-sky-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-sky-400",
      accent: "text-sky-400"
    },
    {
      title: "Email Templates",
      slug: "email-template-generator",
      category: "Tools",
      date: "2026",
      description: "A small static tool that generates reusable HTML email templates from configurable inputs, for quick transactional and marketing emails.",
      tags: ["#HTML", "#Email"],
      github: "https://github.com/ihmorol/email-template-generator",
      live: "",
      icon: Mail,
      color: "from-yellow-500/20 to-amber-500/20",
      hoverColor: "group-hover:text-yellow-400",
      accent: "text-yellow-400"
    },
    {
      title: "This Portfolio",
      slug: "portfolio-website",
      category: "Tools",
      date: "2025 - Present",
      description: "The site you're reading: Next.js 14 and TypeScript with a custom design-token and motion system, a markdown blog pipeline, static generation, and a sitemap. Designed and built from scratch.",
      tags: ["#NextJS", "#TypeScript", "#Tailwind", "#FramerMotion"],
      github: "https://github.com/ihmorol/portfolio",
      live: "https://ihmorol.me",
      icon: Layout,
      color: "from-neutral-500/20 to-zinc-500/20",
      hoverColor: "group-hover:text-text-primary",
      accent: "text-text-primary"
    }
  ],
  projectDetails: {
    "advyon": {
      title: "Advyon",
      subtitle: "Legal-tech platform · Champion, UIU CSE Project Show",
      description: "A legal-tech platform with case management, document workflows, community discussions, and AI-assisted legal insights.",
      heroDescription: "Advyon changes how people reach legal help. Clients file cases and documents through smart intake, discuss issues in a moderated community, and get AI-assisted insights backed by a legal database service. I led a five-member team through requirements, design, implementation, and testing, and the project won Champion at the UIU CSE Project Show.",
      heroImage: "/images/brand/mesh-hero-01.svg",
      tags: ["React 19", "Vite", "TypeScript", "MongoDB", "JWT", "AI Integration"],
      screens: [] as string[],
      role: "Team Lead & Full-Stack Developer",
      duration: "One Trimester",
      date: "2025",
      client: "University SE Project",
      stats: [
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
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "A feature-module React 19 client (auth, cases, and community as self-contained modules with their own API hooks and types) backed by an Express + TypeScript service layer: JWT authentication, case and document APIs, smart intake processing, a legal database service, and AI-assisted insights. Clear module ownership and interface contracts kept all five developers unblocked."
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
          { icon: 'smart_toy', val: 'AI', label: 'Assisted Legal Insights', color: 'accent-peach', bg: 'bg-accent-peach/20' }
        ],
        testimonials: [
          {
            quote: "Leading five people through a full SDLC taught me more about interfaces, both human and API, than any solo project could.",
            author: "Personal Reflection"
          }
        ]
      }
    },
    "elearning-platform": {
      title: "E-Learning Platform",
      subtitle: "Live IELTS preparation platform with real students",
      description: "A four-app production system: student portal, REST API, admin dashboard, and a Python central service.",
      heroDescription: "A commercial IELTS-preparation platform for RimonsIELTS that I build and operate as the sole remote software engineer. Students take full-length mock tests, video courses, reading and writing practice, and track progress in a Next.js 15 / React 19 portal; an Express + TypeScript API handles auth, courses, exams, Vimeo/Zoom streaming, AI features, and cloud file storage with enforced OpenAPI contract parity; a React 19 + Vite admin manages content, users, exams, and analytics with a unit-to-E2E test pyramid; and a Python central service ties the backend workflows together.",
      heroImage: "/images/brand/blob-depth-01.svg",
      tags: ["Next.js 15", "React 19", "Express", "TypeScript", "Python", "Zod", "TanStack Query / Router", "Vimeo/Zoom API"],
      screens: [] as string[],
      role: "Sole Software Engineer (Remote)",
      duration: "Ongoing",
      date: "2025 - Present",
      client: "RimonsIELTS",
      stats: [
        { label: "Production Apps", value: "4" },
        { label: "Commits Across Suite", value: "1,700+" },
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
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "Four cleanly separated apps share one typed API contract: an enforced OpenAPI inventory with zero missing or extra endpoints, CI security gates (authz smoke tests, dependency audit, secret scanning), Zod validation on every boundary, JWT auth with rate limiting, and go-live checklists that keep production releases uneventful."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "Full-length IELTS mock tests (Reading, Listening, Writing)",
            "Video courses via Vimeo/Zoom integration",
            "Admin control plane with analytics and audit logs",
            "Payments, exam sessions, and feature flags"
          ]
        }
      ],
      impact: {
        title: "Project Outcomes",
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
      }
    },
    "briefli": {
      title: "BriefLi",
      subtitle: "A shortlink manager I built and use every day",
      description: "A shortlink management dashboard with AI slug suggestions.",
      heroDescription: "BriefLi is my personal link infrastructure, running live at s.ihmorol.cv. It creates and organizes shortlinks with Gemini-suggested slugs, tracks clicks atomically through a Postgres RPC, separates public and personal link spaces behind Clerk authentication, and supports soft delete with trash and restore. Built with React 19 and TypeScript on Vite, a Vercel serverless API, and Supabase Postgres with schema migrations.",
      heroImage: "/images/brand/blob-depth-01.svg",
      tags: ["React 19", "TypeScript", "Vite", "Supabase", "Clerk", "Vercel", "Gemini API"],
      screens: [] as string[],
      role: "Creator & Maintainer",
      duration: "Ongoing",
      date: "2025 - Present",
      client: "Personal Product",
      stats: [
        { label: "Status", value: "Live" },
        { label: "Used For", value: "Daily link sharing" }
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
          description: "A dashboard where every link gets a unique, collision-checked code or an AI-suggested human-readable slug. Public links are visible to anyone; personalized links live behind authentication. Click counts, descriptions, and trash/restore complete the loop."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "AI slug suggestions via Gemini",
            "Collision-checked short codes",
            "Atomic click counting (Postgres RPC)",
            "Public + authenticated personal links",
            "Click tracking, trash & restore"
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
      }
    },
    "fall-detection-wearable": {
      title: "Fall Detection",
      subtitle: "A complete embedded-ML IoT safety system, firmware to dashboard",
      description: "Wearable device that detects falls with on-device TinyML and alerts caregivers in real time.",
      heroDescription: "A four-layer system built end to end. An Arduino-based wearable written in C++ runs an Edge Impulse-trained fall-detection model on-device through EloquentTinyML, streaming from accelerometer and gyroscope sensors; a Node.js API with JWT auth, validation, and rate limiting ingests events and triggers alerts; and a Next.js dashboard gives caregivers live monitoring. One of the few student projects where hardware, embedded ML, and web engineering all had to work together.",
      heroImage: "/images/brand/mesh-hero-01.svg",
      tags: ["Arduino", "C++", "Edge Impulse", "TinyML", "Node.js", "Next.js"],
      screens: [] as string[],
      role: "Developer",
      duration: "One Trimester",
      date: "2025",
      client: "University Project",
      stats: [
        { label: "System Layers", value: "4" },
        { label: "Stack Span", value: "Firmware → Web" }
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
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "Sensor data trains an Edge Impulse model that is exported to the wearable for on-device TinyML inference; detections post to a Node.js server that pushes alerts to a live dashboard."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "Wearable motion sensing (Arduino/C++)",
            "On-device fall classification (Edge Impulse TinyML)",
            "Real-time alert server (Node.js)",
            "Caregiver web dashboard (Next.js)"
          ]
        }
      ],
      impact: {
        title: "Outcomes",
        description: "Hardware-to-cloud engineering in one project.",
        metrics: [
          { icon: 'sensors', val: 'C++', label: 'Wearable Firmware', color: 'accent-blue', bg: 'bg-accent-blue/20' },
          { icon: 'model_training', val: 'ML', label: 'On-Device Classifier', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'monitor_heart', val: 'Live', label: 'Alert Dashboard', color: 'accent-peach', bg: 'bg-accent-peach/20' }
        ],
        testimonials: [
          {
            quote: "IoT projects punish hand-waving. Every layer either works or the demo fails in front of everyone.",
            author: "Personal Reflection"
          }
        ]
      }
    }
  }
};
