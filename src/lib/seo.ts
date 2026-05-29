import type { Language } from "./translations";
import { translations } from "./translations";
import {
  BRAND_ALTERNATE_NAMES,
  SITE_EMAIL,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_PHONE_DISPLAY,
  SITE_SOCIAL,
  SITE_URL,
} from "./site-config";

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
  setMeta("keywords", meta.keywords);
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
    name: SITE_NAME,
    alternateName: [...BRAND_ALTERNATE_NAMES],
    url: SITE_URL,
    logo: SITE_OG_IMAGE,
    image: SITE_OG_IMAGE,
    description:
      "Studio Kresa — butikowa agencja interaktywna. Strony WWW, sklepy internetowe i aplikacje webowe na zamówienie.",
    email: SITE_EMAIL,
    telephone: SITE_PHONE_DISPLAY,
    areaServed: { "@type": "Country", name: "Poland" },
    knowsAbout: [
      "Web design",
      "Web development",
      "E-commerce",
      "SEO",
      "React",
      "TypeScript",
    ],
    sameAs: [...SITE_SOCIAL],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [...BRAND_ALTERNATE_NAMES],
    url: SITE_URL,
    inLanguage: ["pl-PL", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: [...BRAND_ALTERNATE_NAMES],
    image: SITE_OG_IMAGE,
    description:
      "Studio Kresa — agencja interaktywna. Projektowanie i programowanie stron WWW, sklepów i aplikacji webowych.",
    email: SITE_EMAIL,
    telephone: SITE_PHONE_DISPLAY,
    url: SITE_URL,
    priceRange: "$$",
    serviceType: [
      "Web design",
      "Web development",
      "E-commerce development",
      "SEO optimization",
    ],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
    },
  };
}
