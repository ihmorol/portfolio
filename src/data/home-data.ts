export const homeData = {
  hero: {
    titlePrefix: "Let's",
    titleHighlight: "Connect",
    subtitle: "CSE Student at UIU | Full-Stack Developer | Teaching Assistant",
    description: "I'm a passionate Computer Science student with a 3.9+ CGPA, building production-ready web applications and exploring the intersection of software engineering and machine learning. Currently working as a Teaching Assistant, helping students master Data Structures & Algorithms.",
    buttons: [
      { text: "View Projects", variant: "primary", action: "view_projects" },
      { text: "Download Resume", variant: "secondary", action: "download_resume" },
      { text: "Schedule Meeting", variant: "secondary", action: "schedule_meeting" }
    ]
  },
  stats: [
    { value: '3.9+', label: 'CGPA (4.0 Scale)' },
    { value: '10+', label: 'Projects Completed' },
    { value: '500+', label: 'Problems Solved' },
    { value: '100%', label: 'Merit Scholarship' },
  ],
  featuredProjects: {
    title: "Featured Projects Showcase",
    viewAllText: "View All Works",
    viewAllLink: "/projects",
    projects: [
      {
        id: '1',
        slug: 'ielts-platform',
        title: 'IELTS Learning Platform',
        category: 'Full Stack',
        description: 'A production-ready e-commerce platform with user authentication, product catalog, shopping cart, and Stripe payment integration serving 200+ test users.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe7PX0uQoYvTjv754fluses4lA7hbTSkZtjC-byVFx5eW2j97ihaIPTJp_PaRKtHIhoJGFWv8Hr2akKWBFCQG-1MU47ZAh1ye_vmexNigMtVSG8_AjhUa5xnbZ_FaTCNeY68H7rr-zPjRA1Xq0SngRdJY-CETGlLMcA_6JvcYEhCeWaplK3Z4VJNuKpYgPEOd1P4foyaMeax60t0z24-GcZ56mbWJZzGTDz42jfdYi16Ffhlhyd3oZzbDLkPBH-SLspJBJ4XDG-xk',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        color: 'group-hover:text-blue-400',
        hoverColor: 'hover:text-blue-400',
        icons: [
            { name: "code", title: "React" },
            { name: "dns", title: "Node.js" },
            { name: "database", title: "MongoDB" }
        ]
      },
      {
        id: '2',
        slug: 'task-manager',
        title: 'Real-Time Task Manager',
        category: 'Full Stack',
        description: 'A real-time collaborative task management app using Firebase with instant synchronization across 50+ concurrent users and drag-and-drop functionality.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnqeYKlxvyWJc4ykTacXHw8-zy9kyf9bltM7f9la1v6p49Y2F5VwsNK1npLzfOmw6fqAqrYdyJ0n8eBndCEIeSV3OCKDNeUnpK4hxWsL7HVBpti7BiGbymeoqcr4GPxb18rF8FA959Iait4YpUlDnKiKW8uMGgwL4_o4TP9KgMZSAP2ROrsBJx4wLyIoqhi1851WjVRrc25xKP_k4mTjHtrNGuUwhpcHiWBok_Lee98nI-Xia8Q9vYZ8wD9nLNjMEXqclJU4evU9w',
        tech: ['Next.js', 'TypeScript', 'Firebase'],
        color: 'group-hover:text-purple-400',
        hoverColor: 'hover:text-purple-400',
        icons: [
            { name: "web", title: "Next.js" },
            { name: "code", title: "TypeScript" },
            { name: "cloud", title: "Firebase" }
        ]
      },
      {
        id: '3',
        slug: 'price-predictor',
        title: 'ML Price Predictor',
        category: 'AI / ML',
        description: 'A regression model to predict housing prices using Random Forest algorithm with 87% accuracy, processing 10,000+ data points with Flask REST API.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwbEbYLzELIFPwZl-dbpD2XagOl_MMBxdDKLtC5d4MXDV2SqrHuOVR5Vl0sPOiIHxPkkp0oPbptkNiClhzwP2W7FdkR8BI3zmhsokstv9vpOEKSerWofrNNaITC5FUx24XBfqYl9KpiMflTu24ORgHczDEnQd-wDFzLOCHGGghpbNAJvveVdvDMaTXOOMug32DB4QEBW7CCOySmx-mTLCzTEmf-ISKWAhbNGXdFRF0YmdQDyoyDQqxTjVJ1Q0XQieb1JpkIiKO1pU',
        tech: ['Python', 'scikit-learn', 'Flask'],
        color: 'group-hover:text-green-400',
        hoverColor: 'hover:text-green-400',
        icons: [
            { name: "code", title: "Python" },
            { name: "model_training", title: "scikit-learn" },
            { name: "api", title: "Flask" }
        ]
      },
    ]
  },
  skills: {
    title: "Skills Overview",
    description: "My technical toolkit spans from frontend development to backend systems and machine learning. I'm constantly learning and building projects to solidify my knowledge.",
    cta: "Full Tech Stack",
    categories: [
        {
            name: "Languages",
            colorClass: "bg-blue-500",
            skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
        },
        {
            name: "Frontend",
            colorClass: "bg-purple-500",
            skills: ["React.js", "Next.js", "Tailwind CSS", "ShadcnUI"]
        },
        {
            name: "Backend",
            colorClass: "bg-green-500",
            skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
        },
        {
            name: "Tools",
            colorClass: "bg-orange-500",
            skills: ["Git/GitHub", "Vercel", "Postman", "VS Code"]
        }
    ]
  },
  scheduleMeeting: {
    title: "Schedule a Meeting",
    description: "Let's schedule a 15-minute call to discuss collaboration opportunities, projects, or just to connect!",
    cta: "Schedule Now"
  },
  contact: {
    blocks: [
        {
            type: "email",
            title: "Email",
            description: "Send me an email about your project ideas and I'll get back to you as soon as possible.",
            cta: "Email Me"
        },
        {
            type: "message",
            title: "Send Message",
            description: "Send me an in-site message and let's start a conversation.",
            cta: "Message Me"
        },
        {
            type: "newsletter",
            title: "Sign up for\nNewsletter",
            description: "Stay up-to-date with my latest projects, blog posts, and learning journey!",
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
    description: "Connect with me on social media to follow my coding journey and projects.",
    channels: [
        { name: "GitHub", url: "https://github.com/ihmorol", icon: "code", colorIdx: "gray" },
        { name: "LinkedIn", url: "https://linkedin.com/in/ihmorol", icon: "work", colorIdx: "blue" },
        { name: "Email", url: "mailto:ihmorol@gmail.com", icon: "mail", colorIdx: "red" }
    ]
  }
};
