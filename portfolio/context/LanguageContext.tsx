"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations } from "@/lib/translations";

const STORAGE_KEY = "lang";
const langs = Object.keys(translations) as Lang[];

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)[Lang];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  // Restore the language chosen on a previous visit
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && langs.includes(saved)) setLangState(saved);
    } catch {
      // localStorage unavailable (private mode, blocked storage)
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable (private mode, blocked storage)
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
