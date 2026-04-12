import Link from "next/link";

const blogCategories = [
  {
    title: "ACCA Champs",
    description: "Celebrating our top scorers and global rank holders.",
    href: "/blog/acca-champs",
    color: "var(--color-brand-gold-100)",
  },
  {
    title: "Success Stories",
    description: "Real-world professional journeys from our alumni.",
    href: "/blog/success-stories",
    color: "var(--color-success-100)",
  },
  {
    title: "Students' Voice",
    description: "Testimonials and feedback from the HeadStart community.",
    href: "/blog/students-voice",
    color: "var(--color-brand-purple-100)",
  },
  {
    title: "Events",
    description: "Upcoming workshops, seminars, and academic galas.",
    href: "/blog/events",
    color: "var(--color-info-100)",
  },
  {
    title: "New Joiners",
    description: "Meet the newest experts joining our Dual-Wing team.",
    href: "/blog/new-joiners",
    color: "var(--color-brand-grey-1000)",
  },
];

export default function BlogHub() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl font-bold text-gray-900">
            HeadStart <span className="text-brand-purple-1000">Journal</span>
          </h1>
          <p className="mt-4 font-body text-lg text-gray-600 max-w-2xl mx-auto">
            Explore insights, achievements, and updates from across our Academic
            and Advisory wings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-3xl border border-brand-grey-1000 p-8 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div
                className="absolute top-0 right-0 h-32 w-32 -mr-16 -mt-16 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: category.color }}
              />

              <h3 className="font-heading text-2xl font-bold text-gray-900 group-hover:text-brand-purple-1000 transition-colors">
                {category.title}
              </h3>
              <p className="mt-4 font-body text-gray-600 leading-relaxed">
                {category.description}
              </p>

              <div className="mt-8 flex items-center font-heading text-sm font-bold text-brand-purple-1000">
                Explore Section{" "}
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
