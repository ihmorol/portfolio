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
  Layout
} from 'lucide-react';

export const projectsData = {
  header: {
    title: "Selected",
    titleIcon: "Star",
    titleSuffix: "Works",
    description: "Production platforms, university team projects, research code, and tools I use every day. The work covers web apps, backends, firmware, and ML pipelines."
  },
  categories: ["All Projects", "Full Stack", "Research", "Mobile & IoT", "Tools", "Systems"],
  featuredProject: {
    badge: "Featured Project",
    title: "Advyon",
    description: "A legal-tech platform with case management, document workflows, community discussions, and AI-assisted legal insights. A five-member team I led built it as our Software Engineering project and won Champion at the UIU CSE Project Show.",
    techStack: ["React", "Express", "TypeScript", "MongoDB"],
    ctaText: "View Case Study",
    ctaLink: "/projects/advyon",
    github: "https://github.com/ihmorol/advyon-client",
    live: "https://advyon.vercel.app",
    image: "/images/brand/mesh-hero-01.svg"
  },
  projects: [
    {
      title: "Advyon",
      slug: "advyon",
      category: "Full Stack",
      date: "2025",
      description: "Legal-tech platform with case management, document workflows, and AI-assisted insights. I led the five-member team that won Champion at the UIU CSE Project Show.",
      tags: ["#React", "#Express", "#TypeScript", "#MongoDB"],
      github: "https://github.com/ihmorol/advyon-client",
      live: "https://advyon.vercel.app",
      icon: Scale,
      color: "from-indigo-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-blue-400",
      accent: "text-blue-400"
    },
    {
      title: "E-Learning Platform",
      slug: "elearning-platform",
      category: "Full Stack",
      date: "2025 - Present",
      description: "A live IELTS preparation platform: a Next.js 15 student portal, an Express + TypeScript API with Vimeo and Zoom streaming, and a React admin dashboard with analytics.",
      tags: ["#NextJS15", "#React19", "#Express", "#TypeScript"],
      github: "",
      live: "",
      icon: Globe,
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "group-hover:text-purple-400",
      accent: "text-purple-400"
    },
    {
      title: "Intrusion Detection",
      slug: "unsw-nb15-ids",
      category: "Research",
      date: "2025 - 2026",
      description: "A reproducible 18-experiment grid comparing class-imbalance strategies for binary and multiclass intrusion detection on UNSW-NB15. The paper is under peer review.",
      tags: ["#Python", "#XGBoost", "#ScikitLearn", "#SMOTE"],
      github: "https://github.com/ihmorol/unsw-nb15-handling-binary-multiclass-ids",
      live: "",
      icon: ShieldCheck,
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "group-hover:text-green-400",
      accent: "text-green-400"
    },
    {
      title: "Lorenz ODE Thesis",
      slug: "lorenz-ann-thesis",
      category: "Research",
      date: "2025 - Present",
      description: "My FYDP thesis: a controlled 69-run architecture search testing how well plain neural networks learn a coupled nonlinear ODE system, measured against a solver-verified ground truth.",
      tags: ["#PyTorch", "#NumPy", "#SciPy", "#ScientificML"],
      github: "https://github.com/ihmorol/fydp_workspace",
      live: "",
      icon: FlaskConical,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "Nanofluid Flow Model",
      slug: "ann-nanofluid-model",
      category: "Research",
      date: "2026",
      description: "A nine-layer neural network trained with Levenberg-Marquardt optimization to model hybrid nanofluid boundary layer flow and heat transfer, using about 32,400 physics-generated samples.",
      tags: ["#Python", "#DeepLearning", "#SciML", "#Physics"],
      github: "https://github.com/ihmorol/ann-hybrid-nanofluid-model",
      live: "",
      icon: Waves,
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "Meme Research Console",
      slug: "meme-research-console",
      category: "Research",
      date: "2026",
      description: "A live web instrument that collects human perception data on memes for an ongoing study, with structured response capture across meme categories.",
      tags: ["#TypeScript", "#NextJS", "#DataCollection"],
      github: "https://github.com/ihmorol/data-collection-web",
      live: "https://meme-console.vercel.app",
      icon: Database,
      color: "from-fuchsia-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-fuchsia-400",
      accent: "text-fuchsia-400"
    },
    {
      title: "BriefLi",
      slug: "briefli",
      category: "Tools",
      date: "2025 - Present",
      description: "My own shortlink dashboard, live at s.ihmorol.cv. It offers AI slug suggestions, public and personal link spaces, click tracking, and trash with restore.",
      tags: ["#React", "#TypeScript", "#Supabase", "#Vercel"],
      github: "https://github.com/ihmorol/briefli",
      live: "https://s.ihmorol.cv",
      icon: Link2,
      color: "from-amber-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-amber-400",
      accent: "text-amber-400"
    },
    {
      title: "Fall Detection",
      slug: "fall-detection-wearable",
      category: "Mobile & IoT",
      date: "2025",
      description: "A complete IoT system: Arduino wearable firmware in C++, a Python fall-classification model, a Node.js alert server, and a live web dashboard for caregivers.",
      tags: ["#Arduino", "#C++", "#Python", "#IoT"],
      github: "https://github.com/ihmorol/Fall_Detection_Wearable_Device",
      live: "",
      icon: Activity,
      color: "from-red-500/20 to-rose-500/20",
      hoverColor: "group-hover:text-red-400",
      accent: "text-red-400"
    },
    {
      title: "PrintSlot",
      slug: "printslot",
      category: "Mobile & IoT",
      date: "2026",
      description: "A mobile app for campus print shops. Students upload files, set print options, see the price, and book a pickup slot while the shop tracks each job through clear stages.",
      tags: ["#ReactNative", "#TypeScript", "#Mobile"],
      github: "https://github.com/ihmorol/PrintSlot",
      live: "",
      icon: Printer,
      color: "from-teal-500/20 to-emerald-500/20",
      hoverColor: "group-hover:text-teal-400",
      accent: "text-teal-400"
    },
    {
      title: "Skill Paradox",
      slug: "skill-paradox",
      category: "Full Stack",
      date: "2025",
      description: "A skill-swap platform where users list what they offer and what they need, browse categorized listings, and connect for exchanges. Includes profiles, moderation, and admin controls.",
      tags: ["#TypeScript", "#Express", "#React", "#MongoDB"],
      github: "https://github.com/ihmorol/skill-paradox-backend",
      live: "",
      icon: Users,
      color: "from-orange-500/20 to-amber-500/20",
      hoverColor: "group-hover:text-orange-400",
      accent: "text-orange-400"
    },
    {
      title: "VoiceKey",
      slug: "voicekey",
      category: "Systems",
      date: "2026",
      description: "Offline voice typing for Linux and Windows built on faster-whisper. It runs fully local for privacy and ships with a daemon mode, a CLI, model profiles, and an optional cloud fallback.",
      tags: ["#Python", "#Whisper", "#CLI", "#Linux"],
      github: "https://github.com/ihmorol/voicekey",
      live: "",
      icon: Mic,
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "group-hover:text-emerald-400",
      accent: "text-emerald-400"
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
      title: "Task Manager",
      slug: "task-manager-mobile",
      category: "Mobile & IoT",
      date: "2026",
      description: "A React Native and Expo task board with drag-and-drop status changes, deadline color coding, in-app notifications, and an activity log. Built spec-first, from PRD to release.",
      tags: ["#ReactNative", "#Expo", "#TypeScript"],
      github: "https://github.com/ihmorol/task-manager-mobile",
      live: "",
      icon: Smartphone,
      color: "from-sky-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-sky-400",
      accent: "text-sky-400"
    },
    {
      title: "Email Templates",
      slug: "email-template-generator",
      category: "Tools",
      date: "2026",
      description: "A live utility that generates reusable HTML email templates from configurable inputs, for clean transactional and marketing emails.",
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
      description: "The site you're reading: Next.js 14 and TypeScript with a custom design-token and motion system, a markdown blog pipeline, static generation, and a sitemap. Designed and built from scratch.",
      tags: ["#NextJS", "#TypeScript", "#Tailwind", "#FramerMotion"],
      github: "",
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
          description: "Legal help is intimidating and fragmented. Case tracking, document handling, and initial guidance all live in different places. We set out to bring them into one secure platform while coordinating five developers on a strict trimester deadline."
        },
        {
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "A React client backed by an Express + TypeScript service layer: JWT authentication, case and document APIs, smart intake processing, a legal database service, and AI-assisted insights. Clear module ownership and interface contracts kept all five developers unblocked."
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
          description: "Paying students depend on the platform daily. Video streaming, exam workflows, and payments have to keep working through every release, and the admin team needs full control without touching code."
        },
        {
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "Three cleanly separated apps share one typed API contract: OpenAPI documentation, Zod validation on every boundary, JWT auth, and test coverage on the server. Go-live checklists and systematic bug tracking keep production releases uneventful, which is the goal."
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
        description: "A commercial product with real users, run with real engineering discipline.",
        metrics: [
          { icon: 'devices', val: '3', label: 'Apps in Production', color: 'accent-blue', bg: 'bg-accent-blue/20' },
          { icon: 'verified', val: 'Zod', label: 'Validated API Boundaries', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'description', val: 'OpenAPI', label: 'Documented Endpoints', color: 'accent-peach', bg: 'bg-accent-peach/20' }
        ],
        testimonials: [
          {
            quote: "Operating software that students rely on changed how I write code. I validate everything, run checklists before deploys, and never let a failure pass silently.",
            author: "Personal Reflection"
          }
        ]
      }
    },
    "unsw-nb15-ids": {
      title: "Intrusion Detection",
      subtitle: "Class-imbalance baselines for network intrusion detection · paper under review",
      description: "A reproducible study of imbalance strategies for binary and multiclass IDS on UNSW-NB15.",
      heroDescription: "Accuracy is a misleading metric when the attack you care about is 0.07% of the traffic. This study runs an 18-experiment grid: two tasks (binary and multiclass), three models (LR, RF, XGBoost), and three imbalance strategies (none, class weighting, SMOTE). It includes explicit rare-class analysis on Worms and Shellcode, reports macro-F1, ROC-AUC, and G-Mean, and fits preprocessing only on training data to prevent leakage. The resulting paper is under peer review.",
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
          description: "Which class-imbalance strategy actually helps an IDS detect rare attacks, and does the answer change between binary and multiclass settings? Most published results hide this behind aggregate accuracy."
        },
        {
          title: "The Method",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "A fully reproducible experiment framework with fixed seeds, config snapshots, strict train/validation/test separation, and per-class metrics. The pipeline generates radar charts and faceted heatmaps directly from the results."
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
            quote: "The hard part of ML research is building an evaluation you can trust. Training the models is the easy bit.",
            author: "Research Takeaway"
          }
        ]
      }
    },
    "briefli": {
      title: "BriefLi",
      subtitle: "A shortlink manager I built and use every day",
      description: "A shortlink management dashboard with AI slug suggestions.",
      heroDescription: "BriefLi is my personal link infrastructure, running live at s.ihmorol.cv. It creates and organizes shortlinks with AI-suggested slugs, tracks clicks, separates public and personal link spaces behind auth, and supports soft delete with trash and restore. Built with React and TypeScript on Vite, a Vercel serverless API, and Supabase Postgres with schema migrations.",
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
      title: "Fall Detection",
      subtitle: "A complete IoT safety system, firmware to dashboard",
      description: "Wearable device that detects falls with ML and alerts caregivers in real time.",
      heroDescription: "A four-layer system built end to end. An Arduino-based wearable written in C++ streams motion sensor data, a Python machine learning model classifies falls versus normal activity, a Node.js server ingests events and triggers alerts, and a web dashboard gives caregivers live monitoring. One of the few student projects where hardware, ML, and web engineering all had to work together.",
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
          description: "Detecting a fall reliably from noisy accelerometer data, while keeping the pipeline fast enough that an alert reaches a caregiver when it matters."
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
            quote: "IoT projects punish hand-waving. Every layer either works or the demo fails in front of everyone.",
            author: "Personal Reflection"
          }
        ]
      }
    }
  }
};
