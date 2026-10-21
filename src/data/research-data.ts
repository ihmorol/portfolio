export const researchData = {
  hero: {
    title: "Research",
    highlightedTitle: "& Publications",
    highlightIcon: "auto_stories",
    description: "Applied machine-learning research in scientific computing and image analysis, built on reproducible pipelines and verified baselines."
  },
  vision: {
    title: "Research Focus",
    description: "My research asks practical questions. Can a neural network stand in for a differential-equation solver if it only ever sees the equations? Which simple image features actually reveal an AI-generated picture? Every study runs on a reproducible pipeline with fixed seeds, leakage-proof splits, and metrics chosen to expose weaknesses rather than hide them.",
    currentFocus: {
      title: "Current Focus",
      text: "Physics-Informed Neural Networks, Image Forensics"
    },
    longTermGoal: {
      title: "Long-term Goal",
      text: "Graduate research in applied ML & systems"
    },
    coreInterests: [
      "Physics-Informed Neural Networks",
      "Scientific Machine Learning",
      "Image Forensics",
      "Reproducible ML Pipelines",
      "Experiment Design"
    ]
  },
  topics: [
    "Physics-Informed Neural Nets",
    "Scientific ML",
    "Image Forensics",
    "Experiment Design",
    "Reproducibility",
    "Class-Imbalanced Learning"
  ],
  experience: {
    title: "Research Experience",
    items: [
      {
        role: "Undergraduate Thesis Researcher (Team Lead)",
        institution: "United International University · Team Paradox",
        advisor: "Dr. Muhammad Nomani Kabir",
        period: "2025 - Present",
        description: "Leading FYDP research on the Lorenz-1960 ODE system. After defending FYDP-I in June 2026 on a verified RK4/DOP853 ground-truth pipeline (agreement RMSE around 1.3e-11), FYDP-II trains a physics-informed neural network that reproduces the system to about five decimal places from the governing equations alone, with no training data.",
        tags: ["Scientific ML", "PINNs", "PyTorch", "Numerical Methods"]
      },
      {
        role: "Independent ML Researcher",
        institution: "UNSW-NB15 Intrusion Detection Study",
        advisor: "Self-directed",
        period: "2025 - 2026",
        description: "Designed and ran a reproducible 18-experiment grid (binary and multiclass, three models, three imbalance strategies) on UNSW-NB15, focusing on rare attack classes like Worms (0.07%) with macro-F1, ROC-AUC, and G-Mean. A self-directed study to learn how to build a trustworthy ML evaluation, not a publication.",
        tags: ["IDS", "Class Imbalance", "scikit-learn", "XGBoost"]
      },
      {
        role: "Undergraduate Teaching Assistant",
        institution: "United International University",
        advisor: "CSE Department Faculty",
        period: "Aug 2025 - Present",
        description: "Helping 100+ students in Data Structures & Algorithms and Database Management courses. I run tutorial sessions and grade assignments.",
        tags: ["Teaching", "DSA", "DBMS"]
      }
    ]
  },
  publications: {
    title: "Publications",
    items: [
      {
        title: "Handling Class Imbalance in UNSW-NB15: Reproducible Baselines for Binary and Multiclass Intrusion Detection",
        status: "Methodology Study · Unpublished",
        statusColor: "text-text-muted bg-foreground/5 border-border",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true }
        ],
        venue: "Self-directed study, 2026",
        description: "An 18-experiment evaluation of class-imbalance strategies (no balancing, class weighting, SMOTE) across logistic regression, random forest, and XGBoost. It includes explicit rare-class analysis (Worms: 0.07%, Shellcode: 0.65%) using macro-F1, ROC-AUC, and G-Mean on a leakage-proof, fully reproducible pipeline. Built to learn rigorous ML evaluation, not for publication.",
        citations: 0,
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/unsw-nb15-handling-binary-multiclass-ids" }
        ]
      },
      {
        title: "Solving the Lorenz-1960 ODE System with a Physics-Informed Neural Network",
        status: "Thesis · FYDP-II",
        statusColor: "text-blue-400 bg-blue-900/20 border-blue-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true },
          { name: "Md. Abu Bakar" },
          { name: "Samiur Rahman Omlan" },
          { name: "Fariha Islam" },
          { name: "Md. Touhidul Islam" }
        ],
        venue: "UIU Final Year Design Project · Supervisor: Dr. Muhammad Nomani Kabir",
        description: "Can a neural network solve a coupled nonlinear ODE system from the equations alone? The model is trained only on the ODE residual, never on solver output, and reproduces the Lorenz-1960 trajectory to about five decimal places, verified against an RK4 and SciPy DOP853 baseline (agreement RMSE around 1.3e-11).",
        links: [
          { label: "Workspace", icon: "folder", url: "https://github.com/ihmorol/fydp_workspace" }
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
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/ann-hybrid-nanofluid-model" }
        ]
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
        link: "https://github.com/ihmorol/fydp_workspace"
      },
      {
        title: "Data Structures & Algorithms",
        event: "UIU TA Tutorial Sessions",
        action: "Ongoing",
        icon: "school",
        link: "/contact"
      },
      {
        title: "Database Management",
        event: "UIU TA Tutorial Sessions",
        action: "Ongoing",
        icon: "storage",
        link: "/contact"
      }
    ]
  },
  activeProjects: {
    title: "Active Research Areas",
    items: [
      {
        title: "Physics-Informed Neural Nets",
        description: "The Lorenz-1960 thesis: the equation residual is the only training signal, and a solver-verified reference is used only to score the model after training.",
        year: "2025 - Present",
        gradient: "from-blue-900 to-slate-900",
        icon: "model_training",
        hoverColor: "group-hover:text-blue-400",
        buttonHover: "hover:bg-blue-400"
      },
      {
        title: "Spectral-Spatial Image Forensics",
        description: "A feature-level study of which simple image statistics, spatial or spectral, separate real photos from AI-generated ones, and how well that holds under compression and an unseen generator.",
        year: "2026",
        gradient: "from-fuchsia-900 to-purple-900",
        icon: "image_search",
        hoverColor: "group-hover:text-fuchsia-400",
        buttonHover: "hover:bg-fuchsia-400"
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
