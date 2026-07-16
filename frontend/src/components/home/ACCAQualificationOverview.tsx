import ACCAProfessionalPathway from "./ACCAProfessionalPathway";

export default function ACCAQualificationOverview() {
  return (
    <section className="bg-brand-gold-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-black-900">
          Your <span className="text-error-1000">ACCA</span> Journey Starts Here
        </h2>
        <p className="mt-6 font-body text-lg text-black-600">
          The ACCA qualification is a globally recognized pathway to careers in accounting, finance, consulting, and business leadership. At HeadStart, students are guided through each level with structure, clarity, and strong academic support.
        </p>
        <ACCAProfessionalPathway />
      </div>
    </section>
  );
}
