import type { Metadata } from "next";
import Link from "next/link";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Notifications",
  robots: { index: false },
};

export default function NotificationsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-white">Notifications</h1>

      {/* Empty state — user not authenticated or no notifications */}
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <Bell size={40} className="text-white/10" />
        <p className="text-white/40 text-lg">No notifications yet</p>
        <p className="text-white/25 text-sm">
          Log in and subscribe to categories to receive updates.
        </p>
        <Button variant="accent" size="md" asChild>
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </div>
  );
}
