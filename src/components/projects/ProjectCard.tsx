'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Code, Globe, Layout } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group bg-card border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full rounded-[24px]">
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-black/60 backdrop-blur-md border border-white/10 text-white">
            {project.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20 -mt-12">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-400 text-xs mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] text-gray-500">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex gap-3 text-gray-400">
             {/* Icons based on links/tech */}
             <Code size={18} className="hover:text-white transition-colors" />
             {project.demoUrl && <Globe size={18} className="hover:text-white transition-colors" />}
          </div>
          
          <Link 
            href={`/projects/${project.slug}`} 
            className="text-[10px] font-bold uppercase tracking-wider text-white hover:text-accent-blue transition-colors flex items-center gap-1"
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </Card>
  );
}
