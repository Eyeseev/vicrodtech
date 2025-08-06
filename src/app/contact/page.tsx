"use client";
import ContactEnvelope from "../../components/svg/ContactEnvelope";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedButton from "../../components/ui/AnimatedButton";
import { useState, ChangeEvent, FormEvent } from "react";

function useContactForm() {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    projectType: '', 
    message: '', 
    website: '' 
  });
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

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
        body: JSON.stringify({ 
          name: form.name, 
          email: form.email, 
          projectType: form.projectType,
          message: form.message 
        })
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', projectType: '', message: '', website: '' });
      }
    } catch {
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
    <section className="w-full mx-auto py-20">
      <div className="max-w-xl mx-auto px-6 space-y-10">
        {/* Page Header */}
        <div className="text-center">
          <div className="w-full max-w-xs mx-auto mb-8">
            <ContactEnvelope className="w-full h-auto max-h-20 mx-auto" />
          </div>
          <AnimatedHeading as="h1" className="text-4xl font-bold text-center mb-6" style={{ color: '#1f4494' }}>
            Let&apos;s Build Something Great
          </AnimatedHeading>
          <AnimatedParagraph className="text-lg text-gray-700 leading-relaxed">
            Tell me a bit about your project. I&apos;ll get back to you within 1–2 business days.
          </AnimatedParagraph>
        </div>

        {/* Contact Form */}
        <AnimatedSection className="bg-white rounded-xl shadow-md p-10">
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-live="polite"
            className="space-y-6"
          >
            {/* Honeypot field */}
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

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block font-medium mb-2 text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={`w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : ''
                }`}
                value={form.name}
                onChange={handleChange}
                required
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
              />
              {errors.name && (
                <span id="name-error" className="text-red-600 text-sm mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                value={form.email}
                onChange={handleChange}
                required
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <span id="email-error" className="text-red-600 text-sm mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Project Type Field */}
            <div>
              <label htmlFor="projectType" className="block font-medium mb-2 text-gray-700">
                Project Type <span className="text-gray-500 text-sm">(optional)</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.projectType}
                onChange={handleChange}
              >
                <option value="">Select a project type...</option>
                <option value="new-website">New Website</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="ecommerce">E-commerce Site</option>
                <option value="landing-page">Landing Page</option>
                <option value="blog">Blog</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                  errors.message ? 'border-red-500' : ''
                }`}
                value={form.message}
                onChange={handleChange}
                required
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                placeholder="Tell me about your project goals, timeline, or any questions you have..."
              />
              {errors.message && (
                <span id="message-error" className="text-red-600 text-sm mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <AnimatedButton
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </AnimatedButton>
            </div>
          </form>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-center">
                Thanks for reaching out! I&apos;ll be in touch soon.
              </p>
            </div>
          )}
        </AnimatedSection>

        {/* Optional Contact Info */}
        <div className="text-center text-sm text-gray-500">
          <p>Prefer email?</p>
          <p className="mt-1">
            <a 
              href="mailto:vicrodtech@gmail.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              vicrodtech@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 