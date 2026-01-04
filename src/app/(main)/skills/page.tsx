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
import { layoutData } from '@/data/layout-data';
import { skillsData } from '@/data/skills-data';

export default function SkillsPage() {
  const { header } = skillsData;
  const { socialLinks } = layoutData.footer;

  return (
    <>
      <main className="flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-12 relative min-h-screen">
        <PageLeftSideBar title="SKILLS" />
        <VerticalSocialLinks items={socialLinks} />
        
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white flex items-center justify-center gap-2 md:gap-4 font-display">
            {header.titlePrefix}
            <span className="material-symbols-outlined text-amber-300 text-5xl md:text-7xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>{header.titleIcon}</span>
            {header.titleSuffix}
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 pb-20 max-w-6xl mx-auto">
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

