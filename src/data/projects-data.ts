import { 
  LayoutGrid, 
  Brain, 
  Smartphone, 
  FileText, 
  Terminal, 
  Globe 
} from 'lucide-react';

export const projectsData = {
  header: {
    title: "Selected",
    titleIcon: "Star", // Using string for icon name to be handled by component or just map it
    titleSuffix: "Works",
    description: "Explore our latest projects showcasing innovation, design excellence, and technical expertise across various domains."
  },
  categories: ["All Projects", "AI/ML", "Web Development", "Mobile Apps", "Research", "Open Source"],
  featuredProject: {
    badge: "Featured Project",
    title: "Fintech Dashboard 2.0",
    description: "A comprehensive financial analytics platform redesign focusing on user experience, data visualization, and real-time transaction monitoring. Increased user retention by 45%.",
    techStack: ["React", "TypeScript", "D3.js", "Node.js"],
    ctaText: "View Case Study",
    ctaLink: "/projects/fintech-dashboard",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDShKba_AZ0QjhpM-x8bF0NtAPxE1wStruOpmAXY96dnpTEQ8ec3q68HB4sbbYpBDNS41KVvtcBIRXze6-UXimAR4OxZG9zIUbhLfPwCjREIuckElH3-dvYqjk_XoCKpDb3XadeF9R29MeVys7i6FPJw9FReHtHJrOcvuXkEsRszxwl3rpYuIIzImxmVuJBe2VEjcoaLeRa5SrrlxUQNjZFX2KnVSv09HQEQLNBQPkfXL905mCm-DRVVxF7UnIoFAyjTEgTOJCDlWA" // Reusing the image from [slug] page for consistency if needed, or placeholder
  },
  projects: [
    {
      title: "E-Commerce API",
      slug: "e-commerce-api",
      category: "Web Development",
      date: "Oct 2023",
      description: "High-performance RESTful API designed for scalability, handling over 10k requests per second with optimized caching strategies.",
      tags: ["#NodeJS", "#Express", "#Redis", "#MongoDB"],
      icon: LayoutGrid,
      color: "from-indigo-500/20 to-purple-500/20",
      hoverColor: "group-hover:text-blue-400",
      accent: "text-blue-400"
    },
    {
      title: "Predictive Analytics",
      slug: "predictive-analytics",
      category: "AI/ML",
      date: "Aug 2023",
      description: "Machine learning model for customer churn prediction achieving 92% accuracy using random forest algorithms on large datasets.",
      tags: ["#Python", "#ScikitLearn", "#Pandas"],
      icon: Brain,
      color: "from-green-500/20 to-teal-500/20",
      hoverColor: "group-hover:text-green-400",
      accent: "text-green-400"
    },
    {
      title: "Fitness Tracker",
      slug: "fitness-tracker",
      category: "Mobile Apps",
      date: "Jun 2023",
      description: "Cross-platform mobile application for tracking workouts and nutrition with social sharing features and Apple Health integration.",
      tags: ["#Flutter", "#Dart", "#Firebase"],
      icon: Smartphone,
      color: "from-pink-500/20 to-orange-500/20",
      hoverColor: "group-hover:text-pink-400",
      accent: "text-pink-400"
    },
    {
      title: "Quantum Sim",
      slug: "quantum-sim",
      category: "Research",
      date: "Mar 2023",
      description: "Research paper and simulation tool exploring quantum entanglement visualization for educational purposes. Published in IEEE.",
      tags: ["#Python", "#Qiskit", "#WebGL"],
      icon: FileText,
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-cyan-400",
      accent: "text-cyan-400"
    },
    {
      title: "CLI Tool Kit",
      slug: "cli-tool-kit",
      category: "Open Source",
      date: "Jan 2023",
      description: "A popular open-source command line interface utility for automating daily developer workflows. 2k+ stars on GitHub.",
      tags: ["#Rust", "#CLI", "#Automation"],
      icon: Terminal,
      color: "from-amber-500/20 to-red-500/20",
      hoverColor: "group-hover:text-amber-400",
      accent: "text-amber-400"
    },
    {
      title: "SaaS Landing",
      slug: "saas-landing",
      category: "Web Development",
      date: "Dec 2022",
      description: "Modern landing page for a SaaS startup with complex animations, pricing tables, and CMS integration for blog posts.",
      tags: ["#NextJS", "#Tailwind", "#Framer"],
      icon: Globe,
      color: "from-violet-500/20 to-fuchsia-500/20",
      hoverColor: "group-hover:text-fuchsia-400",
      accent: "text-fuchsia-400"
    }
  ],
  projectDetails: {
    "fintech-dashboard": {
      title: "Fintech Redesign",
      subtitle: "Banking made simple & fast.",
      description: "Improving user retention through intuitive data visualization and streamlined navigation flows for the next generation of banking.",
      heroDescription: "We redesigned the entire dashboard experience from the ground up, focusing on speed, clarity, and personalized data views for financial analysts. The result is a highly responsive interface that adapts to user behavior.",
      heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDShKba_AZ0QjhpM-x8bF0NtAPxE1wStruOpmAXY96dnpTEQ8ec3q68HB4sbbYpBDNS41KVvtcBIRXze6-UXimAR4OxZG9zIUbhLfPwCjREIuckElH3-dvYqjk_XoCKpDb3XadeF9R29MeVys7i6FPJw9FReHtHJrOcvuXkEsRszxwl3rpYuIIzImxmVuJBe2VEjcoaLeRa5SrrlxUQNjZFX2KnVSv09HQEQLNBQPkfXL905mCm-DRVVxF7UnIoFAyjTEgTOJCDlWA",
      tags: ["Figma", "React", "D3.js", "Tailwind"],
      role: "Lead Designer",
      duration: "4 Weeks",
      date: "Oct 2023",
      client: "FinCorp Inc.",
      stats: [
        { label: "Screens", value: "100+" },
        { label: "Theme Mode", value: "Dark" }
      ],
      screens: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjJxXEIaIHYx-UsmKeTq4qgU6x_PMiJTakt3K4tLaB0f3jD7K8VL1wmfx1OqWF3NT6jV70RSPi8U29XPvddhRoRN30pncGdKgqOUUsSIgqwyIkrot3IzvzpPOMLsEl1oRw7ltIMyK_1i62XKYnf4maRsf0uM7AB03tyi8wiFzQ6U3gMxuu-p6HmzSOO8FB5o519otzzma21Zmda071ZqZoLjxQ3FYC6c5e8TEEGkXsj3ctOk7pDWMG_vbbXQNE_Xd2MhTjZMahIvM",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCX8OQ3umeP2rHZZxA-aqyXBAuVtH37j87gChTn655VuZAwJxVLqDnkzrfQuMV4mZvLkIaOgDnfV2sYpuiyqITS_IuFeyeec30ZohLeN9uh0xMzSUqoTaqufFxkerMC9i0J70rHCOAHsz1oQ-daMwXzVSolNMGVqDBN3utFHjssvJNDZ-BhleSud1ZVMBa_EgzTNerR4zOroNputu2jIIfE2OJURFEkpKqL59HbO7sYbu8BRFKU2wQ7TF1NZmHHdx7kPVVUJwC-LIg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCUsLoVxbr5bohxP9QR6b6gIH0EiQ_DcBIQiI_gNw16pWUzgsO_sMTKpJUBxqsrFYVNnxOgRRpnU2G6NE_v36AZ75MClC2mc14l_1yOZkNms-eyD8KlkqeP2VPnM-1pRhIB0hwpR1ZzW9rL10ykQNFSeTZqpElj_lNlde93pSjxbroilWDsGbrczCUXfQB2WjVq1Wu19QIk2TKC0Qruf0NqNtr92lSPer9eDz8gbinAkjCPm0UGPT5_7U6Zr7R2KYw9yz19nY5Jpf0"
      ],
      features: [
        {
          title: "The Problem",
          icon: "warning",
          iconColor: "text-accent-red",
          iconBg: "bg-accent-red/20",
          description: "FinCorp's dashboard suffered from high churn. Users felt overwhelmed by data density. Navigation was too deep, making simple exports take 5+ minutes, leading to frustration and lost productivity."
        },
        {
          title: "Our Solution",
          icon: "lightbulb",
          iconColor: "text-accent-blue",
          iconBg: "bg-accent-blue/20",
          description: "We modernized the interface with a flattened architecture. The dark theme reduces eye strain for late-night analysts, while vibrant accents highlight critical status changes immediately."
        },
        {
          title: "Key Features",
          icon: "star",
          iconColor: "text-accent-green",
          iconBg: "bg-accent-green/20",
          list: [
            "Customizable widget system",
            "One-click data export",
            "Real-time websocket updates",
            "Predictive search analytics"
          ]
        }
      ],
      techStack: {
        frontend: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
        visualization: ["D3.js", "Recharts", "WebGL"],
        highlight: {
          title: "Algorithm Highlight",
          description: "Implemented a custom ",
          highlightText: "Adaptive Sampling Algorithm",
          suffix: " to render 50k+ data points without lagging the browser thread, maintaining a steady 60fps during zoom/pan operations."
        },
        codeSnippet: {
          title: "Code Snippet",
          file: "useMarketData.ts",
          code: `const useDataStream = (ticker) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Initialize WebSocket connection
    const ws = new WebSocket(WS_URL);
    ws.onmessage = (event) => {
       const newData = JSON.parse(event.data);
       setData(prev => [...prev, newData]);
    };
    return () => ws.close();
  }, [ticker]);
  return data;
};`
        }
      },
      challenges: [
        {
          title: "Data Overload",
          icon: "psychology",
          description: "The sheer volume of real-time data was overwhelming users. We had to find a balance between completeness and clarity.",
          solution: "Progressive disclosure. We only show high-level trends initially, revealing granular data on interaction.",
          borderColor: "border-accent-peach"
        },
        {
          title: "Performance Constraints",
          icon: "speed",
          description: "Rendering heavy charts on older enterprise laptops caused significant lag and poor user experience.",
          solution: "Virtualization for lists and Web Workers for data processing kept the UI thread free.",
          borderColor: "border-accent-blue"
        }
      ],
      impact: {
        title: "Measurable Impact",
        description: "Post-launch metrics collected over 3 months showed significant improvements in efficiency.",
        metrics: [
          { icon: 'trending_up', val: '+30%', label: 'Daily Active Users', color: 'accent-green', bg: 'bg-accent-green/20' },
          { icon: 'support_agent', val: '-45%', label: 'Support Tickets', color: 'accent-peach', bg: 'bg-accent-peach/20' },
          { icon: 'star', val: '4.8/5', label: 'App Store Rating', color: 'accent-blue', bg: 'bg-accent-blue/20' }
        ],
        testimonials: [
          {
            quote: "The new dashboard has completely changed how our team operates. What used to take hours now takes minutes.",
            author: "Head of Analytics, FinCorp"
          },
          {
            quote: "Finally, a tool that looks as good as it performs. The dark mode is a lifesaver for night shifts.",
            author: "Senior Trader, Global Markets"
          }
        ]
      },
      takeaways: [
        {
          title: "Key Takeaway",
          icon: "school",
          description: "User testing early is crucial. We pivoted our navigation strategy twice based on Week 1 feedback."
        },
        {
          title: "Skills Developed",
          icon: "fitness_center",
          description: "Deepened knowledge in WebGL for performance and learned advanced TypeScript generics for safer data handling."
        },
        {
          title: "What I'd do differently",
          icon: "history_edu",
          description: "I would involve the engineering team earlier in the design phase to better understand API limitations."
        }
      ]
    }
  }
};
