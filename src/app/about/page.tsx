"use client";
import AboutNetwork from "../../components/svg/AboutNetwork";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";

export default function About() {
  return (
    <section className="w-full mx-auto py-32 text-center">
      <AnimatedSection className="w-full max-w-xs mx-auto mb-8">
        <AboutNetwork className="w-full h-auto max-h-24 mx-auto" />
      </AnimatedSection>
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6 text-gray-900">
        About Me
      </AnimatedHeading>
      <AnimatedParagraph className="mb-10 text-gray-700">
        I'm Vic, a builder and problem-solver. I design, code, and support digital systems that just work. My approach: keep it sharp, keep it simple, always deliver.
      </AnimatedParagraph>
      <AnimatedSection className="flex flex-col items-center gap-2 text-left text-gray-600">
        <span>• Web development (React, Next.js, automation)</span>
        <span>• Tech support wins & creative solutions</span>
        <span>• Fast, clear communication</span>
      </AnimatedSection>
      <AnimatedSection className="mt-12 bg-white/70 rounded-xl shadow p-6 max-w-md mx-auto text-left border border-gray-100">
        <h3 className="text-xl font-bold mb-2 text-gray-900">Why Work With Me</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Reliable delivery, every time.</li>
          <li>Clear, fast communication—no guesswork.</li>
          <li>Quick turnarounds that keep your momentum.</li>
          <li>I fix the tech headaches that slow you down.</li>
        </ul>
      </AnimatedSection>
    </section>
  );
} 