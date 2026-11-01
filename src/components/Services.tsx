
const services = [
  {
    number: "01",
    icon: "◈",
    title: "Web Development",
    description:
      "Modern, scalable and high-performance websites built to support your business growth.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Software Development",
    description:
      "Custom software solutions designed around your business processes and requirements.",
  },
  {
    number: "03",
    icon: "▤",
    title: "API Development",
    description:
      "Secure and reliable REST APIs that connect applications and simplify integrations.",
  },
  {
    number: "04",
    icon: "☁",
    title: "Cloud & Deployment",
    description:
      "Reliable deployment, server configuration and infrastructure for modern applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f8faf9] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
            What We Do
          </p>
          <h2 className="mt-5 text-4xl font-extrabold">
            Services designed for your business.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            We provide technology services that help businesses innovate,
            operate efficiently and grow confidently.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                  {service.icon}
                </span>
                <span className="text-sm font-bold text-slate-300">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-8 text-lg font-extrabold">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-700"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}