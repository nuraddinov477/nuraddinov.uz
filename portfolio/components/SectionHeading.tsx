interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
  visible: boolean;
}

export default function SectionHeading({ index, title, subtitle, visible }: SectionHeadingProps) {
  return (
    <>
      <div
        className="flex items-center gap-3 mb-4"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
      >
        <span className="text-accent font-mono text-sm">{index}.</span>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="flex-1 h-px bg-white/5 ml-4" />
      </div>
      {subtitle && (
        <p
          className="text-gray-500 mb-12 ml-8 font-mono text-sm"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}
