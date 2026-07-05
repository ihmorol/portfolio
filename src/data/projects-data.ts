import {
  Brain,
  Smartphone,
  Globe,
  Scale,
  Link2,
  Activity,
  Video,
  Mic,
  ShieldCheck,
  FlaskConical,
  Printer,
  Users,
  Database,
  Mail,
  Cpu,
  Waves,
  Layout
} from 'lucide-react';

export const projectsData = {
  header: {
    title: "Selected",
    titleIcon: "Star",
    titleSuffix: "Works",
    description: "Production platforms, award-winning team projects, research code, and tools I actually use — built across the full stack, from firmware to frontend to ML pipelines."
  },
  categories: ["All Projects", "Full Stack", "Research", "Mobile & IoT", "Tools", "Systems"],
  featuredProject: {
    badge: "Featured Project",
    title: "Advyon — Legal-Tech Platform",
    description: "A legal-tech platform delivering case management, document workflows, community discussions, and AI-assisted legal insights. Built as a university Software Engineering project by a 5-member team I led through the full SDLC — and crowned Champion at the UIU CSE Project Show.",
    techStack: ["React", "Express", "TypeScript", "MongoDB"],
    ctaText: "View Case Study",
    ctaLink: "/projects/advyon",
    github: "https://github.com/ihmorol/advyon-monorepo",
    live: "https://advyon.vercel.app",
    image: "/images/brand/mesh-hero-01.svg"
  },
  projects: [
    {
      title: "Advyon — Legal-Tech Platform",
      slug: "advyon",
      category: "Full Stack",
      date: "2025",
      description: "Case management, document workflows, and AI-driven legal insights. Led a 5-member team through the full SDLC — Champion at the UIU CSE Project Show (SE Lab).",
      tags: ["#React", "#Express", "#TypeScript", "#MongoDB"],
      github: "https://github.com/ihmorol/advyon-monorepo",
      live: "https://advyon.vercel.app",
      icon: Scale,
      color: "from-indigo-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-blue-400",
      accent: "text-blue-400"
    },
    {
      title: "Production E-Learning Platform",
      slug: "elearning-platform",
      category: "Full Stack",
      date: "2025 - Present",
      description: "A live IELTS-preparation platform: Next.js 15 student portal, Express + TypeScript API with Vimeo/Zoom streaming and AI features, and a React admin dashboard with analytics.",
      tags: ["#NextJS15", "#React19", "#Express", "#TypeScript"],
      github: "",
      live: "",
      icon: Globe,
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "group-hover:text-purple-400",
      accent: "text-purple-400"
    },
    {
      title: "Intrusion Detection ML Study",
      slug: "unsw-nb15-ids",
      category: "Research",
      date: "2025 - 2026",
      description: "Reproducible 18-experiment grid evaluating class-imbalance strategies for binary and multiclass IDS on UNSW-NB15, with rare-class analysis. Paper under peer review.",
      tags: ["#Python", "#XGBoost", "#ScikitLearn", "#SMOTE"],
      github: "https://github.com/ihmorol/unsw-nb15-handling-binary-multiclass-ids",
      live: "",
      icon: ShieldCheck,
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "group-hover:text-green-400",
      accent: "text-green-400"
    },
    {
      title: "Lorenz ODE × ANN (Thesis)",
      slug: "lorenz-ann-thesis",
      category: "Research",
      date: "2025 - Present",
      description: "FYDP thesis: a controlled 69-run architecture search testing how well plain neural networks learn a coupled nonlinear ODE system, against a solver-verified ground truth (RMSE ≈ 1.3e-11).",
      tags: ["#PyTorch", "#NumPy", "#SciPy", "#ScientificML"],
      github: "https://github.com/ihmorol/fydp_workspace",
      live: "",
      icon: FlaskConical,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "ANN Nanofluid Flow Model",
      slug: "ann-nanofluid-model",
      category: "Research",
      date: "2026",
      description: "A 9-layer neural network trained with Levenberg-Marquardt optimization to model hybrid nanofluid boundary layer flow and heat transfer, on ~32,400 physics-generated samples with full validation metrics.",
      tags: ["#Python", "#DeepLearning", "#SciML", "#Physics"],
      github: "https://github.com/ihmorol/ann-hybrid-nanofluid-model",
      live: "",
      icon: Waves,
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "Meme Perception Research Console",
      slug: "meme-research-console",
      category: "Research",
      date: "2026",
      description: "A live web instrument collecting human perception data on memes for an ongoing research study — structured response capture across meme categories.",
      tags: ["#TypeScript", "#NextJS", "#DataCollection"],
      github: "https://github.com/ihmorol/data-collection-web",
      live: "https://meme-console.vercel.app",
      icon: Database,
      color: "from-fuchsia-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-fuchsia-400",
      accent: "text-fuchsia-400"
    },
    {
      title: "BriefLi — AI Shortlink Manager",
      slug: "briefli",
      category: "Tools",
      date: "2025 - Present",
      description: "My own live product: an AI-powered shortlink dashboard with smart slug suggestions, public/personal links, click tracking, and trash/restore — running at s.ihmorol.cv.",
      tags: ["#React", "#TypeScript", "#Supabase", "#Vercel"],
      github: "https://github.com/ihmorol/briefli",
      live: "https://s.ihmorol.cv",
      icon: Link2,
      color: "from-amber-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-amber-400",
      accent: "text-amber-400"
    },
    {
      title: "Fall Detection Wearable",
      slug: "fall-detection-wearable",
      category: "Mobile & IoT",
      date: "2025",
      description: "End-to-end IoT system: Arduino/C++ wearable firmware, a Python ML fall-classification model, a Node.js server, and a live web dashboard for alerts and monitoring.",
      tags: ["#Arduino", "#C++", "#Python", "#IoT"],
      github: "https://github.com/ihmorol/Fall_Detection_Wearable_Device",
      live: "",
      icon: Activity,
      color: "from-red-500/20 to-rose-500/20",
      hoverColor: "group-hover:text-red-400",
      accent: "text-red-400"
    },
    {
      title: "PrintSlot — Campus Print Shop App",
      slug: "printslot",
      category: "Mobile & IoT",
      date: "2026",
      description: "Mobile app for campus print shops: students upload files, set print options, see the price, and join a live queue or book a pickup slot — while the shop tracks jobs through clear stages.",
      tags: ["#ReactNative", "#TypeScript", "#Mobile"],
      github: "https://github.com/ihmorol/PrintSlot",
      live: "",
      icon: Printer,
      color: "from-teal-500/20 to-emerald-500/20",
      hoverColor: "group-hover:text-teal-400",
      accent: "text-teal-400"
    },
    {
      title: "remdon — Random Video Chat",
      slug: "remdon",
      category: "Full Stack",
      date: "2026",
      description: "1:1 random video and text chat built on WebRTC with Socket.io signaling, Redis matchmaking queue, PostgreSQL, and STUN/TURN traversal — with a tested monorepo setup.",
      tags: ["#WebRTC", "#SocketIO", "#Redis", "#PostgreSQL"],
      github: "https://github.com/ihmorol/remdon",
      live: "",
      icon: Video,
      color: "from-violet-500/20 to-fuchsia-500/20",
      hoverColor: "group-hover:text-fuchsia-400",
      accent: "text-fuchsia-400"
    },
    {
      title: "Skill Paradox — Skill Exchange",
      slug: "skill-paradox",
      category: "Full Stack",
      date: "2025",
      description: "A skill-swap platform where users list skills they offer and need, browse categorized listings, and connect for exchanges — with profiles, moderation, and admin controls.",
      tags: ["#TypeScript", "#Express", "#React", "#MongoDB"],
      github: "https://github.com/ihmorol/skill-paradox-backend",
      live: "",
      icon: Users,
      color: "from-orange-500/20 to-amber-500/20",
      hoverColor: "group-hover:text-orange-400",
      accent: "text-orange-400"
    },
    {
      title: "VoiceKey — Voice-to-Keyboard",
      slug: "voicekey",
      category: "Systems",
      date: "2026",
      description: "Privacy-first, offline voice typing for Linux and Windows using faster-whisper — with a daemon mode, CLI, model profiles, and optional hybrid cloud fallback.",
      tags: ["#Python", "#Whisper", "#CLI", "#Linux"],
      github: "https://github.com/ihmorol/voicekey",
      live: "",
      icon: Mic,
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "group-hover:text-emerald-400",
      accent: "text-emerald-400"
    },
    {
      title: "Operating System Laboratory",
      slug: "os-laboratory",
      category: "Systems",
      date: "2026",
      description: "Hands-on OS implementations and documented experiments: processes and threads, scheduling, synchronization, memory management, and file systems in C++.",
      tags: ["#C++", "#OperatingSystems", "#Concurrency"],
      github: "https://github.com/ihmorol/operating-system-laboratory",
      live: "",
      icon: Cpu,
      color: "from-slate-500/20 to-gray-500/20",
      hoverColor: "group-hover:text-gray-300",
      accent: "text-gray-300"
    },
    {
      title: "Paradox Prism",
      slug: "paradox-prism",
      category: "Full Stack",
      date: "2026",
      description: "Anonymous reporting platform with reviewer-based content assessment, a public artwork gallery, and a steganography 'Decode' feature that reveals data hidden in images.",
      tags: ["#React", "#Express", "#MongoDB", "#Steganography"],
      github: "https://github.com/ihmorol/paradoxical-prism",
      live: "",
      icon: Brain,
      color: "from-pink-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-pink-400",
      accent: "text-pink-400"
    },
    {
      title: "Task Manager Mobile",
      slug: "task-manager-mobile",
      category: "Mobile & IoT",
      date: "2026",
      description: "React Native + Expo task board with drag-and-drop status changes, deadline color coding, in-app notifications, and an activity log — spec-driven from PRD to build.",
      tags: ["#ReactNative", "#Expo", "#TypeScript"],
      github: "https://github.com/ihmorol/task-manager-mobile",
      live: "",
      icon: Smartphone,
      color: "from-sky-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-sky-400",
      accent: "text-sky-400"
    },
    {
      title: "Email Template Generator",
      slug: "email-template-generator",
      category: "Tools",
      date: "2026",
      description: "Generates reusable, customizable HTML email templates from configurable inputs — a live utility for producing clean transactional and marketing emails fast.",
      tags: ["#TypeScript", "#HTML", "#Email"],
      github: "https://github.com/ihmorol/email-template-generator",
      live: "https://email-template-generator-six.vercel.app",
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
      description: "The site you're on: Next.js 14 + TypeScript with a custom design-token and motion system, markdown blog pipeline, static generation, and sitemap — designed and built end to end.",
      tags: ["#NextJS", "#TypeScript", "#Tailwind", "#FramerMotion"],
      github: "",
      live: "https://ihmorol.me",
      icon: Layout,
      color: "from-neutral-500/20 to-zinc-500/20",
      hoverColor: "group-hover:text-white",
      accent: "text-white"
    }
  ],
  projectDetails: {
    "advyon": {
      title: "Advyon — Legal-Tech Platform",
      subtitle: "Champion, UIU CSE Project Show (Software Engineering Lab)",
      description: "A legal-tech platform delivering case management, document workflows, community discussions, and AI-assisted legal insights.",
      heroDescription: "Advyon modernizes how legal help is accessed: clients file cases and documents through smart intake, discuss issues in a moderated community, and get AI-driven insights backed by a legal database service. I led a 5-member team through requirements, design, implementation, and testing — the project won Champion at the UIU CSE Project Show.",
      heroImage: "/images/brand/mesh-hero-01.svg",
      tags: ["React", "Express", "TypeScript", "MongoDB", "JWT", "AI Integration"],
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
          description: "Legal help is intimidating and fragmented: case tracking, document handling, and getting initial guidance all live in different places. We set out to unify them in one secure platform — while coordinating five developers on a strict trimester deadline."
        },
        {
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "A React client backed by a secure Express + TypeScript service layer: JWT authentication, case and document APIs, smart intake processing, a legal database service, and AI-driven insights. Clear module ownership and interface contracts kept the 5-member team unblocked."
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
            quote: "Leading five people through a full SDLC taught me more about interfaces — human and API — than any solo project could.",
            author: "Personal Reflection"
          }
        ]
      }
    },
    "elearning-platform": {
      title: "Production E-Learning Platform",
      subtitle: "Live IELTS-preparation platform serving real students",
      description: "A three-app production system: student portal, REST API, and admin dashboard.",
      heroDescription: "A commercial IELTS-preparation platform I develop and operate as a long-term freelance engagement. Students take video courses, practice reading and writing, and track progress in a Next.js 15 / React 19 portal; an Express + TypeScript API handles auth, courses, exams, Vimeo/Zoom streaming, AI features, and cloud file storage; and a React 19 + Vite admin dashboard manages content, users, and analytics.",
      heroImage: "/images/brand/blob-depth-01.svg",
      tags: ["Next.js 15", "React 19", "Express", "TypeScript", "Zod", "TanStack Query", "Vimeo/Zoom API"],
      screens: [] as string[],
      role: "Full-Stack Developer (Freelance)",
      duration: "Ongoing",
      date: "2025 - Present",
      client: "Commercial Client (EdTech)",
      stats: [
        { label: "Production Apps", value: "3" },
        { label: "Status", value: "Live" }
      ],
      features: [
        {
          title: "The Challenge",
          icon: "warning",
          iconColor: "text-accent-red",
          iconBg: "bg-accent-red/20",
          description: "Real paying students depend on the platform daily — video streaming, exam workflows, and payments have to keep working through every release, and the admin team needs full control without touching code."
        },
        {
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "Three cleanly separated apps sharing one typed API contract: OpenAPI/Swagger documentation, Zod validation on every boundary, JWT auth, and test coverage on the server. Go-live checklists and systematic bug-tracking keep production releases boring — in the good way."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "Video courses via Vimeo/Zoom integration",
            "Reading & writing practice with progress tracking",
            "AI-assisted learning features",
            "Full admin dashboard with analytics"
          ]
        }
      ],
      impact: {
        title: "Project Outcomes",
        description: "A real product with real users — engineering discipline included.",
        metrics: [
          { icon: 'devices', val: '3', label: 'Apps in Production', color: 'accent-blue', bg: 'bg-accent-blue/20' },
          { icon: 'verified', val: 'Zod', label: 'Validated API Boundaries', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'description', val: 'OpenAPI', label: 'Documented Endpoints', color: 'accent-peach', bg: 'bg-accent-peach/20' }
        ],
        testimonials: [
          {
            quote: "Operating software that real students rely on changed how I write code: validation everywhere, checklists before deploys, and no silent failures.",
            author: "Personal Reflection"
          }
        ]
      }
    },
    "unsw-nb15-ids": {
      title: "Intrusion Detection ML Study",
      subtitle: "Class-imbalance baselines for network intrusion detection — paper under review",
      description: "A reproducible study of imbalance strategies for binary and multiclass IDS on UNSW-NB15.",
      heroDescription: "Accuracy is a misleading metric when the attack you care about is 0.07% of the traffic. This study runs a rigorous 18-experiment grid — two tasks (binary/multiclass) × three models (LR, RF, XGBoost) × three imbalance strategies (none, class weighting, SMOTE) — with explicit rare-class analysis on Worms and Shellcode, macro-F1/ROC-AUC/G-Mean metrics, and a leakage-proof pipeline with preprocessing fit only on training data. The resulting paper is under peer review.",
      heroImage: "/images/brand/divider-flow-01.svg",
      tags: ["Python", "scikit-learn", "XGBoost", "SMOTE", "UNSW-NB15"],
      screens: [] as string[],
      role: "Researcher",
      duration: "6 Months",
      date: "2025 - 2026",
      client: "Independent Research",
      stats: [
        { label: "Experiment Grid", value: "18 runs" },
        { label: "Paper Status", value: "Under Review" }
      ],
      features: [
        {
          title: "The Question",
          icon: "warning",
          iconColor: "text-accent-red",
          iconBg: "bg-accent-red/20",
          description: "Which class-imbalance strategy actually helps an IDS detect rare attacks — and does the answer change between binary and multiclass settings? Most published results hide this behind aggregate accuracy."
        },
        {
          title: "The Method",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "A fully reproducible experiment framework: fixed seeds, config snapshots, strict train/validation/test separation, and per-class metrics. Publication-quality visualizations (radar charts, faceted heatmaps) are generated automatically from results."
        },
        {
          title: "Key Contributions",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "18-experiment controlled grid, fully reproducible",
            "Rare-class focus: Worms (0.07%), Shellcode (0.65%)",
            "Macro-F1, ROC-AUC, G-Mean over raw accuracy",
            "Leakage-proof preprocessing pipeline"
          ]
        }
      ],
      impact: {
        title: "Outcomes",
        description: "From coursework curiosity to a peer-review submission.",
        metrics: [
          { icon: 'science', val: '18', label: 'Controlled Experiments', color: 'accent-blue', bg: 'bg-accent-blue/20' },
          { icon: 'article', val: '1', label: 'Paper Under Review', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'replay', val: '100%', label: 'Reproducible (Seeded)', color: 'accent-peach', bg: 'bg-accent-peach/20' }
        ],
        testimonials: [
          {
            quote: "The hard part of ML research isn't training models — it's building an evaluation you can trust.",
            author: "Research Takeaway"
          }
        ]
      }
    },
    "briefli": {
      title: "BriefLi — AI Shortlink Manager",
      subtitle: "A live product I built and use every day",
      description: "AI-powered shortlink management dashboard with smart slug suggestions.",
      heroDescription: "BriefLi is my personal link infrastructure, running live at s.ihmorol.cv. It creates and organizes shortlinks with AI-suggested slugs, tracks clicks, separates public and personal link spaces behind auth, and supports soft-delete with trash/restore. Built with React + TypeScript on Vite, a Vercel serverless API, and Supabase (Postgres) with schema migrations.",
      heroImage: "/images/brand/blob-depth-01.svg",
      tags: ["React", "TypeScript", "Vite", "Supabase", "Vercel", "Gemini API"],
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
          description: "I share study guides, project trackers, and resources constantly — and long URLs with random slugs are unmemorable and unmanageable. Existing shorteners don't organize links or suggest meaningful names."
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
            "AI slug suggestions",
            "Collision-checked short codes",
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
      title: "Fall Detection Wearable",
      subtitle: "From firmware to dashboard — a complete IoT safety system",
      description: "Wearable device that detects falls with ML and alerts caregivers in real time.",
      heroDescription: "A four-layer system built end-to-end: an Arduino-based wearable (C++) streams motion sensor data; a Python machine learning model classifies falls versus normal activity; a Node.js server ingests events and triggers alerts; and a web dashboard gives caregivers live monitoring. One of the few student projects where hardware, ML, and web engineering all had to work together.",
      heroImage: "/images/brand/mesh-hero-01.svg",
      tags: ["Arduino", "C++", "Python", "Node.js", "JavaScript", "IoT"],
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
          description: "Detecting a fall reliably from noisy accelerometer data — while keeping the whole pipeline fast enough that an alert reaches a caregiver when it matters."
        },
        {
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "Sensor data flows from the C++ firmware to a Python classifier trained on motion patterns; detections post to a Node.js server that pushes alerts to a live dashboard."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "Wearable motion sensing (Arduino/C++)",
            "ML fall classification (Python)",
            "Real-time alert server (Node.js)",
            "Caregiver web dashboard"
          ]
        }
      ],
      impact: {
        title: "Outcomes",
        description: "Hardware-to-cloud engineering in one project.",
        metrics: [
          { icon: 'sensors', val: 'C++', label: 'Wearable Firmware', color: 'accent-blue', bg: 'bg-accent-blue/20' },
          { icon: 'model_training', val: 'ML', label: 'Fall Classifier', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'monitor_heart', val: 'Live', label: 'Alert Dashboard', color: 'accent-peach', bg: 'bg-accent-peach/20' }
        ],
        testimonials: [
          {
            quote: "IoT projects punish hand-waving: every layer either works or the demo fails in front of everyone.",
            author: "Personal Reflection"
          }
        ]
      }
    }
  }
};
