import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Link
          href="/#projects"
          className="text-sm text-white/50 transition hover:text-white/80"
        >
          ← Back to projects
        </Link>

        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/50">
          {project.category}
        </p>

        <h1 className="mt-4 text-4xl font-semibold">{project.title}</h1>

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/60">
            {project.platform}
          </span>
        </div>

{project.image && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <p className="mt-8 text-lg leading-8 text-white/70">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
            >
              {item}
            </span>
          ))}
        </div>


       {(project.awardUrl || project.videoUrl || project.liveUrl || project.githubUrl) && (
  <div className="mt-8 flex flex-wrap gap-4">
    {project.awardUrl && (
      <a
        href={project.awardUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-2xl bg-amber-400 px-4 py-2 text-sm font-medium leading-none text-neutral-950 transition hover:bg-amber-300"
      >
        {project.awardLabel || "Award recognition"}
      </a>
    )}

    {project.videoUrl && (
      <a
        href={project.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-2 text-sm font-medium leading-none text-red-200 transition hover:border-red-300/60 hover:bg-red-500/20 hover:text-red-100"
      >
        {project.videoLabel || "Watch promo video"}
      </a>
    )}

    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-2xl bg-white px-4 py-2 text-sm font-medium leading-none text-black transition hover:bg-white/85"
      >
        Visit Site
      </a>
    )}

    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium leading-none text-white transition hover:border-white/35 hover:bg-white/10"
      >
        View Code
      </a>
    )}
  </div>
)}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">My Role</h2>
            <p className="mt-4 leading-8 text-white/70">{project.role}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-semibold">Outcome</h2>
            <p className="mt-4 leading-8 text-white/70">{project.outcome}</p>
          </div>
        </div>
      </section>
    </main>
  );
}