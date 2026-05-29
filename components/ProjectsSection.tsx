"use client";

import { motion } from "framer-motion";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const projectHeadline =
  "Selected work across CMS and e-commerce platforms.";


type FilterValue = "All" | "WordPress" | "Sitefinity" | "NopCommerce" | "Vue";

const filters: FilterValue[] = ["All", "WordPress", "Sitefinity", "NopCommerce", "Vue"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesPlatform =
      activeFilter === "All" || project.platform === activeFilter;

    const search = searchTerm.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(search) ||
      project.summary.toLowerCase().includes(search) ||
      project.category.toLowerCase().includes(search) ||
      project.tech.some((item) => item.toLowerCase().includes(search));

    return matchesPlatform && matchesSearch;
  });

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Featured Projects
          </p>          
          <motion.h2
            className="mt-3 text-3xl font-semibold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
                },
              },
            }}
          >
            {projectHeadline.split(" ").map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  },
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <p className="max-w-xl text-sm leading-7 text-white/60">
          A sample of production work focused on responsive interfaces,
          maintainable front-end implementation, and business-driven digital
          experiences.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <div className="mw-full flex-1">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>

          <input
              id="project-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by project, tech, category..."
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-amber-400/70 focus:bg-white/[0.06] md:max-w-md"
          />
      </div>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-[#f59e0b] text-black"
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
   detailSummary={project.tech}
  tech={project.tech}
  role={project.role}
  outcome={project.outcome}
  image={project.image}
  awardUrl={project.awardUrl}
  awardLabel={project.awardLabel}
  videoUrl={project.videoUrl}
  videoLabel={project.videoLabel}
          />
        ))}
      </div>
    </section>
  );
}