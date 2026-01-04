import { Footer } from '@/components/layout/Footer';
import { ProgrammingLanguages } from '@/components/skills/ProgrammingLanguages';
import { AiMlSection } from '@/components/skills/AiMlSection';
import { CurrentlyLearning } from '@/components/skills/CurrentlyLearning';
import { WebMobileSection } from '@/components/skills/WebMobileSection';
import { DevOpsToolsSection } from '@/components/skills/DevOpsToolsSection';
import { Certifications } from '@/components/skills/Certifications';
import { SoftSkills } from '@/components/skills/SoftSkills';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { layoutData } from '@/data/layout-data';
import { skillsData } from '@/data/skills-data';
import { Code } from 'lucide-react';

export default function SkillsPage() {
  const { header } = skillsData;
  const { socialLinks } = layoutData.footer;

  return (
    <>
      <main className="flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12 relative min-h-screen">
        <PageLeftSideBar title="SKILLS" />
        <VerticalSocialLinks items={socialLinks} />
        
        <PageHeader
          titlePrefix={header.titlePrefix}
          icon={header.titleIcon}
          titleSuffix={header.titleSuffix}
          customIcon={
            <Code className="text-amber-400 w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
          }
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 pb-12 md:pb-16 max-w-6xl mx-auto">
          <ProgrammingLanguages />
          
          <AiMlSection />
          
          <CurrentlyLearning />
          
          <WebMobileSection />
          
          <DevOpsToolsSection />
          
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
            <Certifications />
            <SoftSkills />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

