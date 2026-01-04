export const researchData = {
  hero: {
    title: "Research",
    highlightedTitle: "& Publications",
    highlightIcon: "auto_stories",
    description: "Exploring the intersection of artificial intelligence, human-computer interaction, and data visualization to build smarter, more accessible systems."
  },
  vision: {
    title: "Research Vision",
    description: "My research focuses on developing interpretable machine learning models that can be seamlessly integrated into high-stakes decision-making processes. I aim to bridge the gap between complex algorithms and human understanding.",
    currentFocus: {
      title: "Current Focus",
      text: "Explainable AI, Causality"
    },
    longTermGoal: {
      title: "Long-term Goal",
      text: "Human-AI Collaboration"
    },
    coreInterests: [
      "Deep Learning",
      "HCI",
      "Visual Analytics",
      "Cognitive Science",
      "Ethics in AI"
    ]
  },
  topics: [
    "Computer Vision",
    "NLP",
    "Reinforcement Learning",
    "Fairness",
    "Robotics",
    "Graph Neural Networks"
  ],
  experience: {
    title: "Research Experience",
    items: [
      {
        role: "Postdoctoral Researcher",
        institution: "MIT CSAIL",
        advisor: "Prof. Jane Doe",
        period: "2022 - Present",
        description: "Leading research on multi-modal learning for healthcare diagnostics. Developed a novel framework for integrating genomic data with medical imaging.",
        tags: ["PyTorch", "Healthcare"]
      },
      {
        role: "Graduate Research Assistant",
        institution: "Stanford University",
        advisor: "Prof. John Smith",
        period: "2018 - 2022",
        description: "Focused on robust optimization for large-scale networks. Published 3 first-author papers at top-tier conferences (NeurIPS, ICML).",
        tags: ["Optimization", "Network Theory"]
      }
    ]
  },
  publications: {
    title: "Selected Publications",
    items: [
      {
        title: "Attention is All You Need: A Revisit",
        status: "Accepted",
        statusColor: "text-green-400 bg-green-900/20 border-green-900/30",
        authors: [
          { name: "A. Vaswani", isMe: false },
          { name: "Y. Name", isMe: true }, // Placeholder for portfolio owner
          { name: "N. Parmar", isMe: false },
          { name: "J. Uszkoreit", isMe: false }
        ],
        venue: "NeurIPS 2023 (Oral Presentation)",
        description: "We propose a novel architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
        citations: 142,
        links: [
          { label: "PDF", icon: "picture_as_pdf" },
          { label: "Code", icon: "code" },
          { label: "DOI", icon: "link" }
        ]
      },
      {
        title: "Generative Adversarial Networks for Climate Modeling",
        status: "Under Review",
        statusColor: "text-amber-400 bg-amber-900/20 border-amber-900/30",
        authors: [
          { name: "Y. Name", isMe: true },
          { name: "I. Goodfellow", isMe: false },
          { name: "Y. Bengio", isMe: false }
        ],
        venue: "ICLR 2024",
        description: "Applying GANs to generate high-resolution climate scenarios from low-resolution simulation data, improving prediction accuracy by 15%.",
        links: [
          { label: "arXiv", icon: "description" },
          { label: "Data", icon: "dataset" }
        ]
      }
    ]
  },
  talks: {
    title: "Posters & Talks",
    items: [
      {
        title: "AI for Social Good",
        event: "NeurIPS Workshop 2023",
        action: "View Poster",
        icon: "open_in_new",
        link: "#"
      },
      {
        title: "Trustworthy ML Systems",
        event: "Guest Lecture, UCB",
        action: "Download Slides",
        icon: "download",
        link: "#"
      },
      {
        title: "Visualizing High-Dim Data",
        event: "IEEE VIS 2022",
        action: "Watch Recording",
        icon: "play_circle",
        link: "#"
      }
    ]
  },
  activeProjects: {
    title: "Active Projects",
    items: [
      {
        title: "Project Nexus",
        description: "Investigating the scalability of decentralized learning algorithms in resource-constrained environments.",
        year: "2023 - Present",
        gradient: "from-blue-900 to-slate-900",
        icon: "hub",
        hoverColor: "group-hover:text-blue-400",
        buttonHover: "hover:bg-blue-400"
      },
      {
        title: "EcoSense AI",
        description: "Developing low-power computer vision models for wildlife monitoring in remote conservation areas.",
        year: "2022 - 2023",
        gradient: "from-emerald-900 to-teal-900",
        icon: "eco",
        hoverColor: "group-hover:text-emerald-400",
        buttonHover: "hover:bg-emerald-400"
      },
      {
        title: "PolyGlot-XL",
        description: "Benchmarking large language models across 50+ low-resource languages to improve inclusivity.",
        year: "2023",
        gradient: "from-indigo-900 to-purple-900",
        icon: "language",
        hoverColor: "group-hover:text-purple-400",
        buttonHover: "hover:bg-purple-400"
      }
    ]
  },
  connect: {
    title: "Connect",
    description: "Open to research collaborations and speaking opportunities."
  }
};
