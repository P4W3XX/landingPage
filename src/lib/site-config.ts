/** Primary production URL (matches Vercel: www → Production, apex → 307 to www). */
export const SITE_URL = "https://www.studiokresa.pl";

export const SITE_NAME = "Studio Kresa";

export const SITE_EMAIL = "pawelsarzynski51@gmail.com";

export const SITE_PHONE = "+48662925283";

export const SITE_PHONE_DISPLAY = "+48 662 925 283";

export const SITE_OG_IMAGE = `${SITE_URL}/largeImage.png`;

export const SITE_SOCIAL = ["https://github.com/P4W3XX"] as const;

/** Alternate spellings — used in schema.org and meta keywords. */
export const BRAND_ALTERNATE_NAMES = [
  "Studio Kresa",
  "studio kresa",
  "Studio Kresa agencja",
  "Studio Kresa Polska",
  "studiokresa",
  "studiokresa.pl",
] as const;

export const META_KEYWORDS = [
  "Studio Kresa",
  "studio kresa",
  "studiokresa",
  "studiokresa.pl",
  "agencja interaktywna",
  "agencja www",
  "tworzenie stron www",
  "strony internetowe",
  "sklepy internetowe",
  "aplikacje webowe",
  "web design polska",
  "react",
  "seo",
].join(", ");

export const DEFAULT_META_TITLE =
  "Studio Kresa | Agencja WWW — strony internetowe, sklepy i aplikacje";

export const DEFAULT_META_DESCRIPTION =
  "Studio Kresa to butikowa agencja interaktywna z Polski. Projektujemy i programujemy strony WWW, sklepy internetowe i aplikacje webowe. Zobacz ofertę i skontaktuj się.";

export const DEFAULT_OG_DESCRIPTION =
  "Studio Kresa — butikowa agencja WWW. Strony, sklepy i aplikacje webowe na zamówienie.";
