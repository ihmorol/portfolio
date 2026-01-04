export const SITE_CONFIG = {
  name: 'Ikramul Hasan',
  title: 'Senior Product Designer & Creative Lead',
  description: 'Portfolio showcasing AI/ML projects, software development, and research',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: 'hello@alexmorgan.design',
  location: 'San Francisco, CA',
  timezone: 'GMT-8',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
    behance: 'https://behance.net',
  }
};

export const NAVIGATION_LINKS = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Academic', href: '/academic' },
  { name: 'Research', href: '/research' },
  { name: 'Blog', href: '/blog' },
  { name: 'Skills', href: '/skills' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'research', label: 'Research' },
  { id: 'open-source', label: 'Open Source' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'Github', url: SITE_CONFIG.social.github, color: '#333' },
  { name: 'LinkedIn', icon: 'Linkedin', url: SITE_CONFIG.social.linkedin, color: '#0077B5' },
  { name: 'Twitter', icon: 'Twitter', url: SITE_CONFIG.social.twitter, color: '#1DA1F2' },
  { name: 'Dribbble', icon: 'Dribbble', url: SITE_CONFIG.social.dribbble, color: '#EA4C89' },
  { name: 'Behance', icon: 'Behance', url: SITE_CONFIG.social.behance, color: '#1769FF' },
];
