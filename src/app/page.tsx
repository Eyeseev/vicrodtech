import Hero from "@/components/sections/Hero";
import ProblemsSolutions from "@/components/sections/ProblemsSolutions";
import Offer from "@/components/sections/Offer";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Pricing from "@/components/sections/Pricing";
import AboutMe from "@/components/sections/AboutMe";
import Faq from "@/components/sections/Faq";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(site.organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: site.faq.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
      <Hero />
      <ProblemsSolutions />
      <Offer />
      <HowItWorks />
      <ServicesGrid />
      <Pricing />
      <AboutMe />
      <Faq />
    </>
  );
}
