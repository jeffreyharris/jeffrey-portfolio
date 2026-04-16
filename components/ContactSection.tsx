export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-white/50">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-semibold">Let’s connect.</h2>

        <p className="mt-4 max-w-2xl leading-8 text-white/70">
          I’m open to front-end development, CMS, e-commerce, and modern web
          opportunities. The best place to connect right now is LinkedIn or
          GitHub.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/jeffreyharrisdotme"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jeffreyharris"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}