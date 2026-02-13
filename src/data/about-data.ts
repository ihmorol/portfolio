export const aboutData = {
  hero: {
    titlePrefix: "About",
    titleHighlight: "Ikramul",
    description: "Passionate Computer Science student bridging theoretical knowledge with practical software solutions. Based in Dhaka, aspiring globally."
  },
  intro: {
    badge: "Introduction",
    name: "Ikramul Hasan Moral",
    title: "CSE Student & Full-Stack Developer",
    description: [
      "My journey into the world of programming began with curiosity about how software systems work. What started as solving simple algorithmic problems has evolved into a profound passion for building scalable web applications and exploring machine learning. I believe in writing clean, maintainable code that solves real-world problems.",
      "Currently pursuing my B.Sc. in Computer Science and Engineering at United International University with a 3.9+ CGPA, I've been consistently recognized as a top performer, earning 100% merit scholarship for five consecutive terms. My approach combines strong theoretical foundations with hands-on project experience.",
      "As an Undergraduate Teaching Assistant, I help 100+ students master Data Structures & Algorithms and Database Management. Beyond academics, I'm an active competitive programmer with 500+ problems solved across Codeforces, LeetCode, and HackerRank, and I love participating in hackathons and programming contests."
    ],
    highlights: {
        title: "Key Highlights",
        items: [
            "3.9+ CGPA at UIU",
            "100% Merit Scholarship",
            "500+ Problems Solved",
            "Teaching Assistant"
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
      title: "Continuous Learning",
      description: "Always exploring new technologies, frameworks, and best practices to stay current and grow as a developer.",
      icon: "school",
      colorClass: "bg-[#6BCB77]"
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, well-documented code following industry standards and design patterns.",
      icon: "code",
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
      { name: "Learning New Tech", icon: "rocket_launch", colorClass: "text-[#FF6B6B]" }
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
            period: 'Aug 2025 - Present',
            role: 'Undergraduate Teaching Assistant',
            company: 'United International University',
            description: 'Assisting 100+ students in DSA and DBMS courses, designing assignments, and conducting tutorial sessions.',
            color: 'bg-[#6BCB77]',
            textColor: 'text-[#6BCB77]',
            hoverColor: 'group-hover:text-[#6BCB77]',
            hoverBg: 'group-hover:bg-[#6BCB77]',
            active: true
        },
        {
            period: '2024',
            role: 'Champion - CSE Week Programming Contest',
            company: 'UIU',
            description: 'Competed against 80+ participants in algorithmic problem-solving and secured 1st place.',
            color: 'bg-[#FFD93D]',
            textColor: '',
            hoverColor: 'group-hover:text-[#FFD93D]',
            hoverBg: 'group-hover:bg-[#FFD93D]',
            active: false
        },
        {
            period: '2023',
            role: '1st Runner-Up - OOP Project Showcase',
            company: 'UIU',
            description: 'Presented Java-based hospital management system with design patterns.',
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
            description: 'Expected graduation December 2026. CGPA: 3.9+/4.0 with 100% Merit Scholarship.',
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
        'React.js',
        'Next.js',
        'Node.js',
        'MongoDB',
        'TypeScript',
        'Python',
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
