export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 lg:px-8 lg:pb-24 lg:pt-28">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Senior Front-End Developer
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Building modern websites with WordPress, CMS platforms, and JavaScript.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            15+ years creating responsive, user-focused digital experiences across
            WordPress, Sitefinity, NopCommerce, and modern front-end development
            with React, Next.js, TypeScript, and Tailwind CSS.
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
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm text-white transition hover:border-white/35 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">
            Core Focus
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "WordPress Development",
              "CMS Implementations",
              "JavaScript Front-End",
              "Responsive UI",
              "Component-Based Development",
              "E-commerce Solutions",
              "React / Next.js",
              "Client Collaboration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}