# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a personal portfolio website located in the `portfolio/` subdirectory. It is a Next.js 15 app with TypeScript and Tailwind CSS.

## Commands

All commands must be run from the `portfolio/` directory:

```bash
cd portfolio
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Single-page app** — `app/page.tsx` renders all sections sequentially: `Navbar → Hero → About → Experience → Skills → Projects → Contact → Footer`. Sections use `components/SectionHeading.tsx` for the numbered title and `lib/useInView.ts` for scroll-in reveals; the Navbar highlights the section in view (ids: `about`, `experience`, `skills`, `projects`, `contact`).

**SEO** — `app/layout.tsx` holds metadata (`metadataBase` = `SITE_URL`) and Person JSON-LD; `app/opengraph-image.tsx`, `app/icon.tsx`, `app/sitemap.ts`, `app/robots.ts` are generated at build time.

**Internationalization (i18n)** — Custom, no external library:
- `lib/translations.ts` — All UI strings for `uz` (Uzbek), `ru` (Russian), `en` (English), and `zh` (Chinese), exported as a typed `translations` object. Default language is Uzbek (`uz`).
- `context/LanguageContext.tsx` — React context providing `{ lang, setLang, t }`. `t` is the translations object for the active language. Components consume it via the `useLang()` hook. The chosen language is saved to `localStorage` and mirrored to `<html lang>`.
- `LanguageProvider` wraps the entire app in `app/layout.tsx`.

When adding new translatable strings, add keys to all four language objects in `lib/translations.ts` — never hardcode user-visible text in components.

**Projects & experience data** — Language-independent data lives in `lib/projects.ts` (links, screenshot in `public/projects/`, tech, filter categories) and `lib/experience.ts` (timeline periods as `"YYYY-MM"`, links, tech); their texts live in `t.projects.items[id]` and `t.experience.items[id]`, keyed by `ProjectId` / `ExperienceId` (derived from the `uz` translations, so every language must define the same ids). A project card links to its demo, falling back to the repo; projects with neither are hidden. Hero stats (live sites, organizations) are derived from this data. Facts here come from the author's real projects — don't invent roles, dates, or numbers.

**Contact info** — `SITE_URL`, GitHub username, email, and social links live in `lib/socials.ts` (shared by Hero, Projects, Contact, layout metadata). Use `linkTarget(href)` for link `target`/`rel` so `mailto:` links don't open a blank tab.

**Styling** — Tailwind CSS with a custom dark theme. Core palette defined in `tailwind.config.ts`:
- Background: `#0a0a0a` (page), `#111111` / `#1a1a1a` / `#222222` (surfaces)
- Accent: `#22c55e` (green)
- Fonts: `Inter` (sans), `JetBrains Mono` (mono) — loaded from Google Fonts in layout

**Animations** — Scroll-in animations use `IntersectionObserver` (`lib/useInView.ts`) + inline `transition` styles (`framer-motion` is installed but currently unused); custom Tailwind keyframes (`fade-up`, `fade-in`, `float`, `twinkle`, `blink`) for CSS animations. `components/Sparkles.tsx` is a decorative animated component.
