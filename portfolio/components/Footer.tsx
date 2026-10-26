"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { linkTarget, socialLinks } from "@/lib/socials";

const pages = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 rounded-t-[2.5rem] bg-accent/[0.07] dark:bg-surface/60 border-t border-line px-4 pt-14 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="clay-icon h-10 w-10 bg-accent-soft dark:bg-accent font-heading font-extrabold text-accent-ink">SN</span>
              <span className="font-heading font-extrabold text-lg text-ink">
                Nuraddinov<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">{t.footer.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...linkTarget(s.href)}
                  aria-label={s.label}
                  className="clay-icon h-10 w-10 bg-surface text-body hover:text-accent transition-colors"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-heading font-extrabold text-ink">{t.footer.pages}</h3>
            <ul className="mt-4 space-y-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-body hover:text-accent transition-colors">
                    {t.nav[p.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-extrabold text-ink">{t.footer.contact}</h3>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} {...linkTarget(s.href)} className="text-sm text-body hover:text-accent transition-colors break-all">
                    {s.label === "Email" ? s.handle : s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted">
          <span>© {year} Sarvarbek Nuraddinov. {t.footer.rights}.</span>
          <span className="flex items-center gap-1.5">
            {t.footer.madeWith}
            <Heart size={12} className="text-accent fill-accent" />
            {t.footer.by} Sarvarbek Nuraddinov
          </span>
        </div>
      </div>
    </footer>
  );
}
