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
import { socialLinks } from '@/data/social-links';
import { User } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-8 md:pb-12 relative z-10 pt-20 md:pt-24">
        <PageLeftSideBar title="ABOUT" />
        <VerticalSocialLinks items={socialLinks} />
        <PageHeader
          titlePrefix="About"
          icon="person"
          titleSuffix="The Creator"
          customIcon={
            <User className="text-amber-400 w-12 h-12 md:w-16 md:h-16 stroke-[2.5]" />
          }
          suffixItalic={true}
          description="Developer crafting digital experiences with passion and precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <IntroCard />
            <ValuesGrid />
            <InterestsGrid />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <PhilosophyCard />
            <JourneyWidget />
            <TechStack />
          </div>
        </div>

        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
