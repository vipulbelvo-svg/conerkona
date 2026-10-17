import type { Metadata } from "next";
import { AudiobookCard } from "@/components/cards/audiobook-card";
import { AUDIOBOOKS } from "@/data/mock";

export const metadata: Metadata = {
  title: "Audiobooks",
  description: "Listen to Corner Kona's audiobook library — free and premium titles.",
  alternates: { canonical: "/audiobooks" },
};

export default function AudiobooksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Audiobooks</h1>
        <p className="text-white/50 text-lg">
          Deep stories. Your ears. Anywhere.
        </p>
      </div>

      {/* Filter row */}
      <div className="flex gap-2 flex-wrap">
        {["All", "Free", "Premium", "Hindi", "English", "Short (&lt;2hr)", "Long"].map((label) => (
          <button
            key={label}
            className="px-4 py-1.5 rounded-full border border-[var(--color-ck-border)] text-sm text-white/60 hover:text-white hover:border-white/30 first:bg-[var(--color-ck-accent)] first:text-white first:border-transparent transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {AUDIOBOOKS.map((ab) => (
          <AudiobookCard key={ab.id} audiobook={ab} />
        ))}
      </div>
    </div>
  );
}
