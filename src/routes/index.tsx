import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Care } from "@/components/site/Care";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { FAQ_ITEMS_PL } from "@/lib/translations";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Studio Kresa",
          description:
            "Butikowa agencja interaktywna. Projektujemy i programujemy nowoczesne strony WWW, sklepy i aplikacje webowe.",
          url: SITE_URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#business`,
          name: "Studio Kresa",
          image: SITE_OG_IMAGE,
          description:
            "Butikowa agencja interaktywna specializing in Web Design, UX/UI, and Software Development.",
          email: "pawelsarzynski51@gmail.com",
          telephone: "+48 662 925 283",
          url: SITE_URL,
          parentOrganization: { "@id": `${SITE_URL}/#organization` },
          address: {
            "@type": "PostalAddress",
            addressCountry: "PL",
          },
          priceRange: "$$",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS_PL.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" theme="light" />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Care />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
