export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">
        Portfolio / React + Next.js Showcase
      </p>

      <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight">
        Senior Front-End Developer building modern, high-performing web experiences.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
        I design and build polished, user-focused digital experiences with deep
        experience across CMS platforms, e-commerce solutions, and production-ready
        front-end development.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}