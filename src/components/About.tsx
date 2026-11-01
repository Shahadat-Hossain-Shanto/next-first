
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
            Who We Are
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Technology is our tool.
            <span className="block text-emerald-600">
              Your success is our goal.
            </span>
          </h2>

          <p className="mt-7 leading-8 text-slate-600">
            NexaTech is a technology-focused company dedicated to
            creating reliable digital solutions. We combine technical
            expertise, creative thinking and a customer-first approach
            to help businesses move forward.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From web applications to enterprise software, we focus on
            building solutions that are practical, scalable and ready
            for the future.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800"
          >
            Discover More →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            ["01", "Innovation First", "Exploring better ways to solve problems."],
            ["02", "Quality Driven", "Delivering dependable solutions."],
            ["03", "Client Focused", "Understanding your business needs."],
            ["04", "Future Ready", "Building for long-term growth."],
          ].map(([number, title, description], index) => (
            <div
              key={number}
              className={`flex min-h-48 flex-col justify-end rounded-2xl p-7 ${
                index % 2 === 0
                  ? "bg-[#10251f] text-white"
                  : "bg-emerald-50 text-slate-900"
              } ${index % 2 === 1 ? "mt-10" : ""}`}
            >
              <p className="text-4xl font-extrabold text-emerald-500">
                {number}
              </p>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className={`mt-2 text-sm ${
                index % 2 === 0 ? "text-slate-300" : "text-slate-600"
              }`}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
