"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { EMAIL, linkTarget, socialLinks } from "@/lib/socials";
import { useInView } from "@/lib/useInView";
import SectionHeading, { AccentTitle } from "@/components/SectionHeading";

export default function Contact() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nEmail: ${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const field = "clay-inset w-full px-5 py-3.5 text-sm";

  return (
    <section className="px-4 pt-36 pb-16 sm:pt-44">
      <div ref={ref} className="mx-auto max-w-6xl">
        <SectionHeading
          as="h1"
          label={t.contact.label}
          title={<AccentTitle parts={t.contact.heading} />}
          subtitle={t.contact.subtitle}
          visible={visible}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Direct contacts */}
          <div
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}
          >
            <p className="mb-5 font-heading font-bold text-ink">{t.contact.orConnect}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {socialLinks.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...linkTarget(s.href)}
                  className="clay group flex items-center gap-4 !rounded-3xl px-5 py-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className={`clay-icon h-11 w-11 shrink-0 ${i % 2 === 0 ? "bg-accent-soft dark:bg-accent text-accent-ink" : "bg-sky text-[#062a3d]"}`}>
                    <s.icon size={19} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-heading font-extrabold text-ink">{s.label}</div>
                    <div className="truncate text-sm text-muted">{s.handle}</div>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto shrink-0 text-muted group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="clay h-fit space-y-4 p-6 sm:p-9"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}
          >
            <h2 className="mb-2 font-heading text-2xl font-extrabold text-ink">{t.contact.formTitle}</h2>
            <input
              type="text" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact.namePlaceholder}
              aria-label={t.contact.namePlaceholder}
              className={field}
            />
            <input
              type="email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.contact.emailPlaceholder}
              aria-label={t.contact.emailPlaceholder}
              className={field}
            />
            <textarea
              required rows={6} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              aria-label={t.contact.messagePlaceholder}
              className={`${field} resize-none`}
            />
            <button type="submit" className="clay-btn clay-btn-primary w-full !py-3.5">
              {sent ? `✓ ${t.contact.sent}` : (<><Send size={16} />{t.contact.send}</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
