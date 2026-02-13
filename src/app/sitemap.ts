import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';
import { projectsData } from '@/data/projects-data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/projects', '/experience', '/academic', '/skills', '/research', '/blog', '/contact'];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const projectEntries = projectsData.projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogEntries = getAllPosts(['slug']).map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
