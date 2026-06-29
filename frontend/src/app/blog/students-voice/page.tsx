export default function StudentsVoice() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl font-bold text-brand-purple-1000">
          Students' Voice
        </h1>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-brand-grey-50 border border-brand-grey-1000 relative"
            >
              <span className="absolute -top-4 left-8 text-6xl text-brand-purple-200 font-serif">
                “
              </span>
              <p className="font-body text-black-600 italic text-lg">
                "HeadStart's Dual-Wing approach is unlike any other learning
                partner. The advisory focus made complex data feel simple."
              </p>
              <div className="mt-8">
                <p className="font-heading text-sm font-bold text-black-900">
                  Aisha Rahaman
                </p>
                <p className="font-body text-xs text-brand-purple-600">
                  ACCA Skills Level Student
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
