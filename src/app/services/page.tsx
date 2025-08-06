"use client";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedCard from "../../components/ui/AnimatedCard";

export default function ServicesPage() {
  return (
    <section className="w-full mx-auto py-32">
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6 text-center" style={{ color: '#1f4494' }}>
        Services & Pricing
      </AnimatedHeading>
      <AnimatedParagraph className="mb-16 text-center text-gray-700 max-w-3xl mx-auto">
        Professional web solutions for service-based businesses, creatives, and small business owners. 
        Clean, fast, custom-coded websites that convert visitors into customers.
      </AnimatedParagraph>
      
      {/* Core Offer Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <AnimatedHeading as="h3" className="text-2xl font-bold mb-8 text-center" style={{ color: '#1f4494' }}>
          🧱 Core Offer
        </AnimatedHeading>
        
        <AnimatedCard
          className="card flex flex-col gap-6 p-8 border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center mb-4">
            <h4 className="text-3xl font-bold text-gray-900 !opacity-100 mb-2">Modern Starter Site</h4>
            <div className="text-4xl font-bold text-primary !opacity-100 mb-2">$1,200</div>
            <p className="text-gray-600 !opacity-100">Perfect foundation for growing businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-3 !opacity-100">What&apos;s Included:</h5>
              <ul className="space-y-3 !opacity-100">
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
              <h5 className="font-semibold text-gray-900 mb-3 !opacity-100">Page Examples:</h5>
              <ul className="space-y-2 !opacity-100">
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
          
          <button className="mt-6 bg-[#1f4494] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#18316b] transition-colors text-lg">
            Get Started
          </button>
        </AnimatedCard>
      </div>

      {/* Add-Ons Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <AnimatedHeading as="h3" className="text-2xl font-bold mb-8 text-center" style={{ color: '#1f4494' }}>
          🧩 Add-Ons
        </AnimatedHeading>
        
        <AnimatedCard
          className="card p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Add-On</th>
                  <th className="text-right py-4 px-4 font-semibold text-gray-900">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Domain + Hosting Setup</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$250</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Google Workspace Email Setup</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$300–$450</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Blog Setup (CMS or static)</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$250</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Booking Tool Embed (e.g. Calendly)</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$150</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Google Maps Embed</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$75</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Extra Custom Pages</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$150 per page</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Copywriting (per page)</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$125</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-gray-700">Image Gallery / Optimization</td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">$250–$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedCard>
      </div>

      {/* Hosting Options Section */}
      <div className="max-w-6xl mx-auto">
        <AnimatedHeading as="h3" className="text-2xl font-bold mb-8 text-center" style={{ color: '#1f4494' }}>
          ⚙️ Hosting Options
        </AnimatedHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Managed Hosting Option */}
          <AnimatedCard
            className="card flex flex-col gap-4 p-8 border-2 border-green-100 bg-gradient-to-br from-green-50 to-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-gray-900 !opacity-100 mb-2">Option 1: Managed Hosting</h4>
              <div className="text-sm text-green-600 font-semibold mb-2 !opacity-100">Recommended</div>
              <div className="text-3xl font-bold text-primary !opacity-100 mb-1">$25/month</div>
              <div className="text-lg text-gray-600 !opacity-100">or $240/year</div>
            </div>
            
            <ul className="space-y-3 mb-6 !opacity-100">
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
            
            <button className="mt-auto bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Choose Managed
            </button>
          </AnimatedCard>

          {/* Self-Hosted Option */}
          <AnimatedCard
            className="card flex flex-col gap-4 p-8 border-2 border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-gray-900 !opacity-100 mb-2">Option 2: Self-Hosted</h4>
              <div className="text-sm text-gray-600 font-semibold mb-2 !opacity-100">You Manage</div>
              <div className="text-3xl font-bold text-primary !opacity-100 mb-1">$250</div>
              <div className="text-lg text-gray-600 !opacity-100">one-time setup fee</div>
            </div>
            
            <ul className="space-y-3 mb-6 !opacity-100">
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
            
            <button className="mt-auto bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
              Choose Self-Hosted
            </button>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
} 