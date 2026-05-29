import { useState } from "react";
import { Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../../lib/language-context";
import { supabase } from "@/lib/supabase";

const SOCIAL_LINKS = {
  GitHub: "https://github.com/P4W3XX",
};

export function Contact() {
  const { t } = useLanguage();
  const SCOPE = t("contact.scopes");
  const BUDGETS = t("contact.budgets");
  const POST_LAUNCH = t("contact.postLaunch");

  const [scope, setScope] = useState<string[]>([]);
  const [postLaunch, setPostLaunch] = useState<string[]>([]);
  const [care, setCare] = useState<string>("free");
  const [submitting, setSubmitting] = useState(false);

  const careData = t("care");
  const selectedCare =
    care === "free"
      ? {
          title: careData.free.title,
          desc: careData.free.description,
          price: careData.free.price,
          priceNote: careData.free.priceNote,
          starts: careData.free.priceNote,
        }
      : {
          title: careData.paid.title,
          desc: careData.paid.description ?? "",
          price: careData.paid.price,
          priceNote: careData.paid.priceNote,
          starts: careData.paid.priceNote,
        };

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

    if (name.length < 2 || name.length > 100)
      return toast.error(t("contact.form.errorNameMessage"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error(t("contact.form.errorEmailMessage"));
    if (message.length < 10 || message.length > 2000)
      return toast.error(t("contact.form.errorMessageMessage"));

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

      toast.success(t("contact.form.successMessage"));
      (e.target as HTMLFormElement).reset();
      setScope([]);
      setPostLaunch([]);
      setCare("free");
    } catch (err) {
      console.error(err);
      toast.error(t("contact.form.errorMessageMessage"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="hairline-b bg-foreground text-background">
      <div className="container-x grid gap-16 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
            {t("contact.sectionNumber")}
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-6 max-w-md text-background/70">{t("contact.subtitle")}</p>

          <dl className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={18} className="mt-1 text-[color:var(--copper)]" />
              <div>
                <dt className="label text-background/60">{t("contact.emailLabel")}</dt>
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
                <dt className="label text-background/60">{t("contact.phoneLabel")}</dt>
                <dd className="mt-1 font-display text-lg">
                  <a href="tel:+48662925283" className="link-underline">
                    +48 662 925 283
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={18} className="mt-1 text-[color:var(--copper)]" />
              <div>
                <dt className="label text-background/60">{t("contact.hoursLabel")}</dt>
                <dd className="mt-1 text-background/85">{t("contact.hoursValue")}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-12">
            <div className="label text-background/60">{t("contact.socialLabel")}</div>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
              {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                <div key={name} className="flex items-center gap-1">
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline flex items-center gap-1"
                  >
                    {name}
                  </a>
                  <ArrowUpRight size={12} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-7" noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label={t("contact.form.nameLabel")}
              name="name"
              type="text"
              placeholder={t("contact.form.namePlaceholder")}
              required
              maxLength={100}
            />
            <Field
              label={t("contact.form.emailLabel")}
              name="email"
              type="email"
              placeholder={t("contact.form.emailPlaceholder")}
              required
              maxLength={255}
            />
            <Field
              label={t("contact.form.phoneLabel")}
              name="phone"
              type="tel"
              placeholder={t("contact.form.phonePlaceholder")}
              maxLength={32}
            />
            <div>
              <Label>{t("contact.form.budgetLabel")}</Label>
              <select
                name="budget"
                defaultValue=""
                className="mt-2 w-full appearance-none border-b border-background/30 bg-transparent py-3 text-background outline-none focus:border-[color:var(--copper)]"
              >
                <option value="" disabled className="bg-foreground">
                  {t("contact.form.budgetLabel")}
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
            <Label>{t("contact.form.scopeLabel")}</Label>
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
              <Label>{t("contact.form.postLaunchLabel")}</Label>
              <a
                href="#opieka"
                className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--copper)] link-underline"
              >
                {t("contact.seeDetails")} →
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {POST_LAUNCH.map((p) => {
                const active = postLaunch.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => togglePL(p)}
                    className={`border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                      active
                        ? "border-[color:var(--copper)] bg-[color:var(--copper)] text-foreground"
                        : "border-background/30 text-background/85 hover:border-background"
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <input type="hidden" name="care" value={care} />
          </div>

          <div className="mt-10">
            <Label>{t("contact.form.messageLabel")}</Label>
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={2000}
              placeholder={t("contact.form.messagePlaceholder")}
              className="mt-2 w-full resize-none border-b border-background/30 bg-transparent py-3 text-background placeholder:text-background/40 outline-none focus:border-[color:var(--copper)]"
            />
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 border border-background bg-background px-7 py-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-transform duration-200 hover:-translate-x-px hover:-translate-y-px hover:bg-[color:var(--copper)] hover:border-[color:var(--copper)] disabled:opacity-60"
            >
              {submitting ? t("contact.form.submitting") : t("contact.form.submitLabel")}{" "}
              <ArrowUpRight size={14} />
            </button>
            <p className="max-w-xs text-xs text-background/55">{t("contact.privacy")}</p>
          </div>
        </form>
      </div>

      <footer className="container-x border-t border-background/15 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-[11px] uppercase tracking-wider text-background/55">
            {t("contact.footer.copyright").replace("{year}", new Date().getFullYear().toString())}
          </div>
          <div className="flex gap-6 font-mono text-[11px] uppercase tracking-wider text-background/55">
            <a
              href="/Polityka_Prywatnosci.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {t("contact.footer.privacyLabel")}
            </a>
            <a
              href="/Regulamin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              {t("contact.footer.termsLabel")}
            </a>
          </div>
        </div>
        <div
          className="mt-6 flex flex-wrap gap-2"
          aria-label={t("contact.footer.tagsLabel")}
        >
          {(t("contact.footer.tags") as string[]).map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-background/20 px-2.5 py-1 font-mono text-[10px] tracking-wide text-background/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
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
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
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
        placeholder={placeholder}
        className="mt-2 w-full border-b border-background/30 bg-transparent py-3 text-background placeholder:text-background/40 outline-none focus:border-[color:var(--copper)]"
      />
    </label>
  );
}
