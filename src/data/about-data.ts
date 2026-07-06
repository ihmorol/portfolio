export const aboutData = {
  hero: {
    titlePrefix: "About",
    titleHighlight: "Ikramul",
    description: "Final-year computer science student in Dhaka. I ship production software and do applied machine learning research."
  },
  intro: {
    badge: "Introduction",
    name: "Ikramul Hasan Moral",
    title: "Full-Stack Developer & ML Researcher",
    description: [
      "I started programming in 2022 with simple MERN apps and competitive programming problems. Since then I've shipped real products: a live three-app e-learning platform that students use every day, and Advyon, a legal-tech platform built by a five-member team I led to Champion at the UIU CSE Project Show.",
      "I'm finishing my B.Sc. in Computer Science and Engineering at United International University with a 3.94 CGPA and a 100% merit scholarship for six straight terms, awarded to the top 3% each trimester. Lately I've moved into research. My first paper, on handling class imbalance in network intrusion detection, is under peer review, and my thesis applies neural network architecture search to differential equation systems.",
      "As an undergraduate teaching assistant I help over 100 students with Data Structures & Algorithms and Database Management. I also compete regularly, with 500+ problems solved on Codeforces, LeetCode, and HackerRank."
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
      description: "Five hundred solved contest problems taught me to break a hard problem into small pieces before writing any code.",
      icon: "lightbulb",
      colorClass: "bg-accent-blue"
    },
    {
      title: "Research Rigor",
      description: "Reproducible experiments, verified baselines, and metrics I can defend under questioning. The same discipline applies to my code.",
      icon: "science",
      colorClass: "bg-accent-green"
    },
    {
      title: "Ship Real Things",
      description: "I build software people actually rely on, whether that means wearable firmware, a REST API, or a student portal.",
      icon: "rocket_launch",
      colorClass: "bg-accent-red"
    }
  ],
  interests: {
    title: "Beyond Coding",
    icon: "local_fire_department",
    items: [
      { name: "Competitive Programming", icon: "emoji_events", colorClass: "text-accent-yellow" },
      { name: "Open Source", icon: "code", colorClass: "text-accent-green" },
      { name: "Tech Writing", icon: "edit_note", colorClass: "text-accent-blue" },
      { name: "ML & Systems Research", icon: "science", colorClass: "text-accent-red" }
    ]
  },
  philosophy: {
    title: "Philosophy",
    icon: "format_quote",
    quote: "The best way to learn is by building and teaching.",
    description: "I learn by building things, then teaching them. Explaining a concept to a struggling student is the fastest way to find the gaps in my own understanding."
  },
  journey: {
    title: "My Journey",
    icon: "history_edu",
    items: [
        {
            period: '2026',
            role: 'First Research Paper Submitted',
            company: 'UNSW-NB15 Intrusion Detection Study',
            description: 'Submitted an ML paper on class-imbalanced intrusion detection for peer review and defended FYDP-I on neural ODE surrogates (Team Paradox, supervised by Dr. Muhammad Nomani Kabir).',
            color: 'bg-accent-green',
            textColor: 'text-accent-green',
            hoverColor: 'group-hover:text-accent-green',
            hoverBg: 'group-hover:bg-accent-green',
            active: true
        },
        {
            period: 'Aug 2025 - Present',
            role: 'Undergraduate Teaching Assistant',
            company: 'United International University',
            description: 'Helping 100+ students in DSA and DBMS courses. I design assignments and run tutorial sessions.',
            color: 'bg-accent-yellow',
            textColor: '',
            hoverColor: 'group-hover:text-accent-yellow',
            hoverBg: 'group-hover:bg-accent-yellow',
            active: false
        },
        {
            period: '2024 - 2025',
            role: '2× Champion at UIU',
            company: 'CSE Week Contest & SE Lab Project Show',
            description: 'Won the CSE Week Programming Contest against 80+ participants, then led a five-member team to Champion at the Software Engineering Lab Project Show with Advyon.',
            color: 'bg-accent-blue',
            textColor: '',
            hoverColor: 'group-hover:text-accent-blue',
            hoverBg: 'group-hover:bg-accent-blue',
            active: false
        },
        {
            period: '2022 - Present',
            role: 'B.Sc. in CSE',
            company: 'United International University',
            description: 'Expected graduation December 2026. CGPA 3.94/4.0 with 100% Merit Scholarship for 6 terms.',
            color: 'bg-accent-red',
            textColor: '',
            hoverColor: 'group-hover:text-accent-red',
            hoverBg: 'group-hover:bg-accent-red',
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
      description: "Have a role, a project, or a question in mind? Send me an email.",
      cta: "Send Email",
      email: "mailto:ihmorol@gmail.com",
      socialTitle: "Social Channels",
      socialDescription: "Find me across the web",
      socials: [
        { name: "GitHub", url: "https://github.com/ihmorol", icon: "github", color: "bg-[#24292E]", shadow: "shadow-[#24292E]/20" },
        { name: "LinkedIn", url: "https://linkedin.com/in/ihmorol", icon: "linkedin", color: "bg-[#0077B5]", shadow: "shadow-[#0077B5]/20" },
        { name: "Email", url: "mailto:ihmorol@gmail.com", icon: "mail", color: "bg-[#EA4335]", shadow: "shadow-[#EA4335]/20" }
      ]
  }
};
