import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import { site } from "@/content/site";

export default function ServicesGrid() {
  return (
    <AnimatedSection id="services" className="w-full max-w-5xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-8 text-center">
        Services
      </AnimatedHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {site.services.map((svc) => (
          <div key={svc.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-gray-900">{svc.title}</div>
            <p className="text-gray-700 mt-2">{svc.outcome}</p>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-gray-700">
        Don’t see it? <a href="/contact" className="text-primary underline">Ask</a>.
      </p>
    </AnimatedSection>
  );
}


