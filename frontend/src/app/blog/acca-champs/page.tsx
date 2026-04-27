export default function ACCAChamps() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-brand-purple-1000">
          ACCA Champs
        </h1>
        <p className="mt-4 font-body text-black-600">
          Celebrating our world-class achievers and top scorers.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-brand-grey-1000 p-6 hover:shadow-xl transition-all"
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
  );
}
