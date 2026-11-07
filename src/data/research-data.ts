export const researchData = {
  hero: {
    title: "Research",
    highlightedTitle: "& Publications",
    highlightIcon: "auto_stories",
    description: "Applied machine learning research in scientific computing and systems security, built on reproducible pipelines and verified baselines."
  },
  vision: {
    title: "Research Focus",
    description: "My research asks practical questions. Can physics residuals flag masquerade attacks in a vehicle network better than purely data-driven models? Can plain neural networks act as surrogates for differential equation solvers? Every study runs on a reproducible pipeline with fixed seeds, leakage-proof splits, and metrics chosen to expose weaknesses rather than hide them.",
    currentFocus: {
      title: "Current Focus",
      text: "Physics-Informed Neural Networks, Neural ODE Surrogates, ML for Cyber-Physical Systems"
    },
    longTermGoal: {
      title: "Long-term Goal",
      text: "Graduate research in applied ML & systems"
    },
    coreInterests: [
      "Physics-Informed Neural Networks",
      "Scientific Machine Learning",
      "ML for Cyber-Physical Systems",
      "AI-Generated Media Forensics",
      "Reproducible ML Pipelines"
    ]
  },
  topics: [
    "Physics-Informed NNs",
    "Neural ODE Surrogates",
    "Cyber-Physical Security",
    "Media Forensics",
    "Experiment Design",
    "Reproducibility"
  ],
  experience: {
    title: "Research Experience",
    items: [
      {
        role: "Undergraduate Thesis Researcher (Team Lead)",
        institution: "United International University · Team Paradox",
        advisor: "Dr. Muhammad Nomani Kabir",
        period: "2025 - Present",
        description: "Leading FYDP research on solving the Lorenz-1960 ODE system with optimal ANN architectures. I built a verified RK4/DOP853 ground-truth pipeline (agreement RMSE around 1.3e-11) and designed a controlled 69-run architecture and optimizer search. FYDP-I was defended in June 2026.",
        tags: ["Scientific ML", "PyTorch", "Numerical Methods"]
      },
      {
        role: "Independent Researcher",
        institution: "PINN-CPS-Robo · CAN Masquerade Attack Detection",
        advisor: "Self-directed",
        period: "2026",
        description: "Studying whether physics-residual signals detect CAN masquerade attacks on the ROAD dataset better than purely data-driven baselines, with attention to attack attribution.",
        tags: ["PINN", "Cyber-Physical Systems", "Python"]
      },
      {
        role: "Researcher",
        institution: "DT-NB Hybrid Study · ICEEICT 2027 Submission",
        advisor: "Self-directed",
        period: "2026",
        description: "Compared Naive Bayes instance filtering and decision-tree attribute weighting, separately and in both orders, with all supervised steps refit inside each training fold across ten seeds. Manuscript submitted to ICEEICT 2027.",
        tags: ["Weka", "Decision Trees", "Naive Bayes"]
      },
      {
        role: "Independent Researcher",
        institution: "AI-Generated Image Forensics",
        advisor: "Self-directed",
        period: "2026",
        description: "A pre-registered feature-level study of pixel-pattern, frequency, and combined feature sets for detecting AI-generated images under matched JPEG compression and unseen-generator shift.",
        tags: ["Forensics", "Computer Vision", "Python"]
      },
      {
        role: "Solo Reviewer",
        institution: "PINN Literature Review Dossier",
        advisor: "Self-directed",
        period: "2026",
        description: "A structured survey of physics-informed neural networks covering 2021-2026 plus pre-2021 anchors, formatted for Springer's Artificial Intelligence Review.",
        tags: ["Literature Review", "PINN", "Survey"]
      },
      {
        role: "Undergraduate Teaching Assistant",
        institution: "United International University",
        advisor: "CSE Department Faculty",
        period: "Aug 2025 - Present",
        description: "Supporting students in DBMS, DSA-I, ICS, and SWE lab courses. I run lab sessions and tutorials, review code, and grade assignments.",
        tags: ["Teaching", "DBMS", "DSA-I", "ICS", "SWE"]
      }
    ]
  },
  publications: {
    title: "Publications",
    items: [
      {
        title: "NB Instance Filtering and Tree-Based Attribute Weighting: A Hybrid Study on Noisy Tabular Data",
        status: "Submitted",
        statusColor: "text-amber-400 bg-amber-900/20 border-amber-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true }
        ],
        venue: "ICEEICT 2027",
        description: "A conference study comparing Naive Bayes instance filtering and decision-tree attribute selection/weighting, separately and in both orders, with all supervised steps refit inside each training fold and scored on held-out rows across ten seeds.",
        citations: 0,
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/dt-nb-noise-removal" }
        ]
      },
      {
        title: "Solving the Lorenz ODE System Using Optimal ANN Architectures",
        status: "Thesis · In Progress",
        statusColor: "text-blue-400 bg-blue-900/20 border-blue-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true },
          { name: "Md. Abu Bakar" },
          { name: "Samiur Rahman Omlan" },
          { name: "Fariha Islam" },
          { name: "Md. Touhidul Islam" }
        ],
        venue: "UIU Final Year Design Project · Supervisor: Dr. Muhammad Nomani Kabir",
        description: "Which feedforward architecture best approximates a coupled nonlinear ODE system when trained purely on data? A controlled 69-run search over depth (1-4), width (20-100), five activations, and three optimizers, benchmarked against published PINN and DeepONet results on a solver-verified ground truth.",
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/lorenz1960-pinn" }
        ]
      },
      {
        title: "ANN Modeling of Hybrid Nanofluid Boundary Layer Flow",
        status: "Research Project",
        statusColor: "text-green-400 bg-green-900/20 border-green-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true }
        ],
        venue: "Independent scientific ML project",
        description: "A nine-layer neural network trained with Levenberg-Marquardt optimization to model hybrid nanofluid flow and heat transfer over a stretching sheet. Trained on about 32,400 physics-generated samples and validated against numerical solutions with MSE, RMSE, and R² metrics.",
        links: []
      }
    ]
  },
  talks: {
    title: "Talks & Teaching",
    items: [
      {
        title: "FYDP-I Thesis Defense",
        event: "UIU CSE Department",
        action: "Jun 2026",
        icon: "co_present",
        link: "https://github.com/ihmorol/lorenz1960-pinn"
      },
      {
        title: "Lab Tutorial Sessions",
        event: "UIU TA · DBMS, DSA-I, ICS, SWE Labs",
        action: "Ongoing",
        icon: "school",
        link: "/contact"
      }
    ]
  },
  activeProjects: {
    title: "Active Research Areas",
    items: [
      {
        title: "Neural ODE Surrogates",
        description: "Training the 69-experiment grid for the Lorenz-1960 thesis: separating architecture effects from optimizer effects, benchmarked against the PINN literature.",
        year: "2025 - Present",
        gradient: "from-blue-900 to-slate-900",
        icon: "model_training",
        hoverColor: "group-hover:text-blue-400",
        buttonHover: "hover:bg-blue-400"
      },
      {
        title: "Physics-Residual Attack Detection",
        description: "Studying physics-residual signals for CAN masquerade detection on the ROAD dataset, and PINN-based shape optimization for small robots (PhORM).",
        year: "2026 - Present",
        gradient: "from-emerald-900 to-teal-900",
        icon: "security",
        hoverColor: "group-hover:text-emerald-400",
        buttonHover: "hover:bg-emerald-400"
      },
      {
        title: "AI-Generated Media Forensics",
        description: "A pre-registered feature-level study of which simple feature sets detect AI-generated images under matched compression and unseen generators.",
        year: "2026 - Present",
        gradient: "from-rose-900 to-red-900",
        icon: "image_search",
        hoverColor: "group-hover:text-rose-400",
        buttonHover: "hover:bg-rose-400"
      },
      {
        title: "Research Data Collection",
        description: "Built a live web instrument for collecting human perception data on memes for an ongoing research study.",
        year: "2026 - Present",
        gradient: "from-indigo-900 to-purple-900",
        icon: "dataset",
        hoverColor: "group-hover:text-purple-400",
        buttonHover: "hover:bg-purple-400"
      }
    ]
  },
  connect: {
    title: "Connect",
    description: "Open to research collaborations, grad school conversations, and project discussions."
  }
};
