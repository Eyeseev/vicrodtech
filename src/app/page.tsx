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

const services = [
  {
    title: "Done-for-You Website",
    subtitle: "Launch-Ready Website Package",
    price: "$200",
    description: "A fast, affordable 1-page site built for small business owners, freelancers, and creators who need a clean online presence — fast.",
    features: [
      "1-page responsive site (Home, About, Services, Contact)",
      "Mobile-friendly + fast-loading",
      "Hosted on Vercel.com",
      "Domain connection + basic SEO setup",
      "One round of revisions",
      "Delivered in 3–5 business days"
    ]
  },
  {
    title: "Website Audit & Full Redesign",
    subtitle: "Complete Website Transformation",
    price: "$300",
    description: "Perfect for older or DIY sites that need a full refresh. You&apos;ll get a custom-built, modern site based on your content and goals.",
    features: [
      "Complete rebuild from scratch",
      "Fully responsive + clean modern layout",
      "Updated structure and content flow",
      "Basic SEO + performance improvements",
      "Delivered in 7–10 days",
      "One round of revisions"
    ],
    note: "Client must provide existing site URL and all necessary content."
  }
];

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
        Services
      </AnimatedHeading>
      <AnimatedParagraph className="mb-12 text-center text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Professional web solutions tailored to your business needs
      </AnimatedParagraph>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <AnimatedCard
            key={idx}
            className="card flex flex-col gap-4 p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900 !opacity-100 mb-2">{service.title}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{service.subtitle}</h4>
              <div className="text-3xl font-bold text-primary !opacity-100">{service.price}</div>
            </div>
            
            <p className="text-gray-700 !opacity-100 leading-relaxed">
              {service.description}
            </p>
            
            <ul className="space-y-3 mb-6 !opacity-100">
              {service.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            {service.note && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> {service.note}
                </p>
              </div>
            )}
            
            <AnimatedAnchor
              href="/contact"
              className="mt-auto bg-[#1f4494] text-white font-semibold py-3 px-6 rounded hover:bg-[#18316b] transition-colors text-center"
            >
              Get Started
            </AnimatedAnchor>
          </AnimatedCard>
        ))}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <AnimatedSection className="w-full flex flex-col items-center justify-center py-40 text-center bg-grid">
      <AnimatedSection className="w-full max-w-xl mx-auto mb-10">
        <HeroIsometric className="w-full h-auto max-h-56 mx-auto" />
      </AnimatedSection>
      <AnimatedHeading as="h1" className="text-6xl font-extrabold mb-6 text-gray-900">
        I build clean sites and fix messy tech.
      </AnimatedHeading>
      <AnimatedParagraph className="text-xl mb-10" style={{ color: '#1f4494' }}>
        Smart solutions, sharp design, no bs. Let&apos;s talk.
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
      <ServicesSection />
      <SectionDivider />
      <FeaturedProjectBanner />
    </AnimatedSection>
  );
}
