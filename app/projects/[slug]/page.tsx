import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const platformPromos = {
  WordPress: {
    eyebrow: "WordPress Help",
    heading: "Want help with your WordPress website?",
    text: "I build, update, and improve WordPress websites with responsive layouts, custom front-end work, Elementor support, and performance-minded execution.",
    cta: "Contact me about WordPress",
    className:
      "border-sky-400/30 bg-sky-500/10 shadow-[0_0_60px_rgba(56,189,248,0.12)]",
    buttonClassName:
      "bg-sky-300 text-neutral-950 hover:bg-white hover:text-black",
  },
  Sitefinity: {
    eyebrow: "Sitefinity Support",
    heading: "Need assistance with your Sitefinity setup?",
    text: "I help teams build polished, responsive Sitefinity experiences with CMS-friendly layouts, reusable front-end patterns, and marketing-focused page templates.",
    cta: "Contact me about Sitefinity",
    className:
      "border-violet-400/30 bg-violet-500/10 shadow-[0_0_60px_rgba(167,139,250,0.12)]",
    buttonClassName:
      "bg-violet-300 text-neutral-950 hover:bg-white hover:text-black",
  },
  NopCommerce: {
    eyebrow: "E-commerce Front End",
    heading: "Need help improving your NopCommerce site?",
    text: "I can help refine NopCommerce storefronts with responsive front-end updates, cleaner product experiences, and custom UI improvements.",
    cta: "Contact me about NopCommerce",
    className:
      "border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_60px_rgba(52,211,153,0.12)]",
    buttonClassName:
      "bg-emerald-300 text-neutral-950 hover:bg-white hover:text-black",
  },
} as const;



export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const promo =
  platformPromos[project.platform as keyof typeof platformPromos] ?? {
    eyebrow: "Website Help",
    heading: "Want help with a website like this?",
    text: "I build responsive, polished websites with modern front-end tools, CMS-friendly structure, and clear calls to action.",
    cta: "Start a website project",
    className:
      "border-amber-400/30 bg-amber-500/10 shadow-[0_0_60px_rgba(245,158,11,0.12)]",
    buttonClassName:
      "bg-[#f59e0b] text-black hover:bg-white hover:text-black",
  };

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

        <div className="mt-8 text-lg leading-8 text-white/70">
  {project.detailSummary?.length ? (
    project.detailSummary.map((paragraph) => (
      <p key={paragraph} className="mb-4 leading-8">
        {paragraph}
      </p>
    ))
  ) : (
    <p className="leading-8">{project.summary}</p>
  )}
</div>
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

        <div
  className={`relative mt-12 overflow-hidden rounded-[2rem] border p-8 lg:p-10 ${promo.className}`}
>
  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

  <div className="relative">
    <p className="text-sm uppercase tracking-[0.25em] text-white/50">
      {promo.eyebrow}
    </p>

    <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
      {promo.heading}
    </h2>

    <p className="mt-4 max-w-2xl leading-8 text-white/70">
      {promo.text}
    </p>

    <Link
      href="/#contact"
      className={`mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-medium transition ${promo.buttonClassName}`}
    >
      {promo.cta}
    </Link>
  </div>
</div>

      </section>
    </main>
  );

  
}