"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const { t } = useLang();
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

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className="flex items-center gap-3 mb-4"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <span className="text-accent font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">{t.projects.title}</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>
        <p
          className="text-gray-500 mb-12 ml-8 font-mono text-sm"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
        >
          {t.projects.subtitle}
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col bg-surface-2 border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-mono font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors" aria-label="Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-white font-semibold mb-2 font-mono">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-accent/70 bg-accent/5 border border-accent/10 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
        >
          <a href="https://github.com/nuraddinovsarvarbek05-prog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-mono text-sm hover:underline">
            <Github size={16} />
            GitHub da barchasi →
          </a>
        </div>
      </div>
    </section>
  );
}
