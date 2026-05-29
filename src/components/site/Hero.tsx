import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useLanguage } from "../../lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="hairline-b">
      <div className="container-x grid gap-12 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:pb-32 md:pt-20">
        <div className="md:col-span-8 reveal">
          <div className="label mb-8 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-foreground/50" />
            {t("hero.subtitle")}
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl lg:text-[5.25rem]">
            {t("hero.title")}
            <span className="text-[color:var(--copper-deep)]"> {t("hero.titleHighlight")} </span>
            {t("hero.titleEnd")}
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            {t("hero.description")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#kontakt" title="Skontaktuj się z nami" className="btn-primary">
              {t("hero.cta1")} <ArrowUpRight size={16} />
            </a>
            <a href="#portfolio" title="Zobacz nasze realizacje" className="btn-ghost">
              {t("hero.cta2")} <ArrowRight size={16} />
            </a>
            <a href="#opieka" title="Dowiedz się więcej o opiece nad stroną" className="btn-ghost">
              {t("hero.cta3")} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <aside className="md:col-span-4 reveal" style={{ animationDelay: "120ms" }}>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            {t("hero.stats").map((s: any) => (
              <div key={s.v} className="bg-background p-5">
                <div className="font-display text-2xl font-semibold md:text-3xl">{s.k}</div>
                <div className="label mt-2">{s.v}</div>
              </div>
            ))}
          </div>
          <p className="label mt-6 leading-relaxed">{t("hero.tech")}</p>
        </aside>
      </div>
    </section>
  );
}
