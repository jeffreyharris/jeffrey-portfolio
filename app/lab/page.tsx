import TabsDemo from "@/components/lab/TabsDemo";

export default function LabPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-8 pt-48">
        {/* Warm moving gradient background */}
            <div className="pointer-events-none absolute left-1/2 top-1 -z-10 h-[420px] w-[1100px] max-w-[100vw] -translate-x-1/2 animate-hero-gradient bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.20),transparent_35%),radial-gradient(circle_at_65%_15%,rgba(251,191,36,0.14),transparent_32%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_40%)]" />
      
            {/* Fade into page background */}
            <div className="pointer-events-none absolute inset-x-0 top-1 -z-10 h-full bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950" />
      
      <p className="text-sm uppercase tracking-[0.25em] text-white/50 pt-24">
        React Practice
      </p>

      <h1 className="mt-4 text-4xl font-semibold">
        Front-End Component Lab
      </h1>

      <p className="mt-4 max-w-3xl leading-8 text-white/70">
        A collection of small React and Next.js interface examples built to
        demonstrate component structure, state management, conditional rendering,
        filtering, accessibility patterns, and responsive UI implementation.
      </p>

      <section className="mt-12">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Tabs Component</h2>
          <p className="mt-2 max-w-2xl text-white/60">
            This example uses React state, mapped data, button events, and
            conditional rendering to switch between related content panels.
          </p>
        </div>

        <TabsDemo />
      </section>
    </main>
  );
}