"use client";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedCard from "../../components/ui/AnimatedCard";
import AnimatedAnchor from "../../components/ui/AnimatedAnchor";

export default function ServicesPage() {
  return (
    <section className="w-full mx-auto py-20">
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        {/* Page Header */}
        <div className="text-center">
          <AnimatedHeading as="h1" className="text-4xl font-bold mb-12" style={{ color: '#1f4494' }}>
            Services & Pricing
          </AnimatedHeading>
          <AnimatedParagraph className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Professional web solutions for service-based businesses, creatives, and small business owners. 
            Clean, fast, custom-coded websites that convert visitors into customers.
          </AnimatedParagraph>
        </div>
        
        {/* Core Offer Section */}
        <AnimatedCard
          className="bg-white rounded-xl shadow-md p-10 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">🧱 Modern Starter Site</h2>
            <div className="text-2xl font-bold text-black mb-2">$1,200</div>
            <p className="text-lg text-gray-700 leading-relaxed">Perfect foundation for growing businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What&apos;s Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">3–5 page custom-coded website built with Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">Hosted on Vercel with SSL & CDN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">Fully responsive and SEO-ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">Client provides content (copywriting available as add-on)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Page Examples:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Homepage</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">About</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Contact</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">+ 2 of choice (FAQ, Blog, Services, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-6">
            <AnimatedAnchor 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Your Website
            </AnimatedAnchor>
          </div>
        </AnimatedCard>

        {/* Add-Ons Section */}
        <AnimatedCard
          className="bg-white rounded-xl shadow-md p-10 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">🧩 Add-Ons</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-2">Enhance your website with these additional services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Domain + Hosting Setup</h3>
              <p className="text-2xl font-bold text-black">$250</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Google Workspace Email Setup</h3>
              <p className="text-2xl font-bold text-black">$300–$450</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Blog Setup (CMS or static)</h3>
              <p className="text-2xl font-bold text-black">$250</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Booking Tool Embed (e.g. Calendly)</h3>
              <p className="text-2xl font-bold text-black">$150</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Google Maps Embed</h3>
              <p className="text-2xl font-bold text-black">$75</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Extra Custom Pages</h3>
              <p className="text-2xl font-bold text-black">$150 per page</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Copywriting (per page)</h3>
              <p className="text-2xl font-bold text-black">$125</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow space-y-2">
              <h3 className="font-semibold text-gray-900">Image Gallery / Optimization</h3>
              <p className="text-2xl font-bold text-black">$250–$500</p>
            </div>
          </div>
        </AnimatedCard>

        {/* Hosting Options Section */}
        <AnimatedCard
          className="bg-white rounded-xl shadow-md p-10 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">⚙️ Hosting Options</h2>
            <p className="text-lg text-gray-700 leading-relaxed mt-2">Choose the hosting solution that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Managed Hosting Option */}
            <div className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Option 1: Managed Hosting</h3>
                <div className="text-sm text-green-600 font-semibold mb-2">Recommended</div>
                <div className="text-3xl font-bold text-black mb-1">$25/month</div>
                <div className="text-lg text-gray-600">or $240/year</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">I host your site under my Vercel Pro account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">Includes SSL, CDN, deploys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">Uptime support & maintenance</span>
                </li>
              </ul>
              
              <div className="text-center">
                <AnimatedAnchor 
                  href="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Choose Managed
                </AnimatedAnchor>
              </div>
            </div>

            {/* Self-Hosted Option */}
            <div className="border-2 border-gray-100 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Option 2: Self-Hosted</h3>
                <div className="text-sm text-gray-600 font-semibold mb-2">You Manage</div>
                <div className="text-3xl font-bold text-black mb-1">$250</div>
                <div className="text-lg text-gray-600">one-time setup fee</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">I configure your custom hosting environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">Complete setup documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">✓</span>
                  <span className="text-gray-700">You handle ongoing hosting costs</span>
                </li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> You&apos;ll be responsible for hosting costs and maintenance after setup.
                </p>
              </div>
              
              <div className="text-center">
                <AnimatedAnchor 
                  href="/contact" 
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Choose Self-Hosted
                </AnimatedAnchor>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Call to Action Section */}
        <div className="text-center bg-gray-50 rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need help picking a service?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Let&apos;s discuss your project and find the perfect solution for your business.
          </p>
          <AnimatedAnchor 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Your Website
          </AnimatedAnchor>
        </div>
      </div>
    </section>
  );
} 