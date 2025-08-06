"use client";
import AboutNetwork from "../../components/svg/AboutNetwork";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedAnchor from "../../components/ui/AnimatedAnchor";

export default function About() {
  return (
    <section className="w-full mx-auto py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-md p-10">
          {/* Header with visual */}
          <AnimatedSection className="text-center mb-8">
            <AboutNetwork className="w-full h-auto max-h-24 mx-auto mb-6" />
            <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl mb-6" style={{ color: '#1f4494' }}>
              Meet Vic — Your Developer, Strategist & Partner
            </AnimatedHeading>
          </AnimatedSection>

          {/* Short Bio / Personal Story */}
          <AnimatedSection className="mb-8">
            <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              I&apos;m Vic — a developer who builds clean, high-performance websites for small business owners, creators, and service professionals. I&apos;ve seen too many entrepreneurs struggle with clunky DIY builders and overpriced templates. That&apos;s why I design each site from scratch using modern tools like Next.js and Tailwind — fast, polished, and built to convert.
            </AnimatedParagraph>
          </AnimatedSection>

          {/* Why Work With Me Section */}
          <AnimatedSection className="mt-16">
            <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-gray-900">
              Why Clients Trust Me to Build Their Online Presence
            </AnimatedHeading>
            
            <ul className="mt-6 space-y-3 text-lg text-gray-700 list-disc list-inside max-w-2xl mx-auto">
              <li><strong>No Templates:</strong> Every site is custom-coded to match your brand — no cookie-cutter designs.</li>
              <li><strong>Speed & SEO Built In:</strong> I use modern tech that loads fast and ranks well.</li>
              <li><strong>Clean, Professional Design:</strong> I focus on clarity, whitespace, and mobile responsiveness.</li>
              <li><strong>Clear Communication:</strong> I walk you through the process step-by-step — no jargon.</li>
            </ul>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection className="mt-12 bg-gray-50 p-8 rounded-xl text-center space-y-4">
            <AnimatedHeading as="h3" className="text-2xl font-semibold text-gray-900">
              Let&apos;s Bring Your Website to Life
            </AnimatedHeading>
            <AnimatedParagraph className="text-gray-700">
              Book a free strategy call and let&apos;s plan your next big move online.
            </AnimatedParagraph>
            <AnimatedAnchor 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start My Website
            </AnimatedAnchor>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 