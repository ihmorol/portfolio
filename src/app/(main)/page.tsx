import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { SkillsOverview } from '@/components/home/SkillsOverview';
import { ScheduleMeeting } from '@/components/home/ScheduleMeeting';
import { ContactGrid } from '@/components/home/ContactGrid';
import { SocialChannels } from '@/components/home/SocialChannels';
import { Footer } from '@/components/layout/Footer';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { socialLinks } from '@/data/social-links';

export default function HomePage() {
  return (
    <main className="relative mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8 lg:px-12 pt-20 md:pt-24 pb-8 md:pb-12">
      <PageLeftSideBar title="HOME" />
      <VerticalSocialLinks items={socialLinks} />
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <SkillsOverview />
      <ScheduleMeeting />
      <ContactGrid />
      <SocialChannels />
      <Footer />
    </main>
  );
}
