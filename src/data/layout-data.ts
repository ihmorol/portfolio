export const layoutData = {
  navbar: {
    brand: "Ikramul Hasan",
    cta: "Hire",
    menuItems: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Experience", href: "/experience" },
      { name: "Academic", href: "/academic" },
      { name: "Skills", href: "/skills" },
      { name: "Research", href: "/research" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  footer: {
    brand: {
      name: "Ikramul Hasan",
      description: "Final-year CSE student at UIU, full-stack developer, and ML researcher. I build production software and study machine learning for intrusion detection and differential equations.",
    },
    socialLinks: [
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
