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
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef}>
          <SectionHeading index="03" title={t.skills.title} subtitle={t.skills.subtitle} visible={headerVisible} />
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <div
              key={group.key}
              className="bg-surface-2 border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-colors duration-300"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${gi * 0.12}s, transform 0.6s ease ${gi * 0.12}s`,
              }}
            >
              <h3 className="flex items-center gap-2.5 text-white font-semibold font-mono text-sm mb-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <group.icon size={16} />
                </span>
                {t.skills.categories[group.key]}
              </h3>
              <ul className="space-y-3.5">
                {group.items.map((item, ii) => (
                  <li key={item.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-400 text-xs font-mono">{item.name}</span>
                      <span className="text-accent text-xs font-mono tabular-nums">{item.count}</span>
                    </div>
                    <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent-dim to-accent rounded-full"
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

        <p className="text-gray-600 text-xs font-mono mt-4 text-right">* {t.skills.legend}</p>

        {/* Also familiar with */}
        <div className="mt-12">
          <h3 className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-4">{t.skills.also}</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, i) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-mono bg-surface-2 border border-white/5 text-gray-400 rounded-full hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
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
