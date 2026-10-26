"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { projects, type ProjectCategory } from "@/lib/projects";
import { GITHUB_URL, linkTarget } from "@/lib/socials";
import { useInView } from "@/lib/useInView";
import SectionHeading from "@/components/SectionHeading";

type Filter = "all" | ProjectCategory;
const filters: Filter[] = ["all", "ai", "edtech", "language", "business"];

// Cards without a live demo or repo have nothing to open, so they're hidden
const openable = projects.filter((p) => p.demo || p.github);
const inFilter = (f: Filter) => (f === "all" ? openable : openable.filter((p) => p.categories.includes(f)));

export default function Projects() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();
  const [filter, setFilter] = useState<Filter>("all");
  const shown = inFilter(filter);

  return (
    <section id="projects" className="py-24 px-4 bg-surface-2/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading index="04" title={t.projects.title} subtitle={t.projects.subtitle} visible={visible} />

        {/* Category filter */}
        <div
          role="tablist"
          className="flex flex-wrap gap-2 mb-8"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all duration-200 ${
                filter === f
                  ? "bg-accent text-black border-accent"
                  : "bg-surface-2 text-gray-400 border-white/5 hover:text-white hover:border-accent/30"
              }`}
            >
              {t.projects.filters[f]}
              <span className={`tabular-nums ${filter === f ? "text-black/60" : "text-gray-600"}`}>{inFilter(f).length}</span>
            </button>
          ))}
        </div>

        {/* Re-keyed on filter change so the cards replay their entrance */}
        <div key={filter} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((project, i) => {
            const text = t.projects.items[project.id];
            // The whole card opens the live demo, falling back to the repo
            const href = project.demo ?? project.github;

            return (
              <div
                key={project.id}
                className={visible ? "animate-fade-up" : "opacity-0"}
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              >
                <article className="group relative flex h-full flex-col overflow-hidden bg-surface-2 border border-white/5 rounded-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(34,197,94,0.3)] cursor-pointer">
                  {/* Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-surface-3">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={text.title}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/10 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-md bg-black/60 backdrop-blur px-2 py-0.5 text-accent font-mono font-bold text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.github && (
                      // z-10 keeps the icon clickable above the card-wide link
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="absolute top-3 right-3 z-10 rounded-lg bg-black/60 backdrop-blur p-1.5 text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-white group-hover:text-accent transition-colors font-semibold mb-2 font-mono">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-accent"
                      >
                        {text.title}
                      </a>
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{text.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-mono text-accent/70 bg-accent/5 border border-accent/10 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-mono text-accent/70 group-hover:text-accent transition-colors">
                      {project.demo ? t.projects.viewDemo : t.projects.viewCode}
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        <div
          className="text-center mt-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
        >
          <a href={GITHUB_URL} {...linkTarget(GITHUB_URL)} className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:underline">
            <Github size={16} />
            {t.projects.viewAll} →
          </a>
        </div>
      </div>
    </section>
  );
}
