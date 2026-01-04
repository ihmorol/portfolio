'use client';

import { Button } from '@/components/ui/Button';
import { PROJECT_CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function ProjectFilter({ selectedCategory, onSelectCategory }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
      {PROJECT_CATEGORIES.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'white' : 'outline'}
          className={cn(
            'border-white/10 hover:bg-white/10 px-6',
            selectedCategory === category.id ? 'hover:bg-gray-200' : 'text-gray-400 hover:text-white'
          )}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
