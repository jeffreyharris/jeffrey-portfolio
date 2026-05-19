import TabsDemo from "@/components/lab/TabsDemo";

export default function LabPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <p className="text-sm uppercase tracking-[0.25em] text-white/50">
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