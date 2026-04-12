import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-grey-1000 bg-brand-grey-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="font-heading text-xl font-bold text-brand-purple-1000"
            >
              HeadStart
            </Link>
            <p className="mt-4 font-body text-sm text-gray-500 max-w-xs">
              <b>A GOLD Approved Learning Partner, Approved Employer</b>& a
              Licensed CBE Centre of ACCA, is a professional Accountancy Service
              Provider.
            </p>
          </div>

          {/* Academy Links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-gray-900 uppercase tracking-wider">
              Academy
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services/acca"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  ACCA Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sdc"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  SDC
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Advisory Links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-gray-900 uppercase tracking-wider">
              Advisory
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services/advisory"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  Professional Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trainings"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-heading text-sm font-bold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="font-body text-sm text-gray-600 hover:text-brand-purple-1000"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-brand-grey-1000 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-gray-500">
            © {currentYear} HeadStart. All rights reserved.
          </p>
          <p className="font-body text-xs text-gray-400">
            Developed By{" "}
            <span className="font-semibold text-brand-purple-700">CoreBit</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
