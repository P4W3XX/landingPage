import { useState } from "react";
import { Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const SCOPE = ["Strona WWW", "E-commerce", "Aplikacja", "Inne"];
const BUDGETS = ["< 5 000 PLN", "5 000 – 10 000 PLN", "10 000 – 25 000 PLN", "> 25 000 PLN"];
const CARE = [
  {
    id: "free",
    title: "1 miesiąc gratis",
    desc: "Standard po wdrożeniu",
    price: "0 zł",
    priceNote: "przez pierwsze 30 dni od oddania projektu",
    starts: "Naliczanie od dnia wdrożenia",
  },
  {
    id: "paid",
    title: "200 zł / mies.",
    desc: "Stała opieka techniczna",
    price: "200 zł / mies.",
    priceNote: "netto, bez umowy na czas określony",
    starts: "Płatność rusza po 30 dniach bezpłatnej opieki",
  },
  {
    id: "later",
    title: "Zdecyduję później",
    desc: "Porozmawiajmy o tym",
    price: "Do ustalenia",
    priceNote: "doradzimy wariant przy pierwszej rozmowie",
    starts: "Pierwszy miesiąc po wdrożeniu zawsze gratis",
  },
];
const POST_LAUNCH = [
  "Edycje treści i grafik",
  "Nowe sekcje / podstrony",
  "Integracje (płatności, API, CRM)",
  "Optymalizacja SEO / wydajność",
  "Nie wiem jeszcze",
];

export function Contact() {
  const [scope, setScope] = useState<string[]>([]);
  const [postLaunch, setPostLaunch] = useState<string[]>([]);
  const [care, setCare] = useState<string>("free");
  const selectedCare = CARE.find((c) => c.id === care);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (v: string) =>
    setScope((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));
  const togglePL = (v: string) =>
    setPostLaunch((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim() || null;
    const budget = String(data.get("budget") || "").trim() || null;
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || name.length > 100) return toast.error("Podaj poprawne imię i nazwisko.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Podaj poprawny adres e-mail.");
    if (message.length < 10 || message.length > 2000)
      return toast.error("Opisz projekt w 10–2000 znakach.");

    setSubmitting(true);

    try {
      // Client-generated id: RLS allows INSERT for anon but not SELECT (no read-back).
      const submissionId = crypto.randomUUID();

      const { error: dbError } = await supabase.from("contact_submissions").insert({
        id: submissionId,
        name,
        email,
        phone,
        budget,
        scope: scope.length ? scope : null,
        care,
        post_launch: postLaunch.length ? postLaunch : null,
        message,
      });

      if (dbError) throw dbError;

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
      const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
      const emailRes = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${anonKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: submissionId,
          name,
          email,
          phone,
          budget,
          scope,
          care,
          post_launch: postLaunch,
          message,
        }),
      });

      if (!emailRes.ok) {
        const detail = await emailRes.text();
        console.error("Contact email failed:", emailRes.status, detail);
      }

      toast.success("Dziękujemy! Odezwiemy się w ciągu kilku godzin.");
      (e.target as HTMLFormElement).reset();
      setScope([]);
      setPostLaunch([]);
      setCare("free");
    } catch (err) {
      console.error(err);
      toast.error("Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na e-mail.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="hairline-b bg-foreground text-background">
      <div className="container-x grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
            06 — Kontakt
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Opowiedz nam o swoim projekcie.
          </h2>
          <p className="mt-6 max-w-md text-background/70">
            Odpowiadamy w ciągu kilku godzin w dni robocze. Pierwsza rozmowa jest niezobowiązująca —
            wychodzisz z niej z konkretami, nie z ofertą sprzedażową.
          </p>

          <dl className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={18} className="mt-1 text-[color:var(--copper)]" />
              <div>
                <dt className="label text-background/60">E-mail</dt>
                <dd className="mt-1 font-display text-lg">
                  <a href="mailto:pawelsarzynski51@gmail.com" className="link-underline">
                    pawelsarzynski51@gmail.com
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={18} className="mt-1 text-[color:var(--copper)]" />
              <div>
                <dt className="label text-background/60">Telefon</dt>
                <dd className="mt-1 font-display text-lg">
                  <a href="tel:+48500600700" className="link-underline">
                    +48 662 925 283
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={18} className="mt-1 text-[color:var(--copper)]" />
              <div>
                <dt className="label text-background/60">Godziny pracy</dt>
                <dd className="mt-1 text-background/85">Pon — Pt · 07:00 — 21:00</dd>
              </div>
            </div>
          </dl>

          <div className="mt-12">
            <div className="label text-background/60">Social</div>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {["LinkedIn", "Instagram", "Dribbble", "GitHub"].map((s) => (
                <div key={s} className="flex items-center gap-1">
                  <a key={s} href="#" className="link-underline flex items-center gap-1">
                    {s}
                  </a>
                  <ArrowUpRight size={12} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7" noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Imię i nazwisko" name="name" type="text" required maxLength={100} />
            <Field label="Adres e-mail" name="email" type="email" required maxLength={255} />
            <Field label="Numer telefonu" name="phone" type="tel" maxLength={32} />
            <div>
              <Label>Szacowany budżet</Label>
              <select
                name="budget"
                defaultValue=""
                className="mt-2 w-full appearance-none border-b border-background/30 bg-transparent py-3 text-background outline-none focus:border-[color:var(--copper)]"
              >
                <option value="" disabled className="bg-foreground">
                  Wybierz przedział
                </option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b} className="bg-foreground">
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-10">
            <Label>Czego dotyczy projekt?</Label>
            <div className="mt-4 flex flex-wrap gap-2">
              {SCOPE.map((s) => {
                const active = scope.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggle(s)}
                    className={`border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                      active
                        ? "border-[color:var(--copper)] bg-[color:var(--copper)] text-foreground"
                        : "border-background/30 text-background/85 hover:border-background"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-baseline justify-between gap-4">
              <Label>Opieka po wdrożeniu</Label>
              <a
                href="#opieka"
                className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--copper)] link-underline"
              >
                Zobacz szczegóły opieki →
              </a>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {CARE.map((c) => {
                const active = care === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCare(c.id)}
                    className={`flex flex-col items-start border p-4 text-left transition-colors ${
                      active
                        ? "border-[color:var(--copper)] bg-[color:var(--copper)]/10"
                        : "border-background/30 hover:border-background"
                    }`}
                  >
                    <span
                      className={`font-display text-base ${active ? "text-[color:var(--copper)]" : "text-background"}`}
                    >
                      {c.title}
                    </span>
                    <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-background/60">
                      {c.desc}
                    </span>
                  </button>
                );
              })}
            </div>
            <input type="hidden" name="care" value={care} />
          </div>

          <div className="mt-10">
            <Label>Czego mogą dotyczyć zmiany po wdrożeniu?</Label>
            <div className="mt-4 flex flex-wrap gap-2">
              {POST_LAUNCH.map((s) => {
                const active = postLaunch.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => togglePL(s)}
                    className={`border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                      active
                        ? "border-[color:var(--copper)] bg-[color:var(--copper)] text-foreground"
                        : "border-background/30 text-background/85 hover:border-background"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <Label>Krótki opis projektu</Label>
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={2000}
              placeholder="Opowiedz nam o celach, terminach i wszystkim, co uznasz za istotne…"
              className="mt-2 w-full resize-none border-b border-background/30 bg-transparent py-3 text-background placeholder:text-background/40 outline-none focus:border-[color:var(--copper)]"
            />
          </div>

          <div className="mt-10 border border-background/20 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-background/60">
              Podsumowanie przed wysłaniem
            </div>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-background/50">
                  Wybrana opieka
                </dt>
                <dd className="mt-1 text-sm text-background">
                  {selectedCare?.title}
                  <span className="text-background/55"> — {selectedCare?.desc}</span>
                </dd>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold text-[color:var(--copper)]">
                    {selectedCare?.price}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-background/55">
                    {selectedCare?.priceNote}
                  </span>
                </div>
                <p className="mt-2 text-xs text-background/60">{selectedCare?.starts}</p>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-background/50">
                  Zmiany po wdrożeniu
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {postLaunch.length === 0 ? (
                    <span className="text-sm text-background/55">Nie wybrano — porozmawiamy</span>
                  ) : (
                    postLaunch.map((p) => (
                      <span
                        key={p}
                        className="border border-[color:var(--copper)]/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[color:var(--copper)]"
                      >
                        {p}
                      </span>
                    ))
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 border border-background bg-background px-7 py-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-transform duration-200 hover:-translate-x-px hover:-translate-y-px hover:bg-[color:var(--copper)] hover:border-[color:var(--copper)] disabled:opacity-60"
            >
              {submitting ? "Wysyłanie…" : "Wyślij zapytanie"} <ArrowUpRight size={14} />
            </button>
            <p className="max-w-xs text-xs text-background/55">
              Wysyłając formularz akceptujesz naszą politykę prywatności. Twoje dane wykorzystamy
              wyłącznie do kontaktu w sprawie projektu.
            </p>
          </div>
        </form>
      </div>

      <div className="container-x flex flex-col gap-4 border-t border-background/15 py-8 font-mono text-[11px] uppercase tracking-wider text-background/55 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Studio Kresa — Wszystkie prawa zastrzeżone</div>
        <div className="flex gap-6">
          <a href="#" className="link-underline">
            Polityka prywatności
          </a>
          <a href="#" className="link-underline">
            Regulamin
          </a>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-background/60">
      {children}
    </span>
  );
}

function Field({
  label,
  name,
  type,
  required,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <Label>
        {label}
        {required && " *"}
      </Label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="mt-2 w-full border-b border-background/30 bg-transparent py-3 text-background placeholder:text-background/40 outline-none focus:border-[color:var(--copper)]"
      />
    </label>
  );
}
