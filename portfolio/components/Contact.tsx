"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { Github, Linkedin, Facebook, Mail, Send, Instagram } from "lucide-react";

const socialLinks = [
  { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/nuraddinovsarvarbek05-prog", handle: "@nuraddinovsarvarbek05-prog" },
  { icon: <Send size={20} />, label: "Telegram", href: "https://t.me/nuraddinov_477", handle: "@nuraddinov_477" },
  { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/nuraddinov__477", handle: "@nuraddinov__477" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/sarvarbek-nuraddinov", handle: "Sarvarbek Nuraddinov" },
  { icon: <Facebook size={20} />, label: "Facebook", href: "https://facebook.com/sarvarbek.nuraddinov", handle: "Sarvarbek Nuraddinov" },
  { icon: <Mail size={20} />, label: "Email", href: "mailto:nuraddinovsarvarbek05@gmail.com", handle: "nuraddinovsarvarbek05@gmail.com" },
];

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nuraddinovsarvarbek05@gmail.com?subject=Portfolio: ${form.name}&body=${form.message}%0A%0AEmail: ${form.email}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-surface-2/30">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div
          className="flex items-center gap-3 mb-4"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <span className="text-accent font-mono text-sm">04.</span>
          <h2 className="text-3xl font-bold text-white">{t.contact.title}</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>
        <p
          className="text-gray-500 mb-12 ml-8 font-mono text-sm"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
        >
          {t.contact.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)", transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s" }}
          >
            <input
              type="text" required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact.namePlaceholder}
              className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/40 transition-colors font-mono text-sm"
            />
            <input
              type="email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.contact.emailPlaceholder}
              className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/40 transition-colors font-mono text-sm"
            />
            <textarea
              required rows={5} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              className="w-full bg-surface-2 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/40 transition-colors font-mono text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-dim text-black font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] font-mono text-sm flex items-center justify-center gap-2"
            >
              {sent ? "✓ Yuborildi!" : (<><Send size={16} />{t.contact.send}</>)}
            </button>
          </form>

          {/* Social links */}
          <div
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s" }}
          >
            <p className="text-gray-500 text-sm font-mono mb-6">{t.contact.orConnect}</p>
            <div className="space-y-3">
              {socialLinks.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-surface-2 border border-white/5 rounded-xl px-5 py-3.5 hover:border-accent/20 hover:bg-surface-3 transition-all duration-200 group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.3 + i * 0.07}s, transform 0.5s ease ${0.3 + i * 0.07}s`,
                  }}
                >
                  <span className="text-gray-500 group-hover:text-accent transition-colors">{s.icon}</span>
                  <div>
                    <div className="text-white text-sm font-medium font-mono">{s.label}</div>
                    <div className="text-gray-600 text-xs">{s.handle}</div>
                  </div>
                  <span className="ml-auto text-gray-700 group-hover:text-accent transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
