'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Globe,
  Medal,
  Star,
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/motion/Reveal';
import { HoverField } from '@/components/motion/HoverField';
import { StaggerGroup } from '@/components/motion/StaggerGroup';
import { PageHeader } from '@/components/shared/PageHeader';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { layoutData } from '@/data/layout-data';
import { projectsData } from '@/data/projects-data';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const { socialLinks } = layoutData.footer;
  const { header, categories, featuredProject, projects } = projectsData;

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-background min-h-screen flex flex-col font-body">
      <main className="section-shell page-padding-y relative flex-grow">
        <PageLeftSideBar title="PROJECTS" />
        <VerticalSocialLinks items={socialLinks} />

        <Reveal>
          <PageHeader
            titlePrefix={header.title}
            icon=""
            titleSuffix={header.titleSuffix}
            description="Curated collection of projects showcasing shipped outcomes."
            customIcon={
              <Star className="text-accent-yellow w-12 h-12 md:w-16 md:h-16 fill-current" />
            }
          />
        </Reveal>

        <Reveal delay={0.03}>
          <div className="w-full max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={[
                      'focus-ring h-10 px-5 rounded-full type-micro transition-colors border',
                      isActive
                        ? 'bg-white text-black border-white'
                        : 'bg-background-secondary text-text-secondary border-border hover:text-text-primary hover:border-white/40',
                    ].join(' ')}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="w-full max-w-6xl mx-auto mb-12 md:mb-16 surface-card-strong p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/brand/mesh-hero-01.svg')] bg-cover bg-center opacity-35" />
            <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-accent-blue/20 blur-[88px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-yellow/10 border border-accent-yellow/30 rounded-full type-micro text-accent-yellow mb-4">
                  <Medal className="w-4 h-4" />
                  {featuredProject.badge}
                </div>
                <h2 className="type-h1 text-text-primary mb-4">{featuredProject.title}</h2>
                <p className="type-body text-text-secondary mb-6 max-w-md">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md bg-background-tertiary border border-border type-caption text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={featuredProject.ctaLink}
                    className="focus-ring h-11 px-6 rounded-full bg-white text-black hover:bg-gray-200 type-micro inline-flex items-center"
                  >
                    {featuredProject.ctaText}
                  </Link>
                  <Link
                    href={featuredProject.ctaLink}
                    className="focus-ring h-11 w-11 rounded-full border border-white/25 text-text-primary hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
                    aria-label="Open featured project"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-background-secondary rounded-xl overflow-hidden border border-border shadow-card-hover">
                  <div className="aspect-video w-full p-4 flex items-center justify-center">
                    <div className="w-full h-full bg-background-tertiary rounded-lg border border-border p-4 gap-3 flex flex-col">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="flex gap-4 h-full">
                        <div className="w-1/4 h-full bg-white/5 rounded-md" />
                        <div className="w-3/4 h-full flex flex-col gap-3">
                          <div className="w-full h-1/2 bg-white/5 rounded-md" />
                          <div className="flex gap-3 h-1/2">
                            <div className="w-1/2 h-full bg-white/5 rounded-md" />
                            <div className="w-1/2 h-full bg-white/5 rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <StaggerGroup className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-12 md:pb-16 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.slug} delay={0.03 + index * 0.02} once>
                <HoverField>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group surface-card p-1 flex flex-col h-full block hover:border-white/20 transition-colors"
                  >
                    <div className="h-64 overflow-hidden relative rounded-[calc(var(--radius-xl)-4px)]">
                      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent z-10 opacity-60" />
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.color} transition-transform duration-700 ease-out flex items-center justify-center transform group-hover:scale-105`}
                      >
                        <Icon className="text-white/20 w-16 h-16" />
                      </div>
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full type-micro text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow relative z-20 -mt-12">
                      <div className="flex justify-between items-start mb-2 gap-3">
                        <h3
                          className={`type-h3 text-text-primary ${project.hoverColor} transition-colors`}
                        >
                          {project.title}
                        </h3>
                        <span className="type-caption text-text-muted mt-1 whitespace-nowrap">
                          {project.date}
                        </span>
                      </div>
                      <p className="type-caption text-text-secondary mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.tags.map((tag) => (
                          <span key={tag} className="type-caption text-text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex gap-3 text-text-secondary">
                          <Code className="w-5 h-5" />
                          <Globe className="w-5 h-5" />
                        </div>
                        <span className="type-micro text-text-primary flex items-center gap-1">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </HoverField>
              </Reveal>
            );
          })}
        </StaggerGroup>
      </main>
      <Footer />
    </div>
  );
}
