export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-purple-1000 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl font-bold">Our Story</h1>
          <p className="mt-6 font-body text-xl text-brand-purple-100 max-w-3xl mx-auto">
            HeadStart is more than a Learning Partner. We are also a growing
            Advisory Firm. HeadStart is founded in 2020 by renowned FCCA, ACCA &
            ACCA Affiliates, with the unique idea of having an Academic &
            Advisory Wing together in one comprehensive & complementary
            Platform.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <span className="rounded-full bg-brand-purple-1000 px-3 py-1 text-brand-purple-50 ring-1 ring-inset ring-brand-purple-200 font-heading font-bold uppercase tracking-widest text-sm">
              Our Mission
            </span>
            <h2 className="font-heading text-4xl font-bold text-black-900">
              Empowering Future Finance Leaders
            </h2>
            <p className="font-body text-lg text-black-600 leading-relaxed">
              We provide assurance of full responsibility & dedication without
              compromising on the quality of work. HeadStart pledges to build
              the next generation finance enthusiasts as competent & qualified
              business partners via exposure to the professional world.
            </p>
          </div>
          <div className="space-y-6">
            <span className="rounded-full bg-brand-gold-1000 px-3 py-1 text-brand-purple-1000 ring-1 ring-inset ring-brand-gold-200 font-heading font-bold uppercase tracking-widest text-sm">
              Our Vision
            </span>
            <h2 className="font-heading text-4xl font-bold text-black-900">
              Excellence in Professional Accountancy
            </h2>
            <p className="font-body text-lg text-black-600 leading-relaxed">
              Vision of HeadStart is to be a Centre of Excellence & the
              flagbearer in serving Competent Professional Accountants &
              Professional Accountancy Services in both national & international
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* The Dual-Wing Philosophy */}
      <section className="bg-brand-grey-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-black-900">
              The Dual-Wing Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-brand-grey-1000 shadow-sm">
              <div className="h-12 w-12 bg-brand-purple-1000 rounded-xl flex items-center justify-center mb-6">
                <span className="text-brand-purple-50 font-bold">01</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Academic</h3>
              <p className="font-body text-black-600">
                Services delivered under the academic function include ACCA,
                CAT, OBU RAP Mentorship & Professional Training, etc. Published
                contents under resources of HeadStart would create awareness
                regarding the business world among the students, while shaping
                their careers as business partners. It will also ensure a one
                stop service for the students, where they start as a CAT student
                & complete their journey as ACCA members.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-brand-grey-1000 shadow-sm">
              <div className="h-12 w-12 bg-brand-gold-1000 rounded-xl flex items-center justify-center mb-6">
                <span className="text-brand-purple-1000 font-bold">02</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Advisory</h3>
              <p className="font-body text-black-600">
                The Advisory Wing provides a range of solutions such as Business
                Process Optimization (BPO), Taxation consultancy, Accounting
                services, Internal Audit, Valuation, Resource Outsourcing &
                others. The team consists of personnel who have experience in
                working with different industries & are committed to provide
                reliable & competent services, catering to the requirements of
                different ranges of businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
