import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedCard from "../ui/AnimatedCard";
import AnimatedAnchor from "../ui/AnimatedAnchor";
import { site } from "@/content/site";

export default function ProblemsSolutions() {
  return (
    <AnimatedSection id="problems" className="w-full max-w-5xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-8 text-center">
        Problems we fix — and how
      </AnimatedHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {site.problemsSolutions.map((item) => (
          <AnimatedCard key={item.id} className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.problem}</h3>
              <p className="text-gray-700">How we fix it: {item.solution}</p>
            </div>
            <div className="pt-4">
              <AnimatedAnchor href={item.href} className="text-primary underline">
                Learn more
              </AnimatedAnchor>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}


