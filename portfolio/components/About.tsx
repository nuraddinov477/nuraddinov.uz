"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { MapPin, Briefcase, Circle } from "lucide-react";

export default function About() {
  const { t } = useLang();

  const stats = [
    { icon: <MapPin size={14} />, label: t.about.location, value: t.about.locationValue },
    { icon: <Briefcase size={14} />, label: t.about.experience, value: t.about.experienceValue },
    { icon: <Circle size={14} className="text-accent fill-accent" />, label: t.about.status, value: t.about.statusValue },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-accent font-mono text-sm">01.</span>
          <h2 className="text-3xl font-bold text-white">{t.about.title}</h2>
          <div className="flex-1 h-px bg-white/5 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text + Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed text-base">
                {t.about.description}
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                {t.about.description2}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-surface-2 border border-white/5 rounded-xl px-4 py-3 hover:border-accent/30 hover:bg-surface-3 transition-all duration-300"
                >
                  <span className="text-accent">{stat.icon}</span>
                  <span className="text-gray-500 text-sm font-mono">{stat.label}:</span>
                  <span className="text-white text-sm font-medium ml-auto">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl overflow-hidden border border-accent/20">
                <Image
                  src="/photo.jpg.png"
                  alt="Nuraddinov Sarvarbek"
                  width={280}
                  height={360}
                  className="w-[260px] h-auto block"
                  priority
                />
                {/* Vignette overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "radial-gradient(ellipse 75% 70% at 50% 45%, transparent 40%, #0a0a0a 85%)"
                }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
