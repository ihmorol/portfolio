export const homeData = {
  hero: {
    titlePrefix: "Let's",
    titleHighlight: "Connect",
    subtitle: "Computer Science & Engineering Student | AI Researcher | Software Engineer",
    description: "I am a passionate developer bridging the gap between theoretical computer science and practical software solutions. Currently focusing on AI-driven applications and scalable web architectures to solve real-world problems.",
    buttons: [
      { text: "View Projects", variant: "primary", action: "view_projects" },
      { text: "Download Resume", variant: "secondary", action: "download_resume" },
      { text: "Schedule Meeting", variant: "secondary", action: "schedule_meeting" }
    ]
  },
  stats: [
    { value: '3+', label: 'Years of Study' },
    { value: '24', label: 'Projects Completed' },
    { value: '5', label: 'Research Papers' },
    { value: '15+', label: 'Technical Skills' },
  ],
  featuredProjects: {
    title: "Featured Projects Showcase",
    viewAllText: "View All Works",
    viewAllLink: "/projects",
    projects: [
      {
        id: '1',
        title: 'Neural Net Visualizer',
        category: 'AI / ML',
        description: 'An interactive web tool designed to visualize complex neural network architectures in real-time, aiding in educational research.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnqeYKlxvyWJc4ykTacXHw8-zy9kyf9bltM7f9la1v6p49Y2F5VwsNK1npLzfOmw6fqAqrYdyJ0n8eBndCEIeSV3OCKDNeUnpK4hxWsL7HVBpti7BiGbymeoqcr4GPxb18rF8FA959Iait4YpUlDnKiKW8uMGgwL4_o4TP9KgMZSAP2ROrsBJx4wLyIoqhi1851WjVRrc25xKP_k4mTjHtrNGuUwhpcHiWBok_Lee98nI-Xia8Q9vYZ8wD9nLNjMEXqclJU4evU9w',
        tech: ['Python', 'TensorFlow', 'React'],
        color: 'group-hover:text-blue-400',
        hoverColor: 'hover:text-blue-400',
        icons: [
            { name: "code", title: "Python" },
            { name: "memory", title: "TensorFlow" },
            { name: "data_object", title: "React" }
        ]
      },
      {
        id: '2',
        title: 'E-Commerce Platform',
        category: 'Full Stack',
        description: 'A scalable microservices-based e-commerce solution featuring high-concurrency order processing and AI product recommendations.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe7PX0uQoYvTjv754fluses4lA7hbTSkZtjC-byVFx5eW2j97ihaIPTJp_PaRKtHIhoJGFWv8Hr2akKWBFCQG-1MU47ZAh1ye_vmexNigMtVSG8_AjhUa5xnbZ_FaTCNeY68H7rr-zPjRA1Xq0SngRdJY-CETGlLMcA_6JvcYEhCeWaplK3Z4VJNuKpYgPEOd1P4foyaMeax60t0z24-GcZ56mbWJZzGTDz42jfdYi16Ffhlhyd3oZzbDLkPBH-SLspJBJ4XDG-xk',
        tech: ['Node.js', 'MongoDB', 'Docker'],
        color: 'group-hover:text-purple-400',
        hoverColor: 'hover:text-purple-400',
        icons: [
            { name: "dns", title: "Node.js" },
            { name: "database", title: "MongoDB" },
            { name: "deployed_code", title: "Docker" }
        ]
      },
      {
        id: '3',
        title: 'Health Tracker App',
        category: 'Mobile Dev',
        description: 'Cross-platform mobile application integrating wearable API data to provide personalized health insights and workout plans.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwbEbYLzELIFPwZl-dbpD2XagOl_MMBxdDKLtC5d4MXDV2SqrHuOVR5Vl0sPOiIHxPkkp0oPbptkNiClhzwP2W7FdkR8BI3zmhsokstv9vpOEKSerWofrNNaITC5FUx24XBfqYl9KpiMflTu24ORgHczDEnQd-wDFzLOCHGGghpbNAJvveVdvDMaTXOOMug32DB4QEBW7CCOySmx-mTLCzTEmf-ISKWAhbNGXdFRF0YmdQDyoyDQqxTjVJ1Q0XQieb1JpkIiKO1pU',
        tech: ['Flutter', 'Firebase', 'Dart'],
        color: 'group-hover:text-green-400',
        hoverColor: 'hover:text-green-400',
        icons: [
            { name: "smartphone", title: "Flutter" },
            { name: "cloud", title: "Firebase" },
            { name: "code_blocks", title: "Dart" }
        ]
      },
    ]
  },
  skills: {
    title: "Skills Overview",
    description: "My technical toolkit is diverse, ranging from low-level systems programming to high-level web development. I am constantly learning and adapting to new technologies.",
    cta: "Full Tech Stack",
    categories: [
        {
            name: "Languages",
            colorClass: "bg-blue-500",
            skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"]
        },
        {
            name: "Frameworks",
            colorClass: "bg-purple-500",
            skills: ["React", "Next.js", "PyTorch", "Tailwind"]
        },
        {
            name: "Tools",
            colorClass: "bg-green-500",
            skills: ["Git", "Docker", "AWS", "Linux"]
        },
        {
            name: "Design",
            colorClass: "bg-orange-500",
            skills: ["Figma", "Adobe XD", "UI/UX"]
        }
    ]
  },
  scheduleMeeting: {
    title: "Schedule a Meeting",
    description: "Let's schedule a 15-minutes free consultation call. We are very eager to hear from you and collaborate.",
    cta: "Schedule Now"
  },
  contact: {
    blocks: [
        {
            type: "email",
            title: "Email",
            description: "Send us an email about your project and we will get back to you as soon as possible.",
            cta: "Email Us"
        },
        {
            type: "message",
            title: "Send Message",
            description: "Send us an in-site message and start live chatting.",
            cta: "Message Us"
        },
        {
            type: "newsletter",
            title: "Sign up for\nNewsletter",
            description: "Stay up-to-date with our special offers and be the first one to know what's coming next!",
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
    description: "Follow me on social media for daily updates and design inspiration.",
    channels: [
        { name: "Dribbble", url: "#", icon: "sports_basketball", colorIdx: "pink" },
        { name: "WhatsApp", url: "#", icon: "chat", colorIdx: "green" },
        { name: "LinkedIn", url: "#", icon: "work", colorIdx: "blue" },
        { name: "Facebook", url: "#", icon: "social_leaderboard", colorIdx: "blue_dark" },
        { name: "Behance", url: "#", icon: "palette", colorIdx: "blue_bright" },
        { name: "Instagram", url: "#", icon: "photo_camera", colorIdx: "red" }
    ]
  }
};
