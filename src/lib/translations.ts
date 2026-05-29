export type Language = "pl" | "en";

// FAQ Items for structured data (schema.org)
export const FAQ_ITEMS_PL = [
  {
    q: "Jak długo trwa stworzenie strony?",
    a: "Prosta strona wizytówkowa lub landing page to zazwyczaj 1-2 dni. Rozbudowane strony korporacyjne 1-2 tygodnie. Dla każdego projektu przygotowujemy realny harmonogram już na etapie wyceny.",
  },
  {
    q: "Ile kosztuje wykonanie aplikacji webowej?",
    a: "Koszt aplikacji zależy od zakresu funkcji, integracji i skali. Proste MVP zaczynają się od ok. 10 000 PLN, większe systemy od 30 000 PLN wzwyż. Po krótkiej rozmowie potrafimy podać konkretny widełkowy zakres.",
  },
  {
    q: "Czy pomagacie w rejestracji domeny i hostingu?",
    a: "Tak. Przeprowadzamy Cię przez wybór i konfigurację domeny oraz hostingu — możemy też wziąć te kwestie w pełni na siebie w ramach pakietu opieki.",
  },
  {
    q: "Czy dostanę panel CMS do samodzielnej edycji?",
    a: "Świadomie nie wdrażamy panelu CMS — dzięki temu strona jest szybsza, bezpieczniejsza i tańsza w utrzymaniu. Wszystkie edycje treści, grafik czy nowych sekcji po wdrożeniu robimy za Ciebie w ramach opieki technicznej, zwykle w ciągu 24–48h od zgłoszenia.",
  },
  {
    q: "Co dzieje się po wdrożeniu projektu?",
    a: "Pierwszy miesiąc po oddaniu projektu to bezpłatna opieka — poprawiamy drobne błędy, doradzamy przy pierwszych zmianach i pilnujemy stabilności. Po tym okresie możesz wykupić stałą opiekę techniczną za 200 zł miesięcznie: edycje treści, monitoring, aktualizacje, backupy i priorytetową reakcję na incydenty.",
  },
];

