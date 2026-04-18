export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-16 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            About
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Experienced front-end developer with a modern growth mindset.
          </h2>
        </div>

        <div className="space-y-6 text-white/70 leading-8">
          <p>
            I’m a Senior Front-End Developer with 15+ years of experience
            building responsive, user-focused websites and digital experiences
            across WordPress, Sitefinity, NopCommerce, and custom web platforms.
          </p>

          <p>
            My background includes front-end architecture, CMS implementation,
            e-commerce experiences, component-based UI development, and close
            collaboration with designers, strategists, project managers, and
            clients.
          </p>

          <p>
            I’m currently expanding my modern front-end skillset through hands-on
            development with React, Next.js, TypeScript, and Tailwind CSS—
            building real projects while continuing to deliver strong UX and
            business-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
}