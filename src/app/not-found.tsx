import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">This page doesn&apos;t exist. You might be lost in the grid.</p>
      <Link
        href="/"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition font-semibold"
      >
        Back to Home
      </Link>
    </section>
  );
} 