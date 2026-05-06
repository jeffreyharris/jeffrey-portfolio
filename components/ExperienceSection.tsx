export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            15+ years building responsive, CMS-driven digital experiences.
          </h2>
        </div>

        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Spinutech</h3>
                <p className="text-sm text-white/60">
                  Senior Front-End Developer
                </p>
              </div>
              <p className="text-sm text-white/50">2019 – 2026</p>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Built and maintained responsive web marketing solutions across CMS
                and e-commerce platforms including WordPress, Sitefinity,
                Sitecore, and NopCommerce.
              </p>

              <p>
                Developed reusable front-end templates, content components,
                themes, and page enhancements for client websites across a range
                of business verticals.
              </p>

              <p>
                Partnered with design, strategy, development, and project
                stakeholders to turn creative concepts into polished,
                maintainable digital experiences.
              </p>

              <p>
                Supported technical planning, client presentations, QA reviews,
                peer collaboration, and high-quality front-end delivery from
                concept through launch.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Previous Roles
            </p>


            <div className="mt-5 space-y-5">

              <div className="border-t border-white/10 pt-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold">HighPoint Solutions</h3>
                    <p className="text-sm text-white/60">
                      Front-End Developer
                    </p>
                  </div>
                  <p className="text-sm text-white/40">2015 – 2019</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Developed front-end interfaces for enterprise web applications
                  using .NET MVC, Sitecore, responsive HTML, CSS, and JavaScript.
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold">Progressive Dental</h3>
                    <p className="text-sm text-white/60">
                      Front-End / WordPress Developer
                    </p>
                  </div>
                  <p className="text-sm text-white/40">2014 – 2015</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Built responsive WordPress websites, landing pages, and
                  marketing-focused front-end experiences for dental industry
                  clients.
                </p>
              </div>          
              <div className="border-t border-white/10 pt-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold">World Wildlife Fund</h3>
                    <p className="text-sm text-white/60">Web Producer</p>
                  </div>
                  <p className="text-sm text-white/40">Earlier Career</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Managed and produced web content, supported CMS updates, and
                  contributed to responsive site improvements for a high-profile
                  nonprofit digital presence.
                </p>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}