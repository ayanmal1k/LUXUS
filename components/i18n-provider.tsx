'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

import {
  defaultLocale,
  locales,
  type Locale,
  translations,
} from '@/lib/i18n/translations';

type TranslationKey =
  | 'hero.explorationTag'
  | 'hero.exploreHeritage'
  | 'hero.headingLine1'
  | 'hero.headingLine2'
  | 'hero.description'
  | 'hero.cta'
  | 'hero.imageAlt'
  | 'hero.stats.experience'
  | 'hero.stats.projects'
  | 'hero.stats.materials';

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const browserLocale = navigator.language.slice(0, 2).toLowerCase();

  if (locales.includes(browserLocale as Locale)) {
    return browserLocale as Locale;
  }

  return defaultLocale;
}

function resolveTranslation(locale: Locale, key: TranslationKey): string {
  const value = key
    .split('.')
    .reduce<unknown>(
      (accumulator, segment) =>
        typeof accumulator === 'object' && accumulator !== null
          ? (accumulator as Record<string, unknown>)[segment]
          : undefined,
      translations[locale],
    );

  if (typeof value === 'string') {
    return value;
  }

  return key;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: TranslationKey) => resolveTranslation(locale, key),
    }),
    [locale],
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
}
