export const skillsData = {
  header: {
    titlePrefix: "My",
    titleIcon: "local_fire_department",
    titleSuffix: "Expertise"
  },
  programmingLanguages: {
    title: "Programming Languages",
    description: "Core languages that form the foundation of my development capabilities. Proficient in both compiled and interpreted languages.",
    languages: [
      {
        name: "JavaScript / TypeScript",
        years: "4 Years",
        usage: "Frontend, Backend, Full-Stack Development",
        percentage: 90,
        colorClass: "bg-blue-500"
      },
      {
        name: "Python",
        years: "1 Years",
        usage: "Data Analysis, ML, Scripting, Backend",
        percentage: 85,
        colorClass: "bg-green-500"
      },
      {
        name: "Java",
        years: "2 Years",
        usage: "OOP, Enterprise Applications, Android",
        percentage: 75,
        colorClass: "bg-orange-500"
      },
      {
        name: "C++",
        years: "3 Years",
        usage: "Competitive Programming, DSA",
        percentage: 80,
        colorClass: "bg-purple-500"
      }
    ],
    projects: [
      {
        icon: "JS",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
        title: "IELTS Learning Platform",
        description: "Full-stack e-commerce app with React, Node.js, and Stripe integration."
      },
      {
        icon: "TS",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "Real-Time Task Manager",
        description: "Collaborative task app with Next.js, TypeScript and Firebase."
      }
    ]
  },
  aiMl: {
    title: "AI & Machine Learning",
    description: "Exploring machine learning fundamentals and building practical applications.",
    items: [
      {
        name: "scikit-learn",
        icon: "model_training",
        iconColor: "text-orange-400",
        hoverBorder: "hover:border-orange-500/50",
        description: "Regression, classification, and data preprocessing for ML models."
      },
      {
        name: "Pandas & NumPy",
        icon: "dataset",
        iconColor: "text-green-400",
        hoverBorder: "hover:border-green-500/50",
        description: "Data manipulation, feature engineering, and statistical analysis."
      },
      {
        name: "Flask API",
        icon: "api",
        iconColor: "text-cyan-400",
        hoverBorder: "hover:border-cyan-500/50",
        description: "Deploying ML models as REST APIs for real-time predictions."
      },
      {
        name: "Data Visualization",
        icon: "analytics",
        iconColor: "text-purple-400",
        hoverBorder: "hover:border-purple-500/50",
        description: "Matplotlib, Seaborn for exploratory data analysis and insights."
      }
    ]
  },
  currentlyLearning: {
    title: "Currently Learning",
    items: [
      {
        name: "Machine Learning",
        topic: "Deep Learning Fundamentals",
        percentage: 50,
        colorClass: "bg-purple-500"
      },
      {
        name: "System Design",
        topic: "Scalable Architecture",
        percentage: 40,
        colorClass: "bg-blue-500"
      },
      {
        name: "Docker",
        topic: "Containerization",
        percentage: 35,
        colorClass: "bg-cyan-500"
      }
    ]
  },
  webMobile: {
    title: "Web & Mobile",
    frontend: {
      title: "Frontend",
      items: [
        { name: "React.js / Next.js", colorClass: "bg-blue-400" },
        { name: "Tailwind CSS", colorClass: "bg-blue-400" },
        { name: "ShadcnUI / Bootstrap", colorClass: "bg-blue-400" }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { name: "Node.js / Express.js", colorClass: "bg-green-400" },
        { name: "MongoDB / Mongoose", colorClass: "bg-green-400" },
        { name: "REST APIs / JWT Auth", colorClass: "bg-green-400" }
      ]
    },
    mobile: {
      title: "Additional",
      items: [
        "React Query",
        "React Hook Form",
        "Firebase"
      ]
    }
  },
  devOps: {
    title: "DevOps & Tools",
    ciCd: {
      title: "Deployment & Cloud",
      items: [
        { name: "Vercel", icon: "deployed_code" },
        { name: "Railway", icon: "train" },
        { name: "GitHub Actions", icon: "rocket_launch" },
        { name: "Stripe Integration", icon: "payments" }
      ]
    },
    environment: {
      title: "Development Environment",
      items: [
        { name: "Git / GitHub", colorClass: "bg-yellow-400" },
        { name: "VS Code", colorClass: "bg-yellow-400" },
        { name: "Postman", colorClass: "bg-yellow-400" },
        { name: "npm / pnpm", colorClass: "bg-yellow-400" }
      ]
    }
  },
  certifications: [
    {
      code: "UIU",
      codeBg: "bg-blue-500/20",
      codeColor: "text-blue-400",
      title: "100% Merit Scholarship",
      hoverColor: "group-hover:text-blue-400",
      issuer: "United International University • 5 Terms (Top 3%)"
    },
    {
      code: "DSA",
      codeBg: "bg-green-500/20",
      codeColor: "text-green-400",
      title: "500+ Problems Solved",
      hoverColor: "group-hover:text-green-400",
      issuer: "Codeforces, LeetCode, HackerRank • Ongoing"
    },
    {
      code: "DEV",
      codeBg: "bg-orange-500/20",
      codeColor: "text-orange-400",
      title: "Full-Stack Web Development",
      hoverColor: "group-hover:text-orange-400",
      issuer: "Self-taught + Online Courses • 2022 - Present"
    }
  ],
  softSkills: {
    title: "Soft Skills",
    skills: ['Teaching & Mentorship', 'Problem Solving', 'Team Collaboration', 'Technical Writing', 'Time Management', 'Quick Learning', 'Communication'],
    quote: "\"The best way to learn is to teach.\" – Combining technical expertise with the ability to explain complex concepts clearly."
  }
};
