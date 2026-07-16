// frontend/src/app/student-support/page.tsx
"use client";

import { Tabs } from "@/components/ui/Tabs";
import { Tab } from "@/types/nav";
import { BriefcaseIcon, BookOpenIcon, LightBulbIcon } from "@/components/ui/StudentSupportIcons";
import Link from "next/link";

export default function StudentSupportPage() {
  const whatsappUrl = "https://wa.me/8801886091323";

  const supportTabs: Tab[] = [
    {
      id: "career-support",
      label: "Career Support",
      content: (
        <div className="space-y-12">
          <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
            <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
              Career Support & Job Placement
            </h3>
            <p className="text-black-700 font-body">
              We support students in transitioning from studies to careers through structured guidance, professional readiness support, and relevant opportunity sharing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Guidance & Mentoring",
                desc: "One-on-one sessions to align your technical ACCA skill set with high-yield career paths.",
              },
              {
                title: "CV & Profile Building",
                desc: "Tailoring resumes and LinkedIn profiles to match demanding recruiter profiles perfectly.",
              },
              {
                title: "Interview Prep",
                desc: "Simulating high-stakes mock panels to guarantee confidence, poise, and technical clarity.",
              },
              {
                title: "Opportunity Sharing",
                desc: "Immediate postings of elite internships and job opportunities across regional networks.",
              },
              {
                title: "Active Networking",
                desc: "Unlocking direct interactions and linkages with industry leaders and professional alumni.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-grey-50 border border-brand-grey-1000 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-brand-purple-100 rounded-xl text-brand-purple-1000">
                      <BriefcaseIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-brand-purple-1000">{item.title}</h4>
                  </div>
                  <p className="text-sm text-black-600 font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
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
            <Link
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand-purple-1000 text-brand-grey-1000 border-2 border-brand-purple-1000 px-8 py-4 font-heading text-base text-center font-bold hover:bg-brand-purple-50 hover:border-brand-purple-1000 hover:text-brand-purple-1000 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: "academic-resources",
      label: "Academic Resources",
      content: (
        <div className="space-y-12">
          <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
            <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
              Academic Resources
            </h3>
            <p className="text-black-700 font-body">
              Students receive access to supporting materials and learning resources that strengthen preparation and improve consistency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Study Materials",
                desc: "Curated learning manuals and reference assets mapped specifically to standard paper modules.",
              },
              {
                title: "Class Notes",
                desc: "Comprehensive topic summarizations generated directly from regular faculty lecture logs.",
              },
              {
                title: "Practice Support",
                desc: "Interactive question banks and practice exam templates designed to elevate diagnostic capabilities.",
              },
              {
                title: "Exam Preparation",
                desc: "Mock execution schemes, timing blueprints, and error diagnostic rubrics.",
              },
              {
                title: "Recorded Sessions",
                desc: "Complete digital repositories of active class sessions allowing unlimited catch-up flexibility.",
              },
              {
                title: "Academic Notices",
                desc: "Consolidated updates regarding cycle revisions, exam registration details, and class alerts.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-grey-50 border border-brand-grey-1000 p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-brand-purple-100 rounded-xl text-brand-purple-1000">
                      <BookOpenIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-brand-purple-1000">{item.title}</h4>
                  </div>
                  <p className="text-sm text-black-600 font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
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
            <Link
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand-purple-1000 text-brand-grey-1000 border-2 border-brand-purple-1000 px-8 py-4 font-heading text-base text-center font-bold hover:bg-brand-purple-50 hover:border-brand-purple-1000 hover:text-brand-purple-1000 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ),
    },
    {
      id: "knowledge-hub",
      label: "Knowledge Hub",
      content: (
        <div className="space-y-12">
          <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
            <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
              Blogs & Insights
            </h3>
            <p className="text-black-700 font-body">
              A knowledge-focused section for students to access useful articles, career advice, ACCA tips, exam support content, student stories, and HeadStart updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ACCA Study Tips & Strategies",
                desc: "High-performance routines and preparation frameworks drafted directly by regional high-scorers.",
              },
              {
                title: "Career Advice & Placement Trends",
                desc: "Deep evaluations on high-demand finance paradigms and expectations from global firms.",
              },
              {
                title: "Student Success Stories",
                desc: "Inspiring pathways and professional stories chronicling growth and professional alignment.",
              },
              {
                title: "Industry & Financial Insights",
                desc: "Real-world breakdowns of shifting corporate accounting trends and reporting transformations.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-grey-50 border border-brand-grey-1000 p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-brand-purple-100 rounded-xl text-brand-purple-1000">
                      <LightBulbIcon className="h-6 w-6" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-brand-purple-1000">{item.title}</h4>
                  </div>
                  <p className="text-sm text-black-600 font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-4">
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
            <Link
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-brand-purple-1000 text-brand-grey-1000 border-2 border-brand-purple-1000 px-8 py-4 font-heading text-base text-center font-bold hover:bg-brand-purple-50 hover:border-brand-purple-1000 hover:text-brand-purple-1000 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-brand-grey-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-brand-purple-50 via-brand-purple-100 to-brand-grey-50 py-24 text-brand-purple-1000">
        
        <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
          {/* Tech/Grid Dot Pattern */}
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-black-1000" />
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
            {/* Left Column (Heading & Subheading) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight">
                Student Support
              </h1>
              <p className="font-body text-xl md:text-2xl text-brand-purple-800 font-medium leading-normal">
                Comprehensive support designed to guide students through their ACCA journey—from learning to career success.
              </p>
            </div>

            {/* Right Column (Body Description) */}
            <div className="lg:col-span-5 lg:border-l lg:border-brand-purple-1000/10 lg:pl-12">
              <p className="font-body text-lg text-black-600 leading-relaxed">
                At HeadStart, student support continues beyond the classroom. Our support structure is designed to help students succeed academically, stay informed, and move confidently into professional opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Container */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-grey-1000 rounded-2xl shadow-sm border border-brand-grey-1000 p-6 sm:p-8">
            <Tabs tabs={supportTabs} fullWidth />
          </div>
        </div>
      </section>
    </main>
  );
}