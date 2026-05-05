export default function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden text-white">
      {/* Bottom-right warm moving gradient background */}
      <div className="pointer-events-none absolute bottom-[-120px] right-[80px] -z-10 h-[420px] w-[900px] max-w-[100vw] animate-contact-gradient bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.24),transparent_35%),radial-gradient(circle_at_55%_70%,rgba(251,191,36,0.16),transparent_32%),radial-gradient(circle_at_85%_100%,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* Fade into page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-[#f59e0b]/10 lg:p-10">
          {/* Subtle orange edge glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_85%_100%,rgba(245,158,11,0.18),transparent_38%)]" />

          <div className="relative z-10">
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
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f59e0b] hover:text-black"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/jeffreyharris"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-[#f59e0b] hover:text-black"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}