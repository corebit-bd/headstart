const services = [
  {
    name: "ACCA Courses",
    desc: "Gold-standard academic training for future leaders.",
  },
  { name: "Advisory", desc: "Data-driven consultancy for strategic growth." },
  { name: "Trainings", desc: "Specialized skill development modules." },
  { name: "SDC", desc: "Holistic Student Development Center support." },
];

export default function Services() {
  return (
    <section className="bg-brand-gold-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-black-900">
          Our Services
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className="rounded-xl bg-brand-grey-50 p-8 shadow-sm border border-brand-grey-1000 hover:border-brand-gold-300 hover:bg-brand-gold-900 transition-colors"
            >
              <h3 className="font-heading text-lg font-extrabold text-brand-purple-1000">
                {s.name}
              </h3>
              <p className="mt-4 font-body text-sm text-black-800 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
