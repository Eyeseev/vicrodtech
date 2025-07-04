"use client";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function triggerShowStickyCTA() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("showStickyCTA"));
  }
}

export default function StickyCTA() {
  const [dismissed, setDismissed] = useState(false);
  const controls = useAnimation();

  // Listen for custom event to show CTA again
  useEffect(() => {
    const handler = () => setDismissed(false);
    window.addEventListener("showStickyCTA", handler);
    return () => window.removeEventListener("showStickyCTA", handler);
  }, []);

  // Animate on mount (once)
  useEffect(() => {
    if (!dismissed) {
      controls.start({
        scale: [0.8, 1.1, 0.95, 1.03, 1],
        transition: { duration: 0.9, times: [0, 0.3, 0.5, 0.7, 1], ease: "easeOut" },
      });
    }
  }, [controls, dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2 }}
      className="fixed bottom-6 right-6 z-50 bg-white shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4 border border-gray-200"
      style={{ boxShadow: "0 8px 32px rgba(28,57,142,0.08)" }}
    >
      <motion.div animate={controls} className="flex items-center gap-4">
        <Link
          href="/contact"
          className="flex items-center gap-2 font-semibold text-gray-800 hover:text-primary focus:text-primary transition outline-none"
        >
          <span>Let's work together</span>
          <span className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition font-semibold">Contact</span>
        </Link>
      </motion.div>
      <button
        aria-label="Dismiss"
        title="Dismiss"
        onClick={handleDismiss}
        className="ml-2 w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-200 focus:bg-gray-200 focus:outline-none transition"
        tabIndex={0}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="8" fill="#f3f4f6" />
          <rect x="4.5" y="7.25" width="7" height="1.5" rx="0.75" fill="#1c398e" />
        </svg>
      </button>
    </motion.div>
  );
} 