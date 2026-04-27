export default function SDCPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl font-bold text-black-900">
          Students Development Center{" "}
          <span className="text-success-1000">(SDC)</span>
        </h1>
        <p className="mt-6 font-body text-xl text-black-600">
          Holistic support focusing on ethics, integrity, and career readiness.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="p-8 border-t-4 border-success-1000 bg-brand-grey-50 rounded-b-xl">
            <h3 className="font-heading text-xl font-medium">
              Career Counseling
            </h3>
            <p className="mt-4 font-body text-sm text-black-600">
              Mapping your path from student to professional.
            </p>
          </div>
          <div className="p-8 border-t-4 border-info-1000 bg-brand-grey-50 rounded-b-xl">
            <h3 className="font-heading text-xl font-medium">
              Ethics Training
            </h3>
            <p className="mt-4 font-body text-sm text-black-600">
              Instilling the core values of professionalism and integrity.
            </p>
          </div>
          <div className="p-8 border-t-4 border-brand-gold-1000 bg-brand-grey-50 rounded-b-xl">
            <h3 className="font-heading text-xl font-medium">
              Mock Interviews
            </h3>
            <p className="mt-4 font-body text-sm text-black-600">
              Simulating real-world scenarios for industry excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
