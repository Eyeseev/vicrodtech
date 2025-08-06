"use client";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedCard from "../../components/ui/AnimatedCard";
import AnimatedAnchor from "../../components/ui/AnimatedAnchor";

export default function ServicesPage() {
  return (
    <section className="w-full mx-auto py-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl mb-6" style={{ color: '#1f4494' }}>
            Clean, Custom Websites Built to Convert
          </AnimatedHeading>
          <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Skip the page builders. I&apos;ll hand-code your site to match your brand, look amazing on any device, and help your business grow.
          </AnimatedParagraph>
          <div className="mt-8">
            <AnimatedAnchor 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto inline-block"
            >
              Start My Website
            </AnimatedAnchor>
          </div>
        </div>
        
        {/* Your Starter Website Package */}
        <AnimatedCard
          className="bg-white rounded-xl shadow-md p-10 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-center">
            <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4 text-gray-900">
              Your Starter Website Package
            </AnimatedHeading>
            <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              This is my most popular package — perfect for coaches, creatives, consultants, and service pros. Get a clean, fast, and modern site custom-coded to match your brand.
            </AnimatedParagraph>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ul className="mt-6 space-y-3 text-lg text-gray-700 list-disc list-inside">
              <li>3 custom-coded pages (Home, About, Contact)</li>
              <li>Mobile-friendly responsive layout</li>
              <li>Custom color, font, and branding integration</li>
              <li>Contact form setup</li>
              <li>SEO-ready metadata and fast load speeds</li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Home</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">About</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">Contact</span>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-blue-600 mb-4">
                $1,200 flat rate
              </p>
              <AnimatedAnchor 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto inline-block"
              >
                Start My Website
              </AnimatedAnchor>
            </div>
          </div>
        </AnimatedCard>

        {/* Optional Add-Ons Section */}
        <AnimatedCard
          className="bg-white rounded-xl shadow-md p-10 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4 text-gray-900">
              Optional Add-Ons
            </AnimatedHeading>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-8 md:space-y-0">
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Pro Email Setup</h3>
              <p className="text-gray-700 mt-1 text-base">
                Get a professional email address using Google Workspace, connected to your domain.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Domain Setup & DNS</h3>
              <p className="text-gray-700 mt-1 text-base">
                I&apos;ll handle domain registration and DNS configuration for seamless setup.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Blog Setup</h3>
              <p className="text-gray-700 mt-1 text-base">
                Add a blog section to share your expertise and improve SEO rankings.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Booking Integration</h3>
              <p className="text-gray-700 mt-1 text-base">
                Integrate Calendly or other booking tools for seamless client scheduling.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Payment Integration</h3>
              <p className="text-gray-700 mt-1 text-base">
                Add Stripe or PayPal for online payments and invoicing.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Portfolio Gallery</h3>
              <p className="text-gray-700 mt-1 text-base">
                Showcase your work with a professional portfolio section.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Extra Pages</h3>
              <p className="text-gray-700 mt-1 text-base">
                Additional custom pages like Services, FAQ, or Testimonials.
              </p>
            </div>
            
            <div className="shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-900">Post-Launch Updates</h3>
              <p className="text-gray-700 mt-1 text-base">
                Ongoing support and updates after your site goes live.
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* Hosting Options Section */}
        <AnimatedCard
          className="bg-white rounded-xl shadow-md p-10 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4 text-gray-900">
              Hosting Options
            </AnimatedHeading>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Managed Hosting Option */}
            <div className="border rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Managed Hosting – $25/month</h3>
              <p className="text-gray-700 mt-1 text-base">
                I&apos;ll manage hosting, SSL, and updates — worry-free. Ideal if you don&apos;t want to touch the tech.
              </p>
            </div>

            {/* Self-Hosted Option */}
            <div className="border rounded-xl p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Self-Hosted – $250 Setup</h3>
              <p className="text-gray-700 mt-1 text-base">
                I&apos;ll help you set up GitHub + Vercel so you fully own your site and hosting stack.
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* Call to Action Section */}
        <div className="text-center bg-gray-50 rounded-xl p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Let&apos;s discuss your project and find the perfect solution for your business.
          </p>
          <AnimatedAnchor 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto inline-block"
          >
            Start My Website
          </AnimatedAnchor>
        </div>
      </div>
    </section>
  );
} 