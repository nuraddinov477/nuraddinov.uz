"use client";

import { useLang } from "@/context/LanguageContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-mono text-gray-600">
        <div className="flex items-center gap-1.5">
          <span>{t.footer.madeWith}</span>
          <Heart size={12} className="text-accent fill-accent" />
          <span>{t.footer.by} Sarvarbek Nuraddinov</span>
        </div>
        <div>
          © {year} Sarvarbek Nuraddinov. {t.footer.rights}.
        </div>
      </div>
    </footer>
  );
}
