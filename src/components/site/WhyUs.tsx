import { MessageSquare, Timer, Code2, Gauge, LifeBuoy, Compass } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  { icon: MessageSquare, title: "Błyskawiczny kontakt", text: "Odpisujemy w rekordowo krótkim czasie. Przejrzysta komunikacja bez owijania w bawełnę na każdym etapie współpracy." },
  { icon: Timer, title: "Krótki czas oczekiwania", text: "Sprawne zarządzanie projektami pozwala nam dowozić gotowe produkty szybciej niż klasyczna, powolna konkurencja." },
  { icon: Code2, title: "Nowoczesne technologie", text: "Tworzymy w oparciu o czysty kod (React, Next.js, Tailwind) dla maksymalnej szybkości, skalowalności i bezpieczeństwa." },
  { icon: Gauge, title: "SEO na najwyższym poziomie", text: "Pełna optymalizacja pod Google od samego startu i doskonałe wyniki w PageSpeed Insights — bez kompromisów." },
  { icon: LifeBuoy, title: "Pełne wsparcie", text: "Oferujemy stałą opiekę techniczną, aktualizacje oraz rozwój Twojej aplikacji długo po wdrożeniu." },
  { icon: Compass, title: "Indywidualne podejście", text: "Zapomnij o ociężałych, gotowych szablonach. Każdy projekt projektujemy od zera, pod konkretne cele biznesowe." },
];

export function WhyUs() {
  return (
    <section id="dlaczego" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow="Dlaczego my"
          title="Sześć powodów, dla których klienci do nas wracają."
          intro="Nie jesteśmy software house'em z fabryki. Jesteśmy małym, skupionym zespołem, który podchodzi do każdego projektu jak do własnego."
        />

        <div className="mt-14 grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-hover bg-background p-8">
              <Icon size={22} strokeWidth={1.5} className="text-[color:var(--copper-deep)]" />
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
