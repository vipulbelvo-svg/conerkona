import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Clock, Share2, Headphones } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Button } from "@/components/ui/button";
import { PodcastCard } from "@/components/cards/podcast-card";
import { ARTICLES, PODCAST_EPISODES } from "@/data/mock";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${article.category?.slug}/${slug}`,
      ...(article.language === "hi" && {
        languages: { "hi-IN": `/articles/${article.category?.slug}/${slug}` },
      }),
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [{ url: article.coverImage.url }] : [],
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedPodcast = article.relatedPodcast
    ? PODCAST_EPISODES.find((e) => e.id === article.relatedPodcast?.id)
    : PODCAST_EPISODES.find((e) => e.category?.id === article.category?.id);

  // NewsArticle structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage?.url,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: article.author
      ? { "@type": "Person", name: article.author.name }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Corner Kona",
      url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cornerkona.com",
    },
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://cornerkona.com"}/articles/${article.category?.slug}/${slug}`,
    inLanguage: article.language === "en" ? "en-IN" : "hi-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Articles", href: "/articles" },
            ...(article.category
              ? [{ label: article.category.title, href: `/articles/${article.category.slug}` }]
              : []),
            { label: article.title },
          ]}
        />

        {/* Article header */}
        <header className="space-y-4">
          {article.category && (
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: article.category.accentColor ?? "var(--color-ck-accent)" }}
            >
              {article.category.title}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-lg text-white/60 leading-relaxed">{article.excerpt}</p>
          )}

          <div className="flex items-center gap-4 flex-wrap text-sm text-white/40">
            {article.author && <span>{article.author.name}</span>}
            {article.readingTime && (
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {article.readingTime} min read
              </span>
            )}
            {article.publishedAt && (
              <span>{new Date(article.publishedAt).toLocaleDateString("hi-IN")}</span>
            )}
            <Button variant="ghost" size="sm" className="gap-1.5 ml-auto">
              <Share2 size={14} />
              Share
            </Button>
          </div>
        </header>

        {/* Cover image */}
        {article.coverImage && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
            <Image
              src={article.coverImage.url}
              alt={article.coverImage.alt ?? article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Article body placeholder */}
        <div className="prose prose-invert prose-lg max-w-none space-y-4">
          <p className="text-white/70 leading-relaxed">
            {article.excerpt}
          </p>
          <p className="text-white/40 text-sm italic">
            Full article body will be rendered from CMS content (Step 12).
          </p>
        </div>

        {/* Related podcast */}
        {relatedPodcast && (
          <section className="space-y-3 pt-6 border-t border-[var(--color-ck-border)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Headphones size={16} className="text-[var(--color-ck-accent)]" />
              Listen to the podcast version
            </div>
            <PodcastCard episode={relatedPodcast} variant="compact" />
          </section>
        )}
      </div>
    </>
  );
}
