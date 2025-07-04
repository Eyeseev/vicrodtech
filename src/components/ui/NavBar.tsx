"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { triggerShowStickyCTA } from "./StickyCTA";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 py-4 px-6 flex items-center justify-between shadow-sm">
      <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">VicrodTech</Link>
      <div className="space-x-6">
        {links.map(({ href, label }) => {
          const isActive = mounted && pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={
                "font-semibold transition hover:underline hover:underline-offset-4 hover:decoration-primary " +
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
    </nav>
  );
};

export default NavBar; 