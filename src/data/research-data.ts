export const researchData = {
  hero: {
    title: "Research",
    highlightedTitle: "& Publications",
    highlightIcon: "auto_stories",
    description: "Applied machine learning research at the intersection of network security and scientific computing — with an emphasis on reproducibility, honest metrics, and verified baselines."
  },
  vision: {
    title: "Research Focus",
    description: "My research asks practical questions with rigorous methods: How should intrusion detection systems handle severely imbalanced attack classes? Can plain neural networks act as surrogates for differential equation solvers? Every study is built on reproducible pipelines — fixed seeds, leakage-proof splits, and metrics that don't hide behind accuracy.",
    currentFocus: {
      title: "Current Focus",
      text: "ML for Network Security, Neural ODE Surrogates"
    },
    longTermGoal: {
      title: "Long-term Goal",
      text: "Graduate research in applied ML & systems"
    },
    coreInterests: [
      "Intrusion Detection Systems",
      "Class-Imbalanced Learning",
      "Scientific Machine Learning",
      "ANN Architecture Search",
      "Reproducible ML Pipelines"
    ]
  },
  topics: [
    "Network Security ML",
    "Class Imbalance",
    "Neural ODE Surrogates",
    "Architecture Search",
    "Experiment Design",
    "Reproducibility"
  ],
  experience: {
    title: "Research Experience",
    items: [
      {
        role: "Undergraduate Thesis Researcher (Team Lead)",
        institution: "United International University — Team Paradox",
        advisor: "Dr. Muhammad Nomani Kabir",
        period: "2025 - Present",
        description: "Leading FYDP research on solving the Lorenz-1960 ODE system with optimal ANN architectures. Built a verified RK4/DOP853 ground-truth pipeline (agreement RMSE ≈ 1.3e-11) and designed a controlled 69-run architecture and optimizer search. FYDP-I defended June 2026.",
        tags: ["Scientific ML", "PyTorch", "Numerical Methods"]
      },
      {
        role: "Independent ML Researcher",
        institution: "UNSW-NB15 Intrusion Detection Study",
        advisor: "Self-directed",
        period: "2025 - 2026",
        description: "Designed and ran a reproducible 18-experiment grid (binary + multiclass × LR/RF/XGBoost × three imbalance strategies) on UNSW-NB15, focusing on rare attack classes like Worms (0.07%) with macro-F1, ROC-AUC, and G-Mean. Paper submitted for peer review.",
        tags: ["IDS", "Class Imbalance", "scikit-learn", "XGBoost"]
      },
      {
        role: "Undergraduate Teaching Assistant",
        institution: "United International University",
        advisor: "CSE Department Faculty",
        period: "Aug 2025 - Present",
        description: "Assisting 100+ students in Data Structures & Algorithms and Database Management courses. Conducting tutorial sessions and grading assignments.",
        tags: ["Teaching", "DSA", "DBMS"]
      }
    ]
  },
  publications: {
    title: "Publications & Research Work",
    items: [
      {
        title: "Handling Class Imbalance in UNSW-NB15: Reproducible Baselines for Binary and Multiclass Intrusion Detection",
        status: "Under Review",
        statusColor: "text-amber-400 bg-amber-900/20 border-amber-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true }
        ],
        venue: "Submitted for peer review, 2026",
        description: "A systematic 18-experiment evaluation of class-imbalance strategies (no balancing, class weighting, SMOTE) across logistic regression, random forest, and XGBoost — with explicit rare-class analysis (Worms: 0.07%, Shellcode: 0.65%) using macro-F1, ROC-AUC, and G-Mean, on a leakage-proof, fully reproducible pipeline.",
        citations: 0,
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/unsw-nb15-handling-binary-multiclass-ids" }
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
        description: "Which feedforward architecture best approximates a coupled nonlinear ODE system when trained purely on data? A controlled 69-run search over depth (1-4), width (20-100), five activations, and three optimizers — benchmarked against published PINN/DeepONet results, on a solver-verified ground truth.",
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
        description: "A 9-layer neural network trained with Levenberg-Marquardt optimization to model hybrid nanofluid flow and heat transfer over a stretching sheet, trained on ~32,400 physics-generated samples and validated against numerical solutions with MSE/RMSE/R² metrics.",
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
        title: "Neural ODE Surrogates",
        description: "Training the 69-experiment grid for the Lorenz-1960 thesis: architecture effects vs optimizer effects, benchmarked against PINN literature.",
        year: "2025 - Present",
        gradient: "from-blue-900 to-slate-900",
        icon: "model_training",
        hoverColor: "group-hover:text-blue-400",
        buttonHover: "hover:bg-blue-400"
      },
      {
        title: "ML for Network Security",
        description: "Extending the UNSW-NB15 baseline study — richer imbalance strategies, cost-sensitive learning, and cross-dataset generalization.",
        year: "2025 - Present",
        gradient: "from-emerald-900 to-teal-900",
        icon: "security",
        hoverColor: "group-hover:text-emerald-400",
        buttonHover: "hover:bg-emerald-400"
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
