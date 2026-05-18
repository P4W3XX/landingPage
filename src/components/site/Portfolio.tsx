import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  image: string;
  link: string;
  swatch: string[];
}

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        if (data) setProjects(data);
      });
  }, []);

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
          {projects.map((p) => (
            <article key={p.id} className="card-hover group border border-border bg-card">
              <div
                className="relative aspect-[4/3] overflow-hidden border-b border-border"
                style={{ background: p.swatch[0] }}
              >
                <div
                  className="absolute inset-x-10 bottom-10 top-16 border"
                  style={{ borderColor: p.swatch[1], background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="flex h-6 items-center gap-1 border-b px-2"
                    style={{ borderColor: p.swatch[1] }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.swatch[1] }} />
                    <span className="h-1.5 w-1.5 rounded-full opacity-60" style={{ background: p.swatch[1] }} />
                    <span className="h-1.5 w-1.5 rounded-full opacity-30" style={{ background: p.swatch[1] }} />
                  </div>
                  <div className="overflow-hidden h-76">
                    <img src={p.image} alt={p.title} className="h-auto w-full object-contain" />
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
                      <span key={t} className="border border-border px-2 py-1">
                        [ {t} ]
                      </span>
                    ))}
                  </div>
                </div>
                {p.link && p.link !== "#" && (
                  <div className="flex items-center gap-1">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-wider"
                    >
                      Zobacz projekt
                    </a>
                    <ArrowUpRight size={14} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
