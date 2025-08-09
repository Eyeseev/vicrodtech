import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import { site } from "@/content/site";

export default function HowItWorks() {
  return (
    <AnimatedSection id="how-it-works" className="w-full max-w-5xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-8 text-center">
        How it works
      </AnimatedHeading>
      <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {site.howItWorks.steps.map((step, idx) => (
          <li key={step.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-primary mb-2">Step {idx + 1}</div>
            <div className="text-lg font-semibold text-gray-900">{step.title}</div>
            <p className="text-gray-700 mt-2">{step.description}</p>
          </li>
        ))}
      </ol>
      <p className="text-gray-700 mt-6 text-center">{site.howItWorks.bigTaskNote}</p>
    </AnimatedSection>
  );
}


