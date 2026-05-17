import { ArrowUpRight, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="hairline-b">
      <div className="container-x grid gap-12 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:pb-32 md:pt-20">
        <div className="md:col-span-8 reveal">
          <div className="label mb-8 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-foreground/50" />
            Studio projektowo-programistyczne · est. 2021
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl lg:text-[5.25rem]">
            Tworzymy nowoczesne strony i aplikacje webowe
            <span className="text-[color:var(--copper-deep)]"> na miarę </span>
            Twojego biznesu.
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Od prostych wizytówek po zaawansowane systemy. Szybka realizacja,
            najnowsze technologie i wsparcie, na którym możesz polegać.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#kontakt" className="btn-primary">
              Rozpocznij projekt <ArrowUpRight size={16} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              Zobacz nasze realizacje <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <aside className="md:col-span-4 reveal" style={{ animationDelay: "120ms" }}>
          <div className="grid grid-cols-2 gap-px bg-border border border-border">
            {[
              { k: "120+", v: "Zrealizowanych projektów" },
              { k: "98/100", v: "Średni PageSpeed" },
              { k: "< 2h", v: "Średni czas odpowiedzi" },
              { k: "5 lat", v: "Doświadczenia zespołu" },
            ].map((s) => (
              <div key={s.v} className="bg-background p-5">
                <div className="font-display text-2xl font-semibold md:text-3xl">{s.k}</div>
                <div className="label mt-2">{s.v}</div>
              </div>
            ))}
          </div>
          <p className="label mt-6">
            [ React ] [ Next.js ] [ Tailwind ] [ TypeScript ] [ Node ]
          </p>
        </aside>
      </div>
    </section>
  );
}
