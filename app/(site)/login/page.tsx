import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Corner Kona account.",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="text-center">
          <div className="text-2xl font-bold">
            <span className="text-[var(--color-ck-accent)]">Corner</span>
            <span className="text-white"> Kona</span>
          </div>
          <h1 className="text-xl font-semibold text-white mt-3">Welcome back</h1>
          <p className="text-white/50 text-sm mt-1">Log in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4" aria-label="Login form">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full h-11 px-4 rounded-xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ck-accent)] transition-colors text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-white/70">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full h-11 px-4 rounded-xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ck-accent)] transition-colors text-sm"
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full"
            disabled
            aria-label="Log in — authentication coming soon"
          >
            Log In
          </Button>
        </form>

        <p className="text-center text-sm text-white/40">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-[var(--color-ck-accent)] hover:underline"
          >
            Sign up
          </Link>
        </p>

        <p className="text-center text-xs text-white/25">
          Authentication integration coming soon
        </p>
      </div>
    </div>
  );
}
