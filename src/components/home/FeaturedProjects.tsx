'use client';

import Link from 'next/link';
import { homeData } from '@/data/home-data';
import { TiltCard } from '@/components/motion/TiltCard';
import { ProjectCover } from '@/components/projects/ProjectCover';
import { getProjectCover } from '@/data/project-covers';

export function FeaturedProjects() {
  const { title, viewAllText, viewAllLink, projects } = homeData.featuredProjects;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        <Link href={viewAllLink} className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">
          {viewAllText}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const cover = getProjectCover(project.slug);
          return (
            <TiltCard key={project.id} intensity={4} className="rounded-3xl h-full">
            <div className="glass-dark rounded-3xl overflow-hidden group hover:border-border-strong transition-all duration-300 border border-border/60 flex flex-col h-full">
             <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <ProjectCover
                      label={project.title}
                      from={cover.from}
                      to={cover.to}
                      materialIcon={cover.materialIcon}
                    />
                </div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-border">
                    {project.category}
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold text-text-primary mb-2 transition-colors ${project.color}`}>
                    {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                    {project.description}
                </p>
                
                <div className="mt-auto">
                    <div className="flex gap-2 mb-4 text-text-muted">
                         {project.icons?.map((icon) => (
                             <span key={icon.name} className="material-symbols-outlined text-lg" title={icon.title}>
                                {icon.name}
                             </span>
                         ))}
                    </div>
                    
                    <Link href={`/projects/${project.slug}`} className={`inline-flex items-center text-xs font-bold uppercase tracking-widest text-text-primary transition-colors ${project.hoverColor}`}>
                        View Details <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                    </Link>
                </div>
            </div>
            </div>
          </TiltCard>
          );
        })}
      </div>
    </section>
  );
}
