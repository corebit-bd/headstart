"use client";

import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";

export default function Navbar() {

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-purple-700 bg-brand-purple-1000 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="font-heading text-2xl font-bold text-brand-purple-50 tracking-tight">
              <Image
                src={"/logo.png"}
                alt="HeadStart Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 font-heading text-sm font-medium">
              {/* About Us */}
              <NavLink href="/about" className="flex items-center gap-1 text-brand-purple-50">
                About Us
              </NavLink>

              <NavLink href="/courses" className="flex items-center gap-1 text-brand-purple-50">
                Courses
              </NavLink>

              <NavLink href="/life-at-headstart" className="flex items-center gap-1 text-brand-purple-50">
                Life at HeadStart
              </NavLink>

              <NavLink href="/student-support" className="flex items-center gap-1 text-brand-purple-50">
                Student Support
              </NavLink>
            </div>
          </div>

          {/* Enroll Now CTA - Gold Secondary Color */}
          <div className="flex items-center">
            <Link href="/enroll">
              <Button variant="secondary" size="lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
