import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Subscribe to Antar Yatra",
  description: "Choose your Antar Yatra subscription plan and unlock all premium episodes.",
  alternates: { canonical: "/antaryatra/subscribe" },
  robots: { index: false }, // Don't index subscription pages
};

const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    price: "₹299",
    period: "per month",
    features: [
      "All Antar Yatra episodes",
      "New episodes every week",
      "Ad-free experience",
      "Cancel anytime",
    ],
    cta: "Start Monthly",
    highlighted: false,
  },
  {
    id: "annual",
    name: "Annual",
    price: "₹2,499",
    period: "per year",
    savings: "Save ₹1,089",
    features: [
      "All Antar Yatra episodes",
      "New episodes every week",
      "Ad-free experience",
      "Early access to new series",
      "Priority support",
      "2 months free",
    ],
    cta: "Start Annual Plan",
    highlighted: true,
  },
];

export default function AntaryatraSubscribePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Back */}
      <Link
        href="/antaryatra"
        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} />
        Back to Antar Yatra
      </Link>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Zap size={18} className="text-[var(--color-ck-premium)]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-ck-premium)]">
            Premium Subscription
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Choose your plan
        </h1>
        <p className="text-white/50">
          Start with a 3-minute free preview on every episode. Subscribe when you're ready.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl p-6 border transition-all duration-300 space-y-5 ${
              plan.highlighted
                ? "bg-gradient-to-br from-[#1A1000] to-[#0D0900] border-[var(--color-ck-premium)]/40 shadow-[var(--shadow-premium)]"
                : "bg-[var(--color-ck-surface)] border-[var(--color-ck-border)]"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--color-ck-premium)] text-black text-xs font-bold">
                BEST VALUE
              </span>
            )}

            <div>
              <h2 className="text-lg font-semibold text-white">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-sm text-white/40">{plan.period}</span>
              </div>
              {plan.savings && (
                <span className="text-xs font-semibold text-[var(--color-ck-premium)] mt-1 block">
                  {plan.savings}
                </span>
              )}
            </div>

            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <Check
                    size={13}
                    className={
                      plan.highlighted
                        ? "text-[var(--color-ck-premium)]"
                        : "text-[var(--color-ck-accent)]"
                    }
                  />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? "premium" : "outline"}
              size="lg"
              className="w-full"
              disabled
              aria-label={`${plan.cta} — Payment integration coming soon`}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>

      {/* Payment notice — honest about current state */}
      <div className="text-center rounded-xl bg-[var(--color-ck-surface)] border border-[var(--color-ck-border)] p-6 space-y-2">
        <p className="text-sm font-semibold text-white">
          Payment integration coming soon
        </p>
        <p className="text-xs text-white/50">
          We're setting up secure payments. Register your interest and we'll notify you the moment subscriptions go live.
        </p>
        <Button variant="accent" size="md" asChild className="mt-3">
          <Link href="/signup">Register Interest</Link>
        </Button>
      </div>
    </div>
  );
}
