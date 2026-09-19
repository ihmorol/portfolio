'use client';

import { Fragment, useState } from 'react';
import { BlogPost } from '@/types';
import { BlogFilter } from './BlogFilter';
import { BlogCard } from './BlogCard';
import { NewsletterWidget } from './NewsletterWidget';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { PageHeader } from '@/components/shared/PageHeader';
import { Footer } from '@/components/layout/Footer';
import { layoutData } from '@/data/layout-data';
import { blogData } from '@/data/blog-data';
import { BookOpen, Search, X } from 'lucide-react';

interface BlogContentProps {
  initialPosts: BlogPost[];
}

export function BlogContent({ initialPosts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const { socialLinks } = layoutData.footer;
  const { header, categories, connect, loadMoreText } = blogData;

  const hasQuery = searchQuery.trim().length > 0;

  const matchesSearch = (post: BlogPost) => {
    if (!hasQuery) return true;
    const q = searchQuery.trim().toLowerCase();
    return [
      post.title,
      post.excerpt,
      post.category,
      ...(post.tags || []),
    ].join(' ').toLowerCase().includes(q);
  };

  const filteredPosts = initialPosts.filter(post => {
    if (activeCategory !== 'All Posts') {
      const postCat = post.category ? post.category.toLowerCase().replace(/\s+/g, '-') : '';
      const activeCat = activeCategory.toLowerCase().replace(/\s+/g, '-');
      if (postCat !== activeCat) return false;
    }

    return matchesSearch(post);
  });

  return (
    <div className="bg-background min-h-screen flex flex-col font-[family-name:var(--font-jakarta)]">
      <main className="flex-grow w-full relative">
        <PageLeftSideBar title="BLOG" />
        <VerticalSocialLinks items={socialLinks} />

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-[15%] w-[440px] h-[440px] rounded-full bg-accent-blue/10 blur-3xl" />
            <div className="absolute -top-24 right-[15%] w-[380px] h-[380px] rounded-full bg-accent-green/10 blur-3xl" />
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[520px] h-[300px] rounded-full bg-accent-yellow/5 blur-3xl" />
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-20 pb-10 md:pb-12">
            <PageHeader
              titlePrefix={header.title}
              icon="menu_book"
              titleSuffix={header.titleSuffix}
              customIcon={
                <BookOpen className="text-amber-400 w-10 h-10 md:w-14 md:h-14 stroke-[2.5]" />
              }
              description="Notes on research, engineering, and studying well, written from experience."
            />

            {/* Search */}
            <div className="max-w-md mx-auto relative mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts by title, topic, course, or tag..."
                  className="w-full bg-background border border-border rounded-full pl-11 pr-10 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-strong transition-colors shadow-sm"
                />
                {hasQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              {hasQuery && (
                <p className="text-xs text-text-secondary mt-2 ml-1 text-center">
                  {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'} matching &quot;{searchQuery.trim()}&quot;
                </p>
              )}
            </div>

            {/* Category filter */}
            <BlogFilter
              categories={categories.filter((c: string) => c !== 'All Posts')}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </section>

        {/* Latest posts */}
        <section className="border-y border-border/60 bg-background-tertiary/40">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
            <div className="max-w-6xl mx-auto">

              <div className="flex items-end justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                  {activeCategory === 'All Posts' ? 'Latest Posts' : activeCategory}
                </h2>
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  {filteredPosts.length} post{filteredPosts.length === 1 ? '' : 's'}
                </span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                {filteredPosts.map((post, index) => {
                  const showNewsletter = index === 2;

                  return (
                    <Fragment key={post.slug}>
                      <BlogCard post={post} />
                      {showNewsletter && <NewsletterWidget />}
                    </Fragment>
                  );
                })}

                {filteredPosts.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <p className="text-sm text-text-secondary">
                      No posts match your filters. Try a different keyword or category.
                    </p>
                  </div>
                )}
              </div>

              {/* Load More Button Placeholder */}
              <div className="flex justify-center pt-8">
                <button className="bg-background hover:bg-background-tertiary text-text-primary border border-border px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2">
                  {loadMoreText}
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>

              {/* Connect Section matching design */}
              <div className="mt-12 rounded-[24px] border border-border bg-card p-6 md:px-10 md:py-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-text-primary mb-2">{connect.title}</h3>
                  <p className="text-xs text-text-secondary font-[family-name:var(--font-spline)] max-w-sm">
                    {connect.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  {socialLinks.map((link, i) => (
                    <a key={i} href={link.url} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background-tertiary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-text-secondary">
                      <span className="text-xs font-bold">{link.title.substring(0, 1)}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
