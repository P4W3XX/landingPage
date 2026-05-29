import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../../lib/language-context";

export function Care() {
  const { t } = useLanguage();
  return (
    <section id="opieka" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow={t("care.eyebrow")}
          title={t("care.title")}
          intro={t("care.intro")}
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          <article className="flex flex-col bg-background p-8 md:p-10">
            <div className="flex items-center justify-between">
              <span className="label">{t("care.free.label")}</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--copper-deep)]">
                {t("care.free.badge")}
              </span>
            </div>
            <h3 className="mt-10 font-display text-3xl font-semibold md:text-4xl">
              {t("care.free.title")}
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold tracking-tight">
                {t("care.free.price")}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {t("care.free.priceNote")}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {t("care.free.description")}
            </p>
            <ul className="mt-8 space-y-3">
              {t("care.free.includes").map((b: string) => (
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
                {t("care.paid.label")}
              </span>
              <span className="border border-[color:var(--copper)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--copper)]">
                {t("care.paid.badge")}
              </span>
            </div>
            <h3 className="mt-10 font-display text-3xl font-semibold md:text-4xl">
              {t("care.paid.title")}
            </h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-5xl font-semibold tracking-tight">
                {t("care.paid.price")}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-background/60">
                {t("care.paid.priceNote")}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-background/70">{t("care.paid.description")}</p>
            <ul className="mt-8 space-y-3">
              {t("care.paid.includes").map((b: string) => (
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
              {t("care.paid.button")}
            </a>
          </article>
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-x-auto border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                {t("care.comparisonTable.headers").map((header: string, i: number) => (
                  <th
                    key={i}
                    className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t("care.comparisonTable.rows").map((row: (string | boolean)[], i: number) => (
                <tr key={i} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4">{row[0] as string}</td>
                  <td className="px-6 py-4 text-muted-foreground">{renderCell(row[1])}</td>
                  <td className="px-6 py-4">{renderCell(row[2])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-xs text-muted-foreground">{t("care.footer")}</p>
      </div>
    </section>
  );
}

function renderCell(value: boolean | string) {
  if (value === true) return <Check size={16} className="text-[color:var(--copper-deep)]" />;
  if (value === false) return <span className="text-muted-foreground/50">—</span>;
  return <span className="font-mono text-xs uppercase tracking-wider">{value}</span>;
}