export const translations = {
  pl: {
    nav: {
      services: "Usługi",
      whyUs: "Dlaczego my",
      portfolio: "Portfolio",
      care: "Opieka",
      testimonials: "Opinie",
      faq: "FAQ",
      contact: "Kontakt",
    },
    buttons: {
      freeQuote: "Darmowa wycena",
      openMenu: "Otwórz menu",
      closeMenu: "Zamknij menu",
      toggleLightMode: "Włącz tryb jasny",
      toggleDarkMode: "Włącz tryb ciemny",
      toggleLanguage: "Switch to English",
    },
    errors: {
      pageNotFound: "Strona nie znaleziona",
      pageNotFoundTitle: "404",
      pageNotFoundDescription: "Strona, którą szukasz, nie istnieje lub została przeniesiona.",
      goHome: "Wróć do domu",
      somethingWentWrong: "Coś poszło nie tak",
      errorDescription:
        "Coś poszło nie tak po naszej stronie. Możesz spróbować odświeżyć lub wrócić do domu.",
      tryAgain: "Spróbuj ponownie",
    },
    hero: {
      subtitle: "Studio Kresa · agencja interaktywna · Polska · est. 2026",
      title: "Studio Kresa — nowoczesne strony WWW i aplikacje webowe",
      titleHighlight: "na miarę",
      titleEnd: "Twojego biznesu.",
      description:
        "Studio Kresa to butikowa agencja z Polski. Od wizytówek po sklepy internetowe — szybka realizacja, nowoczesny stack i SEO, na którym możesz polegać.",
      cta1: "Rozpocznij projekt",
      cta2: "Poznaj nasze usługi",
      cta3: "Opieka po wdrożeniu",
      stats: [
        { k: "20+", v: "Zrealizowanych projektów" },
        { k: "98/100", v: "Średni PageSpeed" },
        { k: "< 2h", v: "Średni czas odpowiedzi" },
        { k: "5 lat", v: "Doświadczenia zespołu" },
      ],
      tech: "[ React ] [ Next.js ] [ Tailwind ] [ TypeScript ] [ Node ]",
    },
    services: {
      eyebrow: "Usługi",
      title: "Wszystko, czego potrzebujesz, by zaistnieć w sieci — pod jednym dachem.",
      items: [
        {
          no: "S/01",
          title: "Strony WWW",
          desc: "Wizytówki, landing page'e i strony korporacyjne. Szybkie, dopięte pod SEO i konwersję.",
          bullets: ["Landing page", "Strony firmowe", "Microsite kampanijne"],
        },
        {
          no: "S/02",
          title: "Sklepy internetowe",
          desc: "E-commerce na Shopify, WooCommerce lub headless. Integracje, płatności, automatyzacje.",
          bullets: ["Shopify / WooCommerce", "Headless commerce", "Migracje sklepów"],
        },
        {
          no: "S/03",
          title: "Aplikacje webowe",
          desc: "Dedykowane systemy SaaS, panele klienta, dashboardy i wewnętrzne narzędzia.",
          bullets: ["MVP w 1-2 tygodnie", "Panele i dashboardy", "Integracje API"],
        },
        {
          no: "S/04",
          title: "Opieka techniczna",
          desc: "Pierwszy miesiąc po wdrożeniu gratis — poprawki, konsultacje i monitoring. Potem stała opieka za 200 zł miesięcznie.",
          bullets: [
            "1 miesiąc bezpłatnej opieki",
            "Monitoring i aktualizacje",
            "Backup + priorytetowa reakcja",
          ],
        },
      ],
    },
    whyUs: {
      eyebrow: "Dlaczego my",
      title: "Sześć powodów, dla których klienci do nas wracają.",
      intro:
        "Nie jesteśmy software house'em z fabryki. Jesteśmy małym, skupionym zespołem, który podchodzi do każdego projektu jak do własnego.",
      items: [
        {
          title: "Błyskawiczny kontakt",
          text: "Odpisujemy w rekordowo krótkim czasie. Przejrzysta komunikacja bez owijania w bawełnę na każdym etapie współpracy.",
        },
        {
          title: "Krótki czas oczekiwania",
          text: "Sprawne zarządzanie projektami pozwala nam dowozić gotowe produkty szybciej niż klasyczna, powolna konkurencja.",
        },
        {
          title: "Nowoczesne technologie",
          text: "Tworzymy w oparciu o czysty kod (React, Next.js, Tailwind) dla maksymalnej szybkości, skalowalności i bezpieczeństwa.",
        },
        {
          title: "SEO na najwyższym poziomie",
          text: "Pełna optymalizacja pod Google od samego startu i doskonałe wyniki w PageSpeed Insights — bez kompromisów.",
        },
        {
          title: "Pełne wsparcie",
          text: "Oferujemy stałą opiekę techniczną, aktualizacje oraz rozwój Twojej aplikacji długo po wdrożeniu.",
        },
        {
          title: "Indywidualne podejście",
          text: "Zapomnij o ociężałych, gotowych szablonach. Każdy projekt projektujemy od zera, pod konkretne cele biznesowe.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Ostatnie projekty",
      title: "Wybrane realizacje z ostatnich dwunastu miesięcy.",
      intro:
        "Pracujemy z markami, które rozumieją, że strona to nie koszt — to inwestycja w sposób, w jaki świat ich postrzega.",
    },
    testimonials: {
      eyebrow: "Opinie klientów",
      title: "To, co o nas mówią, znaczy więcej niż to, co sami napiszemy.",
      items: [
        {
          text: "Pracowali z nas na całej transformacji cyfrowej. Od UX poprzez wdrożenie, aż do bieżącego wsparcia. To partnerstwo, a nie transakcja.",
          name: "Marta K.",
          role: "CEO, e-commerce startup",
        },
        {
          text: "Kod, którym pracujemy, jest czysty i dobrze udokumentowany. Zmniejszyliśmy czas utrzymania o 40%.",
          name: "Robert P.",
          role: "CTO, SaaS platform",
        },
        {
          text: "Studio Kresa nie tylko zbudowało naszą stronę, ale ją promuje. SEO i wydajność to nie teoria — to rzeczywisty wzrost traffiku.",
          name: "Anna L.",
          role: "Founder, agencja marketingowa",
        },
      ],
    },
    care: {
      eyebrow: "Opieka po wdrożeniu",
      title: "Nie zostawiamy Cię z gotowym projektem samego.",
      intro:
        "Świadomie nie wdrażamy panelu CMS — to my odpowiadamy za jakość kodu i treści. Wszystkie zmiany po starcie (teksty, grafiki, nowe sekcje, integracje) realizujemy w ramach opieki, według ustalonego SLA.",
      free: {
        badge: "W cenie projektu",
        title: "Pierwszy miesiąc gratis",
        price: "0 zł",
        priceNote: "/ 30 dni po wdrożeniu",
        description:
          "Okres docierania projektu na produkcji. Reagujemy szybko, doradzamy i pilnujemy, żeby start był spokojny.",
        label: "P/01 — Start",
        includes: [
          "Poprawki drobnych błędów i niedoróbek",
          "Konsultacje przy pierwszych zmianach treści",
          "Monitoring stabilności i wydajności",
          "Wsparcie e-mailowe w dni robocze",
        ],
      },
      paid: {
        badge: "Rekomendowane",
        title: "Stała opieka techniczna",
        price: "200 zł",
        priceNote: "/ miesiąc, netto",
        description:
          "Po pierwszym miesiącu. Bez umowy na czas określony — możesz zrezygnować w dowolnym momencie.",
        label: "P/02 — Care",
        button: "Zapytaj o opiekę",
        includes: [
          "Edycje treści, grafik i nowych sekcji — robimy je za Ciebie",
          "Aktualizacje stacku, bibliotek i zależności bezpieczeństwa",
          "Automatyczne backupy + plan przywrócenia",
          "Monitoring uptime 24/7 i alerty wydajnościowe",
          "Priorytetowa reakcja na incydenty (SLA do 4h w dni robocze)",
          "Drobne zmiany rozwojowe do 2h miesięcznie w cenie",
        ],
      },
      comparisonTable: {
        headers: ["Zakres", "1 miesiąc gratis", "200 zł / mies."],
        rows: [
          ["Poprawki drobnych błędów", true, true],
          ["Edycje treści i grafik (robimy za Ciebie)", "Doraźnie", true],
          ["Aktualizacje bibliotek i bezpieczeństwa", false, true],
          ["Backupy i plan przywrócenia", false, true],
          ["Monitoring uptime 24/7", "Podstawowy", true],
          ["SLA reakcji do 4h (dni robocze)", false, true],
          ["Drobne zmiany rozwojowe (do 2h / mies.)", false, true],
        ],
      },
      footer:
        "Świadomie nie wdrażamy panelu CMS — dzięki temu strona jest szybsza, bezpieczniejsza i tańsza w utrzymaniu. Wszystkie zmiany po wdrożeniu robimy za Ciebie w ramach opieki, zwykle w ciągu 24–48h.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Najczęstsze pytania, zanim do nas napiszesz.",
      items: [
        {
          q: "Jak długo trwa stworzenie strony?",
          a: "Prosta strona wizytówkowa lub landing page to zazwyczaj 1-2 dni. Rozbudowane strony korporacyjne 1-2 tygodnie. Dla każdego projektu przygotowujemy realny harmonogram już na etapie wyceny.",
        },
        {
          q: "Ile kosztuje wykonanie aplikacji webowej?",
          a: "Koszt aplikacji zależy od zakresu funkcji, integracji i skali. Proste MVP zaczynają się od ok. 10 000 PLN, większe systemy od 30 000 PLN wzwyż. Po krótkiej rozmowie potrafimy podać konkretny widełkowy zakres.",
        },
        {
          q: "Czy pomagacie w rejestracji domeny i hostingu?",
          a: "Tak. Przeprowadzamy Cię przez wybór i konfigurację domeny oraz hostingu — możemy też wziąć te kwestie w pełni na siebie w ramach pakietu opieki.",
        },
        {
          q: "Czy dostanę panel CMS do samodzielnej edycji?",
          a: "Świadomie nie wdrażamy panelu CMS — dzięki temu strona jest szybsza, bezpieczniejsza i tańsza w utrzymaniu. Wszystkie edycje treści, grafik czy nowych sekcji po wdrożeniu robimy za Ciebie w ramach opieki technicznej, zwykle w ciągu 24–48h od zgłoszenia.",
        },
        {
          q: "Co dzieje się po wdrożeniu projektu?",
          a: "Pierwszy miesiąc po oddaniu projektu to bezpłatna opieka — poprawiamy drobne błędy, doradzamy przy pierwszych zmianach i pilnujemy stabilności. Po tym okresie możesz wykupić stałą opiekę techniczną za 200 zł miesięcznie: edycje treści, monitoring, aktualizacje, backupy i priorytetową reakcję na incydenty.",
        },
      ],
    },
    contact: {
      sectionNumber: "06 — Kontakt",
      title: "Opowiedz nam o swoim projekcie.",
      subtitle:
        "Odpowiadamy w ciągu kilku godzin w dni robocze. Pierwsza rozmowa jest niezobowiązująca — wychodzisz z niej z konkretami, nie z ofertą sprzedażową.",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      hoursLabel: "Godziny pracy",
      hoursValue: "Pon — Pt · 07:00 — 21:00",
      seeDetails: "ZOBACZ SZCZEGÓŁY OPIEKI",

      socialLabel: "Social",
      privacy:
        "Wysyłając formularz akceptujesz naszą politykę prywatności. Twoje dane wykorzystamy wyłącznie do kontaktu w sprawie projektu.",
      contactTitle: "Porozmawiajmy o Twoim projekcie",
      description:
        "Nie czekamy na gotowe briefingi — opowiemy o możliwościach, ograniczeniach i wariantach na już rozmowie.",
      scopes: ["Strona WWW", "E-commerce", "Aplikacja", "Inne"],
      budgets: ["< 5 000 PLN", "5 000 – 10 000 PLN", "10 000 – 25 000 PLN", "> 25 000 PLN"],
      postLaunch: [
        "Edycje treści i grafik",
        "Nowe sekcje / podstrony",
        "Integracje (płatności, API, CRM)",
        "Optymalizacja SEO / wydajność",
        "Nie wiem jeszcze",
      ],
      form: {
        nameLabel: "Imię i nazwisko",
        namePlaceholder: "Twoje imię i nazwisko",
        emailLabel: "E-mail",
        emailPlaceholder: "twój@email.com",
        phoneLabel: "Telefon (opcjonalnie)",
        phonePlaceholder: "+48 123 456 789",
        scopeLabel: "Co Cię interesuje?",
        budgetLabel: "Przybliżony budżet",
        messageLabel: "O co chodzi w projekcie?",
        messagePlaceholder: "Opowiedz nam o Twoim pomyśle, celach i wyzwaniach...",
        postLaunchLabel: "Co będzie potrzebne po wdrożeniu?",
        submitLabel: "Wyślij zapytanie",
        submitting: "Wysyłanie…",
        successMessage: "Dziękujemy! Odezwiemy się do Ciebie w ciągu 24h.",
        errorNameMessage: "Podaj poprawne imię i nazwisko.",
        errorEmailMessage: "Podaj poprawny adres e-mail.",
        errorMessageMessage: "Opisz projekt w 10–2000 znakach.",
      },
      summary: {
        title: "Podsumowanie przed wysłaniem",
        selectedCare: "Wybrana opieka",
        postLaunch: "Zmiany po wdrożeniu",
        notSelected: "Nie wybrano — porozmawiamy",
      },
      privacy:
        "Wysyłając formularz akceptujesz naszą politykę prywatności. Twoje dane wykorzystamy wyłącznie do kontaktu w sprawie projektu.",
      footer: {
        copyright: "© {year} Studio Kresa — Wszystkie prawa zastrzeżone",
        privacyLabel: "Polityka prywatności",
        termsLabel: "Regulamin",
        tagsLabel: "Studio Kresa",
        tags: [
          "#StudioKresa",
          "#StronyWWW",
          "#AplikacjeWebowe",
          "#AgencjaInteraktywna",
          "#WebDesign",
          "#SEO",
          "#Polska",
        ],
      },
    },
    meta: {
      title: "Studio Kresa | Agencja WWW — strony internetowe, sklepy i aplikacje",
      description:
        "Studio Kresa to butikowa agencja interaktywna z Polski. Projektujemy i programujemy strony WWW, sklepy internetowe i aplikacje webowe. Skontaktuj się z nami.",
      ogDescription:
        "Studio Kresa — butikowa agencja WWW. Strony, sklepy i aplikacje webowe na zamówienie.",
      keywords:
        "Studio Kresa, studio kresa, studiokresa, agencja interaktywna, strony www, aplikacje webowe, seo, web design polska",
    },
  },
  en: {
    nav: {
      services: "Services",
      whyUs: "Why Us",
      portfolio: "Portfolio",
      care: "Support",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact",
    },
    buttons: {
      freeQuote: "Free Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleLightMode: "Enable light mode",
      toggleDarkMode: "Enable dark mode",
      toggleLanguage: "Przełącz na polski",
    },
    errors: {
      pageNotFound: "Page not found",
      pageNotFoundTitle: "404",
      pageNotFoundDescription: "The page you're looking for doesn't exist or has been moved.",
      goHome: "Go home",
      somethingWentWrong: "This page didn't load",
      errorDescription:
        "Something went wrong on our end. You can try refreshing or head back home.",
      tryAgain: "Try again",
    },
    hero: {
      subtitle: "Studio Kresa · interactive agency · Poland · est. 2026",
      title: "Studio Kresa — modern websites and web applications",
      titleHighlight: "tailored to",
      titleEnd: "your business.",
      description:
        "Studio Kresa is a boutique agency from Poland. From landing pages to e-commerce — fast delivery, modern stack, and SEO you can rely on.",
      cta1: "Start your project",
      cta2: "Explore our services",
      cta3: "Post-launch support",
      stats: [
        { k: "20+", v: "Projects completed" },
        { k: "98/100", v: "Average PageSpeed" },
        { k: "< 2h", v: "Average response time" },
        { k: "5 years", v: "Team experience" },
      ],
      tech: "[ React ] [ Next.js ] [ Tailwind ] [ TypeScript ] [ Node ]",
    },
    services: {
      eyebrow: "Services",
      title: "Everything you need to exist on the web — under one roof.",
      items: [
        {
          no: "S/01",
          title: "Websites",
          desc: "Business cards, landing pages and corporate sites. Fast, optimized for SEO and conversions.",
          bullets: ["Landing pages", "Corporate sites", "Campaign microsites"],
        },
        {
          no: "S/02",
          title: "E-commerce",
          desc: "Shopify, WooCommerce or headless commerce. Integrations, payments, automation.",
          bullets: ["Shopify / WooCommerce", "Headless commerce", "Store migrations"],
        },
        {
          no: "S/03",
          title: "Web Applications",
          desc: "Custom SaaS systems, client panels, dashboards and internal tools.",
          bullets: ["MVP in 1-2 weeks", "Panels & dashboards", "API integrations"],
        },
        {
          no: "S/04",
          title: "Technical Support",
          desc: "First month after launch is free — fixes, consultations and monitoring. Then ongoing support for $50/month.",
          bullets: ["1 month free support", "Monitoring & updates", "Backup + priority response"],
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Us",
      title: "Six reasons why clients come back to us.",
      intro:
        "We're not a software factory. We're a small, focused team that approaches every project like it's our own.",
      items: [
        {
          title: "Lightning-fast contact",
          text: "We respond in record time. Clear communication without beating around the bush at every stage of cooperation.",
        },
        {
          title: "Short waiting times",
          text: "Efficient project management allows us to deliver finished products faster than the classic, slow competition.",
        },
        {
          title: "Modern technologies",
          text: "We build on clean code (React, Next.js, Tailwind) for maximum speed, scalability and security.",
        },
        {
          title: "SEO at the highest level",
          text: "Full optimization for Google from the start and excellent PageSpeed Insights results — no compromises.",
        },
        {
          title: "Full support",
          text: "We offer ongoing technical support, updates and development of your application long after launch.",
        },
        {
          title: "Individual approach",
          text: "Forget about clunky, off-the-shelf templates. We design every project from scratch, for specific business goals.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Latest Projects",
      title: "Selected projects from the last twelve months.",
      intro:
        "We work with brands that understand that a website is not a cost — it's an investment in how the world perceives them.",
    },
    testimonials: {
      eyebrow: "Client Testimonials",
      title: "What they say about us means more than what we write about ourselves.",
      items: [
        {
          text: "They partnered with us on our entire digital transformation. From UX through implementation to ongoing support. It's a partnership, not a transaction.",
          name: "Marta K.",
          role: "CEO, e-commerce startup",
        },
        {
          text: "The code we work with is clean and well-documented. We've reduced maintenance time by 40%.",
          name: "Robert P.",
          role: "CTO, SaaS platform",
        },
        {
          text: "Studio Kresa didn't just build our website, they promote it. SEO and performance aren't theory — it's real traffic growth.",
          name: "Anna L.",
          role: "Founder, marketing agency",
        },
      ],
    },
    care: {
      eyebrow: "Post-Launch Support",
      title: "We don't leave you with a finished project alone.",
      intro:
        "We deliberately don't implement a CMS panel — we take responsibility for code and content quality. All changes after launch (text, graphics, new sections, integrations) are handled by us as part of support, according to the agreed SLA.",
      free: {
        badge: "Included in project price",
        title: "First month free",
        price: "$0",
        priceNote: "/ 30 days after launch",
        description:
          "The period when your project goes live. We react quickly, advise and make sure the start is smooth.",
        label: "P/01 — Start",
        includes: [
          "Fixes for minor bugs and oversights",
          "Consultations on first content changes",
          "Monitoring of stability and performance",
          "Email support on business days",
        ],
      },
      paid: {
        badge: "Recommended",
        title: "Ongoing technical support",
        price: "$50",
        priceNote: "/ month",
        button: "Ask about care",
        label: "P/02 — Care",
        description: "After the first month. With no fixed-term contract—you can quit at any time.",
        includes: [
          "Content, graphics and new sections edits — we do it for you",
          "Stack, library and security dependency updates",
          "Automated backups + recovery plan",
          "24/7 uptime monitoring and performance alerts",
          "Priority incident response (4h SLA on business days)",
          "Minor development changes up to 2h per month included",
        ],
      },
      comparisonTable: {
        headers: ["Scope", "First month free", "$50 / month"],
        rows: [
          ["Fixes for minor bugs", true, true],
          ["Content and graphics edits (we do it for you)", "On-demand", true],
          ["Library and security updates", false, true],
          ["Backups and recovery plan", false, true],
          ["24/7 uptime monitoring", "Basic", true],
          ["4h response SLA (business days)", false, true],
          ["Minor development changes (up to 2h / month)", false, true],
        ],
      },
      footer:
        "We deliberately don't implement a CMS panel — this makes your site faster, more secure and cheaper to maintain. All post-launch changes are handled by us as part of support, typically within 24–48h.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Most common questions before you write to us.",
      items: [
        {
          q: "How long does it take to create a website?",
          a: "A simple business card or landing page typically takes 1-2 days. More complex corporate websites 1-2 weeks. For each project, we prepare a realistic timeline during the quotation phase.",
        },
        {
          q: "How much does a web application cost?",
          a: "The cost of an application depends on the scope of features, integrations and scale. Simple MVPs start at around $2,500, larger systems from $7,500+. After a brief conversation, we can provide you with a specific range.",
        },
        {
          q: "Do you help with domain registration and hosting?",
          a: "Yes. We guide you through choosing and configuring a domain and hosting — we can also handle these matters fully for you as part of our support package.",
        },
        {
          q: "Will I get a CMS panel for self-editing?",
          a: "We deliberately don't implement a CMS panel — this makes the site faster, more secure and cheaper to maintain. All content edits, graphics or new sections after launch are handled by us as part of technical support, usually within 24–48h of notification.",
        },
        {
          q: "What happens after project launch?",
          a: "The first month after project delivery is free support — we fix minor bugs, advise on first changes and monitor stability. After that period, you can purchase ongoing technical support for $50/month: content edits, monitoring, updates, backups and priority incident response.",
        },
      ],
    },
    contact: {
      sectionNumber: "06 — Contact",
      title: "Tell us about your project.",
      subtitle:
        "We respond within a few hours on business days. The first conversation is non-binding — you leave with concrete information, not a sales pitch.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      hoursLabel: "Business hours",
      hoursValue: "Mon – Fri · 07:00 — 21:00",
      socialLabel: "Social",
      seeDetails: "SEE CARE DETAILS",
      privacy:
        "By submitting the form you accept our privacy policy. We will use your data only to contact you about the project.",
      contactTitle: "Let's talk about your project",
      description:
        "We don't wait for finished briefs — we explain possibilities, limitations and options during the first call.",
      scopes: ["Website", "E-commerce", "Application", "Other"],
      budgets: ["< $1,250", "$1,250 – $2,500", "$2,500 – $6,250", "> $6,250"],
      postLaunch: [
        "Content and graphics edits",
        "New sections / pages",
        "Integrations (payments, APIs, CRM)",
        "SEO / performance optimization",
        "I'm not sure yet",
      ],
      form: {
        nameLabel: "Name and surname",
        namePlaceholder: "Your name and surname",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        phoneLabel: "Phone (optional)",
        phonePlaceholder: "+48 123 456 789",
        scopeLabel: "What are you interested in?",
        budgetLabel: "Approximate budget",
        messageLabel: "What is the project about?",
        messagePlaceholder: "Tell us about your idea, goals and challenges...",
        postLaunchLabel: "What will be needed after launch?",
        submitLabel: "Send inquiry",
        submitting: "Sending…",
        successMessage: "Thank you! We'll get back to you within 24 hours.",
        errorNameMessage: "Please provide a valid name and surname.",
        errorEmailMessage: "Please provide a valid email address.",
        errorMessageMessage: "Describe your project in 10–2000 characters.",
      },
      summary: {
        title: "Summary before sending",
        selectedCare: "Selected support",
        postLaunch: "Post-launch changes",
        notSelected: "Not selected — let's discuss",
      },
      privacy:
        "By submitting the form you accept our privacy policy. We will use your data only to contact you about the project.",
      footer: {
        copyright: "© {year} Studio Kresa — All rights reserved",
        privacyLabel: "Privacy Policy",
        termsLabel: "Terms & Conditions",
        tagsLabel: "Studio Kresa",
        tags: [
          "#StudioKresa",
          "#WebDesign",
          "#WebDevelopment",
          "#InteractiveAgency",
          "#SEO",
          "#Poland",
        ],
      },
    },
    meta: {
      title: "Studio Kresa | Web agency — websites, stores & applications",
      description:
        "Studio Kresa is a boutique interactive agency from Poland. We design and develop websites, e-commerce stores and web applications. Get in touch.",
      ogDescription:
        "Studio Kresa — boutique web agency. Custom websites, stores and web applications.",
      keywords:
        "Studio Kresa, studio kresa, studiokresa, web agency poland, web design, web development, seo",
    },
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value ?? translations.pl[key as any] ?? key;
}
