import React from 'react';
import { Footer } from '@/components/layout/Footer';
import { ResearchHero } from '@/components/research/ResearchHero';
import { ResearchVision } from '@/components/research/ResearchVision';
import { ResearchExperience } from '@/components/research/ResearchExperience';
import { PublicationList } from '@/components/research/PublicationList';
import { PostersTalks } from '@/components/research/PostersTalks';
import { ResearchTopics } from '@/components/research/ResearchTopics';
import { ActiveProjects } from '@/components/research/ActiveProjects';
import { ConnectSection } from '@/components/research/ConnectSection';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { layoutData } from '@/data/layout-data';

export default function ResearchPage() {
  const { socialLinks } = layoutData.footer;

  return (
    <>
      <main className="flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12 relative min-h-screen">
        <PageLeftSideBar title="RESEARCH" />
        <VerticalSocialLinks items={socialLinks} />

        <ResearchHero />

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-12 md:pb-16 max-w-6xl mx-auto">
          <ResearchVision />

          <ResearchExperience />

          <PublicationList />

          <div className="md:col-span-4 flex flex-col gap-6">
            <PostersTalks />
            <ResearchTopics />
          </div>

          <ActiveProjects />
          
          <ConnectSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
