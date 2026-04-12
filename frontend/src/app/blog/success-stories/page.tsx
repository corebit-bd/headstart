export default function SuccessStories() {
  return (
    <div className="bg-brand-grey-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-gray-900">
          Success Stories
        </h1>
        <div className="mt-12 space-y-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-3xl border border-brand-grey-1000"
            >
              <div className="w-full md:w-1/3 aspect-video bg-success-50 rounded-xl flex items-center justify-center">
                <span className="font-heading text-success-1000 font-bold">
                  Story Visual
                </span>
              </div>
              <div className="flex-1">
                <span className="text-success-1000 font-heading text-xs font-bold uppercase tracking-widest">
                  Career Milestone
                </span>
                <h3 className="mt-2 font-heading text-2xl font-medium text-gray-900">
                  From Student to Senior Auditor
                </h3>
                <p className="mt-4 font-body text-gray-600 leading-relaxed">
                  How the HeadStart transformed a professional career path.
                </p>
                <button className="mt-6 text-brand-purple-1000 font-heading font-bold text-sm">
                  Read Full Story →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
