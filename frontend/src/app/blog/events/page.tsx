export default function EventsPage() {
  return (
    <div className="bg-brand-grey-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-gray-900">
          Events
        </h1>
        <div className="mt-12 grid gap-6">
          <div className="bg-white p-6 rounded-xl border-l-8 border-brand-purple-1000 flex justify-between items-center shadow-sm">
            <div>
              <p className="font-body text-brand-purple-1000 font-bold">
                APR 15, 2026
              </p>
              <h3 className="font-heading text-xl font-medium">
                Ethics in Modern Advisory Workshop
              </h3>
            </div>
            <button className="rounded-md bg-brand-gold-1000 px-6 py-2 font-heading font-bold text-gray-900">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
