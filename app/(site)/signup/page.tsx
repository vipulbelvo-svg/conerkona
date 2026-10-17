import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Corner Kona account.",
  robots: { index: false },
};

export default function SignupPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <div className="text-2xl font-bold">
            <span className="text-[var(--color-ck-accent)]">Corner</span>
            <span className="text-white"> Kona</span>
          </div>
          <h1 className="text-xl font-semibold text-white mt-3">Create account</h1>
          <p className="text-white/50 text-sm mt-1">
            Join Corner Kona for free
          </p>
        </div>

        <form className="space-y-4" aria-label="Sign up form">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-white/70">
              Display Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
              className="w-full h-11 px-4 rounded-xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ck-accent)] transition-colors text-sm"
            />
          </div>
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
              autoComplete="new-password"
              required
              placeholder="Create a password"
              className="w-full h-11 px-4 rounded-xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-ck-accent)] transition-colors text-sm"
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full"
            disabled
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-white/40">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[var(--color-ck-accent)] hover:underline"
          >
            Log in
          </Link>
        </p>

        <p className="text-center text-xs text-white/25">
          Authentication integration coming soon
        </p>
      </div>
    </div>
  );
}
