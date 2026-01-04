'use client';

import { useState } from 'react';
import { BlogPost, SocialLinks } from '@/types';
import { FeaturedPost } from './FeaturedPost';
import { BlogFilter } from './BlogFilter';
import { BlogCard } from './BlogCard';
import { NewsletterWidget } from './NewsletterWidget';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { Footer } from '@/components/layout/Footer';
import { BookOpen } from 'lucide-react';
import { layoutData } from '@/data/layout-data';
import { blogData } from '@/data/blog-data';

interface BlogContentProps {
  initialPosts: BlogPost[];
}

export function BlogContent({ initialPosts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const { socialLinks } = layoutData.footer;
  const { header, categories, connect, loadMoreText } = blogData;

  // Logic to find featured post: 
  // 1. Explicitly marked as featured
  // 2. Or the latest post if none marked
  const featuredPost = initialPosts.find(p => p.featured) || initialPosts[0];
  
  // Filter remaining posts
  const filteredPosts = initialPosts.filter(post => {
    // Exclude the featured post from the grid IF it's the one being shown as featured
    const isFeatured = post.slug === featuredPost?.slug;
    if (isFeatured && activeCategory === 'All Posts') return false; 
    
    // Check category match
    if (activeCategory === 'All Posts') return true;
    
    // Normalize logic for comparison (handle slug-like vs display names)
    const postCat = post.category ? post.category.toLowerCase().replace(/\s+/g, '-') : '';
    const activeCat = activeCategory.toLowerCase().replace(/\s+/g, '-');
    
    return postCat === activeCat;
  });

  // Insert Newsletter Widget after the 2nd item in the grid, or just append it
  // We can just inject it in the map loop or layout
  
  return (
    <div className="bg-[#000000] min-h-screen flex flex-col font-[family-name:var(--font-jakarta)]">
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-12 relative">
          
        <PageLeftSideBar title="BLOG" />
        <VerticalSocialLinks items={socialLinks} />

        <div className="text-center mb-12 md:mb-16 mt-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white flex items-center justify-center gap-2 md:gap-4 font-[family-name:var(--font-jakarta)]">
                {header.title}
                <BookOpen className="text-amber-300 w-12 h-12 md:w-16 md:h-16" strokeWidth={2.5} />
                {header.titleSuffix}
            </h1>
        </div>

        {/* Featured Post - Only show on 'All Posts' or if it matches category */}
        {(activeCategory === 'All Posts' || (featuredPost && featuredPost.category.toLowerCase().replace(/\s+/g, '-') === activeCategory.toLowerCase().replace(/\s+/g, '-'))) && featuredPost && (
             <div className="w-full max-w-6xl mx-auto">
                 <FeaturedPost post={featuredPost} />
             </div>
        )}

        {/* Filters */}
        <div className="w-full max-w-6xl mx-auto">
             <BlogFilter 
                categories={categories.filter((c: string) => c !== 'All Posts')} 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory} 
             />
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 pb-20 max-w-6xl mx-auto">
             {filteredPosts.map((post, index) => {
                 // Example injection of Newsletter Widget in the grid
                 // Let's say we want it after the 2nd post
                 const showNewsletter = index === 1;
                 
                 return (
                    <>
                       <BlogCard key={post.slug} post={post} />
                       {showNewsletter && (
                           <NewsletterWidget />
                       )}
                    </>
                 );
             })}
             
             {/* If few posts, show newsletter at the end if not shown yet */}
             {filteredPosts.length < 2 && (
                 <NewsletterWidget />
             )}
             
             {/* Load More Button Placeholder */}
             <div className="md:col-span-12 flex justify-center pt-8">
                <button className="bg-[#1a1b1e] hover:bg-[#2c2d31] text-white border border-[#333333] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2">
                    {loadMoreText}
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
            </div>

            {/* Connect Section matching design */}
            <div className="md:col-span-12 bg-[#1a1b1e] rounded-3xl p-6 md:px-10 md:py-8 border border-[#333333] flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">{connect.title}</h3>
                    <p className="text-xs text-gray-400 font-[family-name:var(--font-spline)] max-w-sm">
                        {connect.description}
                    </p>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                     {socialLinks.map((link, i) => (
                         <a key={i} href={link.url} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2c2d31] flex items-center justify-center hover:bg-white hover:text-black transition-colors text-gray-400">
                             {/* Simple initial for now or map specific icons if needed */}
                             <span className="text-xs font-bold">{link.title.substring(0, 1)}</span> 
                         </a>
                     ))}
                </div>
            </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}
