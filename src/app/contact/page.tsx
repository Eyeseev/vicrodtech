"use client";
import ContactEnvelope from "../../components/svg/ContactEnvelope";
import { motion } from "framer-motion";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import { useState, ChangeEvent, FormEvent } from "react";

function useContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(values: { name: string; email: string; message: string }) {
    const newErrors = { name: '', email: '', message: '' };
    if (!values.name.trim()) newErrors.name = 'Name is required.';
    if (!values.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) newErrors.email = 'Enter a valid email.';
    if (!values.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.website) return;
    const validation = validate(form);
    setErrors(validation);
    if (Object.values(validation).some(Boolean)) return;
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xovwbbdb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '', website: '' });
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  return {
    form,
    errors,
    submitted,
    loading,
    handleChange,
    handleSubmit,
  };
}

export default function Contact() {
  const { form, errors, submitted, loading, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="w-full flex flex-col items-center justify-center py-32">
      <AnimatedSection className="w-full max-w-xs mx-auto mb-8">
        <ContactEnvelope className="w-full h-auto max-h-20 mx-auto" />
      </AnimatedSection>
      <AnimatedHeading as="h2" className="text-4xl font-extrabold mb-6" style={{ color: '#1f4494' }}>
        Let's Connect
      </AnimatedHeading>
      <AnimatedParagraph className="mb-6 text-gray-700">
        I'd love to hear from you. Whether you have a question, want to collaborate, or just want to say hi—drop a message below. I usually reply within 24 hours.
      </AnimatedParagraph>
      <form
        className="w-full max-w-lg bg-white rounded-xl shadow p-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
        noValidate
        aria-live="polite"
      >
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-gray-900">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`border rounded px-4 py-2 focus:outline-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            value={form.name}
            onChange={handleChange}
            required
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && <span id="name-error" className="text-red-600 text-sm">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-gray-900">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`border rounded px-4 py-2 focus:outline-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            value={form.email}
            onChange={handleChange}
            required
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && <span id="email-error" className="text-red-600 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-medium text-gray-900">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`border rounded px-4 py-2 focus:outline-primary resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            value={form.message}
            onChange={handleChange}
            required
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && <span id="message-error" className="text-red-600 text-sm">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="mt-4 bg-[#1f4494] text-white font-semibold py-2 px-6 rounded hover:bg-[#18316b] transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Sending…' : 'Send Message'}
        </button>
        {submitted && (
          <div className="text-green-600 text-center mt-4">Thank you! Your message has been sent.</div>
        )}
      </form>
    </section>
  );
} 