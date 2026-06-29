import Link from "next/link";

export default function Hero() {
  return (
      <section className="relative overflow-hidden bg-linear-to-br from-brand-gold-50 to-brand-purple-50 py-20 lg:py-32">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Text Content */}
          <div className="sm:text-center lg:col-span-7 lg:text-left">
            <h1 className="font-heading text-6xl font-bold tracking-tight text-black-900 sm:text-5xl md:text-6xl">
              <span className="block">The Future of <span className="text-error-1000">ACCA</span></span>
              <span className="block text-5xl text-brand-purple-1000">In Bangladesh Starts Here</span>
            </h1>

            <p className="mt-6 font-body text-lg leading-8 text-black-600 sm:max-w-12xl lg:mx-0">
              HeadStart is an ACCA Approved Learning Partner dedicated to developing future professionals through academic excellence, structured learning and real-world mentorship.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/enroll"
                className="rounded-md bg-brand-gold-1000 px-8 py-4 font-heading text-base text-center font-bold text-black-900 shadow-lg hover:bg-brand-gold-900 hover:scale-105 transition-all"
              >
                Apply Now
              </Link>
              <Link
                href="/services"
                className="rounded-md border-2 border-brand-purple-1000 px-8 py-4 font-heading text-base text-center font-bold text-brand-purple-1000 hover:bg-brand-purple-1000 hover:text-brand-gold-50 transition-all"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-md border-2 border-[#25D366] bg-[#25D366] px-8 py-4 font-heading text-base text-center font-bold text-black-1000 transition-all"
              >
                Chat on WhatsApp
              </Link>
            </div>

            {/* Quick Stats / Trust Indicators */}
            <div className="mt-12 flex flex-row gap-4 justify-between border border-black-200 bg-brand-grey-1000/50 p-8 rounded-lg">
              <div>
                <p className="font-body text-2xl font-semibold text-brand-purple-1000">
                  94%
                </p>
                <p className="font-heading text-xs font-medium uppercase tracking-wider text-black-900">
                  Exam pass rate
                </p>
              </div>
              <div>
                <p className="font-body text-2xl font-semibold text-brand-purple-1000">
                  120+
                </p>
                <p className="font-heading text-xs font-medium uppercase tracking-wider text-black-900">
                  ACCA qualified mentors
                </p>
              </div>
              <div>
                <p className="font-body text-2xl font-semibold text-brand-purple-1000">
                  3500+
                </p>
                <p className="font-heading text-xs font-medium uppercase tracking-wider text-black-900">
                  Students enrolled
                </p>
              </div>
              <div>
                <p className="font-body text-2xl font-semibold text-brand-purple-1000">
                  12+
                </p>
                <p className="font-heading text-xs font-medium uppercase tracking-wider text-black-900">
                  Years of excellence
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element Placeholder with subtle glassmorphism */}
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-5 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <div className="aspect-square w-full rounded-3xl bg-white/40 backdrop-blur-sm flex items-center justify-center border border-white/60 shadow-2xl">
              <div className="h-4/5 w-4/5 rounded-2xl bg-linear-to-br from-brand-purple-100 to-brand-gold-100 flex items-center justify-center">
                <span className="font-heading text-center text-brand-purple-800 font-bold text-xl opacity-50">
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
