import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../../lib/language-context";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  id?: string;
  text: string;
  name: string;
  role: string;
}

export function Testimonials() {
  const { t } = useLanguage();
  const [quotes, setQuotes] = useState<Testimonial[]>([]);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setQuotes(data);
      });
  }, []);

  // Use translations as fallback if no data from Supabase
  const items = quotes.length > 0 ? quotes : (t("testimonials.items") as Testimonial[]);

  return (
    <section id="opinie" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
        />

        <div className="mt-14 flex gap-px bg-border border border-border md:grid-cols-3">
          {items.map((q) => (
            <figure
              key={q.id || q.name}
              className="card-hover flex flex-1 flex-col border border-transparent hover:border-border! justify-between bg-background p-8 md:p-10"
            >
              <div>
                <div className="flex gap-0.5 text-[color:var(--copper-deep)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-lg leading-snug md:text-xl">
                  „{q.text}"
                </blockquote>
              </div>
              <figcaption className="mt-10 border-t border-border pt-5">
                <div className="font-medium">{q.name}</div>
                <div className="label mt-1">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
