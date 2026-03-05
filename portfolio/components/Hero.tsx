"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { ArrowDown, Github, Linkedin, Facebook, Mail, Send, Instagram } from "lucide-react";
import Sparkles from "@/components/Sparkles";

const roles = [
  "ML Engineer",
  "Web Developer",
  "Vibe Coder",
  "ML muhandis",
  "Veb dasturchi",
  "ML-инженер",
];

export default function Hero() {
  const { t } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 100);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 60);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Sparkles */}
      <Sparkles count={45} />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-surface-2 border border-accent/20 rounded-full px-4 py-1.5 mb-8 text-sm text-gray-400 font-mono">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          {t.about.statusValue}
        </div>

        {/* Greeting */}
        <p className="text-gray-400 text-lg mb-2 font-mono">{t.hero.greeting}</p>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          {t.hero.name}
        </h1>

        {/* Animated role */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span className="text-2xl sm:text-3xl font-mono text-accent">
            {displayed}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 bg-accent hover:bg-accent-dim text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 font-mono text-sm"
          >
            {t.hero.cta}
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 bg-surface-2 hover:bg-surface-3 text-white border border-white/10 hover:border-accent/30 font-semibold px-6 py-3 rounded-lg transition-all duration-200 font-mono text-sm"
          >
            {t.hero.contact}
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: <Github size={20} />, href: "https://github.com/nuraddinovsarvarbek05-prog", label: "GitHub" },
            { icon: <Send size={20} />, href: "https://t.me/nuraddinov_477", label: "Telegram" },
            { icon: <Instagram size={20} />, href: "https://instagram.com/nuraddinov_477", label: "Instagram" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/sarvarbek-nuraddinov", label: "LinkedIn" },
            { icon: <Facebook size={20} />, href: "https://facebook.com/sarvarbek.nuraddinov", label: "Facebook" },
            { icon: <Mail size={20} />, href: "mailto:nuraddinovsarvarbek05@gmail.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-gray-500 hover:text-accent transition-colors duration-200 hover:scale-110 transform"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
