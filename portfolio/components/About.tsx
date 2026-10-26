"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { MapPin, Briefcase, GraduationCap, Circle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { AccentTitle } from "@/components/SectionHeading";

export default function About() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();

  const stats = [
    { icon: <MapPin size={16} />, label: t.about.location, value: t.about.locationValue },
    { icon: <Briefcase size={16} />, label: t.about.experience, value: t.about.experienceValue },
    { icon: <GraduationCap size={16} />, label: t.about.education, value: t.about.educationValue },
    { icon: <Circle size={16} className="fill-current" />, label: t.about.status, value: t.about.statusValue },
  ];

  return (
    <section className="px-4 pt-36 pb-16 sm:pt-44">
      <div ref={ref} className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        {/* Text */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
          <span className="chip inline-block mb-5">{t.about.label}</span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight text-ink leading-[1.1]">
            <AccentTitle parts={t.about.heading} />
          </h1>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-body">
            <p>{t.about.description}</p>
            <p>{t.about.description2}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="clay !rounded-2xl flex items-center gap-3 px-4 py-3">
                <span className="clay-icon h-9 w-9 shrink-0 bg-accent-soft dark:bg-accent text-accent-ink">{stat.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-muted">{stat.label}</div>
                  <div className="truncate text-sm font-bold text-ink">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo + "currently working on" */}
        <div
          className="relative mx-auto w-full max-w-md pb-24"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}
        >
          <div className="clay rotate-2 p-4">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-accent/25 via-surface-2 to-sky/30">
              <Image
                src="/photo-nobg.png"
                alt="Nuraddinov Sarvarbek"
                width={420}
                height={540}
                className="relative mx-auto block h-auto w-[78%] pt-6 animate-float"
                priority
              />
            </div>
          </div>

          <div className="clay absolute bottom-0 left-0 right-6 -rotate-2 !rounded-3xl p-5 sm:-left-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <h2 className="font-heading text-xs font-extrabold uppercase tracking-wider text-accent-ink dark:text-accent">{t.about.nowTitle}</h2>
            </div>
            <ul className="space-y-1.5">
              {t.about.now.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-snug text-body">
                  <span className="text-accent font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
