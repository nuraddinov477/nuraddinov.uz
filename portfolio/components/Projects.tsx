"use client";

import { useState } from "react";
import { Github } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { projects, type ProjectCategory } from "@/lib/projects";
import { GITHUB_URL, linkTarget } from "@/lib/socials";
import { useInView } from "@/lib/useInView";
import SectionHeading, { AccentTitle } from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

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
    <section className="px-4 pt-36 pb-16 sm:pt-44">
      <div ref={ref} className="mx-auto max-w-6xl">
        <SectionHeading
          as="h1"
          label={t.projects.label}
          title={<AccentTitle parts={t.projects.heading} />}
          subtitle={t.projects.subtitle}
          visible={visible}
        />

        {/* Category filter */}
        <div
          role="tablist"
          className="mb-10 flex flex-wrap justify-center gap-2.5"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`clay-btn !px-5 !py-2 ${filter === f ? "clay-btn-primary" : "clay-btn-plain text-body"}`}
            >
              {t.projects.filters[f]}
              <span className="tabular-nums opacity-60">{inFilter(f).length}</span>
            </button>
          ))}
        </div>

        {/* Re-keyed on filter change so the cards replay their entrance */}
        <div key={filter} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, i) => (
            <div
              key={project.id}
              className={visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">{t.projects.note}</p>
        <div className="mt-6 text-center">
          <a href={GITHUB_URL} {...linkTarget(GITHUB_URL)} className="clay-btn clay-btn-plain">
            <Github size={16} />
            {t.projects.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
