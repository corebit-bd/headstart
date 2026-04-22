import Link from "next/link";

export default function Hero() {
  return (
      <section className="relative overflow-hidden bg-linear-to-br from-brand-gold-50 to-brand-purple-50 py-20 lg:py-32">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Text Content */}
          <div className="sm:text-center lg:col-span-7 lg:text-left">
            {/* Tagline using Purple Variant 900 for high-integrity contrast */}
            <div className="mb-6 inline-flex items-center rounded-full bg-brand-purple-50 px-3 py-1 text-sm font-medium text-brand-purple-1000 ring-1 ring-inset ring-brand-purple-200">
              Professional Accountacy Services
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-black-900 sm:text-5xl md:text-6xl">
              <span className="block">Empowering Future</span>
              <span className="block text-brand-purple-1000">ACCA Leaders</span>
            </h1>

            <p className="mt-6 font-body text-lg leading-8 text-black-600 sm:mx-auto sm:max-w-2xl lg:mx-0">
              We are ACCA Approved Learning Partner, Approved Employer, Licensed
              CBE Centre & Registered Learning Partner. HeadStart merges{" "}
              <b>Gold-Standard Academic Learning</b> with Top-Tier Professional
              Advisory.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/enroll"
                className="rounded-md bg-brand-gold-1000 px-8 py-4 font-heading text-base font-bold text-black-900 shadow-lg hover:bg-brand-gold-900 hover:scale-105 transition-all"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="rounded-md border-2 border-brand-purple-1000 px-8 py-4 font-heading text-base font-bold text-brand-purple-1000 hover:bg-brand-purple-1000 hover:text-brand-gold-50 transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Quick Stats / Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-brand-grey-1000 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-body text-2xl font-semibold text-brand-purple-1000">
                  GOLD
                </p>
                <p className="font-heading text-xs font-medium uppercase tracking-wider text-black-500">
                  Learning Partner
                </p>
              </div>
              <div>
                <p className="font-body text-2xl font-semibold text-brand-purple-1000">
                  99%
                </p>
                <p className="font-heading text-xs font-medium uppercase tracking-wider text-black-500">
                  Integrity Score
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element Placeholder with subtle glassmorphism */}
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-5 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <div className="aspect-square w-full rounded-3xl bg-white/40 backdrop-blur-sm flex items-center justify-center border border-white/60 shadow-2xl">
              <div className="h-4/5 w-4/5 rounded-2xl bg-linear-to-br from-brand-purple-100 to-brand-gold-100 flex items-center justify-center">
                <span className="font-heading text-brand-purple-800 font-bold text-xl opacity-50">
                  HeadStart Placeholder Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
