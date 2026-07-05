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
      description: "Final-Year CSE Student at UIU | Full-Stack Developer | ML Researcher. Shipping production platforms and doing applied machine learning research — from intrusion detection to neural ODE surrogates.",
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
      title: "Stay Updated",
      description: "Subscribe to my newsletter for the latest updates on my projects, learning journey, and articles.",
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
