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

const coreService = {
  title: "Modern Starter Site",
  subtitle: "Perfect foundation for growing businesses",
  price: "$1,200",
  description: "3–5 page custom-coded website built with Next.js, hosted on Vercel, fully responsive and SEO-ready. Client provides content (copywriting available as add-on).",
  features: [
    "3–5 page custom-coded website built with Next.js",
    "Hosted on Vercel with SSL & CDN",
    "Fully responsive and SEO-ready",
    "Client provides content (copywriting available as add-on)",
    "Page examples: Homepage, About, Contact + 2 of choice"
  ]
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

function ServicesSection() {
  return (
    <>
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6 text-center" style={{ color: '#1f4494' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Services & Pricing
      </AnimatedHeading>
      <AnimatedParagraph className="mb-12 text-center text-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Professional web solutions for service-based businesses, creatives, and small business owners. 
        Clean, fast, custom-coded websites that convert visitors into customers.
      </AnimatedParagraph>
      
      <div className="max-w-4xl mx-auto">
        <AnimatedCard
          className="card flex flex-col gap-6 p-8 border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold text-gray-900 !opacity-100 mb-2">{coreService.title}</h3>
            <div className="text-4xl font-bold text-primary !opacity-100 mb-2">{coreService.price}</div>
            <p className="text-gray-600 !opacity-100">{coreService.subtitle}</p>
          </div>
          
          <p className="text-gray-700 !opacity-100 leading-relaxed text-center">
            {coreService.description}
          </p>
          
          <ul className="space-y-3 mb-6 !opacity-100 max-w-2xl mx-auto">
            {coreService.features.map((feature, featureIdx) => (
              <li key={featureIdx} className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center">
            <AnimatedAnchor
              href="/services"
              className="inline-block bg-[#1f4494] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#18316b] transition-colors text-lg"
            >
              View All Services
            </AnimatedAnchor>
          </div>
        </AnimatedCard>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <AnimatedSection className="w-full flex flex-col items-center justify-center py-40 text-center bg-grid">
      {/* STEP 1A: Keeping existing visual exactly as is */}
      <AnimatedSection className="w-full max-w-xl mx-auto mb-10">
        <HeroIsometric className="w-full h-auto max-h-56 mx-auto" />
      </AnimatedSection>
      
      {/* STEP 2A: Strong client-facing headline */}
      <AnimatedHeading as="h1" className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
        Custom-coded websites for small businesses, done fast and clean.
      </AnimatedHeading>
      
      {/* STEP 2B: Intro paragraph explaining who the service is for */}
      <AnimatedParagraph className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
        I build fast, modern websites for local service pros, solo creatives, and small businesses who want to look legit online without wasting time on bloated builders or overpriced agencies.
      </AnimatedParagraph>
      
      {/* STEP 2C: Bold CTA button */}
      <AnimatedAnchor
        href="/contact"
        className="inline-block bg-[#1f4494] text-white px-8 py-4 rounded-lg hover:bg-[#18316b] transition font-semibold text-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get a Free Quote
      </AnimatedAnchor>
      
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <FeaturedProjectBanner />
    </AnimatedSection>
  );
}
