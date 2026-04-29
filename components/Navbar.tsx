"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const logo = "/images/logo-text.png";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-2 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center group">
            <div className=" rounded-lg flex items-center justify-center mr-3">
              <Image src={logo} alt="" width={163} height={70} />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Glass Container */}
        <div className="hidden md:flex items-center bg-black/20 backdrop-blur-xl border border-brand-primary rounded-full px-8 py-3 shadow-2xl">
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-md font-medium transition-all ${
                      isActive
                        ? "text-white font-bold"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Log In Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-linear-to-b from-brand-primary to-brand-blue hover:bg-brand-secondary text-white px-10 py-3 rounded-full text-md font-semibold transition-all shadow-lg shadow-brand-primary/20"
          >
            Log In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-brand-dark/95 backdrop-blur-xl border border-brand-primary rounded-2xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-medium text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-brand-primary text-white py-3 rounded-xl font-semibold"
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
