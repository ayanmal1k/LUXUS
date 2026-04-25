'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronUp, Globe } from 'lucide-react';

import { useI18n } from '@/components/i18n-provider';
import { locales, type Locale } from '@/lib/i18n/translations';

type SelectorLabelKey =
  | 'languageSelector.label'
  | 'languageSelector.ariaLabel'
  | 'languageSelector.en'
  | 'languageSelector.it'
  | 'languageSelector.es';

function FlagChip({ locale }: { locale: Locale }) {
  const flagBackgroundByLocale = useMemo<Record<Locale, string>>(
    () => ({
      en: 'linear-gradient(180deg, #1F3A8A 0%, #FFFFFF 50%, #B91C1C 100%)',
      it: 'linear-gradient(90deg, #12803E 0%, #FFFFFF 50%, #C81E1E 100%)',
      es: 'linear-gradient(180deg, #C81E1E 0%, #F2C230 50%, #C81E1E 100%)',
    }),
    [],
  );

  return (
    <span
      aria-hidden
      className="h-3.5 w-5 rounded-[3px] border border-white/35 shadow-[0_0_8px_rgba(0,0,0,0.28)]"
      style={{ background: flagBackgroundByLocale[locale] }}
    />
  );
}

export default function FloatingLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { locale, setLocale, t } = useI18n();

  const labels: Record<Locale, string> = {
    en: t('languageSelector.en'),
    it: t('languageSelector.it'),
    es: t('languageSelector.es'),
  };

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsOpen(false);
  };

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!wrapperRef.current) {
        return;
      }

      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', onDocumentClick);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('mousedown', onDocumentClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed right-4 bottom-4 z-[70] md:right-6 md:bottom-6"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="rounded-2xl border border-[#D4AF37]/25 bg-[rgba(10,10,10,0.62)] p-1.5 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={t('languageSelector.ariaLabel' as SelectorLabelKey)}
          className="group inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-black/30 px-3 py-2 text-[10px] tracking-[0.18em] text-[#E4DDCB] uppercase transition-all duration-300 hover:border-[#D4AF37]/45 hover:bg-black/45"
        >
          <Globe className="h-3.5 w-3.5 text-[#D4AF37]" />
          <FlagChip locale={locale} />
          <span>{labels[locale]}</span>
          <ChevronUp
            className={`h-3.5 w-3.5 text-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'mt-2 max-h-56 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <ul role="listbox" className="grid gap-1.5">
            {locales.map((lang) => {
              const isActive = locale === lang;

              return (
                <li key={lang}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => handleLocaleChange(lang)}
                    className={`flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-left text-[10px] tracking-[0.18em] uppercase transition-all duration-250 ${
                      isActive
                        ? 'border-[#D4AF37]/40 bg-[#D4AF37] text-[#111111]'
                        : 'border-[#D4AF37]/16 bg-black/20 text-[#D9D2C0] hover:border-[#D4AF37]/45 hover:bg-black/40'
                    }`}
                  >
                    <FlagChip locale={lang} />
                    <span className="font-semibold">{labels[lang]}</span>
                    <span className={`ml-auto text-[9px] ${isActive ? 'text-[#111111]/75' : 'text-[#B8B19E]'}`}>
                      {lang.toUpperCase()}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
