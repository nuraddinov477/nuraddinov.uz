"use client";

import { BrainCircuit, Monitor, Server, Workflow, type LucideIcon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useInView } from "@/lib/useInView";
import SectionHeading from "@/components/SectionHeading";

type SkillGroupKey = "ai" | "backend" | "frontend" | "automation";

// `count` = how many of the author's projects use the technology
// (counted from package.json / requirements.txt across ~/projects, Oct 2026)
const skillGroups: { key: SkillGroupKey; icon: LucideIcon; items: { name: string; count: number }[] }[] = [
  {
    key: "ai",
    icon: BrainCircuit,
    items: [
      { name: "Gemini API", count: 6 },
      { name: "Claude API", count: 5 },
      { name: "AI agents", count: 2 },
    ],
  },
  {
    key: "backend",
    icon: Server,
    items: [
      { name: "PostgreSQL", count: 8 },
      { name: "Django / DRF", count: 4 },
      { name: "FastAPI", count: 3 },
      { name: "Flask", count: 3 },
      { name: "Node.js / Express", count: 3 },
      { name: "SQLAlchemy", count: 3 },
      { name: "Prisma", count: 2 },
    ],
  },
  {
    key: "frontend",
    icon: Monitor,
    items: [
      { name: "React", count: 10 },
      { name: "Tailwind CSS", count: 8 },
      { name: "TypeScript", count: 6 },
      { name: "Next.js", count: 5 },
      { name: "Vite", count: 3 },
    ],
  },
  {
    key: "automation",
    icon: Workflow,
    items: [
      { name: "Telegram bot", count: 5 },
      { name: "PDF / DOCX / Excel", count: 4 },
      { name: "Google Sheets", count: 3 },
      { name: "Apps Script", count: 3 },
    ],
  },
];

const MAX_COUNT = Math.max(...skillGroups.flatMap((g) => g.items.map((i) => i.count)));

const badges = [
  "Python", "JavaScript", "HTML / CSS", "REST API", "Supabase", "Jinja2", "HTMX", "Leaflet",
  "Docker", "Git", "Linux", "Vercel", "Render", "PyTorch", "scikit-learn", "Pandas", "NumPy",
  "Transformers", "LangChain", "OpenCV", "MongoDB", "Vue.js", "GraphQL", "Figma",
];

export default function Skills() {
  const { t } = useLang();
  const [headerRef, headerVisible] = useInView<HTMLDivElement>();
  const [gridRef, gridVisible] = useInView<HTMLDivElement>();

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div ref={headerRef}>
          <SectionHeading label={t.skills.label} title={t.skills.title} subtitle={t.skills.subtitle} visible={headerVisible} />
        </div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <div
              key={group.key}
              className="clay p-7"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${gi * 0.12}s, transform 0.6s ease ${gi * 0.12}s`,
              }}
            >
              <h3 className="flex items-center gap-3 font-heading text-lg font-extrabold text-ink mb-6">
                <span className={`clay-icon h-11 w-11 ${gi % 2 === 0 ? "bg-accent-soft dark:bg-accent text-accent-ink" : "bg-sky text-[#062a3d]"}`}>
                  <group.icon size={20} />
                </span>
                {t.skills.categories[group.key]}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, ii) => (
                  <li key={item.name}>
                    <div className="flex justify-between mb-1.5 text-sm">
                      <span className="font-semibold text-body">{item.name}</span>
                      <span className="font-heading font-extrabold text-accent-ink dark:text-accent tabular-nums">{item.count}</span>
                    </div>
                    <div className="clay-inset h-2.5 overflow-hidden !rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                        style={{
                          width: gridVisible ? `${(item.count / MAX_COUNT) * 100}%` : "0%",
                          transition: `width 1s ease-out ${gi * 0.12 + ii * 0.06}s`,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 text-right text-xs font-semibold text-muted">* {t.skills.legend}</p>

        {/* Also familiar with */}
        <div className="mt-12 text-center">
          <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-muted mb-5">{t.skills.also}</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {badges.map((badge, i) => (
              <span
                key={badge}
                className="rounded-full bg-surface px-4 py-2 text-xs font-bold text-body shadow-sm border border-line hover:text-accent hover:border-accent/40 transition-colors cursor-default"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.4s ease ${0.3 + i * 0.03}s, transform 0.4s ease ${0.3 + i * 0.03}s`,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
