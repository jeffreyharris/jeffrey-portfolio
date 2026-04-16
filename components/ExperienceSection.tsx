export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Senior-level front-end execution.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Spinutech</h3>
              <p className="text-sm text-white/60">Senior Front-End Developer</p>
            </div>
            <p className="text-sm text-white/50">2019 – Present</p>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
            <p>
              Build and deploy web marketing solutions across CMS and e-commerce
              platforms including Sitefinity, WordPress, and NopCommerce.
            </p>

            <p>
              Partner with design, strategy, development, and project
              stakeholders to deliver responsive, maintainable, user-focused
              digital experiences.
            </p>

            <p>
              Lead front-end implementation of templates, content components,
              themes, and enhancements while supporting technical planning,
              client collaboration, and presentation work.
            </p>

            <p>
              Contribute to project success through direct client communication,
              solution planning, peer collaboration, and high-quality delivery
              across varied business verticals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}