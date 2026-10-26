"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Github, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import Sparkles from "@/components/Sparkles";
import { GITHUB_URL, GITHUB_USERNAME, linkTarget, socialLinks } from "@/lib/socials";
import { projects } from "@/lib/projects";
import { experience } from "@/lib/experience";

// Project folders found on the author's machine (Oct 2026); everything else is derived
const PROJECT_COUNT = 20;
const YEARS = 2;

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export default function Hero() {
  const { t, lang } = useLang();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [firstName, ...restName] = t.hero.name.split(" ");

  const stats = [
    { value: PROJECT_COUNT, suffix: "+", label: t.hero.stats.projects },
    { value: projects.filter((p) => p.demo).length, label: t.hero.stats.live },
    { value: experience.filter((e) => e.kind === "work" && e.id !== "independent").length, label: t.hero.stats.orgs },
    { value: YEARS, suffix: "+", label: t.hero.stats.years },
  ];

  // Restart typing when the language changes, otherwise a half-typed
  // role longer than the new one leaves the effect with no branch to take
  useEffect(() => {
    setRoleIndex(0);
    setDisplayed("");
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 50);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, roles]);

  return (
    <section className="relative overflow-hidden px-4 pt-36 pb-8 sm:pt-44 sm:pb-10">
      {/* Soft color blobs */}
      <div className="pointer-events-none absolute -top-20 left-[10%] h-[420px] w-[420px] rounded-full bg-accent/25 blur-[110px] animate-blob" />
      <div className="pointer-events-none absolute top-40 right-[8%] h-[360px] w-[360px] rounded-full bg-sky/30 blur-[110px] animate-blob [animation-delay:-7s]" />
      <div className="hidden dark:block">
        <Sparkles count={35} />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="chip inline-flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.about.statusValue}
        </span>

        <p className="font-heading text-xl sm:text-2xl font-bold text-body">{t.hero.greeting}</p>

        <h1 className="mt-2 font-heading font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl leading-[1.05]">
          <span className="text-accent">{firstName}</span> <span className="text-ink">{restName.join(" ")}</span>
        </h1>

        <div className="mt-5 h-9 flex items-center justify-center">
          <span className="font-heading text-xl sm:text-2xl font-bold text-ink">
            {displayed}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-body">{t.hero.subtitle}</p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/projects" className="clay-btn clay-btn-primary">
            {t.hero.cta}
            <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="clay-btn clay-btn-sky">
            {t.hero.contact}
          </Link>
          <a href={GITHUB_URL} {...linkTarget(GITHUB_URL)} className="clay-btn clay-btn-plain">
            <Github size={16} />
            {GITHUB_USERNAME}
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm font-semibold text-muted">
          <MapPin size={15} className="text-accent" />
          {t.about.locationValue}
        </p>

        {/* Stats */}
        <dl className="clay mx-auto mt-12 grid max-w-2xl grid-cols-2 sm:grid-cols-4 divide-line p-2 sm:divide-x">
          {stats.map((s, i) => (
            // index key: a language switch must not restart the count-up
            <div key={i} className="px-4 py-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-heading text-3xl font-extrabold text-ink tabular-nums">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-1 text-xs font-semibold text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Social links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...linkTarget(s.href)}
              aria-label={s.label}
              className="clay-icon h-11 w-11 bg-surface text-body hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
