export const aboutData = {
  hero: {
    titlePrefix: "About",
    titleHighlight: "The Creator",
    description: "Crafting meaningful digital narratives through design and technology. Based in San Francisco, inspiring globally."
  },
  intro: {
    badge: "Introduction",
    name: "Ikramul Hasan",
    title: "Senior Product Designer & Creative Lead",
    description: [
      "My journey into the world of design began not with pixels, but with a pencil and a blank sheet of paper. What started as sketching architectural wonders in my notebook during high school evolved into a profound passion for structuring information in digital spaces. I believe that good design is invisible—it facilitates user goals without drawing attention to itself.",
      "Over the past decade, I have had the privilege of working with diverse teams ranging from agile startups to Fortune 500 companies. My approach blends analytical thinking with creative intuition, ensuring that every interface I craft is not only visually stunning but also functionally robust and accessible. I specialize in building scalable design systems that empower teams to ship consistent products faster.",
      "Currently, I serve as the Senior Product Designer at TechFlow Systems, where I lead the UX strategy for our flagship SaaS platform. Beyond the screen, I am an advocate for ethical design practices and mentor aspiring designers to find their unique voice in this ever-evolving industry."
    ],
    highlights: {
        title: "Key Highlights",
        items: [
            "10+ Years of Experience",
            "Award-Winning Projects",
            "Design Systems Expert",
            "Mentor & Speaker"
        ]
    },
    location: "San Francisco, CA",
    cvButton: "Download CV",
    status: "Open for Work",
    profileImage: "/images/profile/image.jpeg"
  },
  values: [
    {
      title: "Clarity",
      description: "Eliminating ambiguity to create interfaces that are intuitive and easy to navigate for everyone.",
      icon: "visibility",
      colorClass: "bg-[#FF6B6B]"
    },
    {
      title: "Empathy",
      description: "Understanding the user's needs deeply to design solutions that solve real problems.",
      icon: "psychology",
      colorClass: "bg-[#4D96FF]"
    },
    {
      title: "Integrity",
      description: "Committing to ethical design standards and transparency in every step of the process.",
      icon: "all_inclusive",
      colorClass: "bg-[#6BCB77]"
    }
  ],
  interests: {
    title: "Fueling Creativity",
    icon: "local_fire_department",
    items: [
      { name: "Photography", icon: "photo_camera", colorClass: "text-[#FFD93D]" },
      { name: "Reading", icon: "menu_book", colorClass: "text-[#FF6B6B]" },
      { name: "Hiking", icon: "hiking", colorClass: "text-[#4D96FF]" },
      { name: "Coding", icon: "code", colorClass: "text-[#6BCB77]" }
    ]
  },
  philosophy: {
    title: "Philosophy",
    icon: "format_quote",
    quote: "Good design is obvious. Great design is transparent.",
    description: "I strive to create experiences where the interface disappears, leaving only the solution and the user's intent."
  },
  journey: {
    title: "My Journey",
    icon: "history_edu",
    items: [
        {
            period: '2021 - Present',
            role: 'Senior Product Designer',
            company: 'TechFlow Systems',
            description: 'Leading design systems and UX strategy for enterprise SaaS products.',
            color: 'bg-[#6BCB77]',
            textColor: 'text-[#6BCB77]',
            hoverColor: 'group-hover:text-[#6BCB77]',
            hoverBg: 'group-hover:bg-[#6BCB77]',
            active: true
        },
        {
            period: '2018 - 2021',
            role: 'UI Designer',
            company: 'Creative Agency X',
            description: 'Delivered high-fidelity UI for fintech mobile apps and marketing sites.',
            color: 'bg-[#4D96FF]',
            textColor: '',
            hoverColor: 'group-hover:text-[#4D96FF]',
            hoverBg: 'group-hover:bg-[#4D96FF]',
            active: false
        },
        {
            period: '2019',
            role: 'Best UX Award',
            company: 'Awwwards',
            description: 'Recognized for outstanding user experience design on the FinGo project.',
            color: 'bg-[#FFD93D]',
            textColor: '',
            hoverColor: 'group-hover:text-[#FFD93D]',
            hoverBg: 'group-hover:bg-[#FFD93D]',
            active: false
        },
        {
            period: '2014 - 2018',
            role: 'BFA Interaction Design',
            company: 'California College of the Arts',
            description: 'Specialized in Human-Computer Interaction and visual storytelling.',
            color: 'bg-[#FF6B6B]',
            textColor: '',
            hoverColor: 'group-hover:text-[#FF6B6B]',
            hoverBg: 'group-hover:bg-[#FF6B6B]',
            active: false
        },
        {
            period: '2010 - 2014',
            role: 'Visual Arts Focus',
            company: 'Lincoln High School',
            description: '',
            color: 'bg-gray-600',
            textColor: '',
            hoverColor: '',
            hoverBg: '',
            active: false,
            isEducation: true
        }
    ]
  },
  techStack: {
      title: "Tech Proficiency",
      items: [
        'Figma',
        'Adobe XD',
        'React',
        'Tailwind',
        'Webflow',
        'Blender',
      ]
  },
  connect: {
      title: "Let's Connect",
      description: "Have a project in mind? Let's create something amazing together.",
      cta: "Send Email",
      email: "mailto:contact@example.com",
      socialTitle: "Social Channels",
      socialDescription: "Follow my journey across the web",
      socials: [
        { name: "Dribbble", url: "#", icon: "dribbble", color: "bg-[#EA4C89]", shadow: "shadow-[#EA4C89]/20" },
        { name: "Twitter", url: "#", icon: "twitter", color: "bg-[#1DA1F2]", shadow: "shadow-[#1DA1F2]/20" },
        { name: "LinkedIn", url: "#", icon: "linkedin", color: "bg-[#0077B5]", shadow: "shadow-[#0077B5]/20" },
        { name: "GitHub", url: "#", icon: "github", color: "bg-[#171544]", shadow: "shadow-[#171544]/20" }
      ]
  }
};
