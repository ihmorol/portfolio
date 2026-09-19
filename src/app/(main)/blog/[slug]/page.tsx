import { getPostBySlug, getAllPosts, markdownToHtml } from '@/lib/markdown';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/types';
import { PageLeftSideBar } from '@/components/shared/page-left-sidebar';
import { VerticalSocialLinks } from '@/components/shared/vertical-social-links';
import { socialLinks } from '@/data/social-links';

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'category',
    'tags',
    'references'
  ]) as BlogPost;

  const content = await markdownToHtml(post.content || '');

  return (
    <>
      <main className="pt-32 pb-20 relative">
        <PageLeftSideBar title="BLOG" />
        <VerticalSocialLinks items={socialLinks} />
         <article className="container mx-auto px-6 max-w-4xl">
             {/* Back Link */}
            <Link href="/blog" className="inline-flex items-center text-text-secondary hover:text-text-primary mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            {/* Header */}
            <div className="mb-12">
                <div className="flex gap-2 mb-6">
                    <Badge variant="glass" className="text-accent-purple border-accent-purple/20">{post.category}</Badge>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight mb-8 leading-tight">
                    {post.title}
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-text-secondary border-b border-border/60 pb-8">
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full overflow-hidden relative">
                             <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                         </div>
                         <span className="font-bold text-text-primary">{post.author.name}</span>
                    </div>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {formatDate(post.date)}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> 5 min read</span>
                </div>
            </div>

            {/* Cover Image */}
             <div className="rounded-[32px] overflow-hidden aspect-video relative mb-16 shadow-2xl">
                 <Image 
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div 
                className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-blue prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            
            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-border/60">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="text-sm text-text-secondary bg-foreground/5 px-3 py-1 rounded-full">#{tag}</span>
                    ))}
                </div>
            </div>

            {/* Evidence and references */}
            {post.references && post.references.length > 0 && (
                <div className="mt-10 pt-8 border-t border-border/60 pb-4">
                    <h2 className="type-h3 text-text-primary mb-5">Evidence and references</h2>
                    <ol className="space-y-4">
                        {post.references.map((ref, i) => (
                            <li key={i} className="pl-4 text-sm leading-relaxed text-text-secondary border-l-2 border-border">
                                <span className="font-bold text-text-primary">{ref.label}</span>
                                {ref.url ? (
                                    <>
                                        {" — "}
                                        <a
                                            href={ref.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent-blue hover:underline break-all"
                                        >
                                            {ref.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                        </a>
                                    </>
                                ) : null}
                                {ref.note ? (
                                    <span className="block mt-1">{ref.note}</span>
                                ) : null}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
         </article>
      </main>
      <Footer />
    </>
  );
}
