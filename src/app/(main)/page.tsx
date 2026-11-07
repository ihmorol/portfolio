import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { SkillsOverview } from '@/components/home/SkillsOverview';
import { LatestWriting } from '@/components/home/LatestWriting';
import { NowSpotlight } from '@/components/home/NowSpotlight';
import { ScheduleMeeting } from '@/components/home/ScheduleMeeting';
import { ContactGrid } from '@/components/home/ContactGrid';
import { SocialChannels } from '@/components/home/SocialChannels';
import { Footer } from '@/components/layout/Footer';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { socialLinks } from '@/data/social-links';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerGroup } from '@/components/motion/StaggerGroup';
import { getAllPosts } from '@/lib/markdown';
import type { BlogPost } from '@/types';

export default function HomePage() {
  const latestPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'category',
    'readTime',
  ]) as BlogPost[];

  return (
    <>
      <main className="section-shell page-padding-y relative flex flex-col">
        <PageLeftSideBar title="HOME" />
        <VerticalSocialLinks items={socialLinks} />
        <Reveal>
          <HeroSection />
        </Reveal>
        <StaggerGroup className="space-y-0">
          <Reveal delay={0.02}>
            <StatsSection />
          </Reveal>
          <Reveal delay={0.05}>
            <FeaturedProjects />
          </Reveal>
          <Reveal delay={0.08}>
            <SkillsOverview />
          </Reveal>
          <Reveal delay={0.1}>
            <LatestWriting posts={latestPosts.slice(0, 3)} />
          </Reveal>
          <Reveal delay={0.12}>
            <NowSpotlight />
          </Reveal>
          <Reveal delay={0.14}>
            <ScheduleMeeting />
          </Reveal>
          <Reveal delay={0.16}>
            <ContactGrid />
          </Reveal>
          <Reveal delay={0.18}>
            <SocialChannels />
          </Reveal>
        </StaggerGroup>
      </main>
      <Footer />
    </>
  );
}
