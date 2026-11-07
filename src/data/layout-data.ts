export const layoutData = {
  navbar: {
    brand: "Ikramul Hasan",
    cta: "Hire",
    menuItems: [
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "Experience", href: "/experience" },
      { name: "Research", href: "/research" },
      { name: "Now", href: "/now" },
    ],
    moreItems: [
      { name: "Blog", href: "/blog" },
      { name: "Academic", href: "/academic" },
      { name: "Skills", href: "/skills" },
      { name: "Contact", href: "/contact" },
    ],
  },
  footer: {
    brand: {
      name: "Ikramul Hasan",
      description: "Final-year CSE student at UIU, full-stack developer, and ML researcher. I build production software and study scientific machine learning, from neural ODE surrogates to physics-informed attack detection.",
    },
    socialLinks: [
      { title: "WhatsApp", url: "https://wa.me/8801614714959", icon: "whatsapp" },
      { title: "GitHub", url: "https://github.com/ihmorol", icon: "github" },
      { title: "LinkedIn", url: "https://linkedin.com/in/ihmorol", icon: "linkedin" },
      { title: "Email", url: "mailto:ihmorol@gmail.com", icon: "mail" },
    ],
    sitemap: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Experience", href: "/experience" },
      { name: "Blog", href: "/blog" },
    ],
    resources: [
      { name: "Resume", href: "/resume.pdf" },
      { name: "Contact", href: "/contact" },
      { name: "Skills", href: "/skills" },
      { name: "Research", href: "/research" },
      { name: "Now", href: "/now" },
    ],
    newsletter: {
      title: "Newsletter",
      description: "Occasional emails about new projects and posts.",
      placeholder: "Email address",
    },
    copyright: "© {year} Ikramul Hasan Moral. All rights reserved.",
    legals: [] as { name: string; href: string }[],
  },
  sidebar: {
    title: {
      home: "HOME",
    },
    socialLinks: [
      { title: "LinkedIn", url: "https://linkedin.com/in/ihmorol" },
      { title: "GitHub", url: "https://github.com/ihmorol" },
      { title: "Email", url: "mailto:ihmorol@gmail.com" }
    ]
  }
};
