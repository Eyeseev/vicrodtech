"use client";
import AboutNetwork from "../../components/svg/AboutNetwork";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedAnchor from "../../components/ui/AnimatedAnchor";

export default function About() {
  return (
    <section className="w-full mx-auto py-16">
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-md p-10">
          {/* Header with visual */}
          <AnimatedSection className="text-center mb-8">
            <AboutNetwork className="w-full h-auto max-h-24 mx-auto mb-6" />
            <AnimatedHeading as="h1" className="text-4xl font-bold mb-6" style={{ color: '#1f4494' }}>
              About Me
            </AnimatedHeading>
          </AnimatedSection>

          {/* Main content */}
          <AnimatedSection className="space-y-6">
            <AnimatedParagraph className="text-lg text-gray-700 leading-relaxed">
              Hey, I&apos;m Vic — I build clean, fast, custom-coded websites for small business owners and creators who want to look legit online.
            </AnimatedParagraph>
            
            <AnimatedParagraph className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a web developer and problem-solver who focuses on service-based businesses, creatives, and small business owners. My approach: keep it sharp, keep it simple, always deliver.
            </AnimatedParagraph>
            
            <AnimatedParagraph className="text-lg text-gray-700 leading-relaxed">
              Every site I build is custom-coded with Next.js and modern technologies, ensuring fast loading times and excellent user experience across all devices.
            </AnimatedParagraph>
          </AnimatedSection>

          {/* Divider */}
          <hr className="my-8 border-gray-200" />

          {/* What I do */}
          <AnimatedSection className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">What I Do</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Custom-coded websites with Next.js and modern technologies</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Clean, responsive design that converts visitors to customers</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Fast, clear communication and reliable delivery</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>SEO-ready sites that help you get found online</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Why work with me */}
          <AnimatedSection className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Why Work With Me</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Custom-coded websites, not cookie-cutter templates</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Fast, responsive sites that work on all devices</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>Clear communication and reliable delivery</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span>SEO-optimized to help you get found online</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Think we&apos;d be a good fit?
            </p>
            <AnimatedAnchor 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Your Website
            </AnimatedAnchor>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 