import Link from "next/link";

export function Contact() {
  const whatsappUrl = "https://wa.me/8801886091323";
  return (
    <section className="bg-brand-grey-50 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-black-900 mb-4">
          Start Your <span className="text-error-1000">ACCA</span> Journey Today
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-black-800 leading-relaxed">
          Join HeadStart and take the first step toward becoming a globally recognized finance professional.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
          <Link
            href="/enroll"
            className="rounded-md bg-brand-gold-1000 px-8 py-4 font-heading text-base text-center font-bold text-black-900 shadow-lg hover:bg-brand-gold-900 hover:scale-105 transition-all"
          >
            Apply Now
          </Link>
          <Link
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-md border-2 border-brand-purple-1000 px-8 py-4 font-heading text-base text-center font-bold text-brand-purple-1000 hover:bg-brand-purple-1000 hover:text-brand-gold-50 transition-all"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
