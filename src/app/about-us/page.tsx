import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-semibold uppercase tracking-widest text-emerald-400">
            About NexaTech
          </p>

          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Building Digital Solutions
            <span className="block text-emerald-400">
              That Move Businesses Forward.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            We help businesses grow through modern websites, software
            applications, and innovative digital solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-emerald-600">
              Who We Are
            </p>

            <h2 className="mb-6 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Your Partner in Digital Transformation
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              NexaTech is a digital solutions company focused on helping
              businesses solve problems through technology.
            </p>

            <p className="leading-8 text-slate-600">
              From business websites to custom software applications, our
              goal is to create reliable, scalable, and user-friendly
              solutions.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-10">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              What Makes Us Different?
            </h3>

            <ul className="space-y-5 text-slate-700">
              <li>✓ Modern and scalable technology</li>
              <li>✓ User-focused development</li>
              <li>✓ Reliable software solutions</li>
              <li>✓ Commitment to quality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-50 px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-slate-900">
          Have a Project in Mind?
        </h2>

        <p className="mb-8 text-slate-600">
          Let's work together to build something great.
        </p>

        <Link
          href="/#contact"
          className="inline-block rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white transition hover:bg-emerald-700"
        >
          Contact Us →
        </Link>
      </section>
    </main>
  );
}