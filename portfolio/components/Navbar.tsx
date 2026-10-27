"use client";

import { useEffect, useState } from "react";
import TransitionLink from "@/components/TransitionLink";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { Lang } from "@/lib/translations";
import ThemeToggle from "@/components/ThemeToggle";

const langs: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "zh", label: "ZH" },
];

const routes = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu after navigating
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav className="clay mx-auto max-w-6xl !rounded-3xl px-3 sm:px-5 py-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <TransitionLink href="/" className="group flex items-center gap-2.5 shrink-0" aria-label={t.nav.home}>
            <span className="clay-icon h-10 w-10 bg-accent-soft dark:bg-accent font-heading font-extrabold text-accent-ink transition-transform group-hover:-rotate-6">
              SN
            </span>
            <span className="hidden sm:block font-heading font-extrabold text-lg text-ink">
              Nuraddinov<span className="text-accent">.</span>
            </span>
          </TransitionLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {routes.map((r) => (
              <TransitionLink
                key={r.href}
                href={r.href}
                aria-current={isActive(r.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 font-heading font-bold text-sm transition-colors ${
                  isActive(r.href) ? "bg-accent/15 text-accent-ink dark:text-accent" : "text-body hover:text-ink"
                }`}
              >
                {t.nav[r.key]}
              </TransitionLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="flex items-center rounded-full bg-surface-2 p-1">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-full px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold transition-colors ${
                    lang === l.code ? "bg-accent-soft text-accent-ink dark:bg-accent shadow-sm" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <ThemeToggle label={t.ui.theme} />

            {/* Mobile menu toggle */}
            <button
              className="md:hidden clay-icon h-10 w-10 bg-surface text-ink"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t.ui.menu}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — solid background so the page underneath never shows through */}
      {menuOpen && (
        <div className="md:hidden mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-surface p-3 shadow-xl">
          {routes.map((r) => (
            <TransitionLink
              key={r.href}
              href={r.href}
              className={`block rounded-2xl px-4 py-3 font-heading font-bold transition-colors ${
                isActive(r.href) ? "bg-accent/15 text-accent-ink dark:text-accent" : "text-body hover:bg-surface-2"
              }`}
            >
              {t.nav[r.key]}
            </TransitionLink>
          ))}
        </div>
      )}
    </header>
  );
}
