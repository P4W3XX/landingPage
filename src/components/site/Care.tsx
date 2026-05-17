import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FREE_INCLUDES = [
  "Poprawki drobnych błędów i niedoróbek",
  "Konsultacje przy pierwszych zmianach treści",
  "Monitoring stabilności i wydajności",
  "Wsparcie e-mailowe w dni robocze",
];

const PAID_INCLUDES = [
  "Edycje treści, grafik i nowych sekcji — robimy je za Ciebie",
  "Aktualizacje stacku, bibliotek i zależności bezpieczeństwa",
  "Automatyczne backupy + plan przywrócenia",
  "Monitoring uptime 24/7 i alerty wydajnościowe",
  "Priorytetowa reakcja na incydenty (SLA do 4h w dni robocze)",
  "Drobne zmiany rozwojowe do 2h miesięcznie w cenie",
];

export function Care() {
  return (
    <section id="opieka" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow="Opieka po wdrożeniu"
          title="Nie zostawiamy Cię z gotowym projektem samego."
          intro="Świadomie nie wdrażamy panelu CMS — to my odpowiadamy za jakość kodu i treści. Wszystkie zmiany po starcie (teksty, grafiki, nowe sekcje, integracje) realizujemy w ramach opieki, według ustalonego SLA."
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {/* Free month */}
          <article className="flex flex-col bg-background p-8 md:p-10">
            <div className="flex items-center justify-between">
              <span className="label">P/01 — Start</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--copper-deep)]">
                W cenie projektu
              </span>
            </div>
            <h3 className="mt-10 font-display text-3xl font-semibold md:text-4xl">
              Pierwszy miesiąc gratis
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold tracking-tight">0 zł</span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                / 30 dni po wdrożeniu
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Okres docierania projektu na produkcji. Reagujemy szybko, doradzamy i pilnujemy, żeby
              start był spokojny.
            </p>
            <ul className="mt-8 space-y-3">
              {FREE_INCLUDES.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--copper-deep)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Paid care */}
          <article className="relative flex flex-col bg-foreground p-8 text-background md:p-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-background/60">
                P/02 — Care
              </span>
              <span className="border border-[color:var(--copper)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--copper)]">
                Rekomendowane
              </span>
            </div>
            <h3 className="mt-10 font-display text-3xl font-semibold md:text-4xl">
              Stała opieka techniczna
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold tracking-tight">200 zł</span>
              <span className="font-mono text-xs uppercase tracking-wider text-background/60">
                / miesiąc, netto
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-background/70">
              Po pierwszym miesiącu. Bez umowy na czas określony — możesz zrezygnować w dowolnym
              momencie.
            </p>
            <ul className="mt-8 space-y-3">
              {PAID_INCLUDES.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--copper)]" />
                  <span className="text-background/90">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="mt-10 inline-flex w-fit items-center gap-2 border border-background bg-background px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-[color:var(--copper)] hover:border-[color:var(--copper)]"
            >
              Zapytaj o opiekę
            </a>
          </article>
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-x-auto border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Zakres
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  1 miesiąc gratis
                </th>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  200 zł / mies.
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Poprawki drobnych błędów", true, true],
                ["Edycje treści i grafik (robimy za Ciebie)", "Doraźnie", true],
                ["Aktualizacje bibliotek i bezpieczeństwa", false, true],
                ["Backupy i plan przywrócenia", false, true],
                ["Monitoring uptime 24/7", "Podstawowy", true],
                ["SLA reakcji do 4h (dni robocze)", false, true],
                ["Drobne zmiany rozwojowe (do 2h / mies.)", false, true],
              ].map(([label, free, paid], i) => (
                <tr key={i} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4">{label as string}</td>
                  <td className="px-6 py-4 text-muted-foreground">{renderCell(free)}</td>
                  <td className="px-6 py-4">{renderCell(paid)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
          Świadomie nie wdrażamy panelu CMS — dzięki temu strona jest szybsza, bezpieczniejsza i
          tańsza w utrzymaniu. Wszystkie zmiany po wdrożeniu robimy za Ciebie w ramach opieki,
          zwykle w ciągu 24–48h.
        </p>
      </div>
    </section>
  );
}

function renderCell(value: boolean | string) {
  if (value === true) return <Check size={16} className="text-[color:var(--copper-deep)]" />;
  if (value === false) return <span className="text-muted-foreground/50">—</span>;
  return <span className="font-mono text-xs uppercase tracking-wider">{value}</span>;
}
