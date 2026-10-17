import type { Metadata } from "next";
import { CarouselRow } from "@/components/sections/carousel-row";
import { PodcastCard } from "@/components/cards/podcast-card";
import { PODCAST_EPISODES, CATEGORIES } from "@/data/mock";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "Browse all Corner Kona podcasts — Sports, Entertainment, Geopolitics, Bhakti and Lifestyle. Stream or download.",
  alternates: { canonical: "/podcasts" },
};

export default function PodcastsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Podcasts</h1>
        <p className="text-white/50 text-lg">
          Stories told through sound — discover every episode
        </p>
      </div>

      {/* Category filter pills */}
      <div className="flex gap-2 flex-wrap">
        <button className="px-4 py-1.5 rounded-full bg-[var(--color-ck-accent)] text-white text-sm font-medium">
          All
        </button>
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`/podcasts/${cat.slug}`}
            className="px-4 py-1.5 rounded-full border border-[var(--color-ck-border)] text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors"
            style={{ "--hover-color": cat.accentColor } as React.CSSProperties}
          >
            {cat.title}
          </a>
        ))}
      </div>

      {/* Latest episodes */}
      <CarouselRow title="Latest Episodes" accentColor="var(--color-ck-accent)">
        {PODCAST_EPISODES.map((ep) => (
          <PodcastCard key={ep.id} episode={ep} className="w-64 sm:w-72" />
        ))}
      </CarouselRow>

      {/* All episodes grid */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">All Episodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PODCAST_EPISODES.map((ep) => (
            <PodcastCard key={ep.id} episode={ep} />
          ))}
        </div>
      </section>
    </div>
  );
}
