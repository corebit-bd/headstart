export default function ACCAPage() {
  return (
    <div className="bg-brand-grey-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl font-bold text-brand-purple-1000">
          ACCA Academic Courses
        </h1>
        <p className="mt-6 font-body text-xl text-gray-600 max-w-3xl">
          Comprehensive training modules designed for future financial leaders,
          maintaining our status as a GOLD Approved Learning Partner.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-brand-grey-1000 shadow-sm">
            <h3 className="font-heading text-2xl font-medium text-gray-900">
              Applied Knowledge
            </h3>
            <p className="mt-4 font-body text-gray-600">
              The foundational stage of your ACCA journey.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-brand-grey-1000 shadow-sm">
            <h3 className="font-heading text-2xl font-medium text-gray-900">
              Applied Skills
            </h3>
            <p className="mt-4 font-body text-gray-600">
              Developing the technical expertise required for professional
              practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
