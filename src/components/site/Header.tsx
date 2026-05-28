import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../../lib/language-context";

const NAV_KEYS = [
  { href: "#uslugi", key: "nav.services" },
  { href: "#dlaczego", key: "nav.whyUs" },
  { href: "#portfolio", key: "nav.portfolio" },
  { href: "#opieka", key: "nav.care" },
  { href: "#opinie", key: "nav.testimonials" },
  { href: "#faq", key: "nav.faq" },
  { href: "#kontakt", key: "nav.contact" },
];

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md hairline-b" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="inline-block h-2.5 w-2.5 bg-foreground" aria-hidden />
          Studio Kresa
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_KEYS.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-sm text-foreground/80 hover:text-foreground"
            >
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a href="#kontakt" className="btn-primary hidden md:inline-flex">
            {t("buttons.freeQuote")}
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-border"
            aria-label={open ? t("buttons.closeMenu") : t("buttons.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden hairline-b bg-background">
          <nav className="container-x flex flex-col py-4">
            {NAV_KEYS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground/90"
              >
                {t(n.key)}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 justify-center"
            >
              {t("buttons.freeQuote")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
