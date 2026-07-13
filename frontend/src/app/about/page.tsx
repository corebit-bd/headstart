"use client";

import { Tabs } from "@/components/ui/Tabs";
import { Tab } from "@/types/nav";
import FacultyList from "../faculty/page";
import ACCAChamps from "../blog/acca-champs/page";

export default function AboutUsPage() {
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
              To provide assurance of full responsibility & dedication without compromising on the quality of work. We pledge to build the next generation of finance enthusiasts as competent & qualified business partners.
            </p>
          </div>
          <div className="border-l-4 border-brand-gold-500 pl-6 py-2">
            <h3 className="text-xl font-extrabold text-brand-purple-1000 mb-4">Our Vision</h3>
            <p className="text-black-700">
              To be a Centre of Excellence & the flagbearer in serving Competent Professional Accountants & Professional Accountancy Services in both national & international markets.
            </p>
          </div>
        </div>
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
            <p className="mt-4 font-body text-lg text-black-600 max-w-2xl mx-auto">
              Our experts bridge the gap between academic theory and professional
              excellence, ensuring a one stop service for every student.
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
          <ACCAChamps />
        </div>
      ),
    },
    {
      id: "alumni",
      label: "Our Alumni",
      content: (
        <p className="text-black-700">Our graduates are now leading professionals in top firms across the globe.</p>
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