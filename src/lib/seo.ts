import type { Language } from "./translations";
import { translations } from "./translations";
import { SITE_OG_IMAGE, SITE_URL } from "./site-config";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Sync document title and social meta after client-side language change. */
export function applyClientSeo(lang: Language) {
  if (typeof document === "undefined") return;

  const meta = translations[lang].meta;
  document.documentElement.lang = lang;

  document.title = meta.title;
  setMeta("description", meta.description);
  setMeta("og:title", meta.title, "property");
  setMeta("og:description", meta.ogDescription, "property");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.ogDescription);
  setMeta("og:locale", lang === "pl" ? "pl_PL" : "en_US", "property");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Studio Kresa",
    url: SITE_URL,
    logo: SITE_OG_IMAGE,
    description:
      "Butikowa agencja interaktywna. Projektujemy i programujemy strony WWW, sklepy i aplikacje webowe.",
    email: "pawelsarzynski51@gmail.com",
    telephone: "+48 662 925 283",
    areaServed: { "@type": "Country", name: "Poland" },
    sameAs: ["https://github.com/P4W3XX"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Studio Kresa",
    url: SITE_URL,
    inLanguage: ["pl-PL", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
