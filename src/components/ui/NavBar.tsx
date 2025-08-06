"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { triggerShowStickyCTA } from "./StickyCTA";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 py-4 px-6 flex items-center justify-between shadow-sm">
      <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">VicrodTech</Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {links.map(({ href, label }) => {
          const isActive = mounted && pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={
                "font-semibold transition hover:underline hover:underline-offset-4 hover:decoration-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded " +
                (isActive
                  ? "text-primary underline underline-offset-4 decoration-primary"
                  : "text-gray-700 hover:text-primary")
              }
              {...(isActive ? { "aria-current": "page" } : {})}
              onClick={label === "Home" ? () => triggerShowStickyCTA() : undefined}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="flex flex-col">
            {links.map(({ href, label }) => {
              const isActive = mounted && pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    "py-3 px-4 font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 " +
                    (isActive
                      ? "text-primary bg-gray-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50")
                  }
                  {...(isActive ? { "aria-current": "page" } : {})}
                  onClick={label === "Home" ? () => triggerShowStickyCTA() : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 