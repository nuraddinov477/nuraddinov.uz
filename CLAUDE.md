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

**Pages** (App Router, all statically prerendered):
- `/` — `Hero → Process → FeaturedProjects → CallToAction`
- `/about` — `About → Experience → Skills → CallToAction`
- `/projects` — `Projects` (filters + grid) `→ CallToAction`
- `/contact` — `Contact` (contact cards + mailto form)

`app/layout.tsx` renders the shared floating `Navbar` (route links, active via `usePathname`) and column `Footer`; `app/template.tsx` fades each page in. Each page exports its own `metadata` (title + `alternates.canonical`). Sections use `components/SectionHeading.tsx` (centered label + title; `AccentTitle` highlights the middle of a `[before, accent, after]` string array) and `lib/useInView.ts` for scroll-in reveals. Project cards are shared via `components/ProjectCard.tsx`; `featured: true` in `lib/projects.ts` puts a project on the home page.

**SEO** — `app/layout.tsx` holds metadata (`metadataBase` = `SITE_URL`) and Person JSON-LD; `app/opengraph-image.tsx`, `app/icon.tsx`, `app/sitemap.ts`, `app/robots.ts` are generated at build time.

**Internationalization (i18n)** — Custom, no external library:
- `lib/translations.ts` — All UI strings for `uz` (Uzbek), `ru` (Russian), `en` (English), and `zh` (Chinese), exported as a typed `translations` object. Default language is Uzbek (`uz`).
- `context/LanguageContext.tsx` — React context providing `{ lang, setLang, t }`. `t` is the translations object for the active language. Components consume it via the `useLang()` hook. The chosen language is saved to `localStorage` and mirrored to `<html lang>`.
- `LanguageProvider` wraps the entire app in `app/layout.tsx`.

When adding new translatable strings, add keys to all four language objects in `lib/translations.ts` — never hardcode user-visible text in components.

**Projects & experience data** — Language-independent data lives in `lib/projects.ts` (links, screenshot in `public/projects/`, tech, filter categories) and `lib/experience.ts` (timeline periods as `"YYYY-MM"`, links, tech); their texts live in `t.projects.items[id]` and `t.experience.items[id]`, keyed by `ProjectId` / `ExperienceId` (derived from the `uz` translations, so every language must define the same ids). A project card links to its demo, falling back to the repo; projects with neither are hidden. Hero stats (live sites, organizations) are derived from this data. Facts here come from the author's real projects — don't invent roles, dates, or numbers.

**Contact info** — `SITE_URL`, GitHub username, email, and social links live in `lib/socials.ts` (shared by Hero, Footer, CallToAction, Contact, layout metadata). Use `linkTarget(href)` for link `target`/`rel` so `mailto:` links don't open a blank tab.

**Styling** — "Clay" (soft neumorphic) design with light/dark themes:
- Colors are CSS variables in `app/globals.css` (`:root` = light, `.dark` = dark) exposed as Tailwind colors in `tailwind.config.ts`: `bg`, `surface`, `surface-2`, `ink` (headings), `body` (text), `muted`, `line`, `accent` (green), `accent-soft`, `accent-ink`, `sky`. Use these tokens, not raw colors, so both themes work.
- Component classes in `globals.css`: `.clay` (card), `.clay-btn` + `.clay-btn-primary|sky|plain` (always combine base + variant), `.clay-icon` (icon tile), `.clay-inset` (form field), `.chip` (tag).
- Theme: `darkMode: "class"`; an inline script in `layout.tsx` sets `dark` on `<html>` before paint (saved choice in `localStorage.theme`, else OS preference); `components/ThemeToggle.tsx` flips it. Icons that differ per theme switch with `dark:hidden` / `hidden dark:block`, never with state.
- Fonts: `Nunito` (headings, `font-heading`) and `Manrope` (body, `font-sans`) via `next/font/google` — both cover Cyrillic for the Russian translation.

**Animations** — Scroll-in animations use `IntersectionObserver` (`lib/useInView.ts`) + inline `transition` styles (`framer-motion` is installed but currently unused); custom Tailwind keyframes (`fade-up`, `page-in`, `float`, `blob`, `blink`) for CSS animations; `prefers-reduced-motion` disables them. `components/Sparkles.tsx` is shown in the hero only in dark mode.
