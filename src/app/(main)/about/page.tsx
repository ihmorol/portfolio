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
import { socialLinks } from '@/data/social-links';

export default function AboutPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10 pt-24">
        <PageLeftSideBar title="ABOUT" />
        <VerticalSocialLinks items={socialLinks} />
        <div className="pt-12 pb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            About <span className="font-light italic text-gray-400">The Creator</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Crafting meaningful digital narratives through design and technology. Based in San Francisco, inspiring globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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
