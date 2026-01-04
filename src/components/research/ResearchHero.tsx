import React from 'react';
import { researchData } from '@/data/research-data';
import { PageHeader } from '@/components/shared/PageHeader';
import { FlaskConical } from 'lucide-react';

export const ResearchHero = () => {
  const { title, highlightedTitle, highlightIcon, description } = researchData.hero;

  return (
    <PageHeader
      titlePrefix={title}
      icon={highlightIcon}
      titleSuffix={highlightedTitle}
      description={description}
      customIcon={
        <FlaskConical className="text-amber-400 w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
      }
    />
  );
};
