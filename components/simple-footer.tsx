'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useI18n } from '@/components/i18n-provider';

const pageLinks = [
  { href: '/', labelKey: 'navbar.home' },
  { href: '/about', labelKey: 'navbar.about' },
  { href: '/portfolio', labelKey: 'navbar.portfolio' },
  { href: '/portfolio-contact', labelKey: 'navbar.portfolioContact' },
] as const;

const socialLinks = [
  { href: 'https://instagram.com', Icon: Instagram, label: 'Instagram' },
  { href: 'https://facebook.com', Icon: Facebook, label: 'Facebook' },
  { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
] as const;

export default function SimpleFooter() {
  const { t } = useI18n();

  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/18 bg-[#040404] text-[#EEE9DF]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(212,175,55,0.18),rgba(212,175,55,0)_32%),radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.08),rgba(255,255,255,0)_36%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <div className="rounded-2xl border border-[#D4AF37]/20 bg-[rgba(11,11,11,0.58)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-8">
          <div className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">
            <div className="flex items-center gap-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/22 bg-black/30">
                <Image
                  src="/logo-nobg.png"
                  alt="LUXUS"
                  width={68}
                  height={68}
                  className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] text-[#D4AF37] uppercase">LUXUS</p>
                <p className="mt-1 text-sm leading-6 text-[#D7CFBF] sm:text-base">{t('footer.title')}</p>
              </div>
            </div>

            <nav className="space-y-3" aria-label="Footer navigation">
              <p className="text-[10px] tracking-[0.26em] text-[#D4AF37] uppercase">Pages</p>
              <div className="flex flex-col gap-2">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex w-fit items-center text-sm tracking-[0.08em] text-[#D8D1C2] transition-colors duration-300 hover:text-[#F4E0A1]"
                  >
                    <span className="h-px w-0 bg-[#D4AF37] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {t(link.labelKey)}
                  </Link>
                ))}
              </div>
            </nav>

            <div>
              <p className="text-[10px] tracking-[0.26em] text-[#D4AF37] uppercase">{t('footer.socialTitle')}</p>
              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/38 bg-black/35 text-[#D4AF37] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/80 hover:bg-[#D4AF37] hover:text-[#111111]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#D4AF37]/14 bg-[rgba(7,7,7,0.7)] px-6 py-4">
        <p className="mx-auto max-w-7xl text-center text-xs tracking-[0.08em] text-[#A29B8C]">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
