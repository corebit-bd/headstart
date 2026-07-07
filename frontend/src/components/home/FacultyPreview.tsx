import FacultyList from "@/app/faculty/page";

export default function FacultyPreview() {
  return (
    <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-black-900">
            Learn from the Best
          </h2>
          <p className="mt-6 font-body text-lg text-black-600">
            Our faculty consists of qualified ACCA professionals and experienced educators committed to delivering concept clarity, exam strategy, and mentorship beyond the classroom.
          </p>
        </div>
        <FacultyList />
    </section>
  );
}
