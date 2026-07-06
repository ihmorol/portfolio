export const skillsData = {
  header: {
    titlePrefix: "My",
    titleIcon: "local_fire_department",
    titleSuffix: "Expertise"
  },
  programmingLanguages: {
    title: "Programming Languages",
    description: "The languages I work in most: TypeScript for production apps, Python for research, and C++ for contests.",
    languages: [
      {
        name: "JavaScript / TypeScript",
        years: "4 Years",
        usage: "Production Full-Stack Development",
        percentage: 90,
        colorClass: "bg-blue-500"
      },
      {
        name: "Python",
        years: "2 Years",
        usage: "ML Research, Data Pipelines, Scripting",
        percentage: 85,
        colorClass: "bg-green-500"
      },
      {
        name: "C++",
        years: "4 Years",
        usage: "Competitive Programming, DSA, Firmware",
        percentage: 80,
        colorClass: "bg-purple-500"
      },
      {
        name: "Java",
        years: "2 Years",
        usage: "OOP, Design Patterns, Desktop Apps",
        percentage: 70,
        colorClass: "bg-orange-500"
      }
    ],
    projects: [
      {
        icon: "TS",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "E-Learning Platform",
        description: "Three live apps: a Next.js 15 portal, an Express + TS API, and a React admin dashboard."
      },
      {
        icon: "PY",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        title: "Intrusion Detection Research",
        description: "The reproducible ML experiment grid behind my paper, now under peer review."
      }
    ]
  },
  aiMl: {
    title: "AI & Machine Learning",
    description: "Controlled experiments and reproducible pipelines, with metrics chosen to hold up under review.",
    items: [
      {
        name: "PyTorch",
        icon: "model_training",
        iconColor: "text-orange-400",
        hoverBorder: "hover:border-orange-500/50",
        description: "Neural network training for my thesis: ANN architecture search over ODE systems."
      },
      {
        name: "scikit-learn & XGBoost",
        icon: "psychology",
        iconColor: "text-green-400",
        hoverBorder: "hover:border-green-500/50",
        description: "Classical ML baselines, class-imbalance strategies (SMOTE, weighting), model comparison."
      },
      {
        name: "Pandas & NumPy / SciPy",
        icon: "dataset",
        iconColor: "text-cyan-400",
        hoverBorder: "hover:border-cyan-500/50",
        description: "Data pipelines, feature engineering, and numerical methods (RK4, ODE solvers)."
      },
      {
        name: "Experiment Design",
        icon: "science",
        iconColor: "text-purple-400",
        hoverBorder: "hover:border-purple-500/50",
        description: "Seeded, leakage-proof, config-driven experiment grids with automated result visualization."
      }
    ]
  },
  currentlyLearning: {
    title: "Currently Learning",
    items: [
      {
        name: "Deep Learning",
        topic: "PINNs & Operator Learning",
        percentage: 55,
        colorClass: "bg-purple-500"
      },
      {
        name: "System Design",
        topic: "Scalable Architecture",
        percentage: 50,
        colorClass: "bg-blue-500"
      },
      {
        name: "DevOps",
        topic: "Docker & CI/CD Pipelines",
        percentage: 45,
        colorClass: "bg-cyan-500"
      }
    ]
  },
  webMobile: {
    title: "Web & Mobile",
    frontend: {
      title: "Frontend",
      items: [
        { name: "React 19 / Next.js 15", colorClass: "bg-blue-400" },
        { name: "Tailwind CSS / Radix UI", colorClass: "bg-blue-400" },
        { name: "Zustand / TanStack Query", colorClass: "bg-blue-400" }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { name: "Node.js / Express / NestJS", colorClass: "bg-green-400" },
        { name: "MongoDB / PostgreSQL / Supabase", colorClass: "bg-green-400" },
        { name: "REST / OpenAPI / Zod / JWT", colorClass: "bg-green-400" }
      ]
    },
    mobile: {
      title: "Mobile & Real-Time",
      items: [
        "React Native / Expo",
        "WebRTC / Socket.io",
        "Redis"
      ]
    }
  },
  devOps: {
    title: "DevOps & Tools",
    ciCd: {
      title: "Deployment & Cloud",
      items: [
        { name: "Vercel", icon: "deployed_code" },
        { name: "Railway", icon: "train" },
        { name: "GitHub Actions", icon: "rocket_launch" },
        { name: "Docker", icon: "package_2" }
      ]
    },
    environment: {
      title: "Development Environment",
      items: [
        { name: "Git / GitHub", colorClass: "bg-yellow-400" },
        { name: "VS Code", colorClass: "bg-yellow-400" },
        { name: "Postman / Swagger", colorClass: "bg-yellow-400" },
        { name: "Linux / WSL", colorClass: "bg-yellow-400" }
      ]
    }
  },
  certifications: [
    {
      code: "UIU",
      codeBg: "bg-blue-500/20",
      codeColor: "text-blue-400",
      title: "100% Merit Scholarship",
      hoverColor: "group-hover:text-blue-400",
      issuer: "United International University • 6 Terms (Top 3%)"
    },
    {
      code: "ML",
      codeBg: "bg-purple-500/20",
      codeColor: "text-purple-400",
      title: "Research Paper Under Review",
      hoverColor: "group-hover:text-purple-400",
      issuer: "Class-Imbalanced Intrusion Detection • 2026"
    },
    {
      code: "DSA",
      codeBg: "bg-green-500/20",
      codeColor: "text-green-400",
      title: "500+ Problems Solved",
      hoverColor: "group-hover:text-green-400",
      issuer: "Codeforces, LeetCode, HackerRank • Ongoing"
    }
  ],
  softSkills: {
    title: "Soft Skills",
    skills: ['Team Leadership', 'Teaching & Mentorship', 'Problem Solving', 'Technical Writing', 'Research Communication', 'Time Management', 'Collaboration'],
    quote: "\"The best way to learn is to teach.\" TA work and peer mentoring have made me better at both."
  }
};
