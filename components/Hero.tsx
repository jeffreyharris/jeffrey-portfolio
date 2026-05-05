export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Warm moving gradient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[1100px] max-w-[100vw] -translate-x-1/2 animate-hero-gradient bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.20),transparent_35%),radial-gradient(circle_at_65%_15%,rgba(251,191,36,0.14),transparent_32%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* Fade into page background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950" />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Senior Front-End Developer
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Building modern websites with WordPress, CMS platforms, and JavaScript.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              15+ years creating responsive, user-focused digital experiences across WordPress, Sitefinity, NopCommerce, and other CMS-driven platforms, with growing experience in modern front-end tools including React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f59e0b] hover:text-black"
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

          <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">
              Core Focus
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "WordPress Development",
                "Sitefinity Development",
                "NopCommerce Development",
                "CMS Implementations",
                "HTML/CSS/SASS",
                "JavaScript Front-End",
                "Responsive UI",
                "Component-Based Development",
                "E-commerce Solutions",
                "React / Next.js",
                "ADA Compliance",
                "Web Production & Optimization",
                "Client Collaboration",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}