import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import appCss from "../styles.css?url";
import { LanguageProvider } from "../lib/language-context";
import { organizationJsonLd, websiteJsonLd } from "../lib/seo";
import { SITE_OG_IMAGE, SITE_URL } from "../lib/site-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Studio Kresa | Agencja interaktywna | Tworzenie stron WWW i aplikacji webowych" },
      {
        name: "description",
        content:
          "Studio Kresa - Butikowa agencja interaktywna. Projektujemy i programujemy nowoczesne strony WWW, sklepy internetowe i aplikacje webowe. Czysty kod, świetne SEO, wsparcie.",
      },
      {
        name: "keywords",
        content:
          "agencja interaktywna, tworzenie stron www, sklepy internetowe, aplikacje webowe, react, ui/ux design, seo, web design, web development, studio kresa",
      },
      {
        property: "og:title",
        content: "Studio Kresa | Agencja interaktywna | Tworzenie stron WWW i aplikacji webowych",
      },
      {
        property: "og:description",
        content:
          "Studio Kresa - Butikowa agencja interaktywna. Projektujemy nowoczesne strony WWW, sklepy internetowe i aplikacje webowe na najwyższym poziomie.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:image", content: SITE_OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Studio Kresa - Nowoczesne strony WWW i aplikacje webowe",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Studio Kresa | Agencja interaktywna | Tworzenie stron WWW i aplikacji webowych",
      },
      {
        name: "twitter:description",
        content:
          "Studio Kresa - Butikowa agencja interaktywna. Projektujemy i programujemy nowoczesne strony WWW, sklepy internetowe i aplikacje webowe.",
      },
      { name: "twitter:image", content: SITE_OG_IMAGE },
      { property: "og:site_name", content: "Studio Kresa" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: "Studio Kresa" },
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
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteJsonLd()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

const languageScript = `(function(){try{var l=localStorage.getItem('language');var b=l?l:((navigator.language||'').toLowerCase().startsWith('en')?'en':'pl');localStorage.setItem('language',b);}catch(e){}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <ScriptOnce>{themeScript}</ScriptOnce>
        <ScriptOnce>{languageScript}</ScriptOnce>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <Analytics />
        <SpeedInsights />
      </QueryClientProvider>
    </LanguageProvider>
  );
}
