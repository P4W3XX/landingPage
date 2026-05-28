import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Language } from "./translations";
import { getTranslation } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pl");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect user's preferred language
    const stored = (typeof window !== "undefined" &&
      localStorage.getItem("language")) as Language | null;

    let initial: Language = "pl";

    if (stored && (stored === "pl" || stored === "en")) {
      initial = stored;
    } else if (typeof window !== "undefined") {
      const browserLang = navigator.language.toLowerCase();
      // If browser language is Polish, use Polish; otherwise use English
      initial = browserLang.startsWith("pl") ? "pl" : "en";
    }

    setLanguageState(initial);
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
    } catch (e) {
      // Ignore (e.g. in private mode)
    }
  };

  const t = (key: string) => getTranslation(language, key);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
