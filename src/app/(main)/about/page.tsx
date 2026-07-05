import { IntroCard } from '@/components/about/IntroCard';
import { ValuesGrid } from '@/components/about/ValuesGrid';
import { InterestsGrid } from '@/components/about/InterestsGrid';
import { PhilosophyCard } from '@/components/about/PhilosophyCard';
import { JourneyWidget } from '@/components/about/JourneyWidget';
import { TechStack } from '@/components/about/TechStack';
import { ConnectSection } from '@/components/about/ConnectSection';
import { Footer } from '@/components/layout/Footer';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerGroup } from '@/components/motion/StaggerGroup';
import { socialLinks } from '@/data/social-links';
import { User } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <main className="section-shell page-padding-y relative z-10">
        <PageLeftSideBar title="ABOUT" />
        <VerticalSocialLinks items={socialLinks} />
        <Reveal>
          <PageHeader
            titlePrefix="About"
            icon="person"
            titleSuffix="The Creator"
            customIcon={
              <User className="text-accent-yellow w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
            }
            suffixItalic={true}
            description="Developer crafting digital experiences with precision and intent."
          />
        </Reveal>

        <StaggerGroup>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Reveal delay={0.02}>
                <IntroCard />
              </Reveal>
              <Reveal delay={0.05}>
                <ValuesGrid />
              </Reveal>
              <Reveal delay={0.08}>
                <InterestsGrid />
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Reveal delay={0.11}>
                <PhilosophyCard />
              </Reveal>
              <Reveal delay={0.14}>
                <JourneyWidget />
              </Reveal>
              <Reveal delay={0.17}>
                <TechStack />
              </Reveal>
            </div>
          </div>
        </StaggerGroup>

        <Reveal delay={0.2}>
          <ConnectSection />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
