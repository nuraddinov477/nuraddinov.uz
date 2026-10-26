"use client";

import { Code2, PenTool, Rocket, Search, type LucideIcon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useInView } from "@/lib/useInView";
import SectionHeading from "@/components/SectionHeading";

const icons: LucideIcon[] = [Search, PenTool, Code2, Rocket];

export default function Process() {
  const { t } = useLang();
  const [ref, visible] = useInView<HTMLDivElement>();

  return (
    <section className="px-4 py-20">
      <div ref={ref} className="mx-auto max-w-6xl">
        <SectionHeading label={t.process.label} title={t.process.title} subtitle={t.process.subtitle} visible={visible} />

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                className="clay p-7 text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <span
                  className={`clay-icon mx-auto h-16 w-16 rounded-3xl ${
                    i % 2 === 0 ? "bg-accent-soft dark:bg-accent text-accent-ink" : "bg-sky text-[#062a3d]"
                  }`}
                >
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-extrabold text-ink">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
