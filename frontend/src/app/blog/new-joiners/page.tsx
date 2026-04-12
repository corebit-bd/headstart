export default function NewJoiners() {
  const joiners = [
    {
      name: "Sarah Chen",
      role: "Audit Associate",
      wing: "Advisory",
      date: "April 2026",
    },
    {
      name: "Tanvir Ahmed",
      role: "Course Coordinator",
      wing: "Academy",
      date: "March 2026",
    },
    {
      name: "Elena Rodriguez",
      role: "Tax Consultant",
      wing: "Advisory",
      date: "March 2026",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="border-b border-brand-grey-1000 pb-10">
          <h1 className="font-heading text-4xl font-bold text-brand-purple-1000">
            New Joiners
          </h1>
          <p className="mt-4 font-body text-lg text-gray-600 max-w-3xl">
            Welcoming the newest members to our Dual-Wing platform. Our growing
            team is dedicated in working with different industries & are
            committed to provide reliable & competent services, catering to the
            requirements of different ranges of businesses.
          </p>
        </div>

        {/* Joiners Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {joiners.map((person, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-brand-grey-50 p-8 border border-brand-grey-1000 hover:border-brand-purple-300 hover:shadow-lg transition-all"
            >
              {/* Profile Placeholder using Purple Variant 100 */}
              <div className="h-24 w-24 rounded-full bg-brand-purple-100 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                <span className="font-heading text-brand-purple-1000 font-bold text-2xl">
                  {person.name.charAt(0)}
                </span>
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-purple-50 text-brand-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
                  {person.wing} Wing
                </span>
                <h3 className="font-heading text-xl font-medium text-gray-900 group-hover:text-brand-purple-1000 transition-colors">
                  {person.name}
                </h3>
                <p className="font-body text-sm text-gray-600 mt-1">
                  {person.role}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-brand-grey-1000 pt-4">
                  <span className="font-body text-xs text-gray-400 italic">
                    Joined {person.date}
                  </span>
                  <button className="text-brand-purple-1000 font-heading text-xs font-bold hover:underline">
                    View Bio →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture CTA */}
        <div className="mt-20 rounded-3xl bg-brand-purple-1000 p-12 text-center text-white">
          <h2 className="font-heading text-3xl font-bold">
            Join the Excellence
          </h2>
          <p className="mt-4 font-body text-brand-purple-100 max-w-2xl mx-auto">
            Interested in becoming part of a GOLD Approved Learning Partner?
            Explore our current openings and contribute to our mission of
            integrity.
          </p>
          <button className="mt-8 rounded-md bg-brand-gold-1000 px-8 py-3 font-heading font-bold text-gray-900 hover:bg-brand-gold-900 transition-all">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
}
