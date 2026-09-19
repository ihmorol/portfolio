'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      aria-label={`Read post: ${post.title}`}
      className="group focus-ring rounded-card block h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden rounded-[24px] border-border/60 transition-all duration-300 hover:border-border-strong hover:shadow-card-hover">
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background to-transparent opacity-40" />
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={`Cover art for post: ${post.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-teal/20" />
          )}

          <div className="absolute left-4 top-4 z-20">
            <Badge className="border-border bg-black/60 text-white backdrop-blur-md">
              {post.category}
            </Badge>
          </div>

          {post.featured && (
            <div className="absolute right-4 top-4 z-20">
              <Badge className="border-transparent bg-accent-coral text-white">
                Featured
              </Badge>
            </div>
          )}
        </div>

        <div className="flex flex-grow flex-col p-6">
          <div className="mb-3 flex items-center gap-2 text-caption text-text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="h-1 w-1 rounded-full bg-border-strong"></span>
            <span>{post.readTime} min read</span>
          </div>

          <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-text-primary transition-colors duration-300 group-hover:text-accent-blue">
            {post.title}
          </h3>

          <p className="mb-5 line-clamp-2 flex-grow text-xs leading-relaxed text-text-secondary font-[family-name:var(--font-spline)]">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-background-tertiary">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-xs font-bold text-text-primary">
                  {post.author.name}
                </span>
                <span className="block text-[10px] text-text-muted">Author</span>
              </div>
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 group-hover:border-accent-blue group-hover:bg-accent-blue group-hover:text-white">
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
