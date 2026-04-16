import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

type ProjectCardProps = Project;

export default function ProjectCard({
  slug,
  title,
  platform,
  category,
  summary,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.05]">
      {image && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              {category}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white/50">
            {platform}
          </span>
        </div>

        <p className="mt-4 leading-7 text-white/70">{summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={`/projects/${slug}`}
            className="text-sm text-white/50 transition hover:text-white/80"
          >
            View project →
          </Link>
        </div>
      </div>
    </article>
  );
}