export const nowData = {
  header: {
    titlePrefix: "What I'm",
    titleHighlight: "Now",
    titleSuffix: "Doing",
    description: "A live snapshot of what I'm building, teaching, and researching. Updated as things change, not on a schedule."
  },
  updatedAt: "November 2026",
  status: {
    label: "Current Status",
    location: "Dhaka, Bangladesh",
    availability: "Open for opportunities",
    availabilityIcon: "work"
  },
  sections: [
    {
      title: "Building",
      icon: "rocket_launch",
      colorClass: "text-accent-blue",
      items: [
        "Engineering the RimonsIELTS e-learning platform solo and remote: student portal, REST API, admin dashboard, and a Python central service, all live in production.",
        "Building out Shera Bot, my multi-agent prototype with approval-gated actions, and maintaining my own tools: BriefLi shortlinks, VoiceKey offline voice typing, ODE 3D Orbit, and this portfolio."
      ]
    },
    {
      title: "Teaching",
      icon: "school",
      colorClass: "text-accent-yellow",
      items: [
        "Undergraduate Teaching Assistant at UIU (since Aug 2025), supporting DBMS, DSA-I, ICS, and SWE lab courses with weekly lab sessions, office hours, and code reviews."
      ]
    },
    {
      title: "Researching",
      icon: "science",
      colorClass: "text-accent-green",
      items: [
        "FYDP-II is defended and the Lorenz-1960 PINN paper is submitted to ICEEICT 2027: a network trained on the ODE residual alone, within 3e-05 of a DOP853 reference without ever seeing the answer.",
        "Solving boundary-layer problems with new equation systems, and working with PINNs across areas: windowed training with causal residual weighting for longer horizons, CAN masquerade attack detection on the ROAD dataset, and shape optimization for small robots.",
        "The DT-NB hybrid study manuscript is written but not submitted anywhere yet, and the PINN survey dossier for Artificial Intelligence Review is in progress."
      ]
    },
    {
      title: "Learning",
      icon: "auto_stories",
      colorClass: "text-accent-red",
      items: [
        "Where PINNs hold up and where they break: long horizons, stiff systems, and boundary-value problems, through my own experiments rather than just reading.",
        "System design and Docker/CI pipelines for the production work."
      ]
    },
    {
      title: "Also Worth Knowing",
      icon: "handshake",
      colorClass: "text-accent-coral",
      items: [
        "All of my projects are open source because I like open source. To be clear about my place in it: I have not contributed to anyone else's project yet. Everything in my repos is mine."
      ]
    }
  ],
  cta: {
    title: "That's the present tense.",
    description: "If you want the longer version of any of this, the about and research pages have it, or just ask me directly.",
    buttonText: "Get in Touch"
  }
};
