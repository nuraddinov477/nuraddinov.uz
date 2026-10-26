import type { ExperienceId } from "@/lib/translations";

export interface Experience {
  id: ExperienceId;
  kind: "work" | "education";
  /** "YYYY-MM"; periods come from the projects' git history */
  start?: string;
  /** "YYYY-MM", "present", or omitted for a single month */
  end?: string;
  link?: string;
  tech: string[];
}

// Language-independent timeline data; texts live in t.experience.items[id]
export const experience: Experience[] = [
  {
    id: "tdshu",
    kind: "work",
    start: "2026-06",
    end: "present",
    link: "https://smartjadval-1.vercel.app/tsuos",
    tech: ["FastAPI", "React", "PostgreSQL", "Claude API", "Flask"],
  },
  {
    id: "firdavs",
    kind: "work",
    start: "2026-08",
    link: "https://eduuz-sand.vercel.app",
    tech: ["Next.js", "Prisma", "FastAPI", "Gemini API", "Telegram bot", "Google Sheets"],
  },
  {
    id: "resta",
    kind: "work",
    start: "2026-03",
    end: "2026-07",
    link: "https://resta-erp.onrender.com",
    tech: ["FastAPI", "PostgreSQL", "Claude API", "aiogram", "Jinja2"],
  },
  {
    id: "independent",
    kind: "work",
    start: "2026-03",
    end: "present",
    tech: ["Next.js", "Django", "Supabase", "Telegram bot", "Claude API"],
  },
  { id: "education", kind: "education", tech: [] },
];
