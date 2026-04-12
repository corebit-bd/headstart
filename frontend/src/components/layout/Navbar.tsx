"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { name: "ACCA Courses", href: "/services/acca" },
  { name: "Advisory", href: "/services/advisory" },
  { name: "Trainings", href: "/services/trainings" },
  { name: "Students Development Center (SDC)", href: "/services/sdc" },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-grey-1000 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-brand-purple-1000 tracking-tight"
            >
              HeadStart
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 font-heading text-sm font-medium">
              {/* About Us */}
              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-purple-1000 transition-colors"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 group-hover:text-brand-purple-1000 transition-colors focus:outline-none">
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu - Glassmorphism Aesthetic */}
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-72 rounded-xl border border-brand-grey-1000 bg-white p-2 shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in duration-200">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-brand-purple-50 hover:text-brand-purple-1000 transition-all"
                      >
                        <span className="block font-semibold">
                          {service.name}
                        </span>
                        <span className="mt-1 block text-xs text-gray-500 font-normal">
                          Explore our professional {service.name.split(" ")[0]}{" "}
                          wing.
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining Nav Links */}
              {navLinks
                .filter((link) => link.name !== "About Us")
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-brand-purple-1000 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
            </div>
          </div>

          {/* Enroll Now CTA - Gold Secondary Color */}
          <div className="flex items-center">
            <Link
              href="/enroll"
              className="rounded-md bg-brand-gold-1000 px-6 py-2.5 font-heading text-sm font-bold text-gray-900 shadow-md hover:bg-brand-gold-900 hover:shadow-lg transition-all active:scale-95"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
