import { useLanguage } from "../../lib/language-context";
import { Globe } from "lucide-react";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
      aria-label={t("buttons.toggleLanguage")}
      className={`inline-flex h-9 w-9 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground ${className}`}
      title={language === "pl" ? "English" : "Polski"}
    >
      <span className="text-xs font-semibold">{language === "pl" ? "EN" : "PL"}</span>
    </button>
  );
}
