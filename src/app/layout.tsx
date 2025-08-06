// Vercel: force rebuild, no unused pathname variable present
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/ui/NavBar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Private IT Support | Custom Websites by Vic",
  description: "Professional web solutions for service-based businesses, creatives, and small business owners. Clean, fast, custom-coded websites that convert visitors into customers.",
};

// STEP 1B: Added footer with privacy policy and terms links
function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © 2024 VicRodTech. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link 
              href="/privacy-policy" 
              className="text-gray-600 hover:text-[#1f4494] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-[#1f4494] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* STEP 3D: Analytics placeholder - replace with actual Plausible script */}
        {/* <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-grid`}>
        <NavBar />
        <main className="min-h-screen flex flex-col items-center justify-start px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
