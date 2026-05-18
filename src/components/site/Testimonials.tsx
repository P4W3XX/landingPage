import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  id: string;
  text: string;
  name: string;
  role: string;
}

export function Testimonials() {
  const [quotes, setQuotes] = useState<Testimonial[]>([]);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true })
      .then(({ data }) => {
        if (data) setQuotes(data);
      });
  }, []);

  return (
    <section id="opinie" className="hairline-b py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow="Opinie klientów"
          title="To, co o nas mówią, znaczy więcej niż to, co sami napiszemy."
        />

        <div className="mt-14 grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.id}
              className="card-hover flex flex-col border border-transparent hover:border-border! justify-between bg-background p-8 md:p-10"
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
