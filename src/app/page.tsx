"use client";
import HeroIsometric from "../components/svg/HeroIsometric";
import AnimatedSection from "../components/ui/AnimatedSection";
import AnimatedHeading from "../components/ui/AnimatedHeading";
import AnimatedParagraph from "../components/ui/AnimatedParagraph";
import AnimatedAnchor from "../components/ui/AnimatedAnchor";
import AnimatedCard from "../components/ui/AnimatedCard";

const featuredProject = {
  title: "Mindful Intentions Therapy",
  description: "Professional psychotherapy practice website featuring individual, couples, and family therapy services. Built with modern web technologies to provide a warm, welcoming experience for clients seeking mental health support.",
  link: "https://mindfulintentionslcswpllc.org/",
  image: "/mindful-therapy-screenshot.png"
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
        {featuredProject.image && (
          <img
            src={featuredProject.image}
            alt={featuredProject.title + ' screenshot'}
            className="w-40 h-40 object-cover rounded-lg border border-gray-200 shadow-sm mb-4 md:mb-0"
          />
        )}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold mb-2 text-gray-900">{featuredProject.title}</h3>
          <p className="mb-4 text-gray-700">{featuredProject.description}</p>
          <AnimatedAnchor
            href={featuredProject.link}
            className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full md:w-auto text-center"
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
    <div className="w-full flex justify-center my-8">
      <svg width="100%" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-5xl w-full">
        <path d="M0 20 Q 360 0 720 20 T 1440 20 V40 H0V20Z" fill="#f3f4f6" />
      </svg>
    </div>
  );
}

function ServicesSection() {
  return (
    <>
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-center" style={{ color: '#1f4494' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Professional Sites That Make You Look Legit
      </AnimatedHeading>
      <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I design and build clean, high-performance websites that help you earn trust, stand out from the noise, and convert more visitors — without the headache of DIY builders or bloated templates.
      </AnimatedParagraph>
      
      {/* Modern Starter Site Preview */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl p-10 shadow-lg max-w-2xl mx-auto">
        <AnimatedCard
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Modern Starter Site
            </h3>
            <p className="text-lg font-semibold text-blue-600">
              $1,200 Flat Rate
            </p>
            <p className="text-gray-600">
              The perfect launchpad for your brand&apos;s online presence.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
              A clean, 3–5 page custom-coded website built with Next.js and hosted on Vercel. Fully responsive, fast, and SEO-ready — designed to grow with your business. You provide the content, or I can help with that too.
            </p>
            
            <ul className="mt-6 space-y-3 text-lg text-gray-700 list-disc list-inside max-w-2xl mx-auto">
              <li>3–5 custom pages (Home, About, Contact, +2 of your choice)</li>
              <li>Fully responsive, built with Tailwind CSS + Next.js</li>
              <li>Hosting on Vercel with free SSL & global CDN</li>
              <li>SEO-optimized meta and performance tuning</li>
              <li>Optional add-on: Copywriting and blog setup</li>
            </ul>
          </div>
          
          <div className="text-center pt-4">
            <AnimatedAnchor
              href="/contact"
              className="inline-block bg-[#1f4494] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#18316b] transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full mt-4"
            >
              Get a Custom Quote
            </AnimatedAnchor>
          </div>
        </AnimatedCard>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <AnimatedSection className="w-full flex flex-col items-center justify-center pt-24 pb-20 space-y-16 bg-grid">
      {/* Hero Section */}
      <AnimatedSection className="w-full max-w-2xl mx-auto text-center space-y-4">
        {/* Keep existing visual */}
        <div className="w-full max-w-xl mx-auto mb-10">
          <HeroIsometric className="w-full h-auto max-h-56 mx-auto" />
        </div>
        
        {/* Updated headline */}
        <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
          Custom-Coded Websites Built to Convert
        </AnimatedHeading>
        
        {/* Updated subheadline */}
        <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Fast, responsive websites tailored for service pros, creatives, and growing businesses — built from scratch with zero builder fluff.
        </AnimatedParagraph>
        
        {/* Updated CTA buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedAnchor
            href="/contact"
            className="inline-block bg-[#1f4494] text-white px-8 py-4 rounded-lg hover:bg-[#18316b] transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Start My Website
          </AnimatedAnchor>
          <AnimatedAnchor
            href="/services"
            className="inline-block bg-white text-[#1f4494] border-2 border-[#1f4494] px-8 py-4 rounded-lg hover:bg-[#1f4494] hover:text-white transition font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Services & Pricing
          </AnimatedAnchor>
        </div>
      </AnimatedSection>
      
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <FeaturedProjectBanner />
      
      {/* New CTA Section Before Footer */}
      <section className="bg-white py-10 px-4 text-center w-full border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">Ready to start your site?</h2>
        <p className="mb-4 text-sm text-gray-700">Let&apos;s build something clean and conversion-ready.</p>
        <AnimatedAnchor
          href="/contact"
          className="inline-block bg-black text-white py-3 px-6 rounded w-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Start My Website
        </AnimatedAnchor>
      </section>
    </AnimatedSection>
  );
}
