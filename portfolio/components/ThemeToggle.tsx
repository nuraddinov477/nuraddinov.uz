"use client";

import { Moon, Sun } from "lucide-react";

// The initial theme is set before paint by the inline script in app/layout.tsx;
// icons switch purely via the `dark` class, so there's no hydration mismatch.
export default function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode, blocked storage)
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={label}
      title={label}
      className="clay-icon h-10 w-10 shrink-0 bg-surface text-ink hover:text-accent transition-colors"
    >
      <Sun size={18} className="dark:hidden" />
      <Moon size={18} className="hidden dark:block" />
    </button>
  );
}
