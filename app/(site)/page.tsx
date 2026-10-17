import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { LiveStrip } from "@/components/sections/live-strip";
import { CarouselRow } from "@/components/sections/carousel-row";
import { PodcastCard } from "@/components/cards/podcast-card";
import { ArticleCard } from "@/components/cards/article-card";
import { AudiobookCard } from "@/components/cards/audiobook-card";
import { ShortVideoCard } from "@/components/cards/short-video-card";
import { AntaryatraSection } from "@/components/sections/antaryatra-section";
import {
  FEATURED_EPISODE,
  PODCAST_EPISODES,
  ARTICLES,
  AUDIOBOOKS,
  SHORT_VIDEOS,
} from "@/data/mock";

export const metadata: Metadata = {
  title: "Corner Kona — Podcasts, Audiobooks, Stories & More",
  description:
    "Explore podcasts, audiobooks, short videos, live news and in-depth stories across Sports, Entertainment, Geopolitics, Bhakti and Lifestyle.",
  alternates: {
    canonical: "/",
    languages: { "hi-IN": "/", "en-IN": "/en" },
  },
};

export default function HomePage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* 1. Hero — featured podcast/video */}
      <Hero featured={FEATURED_EPISODE} />

      {/* 2. Live strip */}
      <LiveStrip headline="Breaking: India signs landmark trade deal with 12 nations — live coverage" />

      {/* 3. Latest Podcasts carousel */}
      <CarouselRow
        title="Latest Podcasts"
        seeAllHref="/podcasts"
        accentColor="var(--color-ck-accent)"
      >
        {PODCAST_EPISODES.map((ep) => (
          <PodcastCard
            key={ep.id}
            episode={ep}
            className="w-64 sm:w-72"
          />
        ))}
      </CarouselRow>

      {/* 4. Short videos */}
      <CarouselRow
        title="Short Videos"
        seeAllHref="/short-videos"
        accentColor="var(--color-ck-accent)"
      >
        {SHORT_VIDEOS.map((v) => (
          <ShortVideoCard key={v.id} video={v} className="w-40 sm:w-48" />
        ))}
      </CarouselRow>

      {/* 5. Antar Yatra section */}
      <AntaryatraSection />

      {/* 6. Audiobooks carousel */}
      <CarouselRow
        title="Audiobooks"
        seeAllHref="/audiobooks"
        accentColor="var(--color-ck-premium)"
      >
        {AUDIOBOOKS.map((ab) => (
          <AudiobookCard key={ab.id} audiobook={ab} className="w-40 sm:w-48" />
        ))}
      </CarouselRow>

      {/* 7. Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[var(--color-ck-accent)]" />
            Latest Stories
          </h2>
          <a
            href="/articles"
            className="text-xs font-medium text-[var(--color-ck-accent)] hover:underline"
          >
            See all →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ARTICLES.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Bottom padding for mobile player */}
      <div className="h-4" />
    </div>
  );
}
