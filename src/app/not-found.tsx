import AnimatedHeading from "../components/ui/AnimatedHeading";
import AnimatedParagraph from "../components/ui/AnimatedParagraph";
import AnimatedAnchor from "../components/ui/AnimatedAnchor";

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center">
      <AnimatedHeading as="h1" className="text-5xl font-bold text-primary mb-4">404</AnimatedHeading>
      <AnimatedParagraph className="text-lg text-gray-600 mb-8">This page doesn't exist. You might be lost in the grid.</AnimatedParagraph>
      <AnimatedAnchor
        href="/"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition font-semibold"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Back to Home
      </AnimatedAnchor>
    </section>
  );
} 