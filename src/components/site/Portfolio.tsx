import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const PROJECTS = [
  {
    title: "Northwind Capital",
    category: "Strona korporacyjna",
    year: "2025",
    tags: ["Next.js", "Tailwind", "Sanity"],
    swatch: ["#1a1a1a", "#c08457"],
  },
  {
    title: "Atelier Ferro",
    category: "Sklep internetowy",
    year: "2024",
    tags: ["Shopify", "Hydrogen", "Stripe"],
    swatch: ["#efece5", "#3a3a3a"],
  },
  {
    title: "Plan B Logistyka",
    category: "Aplikacja webowa",
    year: "2024",
    tags: ["React", "Node", "Postgres"],
    swatch: ["#0f1a1a", "#8aa399"],
  },
  {
    title: "Rytm Studio",
    category: "Portfolio kreatywne",
    year: "2025",
    tags: ["React", "GSAP", "Tailwind"],
    swatch: ["#f6f3ee", "#b3551f"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Ostatnie projekty"
          title="Wybrane realizacje z ostatnich dwunastu miesięcy."
          intro="Pracujemy z markami, które rozumieją, że strona to nie koszt — to inwestycja w sposób, w jaki świat ich postrzega."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card-hover group border border-border bg-card">
              <div
                className="relative aspect-[4/3] overflow-hidden border-b border-border"
                style={{ background: p.swatch[0] }}
              >
                <div
                  className="absolute inset-x-10 bottom-10 top-16 border"
                  style={{ borderColor: p.swatch[1], background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex h-6 items-center gap-1 border-b px-2" style={{ borderColor: p.swatch[1] }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.swatch[1] }} />
                    <span className="h-1.5 w-1.5 rounded-full opacity-60" style={{ background: p.swatch[1] }} />
                    <span className="h-1.5 w-1.5 rounded-full opacity-30" style={{ background: p.swatch[1] }} />
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="h-2 w-1/2" style={{ background: p.swatch[1], opacity: 0.6 }} />
                    <div className="h-2 w-3/4" style={{ background: p.swatch[1], opacity: 0.35 }} />
                    <div className="h-2 w-2/5" style={{ background: p.swatch[1], opacity: 0.35 }} />
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      <div className="aspect-square" style={{ background: p.swatch[1], opacity: 0.25 }} />
                      <div className="aspect-square" style={{ background: p.swatch[1], opacity: 0.4 }} />
                      <div className="aspect-square" style={{ background: p.swatch[1], opacity: 0.2 }} />
                    </div>
                  </div>
                </div>
                <div className="label absolute left-4 top-4" style={{ color: p.swatch[1] }}>
                  {p.year} / {p.category}
                </div>
              </div>

              <div className="flex items-start justify-between gap-6 p-6 md:p-8">
                <div>
                  <h3 className="font-display text-xl font-semibold md:text-2xl">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider text-foreground/70">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-border px-2 py-1">[ {t} ]</span>
                    ))}
                  </div>
                </div>
                <a href="#kontakt" className="link-underline inline-flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-wider">
                  Zobacz case study <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
