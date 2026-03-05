"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML / CSS", level: 95 },
    { name: "Vue.js", level: 70 },
  ],
  backend: [
    { name: "Python / FastAPI", level: 85 },
    { name: "Node.js / Express", level: 80 },
    { name: "PostgreSQL", level: 70 },
    { name: "REST API / GraphQL", level: 88 },
    { name: "MongoDB", level: 72 },
  ],
  ml: [
    { name: "PyTorch", level: 82 },
    { name: "scikit-learn", level: 85 },
    { name: "Pandas / NumPy", level: 88 },
    { name: "LLM / Transformers", level: 75 },
    { name: "Computer Vision", level: 70 },
  ],
};

const badges = [
  "Python", "PyTorch", "scikit-learn", "Pandas", "NumPy",
  "Transformers", "LangChain", "OpenCV", "JavaScript", "TypeScript",
  "React", "Next.js", "Vue.js", "Node.js", "FastAPI",
  "PostgreSQL", "MongoDB", "Docker", "Git", "Tailwind CSS",
  "REST API", "GraphQL", "Figma", "Linux", "Vercel",
];

function SkillBar({ name, level, animated }: { name: string; level: number; animated: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-400 text-xs font-mono">{name}</span>
        <span className="text-accent text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-dim rounded-full transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    { key: "ml" as const, label: "Machine Learning", data: skillsData.ml },
    { key: "frontend" as const, label: t.skills.categories.frontend, data: skillsData.frontend },
    { key: "backend" as const, label: t.skills.categories.backend, data: skillsData.backend },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-surface-2/30">
      <div className="max-w-5xl mx-auto">
        <div
          ref={headerRef}
          className="flex items-center gap-3 mb-4"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <span className="text-accent font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-white">{t.skills.title}</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>
        <p
          className="text-gray-500 mb-12 ml-8 font-mono text-sm"
          style={{ opacity: headerVisible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
        >
          {t.skills.subtitle}
        </p>

        {/* Tech badges with stagger */}
        <div className="flex flex-wrap gap-2 mb-14">
          {badges.map((badge, i) => (
            <span
              key={badge}
              className="px-3 py-1.5 text-xs font-mono bg-surface-2 border border-white/5 text-gray-400 rounded-full hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.4s ease ${0.1 + i * 0.03}s, transform 0.4s ease ${0.1 + i * 0.03}s`,
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Skill bars */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <div
              key={cat.key}
              className="space-y-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease ${ci * 0.15}s, transform 0.6s ease ${ci * 0.15}s`,
              }}
            >
              <h3 className="text-white font-semibold font-mono text-sm border-b border-white/5 pb-2">
                <span className="text-accent">/ </span>{cat.label}
              </h3>
              {cat.data.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} animated={animated} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
