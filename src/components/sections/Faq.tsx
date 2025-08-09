"use client";
import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import { site } from "@/content/site";

type ItemState = { id: string; open: boolean };

export default function Faq() {
  const [openStates, setOpenStates] = useState<ItemState[]>(
    site.faq.map((f) => ({ id: f.id, open: false }))
  );

  function toggle(id: string) {
    setOpenStates((prev) =>
      prev.map((s) => (s.id === id ? { ...s, open: !s.open } : s))
    );
  }

  function isOpen(id: string) {
    return openStates.find((s) => s.id === id)?.open;
  }

  return (
    <AnimatedSection id="faq" className="w-full max-w-3xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-center">
        FAQs
      </AnimatedHeading>
      <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        {site.faq.map((item) => (
          <div key={item.id} className="p-4">
            <button
              className="w-full text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={!!isOpen(item.id)}
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                  e.preventDefault();
                  toggle(item.id);
                }
              }}
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              <span aria-hidden className="text-primary">{isOpen(item.id) ? "−" : "+"}</span>
            </button>
            {isOpen(item.id) && (
              <div className="mt-2 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}


