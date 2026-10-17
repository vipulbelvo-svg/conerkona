import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Play, Clock, Share2, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/media/youtube-embed";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PodcastCard } from "@/components/cards/podcast-card";
import { PODCAST_EPISODES } from "@/data/mock";
import { formatDuration } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = PODCAST_EPISODES.find((e) => e.slug === slug);
  if (!episode) return { title: "Episode not found" };
  return {
    title: episode.title,
    description: episode.description,
    alternates: { canonical: `/podcasts/${slug}` },
    openGraph: {
      title: episode.title,
      description: episode.description,
      images: episode.coverImage ? [{ url: episode.coverImage.url }] : [],
      type: "article",
    },
  };
}

export default async function PodcastEpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = PODCAST_EPISODES.find((e) => e.slug === slug);
  if (!episode) notFound();

  const related = PODCAST_EPISODES.filter(
    (e) => e.id !== episode.id && e.category?.id === episode.category?.id
  ).slice(0, 4);

  // Podcast structured data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    duration: episode.duration ? `PT${Math.floor(episode.duration / 60)}M` : undefined,
    datePublished: episode.publishedAt,
    image: episode.coverImage?.url,
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://cornerkona.com"}/podcasts/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Podcasts", href: "/podcasts" },
            ...(episode.category
              ? [{ label: episode.category.title, href: `/podcasts/${episode.category.slug}` }]
              : []),
            { label: episode.title },
          ]}
        />

        {/* Episode header */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Cover */}
          <div className="relative w-full sm:w-56 aspect-square rounded-2xl overflow-hidden flex-shrink-0">
            {episode.coverImage ? (
              <Image
                src={episode.coverImage.url}
                alt={episode.coverImage.alt ?? episode.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 224px"
                priority
              />
            ) : (
              <div className="w-full h-full bg-[var(--color-ck-surface-2)] flex items-center justify-center">
                <Headphones size={48} className="text-white/20" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3">
            {episode.category && (
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: episode.category.accentColor ?? "var(--color-ck-accent)" }}
              >
                {episode.category.title}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {episode.title}
            </h1>
            {episode.description && (
              <p className="text-white/60 leading-relaxed">{episode.description}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-white/40">
              {episode.episodeNumber && <span>Episode {episode.episodeNumber}</span>}
              {episode.duration && (
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {formatDuration(episode.duration)}
                </span>
              )}
              {episode.publishedAt && (
                <span>{new Date(episode.publishedAt).toLocaleDateString("hi-IN")}</span>
              )}
            </div>

            <div className="flex gap-3 flex-wrap pt-2">
              <Button variant="accent" size="md" className="gap-2">
                <Play size={16} fill="white" />
                Play Episode
              </Button>
              <Button variant="outline" size="md" className="gap-2">
                <Share2 size={16} />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* YouTube embed — lazy loaded */}
        {episode.youtubeVideoId && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Watch on YouTube</h2>
            <YouTubeEmbed
              videoId={episode.youtubeVideoId}
              title={episode.title}
            />
          </div>
        )}

        {/* Related episodes */}
        {related.length > 0 && (
          <section className="space-y-4 pt-4 border-t border-[var(--color-ck-border)]">
            <h2 className="text-lg font-semibold text-white">Related Episodes</h2>
            <div className="space-y-3">
              {related.map((ep) => (
                <PodcastCard key={ep.id} episode={ep} variant="compact" />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
