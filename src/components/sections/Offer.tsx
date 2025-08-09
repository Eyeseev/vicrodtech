import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import AnimatedParagraph from "../ui/AnimatedParagraph";
import { site } from "@/content/site";

export default function Offer() {
  return (
    <AnimatedSection id="offer" className="w-full max-w-4xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-center">
        What I offer
      </AnimatedHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {site.offer.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <AnimatedParagraph className="font-semibold mb-2">What’s included</AnimatedParagraph>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {site.offer.included.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}


