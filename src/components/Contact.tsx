
export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#10251f] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
            Have a project in mind?
            <span className="block text-emerald-300">
              Let's talk.
            </span>
          </h2>

          <p className="mt-6 max-w-lg leading-8 text-slate-300">
            Whether you have a new idea or need help improving an existing
            system, we'd love to hear from you. Let's create something
            meaningful together.
          </p>

          <div className="mt-10 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Email
              </p>
              <p className="mt-2 text-slate-200">
                hello@yourcompany.com
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                Location
              </p>
              <p className="mt-2 text-slate-200">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-10">
          <h3 className="text-2xl font-bold">
            Let's start a conversation
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Tell us a little about your project and we'll get in touch.
          </p>

          <form
            action="mailto:hello@yourcompany.com"
            method="post"
            encType="text/plain"
            className="mt-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-400 px-6 py-4 text-sm font-extrabold text-[#10251f] transition hover:bg-emerald-300"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
