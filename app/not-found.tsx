import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="space-y-2">
        <p className="text-7xl font-bold text-[var(--color-ck-accent)]/20">404</p>
        <h1 className="text-2xl font-bold text-white">Page not found</h1>
        <p className="text-white/50 text-base max-w-sm">
          This page doesn't exist or has been moved. Try searching or go back home.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <Button variant="accent" size="md" asChild>
          <Link href="/">
            <Home size={16} />
            Go Home
          </Link>
        </Button>
        <Button variant="outline" size="md" asChild>
          <Link href="/search">
            <Search size={16} />
            Search
          </Link>
        </Button>
      </div>
    </div>
  );
}
