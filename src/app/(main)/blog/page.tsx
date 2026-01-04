import { getAllPosts } from '@/lib/markdown';
import { BlogContent } from '@/components/blog/BlogContent';
import { BlogPost } from '@/types';

export default function BlogPage() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'category',
    'featured',
    'readTime',
    'tags'
  ]) as BlogPost[];

  return <BlogContent initialPosts={allPosts} />;
}
