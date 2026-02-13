import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { layoutData } from '@/data/layout-data';
import { projectsData } from '@/data/projects-data';

const metricTextColorMap: Record<string, string> = {
  'accent-green': 'text-green-300',
  'accent-peach': 'text-orange-300',
  'accent-blue': 'text-blue-300',
};

const metricBgColorMap: Record<string, string> = {
  'bg-accent-green/20': 'bg-green-500/20 border border-green-500/30',
  'bg-accent-peach/20': 'bg-orange-500/20 border border-orange-500/30',
  'bg-accent-blue/20': 'bg-blue-500/20 border border-blue-500/30',
};

const stripTagHash = (tag: string) => tag.replace(/^#/, '');

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { socialLinks } = layoutData.footer;
  const project = projectsData.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const detail = projectsData.projectDetails[params.slug as keyof typeof projectsData.projectDetails];
  const tags = detail?.tags ?? project.tags.map(stripTagHash);
  const headline = detail?.subtitle ?? project.category;
  const overview = detail?.heroDescription ?? project.description;

  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-dark text-white selection:bg-white selection:text-black font-display">
        <PageLeftSideBar title="PROJECT" />
        <VerticalSocialLinks items={socialLinks} />

        <main className="flex-1 w-full max-w-[1280px] mx-auto pt-32 pb-20 px-4 md:px-10 lg:px-20">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Back to projects
          </Link>

          <header className="mb-12 md:mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">{project.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl">{headline}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] uppercase tracking-wider text-gray-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 pt-6 border-t border-white/10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Role</p>
                <p className="font-semibold">{detail?.role ?? 'Developer'}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Duration</p>
                <p className="font-semibold">{detail?.duration ?? project.date}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Date</p>
                <p className="font-semibold">{detail?.date ?? project.date}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Type</p>
                <p className="font-semibold">{detail?.client ?? 'Personal Project'}</p>
              </div>
            </div>
          </header>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 md:mb-16">
            <article className="bg-card-dark border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{overview}</p>
            </article>

            <article className="bg-card-dark border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {(detail?.tags ?? project.tags.map(stripTagHash)).map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </section>

          {detail?.screens?.length ? (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl font-semibold mb-4">Project Screens</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {detail.screens.map((screen, index) => (
                  <div key={screen} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                    <Image src={screen} alt={`${project.title} screen ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {detail?.features?.length ? (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl font-semibold mb-4">Case Study Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {detail.features.map((feature) => (
                  <article key={feature.title} className="bg-card-dark border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                    {feature.description ? (
                      <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                    ) : null}
                    {feature.list?.length ? (
                      <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
                        {feature.list.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {detail?.impact?.metrics?.length ? (
            <section className="mb-12 md:mb-16">
              <h2 className="text-2xl font-semibold mb-4">Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {detail.impact.metrics.map((metric) => {
                  const textColor = metricTextColorMap[metric.color] || 'text-white';
                  const bgColor = metricBgColorMap[metric.bg] || 'bg-white/10 border border-white/10';

                  return (
                    <article key={metric.label} className="bg-card-dark border border-white/10 rounded-2xl p-6">
                      <span className={`inline-flex w-10 h-10 rounded-full items-center justify-center ${bgColor} mb-3`}>
                        <span className="material-symbols-outlined text-sm">{metric.icon}</span>
                      </span>
                      <p className={`text-3xl font-bold ${textColor}`}>{metric.val}</p>
                      <p className="text-sm text-gray-400 mt-1">{metric.label}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}

          <section className="bg-card-lighter rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">Interested in this project?</h3>
              <p className="text-sm text-gray-400">Reach out for source code walkthroughs or collaboration.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/projects" className="h-11 px-5 rounded-full border border-white/20 hover:border-white/40 transition-colors text-xs font-bold uppercase tracking-wider inline-flex items-center">
                View All Projects
              </Link>
              <Link href="/contact" className="h-11 px-5 rounded-full bg-white text-black hover:bg-gray-200 transition-colors text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2">
                Contact <ExternalLink size={14} />
              </Link>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
