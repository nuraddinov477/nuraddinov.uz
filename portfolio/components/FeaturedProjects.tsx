"use client";

import TransitionLink from "@/components/TransitionLink";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/lib/projects";
import { useInView } from "@/lib/useInView";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="px-4 py-20">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading label={t.featured.label} title={t.featured.title} subtitle={t.featured.subtitle} visible={visible} align="left" />
          <TransitionLink
            href="/projects"
            className="clay-btn clay-btn-plain mb-12 self-start md:self-end"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}
          >
            {t.featured.viewAll}
            <ArrowRight size={16} />
          </TransitionLink>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className={visible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
