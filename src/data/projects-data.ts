import { 
  LayoutGrid, 
  Brain, 
  Smartphone, 
  FileText, 
  Terminal, 
  Globe,
  ShoppingCart,
  Users,
  BarChart3
} from 'lucide-react';

export const projectsData = {
  header: {
    title: "Selected",
    titleIcon: "Star",
    titleSuffix: "Works",
    description: "Explore my projects showcasing full-stack development, machine learning, and problem-solving skills built during my studies."
  },
  categories: ["All Projects", "Full Stack", "AI/ML", "Web Development", "Mobile Apps", "Open Source"],
  featuredProject: {
    badge: "Featured Project",
    title: "Full-Stack IELTS Learning Platform",
    description: "A production-ready e-commerce application with user authentication, product catalog, shopping cart, and Stripe payment integration. Features JWT-based auth, role-based access control, and optimized MongoDB queries serving 200+ test users.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    ctaText: "View Case Study",
    ctaLink: "/projects/ielts-platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7PX0uQoYvTjv754fluses4lA7hbTSkZtjC-byVFx5eW2j97ihaIPTJp_PaRKtHIhoJGFWv8Hr2akKWBFCQG-1MU47ZAh1ye_vmexNigMtVSG8_AjhUa5xnbZ_FaTCNeY68H7rr-zPjRA1Xq0SngRdJY-CETGlLMcA_6JvcYEhCeWaplK3Z4VJNuKpYgPEOd1P4foyaMeax60t0z24-GcZ56mbWJZzGTDz42jfdYi16Ffhlhyd3oZzbDLkPBH-SLspJBJ4XDG-xk"
  },
  projects: [
    {
      title: "IELTS Learning Platform",
      slug: "ielts-platform",
      category: "Full Stack",
      date: "Sep - Nov 2024",
      description: "Production-ready e-commerce platform with JWT authentication, Stripe payments, admin dashboard, and optimized MongoDB aggregation pipelines. Reduced response time by 40%.",
      tags: ["#React", "#NodeJS", "#MongoDB", "#Stripe"],
      icon: ShoppingCart,
      color: "from-indigo-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-blue-400",
      accent: "text-blue-400"
    },
    {
      title: "Real-Time Task Manager",
      slug: "task-manager",
      category: "Full Stack",
      date: "Jun - Aug 2024",
      description: "Collaborative task management app with Firebase real-time sync supporting 50+ concurrent users. Features drag-and-drop prioritization and TypeScript for reduced runtime errors.",
      tags: ["#NextJS", "#TypeScript", "#Firebase", "#MaterialUI"],
      icon: Users,
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "group-hover:text-green-400",
      accent: "text-green-400"
    },
    {
      title: "ML Price Predictor",
      slug: "price-predictor",
      category: "AI/ML",
      date: "Mar - May 2024",
      description: "Housing price prediction model using Random Forest algorithm achieving 87% accuracy. Preprocessed 10,000+ data points and deployed via Flask REST API.",
      tags: ["#Python", "#ScikitLearn", "#Pandas", "#Flask"],
      icon: Brain,
      color: "from-pink-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-pink-400",
      accent: "text-pink-400"
    },
    {
      title: "Hospital Management System",
      slug: "hospital-system",
      category: "Web Development",
      date: "Oct 2023",
      description: "Java-based desktop application implementing design patterns and OOP principles. Won 1st Runner-Up at UIU Advanced OOP Project Showcase.",
      tags: ["#Java", "#OOP", "#DesignPatterns", "#Desktop"],
      icon: FileText,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "Inventory Management System",
      slug: "inventory-system",
      category: "Web Development",
      date: "Mar 2024",
      description: "Full SDLC implementation for inventory tracking system. Won 6th Runner-Up at System Analysis & Design Lab Showcase.",
      tags: ["#SDLC", "#Documentation", "#SystemDesign"],
      icon: LayoutGrid,
      color: "from-amber-500/20 to-red-500/20",
      hoverColor: "group-hover:text-amber-400",
      accent: "text-amber-400"
    },
    {
      title: "Portfolio Website",
      slug: "portfolio",
      category: "Web Development",
      date: "Jan 2025",
      description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark mode, animations, and responsive design.",
      tags: ["#NextJS", "#TypeScript", "#Tailwind", "#Framer"],
      icon: Globe,
      color: "from-violet-500/20 to-fuchsia-500/20",
      hoverColor: "group-hover:text-fuchsia-400",
      accent: "text-fuchsia-400"
    }
  ],
  projectDetails: {
    "ielts-platform": {
      title: "IELTS Learning Platform",
      subtitle: "Full-Stack E-Learning Solution",
      description: "A comprehensive IELTS preparation platform with course management, payment processing, and user authentication.",
      heroDescription: "Built a production-ready e-commerce application with user authentication, product catalog, shopping cart, and Stripe payment integration. Implemented JWT-based authentication and role-based access control for admin and customer workflows.",
      heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7PX0uQoYvTjv754fluses4lA7hbTSkZtjC-byVFx5eW2j97ihaIPTJp_PaRKtHIhoJGFWv8Hr2akKWBFCQG-1MU47ZAh1ye_vmexNigMtVSG8_AjhUa5xnbZ_FaTCNeY68H7rr-zPjRA1Xq0SngRdJY-CETGlLMcA_6JvcYEhCeWaplK3Z4VJNuKpYgPEOd1P4foyaMeax60t0z24-GcZ56mbWJZzGTDz42jfdYi16Ffhlhyd3oZzbDLkPBH-SLspJBJ4XDG-xk",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      role: "Full-Stack Developer",
      duration: "3 Months",
      date: "Sep - Nov 2024",
      client: "Personal Project",
      stats: [
        { label: "Test Users", value: "200+" },
        { label: "Response Time", value: "-40%" }
      ],
      screens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjJxXEIaIHYx-UsmKeTq4qgU6x_PMiJTakt3K4tLaB0f3jD7K8VL1wmfx1OqWF3NT6jV70RSPi8U29XPvddhRoRN30pncGdKgqOUUsSIgqwyIkrot3IzvzpPOMLsEl1oRw7ltIMyK_1i62XKYnf4maRsf0uM7AB03tyi8wiFzQ6U3gMxuu-p6HmzSOO8FB5o519otzzma21Zmda071ZqZoLjxQ3FYC6c5e8TEEGkXsj3ctOk7pDWMG_vbbXQNE_Xd2MhTjZMahIvM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCX8OQ3umeP2rHZZxA-aqyXBAuVtH37j87gChTn655VuZAwJxVLqDnkzrfQuMV4mZvLkIaOgDnfV2sYpuiyqITS_IuFeyeec30ZohLeN9uh0xMzSUqoTaqufFxkerMC9i0J70rHCOAHsz1oQ-daMwXzVSolNMGVqDBN3utFHjssvJNDZ-BhleSud1VVMBa_EgzTNerR4zOroNputu2jIIfE2OJURFEkpKqL59HbO7sYbu8BRFKU2wQ7TF1NZmHHdx7kPVVUJwC-LIg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUsLoVxbr5bohxP9QR6b6gIH0EiQ_DcBIQiI_gNw16pWUzgsO_sMTKpJUBxqsrFYVNnxOgRRpnU2G6NE_v36AZ75MClC2mc14l_1yOZkNms-eyD8KlkqeP2VPnM-1pRhIB0hwpR1ZzW9rL10ykQNFSeTZqpElj_lNlde93pSjxbroilWDsGbrczCUXfQB2WjVq1Wu19QIk2TKC0Qruf0NqNtr92lSPer9eDz8gbinAkjCPm0UGPT5_7U6Zr7R2KYw9yz19nY5Jpf0"
      ],
      features: [
        {
          title: "The Challenge",
          icon: "warning",
          iconColor: "text-accent-red",
          iconBg: "bg-accent-red/20",
          description: "Building a scalable e-commerce platform with secure payment processing, user authentication, and efficient database queries for course content delivery."
        },
        {
          title: "The Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "Implemented JWT-based authentication with role-based access control, integrated Stripe for secure payments, and optimized MongoDB queries using aggregation pipelines."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "User authentication with JWT",
            "Stripe payment integration",
            "Admin dashboard for course management",
            "Optimized database queries"
          ]
        }
      ],
      techStack: {
        frontend: ["React", "Tailwind CSS", "React Query", "React Hook Form"],
        visualization: ["Chart.js", "Responsive Design"],
        highlight: {
          title: "Performance Optimization",
          description: "Optimized database queries using ",
          highlightText: "MongoDB Aggregation Pipelines",
          suffix: " reducing average response time by 40% for complex data fetching operations."
        },
        codeSnippet: {
          title: "Code Snippet",
          file: "auth.middleware.js",
          code: `const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};`
        }
      },
      challenges: [
        {
          title: "Secure Payment Processing",
          icon: "psychology",
          description: "Implementing secure payment flow with proper error handling and webhook integration for order confirmation.",
          solution: "Used Stripe's recommended best practices with webhook verification and idempotency keys.",
          borderColor: "border-accent-peach"
        },
        {
          title: "Database Performance",
          icon: "speed",
          description: "Complex queries for course filtering and user progress tracking were causing slow response times.",
          solution: "Implemented MongoDB aggregation pipelines and proper indexing to optimize query performance.",
          borderColor: "border-accent-blue"
        }
      ],
      impact: {
        title: "Project Outcomes",
        description: "Key achievements and metrics from the project development and testing phase.",
        metrics: [
          { icon: 'group', val: '200+', label: 'Test Users', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'speed', val: '-40%', label: 'Response Time', color: 'accent-peach', bg: 'bg-accent-peach/20' },
          { icon: 'security', val: '100%', label: 'Secure Transactions', color: 'accent-blue', bg: 'bg-accent-blue/20' }
        ],
        testimonials: [
          {
            quote: "This project helped me understand the complete flow of building a production-ready full-stack application from scratch.",
            author: "Personal Reflection"
          },
          {
            quote: "Gained hands-on experience with payment integration, authentication, and database optimization.",
            author: "Learning Outcomes"
          }
        ]
      },
      takeaways: [
        {
          title: "Key Takeaway",
          icon: "school",
          description: "Planning the database schema early and thinking about query patterns upfront saves significant refactoring time later."
        },
        {
          title: "Skills Developed",
          icon: "fitness_center",
          description: "Deepened understanding of JWT authentication, Stripe integration, and MongoDB aggregation pipelines."
        },
        {
          title: "What I'd do differently",
          icon: "history_edu",
          description: "Would implement comprehensive testing from the start and use TypeScript for better type safety."
        }
      ]
    }
  }
};
