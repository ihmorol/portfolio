export const homeData = {
  hero: {
    titlePrefix: "Let's",
    titleHighlight: "Connect",
    subtitle: "Final-Year CSE Student at UIU | Full-Stack Developer | ML Researcher",
    description: "I build production software and do applied machine-learning research. I'm in my final year of a B.Sc. at United International University on a full merit scholarship across six terms, and I work there as a teaching assistant. Right now I'm finishing a thesis on physics-informed neural networks and building AI-agent systems as a software engineer.",
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
    { value: '100+', label: 'Students Mentored (TA)' },
  ],
  now: {
    title: "Now",
    liveLabel: "Live",
    updated: "October 2026",
    intro: "A snapshot of what actually has my attention this term, kept current and honest rather than frozen on a résumé.",
    note: "a snapshot, not an archive.",
    noteUrl: "https://nownownow.com/about",
    focus: [
      {
        label: "Thesis · FYDP-II",
        accent: "blue",
        icon: "neurology",
        title: "Finishing a thesis on physics-informed neural networks",
        detail: "A network that reproduces the Lorenz-1960 system to about five decimal places from the governing equations alone, no training data, checked against an RK4 and SciPy solver.",
        status: "Writing up"
      },
      {
        label: "Engineering",
        accent: "teal",
        icon: "smart_toy",
        title: "Building production AI-agent systems as a software engineer",
        detail: "Workflow-automation agents that draft and act, with a human approval step before anything leaves the system. Test-driven, shipped in short sprints.",
        status: "Shipping"
      },
      {
        label: "Research & writing",
        accent: "purple",
        icon: "science",
        title: "Turning three course projects into real write-ups",
        detail: "Spatial versus spectral features for spotting AI-generated images, a Naive-Bayes and decision-tree study on label noise, and a big-data-with-ML literature review.",
        status: "Drafting"
      },
      {
        label: "Degree & teaching",
        accent: "green",
        icon: "school",
        title: "Final term of my CSE degree, still assisting two courses",
        detail: "Last courses are Digital Image Processing and Big Data Analytics. I keep teaching Data Structures and Databases as a teaching assistant.",
        status: "Final year"
      }
    ]
  },
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
        slug: 'lorenz-ann-thesis',
        title: 'Lorenz-1960 PINN',
        category: 'Research · SciML',
        description: 'My FYDP-II thesis: a physics-informed neural network that learns the Lorenz-1960 system from its governing equations alone, with no training data, and matches an RK4/SciPy solver to about five decimal places.',
        image: '/images/brand/divider-flow-01.svg',
        tech: ['PyTorch', 'PINNs', 'NumPy', 'SciPy'],
        color: 'group-hover:text-cyan-400',
        hoverColor: 'hover:text-cyan-400',
        icons: [
            { name: "neurology", title: "Physics-Informed NN" },
            { name: "timeline", title: "Lorenz-1960 ODE" },
            { name: "verified", title: "Solver-Verified" }
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
