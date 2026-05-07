export default function PromoSection() {
  return (
  <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
  <div className="rounded-[2rem] border border-amber-400/20 bg-amber-400/[0.08] p-6 shadow-2xl shadow-amber-400/5 md:flex md:items-center md:justify-between md:gap-8">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300/80">
        Available for select projects
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-white">
        Need a polished marketing site or portfolio like this?
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
        Want a site like this for your personal brand or business? I can build you a custom Next.js website with 
        responsive layouts, interactive project sections, polished visuals, and contact forms that actually send leads to your inbox.
      </p>
    </div>

    <a
      href="#contact"
      className="rounded-2xl bg-[#f59e0b]  px-5 py-3 text-sm font-medium text-black transition hover:bg-white hover:text-black"
    >
      Start a project
    </a>
  </div>
</section>
);
}