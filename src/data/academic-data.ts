export const academicData = {
  header: {
    titlePrefix: "Academic",
    titleIcon: "school",
    titleSuffix: "Background"
  },
  currentDegree: {
    badge: "Current Degree",
    degree: "B.Sc. in Computer Science and Engineering",
    university: "United International University (UIU)",
    location: "Dhaka, Bangladesh",
    gradDate: "Expected Graduation: December 2026",
    gpa: "3.94/4.0",
    focus: "Software Engineering & Machine Learning",
    awards: ["100% Merit Scholarship (6 terms)", "Top 3% each trimester"],
    visualLabel: "Teaching Assistant"
  },
  thesis: {
    status: "In Progress (FYDP-II)",
    title: "\"Solving the Lorenz-1960 ODE System with a Physics-Informed Neural Network\"",
    advisor: "Dr. Muhammad Nomani Kabir",
    duration: "2026 (FYDP-I defended June 2026)",
    quote: "\"Can a neural network solve a coupled nonlinear ODE system from the equations alone? The model is trained only on the ODE residual and reproduces the Lorenz-1960 trajectory to about five decimal places.\"",
    techStack: ["Python", "PyTorch", "NumPy", "SciPy"],
    methodology: "A verified numerical baseline first (custom RK4 against SciPy DOP853, agreement RMSE around 1.3e-11), then a physics-informed network whose only training signal is the ODE residual; the solver reference is used solely to score it afterward.",
    outcomes: "FYDP-I defended with a verified ground-truth pipeline and literature review. FYDP-II trains the physics-informed network: about five correct decimal places against the reference solver, under six minutes on a laptop CPU, no dataset involved.",
    proposalLink: "https://github.com/ihmorol/lorenz1960-pinn"
  },
  certifications: [
    {
      title: "100% Merit Scholarship",
      year: "2022-Present",
      issuer: "United International University",
      skills: "Achievement: Top 3% each trimester, 6 terms running"
    },
    {
      title: "Champion - SE Lab Project Show",
      year: "2025",
      issuer: "UIU CSE Project Show",
      skills: "Led a five-member team building Advyon, a legal-tech platform, through the full SDLC"
    },
    {
      title: "Champion - CSE Week Programming Contest",
      year: "2024",
      issuer: "UIU CSE Department",
      skills: "Skills: Algorithms, Problem Solving, Competitive Programming"
    },
    {
      title: "1st Runner-Up - OOP Project Showcase",
      year: "2023",
      issuer: "UIU CSE Department",
      skills: "Skills: Java, Design Patterns, Software Architecture"
    }
  ],
  coursework: [
    {
      category: "Core Computer Science",
      colorClass: "text-blue-300",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems"
      ]
    },
    {
      category: "Software Engineering",
      colorClass: "text-green-300",
      courses: [
        "Software Engineering",
        "System Analysis & Design",
        "Mobile Application Development"
      ]
    },
    {
      category: "Systems & Networks",
      colorClass: "text-purple-300",
      courses: [
        "Computer Networks",
        "Operating Systems",
        "Computer Architecture"
      ]
    },
    {
      category: "AI & Machine Learning",
      colorClass: "text-amber-300",
      courses: [
        "Machine Learning",
        "Artificial Intelligence",
        "Human-Computer Interaction"
      ]
    },
    {
      category: "Mathematics & Theory",
      colorClass: "text-pink-300",
      colSpan: "lg:col-span-2",
      subLists: [
        [
          "Discrete Mathematics",
          "Linear Algebra"
        ],
        [
          "Calculus",
          "Theory of Computation"
        ]
      ]
    }
  ],
  workshops: [
    {
      month: "JUN",
      day: "15",
      title: "FYDP-I Defense",
      description: "Defended thesis phase one: Lorenz ODE system via optimal ANN architectures (Team Paradox)"
    },
    {
      month: "AUG",
      day: "25",
      title: "Teaching Assistant Onboarding",
      description: "Started as TA for DSA and DBMS courses"
    },
    {
      month: "MAR",
      day: "15",
      title: "UIU CSE Week 2024",
      description: "Champion in Programming Contest (80+ participants)"
    }
  ],
  achievements: [
     {
       title: "Champion",
       subtitle: "SE Lab Project Show (Advyon, Team Lead)",
       icon: "emoji_events"
     },
     {
       title: "Champion",
       subtitle: "CSE Week Programming Contest 2024",
       icon: "emoji_events"
     },
     {
       title: "Merit Scholar",
       subtitle: "100% Scholarship, Top 3% (6 Terms)",
       icon: "school"
     }
  ]
};
