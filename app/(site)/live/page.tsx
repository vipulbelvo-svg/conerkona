import type { Metadata } from "next";
import { LiveBadge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Live",
  description: "Corner Kona live coverage — breaking news, live events and real-time updates.",
  alternates: { canonical: "/live" },
};

// Placeholder live updates — replace with real data source in Step 12
const LIVE_UPDATES = [
  {
    id: "u1",
    time: "14:32",
    content: "India signs landmark trade agreement with Southeast Asian bloc — full details awaited.",
    isBreaking: true,
  },
  {
    id: "u2",
    time: "13:58",
    content: "PM Modi to address the nation at 6 PM today on the new trade deal.",
    isBreaking: false,
  },
  {
    id: "u3",
    time: "13:21",
    content: "Stock markets react positively — Sensex up 1.2% as trade deal news breaks.",
    isBreaking: false,
  },
];

export default function LivePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <LiveBadge />
        <h1 className="text-3xl font-bold text-white">Live Coverage</h1>
      </div>

      <p className="text-white/50">
        Real-time updates. Refreshed continuously.
      </p>

      {/* Live updates feed */}
      <div className="space-y-4">
        {LIVE_UPDATES.map((update) => (
          <div
            key={update.id}
            className={`flex gap-4 p-4 rounded-xl border transition-colors ${
              update.isBreaking
                ? "bg-[var(--color-ck-live)]/5 border-[var(--color-ck-live)]/20"
                : "bg-[var(--color-ck-surface)] border-[var(--color-ck-border)]"
            }`}
          >
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <Clock
                size={14}
                className={
                  update.isBreaking
                    ? "text-[var(--color-ck-live)]"
                    : "text-white/30"
                }
              />
              <span className="text-xs text-white/30">{update.time}</span>
            </div>
            <div className="flex-1">
              {update.isBreaking && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-ck-live)] block mb-1">
                  Breaking
                </span>
              )}
              <p className="text-sm text-white/80 leading-relaxed">
                {update.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-white/30 text-center">
        Real-time auto-refresh — Phase 2 feature. Currently showing static updates.
      </p>
    </div>
  );
}
