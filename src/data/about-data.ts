export const aboutData = {
  hero: {
    titlePrefix: "About",
    titleHighlight: "Ikramul",
    description: "Final-year Computer Science student shipping production software and doing applied ML research. Based in Dhaka, aspiring globally."
  },
  intro: {
    badge: "Introduction",
    name: "Ikramul Hasan Moral",
    title: "Full-Stack Developer & ML Researcher",
    description: [
      "I started programming in 2022 with simple MERN apps and competitive programming problems. Four years later, I ship production platforms — a live three-app e-learning system serving real students, and Advyon, a legal-tech platform I led a 5-member team to build, winning Champion at the UIU CSE Project Show.",
      "I'm finishing my B.Sc. in Computer Science and Engineering at United International University with a 3.94 CGPA, holding a 100% merit scholarship for six terms (awarded to the top 3% each trimester). Alongside engineering, I've moved into research: my first paper — on handling class imbalance in network intrusion detection — is under peer review, and my thesis applies neural network architecture search to differential equation systems.",
      "As an Undergraduate Teaching Assistant, I help 100+ students master Data Structures & Algorithms and Database Management. I'm also an active competitive programmer with 500+ problems solved across Codeforces, LeetCode, and HackerRank."
    ],
    highlights: {
        title: "Key Highlights",
        items: [
            "3.94 CGPA at UIU",
            "6× 100% Merit Scholarship",
            "Research Paper Under Review",
            "2× Project Show Champion"
        ]
    },
    location: "Dhaka, Bangladesh",
    cvButton: "Download CV",
    status: "Open for Opportunities",
    profileImage: "/images/profile/image.jpeg"
  },
  values: [
    {
      title: "Problem Solving",
      description: "Breaking down complex problems into manageable pieces and finding efficient algorithmic solutions.",
      icon: "lightbulb",
      colorClass: "bg-[#4D96FF]"
    },
    {
      title: "Research Rigor",
      description: "Reproducible experiments, honest metrics, and verified baselines — the same discipline in research and in code.",
      icon: "science",
      colorClass: "bg-[#6BCB77]"
    },
    {
      title: "Ship Real Things",
      description: "From firmware to frontend — building products that real users depend on, not just demos.",
      icon: "rocket_launch",
      colorClass: "bg-[#FF6B6B]"
    }
  ],
  interests: {
    title: "Beyond Coding",
    icon: "local_fire_department",
    items: [
      { name: "Competitive Programming", icon: "emoji_events", colorClass: "text-[#FFD93D]" },
      { name: "Open Source", icon: "code", colorClass: "text-[#6BCB77]" },
      { name: "Tech Writing", icon: "edit_note", colorClass: "text-[#4D96FF]" },
      { name: "ML & Systems Research", icon: "science", colorClass: "text-[#FF6B6B]" }
    ]
  },
  philosophy: {
    title: "Philosophy",
    icon: "format_quote",
    quote: "The best way to learn is by building and teaching.",
    description: "I believe in learning through hands-on projects and solidifying knowledge by helping others understand complex concepts."
  },
  journey: {
    title: "My Journey",
    icon: "history_edu",
    items: [
        {
            period: '2026',
            role: 'First Research Paper Submitted',
            company: 'UNSW-NB15 Intrusion Detection Study',
            description: 'Submitted an ML paper on class-imbalanced intrusion detection for peer review; defended FYDP-I on neural ODE surrogates (Team Paradox, supervised by Dr. Muhammad Nomani Kabir).',
            color: 'bg-[#6BCB77]',
            textColor: 'text-[#6BCB77]',
            hoverColor: 'group-hover:text-[#6BCB77]',
            hoverBg: 'group-hover:bg-[#6BCB77]',
            active: true
        },
        {
            period: 'Aug 2025 - Present',
            role: 'Undergraduate Teaching Assistant',
            company: 'United International University',
            description: 'Assisting 100+ students in DSA and DBMS courses, designing assignments, and conducting tutorial sessions.',
            color: 'bg-[#FFD93D]',
            textColor: '',
            hoverColor: 'group-hover:text-[#FFD93D]',
            hoverBg: 'group-hover:bg-[#FFD93D]',
            active: false
        },
        {
            period: '2024 - 2025',
            role: '2× Champion at UIU',
            company: 'CSE Week Contest & SE Lab Project Show',
            description: 'Won the CSE Week Programming Contest (80+ participants), then led a 5-member team to Champion at the Software Engineering Lab Project Show with Advyon.',
            color: 'bg-[#4D96FF]',
            textColor: '',
            hoverColor: 'group-hover:text-[#4D96FF]',
            hoverBg: 'group-hover:bg-[#4D96FF]',
            active: false
        },
        {
            period: '2022 - Present',
            role: 'B.Sc. in CSE',
            company: 'United International University',
            description: 'Expected graduation December 2026. CGPA 3.94/4.0 with 100% Merit Scholarship for 6 terms.',
            color: 'bg-[#FF6B6B]',
            textColor: '',
            hoverColor: 'group-hover:text-[#FF6B6B]',
            hoverBg: 'group-hover:bg-[#FF6B6B]',
            active: false,
            isEducation: true
        }
    ]
  },
  techStack: {
      title: "Tech Proficiency",
      items: [
        'React / Next.js',
        'Node.js / NestJS',
        'TypeScript',
        'MongoDB / PostgreSQL',
        'Python / PyTorch',
        'Docker / CI/CD',
      ]
  },
  connect: {
      title: "Let's Connect",
      description: "Interested in collaboration or just want to say hi? I'd love to hear from you!",
      cta: "Send Email",
      email: "mailto:ihmorol@gmail.com",
      socialTitle: "Social Channels",
      socialDescription: "Find me across the web",
      socials: [
        { name: "GitHub", url: "https://github.com/ihmorol", icon: "github", color: "bg-[#171544]", shadow: "shadow-[#171544]/20" },
        { name: "LinkedIn", url: "https://linkedin.com/in/ihmorol", icon: "linkedin", color: "bg-[#0077B5]", shadow: "shadow-[#0077B5]/20" },
        { name: "Email", url: "mailto:ihmorol@gmail.com", icon: "mail", color: "bg-[#EA4335]", shadow: "shadow-[#EA4335]/20" }
      ]
  }
};
