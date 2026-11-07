export const experienceData = {
  header: {
    titlePrefix: "Work",
    titleIcon: "history_edu",
    titleSuffix: "Experience",
    description: "Teaching, production engineering for RimonsIELTS, team leadership, and research, all alongside a computer science degree."
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Undergraduate Teaching Assistant",
        company: "United International University, CSE Department",
        location: "Dhaka, Bangladesh",
        type: "Part-time",
        period: "Aug 2025 - Present",
        description: "Over a year of teaching support across four lab courses: DBMS Lab, DSA-I Lab, ICS Lab, and SWE Lab. I run lab sessions, office hours, and code reviews.",
        sections: [
          {
            title: "Key Responsibilities",
            icon: "check_circle",
            iconColor: "text-accent-green",
            items: [
              "Guide students through weekly lab sessions for DBMS, DSA-I, ICS, and SWE courses",
              "Review and grade lab assignments with feedback on correctness and code quality",
              "Hold office hours and tutorial sessions on SQL, normalization, graph algorithms, dynamic programming, and software engineering practice"
            ]
          },
          {
             title: "Courses Supported",
             icon: "school",
             iconColor: "text-accent-blue",
             items: [
               "Database Management Systems Lab (SQL, Normalization, ER Diagrams)",
               "Data Structures & Algorithms-I Lab (Trees, Graphs, DP)",
               "Introduction to Computer Systems Lab",
               "Software Engineering Lab"
             ]
          }
        ],
        tags: ["Teaching", "DBMS", "DSA-I", "ICS", "SWE", "Mentorship"]
      },
      {
        role: "Software Engineer (Remote, Sole Engineer)",
        company: "RimonsIELTS",
        location: "Remote",
        type: "Remote",
        period: "2025 - Present",
        description: "I'm the only engineer behind a live IELTS preparation platform, and I own all of it: a Next.js 15 student portal, an Express + TypeScript REST API, a React admin dashboard, and a Python central service.",
        sections: [
          {
            title: "What I Own",
            icon: "check_circle",
            iconColor: "text-accent-green",
            items: [
              "End-to-end architecture across the student portal, REST API, admin dashboard, and central service",
              "Video streaming integration (Vimeo/Zoom), AI features, and cloud file storage",
              "Production releases: OpenAPI docs, Zod validation, JWT auth, go-live checklists"
            ]
          },
          {
             title: "Stack",
             icon: "school",
             iconColor: "text-accent-blue",
             items: [
               "Next.js 15, React 19, Tailwind CSS v4, Zustand, TanStack Query / Router",
               "Express + TypeScript, Python, MongoDB, Swagger/OpenAPI, Zod"
             ]
          }
        ],
        tags: ["Production", "RimonsIELTS", "Next.js", "TypeScript", "Solo Engineering"]
      }
    ]
  },
  leadership: {
    title: "Leadership & Achievements",
    items: [
      {
        role: "Champion & Team Lead",
        period: "2025",
        context: "Software Engineering Lab Project Show • UIU CSE Project Show",
        description: "Led a five-member team building Advyon, a legal-tech platform with case management, document workflows, and AI-assisted insights, through the full SDLC.",
        impactTitle: "Recognition",
        impact: "Won Champion at the CSE Project Show while coordinating requirements, module ownership, and delivery for five developers on a trimester deadline.",
        tags: ["Team Leadership", "SDLC", "Full-Stack", "AI Integration"]
      },
      {
        role: "Champion",
        period: "2024",
        context: "UIU CSE Week Programming Contest • 80+ Participants",
        description: "Won first place in the university's algorithmic programming contest against a field of more than 80 participants.",
        impactTitle: "Recognition",
        impact: "Took 1st place solving algorithmic problems under contest time pressure.",
        tags: ["Competitive Programming", "Algorithms", "Problem Solving"]
      },
      {
        role: "1st Runner-Up",
        period: "2023",
        context: "Advanced OOP Project Showcase • UIU",
        description: "Presented a Java hospital management system built around standard design patterns and OOP principles.",
        impactTitle: "Project Highlight",
        impact: "Placed 2nd overall for its object-oriented design and use of design patterns.",
        tags: ["Java", "OOP", "Design Patterns"]
      },
      {
        role: "6th Runner-Up",
        period: "2024",
        context: "System Analysis & Design Lab Showcase • UIU",
        description: "Designed and implemented an inventory management system through the full SDLC.",
        impactTitle: "Achievement",
        impact: "Delivered the working system with complete documentation, from requirements analysis to deployment.",
        tags: ["SDLC", "System Design", "Documentation"]
      }
    ]
  },
  growth: {
    title: "Growth",
    subTitle: "Skill Development",
    skills: [
      { name: "Full-Stack Development", percentage: 90, colorClass: "bg-accent-blue" },
      { name: "Applied Machine Learning", percentage: 75, colorClass: "bg-accent-purple" },
      { name: "Data Structures & Algorithms", percentage: 90, colorClass: "bg-accent-green" },
      { name: "Team Leadership", percentage: 80, colorClass: "bg-accent-yellow" }
    ]
  },
  volunteering: {
    title: "Competitive Programming & Community",
    items: [
      {
        role: "Active Competitive Programmer",
        organization: "Codeforces, LeetCode, HackerRank",
        period: "2022 - Present",
        description: "Solved 500+ algorithm and data structure problems. I take part in online contests and virtual competitions regularly.",
        tags: ["Algorithms", "Data Structures", "Problem Solving"]
      },
      {
        role: "Peer Mentor",
        organization: "UIU CSE Community",
        period: "2023 - Present",
        description: "I help junior students with programming fundamentals, debugging, and contest preparation, and share open study guides with classmates.",
        tags: ["Mentorship", "Teaching", "Community"]
      }
    ]
  },
  cta: {
    title: "Let's work together",
    description: "I'm open to software engineering roles, research collaborations, and freelance projects. If any of that fits what you need, get in touch.",
    buttonText: "Contact Me"
  }
};
