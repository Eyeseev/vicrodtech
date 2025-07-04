"use client";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedCard from "../../components/ui/AnimatedCard";

export default function ServicesPage() {
  return (
    <section className="w-full mx-auto py-32">
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6 text-center" style={{ color: '#1f4494' }}>
        Services
      </AnimatedHeading>
      <AnimatedParagraph className="mb-12 text-center text-gray-700">
        Professional web solutions tailored to your business needs
      </AnimatedParagraph>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {/* Done-for-You Website Card */}
        <AnimatedCard
          className="card flex flex-col gap-4 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900 !opacity-100 mb-2">Done-for-You Website</h3>
            <h4 className="text-lg text-gray-600 mb-4">Launch-Ready Website Package</h4>
            <div className="text-3xl font-bold text-primary !opacity-100">$200</div>
          </div>
          
          <p className="text-gray-700 !opacity-100 leading-relaxed">
            A fast, affordable 1-page site built for small business owners, freelancers, and creators who need a clean online presence — fast.
          </p>
          
          <ul className="space-y-3 mb-6 !opacity-100">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">1-page responsive site (Home, About, Services, Contact)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Mobile-friendly + fast-loading</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Hosted on Vercel.com</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Domain connection + basic SEO setup</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">One round of revisions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Delivered in 3–5 business days</span>
            </li>
          </ul>
          
          <button className="mt-auto bg-[#1f4494] text-white font-semibold py-3 px-6 rounded hover:bg-[#18316b] transition-colors">
            Get Started
          </button>
        </AnimatedCard>

        {/* Website Audit & Full Redesign Card */}
        <AnimatedCard
          className="card flex flex-col gap-4 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900 !opacity-100 mb-2">Website Audit & Full Redesign</h3>
            <h4 className="text-lg text-gray-600 mb-4">Complete Website Transformation</h4>
            <div className="text-3xl font-bold text-primary !opacity-100">$300</div>
          </div>
          
          <p className="text-gray-700 !opacity-100 leading-relaxed">
            Perfect for older or DIY sites that need a full refresh. You'll get a custom-built, modern site based on your content and goals.
          </p>
          
          <ul className="space-y-3 mb-6 !opacity-100">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Complete rebuild from scratch</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Fully responsive + clean modern layout</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Updated structure and content flow</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Basic SEO + performance improvements</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">Delivered in 7–10 days</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
              <span className="text-gray-700">One round of revisions</span>
            </li>
          </ul>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Client must provide existing site URL and all necessary content.
            </p>
          </div>
          
          <button className="mt-auto bg-[#1f4494] text-white font-semibold py-3 px-6 rounded hover:bg-[#18316b] transition-colors">
            Get Started
          </button>
        </AnimatedCard>
      </div>
    </section>
  );
} 