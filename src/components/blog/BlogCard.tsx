'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import { ArrowRight, Brain, Terminal, GraduationCap, FlaskConical, Lightbulb, FileText } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

const categoryConfig: Record<string, { color: string, hoverColor: string, icon: any, gradient: string }> = {
  'ai-ml': { 
    color: 'text-indigo-400', 
    hoverColor: 'group-hover:text-indigo-400',
    icon: Brain,
    gradient: 'from-indigo-500/20 to-purple-500/20'
  },
  'tutorial': { 
    color: 'text-green-400', 
    hoverColor: 'group-hover:text-green-400',
    icon: Terminal,
    gradient: 'from-green-500/20 to-teal-500/20'
  },
  'career': { 
    color: 'text-pink-400', 
    hoverColor: 'group-hover:text-pink-400',
    icon: GraduationCap,
    gradient: 'from-pink-500/20 to-red-500/20'
  },
  'research': { 
    color: 'text-cyan-400', 
    hoverColor: 'group-hover:text-cyan-400',
    icon: FlaskConical,
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  'opinion': { 
    color: 'text-orange-400', 
    hoverColor: 'group-hover:text-orange-400',
    icon: Lightbulb,
    gradient: 'from-orange-500/20 to-yellow-500/20'
  },
  'software-engineering': { 
    color: 'text-blue-400', 
    hoverColor: 'group-hover:text-blue-400',
    icon: FileText,
    gradient: 'from-blue-500/20 to-indigo-500/20'
  },
  'default': { 
    color: 'text-amber-400', 
    hoverColor: 'group-hover:text-amber-400',
    icon: FileText,
    gradient: 'from-gray-500/20 to-gray-400/20'
  }
};

export function BlogCard({ post }: BlogCardProps) {
  // Normalize category key safely
  const categoryKey = post.category ? post.category.toLowerCase().replace(/\s+/g, '-') : 'default';
  const config = categoryConfig[categoryKey as keyof typeof categoryConfig] || categoryConfig['default'];
  const Icon = config.icon;

  return (
    <Link href={`/blog/${post.slug}`} className="md:col-span-4 bg-background-secondary rounded-3xl p-1 flex flex-col h-full border border-border group hover:border-border-strong transition-colors block">
      <div className="h-48 rounded-t-[1.3rem] bg-background-tertiary relative overflow-hidden">
        {post.coverImage ? (
           <Image 
               src={post.coverImage} 
               alt={post.title} 
               fill 
               className="object-cover group-hover:scale-105 transition-transform duration-500"
           />
        ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                <Icon className={`${config.color} w-16 h-16 opacity-80`} />
            </div>
        )}
        
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider border border-border">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase tracking-wide mb-3">
          <span>{formatDate(post.date)}</span>
          <span className="w-1 h-1 bg-border-strong rounded-full"></span>
          <span>{post.readTime} min read</span>
        </div>
        
        <h3 className={`text-lg font-bold text-text-primary mb-2 leading-tight ${config.hoverColor} transition-colors`}>
          {post.title}
        </h3>
        
        <p className="text-xs text-text-secondary mb-4 font-[family-name:var(--font-spline)] leading-relaxed line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
          <span className="text-[10px] font-bold text-text-secondary uppercase">
            By {post.author.name}
          </span>
          <ArrowRight size={18} className="text-text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
