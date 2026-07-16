"use client";

import { Tabs } from "@/components/ui/Tabs";
import { Tab } from "@/types/nav";
import { TrophyIcon, CalendarIcon } from "@/components/ui/LifeAtHeadStartIcons";
import { UpcomingEvent } from "@/types/upcoming-event";
import Link from "next/link";

const UPCOMING_EVENTS: UpcomingEvent[] = [
    {
      title: "ACCA Pathway Seminar 2026",
      date: "August 12, 2026",
      time: "4:00 PM - 6:00 PM",
      type: "Seminar",
      description: "An expert-led deep dive exploring the high-growth professional avenues open for ACCA qualifiers across global corporate firms.",
    },
    {
      title: "Excel Corporate Modeling Bootcamp",
      date: "September 05, 2026",
      time: "10:00 AM - 3:00 PM",
      type: "Workshop",
      description: "Hands-on simulation translating raw financial data points into functional projection dashboards using modern modeling workflows.",
    }
];

export default function LifeAtHeadStartPage() {
    const whatsappUrl = "https://wa.me/8801886091323";

    const lifeTabs: Tab[] = [
      {
        id: "exam-results",
        label: "Our Exam Results",
        content: (
          <div className="space-y-12">
            <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
              <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Championship in Academic Performance
              </h3>
              <p className="text-black-700 font-body">
                HeadStart students continue to demonstrate strong academic performance through high marks, consistent exam success, and recognition for academic excellence.
              </p>
            </div>
  
            {/* Grid of Results/Rankings */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Student Result Card 1 */}
              <div className="bg-brand-grey-50 border border-brand-grey-1000 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-48 bg-brand-grey-1000 rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center text-brand-purple-300 text-sm italic">
                      [ Student Photo Placeholder ]
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-brand-purple-1000">Tanzim Rahman</h4>
                  <p className="text-xs text-brand-gold-500 font-bold uppercase tracking-wider mb-2">ACCA Affiliate</p>
                  <p className="text-sm text-black-600 font-body">
                    Achieved an incredible top-tier score on the Strategic Business Reporting (SBR) module during the regional paper cycles.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-grey-1000 flex justify-between items-center">
                  <span className="font-bold text-sm text-brand-purple-1000">Marks: 88%</span>
                  <div className="flex items-center gap-1 bg-brand-purple-100 px-3 py-1 rounded-full">
                    <TrophyIcon className="h-4 w-4 text-brand-purple-1000" />
                    <span className="text-xs font-bold text-brand-purple-1000">National High</span>
                  </div>
                </div>
              </div>
  
              {/* Student Result Card 2 */}
              <div className="bg-brand-grey-50 border border-brand-grey-1000 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-48 bg-brand-grey-1000 rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center text-brand-purple-300 text-sm italic">
                      [ Student Photo Placeholder ]
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-brand-purple-1000">Nabila Karim</h4>
                  <p className="text-xs text-brand-gold-500 font-bold uppercase tracking-wider mb-2">Financial Reporting</p>
                  <p className="text-sm text-black-600 font-body">
                    Secured exceptional merit points demonstrating critical analysis in complex group accounts standardizations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-grey-1000 flex justify-between items-center">
                  <span className="font-bold text-sm text-brand-purple-1000">Marks: 85%</span>
                  <div className="flex items-center gap-1 bg-brand-purple-100 px-3 py-1 rounded-full">
                    <TrophyIcon className="h-4 w-4 text-brand-purple-1000" />
                    <span className="text-xs font-bold text-brand-purple-1000">Distinction</span>
                  </div>
                </div>
              </div>
  
              {/* Student Result Card 3 */}
              <div className="bg-brand-grey-50 border border-brand-grey-1000 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="relative w-full h-48 bg-brand-grey-1000 rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center text-brand-purple-300 text-sm italic">
                      [ Student Photo Placeholder ]
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-brand-purple-1000">Fahim Shahriar</h4>
                  <p className="text-xs text-brand-gold-500 font-bold uppercase tracking-wider mb-2">Performance Management</p>
                  <p className="text-sm text-black-600 font-body">
                    Demonstrated excellence in costing methods and decision-making techniques with outstanding clarity.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-grey-1000 flex justify-between items-center">
                  <span className="font-bold text-sm text-brand-purple-1000">Marks: 82%</span>
                  <div className="flex items-center gap-1 bg-brand-purple-100 px-3 py-1 rounded-full">
                    <TrophyIcon className="h-4 w-4 text-brand-purple-1000" />
                    <span className="text-xs font-bold text-brand-purple-1000">Distinction</span>
                  </div>
                </div>
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
        id: "student-connect",
        label: "ACCA Member & Student Connect",
        content: (
          <div className="space-y-12">
            <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
              <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Connecting Ambition with Expertise
              </h3>
              <p className="text-black-700 font-body">
                Interactive sessions and engagements where students connect with ACCA members, affiliates, and working professionals to gain real-world exposure and professional insight.
              </p>
            </div>
  
            {/* Interactive Feature Block */}
            <div className="bg-brand-grey-50 border border-brand-grey-1000 rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h4 className="font-heading text-xl font-bold text-brand-purple-1000">Alumni Corporate Roundtables</h4>
                <p className="text-sm text-black-600 font-body leading-relaxed">
                  We bridge the gap between hard theory and real corporate landscapes. Through recurrent roundtable circles, students converse with veterans to decode dynamic business hurdles and pathways to secure traineeships in multinational networks.
                </p>
                <ul className="space-y-2 text-sm text-black-600 font-body">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-500" /> Direct network linkages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-500" /> Professional mentorship
                  </li>
                </ul>
              </div>
              <div className="bg-brand-grey-1000 rounded-xl h-64 flex items-center justify-center text-brand-purple-300 italic text-sm">
                [ Member & Affiliate Networking Photo Placeholder ]
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
        id: "career-counselling",
        label: "Career Counselling Sessions",
        content: (
          <div className="space-y-12">
            <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
              <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Guiding Your Future Path
              </h3>
              <p className="text-black-700 font-body">
                HeadStart supports students with career planning sessions that help them understand the ACCA pathway, available opportunities, and professional growth options in Bangladesh and beyond.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-grey-50 border border-brand-grey-1000 p-8 rounded-2xl">
                <h4 className="font-heading text-lg font-bold text-brand-purple-1000 mb-2">Local Growth Portals</h4>
                <p className="text-sm text-black-600 font-body leading-relaxed">
                  Step-by-step clarity regarding corporate career levels inside regional corporations, manufacturing networks, and auditing systems within local markets.
                </p>
              </div>
              <div className="bg-brand-grey-50 border border-brand-grey-1000 p-8 rounded-2xl">
                <h4 className="font-heading text-lg font-bold text-brand-purple-1000 mb-2">Global Portability Guidance</h4>
                <p className="text-sm text-black-600 font-body leading-relaxed">
                  Understand reciprocity pathways, international migration guidelines, and standard credit transitions across partner foreign universities.
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
      {
        id: "training-sessions",
        label: "Training Sessions",
        content: (
          <div className="space-y-12">
            <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
              <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Beyond Technical Competency
              </h3>
              <p className="text-black-700 font-body">
                Training sessions are designed to support communication skills, personality development, confidence building, and professional readiness.
              </p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-grey-50 border border-brand-grey-1000 p-6 rounded-2xl">
                <span className="text-2xl mb-3 block">🗣️</span>
                <h4 className="font-heading text-md font-bold text-brand-purple-1000 mb-2">Executive Communication</h4>
                <p className="text-xs text-black-600 font-body leading-relaxed">
                  Honing presentation presence, slide articulation, and structural corporate reporting arguments.
                </p>
              </div>
              <div className="bg-brand-grey-50 border border-brand-grey-1000 p-6 rounded-2xl">
                <span className="text-2xl mb-3 block">🤝</span>
                <h4 className="font-heading text-md font-bold text-brand-purple-1000 mb-2">Interview Etiquette</h4>
                <p className="text-xs text-black-600 font-body leading-relaxed">
                  Preparing mock pathways, resume tailoring strategies, and confidence frameworks under pressure.
                </p>
              </div>
              <div className="bg-brand-grey-50 border border-brand-grey-1000 p-6 rounded-2xl">
                <span className="text-2xl mb-3 block">🌟</span>
                <h4 className="font-heading text-md font-bold text-brand-purple-1000 mb-2">Personality Alignment</h4>
                <p className="text-xs text-black-600 font-body leading-relaxed">
                  Interpersonal workplace strategies, project teamwork dynamics, and long-term professional accountability.
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
      {
        id: "extracurricular",
        label: "Extra Curricular Activities",
        content: (
          <div className="space-y-12">
            <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
              <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Vibrant Campus Culture
              </h3>
              <p className="text-black-700 font-body">
                Student engagement at HeadStart includes events, community activities, sports, networking, and memorable learning experiences beyond formal classes.
              </p>
            </div>
  
            {/* Visual Showcase Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-brand-grey-50 border border-brand-purple-200 rounded-2xl overflow-hidden">
                <div className="bg-brand-grey-1000 h-48 flex items-center justify-center text-brand-purple-300 italic text-sm p-4 text-center">
                  [ ACCA Cricket Carnival Action Shot ]
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-brand-purple-1000 mb-1">ACCA Cricket Carnival</h4>
                  <p className="text-xs text-black-600 font-body">
                    Fostering teamwork and school spirit during our annual friendly outdoor competitive match tournaments.
                  </p>
                </div>
              </div>
  
              <div className="bg-brand-grey-50 border border-brand-purple-200 rounded-2xl overflow-hidden">
                <div className="bg-brand-grey-1000 h-48 flex items-center justify-center text-brand-purple-300 italic text-sm p-4 text-center">
                  [ Student Guild Activities Photo ]
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-brand-purple-1000 mb-1">Student Activities</h4>
                  <p className="text-xs text-black-600 font-body">
                    Student-led groups hosting seasonal, high-engagement creative workshops and peer learning desks.
                  </p>
                </div>
              </div>
  
              <div className="bg-brand-grey-50 border border-brand-purple-200 rounded-2xl overflow-hidden">
                <div className="bg-brand-grey-1000 h-48 flex items-center justify-center text-brand-purple-300 italic text-sm p-4 text-center">
                  [ Common Room Interactions Photo ]
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-brand-purple-1000 mb-1">Campus Interactions</h4>
                  <p className="text-xs text-black-600 font-body">
                    Daily visual energy in the lounges where ideas, exam reviews, and social friendships grow naturally.
                  </p>
                </div>
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
        id: "upcoming-events",
        label: "Upcoming Events",
        content: (
          <div className="space-y-12">
            <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
              <h3 className="text-2xl font-bold font-heading text-brand-purple-1000 mb-2">
                Mark Your Calendar
              </h3>
              <p className="text-black-700 font-body">
                A dedicated section to showcase seminars, workshops, guest sessions, networking events, and other student-focused experiences.
              </p>
            </div>
  
            {/* Editable Future Updates Showcase Block */}
            <div className="grid md:grid-cols-2 gap-8">
              {UPCOMING_EVENTS.map((evt, idx) => (
                <div key={idx} className="bg-brand-grey-50 border border-brand-grey-1000 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-brand-purple-100 text-brand-purple-1000 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {evt.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-black-500">
                        <CalendarIcon className="h-4 w-4" />
                        <span className="text-xs font-body">{evt.date}</span>
                      </div>
                    </div>
                    <h4 className="font-heading text-lg font-bold text-brand-purple-1000 mb-2">{evt.title}</h4>
                    <p className="text-sm text-black-600 font-body leading-relaxed">{evt.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-brand-grey-1000 text-xs text-black-500 font-body italic">
                    Time: {evt.time}
                  </div>
                </div>
              ))}
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-linear-to-br from-brand-gold-50 via-brand-gold-500 to-brand-grey-50 py-24 text-brand-purple-1000">

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
        
            <div className="relative max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left Column (Heading & Subheading) */}
                    <div className="lg:col-span-7 space-y-6">
                        <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight">
                        Life at HeadStart
                        </h1>
                        <p className="font-body text-xl md:text-2xl text-brand-purple-800 font-medium leading-normal">
                            Experience an Active, Community-Driven Journey to Becoming an Elite Professional
                        </p>
                    </div>

                    {/* Right Column (Body Description) */}
                    <div className="lg:col-span-5 lg:border-l lg:border-brand-purple-1000/10 lg:pl-12">
                        <p className="font-body text-lg text-black-600 leading-relaxed">
                        At HeadStart, student life is designed to support growth beyond academics. 
                        From exam results and networking sessions to counselling, training, and 
                        extra-curricular activities, students become part of a more complete 
                        learning experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  
        {/* Tabs Container */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-grey-1000 rounded-2xl shadow-sm border border-brand-grey-1000 p-6 sm:p-8">
              {/* Kept default alignment layout (false) to let all 6 tabs overflow cleanly on smaller layouts */}
              <Tabs tabs={lifeTabs} />
            </div>
          </div>
        </section>
      </main>
    );
}