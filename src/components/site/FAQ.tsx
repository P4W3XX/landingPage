import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export const FAQ_ITEMS = [
  {
    q: "Jak długo trwa stworzenie strony?",
    a: "Prosta strona wizytówkowa lub landing page to zazwyczaj 2–4 tygodnie. Rozbudowane strony korporacyjne 6–10 tygodni. Dla każdego projektu przygotowujemy realny harmonogram już na etapie wyceny.",
  },
  {
    q: "Ile kosztuje wykonanie aplikacji webowej?",
    a: "Koszt aplikacji zależy od zakresu funkcji, integracji i skali. Proste MVP zaczynają się od ok. 15 000 PLN, większe systemy od 40 000 PLN wzwyż. Po krótkiej rozmowie potrafimy podać konkretny widełkowy zakres.",
  },
  {
    q: "Czy pomagacie w rejestracji domeny i hostingu?",
    a: "Tak. Przeprowadzamy Cię przez wybór i konfigurację domeny oraz hostingu — możemy też wziąć te kwestie w pełni na siebie w ramach pakietu opieki.",
  },
  {
    q: "Czy dostanę panel CMS do samodzielnej edycji?",
    a: "Świadomie nie wdrażamy panelu CMS — dzięki temu strona jest szybsza, bezpieczniejsza i tańsza w utrzymaniu. Wszystkie edycje treści, grafik czy nowych sekcji po wdrożeniu robimy za Ciebie w ramach opieki technicznej, zwykle w ciągu 24–48h od zgłoszenia.",
  },
  {
    q: "Co dzieje się po wdrożeniu projektu?",
    a: "Pierwszy miesiąc po oddaniu projektu to bezpłatna opieka — poprawiamy drobne błędy, doradzamy przy pierwszych zmianach i pilnujemy stabilności. Po tym okresie możesz wykupić stałą opiekę techniczną za 200 zł miesięcznie: edycje treści, monitoring, aktualizacje, backupy i priorytetową reakcję na incydenty.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="05"
          eyebrow="FAQ"
          title="Najczęstsze pytania, zanim do nas napiszesz."
        />

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
