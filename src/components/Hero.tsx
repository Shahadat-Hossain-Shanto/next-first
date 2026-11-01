
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden bg-[#f8faf9]"
    >
      <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            INNOVATION · TECHNOLOGY · GROWTH
          </div>

          <h2 className="text-5xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl">
            We Build Digital
            <span className="block text-emerald-600">
              Experiences
            </span>
            That Matter.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We help businesses transform ideas into powerful digital
            products through innovative technology, thoughtful design
            and reliable software solutions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-xl bg-emerald-600 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-700"
            >
              Let's Work Together →
            </Link>

            <Link
              href="#services"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-600"
            >
              Explore Services
            </Link>
            <Link href="/about-us" className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-600">
                About Us →
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-10 border-t border-slate-200 pt-8">
            <div>
              <p className="text-3xl font-extrabold">10+</p>
              <p className="mt-1 text-xs text-slate-500">Technologies</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">100%</p>
              <p className="mt-1 text-xs text-slate-500">Client Focused</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold">24/7</p>
              <p className="mt-1 text-xs text-slate-500">Digital Support</p>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm font-bold">Digital Innovation</p>
                <p className="mt-1 text-xs text-slate-400">
                  Turning ideas into reality
                </p>
              </div>
              <div className="rounded-lg bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                Our Approach
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-8">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl text-emerald-700">
                  ◈
                </div>
                <h3 className="font-bold">Smart Solutions</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Technology that solves real problems.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                  ↗
                </div>
                <h3 className="font-bold">Business Growth</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Digital experiences built to scale.
                </p>
              </div>

              <div className="col-span-2 rounded-2xl bg-[#10251f] p-6 text-white">
                <p className="text-xs font-semibold tracking-widest text-emerald-300">
                  OUR MISSION
                </p>
                <p className="mt-3 text-xl font-bold leading-8">
                  Making technology work better for your business.
                </p>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-3xl bg-emerald-100" />
        </div>
      </div>
    </section>
  );
}