export const researchData = {
  hero: {
    title: "Research",
    highlightedTitle: "& Publications",
    highlightIcon: "auto_stories",
    description: "Applied machine learning research in scientific computing and systems security, built on reproducible pipelines and verified baselines."
  },
  vision: {
    title: "Research Focus",
    description: "My research asks practical questions. Can physics residuals flag masquerade attacks in a vehicle network better than purely data-driven models? Can a network trained on the residual of an ODE alone, never shown the answer, recover the solution? Every study runs on a reproducible pipeline with fixed seeds, leakage-proof splits, and metrics chosen to expose weaknesses rather than hide them.",
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
        description: "Leading FYDP research on the Lorenz-1960 ODE system. The current method is a physics-informed network trained on the ODE residual alone with a hard-constrained initial condition: 11,283 parameters, within 3e-05 of a DOP853 reference, trained in under six CPU minutes. Around it sit a nine-architecture sweep, a windowed PINN study with causal residual weighting for longer horizons, and the ICEEICT 2027 manuscript. FYDP-II defended.",
        tags: ["PINN", "Scientific ML", "PyTorch", "Numerical Methods"]
      },
      {
        role: "Independent Researcher",
        institution: "PINN-CPS-Robo · CAN Masquerade Attack Detection",
        advisor: "Self-directed",
        period: "2026 - Present",
        description: "Studying whether physics-residual signals detect CAN masquerade attacks on the ROAD dataset better than purely data-driven baselines, with attention to attack attribution.",
        tags: ["PINN", "Cyber-Physical Systems", "Python"]
      },
      {
        role: "Researcher",
        institution: "DT-NB Hybrid Study",
        advisor: "Self-directed",
        period: "2026",
        description: "Compared Naive Bayes instance filtering and decision-tree attribute weighting, separately and in both orders, with all supervised steps refit inside each training fold across ten seeds. Manuscript written; not yet submitted to a conference.",
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
        status: "Manuscript in Preparation",
        statusColor: "text-amber-400 bg-amber-900/20 border-amber-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true }
        ],
        venue: "Self-directed study · Manuscript written, not yet submitted",
        description: "A conference-ready study comparing Naive Bayes instance filtering and decision-tree attribute selection/weighting, separately and in both orders, with all supervised steps refit inside each training fold and scored on held-out rows across ten seeds. The manuscript is complete but has not been submitted to a conference.",
        citations: 0,
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/dt-nb-noise-removal" }
        ]
      },
      {
        title: "Lorenz-1960 PINN: Solving the ODE System from the Equations Alone",
        status: "Defended · Submitted to ICEEICT 2027",
        statusColor: "text-green-400 bg-green-900/20 border-green-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true },
          { name: "Md. Abu Bakar" },
          { name: "Samiur Rahman Omlan" },
          { name: "Fariha Islam" },
          { name: "Md. Touhidul Islam" }
        ],
        venue: "UIU Final Year Design Project · Supervisor: Dr. Muhammad Nomani Kabir",
        description: "A physics-informed network with a hard-constrained initial condition, trained on the ODE residual alone with no data, lands within 3e-05 of a DOP853 reference in under six CPU minutes. A nine-architecture sweep and a windowed causal-weighting study for longer horizons sit alongside the run of record. Sixteen paper runs plus sixteen windowed models are archived with SHA-256 verification, and the manuscript is submitted to ICEEICT 2027.",
        links: [
          { label: "Code", icon: "code", url: "https://github.com/ihmorol/lorenz1960-pinn" },
          { label: "Windowed Study", icon: "code", url: "https://github.com/ihmorol/lorenz1960-windowed-pinn" }
        ]
      },
      {
        title: "ANN Modeling of Hybrid Nanofluid Boundary Layer Flow",
        status: "Active · Extending to New Equations",
        statusColor: "text-green-400 bg-green-900/20 border-green-900/30",
        authors: [
          { name: "Ikramul Hasan Moral", isMe: true }
        ],
        venue: "Independent scientific ML project",
        description: "A nine-layer neural network trained with Levenberg-Marquardt optimization to model hybrid nanofluid flow and heat transfer over a stretching sheet, validated against numerical solutions with MSE, RMSE, and R-squared metrics. The boundary-layer direction is active again, now aimed at new equation systems.",
        links: []
      }
    ]
  },
  talks: {
    title: "Talks & Teaching",
    items: [
      {
        title: "FYDP-I & FYDP-II Thesis Defenses",
        event: "UIU CSE Department",
        action: "2026",
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
        title: "PINNs on New Equations",
        description: "Extending the defended Lorenz-1960 thesis: windowed PINNs with causal residual weighting for longer horizons, and boundary-layer problems with new equation systems.",
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
