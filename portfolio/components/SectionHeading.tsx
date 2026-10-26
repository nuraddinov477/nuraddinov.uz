import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  visible: boolean;
  /** h1 for page headers, h2 for sections */
  as?: "h1" | "h2";
  align?: "center" | "left";
}

export default function SectionHeading({ label, title, subtitle, visible, as: Tag = "h2", align = "center" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div
      className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      {label && <span className="chip inline-block mb-4">{label}</span>}
      <Tag className={`font-heading font-extrabold text-ink tracking-tight ${Tag === "h1" ? "text-4xl sm:text-6xl" : "text-3xl sm:text-5xl"}`}>
        {title}
      </Tag>
      {subtitle && <p className="mt-4 text-base sm:text-lg leading-relaxed text-body">{subtitle}</p>}
    </div>
  );
}

/** Renders [before, accent, after] with the middle part highlighted */
export function AccentTitle({ parts }: { parts: readonly string[] }) {
  const [before, accent, after] = parts;
  // Chinese doesn't put spaces between words
  const gap = (s: string) => (/[　-鿿]/.test(s) ? "" : " ");
  return (
    <>
      {before}
      {gap(before)}
      <span className="text-accent">{accent}</span>
      {after ? `${gap(after)}${after}` : null}
    </>
  );
}
