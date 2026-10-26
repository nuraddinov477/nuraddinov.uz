"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { MapPin, Briefcase, GraduationCap, Circle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();

  const stats = [
    { icon: <MapPin size={14} />, label: t.about.location, value: t.about.locationValue },
    { icon: <Briefcase size={14} />, label: t.about.experience, value: t.about.experienceValue },
    { icon: <GraduationCap size={14} />, label: t.about.education, value: t.about.educationValue },
    { icon: <Circle size={14} className="text-accent fill-accent" />, label: t.about.status, value: t.about.statusValue },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionHeading index="01" title={t.about.title} visible={visible} />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">

          {/* Left: Text + Stats */}
          <div
            className="space-y-8"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s" }}
          >
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-base">
                {t.about.description}
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                {t.about.description2}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-surface-2 border border-white/5 rounded-xl px-4 py-3 hover:border-accent/30 hover:bg-surface-3 transition-all duration-300"
                >
                  <span className="text-accent">{stat.icon}</span>
                  <div className="min-w-0">
                    <div className="text-gray-500 text-xs font-mono">{stat.label}</div>
                    <div className="text-white text-sm font-medium truncate">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Currently working on */}
            <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.07] to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent">{t.about.nowTitle}</h3>
              </div>
              <ul className="space-y-2">
                {t.about.now.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="text-accent font-mono">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Floating photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <Image
                src="/photo-nobg.png"
                alt="Nuraddinov Sarvarbek"
                width={280}
                height={360}
                className="relative w-[260px] h-auto block"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
