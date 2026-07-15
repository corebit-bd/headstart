import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/ContactUsIcons";
import Link from "next/link";

export default function ContactUsPage() {
    return (
      <main className="min-h-screen">

        <section className="relative overflow-hidden bg-linear-to-br from-brand-purple-900 via-black-800 to-black-1000 py-24 text-brand-gold-1000">

            <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
                {/* Tech/Grid Dot Pattern */}
                <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <pattern id="hero-dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" className="text-brand-gold-1000" />
                    </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-dot-pattern)" />
                </svg>
            
                {/* Abstract Geometric Shapes */}
                <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full border-4 border-brand-purple-1000/30 blur-sm" />
                <div className="absolute bottom-10 right-1/4 w-64 h-64 border border-brand-purple-1000/20 transform rotate-45" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-3xl bg-brand-purple-1000/5 transform -rotate-12" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight">
                            Contact Us
                        </h1>
                        <p className="font-body text-xl md:text-2xl text-brand-gold-800 font-medium leading-normal">
                            Get in touch with HeadStart and take the first step toward your ACCA journey.
                        </p>
                    </div>
                    <div className="lg:col-span-5 lg:border-l lg:border-brand-purple-1000/10 lg:pl-12">
                        <p className="font-body text-lg text-black-300 leading-relaxed">
                            We are here to help students and parents with guidance on courses, admissions, counselling, and career direction. Reach out to us for personalized support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  
        {/* 2. Quick Actions Layout Buffer with Accent Gold and Purple tokens */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/enroll"
              className="flex items-center justify-center bg-brand-purple-1000 hover:bg-brand-purple-800 text-white font-semibold py-4 px-4 rounded-xl shadow-lg transition duration-200 text-center text-sm sm:text-base"
            >
              Apply Now
            </Link>
            <Link
              href="#counselling-form"
              className="flex items-center justify-center bg-brand-gold-1000 hover:bg-brand-gold-800 text-black-1000 font-semibold py-4 px-4 rounded-xl shadow-lg transition duration-200 text-center text-sm sm:text-base"
            >
              Book Free Counselling
            </Link>
            <a
              href="tel:+8801886091323"
              className="flex items-center justify-center bg-brand-grey-50 hover:bg-black-100 text-black-800 font-semibold py-4 px-4 rounded-xl shadow-lg border border-black-100 transition duration-200 text-center text-sm sm:text-base"
            >
              <PhoneIcon className="w-5 h-5 mr-2 text-brand-purple-1000" />
              Call Now
            </a>
            <a
              href="https://wa.me/8801886091323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-success-1000 hover:bg-success-900 text-white font-semibold py-4 px-4 rounded-xl shadow-lg transition duration-200 text-center text-sm sm:text-base"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </section>
  
        {/* 3. Main Split Structure: Contact Details vs Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Grid: Info Panels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-black-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Address Card */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-purple-50 p-3 rounded-lg text-brand-purple-1000 shrink-0">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black-700 text-sm uppercase tracking-wider">Address</h3>
                    <p className="mt-1 font-bold text-black-900">HeadStart – ACCA Approved Learning Partner</p>
                    <p className="text-black-600 text-sm whitespace-pre-line leading-relaxed">
                      Razzaque Villa, House: 8/A/KA{"\n"}
                      6th Floor, Road No: 13 (New){"\n"}
                      Dhanmondi R/A, Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
  
                {/* Phone Card using .data-value typography styling token natively */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-purple-50 p-3 rounded-lg text-brand-purple-1000 shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black-700 text-sm uppercase tracking-wider">Phone</h3>
                    <div className="mt-2 space-y-1.5 text-sm">
                      <p className="text-black-700">
                        <span className="font-semibold text-black-900">Admissions Hotline:</span>{" "}
                        <a href="tel:+8801886091323" className="hover:text-brand-purple-1000 transition data-value">+880 1886-091323</a>
                      </p>
                      <p className="text-black-700">
                        <span className="font-semibold text-black-900">General Enquiries:</span>{" "}
                        <a href="tel:+8801311091323" className="hover:text-brand-purple-1000 transition data-value">+880 1311-091323</a>
                      </p>
                    </div>
                  </div>
                </div>
  
                {/* Email Card */}
                <div className="flex items-start gap-4">
                  <div className="bg-brand-purple-50 p-3 rounded-lg text-brand-purple-1000 shrink-0">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black-700 text-sm uppercase tracking-wider">Email</h3>
                    <p className="mt-1 text-black-700">
                      <a href="mailto:info@headstartbd.com" className="hover:text-brand-purple-1000 transition font-medium text-black-900 data-value">
                        info@headstartbd.com
                      </a>
                    </p>
                  </div>
                </div>
  
                {/* WhatsApp Context Option */}
                <div className="flex items-start gap-4">
                  <div className="bg-success-50 p-3 rounded-lg text-success-1000 shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black-700 text-sm uppercase tracking-wider">WhatsApp Instant Chat</h3>
                    <p className="mt-1 text-sm text-black-600 mb-2">
                      Connect instantly with an academic counselor on our hotline.
                    </p>
                    <a
                      href="https://wa.me/8801886091323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-success-1000 hover:text-success-900 transition"
                    >
                      Start WhatsApp Chat &rarr;
                    </a>
                  </div>
                </div>
  
                {/* Office Hours Panel */}
                <div className="flex items-start gap-4 border-t border-black-100 pt-6">
                  <div className="bg-black-50 p-3 rounded-lg text-black-600 shrink-0">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black-700 text-sm uppercase tracking-wider">Office Hours</h3>
                    <div className="mt-2 space-y-1 text-sm text-black-600">
                      <p><span className="font-medium text-black-900">Saturday – Thursday:</span> 10:00 AM – 7:00 PM</p>
                      <p><span className="font-medium text-black-900">Friday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Grid: Form Component Block */}
          <div id="counselling-form" className="lg:col-span-7 bg-brand-grey-50 p-6 sm:p-10 rounded-2xl shadow-xl border border-black-50">
            <h2 className="text-2xl font-bold tracking-tight text-black-900 mb-2">
              Request Free Counselling
            </h2>
            <p className="text-black-500 text-sm mb-8">
              Fill out the details below and an admissions executive will contact you shortly.
            </p>
  
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-black-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-black-300 focus:ring-2 focus:ring-brand-purple-500/20 focus:border-brand-purple-1000 outline-none transition"
                  />
                </div>
  
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-black-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    placeholder="+880 1XXX-XXXXXX"
                    className="w-full px-4 py-2.5 rounded-lg border border-black-300 focus:ring-2 focus:ring-brand-purple-500/20 focus:border-brand-purple-1000 outline-none transition"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-semibold text-black-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-black-300 focus:ring-2 focus:ring-brand-purple-500/20 focus:border-brand-purple-1000 outline-none transition"
                />
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="interestedCourse" className="block text-sm font-semibold text-black-700 mb-1">
                    Interested Course *
                  </label>
                  <select
                    id="interestedCourse"
                    name="interestedCourse"
                    required
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-lg border border-black-300 focus:ring-2 focus:ring-brand-purple-500/20 focus:border-brand-purple-1000 outline-none transition bg-brand-grey-50"
                  >
                    <option value="" disabled>Select a course</option>
                    <option value="acca">ACCA Full Course</option>
                    <option value="fia">FIA (Foundations in Accountancy)</option>
                    <option value="oxford-brookes">Oxford Brookes Degree Pathway</option>
                  </select>
                </div>
  
                <div>
                  <label htmlFor="preferredLevel" className="block text-sm font-semibold text-black-700 mb-1">
                    Preferred Level <span className="text-black-400 font-normal">(optional)</span>
                  </label>
                  <select
                    id="preferredLevel"
                    name="preferredLevel"
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-lg border border-black-300 focus:ring-2 focus:ring-brand-purple-500/20 focus:border-brand-purple-1000 outline-none transition bg-brand-grey-50"
                  >
                    <option value="" disabled>Select level if known</option>
                    <option value="applied-knowledge">Applied Knowledge</option>
                    <option value="applied-skills">Applied Skills</option>
                    <option value="strategic-professional">Strategic Professional</option>
                  </select>
                </div>
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your educational background or questions..."
                  className="w-full px-4 py-2.5 rounded-lg border border-black-300 focus:ring-2 focus:ring-brand-purple-500/20 focus:border-brand-purple-1000 outline-none transition resize-none"
                />
              </div>
  
              <button
                type="submit"
                className="w-full bg-brand-purple-1000 hover:bg-brand-purple-900 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition duration-200 text-center cursor-pointer"
              >
                Submit & Get Free Counselling
              </button>
            </form>
          </div>
        </section>

        {/* 4. Google Map Integration Frame */}
        <section className="w-full h-[450px] relative">
            <iframe
                title="HeadStart Dhanmondi Location Map"
                src="https://maps.google.com/maps?q=HeadStart+Professional+Accountancy+Services,+Dhaka&hl=en&z=16&output=embed"
                // Removed 'grayscale contrast-125' to bring back the full, native Google Maps color palette
                className="w-full h-full border-none focus:outline-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </section>
  
        {/* 5. Final CTA Action Section with Purple/Gold design coherence */}
        <section className="relative overflow-hidden bg-linear-to-br from-brand-purple-900 via-black-800 to-black-1000 py-24 text-brand-grey-1000 text-center">

        <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
            {/* Tech/Grid Dot Pattern */}
            <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                <pattern id="hero-dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" className="text-brand-gold-1000" />
                </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-dot-pattern)" />
            </svg>
        
            {/* Abstract Geometric Shapes */}
            <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full border-4 border-brand-purple-1000/30 blur-sm" />
            <div className="absolute bottom-10 right-1/4 w-64 h-64 border border-brand-purple-1000/20 transform rotate-45" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-3xl bg-brand-purple-1000/5 transform -rotate-12" />
        </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              Let’s Build Your ACCA Future Together
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href="/enroll"
                className="w-full sm:w-auto px-8 py-4 bg-brand-gold-1000 hover:bg-brand-gold-500 text-black-1000 font-bold rounded-xl shadow-lg transition duration-200"
              >
                Apply Now
              </Link>
              <Link
                href="#counselling-form"
                className="w-full sm:w-auto px-8 py-4 bg-brand-purple-50 hover:bg-brand-purple-200 text-brand-purple-1000 font-bold rounded-xl shadow-lg border border-white/20 transition duration-200"
              >
                Book Free Counselling
              </Link>
              <a
                href="https://wa.me/8801886091323"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-success-1000 hover:bg-success-900 text-white font-bold rounded-xl shadow-lg inline-flex justify-center items-center gap-2 transition duration-200"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp / Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    );
}