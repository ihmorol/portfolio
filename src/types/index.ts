export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  tags: string[];
  technologies: string[];
  image: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  startDate: string;
  endDate?: string;
  role: string;
  teamSize?: number;
  challenges: Challenge[];
  results: Result[];
  lessonsLearned: string[];
  relatedProjects?: string[];
}

export type ProjectCategory = 
  | 'ai-ml' 
  | 'web-development' 
  | 'mobile' 
  | 'research' 
  | 'open-source';

export interface Challenge {
  description: string;
  solution: string;
}

export interface Result {
  metric: string;
  value: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: number;
  category: BlogCategory;
  tags: string[];
  author: Author;
  featured?: boolean;
}

export type BlogCategory = 
  | 'ai-ml' 
  | 'software-engineering' 
  | 'tutorial' 
  | 'research' 
  | 'career';

export interface Author {
  name: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  scholar?: string;
  researchgate?: string;
}
