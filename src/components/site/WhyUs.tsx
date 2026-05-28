import { MessageSquare, Timer, Code2, Gauge, LifeBuoy, Compass } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../../lib/language-context";

const ICON_MAP: Record<string, any> = {
  "Błyskawiczny kontakt": MessageSquare,
  "Lightning-fast contact": MessageSquare,
  "Krótki czas oczekiwania": Timer,
  "Short waiting times": Timer,
  "Nowoczesne technologie": Code2,
  "Modern technologies": Code2,
  "SEO na najwyższym poziomie": Gauge,
  "SEO at the highest level": Gauge,
  "Pełne wsparcie": LifeBuoy,
  "Full support": LifeBuoy,
  "Indywidualne podejście": Compass,
  "Individual approach": Compass,
};

export function WhyUs() {
  const { t } = useLanguage();
  const items = t("whyUs.items");

  return (
    <section id="dlaczego" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow={t("whyUs.eyebrow")}
          title={t("whyUs.title")}
          intro={t("whyUs.intro")}
        />

        <div className="mt-14 grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((item: any) => {
            const Icon = ICON_MAP[item.title] || MessageSquare;
            return (
              <div
                key={item.title}
                className="card-hover border-transparent border hover:border-border! bg-background p-8"
              >
                <Icon size={22} strokeWidth={1.5} className="text-[color:var(--copper-deep)]" />
                <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
