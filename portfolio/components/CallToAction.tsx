"use client";

import TransitionLink from "@/components/TransitionLink";
import { Mail, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { TELEGRAM_URL, linkTarget } from "@/lib/socials";
import { useInView } from "@/lib/useInView";

export default function CallToAction() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="px-4 py-20">
      <div
        ref={ref}
        className="clay relative mx-auto max-w-5xl overflow-hidden px-6 py-14 sm:px-12 sm:py-16 text-center"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
      >
        <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-sky/25 blur-3xl" />

        <h2 className="relative font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">{t.cta.title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base sm:text-lg text-body">{t.cta.text}</p>
        <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <TransitionLink href="/contact" className="clay-btn clay-btn-primary">
            <Mail size={16} />
            {t.cta.contact}
          </TransitionLink>
          <a href={TELEGRAM_URL} {...linkTarget(TELEGRAM_URL)} className="clay-btn clay-btn-sky">
            <Send size={16} />
            {t.cta.telegram}
          </a>
        </div>
      </div>
    </section>
  );
}
