import type { Metadata } from "next";
import Link from "next/link";
import { User, Headphones, Bookmark, Bell, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your Corner Kona profile and account settings.",
  robots: { index: false },
};

export default function ProfilePage() {
  // In production: check auth state, redirect to /login if unauthenticated
  const isAuthenticated = false; // placeholder

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
        <User size={48} className="mx-auto text-white/20" />
        <h1 className="text-2xl font-bold text-white">Your Profile</h1>
        <p className="text-white/50">
          Log in to access your listening history, bookmarks and subscription.
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="accent" size="lg" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <h1 className="text-3xl font-bold text-white">Profile</h1>

      {/* Profile menu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { icon: Headphones, label: "Listening History", href: "/profile" },
          { icon: Bookmark, label: "Bookmarks", href: "/profile" },
          { icon: Bell, label: "Notification Preferences", href: "/profile/notifications-preferences" },
          { icon: Zap, label: "My Subscription", href: "/profile/subscriptions" },
          { icon: Settings, label: "Account Settings", href: "/profile/settings" },
        ].map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] hover:border-white/20 transition-colors group"
          >
            <Icon size={18} className="text-[var(--color-ck-accent)] flex-shrink-0" />
            <span className="text-sm font-medium text-white group-hover:text-[var(--color-ck-accent)] transition-colors">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
