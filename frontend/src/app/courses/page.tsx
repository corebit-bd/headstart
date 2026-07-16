"use client";

import { Tabs } from "@/components/ui/Tabs";
import { Tab } from "@/types/nav";
import Link from "next/link";

export default function CoursesPage() {
  const whatsappUrl = "https://wa.me/8801886091323";

  const coursesTabs: Tab[] = [
    {
      id: "acca-qualification-pathway",
      label: "ACCA Qualification Pathway",
      content: (
        <div className="space-y-12">
          {/* ACCA Overview Banner */}
          <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
            <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
              ACCA Qualification Pathway
            </h3>
            <p className="text-black-700 font-body">
                The ACCA qualification is a globally recognized pathway for future professionals in accounting, finance, audit, taxation, and business leadership. At HeadStart, we guide students through each level with structured teaching, strong academic support, and expert mentorship.
            </p>
          </div>

          {/* Grid of ACCA Levels */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <span className="text-xs px-2.5 py-[3px] rounded-full border-[0.5px] border-brand-purple-1000 text-brand-purple-1000 bg-brand-gold-1000">
                ACCA Level 1
              </span>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mt-1 mb-3">ACCA Foundation Level</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                Designed for students beginning their journey in accounting, this level builds the essential understanding of bookkeeping, financial records, management information, and core business concepts.
              </p>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Best for:</b></p>
              <ul className="list-disc list-inside text-sm text-black-600 font-body leading-relaxed">
                <li>HSC students</li>
                <li>A-Level students</li>
                <li>Students with limited accounting background</li>
                <li>Beginners in finance/accounting</li>
              </ul>
            </div>

            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <span className="text-xs px-2.5 py-[3px] rounded-full border-[0.5px] border-brand-purple-1000 text-brand-purple-1000 bg-brand-gold-1000">
                ACCA Level 2
              </span>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mt-1 mb-3">ACCA Knowledge Level</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                This level introduces students to core accounting and business concepts that form the basis of the ACCA qualification.
              </p>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Papers:</b></p>
              <ul className="list-disc list-inside text-sm text-black-600 font-body leading-relaxed">
                  <li>Business & Technology (BT)</li>
                  <li>Management Accounting (MA)</li>
                  <li>Financial Accounting (FA)</li>
              </ul>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Outcome:</b></p>
              <p className="text-sm text-black-600 font-body leading-relaxed">Builds a strong foundation in how businesses operate, how accounting information is prepared, and how management uses information for decision-making.</p>
            </div>

            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <span className="text-xs px-2.5 py-[3px] rounded-full border-[0.5px] border-brand-purple-1000 text-brand-purple-1000 bg-brand-gold-1000">
                ACCA Level 3
              </span>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mt-1 mb-3">ACCA Skills Level</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                The Applied Skills level develops technical competence and practical capability across major finance and accounting areas.
              </p>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Papers:</b></p>
              <ul className="list-disc list-inside text-sm text-black-600 font-body leading-relaxed">
                  <li>Corporate & Business Law (LW)</li>
                  <li>Performance Management (PM)</li>
                  <li>Taxation (TX)</li>
                  <li>Financial Reporting (FR)</li>
                  <li>Audit & Assurance (AA)</li>
                  <li>Financial Management (FM)</li>
              </ul>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Outcome:</b></p>
              <p className="text-sm text-black-600 font-body leading-relaxed">Develops real-world accounting, reporting, audit, tax, and business decision-making capability.</p>
            </div>

            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <span className="text-xs px-2.5 py-[3px] rounded-full border-[0.5px] border-brand-purple-1000 text-brand-purple-1000 bg-brand-gold-1000">
                ACCA Level 4
              </span>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mt-1 mb-3">ACCA Professional Level</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                The final stage of ACCA focuses on strategic thinking, leadership, professional judgment, and advanced technical application.
              </p>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Essentials:</b></p>
              <ul className="list-disc list-inside text-sm text-black-600 font-body leading-relaxed">
                  <li>Strategic Business Leader (SBL)</li>
                  <li>Strategic Business Reporting (SBR)</li>
              </ul>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Options (Choose Any 2):</b></p>
              <ul className="list-disc list-inside text-sm text-black-600 font-body leading-relaxed">
                  <li>Advanced Financial Management (AFM)</li>
                  <li>Advanced Performance Management (APM)</li>
                  <li>Advanced Taxation (ATX)</li>
                  <li>Advanced Audit & Assurance (AAA)</li>
              </ul>
              <br />
              <p className="text-sm text-black-600 font-body leading-relaxed"><b>Outcome:</b></p>
              <p className="text-sm text-black-600 font-body leading-relaxed">Prepares students for leadership and strategic finance roles.</p>
            </div>
          </div>

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
      ),
    },
    {
      id: "skill-development-training",
      label: "Skill Development Training",
      content: (
        <div className="space-y-12">
          {/* Skill Dev Banner */}
          <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
            <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Professional Skills Development
            </h3>
            <p className="text-black-700 font-body">
              Enhance your employment potential with essential, modern hands-on technical skills designed to complement academic success.
            </p>
          </div>

          {/* Grid of Skills Courses */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MS Office */}
            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <div className="bg-brand-purple-50 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg text-brand-purple-1000">📊</span>
              </div>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mb-2">Course 1: MS Office</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                Build strong workplace skills in:
              </p>
              <ul className="list-disc list-inside text-sm text-black-600 font-body leading-relaxed">
                  <li>Microsoft Excel</li>
                  <li>Microsoft PowerPoint</li>
                  <li>Microsoft Word</li>
              </ul>
            </div>

            {/* AI */}
            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <div className="bg-brand-purple-50 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg text-brand-purple-1000">🤖</span>
              </div>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mb-2">Course 2 : Artificial Intelligence (AI)</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                Introduction to practical AI tools and modern workflows relevant to students and professionals.
              </p>
            </div>

            {/* Tax & VAT */}
            <div className="border border-brand-grey-1000 rounded-xl p-6 bg-brand-grey-50 hover:shadow-md transition-all">
              <div className="bg-brand-purple-50 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-lg text-brand-purple-1000">💼</span>
              </div>
              <h4 className="text-lg font-bold font-heading text-brand-purple-1000 mb-2">Course 3 : Bangladesh Tax and VAT</h4>
              <p className="text-sm text-black-600 font-body leading-relaxed">
                Practical training on local tax and VAT fundamentals for the Bangladesh market.
              </p>
            </div>
          </div>
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
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-brand-grey-50">
      {/* Modernized Hero Section */}
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
                Our Courses
              </h1>
              <p className="font-body text-xl md:text-2xl text-brand-purple-800 font-medium leading-normal">
                Comprehensive programs designed to guide students from foundational accounting knowledge to professional excellence.
              </p>
            </div>

            {/* Right Column (Body Description) */}
            <div className="lg:col-span-5 lg:border-l lg:border-brand-purple-1000/10 lg:pl-12">
              <p className="font-body text-lg text-black-600 leading-relaxed">
                At HeadStart, our educational syllabus balances rigorous core theory with high-impact, practical skill application, offering clear acceleration frameworks built directly for modern financial landscape tracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Container */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-grey-1000 rounded-2xl shadow-sm border border-brand-grey-1000 p-6 sm:p-8">
                <Tabs tabs={coursesTabs} fullWidth /> 
            </div>
        </div>
      </section>
    </main>
  );
}