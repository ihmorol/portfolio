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
            'border-border hover:bg-foreground/10 px-6',
            selectedCategory === category.id ? 'hover:bg-foreground/85' : 'text-text-secondary hover:text-text-primary'
          )}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
