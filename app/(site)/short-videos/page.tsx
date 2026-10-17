import type { Metadata } from "next";
import { ShortVideoCard } from "@/components/cards/short-video-card";
import { SHORT_VIDEOS } from "@/data/mock";

export const metadata: Metadata = {
  title: "Short Videos",
  description: "30–60 second stories from Corner Kona. Swipeable vertical video.",
  alternates: { canonical: "/short-videos" },
};

export default function ShortVideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Short Videos</h1>
        <p className="text-white/50 text-lg">
          Bite-sized stories — 30 to 60 seconds
        </p>
      </div>

      {/* Vertical video grid — more columns on wider screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {SHORT_VIDEOS.map((v) => (
          <ShortVideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}
