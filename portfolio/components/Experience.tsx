"use client";

import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
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
  const Icon = entry.kind === "education" ? GraduationCap : Briefcase;

  return (
    <li
      ref={ref}
      className="relative pl-14 sm:pl-16"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      {/* Timeline marker */}
      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 border border-accent/30 text-accent shadow-[0_0_0_6px_#0a0a0a]">
        <Icon size={16} />
        {current && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
          </span>
        )}
      </span>

      <div className="bg-surface-2 border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-semibold font-mono">{text.role}</h3>
            <p className="text-accent text-sm mt-0.5">{text.org}</p>
          </div>
          {period && (
            <span className={`self-start shrink-0 text-xs font-mono rounded-full px-3 py-1 border ${
              current ? "text-accent border-accent/30 bg-accent/5" : "text-gray-500 border-white/5 bg-surface-3"
            }`}>
              {period}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{text.summary}</p>

        {text.points.length > 0 && (
          <ul className="mt-4 space-y-2">
            {text.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {(entry.tech.length > 0 || entry.link) && (
          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {entry.tech.map((tech) => (
              <span key={tech} className="text-xs font-mono text-accent/70 bg-accent/5 border border-accent/10 px-2 py-0.5 rounded">
                {tech}
              </span>
            ))}
            {entry.link && (
              <a
                href={entry.link}
                {...linkTarget(entry.link)}
                className="ml-auto inline-flex items-center gap-1 text-xs font-mono text-accent/80 hover:text-accent transition-colors"
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
    <section id="experience" className="py-24 px-4 bg-surface-2/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading index="02" title={t.experience.title} subtitle={t.experience.subtitle} visible={visible} />

        <ol className="relative space-y-8 before:absolute before:left-5 before:top-5 before:bottom-5 before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-white/10 before:to-transparent">
          {experience.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  );
}
