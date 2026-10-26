"use client";

import { ArrowUpRight, Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { experience, type Experience as ExperienceEntry } from "@/lib/experience";
import { linkTarget } from "@/lib/socials";
import { useInView } from "@/lib/useInView";
import SectionHeading from "@/components/SectionHeading";

type ExperienceTexts = ReturnType<typeof useLang>["t"]["experience"];

function formatMonth(value: string, tx: ExperienceTexts) {
  const [year, month] = value.split("-");
  return tx.monthYear.replace("{m}", tx.months[Number(month) - 1]).replace("{y}", year);
}

function formatPeriod(entry: ExperienceEntry, tx: ExperienceTexts) {
  if (!entry.start) return null;
  const start = formatMonth(entry.start, tx);
  if (!entry.end) return start;
  return `${start} — ${entry.end === "present" ? tx.present : formatMonth(entry.end, tx)}`;
}

function TimelineItem({ entry }: { entry: ExperienceEntry }) {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLLIElement>(0.15);
  const text = t.experience.items[entry.id];
  const period = formatPeriod(entry, t.experience);
  const current = entry.end === "present";
  const education = entry.kind === "education";
  const Icon = education ? GraduationCap : Briefcase;

  return (
    <li
      ref={ref}
      className="relative pl-16 sm:pl-20"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      {/* Timeline marker */}
      <span
        className={`clay-icon absolute left-0 top-2 h-12 w-12 sm:h-14 sm:w-14 ${
          education ? "bg-sky text-[#062a3d]" : "bg-accent-soft dark:bg-accent text-accent-ink"
        }`}
      >
        <Icon size={20} />
        {current && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-surface bg-accent" />
          </span>
        )}
      </span>

      <div className="clay p-6 sm:p-8">
        {period && (
          <p className={`mb-2 flex items-center gap-1.5 text-xs font-bold ${current ? "text-accent-ink dark:text-accent" : "text-muted"}`}>
            <Calendar size={14} />
            {period}
          </p>
        )}
        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-ink">{text.role}</h3>
        <p className="mt-0.5 text-sm font-bold text-accent-ink/80 dark:text-accent">{text.org}</p>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-body">{text.summary}</p>

        {text.points.length > 0 && (
          <ul className="mt-4 space-y-2">
            {text.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {(entry.tech.length > 0 || entry.link) && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {entry.tech.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
            {entry.link && (
              <a
                href={entry.link}
                {...linkTarget(entry.link)}
                className="ml-auto inline-flex items-center gap-1 rounded-full border-2 border-accent/40 px-4 py-1.5 font-heading text-xs font-bold text-ink hover:border-accent hover:bg-accent/10 transition-colors"
              >
                {t.experience.visit}
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="px-4 py-20">
      <div ref={ref} className="mx-auto max-w-4xl">
        <SectionHeading label={t.experience.label} title={t.experience.title} subtitle={t.experience.subtitle} visible={visible} />

        <ol className="relative space-y-8 before:absolute before:left-6 sm:before:left-7 before:top-6 before:bottom-6 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-accent/60 before:via-line before:to-transparent">
          {experience.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  );
}
