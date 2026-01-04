'use client';

import Image from 'next/image';
import Link from 'next/link';
import { homeData } from '@/data/home-data';

export function FeaturedProjects() {
  const { title, viewAllText, viewAllLink, projects } = homeData.featuredProjects;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <Link href={viewAllLink} className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
          {viewAllText}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="glass-dark rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-300 border border-white/5 flex flex-col h-full">
             <div className="relative h-48 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                    {project.category}
                </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold text-white mb-2 transition-colors ${project.color}`}>
                    {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                </p>
                
                <div className="mt-auto">
                    <div className="flex gap-2 mb-4 text-gray-500">
                         {project.icons?.map((icon) => (
                             <span key={icon.name} className="material-symbols-outlined text-lg" title={icon.title}>
                                {icon.name}
                             </span>
                         ))}
                    </div>
                    
                    <Link href={`/projects/${project.id}`} className={`inline-flex items-center text-xs font-bold uppercase tracking-widest text-white transition-colors ${project.hoverColor}`}>
                        View Details <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
