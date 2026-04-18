export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <p className="text-sm uppercase tracking-[0.25em] text-white/50">
        Senior Front-End Developer
      </p>

      <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
        Building modern websites with WordPress, CMS platforms, and JavaScript.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
        15+ years creating responsive, user-focused digital experiences across
        WordPress, Sitefinity, NopCommerce, and custom front-end solutions.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-2xl border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}