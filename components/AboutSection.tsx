export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Built on real-world delivery experience.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/70">
          <p>
            I’m a Senior Front-End Developer with over 15 years of experience building
            websites, CMS implementations, and e-commerce solutions across
            multiple industries. My background includes Sitefinity, WordPress,
            NopCommerce, Sitecore, Vue, and production-focused front-end
            development in collaborative agency and client environments.
          </p>

          <p>
            Beyond implementation, I work closely with designers, strategists,
            developers, and stakeholders to translate business goals into clean,
            maintainable, user-focused digital experiences. I’ve led client
            calls, presented work, supported technical planning, and helped
            guide projects toward successful outcomes.
          </p>

          <p>
            This site reflects where my experience is going next: combining a
            strong production background with modern React and Next.js
            development.
          </p>
        </div>
      </div>
    </section>
  );
}