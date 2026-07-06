'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { ArrowRight, User } from 'lucide-react';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="w-full md:col-span-12 bg-background-secondary rounded-3xl overflow-hidden border border-border group hover:border-border-strong transition-colors mb-8">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            {post.coverImage ? (
                 <Image 
                 src={post.coverImage} 
                 alt={post.title} 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-blue-900 flex items-center justify-center">
                     {/* Placeholder if no image */}
                </div>
            )}
         
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
            Featured
          </div>
        </div>
        
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-text-secondary font-bold uppercase tracking-wide mb-4">
            <span className="text-[#ff6b6b]">{post.category}</span>
            <span className="w-1 h-1 bg-border-strong rounded-full"></span>
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 bg-border-strong rounded-full"></span>
            <span>{post.readTime} min read</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4 leading-tight group-hover:text-amber-300 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-text-secondary text-sm md:text-base mb-8 font-[family-name:var(--font-spline)] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-background-tertiary overflow-hidden flex items-center justify-center border border-border">
                {post.author.image ? (
                    <Image src={post.author.image} alt={post.author.name} width={32} height={32} />
                ) : (
                    <User size={16} className="text-text-secondary" />
                )}
              </div>
              <span className="text-xs font-bold text-text-primary">{post.author.name}</span>
            </div>
            
            <Link 
                href={`/blog/${post.slug}`}
                className="bg-foreground hover:bg-foreground/85 text-background text-[10px] font-bold py-2.5 px-6 rounded-full transition-all uppercase tracking-wider flex items-center gap-2"
            >
              Read Article
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
