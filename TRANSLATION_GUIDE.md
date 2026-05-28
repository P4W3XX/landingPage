# Poradnik: Jak uzupełnić tłumaczenia w pozostałych komponentach

## Co zostało już zrobione ✅

1. **LanguageProvider** - zarządza stanem języka globalnie
2. **LanguageToggle** - przycisk do przełączania (PL/EN) w header
3. **auto-detect** - automatycznie wykrywa język przeglądarki
4. **localStorage** - zapisuje preferencję użytkownika
5. **Header.tsx** - już przetłumaczony

## Jak przetłumaczyć pozostałe komponenty

### Krok 1: Dodaj klucze tłumaczeń w `src/lib/translations.ts`

Dla każdego komponentu dodaj nową sekcję w obu wersach (pl i en):

```typescript
export const translations = {
  pl: {
    // ... istniejące
    myComponent: {
      title: "Mój Tytuł",
      description: "Mój opis",
    },
  },
  en: {
    // ... istniejące
    myComponent: {
      title: "My Title",
      description: "My description",
    },
  },
};
```

### Krok 2: Użyj hook'u w komponencie

```typescript
import { useLanguage } from "../lib/language-context";

export function MyComponent() {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t("myComponent.title")}</h1>
      <p>{t("myComponent.description")}</p>
    </div>
  );
}
```

## Przykład: Hero.tsx

### Before (hardcoded):

```tsx
<h1>Tworzymy nowoczesne strony i aplikacje webowe</h1>
<a href="#kontakt">Rozpocznij projekt</a>
```

### After (translated):

```tsx
import { useLanguage } from "../lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <h1>
      {t("hero.title")}
      <span>{t("hero.titleHighlight")}</span>
    </h1>
    <a href="#kontakt">{t("hero.cta1")}</a>
  );
}
```

## Przykład: Services.tsx

Dla tablicy z danymi:

```tsx
const SERVICES = t("services.items"); // Zwróci tablicę obiektów

// Lub:
const SERVICES = [
  {
    no: "S/01",
    title: t("services.items.0.title"),
    desc: t("services.items.0.desc"),
    bullets: t("services.items.0.bullets"),
  },
  // ...
];
```

## Checklist dla pełnej implementacji

- [ ] Hero.tsx - sekcja `hero.*`
- [ ] Services.tsx - sekcja `services.*`
- [ ] Portfolio.tsx - dodaj `portfolio.*`
- [ ] Contact.tsx - dodaj `contact.*`
- [ ] FAQ.tsx - dodaj `faq.*`
- [ ] Care.tsx - dodaj `care.*`
- [ ] Testimonials.tsx - dodaj `testimonials.*`
- [ ] WhyUs.tsx - dodaj `whyUs.*`

## Wskazówki

1. **Strukturuj klucze hierarchicznie** - `section.subsection.key`
2. **Nie tłumacz nazw klas CSS ani ID** - tylko treść widoczną dla użytkownika
3. **Pamiętaj o aria-labels** - dostępność dla czytników ekranu
4. **Testuj oba języki** - upewnij się że tekst długości się mieści
5. **Użyj `t()` wszędzie** - nawet jeśli tekst jest taki sam, dla spójności

## Jak testować

1. Kliknij przycisk EN/PL w górnym prawym rogu
2. Odśwież stronę - preferencja powinna się zachować (localStorage)
3. Wyczyść localStorage i wejdź na stronę - powinien wykryć język przeglądarki

---

Pytania? Sprawdź jak to działa w Header.tsx - tam znajdziesz pełny przykład!
