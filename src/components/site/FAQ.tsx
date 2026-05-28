import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../../lib/language-context";

export function FAQ() {
  const { t } = useLanguage();
  const FAQ_ITEMS = t("faq.items");
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="05" eyebrow={t("faq.eyebrow")} title={t("faq.title")} />

        <div className="mt-12 grid gap-0 md:grid-cols-12">
          <div className="md:col-span-10 md:col-start-3">
            <ul className="border-t border-border">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[color:var(--copper-deep)]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-medium md:text-xl">{item.q}</span>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                    {isOpen && (
                      <div className="reveal pb-7 pr-10 text-muted-foreground md:max-w-2xl">
                        {item.a}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
