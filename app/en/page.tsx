import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/cards/article-card";
import { PodcastCard } from "@/components/cards/podcast-card";
import { ARTICLES, PODCAST_EPISODES } from "@/data/mock";

export const metadata: Metadata = {
  title: "Corner Kona English — Podcasts, Stories & More",
  description:
    "Corner Kona English section — podcasts, audiobooks and stories in English.",
  alternates: {
    canonical: "/en",
    languages: { "en-IN": "/en", "hi-IN": "/" },
  },
  // hreflang managed via alternates above
};

export default function EnglishHomePage() {
  // In production, filter by language === 'en'
  const englishArticles = ARTICLES.filter((a) => a.language === "en");
  const englishEpisodes = PODCAST_EPISODES.filter((e) => e.language === "en");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero text */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Corner Kona — English
        </h1>
        <p className="text-white/50 text-lg">
          Stories, podcasts and ideas in English
        </p>
      </div>

      {/* English podcasts */}
      {englishEpisodes.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">English Podcasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {englishEpisodes.map((ep) => (
              <PodcastCard key={ep.id} episode={ep} />
            ))}
          </div>
        </section>
      ) : null}

      {/* English articles */}
      {englishArticles.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white">English Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {englishArticles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      ) : null}

      {/* No English content placeholder */}
      {englishArticles.length === 0 && englishEpisodes.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
          <p className="text-4xl">🇬🇧</p>
          <h2 className="text-xl font-semibold text-white">English content coming soon</h2>
          <p className="text-white/40 text-sm max-w-sm">
            We're publishing our first English podcasts and articles. Check back soon or{" "}
            <Link href="/signup" className="text-[var(--color-ck-accent)] hover:underline">
              sign up
            </Link>{" "}
            to be notified.
          </p>
        </div>
      )}
    </div>
  );
}
