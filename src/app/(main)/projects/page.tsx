'use client';

import { Footer } from '@/components/layout/Footer';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { layoutData } from '@/data/layout-data';
import { projectsData } from '@/data/projects-data';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Star, 
  Medal,
  Code, 
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const { socialLinks } = layoutData.footer;
  const { header, categories, featuredProject, projects } = projectsData;

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#000000] min-h-screen flex flex-col font-[family-name:var(--font-jakarta)]">
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12 relative">
        
        {/* Fixed Side Elements - Hidden on smaller screens */}
        <PageLeftSideBar title="PROJECTS" />
        <VerticalSocialLinks items={socialLinks} />

        {/* Header Section */}
        <PageHeader
          titlePrefix={header.title}
          icon=""
          titleSuffix={header.titleSuffix}
          description="Curated collection of projects showcasing my work."
          customIcon={
            <Star className="text-amber-300 w-12 h-12 md:w-16 md:h-16 fill-amber-300" />
          }
        />

        {/* Filter Section */}
        <div className="w-full max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                            activeCategory === cat 
                            ? 'bg-white text-black' 
                            : 'bg-[#1a1b1e] border border-[#333333] text-gray-400 hover:text-white hover:border-white/40'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Featured Project */}
        <div className="w-full max-w-6xl mx-auto mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="w-full md:w-1/2 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Medal className="w-4 h-4" />
                        {featuredProject.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{featuredProject.title}</h2>
                    <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-[family-name:var(--font-spline)] max-w-md">
                        {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {featuredProject.techStack.map((tech: string) => (
                            <span key={tech} className="px-3 py-1 bg-white/10 rounded-md text-[10px] text-gray-300 font-medium">{tech}</span>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <Link href={featuredProject.ctaLink} className="bg-white hover:bg-gray-200 text-black text-xs font-bold py-3 px-6 rounded-full transition-all uppercase tracking-wide inline-block">
                            {featuredProject.ctaText}
                        </Link>
                        <Link href={featuredProject.ctaLink} className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </div>  
                </div>

                <div className="w-full md:w-1/2 relative z-10">
                    <div className="bg-[#1a1b1e] rounded-xl overflow-hidden shadow-2xl border border-white/5 transform group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 w-full relative p-4 flex items-center justify-center">
                            <div className="w-full h-full bg-[#2c2d31] rounded-lg border border-white/10 flex flex-col p-4 gap-3">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex gap-4 h-full">
                                    <div className="w-1/4 h-full bg-white/5 rounded-md"></div>
                                    <div className="w-3/4 h-full flex flex-col gap-3">
                                        <div className="w-full h-1/2 bg-white/5 rounded-md"></div>
                                        <div className="flex gap-3 h-1/2">
                                            <div className="w-1/2 h-full bg-white/5 rounded-md"></div>
                                            <div className="w-1/2 h-full bg-white/5 rounded-md"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-12 md:pb-16 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                    <Link href={`/projects/${project.slug}`} key={index} className="group bg-[#1a1b1e] rounded-3xl border border-[#333333] overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full block">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1e] to-transparent z-10 opacity-60"></div>
                            <div className={`w-full h-full bg-gradient-to-br ${project.color} transition-transform duration-700 ease-out flex items-center justify-center transform group-hover:scale-105`}>
                                <Icon className="text-white/20 w-16 h-16" />
                            </div>
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow relative z-20 -mt-12">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className={`text-xl font-bold text-white ${project.hoverColor} transition-colors`}>{project.title}</h3>
                                <span className="text-[10px] text-gray-500 font-mono mt-1">{project.date}</span>
                            </div>
                            <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed font-[family-name:var(--font-spline)]">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] text-gray-500">{tag}</span>
                                ))}
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex gap-3">
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors relative z-10">
                                        <Code className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors relative z-10">
                                        <Globe className="w-5 h-5" />
                                    </Link>
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider text-white hover:${project.accent} transition-colors flex items-center gap-1`}>
                                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                                </span>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
