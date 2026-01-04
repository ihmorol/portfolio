'use client';

import { ExperienceCard } from '@/components/experience/ExperienceCard';
import { LeadershipCard } from '@/components/experience/LeadershipCard';
import { GrowthSection } from '@/components/experience/GrowthSection';
import { VolunteeringCard } from '@/components/experience/VolunteeringCard';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { layoutData } from '@/data/layout-data';
import { experienceData } from '@/data/experience-data';
import { Briefcase } from 'lucide-react';

export default function ExperiencePage() {
  const { header, experience, leadership, growth, volunteering, cta } = experienceData;
  const { socialLinks } = layoutData.footer; // Reusing social links from layout data, or we could add to experienceData if specific.
  // The original file used specific socialLinks import. layoutData has them too. I'll use layoutData.

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12 max-w-[1440px]">
      <PageLeftSideBar title="EXPERIENCE" />
      <VerticalSocialLinks items={socialLinks} />
      
      {/* Header */}
      <PageHeader
        titlePrefix={header.titlePrefix}
        icon={header.titleIcon}
        titleSuffix={header.titleSuffix}
        description={header.description}
        customIcon={
          <Briefcase className="text-amber-400 w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
        }
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-12 md:pb-16 max-w-6xl mx-auto">
        
        {/* Experience Section */}
        <div className="md:col-span-12 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-accent-yellow rounded-full"></span>
                {experience.title}
            </h2>
            
            {experience.items.map((item, index) => (
                <ExperienceCard
                    key={index}
                    role={item.role}
                    company={item.company}
                    location={item.location}
                    type={item.type}
                    period={item.period}
                    description={item.description}
                    sections={item.sections}
                    tags={item.tags}
                />
            ))}
        </div>

        {/* Leadership & Growth Row */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Leadership Section */}
        <div className="md:col-span-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 mt-8">
                <span className="w-2 h-8 bg-accent-blue rounded-full"></span>
                {leadership.title}
            </h2>
            {leadership.items.map((item, index) => (
                <LeadershipCard
                    key={index}
                    role={item.role}
                    period={item.period}
                    context={item.context}
                    description={item.description}
                    impactTitle={item.impactTitle}
                    impact={item.impact}
                    tags={item.tags}
                />
            ))}
        </div>

        {/* Growth Section */}
        <div className="md:col-span-4">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 mt-8">
                <span className="w-2 h-8 bg-accent-purple rounded-full"></span>
                {growth.title}
            </h2>
            <GrowthSection 
              title={growth.subTitle}
              skills={growth.skills}
              className='mb-0'
            />
        </div>
        </div>

        {/* Volunteering Section */}
        <div className="md:col-span-12 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 mt-8">
                <span className="w-2 h-8 bg-accent-green rounded-full"></span>
                {volunteering.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {volunteering.items.map((item, index) => (
                    <VolunteeringCard 
                        key={index}
                        role={item.role}
                        organization={item.organization}
                        period={item.period}
                        description={item.description}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>

        {/* Footer CTA */}
        <div className="md:col-span-12 bg-white rounded-card p-8 md:p-12 mt-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -mr-32 -mt-32 z-0"></div>
            <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-bold text-black mb-4">{cta.title}</h3>
                <p className="text-gray-600 font-display">{cta.description}</p>
            </div>
            <div className="relative z-10 shrink-0">
                <button className="bg-black hover:bg-gray-800 text-white text-xs font-bold py-4 px-8 rounded-full transition-all uppercase tracking-wider shadow-lg">
                    {cta.buttonText}
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
