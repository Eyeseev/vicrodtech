import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      {/* STEP 3E: Updated 404 message */}
      <p className="text-lg text-gray-600 mb-8">Page not found. Let&apos;s get you back <Link href="/" className="text-[#1f4494] hover:underline">home</Link>.</p>
      <Link
        href="/"
        className="bg-[#1f4494] text-white px-6 py-3 rounded-lg hover:bg-[#18316b] transition font-semibold"
      >
        Back to Home
      </Link>
    </section>
  );
} 