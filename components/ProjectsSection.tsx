"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type FilterValue = "All" | "Sitefinity" | "NopCommerce";

const filters: FilterValue[] = ["All", "Sitefinity", "NopCommerce"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.platform === activeFilter);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Selected work across CMS and e-commerce platforms.
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-7 text-white/60">
          A sample of production work focused on responsive interfaces,
          maintainable front-end implementation, and business-driven digital
          experiences.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-white text-black"
                  : "border border-white/15 text-white/70 hover:border-white/35 hover:bg-white/5"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            platform={project.platform}
            category={project.category}
            summary={project.summary}
            tech={project.tech}
            role={project.role}
            outcome={project.outcome}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}