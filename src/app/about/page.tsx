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
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6" style={{ color: '#1f4494' }}>
        About Me
      </AnimatedHeading>
      <AnimatedParagraph className="mb-10 text-gray-700 max-w-3xl mx-auto">
        I&apos;m Vic, a web developer and problem-solver. I build clean, fast, custom-coded websites for service-based businesses, creatives, and small business owners. My approach: keep it sharp, keep it simple, always deliver.
      </AnimatedParagraph>
      <AnimatedSection className="flex flex-col items-center gap-2 text-left text-gray-600 max-w-2xl mx-auto">
        <span>• Custom-coded websites with Next.js and modern technologies</span>
        <span>• Clean, responsive design that converts visitors to customers</span>
        <span>• Fast, clear communication and reliable delivery</span>
        <span>• SEO-ready sites that help you get found online</span>
      </AnimatedSection>
      <AnimatedSection className="mt-12 bg-white/70 rounded-xl shadow p-6 max-w-md mx-auto text-left border border-gray-100">
        <h3 className="text-xl font-bold mb-2" style={{ color: '#111829' }}>Why Work With Me</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Custom-coded websites, not cookie-cutter templates</li>
          <li>Fast, responsive sites that work on all devices</li>
          <li>Clear communication and reliable delivery</li>
          <li>SEO-optimized to help you get found online</li>
        </ul>
      </AnimatedSection>
    </section>
  );
} 