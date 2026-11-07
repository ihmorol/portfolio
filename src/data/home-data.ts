export const homeData = {
  hero: {
    titlePrefix: "Let's",
    titleHighlight: "Connect",
    subtitle: "Final-Year CSE Student at UIU | Full-Stack Developer | ML Researcher",
    description: "I build production software and do applied machine learning research. I'm finishing my B.Sc. at United International University with a 3.94 CGPA and a full merit scholarship across six terms, and I work there as a teaching assistant. My thesis applies neural networks to differential equation systems, with side studies in physics-informed attack detection and AI-image forensics.",
    now: {
      label: "Now",
      text: "Engineering RimonsIELTS solo, teaching four labs at UIU, and running my FYDP-II thesis.",
      link: "/now"
    },
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
    { value: '20+', label: 'Projects Built' },
  ],
  featuredProjects: {
    title: "Featured Projects",
    viewAllText: "View All Projects",
    viewAllLink: "/projects",
    projects: [
      {
        id: '1',
        slug: 'elearning-platform',
        title: 'E-Learning Platform',
        category: 'Full Stack',
        description: 'The live IELTS preparation platform I engineer solo for RimonsIELTS: a Next.js 15 student portal with mock tests and video courses, an Express + TypeScript API with enforced OpenAPI contract parity, a React admin with a full test pyramid, and a Python central service. Live at rimonsielts.com.',
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
        id: '2',
        slug: 'advyon',
        title: 'Advyon',
        category: 'Full Stack',
        description: 'Legal-tech platform with case management, document workflows, and AI-assisted legal insights, built on a feature-module React 19 architecture. I led a five-member team through the full SDLC and we won Champion at the UIU CSE Project Show.',
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
        id: '3',
        slug: 'lorenz-ann-thesis',
        title: 'Lorenz ODE Thesis',
        category: 'Research',
        description: 'My FYDP thesis: a PINN trained on the ODE residual alone tracks a high-accuracy DOP853 reference to ~3e-05, alongside a controlled 69-run architecture search. Every run is archived immutably with 41 tests and an ICEEICT manuscript draft.',
        image: '/images/brand/divider-flow-01.svg',
        tech: ['Python', 'PyTorch', 'SciPy'],
        color: 'group-hover:text-cyan-400',
        hoverColor: 'hover:text-cyan-400',
        icons: [
            { name: "functions", title: "ODE Systems" },
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
    description: "Book a 15-minute call to talk about a role, a project, or a possible collaboration. Message me on WhatsApp and we'll find a time.",
    cta: "Schedule Now"
  },
  contact: {
    blocks: [
        {
            type: "email",
            title: "Email",
            description: "Email me about a project or role. I usually reply within a day.",
            cta: "Email Me",
            emailAddress: "ihmorol@gmail.com"
        },
        {
            type: "message",
            title: "Send Message",
            description: "Leave your email and message — I usually reply within a day.",
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
