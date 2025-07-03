"use client";
import ContactEnvelope from "../../components/svg/ContactEnvelope";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedButton from "../../components/ui/AnimatedButton";
import AnimatedForm from "../../components/ui/AnimatedForm";

export default function Contact() {
  return (
    <section className="w-full max-w-md mx-auto py-32 text-center bg-grid">
      <AnimatedSection className="w-full max-w-xs mx-auto mb-8">
        <ContactEnvelope className="w-full h-auto max-h-20 mx-auto" />
      </AnimatedSection>
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6 text-primary">
        Contact
      </AnimatedHeading>
      <AnimatedParagraph className="mb-10 text-gray-700">
        Want to work together or have a question? Drop a message below.
      </AnimatedParagraph>
      <AnimatedForm
        className="flex flex-col gap-4 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <input type="text" name="name" placeholder="Name" className="border rounded px-4 py-2 focus:outline-primary" />
        <input type="email" name="email" placeholder="Email" className="border rounded px-4 py-2 focus:outline-primary" />
        <textarea name="message" placeholder="Message" rows={5} className="border rounded px-4 py-2 focus:outline-primary" />
        <AnimatedButton type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition font-semibold">
          Send
        </AnimatedButton>
      </AnimatedForm>
    </section>
  );
} 