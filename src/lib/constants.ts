export const SITE_CONFIG = {
  name: 'Ikramul Hasan',
  title: 'CSE Student, Full-Stack Developer, Teaching Assistant',
  description: 'Portfolio showcasing full-stack projects, machine learning work, and academic achievements.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: 'ihmorol@gmail.com',
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6',
  social: {
    github: 'https://github.com/ihmorol',
    linkedin: 'https://linkedin.com/in/ihmorol',
    twitter: '',
    dribbble: '',
    behance: '',
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
  { name: 'Email', icon: 'Mail', url: `mailto:${SITE_CONFIG.email}`, color: '#EA4335' },
];
