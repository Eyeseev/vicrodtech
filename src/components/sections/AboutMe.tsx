import AnimatedSection from "../ui/AnimatedSection";
import AnimatedHeading from "../ui/AnimatedHeading";
import Image from "next/image";
import { site } from "@/content/site";

export default function AboutMe() {
  return (
    <AnimatedSection id="about" className="w-full max-w-3xl mx-auto py-8">
      <AnimatedHeading as="h2" className="text-3xl font-semibold tracking-tight sm:text-4xl mb-6 text-center">
        About me
      </AnimatedHeading>
      <div className="flex items-center gap-4">
        <Image
          src={site.about.avatar}
          alt={`${site.about.name} avatar`}
          width={64}
          height={64}
          className="rounded-full border border-gray-200"
        />
        <div>
          <p className="text-gray-800">{site.about.bio}</p>
          <div className="mt-3 flex gap-4">
            {site.about.socials.map((s) => (
              <a key={s.name} href={s.url} className="text-primary underline" aria-label={s.name}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}


