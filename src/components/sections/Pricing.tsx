"use client";
import { useTransition, useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedButton from "../ui/AnimatedButton";
import { site } from "@/content/site";

export default function Pricing() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(): Promise<void> {
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: site.pricing.stripePriceId }),
      });
      if (!res.ok) throw new Error("Failed to create checkout session");
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url as string;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : "Something went wrong";
      setError(message);
    }
  }

  return (
    <AnimatedSection id="pricing" className="w-full max-w-3xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-center">
        Pricing
      </AnimatedHeading>
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <div className="text-2xl font-semibold text-gray-900">{site.pricing.name}</div>
          <ul className="mt-4 space-y-2 text-gray-700">
            {site.pricing.bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 items-center">
            <AnimatedButton
              onClick={() => startTransition(handleCheckout)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Buy with Stripe"
            >
              {isPending ? "Redirecting…" : "Buy with Stripe"}
            </AnimatedButton>
            {site.pricing.portalUrl && (
              <a
                href={site.pricing.portalUrl}
                className="text-primary underline"
                aria-label="Manage billing (pause or cancel)"
              >
                Manage billing (pause/cancel)
              </a>
            )}
            <p className="text-sm text-gray-600 mt-2">{site.pricing.reassurance}</p>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}


