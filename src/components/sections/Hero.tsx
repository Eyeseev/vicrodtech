"use client";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedParagraph from "../ui/AnimatedParagraph";
import AnimatedAnchor from "../ui/AnimatedAnchor";
import AnimatedSection from "../ui/AnimatedSection";
import HeroIsometric from "../svg/HeroIsometric";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <AnimatedSection id="hero" className="w-full max-w-3xl mx-auto text-center pt-16 pb-16">
      <div className="w-full max-w-xl mx-auto mb-10" aria-hidden>
        <HeroIsometric className="w-full h-auto max-h-56 mx-auto" />
      </div>
      <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
        {site.tagline}
      </AnimatedHeading>
      <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        {site.subtagline}
      </AnimatedParagraph>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <AnimatedAnchor
          href={site.hero.primaryCta.href}
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto text-center"
        >
          {site.hero.primaryCta.label}
        </AnimatedAnchor>
        <AnimatedAnchor
          href={site.hero.secondaryCta.href}
          className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto text-center"
        >
          {site.hero.secondaryCta.label}
        </AnimatedAnchor>
      </div>
    </AnimatedSection>
  );
}


