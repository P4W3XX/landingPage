import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../../lib/language-context";

export function Services() {
  const { t } = useLanguage();
  const SERVICES = t("services.items");

  return (
    <section id="uslugi" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="01" eyebrow={t("services.eyebrow")} title={t("services.title")} />

        <div className="mt-14 grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.no}
              className="card-hover group border border-transparent hover:border-border! flex flex-col bg-background p-8 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="label">{s.no}</span>
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="mt-10 font-display text-2xl font-semibold md:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-8 space-y-2 font-mono text-xs uppercase tracking-wider text-foreground/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="inline-block h-px w-4 bg-foreground/40" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
