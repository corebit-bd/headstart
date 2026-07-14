"use client";

import { Tabs } from "@/components/ui/Tabs";
import { Tab } from "@/types/nav";
import FacultyList from "../faculty/page";
import { DifferentiatorItem } from "@/types/key-differentiator";
import { CareerIcon, FacultyIcon, IntegrationIcon, MentorshipIcon, ResultIcon, SupportIcon } from "@/components/ui/KeyDifferentiatorsIcons";
import { CheckIcon, DeloitteLogo, EYLogo, KPMGLogo, LogoCard, PwCLogo, QuoteIcon, TrackWrapper, TrendUpIcon } from "@/components/ui/AlumniIcons";

export default function AboutUsPage() {

  const differentiators: DifferentiatorItem[] = [
    {
      title: "Academic + Advisory Integration",
      description: "Bridging foundational academic excellence directly with strategic, real-world advisory practices.",
      icon: <IntegrationIcon />,
    },
    {
      title: "Result-Driven Approach",
      description: "Focused closely on measurable progression milestones, target metrics, and tangible success metrics.",
      icon: <ResultIcon />,
    },
    {
      title: "Expert Faculty",
      description: "Learn under the structural guidance of domain authorities and accomplished industry leaders.",
      icon: <FacultyIcon />,
    },
    {
      title: "Personalized Mentorship",
      description: "Custom strategies mapped specifically around your unique professional pace and distinct trajectory.",
      icon: <MentorshipIcon />,
    },
    {
      title: "Career-Oriented Development",
      description: "Skills architecture purpose-built to transition effectively into enterprise and industry applications.",
      icon: <CareerIcon />,
    },
    {
      title: "Strong Student Support System",
      description: "Comprehensive accountability, logistics, and resource frameworks accessible whenever you need them.",
      icon: <SupportIcon />,
    },
  ];

  const stats = [
    { value: "94%", label: "Employment within 6 Months" },
    { value: "Top 4", label: "Accounting Firms Placement" },
    { value: "$22k+", label: "Average Salary Increase" },
  ];

  const companies = [
    "Deloitte",
    "EY",
    "PwC",
    "KPMG",
    "Goldman Sachs",
    "J.P. Morgan",
  ];

  const testimonials = [
    {
      quote:
        "The curriculum was directly applicable to my technical interviews. I secured an offer at a Big Four firm within weeks of completing the program.",
      name: "Sarah Jenkins",
      role: "Senior Assurance Associate",
      company: "PwC",
    },
    {
      quote:
        "HeadStart closed the gap between my academic knowledge and the real-world financial analytics skills corporate teams actually look for.",
      name: "David Chen",
      role: "Financial Analyst",
      company: "J.P. Morgan",
    },
  ];

  const aboutTabs: Tab[] = [
    {
      id: "introduction",
      label: "Introduction",
      content: (
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <p className="text-lg text-black-700 leading-relaxed">
            HeadStart is an ACCA Approved Learning Partner in Bangladesh, founded in 2020 with a clear vision—to bridge the gap between academic learning and professional success.
            <br /><br />
            Established with the unique idea of combining academic training with practical professional exposure, HeadStart offers students a learning environment that supports both exam success and career development.
          </p>
          <div className="h-full w-full rounded-2xl bg-linear-to-br from-brand-purple-100 to-brand-gold-100 flex items-center justify-center">
            <span className="font-heading text-center text-brand-purple-1000 font-bold text-xl opacity-50">
              HeadStart Entrance Image
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "mission-vision",
      label: "Mission & Vision",
      content: (
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-brand-purple-1000 pl-6 py-2">
            <h3 className="text-xl font-extrabold text-brand-purple-1000 mb-4">Our Mission</h3>
            <p className="text-black-700">
            To deliver a high-quality ACCA learning experience that equips students with the knowledge, skills, and confidence required to excel in professional examinations and careers.
            </p>
          </div>
          <div className="border-l-4 border-brand-gold-1000 pl-6 py-2">
            <h3 className="text-xl font-extrabold text-brand-purple-1000 mb-4">Our Vision</h3>
            <p className="text-black-700">
              To be recognized as one of the most trusted and forward-thinking ACCA learning partners in Bangladesh, developing globally competent finance professionals.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "key-differentiators",
      label: "Key Differentiators",
      content: (
        <section className="py-20 px-6 sm:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl text-black-900 tracking-tight font-bold font-heading">
                What Makes <span className="text-brand-purple-1000">HeadStart</span> Different?
              </h2>
              <div className="w-16 h-1 bg-brand-gold-1000 mx-auto mt-4 rounded-full" />
            </div>

            {/* Differentiators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-brand-grey-200 border border-black-100 rounded-xl p-8 shadow-sm hover:shadow-md hover:border-brand-purple-300 transition-all duration-300 flex flex-col items-start group"
                >
                  {/* Icon Container with Gold accent border */}
                  <div className="p-3 bg-brand-purple-50 border border-brand-purple-200 rounded-lg mb-6 group-hover:bg-brand-gold-600 group-hover:border-brand-gold-900 transition-colors duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Card Title */}
                  <h3 className="text-xl font-medium text-black-900 mb-3 font-heading">
                    {item.title}
                  </h3>
                  
                  {/* Card Description */}
                  <p className="text-black-600 font-body leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ),
    },
    {
      id: "faculty",
      label: "Our Faculty",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-20">
            <h1 className="font-heading text-4xl font-bold text-black-900 sm:text-5xl">
              Meet Our <span className="text-brand-purple-1000">Faculty</span>
            </h1>
            <div className="w-16 h-1 bg-brand-gold-1000 mx-auto mt-4 rounded-full" />
            <p className="mt-4 font-body text-lg text-black-600 max-w-2xl mx-auto">
              Our faculty includes highly qualified ACCA professionals, industry practitioners, and experienced educators who bring both academic excellence and real-world insight to every class.
            </p>
            <FacultyList />
          </div>
        </div>
      ),
    },
    {
      id: "prizewinner",
      label: "National Prize-Winners",
      content: (
        <div className="space-y-8">
          <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-heading text-4xl text-center font-bold text-brand-purple-1000">
                ACCA Champs
              </h1>
              <div className="w-16 h-1 bg-brand-gold-1000 mx-auto mt-4 rounded-full" />
              <p className="mt-4 font-body text-black-800 text-center">
                HeadStart takes pride in nurturing students who consistently achieve high marks and academic excellence in ACCA examinations.
              </p>

              <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-purple-300 p-6 hover:shadow-xl transition-all hover:border-brand-purple-1000"
                  >
                    <div className="aspect-square rounded-xl bg-brand-gold-50 mb-6 overflow-hidden flex items-center justify-center">
                      <span className="font-heading text-brand-gold-1000 font-bold text-lg">
                        Champ Image
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-medium text-black-900">
                      Champ Name {i}
                    </h3>
                    <p className="font-body text-sm text-brand-purple-900 font-semibold">
                      Global Rank: #1
                    </p>
                    <p className="mt-2 font-body text-sm text-black-500">
                      Achieving excellence in Financial Reporting through integrity.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "alumni",
      label: "Our Alumni",
      content: (
        <section className="py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* --- Header Elements --- */}
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl text-black-900 tracking-tight">Our Alumni</h2>
              <p className="text-lg text-black-700 leading-relaxed">
                Our alumni represent the strength of the HeadStart journey—progressing 
                into high-impact careers across accounting firms, multinationals, and 
                global financial institutions.
              </p>
            </div>

            {/* --- Career Outcomes --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-brand-grey-100 border border-black-100 rounded-xl p-8 flex items-start space-x-4 shadow-xs">
                  <div className="bg-success-50 p-2 rounded-lg">
                    <TrendUpIcon />
                  </div>
                  <div>
                    <div className="data-value text-3xl text-black-1000 mb-1">{stat.value}</div>
                    <h4 className="text-black-600 text-sm tracking-wide uppercase">{stat.label}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Alumni Testimonials --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-brand-grey-100 border border-brand-purple-100 rounded-2xl p-8 relative flex flex-col justify-between shadow-xs hover:border-brand-purple-300 transition-colors duration-200">
                  <div className="absolute top-6 right-8">
                    <QuoteIcon />
                  </div>
                  <p className="text-black-800 text-base leading-relaxed italic mb-8 relative z-10">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-black-100 pt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-black-900 text-lg">{t.name}</h3>
                      <p className="text-sm text-black-600">{t.role}</p>
                    </div>
                    <span className="bg-brand-purple-50 text-brand-purple-1000 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {t.company}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Infinite Logo Marquee --- */}
            <div className="pt-8 border-t border-black-100 space-y-6">
              <div className="flex items-center space-x-2">
                <CheckIcon />
                <p className="text-sm font-semibold uppercase tracking-wider text-black-600">
                  Where Our Alumni Work
                </p>
              </div>

              {/* Marquee viewport container with absolute mask overlays */}
              <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-brand-grey-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-brand-grey-50 after:to-transparent">
                <div className="animate-marquee gap-8 py-2">
                  {/* Track A */}
                  <TrackWrapper>
                    <LogoCard><DeloitteLogo /></LogoCard>
                    <LogoCard><PwCLogo /></LogoCard>
                    <LogoCard><EYLogo /></LogoCard>
                    <LogoCard><KPMGLogo /></LogoCard>
                    <LogoCard><DeloitteLogo /></LogoCard>
                    <LogoCard><PwCLogo /></LogoCard>
                    <LogoCard><EYLogo /></LogoCard>
                    <LogoCard><KPMGLogo /></LogoCard>
                  </TrackWrapper>
                  
                  {/* Track B (Identical clone for perfect continuous seamless looping) */}
                  <TrackWrapper>
                    <LogoCard><DeloitteLogo /></LogoCard>
                    <LogoCard><PwCLogo /></LogoCard>
                    <LogoCard><EYLogo /></LogoCard>
                    <LogoCard><KPMGLogo /></LogoCard>
                    <LogoCard><DeloitteLogo /></LogoCard>
                    <LogoCard><PwCLogo /></LogoCard>
                    <LogoCard><EYLogo /></LogoCard>
                    <LogoCard><KPMGLogo /></LogoCard>
                  </TrackWrapper>
                </div>
              </div>
            </div>

          </div>
        </section>
      ),
    },
    {
      id: "accreditations",
      label: "Accreditations",
      content: (
        <p className="text-black-700">HeadStart is recognized and accredited by leading international bodies including ACCA Gold Status.</p>
      ),
    },
    {
      id: "partnerships",
      label: "Our Partnerships",
      content: (
        <p className="text-black-700">Collaborating with top-tier organizations to provide internship and job opportunities.</p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-brand-grey-50">
      {/* Hero Banner */}
      <section className="bg-brand-gold-1000 py-24 text-black-1000">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold">About <span className="text-brand-purple-1000">HeadStart</span></h1>
          <p className="mt-6 font-body text-xl text-black-800 max-w-3xl mx-auto">
            Shaping the next generation of ACCA professionals through academic excellence, mentorship, and real-world insight.
          </p>
        </div>
      </section>

      {/* Tabs Container */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-grey-1000 rounded-2xl shadow-sm border border-black-50 p-2 sm:p-8">
            <Tabs tabs={aboutTabs} />
          </div>
        </div>
      </section>
    </main>
  );
}