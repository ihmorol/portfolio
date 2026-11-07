import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { homeData } from '@/data/home-data';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface LatestWritingProps {
  posts: BlogPost[];
}

/**
 * Editorial hairline-row teaser for the blog: the three newest posts as
 * full-width rows (index | title + excerpt | meta | arrow), matching the
 * label|content language used across the site.
 */
export function LatestWriting({ posts }: LatestWritingProps) {
  const { title, viewAllText, viewAllLink } = homeData.latestWriting;

  if (posts.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <Link
          href={viewAllLink}
          className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors"
        >
          {viewAllText}
        </Link>
      </div>

      <ol className="border-y border-border/60 divide-y divide-border/60">
        {posts.map((post, i) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-4 md:gap-8 py-5 md:py-6"
            >
              <span className="type-micro text-text-muted w-8 shrink-0 pt-1.5 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-lg md:text-xl font-bold text-text-primary leading-snug transition-colors group-hover:text-accent-blue">
                  {post.title}
                </span>
                <span className="mt-1.5 block text-sm text-text-secondary line-clamp-1">
                  {post.excerpt}
                </span>
              </span>
              <span className="hidden sm:flex flex-col items-end gap-1.5 shrink-0 pt-1.5">
                <span className="type-micro text-text-muted">{post.category}</span>
                <span className="text-xs text-text-muted">
                  {formatDate(post.date)} · {post.readTime} min read
                </span>
              </span>
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="mt-2 shrink-0 text-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-text-primary transition-all"
              />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
