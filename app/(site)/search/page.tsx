import type { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Corner Kona for podcasts, audiobooks, articles, videos and more.",
  alternates: { canonical: "/search" },
  robots: { index: false },
};

export default function SearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-white">Search</h1>

      {/* Search input */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
        />
        <input
          type="search"
          placeholder="Search podcasts, audiobooks, articles, videos…"
          className="w-full h-14 pl-12 pr-4 rounded-2xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ck-accent)] transition-colors text-base"
          aria-label="Search Corner Kona"
        />
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap">
        {["All", "Podcasts", "Audiobooks", "Videos", "Articles", "Antar Yatra"].map(
          (f) => (
            <button
              key={f}
              className="px-4 py-1.5 rounded-full border border-[var(--color-ck-border)] text-sm text-white/60 hover:text-white hover:border-white/30 first:bg-[var(--color-ck-accent)] first:text-white first:border-transparent transition-colors"
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
        <Search size={40} className="text-white/10" />
        <p className="text-white/40 text-lg">Start typing to search</p>
        <p className="text-white/25 text-sm">
          Search across all podcasts, audiobooks, videos and articles
        </p>
      </div>
    </div>
  );
}
