"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang();
  const text = t.projects.items[project.id];
  // The whole card opens the live demo, falling back to the repo
  const href = project.demo ?? project.github;

  return (
    <article className="clay group relative flex h-full flex-col overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer">
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-surface-2">
        {project.image && (
          <Image
            src={project.image}
            alt={text.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute top-3 left-3 rounded-full bg-surface/90 px-2.5 py-0.5 font-heading text-xs font-extrabold text-accent-ink dark:text-accent backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.github && (
          // z-10 keeps the icon clickable above the card-wide link
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-ink backdrop-blur hover:text-accent transition-colors"
          >
            <Github size={16} />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <h3 className="font-heading text-xl font-extrabold text-ink group-hover:text-accent transition-colors">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-clay focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent"
          >
            {text.title}
          </a>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{text.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-accent/40 px-4 py-1.5 font-heading text-xs font-bold text-ink transition-colors group-hover:border-accent group-hover:bg-accent/10">
          {project.demo ? t.projects.viewDemo : t.projects.viewCode}
          <ArrowUpRight size={14} />
        </span>
      </div>
    </article>
  );
}
