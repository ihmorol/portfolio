import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Github,
  Globe,
  Quote
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Reveal } from '@/components/motion/Reveal';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { layoutData } from '@/data/layout-data';
import { projectsData } from '@/data/projects-data';
import { projectDetailsData } from '@/data/project-details-data';

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

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { socialLinks } = layoutData.footer;
  const project = projectsData.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const detail = projectDetailsData[params.slug];
  const tags = detail?.tags ?? project.tags.map(stripTagHash);
  const headline = detail?.subtitle ?? project.category;
  const overview = detail?.heroDescription ?? project.description;

  // Link buttons: prefer curated detail links, fall back to card github/live.
  const links =
    detail?.links?.length
      ? detail.links
      : [
          ...(project.github ? [{ label: 'View Source', url: project.github }] : []),
          ...(project.live ? [{ label: 'Live Site', url: project.live, primary: true }] : []),
        ];

  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-text-primary selection:bg-foreground selection:text-background font-body">
        <PageLeftSideBar title="PROJECT" />
        <VerticalSocialLinks items={socialLinks} />

        <main className="flex-1 section-shell pt-32 pb-20">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 type-caption text-text-secondary hover:text-text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to projects
            </Link>
          </Reveal>

          {/* ── Hero ─────────────────────────────────────────────── */}
          <Reveal delay={0.03}>
            <header className="mb-12 md:mb-16">
              <p className="type-micro text-text-muted mb-3 uppercase tracking-widest">{project.category}</p>
              <h1 className="type-display-2 text-text-primary mb-4">{project.title}</h1>
              <p className="type-body-lg text-text-secondary max-w-3xl">{headline}</p>

              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-border bg-background-secondary type-caption text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-6">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.primary
                          ? 'focus-ring h-10 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 transition-colors type-micro inline-flex items-center gap-2'
                          : 'focus-ring h-10 px-5 rounded-full border border-border-strong text-text-primary hover:bg-foreground hover:text-background transition-colors type-micro inline-flex items-center gap-2'
                      }
                    >
                      {/^https?:\/\/github\.com/.test(link.url) ? (
                        <Github size={16} />
                      ) : /Live|Site|Demo/i.test(link.label) ? (
                        <Globe size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 pt-6 border-t border-border">
                <div>
                  <p className="type-micro text-text-muted mb-1">Role</p>
                  <p className="font-semibold">{detail?.role ?? 'Developer'}</p>
                </div>
                <div>
                  <p className="type-micro text-text-muted mb-1">Duration</p>
                  <p className="font-semibold">{detail?.duration ?? project.date}</p>
                </div>
                <div>
                  <p className="type-micro text-text-muted mb-1">Date</p>
                  <p className="font-semibold">{detail?.date ?? project.date}</p>
                </div>
                <div>
                  <p className="type-micro text-text-muted mb-1">Type</p>
                  <p className="font-semibold">{detail?.client ?? 'Personal Project'}</p>
                </div>
              </div>
            </header>
          </Reveal>

          {/* ── Evidence tiles ───────────────────────────────────── */}
          {detail?.stats?.length ? (
            <Reveal delay={0.05}>
              <section className="mb-12 md:mb-16">
                <h2 className="type-h2 mb-5">By the Numbers</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {detail.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="surface-card p-5 flex flex-col justify-center min-h-[110px]"
                    >
                      <p className="type-h2 text-text-primary leading-tight">{stat.value}</p>
                      <p className="type-caption text-text-muted mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          ) : null}

          {/* ── Overview + Stack ─────────────────────────────────── */}
          <Reveal delay={0.05}>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 md:mb-16">
              <article className="surface-card p-6 md:p-8">
                <h2 className="type-h2 mb-4">Overview</h2>
                <p className="type-body text-text-secondary leading-relaxed">{overview}</p>
              </article>

              <article className="surface-card p-6 md:p-8">
                <h2 className="type-h2 mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-background-secondary border border-border type-caption text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </section>
          </Reveal>

          {/* ── Project screens (if any) ─────────────────────────── */}
          {detail?.screens?.length ? (
            <Reveal delay={0.07}>
              <section className="mb-12 md:mb-16">
                <h2 className="type-h2 mb-4">Project Screens</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {detail.screens.map((screen, index) => (
                    <div
                      key={screen}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black/30"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={screen}
                        alt={`${project.title} screen ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          ) : null}

          {/* ── Feature blocks ───────────────────────────────────── */}
          {detail?.features?.length ? (
            <Reveal delay={0.09}>
              <section className="mb-12 md:mb-16">
                <h2 className="type-h2 mb-2">Inside the Project</h2>
                <p className="type-caption text-text-secondary mb-6">
                  What it does, how it works, and what it ships.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {detail.features.map((feature, index) => (
                    <article key={feature.title} className="surface-card p-6 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex w-10 h-10 rounded-xl items-center justify-center ${feature.iconBg}`}
                        >
                          <span className={`material-symbols-outlined text-sm ${feature.iconColor}`}>
                            {feature.icon}
                          </span>
                        </span>
                        <span className="type-micro text-text-muted" aria-hidden="true">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="type-h3 mb-3">{feature.title}</h3>
                      {feature.description ? (
                        <p className="type-caption text-text-secondary leading-relaxed">
                          {feature.description}
                        </p>
                      ) : null}
                      {feature.list?.length ? (
                        <ul className="mt-4 space-y-2">
                          {feature.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 type-caption text-text-secondary"
                            >
                              <Check
                                size={14}
                                className="text-green-400 mt-0.5 shrink-0"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>
          ) : null}

          {/* ── Outcomes ─────────────────────────────────────────── */}
          {detail?.impact?.metrics?.length ? (
            <Reveal delay={0.11}>
              <section className="mb-12 md:mb-16">
                <h2 className="type-h2 mb-2">{detail.impact.title}</h2>
                <p className="type-caption text-text-secondary mb-6">{detail.impact.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {detail.impact.metrics.map((metric) => {
                    const textColor = metricTextColorMap[metric.color] || 'text-text-primary';
                    const bgColor =
                      metricBgColorMap[metric.bg] || 'bg-foreground/10 border border-border';

                    return (
                      <article key={metric.label} className="surface-card p-6">
                        <span
                          className={`inline-flex w-10 h-10 rounded-full items-center justify-center ${bgColor} mb-3`}
                        >
                          <span className="material-symbols-outlined text-sm">{metric.icon}</span>
                        </span>
                        <p className={`type-h1 ${textColor}`}>{metric.val}</p>
                        <p className="type-caption text-text-muted mt-1">{metric.label}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            </Reveal>
          ) : null}

          {/* ── Reflection quote ─────────────────────────────────── */}
          {detail?.impact?.testimonials?.length ? (
            <Reveal delay={0.13}>
              <section className="mb-12 md:mb-16">
                <figure className="surface-card p-6 md:p-10 relative overflow-hidden">
                  <Quote
                    size={64}
                    className="absolute top-6 right-8 text-foreground/10"
                    aria-hidden="true"
                  />
                  <blockquote className="type-body-lg text-text-primary leading-relaxed max-w-3xl">
                    &ldquo;{detail.impact.testimonials[0].quote}&rdquo;
                  </blockquote>
                  <figcaption className="type-caption text-text-muted mt-4">
                    — {detail.impact.testimonials[0].author}
                  </figcaption>
                </figure>
              </section>
            </Reveal>
          ) : null}

          {/* ── CTA ──────────────────────────────────────────────── */}
          <Reveal delay={0.15}>
            <section className="surface-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="type-h3 mb-1">Interested in this project?</h3>
                <p className="type-caption text-text-secondary">
                  Reach out for source code walkthroughs or collaboration.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring h-11 px-5 rounded-full border border-border-strong hover:border-border-strong transition-colors type-micro inline-flex items-center gap-2"
                  >
                    <Github size={14} /> {link.label}
                  </a>
                ))}
                <Link
                  href="/projects"
                  className="focus-ring h-11 px-5 rounded-full border border-border-strong hover:border-border-strong transition-colors type-micro inline-flex items-center"
                >
                  View All Projects
                </Link>
                <Link
                  href="/contact"
                  className="focus-ring h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 transition-colors type-micro inline-flex items-center gap-2"
                >
                  Contact <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          </Reveal>
        </main>
      </div>
      <Footer />
    </>
  );
}
