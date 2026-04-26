export function Contact() {
  return (
    <section className="bg-brand-grey-50 py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-black-900">
          Have an Inquiry?
        </h2>
        <form className="mt-10 grid grid-cols-1 gap-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full rounded-md border-0 px-4 py-3 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-brand-purple-1000"
          />
          <textarea
            rows={4}
            placeholder="How can we help?"
            className="block w-full rounded-md border-0 px-4 py-3 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-brand-purple-1000"
          />
          <button className="w-full rounded-md bg-brand-gold-1000 py-4 font-heading font-bold text-black-900 shadow-md hover:bg-brand-gold-900 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
