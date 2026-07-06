'use client';

import { useState } from 'react';
import { ProjectFilter } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory || project.category.includes(selectedCategory));

  return (
    <div>
      <ProjectFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
            <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <ProjectCard project={project} />
            </motion.div>
            ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-text-muted">
            No projects found in this category.
        </div>
      )}
    </div>
  );
}
