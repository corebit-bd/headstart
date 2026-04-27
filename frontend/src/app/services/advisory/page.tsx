export default function AdvisoryPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl font-bold text-black-900">
          Professional <span className="text-brand-purple-1000">Advisory</span>
        </h1>
        <div className="mt-12 bg-brand-purple-50 rounded-3xl p-10 border border-brand-purple-100">
          <h2 className="font-heading text-3xl font-bold text-brand-purple-1000">
            Strategic Consultancy
          </h2>
          <p className="mt-4 font-body text-lg text-black-700">
            Providing a range of solutions such as Business Process Optimization
            (BPO), Taxation consultancy, Accounting services, Internal Audit,
            Valuation, Resource Outsourcing & others.
          </p>
          <ul className="mt-8 space-y-4 font-body text-black-600">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-brand-gold-1000" />
              Financial Reporting & Compliance
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-brand-gold-1000" />
              Risk Management Systems
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
