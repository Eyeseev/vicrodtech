"use client";
import ContactEnvelope from "../../components/svg/ContactEnvelope";
import AnimatedSection from "../../components/ui/AnimatedSection";
import AnimatedHeading from "../../components/ui/AnimatedHeading";
import AnimatedParagraph from "../../components/ui/AnimatedParagraph";
import AnimatedButton from "../../components/ui/AnimatedButton";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

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

  // Auto-hide success message after 30 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

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

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <svg 
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// Check Circle Icon Component
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
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
          <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl mb-6" style={{ color: '#1f4494' }}>
            Let&apos;s Get Your Website Started
          </AnimatedHeading>
          <AnimatedParagraph className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Fill out the form and I&apos;ll follow up with next steps. Whether you&apos;re ready to begin or just exploring options, I&apos;m here to help.
          </AnimatedParagraph>
        </div>

        {/* Contact Form */}
        <AnimatedSection className="bg-white rounded-xl shadow-md p-10">
          {!submitted ? (
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
                  placeholder="Your name"
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
                  placeholder="you@example.com"
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
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  value={form.projectType}
                  onChange={handleChange}
                >
                  <option value="" className="text-gray-500">Select a project type</option>
                  <option value="starter-website" className="text-gray-900">Starter Website</option>
                  <option value="redesign" className="text-gray-900">Redesign</option>
                  <option value="hosting-support" className="text-gray-900">Hosting Support</option>
                  <option value="add-ons" className="text-gray-900">Add-Ons</option>
                  <option value="something-else" className="text-gray-900">Something Else</option>
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
                  placeholder="Tell me a bit about your project, timeline, and goals..."
                  className={`w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading && <LoadingSpinner />}
                  {loading ? 'Sending Message...' : 'Send Message'}
                </AnimatedButton>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="text-green-600 mt-6 flex items-center gap-2 justify-center mb-4">
                <CheckCircleIcon className="h-5 w-5" />
                <span className="font-medium">
                  Thanks! Your message was sent successfully. I&apos;ll be in touch shortly with next steps.
                </span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm">
                  <strong>What happens next?</strong> I&apos;ll review your project details and send you a personalized response with next steps.
                </p>
              </div>
            </div>
          )}
        </AnimatedSection>

        {/* Optional Contact Info */}
        <div className="text-center text-sm text-gray-500">
          <p>Prefer email?</p>
          <p className="mt-1">
            <a 
              href="mailto:vicrodtech@gmail.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              vicrodtech@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 