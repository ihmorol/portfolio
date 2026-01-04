export const skillsData = {
  header: {
    titlePrefix: "My",
    titleIcon: "local_fire_department",
    titleSuffix: "Expertise"
  },
  programmingLanguages: {
    title: "Programming Languages",
    description: "Core languages that form the foundation of my development capabilities. Mastery across systems and scripting.",
    languages: [
      {
        name: "Python",
        years: "5 Years",
        usage: "Data Analysis, Backend Dev, Scripting",
        percentage: 95,
        colorClass: "bg-green-500"
      },
      {
        name: "JavaScript / TypeScript",
        years: "4 Years",
        usage: "Frontend, Node.js, Interactive UI",
        percentage: 90,
        colorClass: "bg-blue-500"
      },
      {
        name: "C++",
        years: "3 Years",
        usage: "Systems Programming, Game Dev",
        percentage: 75,
        colorClass: "bg-purple-500"
      }
    ],
    projects: [
      {
        icon: "Py",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        title: "FinTech Analytics",
        description: "Predictive market modeling engine built with Python & Pandas."
      },
      {
        icon: "TS",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        title: "E-Commerce Dash",
        description: "Real-time inventory management with React & TypeScript."
      }
    ]
  },
  aiMl: {
    title: "AI & Machine Learning",
    description: "Deploying intelligent solutions using cutting-edge frameworks.",
    items: [
      {
        name: "TensorFlow",
        icon: "neurology",
        iconColor: "text-indigo-400",
        hoverBorder: "hover:border-indigo-500/50",
        description: "Deep learning models for image recognition and NLP tasks."
      },
      {
        name: "PyTorch",
        icon: "model_training",
        iconColor: "text-orange-400",
        hoverBorder: "hover:border-orange-500/50",
        description: "Research prototyping and production deployment of neural nets."
      },
      {
        name: "Scikit-Learn",
        icon: "dataset",
        iconColor: "text-green-400",
        hoverBorder: "hover:border-green-500/50",
        description: "Classic ML algorithms for regression and classification."
      },
      {
        name: "OpenCV",
        icon: "visibility",
        iconColor: "text-cyan-400",
        hoverBorder: "hover:border-cyan-500/50",
        description: "Real-time computer vision and image processing pipelines."
      }
    ]
  },
  currentlyLearning: {
    title: "Currently Learning",
    items: [
      {
        name: "Rust",
        topic: "System Safety",
        percentage: 40,
        colorClass: "bg-amber-500"
      },
      {
        name: "GraphQL",
        topic: "API Query",
        percentage: 65,
        colorClass: "bg-pink-500"
      },
      {
        name: "Web3 / Solidity",
        topic: "Smart Contracts",
        percentage: 25,
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
        { name: "Vue.js / Nuxt", colorClass: "bg-blue-400" },
        { name: "Tailwind CSS", colorClass: "bg-blue-400" }
      ]
    },
    backend: {
      title: "Backend",
      items: [
        { name: "Node.js / Express", colorClass: "bg-green-400" },
        { name: "Django / Flask", colorClass: "bg-green-400" },
        { name: "PostgreSQL / Mongo", colorClass: "bg-green-400" }
      ]
    },
    mobile: {
      title: "Mobile Dev",
      items: [
        "React Native",
        "Flutter",
        "iOS Swift"
      ]
    }
  },
  devOps: {
    title: "DevOps & Tools",
    ciCd: {
      title: "CI/CD & Cloud",
      items: [
        { name: "AWS", icon: "cloud" },
        { name: "Docker", icon: "deployed_code" },
        { name: "Kubernetes", icon: "settings_system_daydream" },
        { name: "GitHub Actions", icon: "rocket_launch" }
      ]
    },
    environment: {
      title: "Environment",
      items: [
        { name: "VS Code / JetBrains", colorClass: "bg-yellow-400" },
        { name: "Linux / MacOS", colorClass: "bg-yellow-400" },
        { name: "Git / Jira / Trello", colorClass: "bg-yellow-400" },
        { name: "Postman / Insomnia", colorClass: "bg-yellow-400" }
      ]
    }
  },
  certifications: [
    {
      code: "AWS",
      codeBg: "bg-orange-500/20",
      codeColor: "text-orange-400",
      title: "AWS Certified Solutions Architect",
      hoverColor: "group-hover:text-orange-400",
      issuer: "Amazon Web Services • Issued Jan 2023"
    },
    {
      code: "GCP",
      codeBg: "bg-blue-500/20",
      codeColor: "text-blue-400",
      title: "Google Professional Data Engineer",
      hoverColor: "group-hover:text-blue-400",
      issuer: "Google Cloud • Issued Nov 2022"
    },
    {
      code: "CKA",
      codeBg: "bg-green-500/20",
      codeColor: "text-green-400",
      title: "Certified Kubernetes Administrator",
      hoverColor: "group-hover:text-green-400",
      issuer: "CNCF • Issued Aug 2022"
    }
  ],
  softSkills: {
    title: "Soft Skills",
    skills: ['Technical Writing', 'Team Leadership', 'Public Speaking', 'Agile Methodology', 'Problem Solving', 'Mentorship', 'Project Management'],
    quote: "\"Skills are cheap. Passion is priceless.\" – Combining technical expertise with effective communication and leadership."
  }
};
