export default function TrainingsPage() {
  return (
    <div className="bg-brand-grey-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-brand-purple-1000">
          Skill Development
        </h2>
        <h1 className="mt-4 font-heading text-5xl font-bold text-gray-900">
          Professional Trainings
        </h1>
        <p className="mt-6 font-body text-lg text-gray-600">
          Tailored workshops for corporate entities and individual
          professionals.
        </p>

        <div className="mt-16 grid gap-6">
          {["Corporate Excel", "Taxation Workshops", "Audit Procedures"].map(
            (course) => (
              <div
                key={course}
                className="flex items-center justify-between bg-white p-6 rounded-xl border border-brand-grey-1000 hover:shadow-md transition-shadow"
              >
                <span className="font-heading text-xl font-medium text-gray-900">
                  {course}
                </span>
                <button className="bg-brand-purple-1000 text-white px-6 py-2 rounded-lg font-heading font-bold text-sm">
                  View Details
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
