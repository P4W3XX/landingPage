import {
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_TITLE,
  DEFAULT_OG_DESCRIPTION,
  META_KEYWORDS,
  SITE_OG_IMAGE,
  SITE_URL,
} from "./site-config";
import { organizationJsonLd, websiteJsonLd } from "./seo";

export function buildRootHead() {
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_META_TITLE },
      { name: "description", content: DEFAULT_META_DESCRIPTION },
      { name: "keywords", content: META_KEYWORDS },
      { name: "application-name", content: "Studio Kresa" },
      { name: "apple-mobile-web-app-title", content: "Studio Kresa" },
      { property: "og:title", content: DEFAULT_META_TITLE },
      { property: "og:description", content: DEFAULT_OG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:image", content: SITE_OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Studio Kresa — agencja interaktywna, strony WWW i aplikacje webowe",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_META_TITLE },
      { name: "twitter:description", content: DEFAULT_OG_DESCRIPTION },
      { name: "twitter:image", content: SITE_OG_IMAGE },
      { property: "og:site_name", content: "Studio Kresa" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: "Studio Kresa" },
      { name: "publisher", content: "Studio Kresa" },
      { name: "copyright", content: "Studio Kresa" },
      { name: "format-detection", content: "telephone=no" },
      { name: "google-site-verification", content: "_5GtwRhGOgI2SaWtmo2Gq2LWeIr70LHIpvmcO3mRe0g" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "pl", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(websiteJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(organizationJsonLd()) },
    ],
  };
}
