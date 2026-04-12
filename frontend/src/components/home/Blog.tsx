export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Latest from HeadStart
          </h2>
          <button className="text-brand-purple-1000 font-heading font-medium">
            View All Blog →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {["Students' Voice", "ACCA Champs", "Success Stories"].map(
            (title) => (
              <div key={title} className="group cursor-pointer">
                <div className="aspect-video w-full rounded-lg bg-brand-grey-1000 mb-6 overflow-hidden">
                  <div className="w-full h-full group-hover:scale-105 transition-transform bg-brand-purple-50" />
                </div>
                <h3 className="font-heading text-xl font-medium text-gray-900 group-hover:text-brand-purple-1000 transition-colors">
                  {title}
                </h3>
                <p className="mt-2 font-body text-sm text-gray-500">
                  Inspiring tales from the HeadStart community.
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
