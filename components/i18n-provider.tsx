'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import {
  defaultLocale,
  locales,
  type Locale,
  translations,
} from '@/lib/i18n/translations';

// Use a simple string key for translations to avoid brittle
// compile-time dot-notation generation when locales are optional.
type TranslationKey = string;

const STORAGE_KEY = 'luxus-locale';

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

type I18nProviderProps = {
  children: ReactNode;
  initialLocale: Locale;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function resolveTranslation(locale: Locale, key: string): string {
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

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  useEffect(() => {
    const storedLocale = localStorage.getItem(STORAGE_KEY);

    if (storedLocale && locales.includes(storedLocale as Locale) && storedLocale !== locale) {
      setLocale(storedLocale as Locale);
      return;
    }

    localStorage.setItem(STORAGE_KEY, locale);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string) => resolveTranslation(locale, key),
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
