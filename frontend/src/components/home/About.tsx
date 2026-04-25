export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-black-900 sm:text-4xl">
              About <span className="text-brand-purple-1000">HeadStart</span>
            </h2>
            <p className="mt-6 font-body text-lg text-black-600">
              HeadStart,{" "}
              <b>a GOLD Approved Learning Partner, Approved Employer</b> & a
              Licensed CBE Centre of ACCA, is a professional accountancy service
              provider. HeadStart is also a growing advisory firm, founded in
              2020 by renowned FCCA, ACCA, and ACCA Affiliates, with the unique
              idea of having an academic & advisory wing together in one
              comprehensive & complementary platform.
            </p>
            <div className="mt-10 space-y-8">
              <div className="border-l-4 border-brand-purple-1000 pl-4">
                <h3 className="font-heading text-xl font-medium text-brand-purple-1000">
                  Our Mission
                </h3>
                <p className="mt-2 font-body text-black-600">
                  Mission of HeadStart is to provide assurance of full
                  responsibility & dedication without compromising on the
                  quality of work. HeadStart pledges to build the next
                  generation finance enthusiasts as competent & qualified
                  business partners via exposure to the professional world.
                </p>
              </div>
              <div className="border-l-4 border-brand-gold-1000 pl-4">
                <h3 className="font-heading text-xl font-medium text-black-900">
                  Our Vision
                </h3>
                <p className="mt-2 font-body text-black-600">
                  Vision of HeadStart is to be a Centre of Excellence & the
                  flagbearer in serving Competent Professional Accountants &
                  Professional Accountancy Services in both national &
                  international markets.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-brand-grey-1000 p-8 flex items-center justify-center aspect-video border border-brand-grey-800">
            <span className="font-heading text-brand-purple-400 font-bold">
              Mission Visual Placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
