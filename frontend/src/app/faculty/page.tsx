import Link from "next/link";

const facultyMembers = [
  {
    name: "Dr. Ariful Haque",
    role: "Lead ACCA Instructor",
    specialty: "Strategic Business Reporting (SBR)",
    image: "/faculty/lead-1.jpg", // Placeholder path
  },
  {
    name: "Sarah J. Miller",
    role: "Senior Advisory Consultant",
    specialty: "Risk Management & Ethics",
    image: "/faculty/senior-1.jpg",
  },
  {
    name: "Tanvir Rahman",
    role: "Academic Coordinator",
    specialty: "Audit & Assurance (AA)",
    image: "/faculty/coordinator-1.jpg",
  },
];

export default function FacultyList() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-4xl font-bold text-black-900 sm:text-5xl">
            Meet Our <span className="text-brand-purple-1000">Faculty</span>
          </h1>
          <p className="mt-4 font-body text-lg text-black-600 max-w-2xl mx-auto">
            Our experts bridge the gap between academic theory and professional
            excellence, ensuring a one stop service for every student.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Profile Image with Royal Purple Glow */}
              <div className="relative h-64 w-64 mb-6 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-brand-purple-100 -rotate-6 group-hover:rotate-0 transition-transform" />
                <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-brand-purple-1000 bg-brand-grey-1000 flex items-center justify-center">
                  <span className="font-heading text-brand-purple-300 font-bold">
                    Photo Placeholder
                  </span>
                </div>
              </div>

              {/* Identity Section */}
              <h3 className="font-heading text-2xl font-bold text-black-900 group-hover:text-brand-purple-1000 transition-colors">
                {member.name}
              </h3>
              <p className="mt-1 font-body text-sm font-bold text-brand-purple-900 uppercase tracking-widest">
                {member.role}
              </p>
              <div className="mt-4 h-1 w-12 bg-brand-gold-1000 mx-auto" />
              <p className="mt-4 font-body text-sm text-black-500 italic">
                Specializing in {member.specialty}
              </p>

              <Link
                href={`/faculty/${member.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-6 font-heading text-sm font-medium text-brand-purple-1000 hover:underline"
              >
                View Professional Profile →
              </Link>
            </div>
          ))}
        </div>

        {/* Join the Faculty CTA */}
        <div className="mt-32 rounded-3xl bg-brand-grey-50 border border-brand-grey-1000 p-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-black-900">
            Are you an expert in your field?
          </h2>
          <p className="mt-2 font-body text-black-600">
            HeadStart is always looking for professional leaders to join our
            Academic and Advisory wings.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-brand-purple-1000 px-8 py-3 font-heading font-bold text-white hover:bg-brand-purple-900 transition-all"
          >
            Apply to Join
          </Link>
        </div>
      </div>
    </div>
  );
}
