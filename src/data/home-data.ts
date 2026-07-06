export const homeData = {
  hero: {
    titlePrefix: "Let's",
    titleHighlight: "Connect",
    subtitle: "Final-Year CSE Student at UIU | Full-Stack Developer | ML Researcher",
    description: "I build production software and do applied machine learning research. I'm finishing my B.Sc. at United International University with a 3.94 CGPA and a full merit scholarship across six terms, and I work there as a teaching assistant. My first paper, on class-imbalanced intrusion detection, is under peer review. My thesis applies neural networks to differential equation systems.",
    buttons: [
      { text: "View Projects", variant: "primary", action: "view_projects" },
      { text: "Download Resume", variant: "secondary", action: "download_resume" },
      { text: "Schedule Meeting", variant: "secondary", action: "schedule_meeting" }
    ]
  },
  stats: [
    { value: '3.94', label: 'CGPA (4.0 Scale)' },
    { value: '6×', label: '100% Merit Scholarship' },
    { value: '500+', label: 'Problems Solved' },
    { value: '1', label: 'Paper Under Review' },
  ],
  featuredProjects: {
    title: "Featured Projects",
    viewAllText: "View All Projects",
    viewAllLink: "/projects",
    projects: [
      {
        id: '1',
        slug: 'advyon',
        title: 'Advyon',
        category: 'Full Stack',
        description: 'Legal-tech platform with case management, document workflows, and AI-assisted legal insights. I led a five-member team through the full SDLC and we won Champion at the UIU CSE Project Show.',
        image: '/images/brand/mesh-hero-01.svg',
        tech: ['React', 'Express', 'TypeScript', 'MongoDB'],
        color: 'group-hover:text-blue-400',
        hoverColor: 'hover:text-blue-400',
        icons: [
            { name: "gavel", title: "Legal-Tech" },
            { name: "dns", title: "Express" },
            { name: "database", title: "MongoDB" }
        ]
      },
      {
        id: '2',
        slug: 'elearning-platform',
        title: 'E-Learning Platform',
        category: 'Full Stack',
        description: 'A live IELTS preparation platform built as three apps: a Next.js 15 student portal with video courses and progress tracking, an Express + TypeScript API with Vimeo and Zoom streaming, and a React admin dashboard.',
        image: '/images/brand/blob-depth-01.svg',
        tech: ['Next.js 15', 'React 19', 'Express', 'TypeScript'],
        color: 'group-hover:text-purple-400',
        hoverColor: 'hover:text-purple-400',
        icons: [
            { name: "web", title: "Next.js" },
            { name: "code", title: "TypeScript" },
            { name: "play_circle", title: "Video Streaming" }
        ]
      },
      {
        id: '3',
        slug: 'unsw-nb15-ids',
        title: 'Intrusion Detection',
        category: 'AI / ML',
        description: 'A reproducible 18-experiment study of class-imbalance strategies for binary and multiclass intrusion detection on UNSW-NB15. The paper is under peer review.',
        image: '/images/brand/divider-flow-01.svg',
        tech: ['Python', 'XGBoost', 'scikit-learn'],
        color: 'group-hover:text-green-400',
        hoverColor: 'hover:text-green-400',
        icons: [
            { name: "security", title: "Network Security" },
            { name: "model_training", title: "Machine Learning" },
            { name: "science", title: "Research" }
        ]
      },
    ]
  },
  skills: {
    title: "Skills Overview",
    description: "I work across web development, backend systems, and applied machine learning. Most of it was built through shipped client work, university team projects, and research.",
    cta: "Full Tech Stack",
    categories: [
        {
            name: "Languages",
            colorClass: "bg-blue-500",
            skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"]
        },
        {
            name: "Frontend",
            colorClass: "bg-purple-500",
            skills: ["React.js", "Next.js 15", "React Native", "Tailwind CSS"]
        },
        {
            name: "Backend",
            colorClass: "bg-green-500",
            skills: ["Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL", "Redis"]
        },
        {
            name: "ML & Tools",
            colorClass: "bg-orange-500",
            skills: ["PyTorch", "scikit-learn", "Docker", "Git/GitHub", "Supabase"]
        }
    ]
  },
  scheduleMeeting: {
    title: "Schedule a Meeting",
    description: "Book a 15-minute call to talk about a role, a project, or a possible collaboration.",
    cta: "Schedule Now"
  },
  contact: {
    blocks: [
        {
            type: "email",
            title: "Email",
            description: "Email me about a project or role. I usually reply within a day.",
            cta: "Email Me"
        },
        {
            type: "message",
            title: "Send Message",
            description: "Prefer not to open your mail client? Send a message right from this site.",
            cta: "Message Me"
        },
        {
            type: "newsletter",
            title: "Sign up for\nNewsletter",
            description: "Occasional updates on new projects, writing, and research.",
            cta: "Sign Up",
            placeholders: {
                name: "Your Name",
                email: "Email Address"
            }
        }
    ]
  },
  social: {
    title: "Social Channels",
    description: "The best places to follow my work are GitHub and LinkedIn.",
    channels: [
        { name: "GitHub", url: "https://github.com/ihmorol", icon: "code", colorIdx: "gray" },
        { name: "LinkedIn", url: "https://linkedin.com/in/ihmorol", icon: "work", colorIdx: "blue" },
        { name: "Email", url: "mailto:ihmorol@gmail.com", icon: "mail", colorIdx: "red" }
    ]
  }
};
