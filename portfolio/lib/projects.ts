import type { ProjectId } from "@/lib/translations";

export type ProjectCategory = "ai" | "edtech" | "language" | "business";

export interface Project {
  id: ProjectId;
  demo?: string;
  github?: string;
  /** Screenshot in /public/projects */
  image?: string;
  tech: string[];
  categories: ProjectCategory[];
}

// Language-independent project data; titles and descriptions live in
// t.projects.items[id]. A project with neither `demo` nor `github` is hidden.
export const projects: Project[] = [
  {
    id: "smartjadval",
    demo: "https://smartjadval-1.vercel.app/tsuos",
    image: "/projects/smartjadval.jpg",
    tech: ["React", "FastAPI", "PostgreSQL", "Claude / Gemini"],
    categories: ["ai", "edtech"],
  },
  {
    id: "bilim",
    demo: "https://bilim-checkup.onrender.com",
    image: "/projects/bilim.jpg",
    tech: ["FastAPI", "HTMX", "PostgreSQL", "Gemini API"],
    categories: ["ai", "edtech"],
  },
  {
    id: "resta",
    demo: "https://resta-erp.onrender.com",
    image: "/projects/resta.jpg",
    tech: ["FastAPI", "PostgreSQL", "Claude API", "Telegram bot"],
    categories: ["ai", "business"],
  },
  {
    id: "turkiy",
    demo: "https://turkiy-yozma-yodgorliklar.vercel.app",
    github: "https://github.com/nuraddinov477/turkiy_yozma_yodgorliklar",
    image: "/projects/turkiy.jpg",
    tech: ["React", "Django REST", "PostgreSQL", "Leaflet"],
    categories: ["language"],
  },
  {
    id: "firdavs",
    demo: "https://eduuz-sand.vercel.app",
    image: "/projects/firdavs.jpg",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    categories: ["edtech", "business"],
  },
  {
    id: "hskgo",
    demo: "https://hsk-1-6.vercel.app",
    github: "https://github.com/nuraddinov477/hsk.1_6",
    image: "/projects/hskgo.jpg",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    categories: ["language", "edtech"],
  },
  {
    id: "xitoy",
    demo: "https://xitoy-tili.vercel.app",
    github: "https://github.com/nuraddinov477/Xitoy_tili",
    image: "/projects/xitoy.jpg",
    tech: ["Next.js", "React", "Tailwind CSS"],
    categories: ["language"],
  },
  {
    id: "portfolio",
    github: "https://github.com/nuraddinov477/nuraddinov.uz",
    image: "/projects/portfolio.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: [],
  },
  { id: "kitoblar", tech: ["React", "Node.js", "MongoDB"], categories: [] },
  { id: "adabiyot", tech: ["Next.js", "PostgreSQL", "Tailwind CSS"], categories: [] },
];
