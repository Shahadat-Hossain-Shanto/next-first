
import Link from "next/link";

const projects = [
  {
    category: "E-commerce",
    title: "Modern E-commerce Platform",
    description:
      "A scalable online marketplace designed for seamless shopping experiences.",
    number: "01",
  },
  {
    category: "Business Management",
    title: "Business Management System",
    description:
      "An integrated business solution for managing operations and workflows.",
    number: "02",
  },
  {
    category: "Enterprise Software",
    title: "Enterprise Dashboard",
    description:
      "A centralized dashboard for business insights, reporting and management.",
    number: "03",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-600">
              Our Portfolio
            </p>
            <h2 className="mt-5 text-4xl font-extrabold">
              Work that makes a difference.
            </h2>
            <p className="mt-4 text-slate-600">
              Explore the types of digital products we create.
            </p>
          </div>

          <Link href="#contact" className="font-bold text-emerald-700">
            Start a Project →
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#10251f]">
                <div className="absolute h-48 w-48 rounded-full border border-emerald-400/20 transition duration-700 group-hover:scale-125" />
                <div className="absolute h-36 w-36 rounded-full border border-emerald-400/30" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-emerald-400 text-4xl font-black text-[#10251f] shadow-xl transition group-hover:rotate-6">
                  {project.number}
                </div>
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-extrabold">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-6 inline-block text-sm font-bold text-slate-900 transition group-hover:text-emerald-700"
                >
                  Discuss a Similar Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
