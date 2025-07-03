"use client";
import HeroIsometric from "../components/svg/HeroIsometric";
import { motion } from "framer-motion";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedHeading from "../components/ui/AnimatedHeading";
import AnimatedParagraph from "../components/ui/AnimatedParagraph";
import AnimatedAnchor from "../components/ui/AnimatedAnchor";
import AnimatedCard from "../components/ui/AnimatedCard";

const featuredProject = {
  title: "Smart Support Dashboard",
  description: "A real-time dashboard for tracking and resolving tech issues fast. Built with Next.js, automation, and a custom isometric UI.",
  link: "/projects",
};

function FeaturedProjectBanner() {
  return (
    <>
      <AnimatedHeading as="h2" className="text-2xl font-bold text-primary mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Featured Project
      </AnimatedHeading>
      <AnimatedCard
        className="w-full max-w-2xl mx-auto mb-10 flex flex-col md:flex-row items-center gap-8 p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center">
          <HeroIsometric className="w-full h-full" />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold mb-2 text-primary">{featuredProject.title}</h3>
          <p className="mb-4 text-gray-700">{featuredProject.description}</p>
          <AnimatedAnchor
            href={featuredProject.link}
            className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition font-semibold"
          >
            View Project
          </AnimatedAnchor>
        </div>
      </AnimatedCard>
    </>
  );
}

function SectionDivider() {
  return (
    <div className="w-full flex justify-center my-20">
      <svg width="100%" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-5xl w-full">
        <path d="M0 20 Q 360 0 720 20 T 1440 20 V40 H0V20Z" fill="#f3f4f6" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <AnimatedSection className="w-full flex flex-col items-center justify-center py-40 text-center bg-grid">
      <AnimatedSection className="w-full max-w-xl mx-auto mb-10">
        <HeroIsometric className="w-full h-auto max-h-56 mx-auto" />
      </AnimatedSection>
      <AnimatedHeading as="h1" className="text-6xl font-extrabold mb-6 text-primary">
        I build clean sites and fix messy tech.
      </AnimatedHeading>
      <AnimatedParagraph className="text-xl mb-10 text-gray-600 max-w-xl mx-auto">
        Smart solutions, sharp design, no fluff. Let's talk.
      </AnimatedParagraph>
      <AnimatedAnchor
        href="/contact"
        className="inline-block bg-primary text-white px-8 py-3 rounded hover:bg-primary/90 transition font-semibold"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get in touch
      </AnimatedAnchor>
      <SectionDivider />
      <FeaturedProjectBanner />
    </AnimatedSection>
  );
}
