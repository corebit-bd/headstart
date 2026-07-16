import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-grey-1000 bg-linear-to-br from-brand-gold-200 to-brand-purple-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Action CTA Banner Section */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-brand-grey-50 p-6 shadow-md md:p-8">
          <div>
            <h3 className="font-heading text-lg font-bold text-black-900">
              Ready to accelerate your accounting career?
            </h3>
            <p className="mt-1 font-body text-sm text-black-600">
              Apply online or get in touch with our team instantly on WhatsApp.
            </p>
          </div>
          <div className="flex w-full flex-col sm:w-auto sm:flex-row gap-3">
            <Link
              href="https://wa.me/8801886091323"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-success-1000 px-6 py-3 font-body text-sm font-bold text-brand-grey-50 transition duration-200 hover:bg-success-900 shadow-sm"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.435 1.451 5.543 0 10.059-4.513 10.062-10.058.002-2.686-1.043-5.212-2.943-7.115C17.243 1.53 14.72 .483 12.03.482c-5.54 0-10.056 4.513-10.059 10.058-.001 1.922.501 3.8 1.456 5.41l-.999 3.646 3.729-.977zm13.102-6.275c-.33-.165-1.951-.963-2.251-1.074-.3-.11-.518-.165-.736.165-.218.33-.844 1.073-1.036 1.293-.192.22-.384.242-.714.077-.33-.165-1.393-.513-2.653-1.637-.98-.874-1.643-1.953-1.835-2.283-.192-.33-.021-.508.144-.672.148-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.166-.736-1.773-1.009-2.43-.266-.643-.538-.553-.736-.563-.19-.01-.407-.012-.623-.012-.217 0-.569.082-.867.409-.297.327-1.136 1.111-1.136 2.71 0 1.598 1.162 3.142 1.324 3.358.162.217 2.287 3.493 5.54 4.896.774.333 1.38.533 1.852.683.778.248 1.488.213 2.048.129.625-.093 1.952-.798 2.227-1.567.276-.769.276-1.43.193-1.567-.083-.138-.297-.22-.626-.385z" />
              </svg>
              WhatsApp Us
            </Link>
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center rounded-xl bg-brand-purple-1000 px-6 py-3 font-body text-sm font-bold text-brand-grey-50 transition duration-200 hover:bg-brand-purple-900 shadow-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
          
          {/* Brand & Socials Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-row items-center gap-3">
              <Link href="/" className="font-heading text-2xl font-bold text-brand-purple-50 tracking-tight">
                <Image
                  src={"/logo.png"}
                  alt="HeadStart Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <h2 className="font-heading text-2xl font-bold text-brand-purple-1000 tracking-tight">
                HeadStart
              </h2>
            </div>
          
            <p className="mt-4 font-body text-sm text-black-500 max-w-sm leading-relaxed">
              <b>A GOLD Approved Learning Partner, Approved Employer</b> & a
              Licensed CBE Centre of ACCA, is a professional Accountancy Service
              Provider dedicated to building tomorrow's global leaders.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/HeadStart.accountancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-400 hover:text-brand-purple-1000 transition"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/headstartbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-400 hover:text-brand-purple-1000 transition"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@headstartbd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-400 hover:text-brand-purple-1000 transition"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.525 3.5 12 3.5 12 3.5s-7.525 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.04 0 12 0 12s0 3.96.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.555 9.388.555 9.388.555s7.525 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.96 24 12 24 12s0-3.96-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-bold text-black-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link
                  href="/student-support"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  Student Support
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  News & Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Links Column */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold text-black-900 uppercase tracking-wider">
              Courses
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/services/acca"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  ACCA Professional Link
                </Link>
              </li>
              <li>
                <Link
                  href="/services/acca"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  FIA (Foundations in Accountancy)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sdc"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  Skill Development Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services/advisory"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  Professional Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trainings"
                  className="font-body text-sm text-black-600 hover:text-brand-purple-1000 transition"
                >
                  Corporate Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold text-black-900 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-black-600">
              {/* Address */}
              <li className="flex items-start gap-2">
                <span className="font-semibold text-black-800">Address:</span>
                <span className="leading-normal">
                  Rangs Fortune Square, Road 2, Dhanmondi, Dhaka, Bangladesh
                </span>
              </li>
              {/* Phone Numbers */}
              <li className="flex flex-col gap-0.5">
                <span className="font-semibold text-black-800">Phone:</span>
                <a
                  href="tel:+8801886091323"
                  className="hover:text-brand-purple-1000 transition"
                >
                  +880 1886-091323
                </a>
              </li>
              {/* Email */}
              <li className="flex flex-col gap-0.5">
                <span className="font-semibold text-black-800">Email:</span>
                <a
                  href="mailto:info@headstartbd.com"
                  className="hover:text-brand-purple-1000 transition break-all"
                >
                  info@headstartbd.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-brand-grey-1000 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-black-500">
            © {currentYear} HeadStart. All rights reserved.
          </p>
          <p className="font-body text-xs text-black-400">
            Developed By{" "}
            <span className="font-semibold text-brand-purple-700">CoreBit</span>
          </p>
        </div>
      </div>
    </footer>
  );
}