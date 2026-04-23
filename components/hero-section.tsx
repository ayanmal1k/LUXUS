'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/components/i18n-provider';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0" style={{ animation: 'backgroundZoom 18s ease-in-out infinite alternate' }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%282%29-ANsQdQRCy4E3IinA50kaEdtz4DJLLL.png"
          alt={t('hero.imageAlt')}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.22)_0%,rgba(212,175,55,0)_38%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_28%)]" />

      <div
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.38) 0%, rgba(212,175,55,0) 70%)',
          animation: 'floatSlow 9s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0) 70%)',
          animation: 'floatSlow 12s ease-in-out infinite reverse',
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div
          className={`mb-8 inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-xs font-medium tracking-[0.22em] text-gray-200 uppercase backdrop-blur-md transition-all duration-1000 sm:text-sm ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: '#D4AF37',
              boxShadow: '0 0 16px rgba(212, 175, 55, 0.95)',
              animation: 'glowPulse 2.4s ease-in-out infinite',
            }}
          />
          {t('hero.explorationTag')}
        </div>

        <div
          className={`mx-auto max-w-5xl transition-all duration-1000 delay-150 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
          }`}
        >
          <h1
            className="text-center text-4xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-8xl"
            style={{ textShadow: '0 10px 35px rgba(0, 0, 0, 0.65)' }}
          >
            {t('hero.headingLine1')}
          </h1>
          <h2
            className="mt-2 text-center text-3xl font-bold leading-[1] sm:text-5xl lg:text-7xl"
            style={{
              color: '#D4AF37',
              textShadow: '0 10px 28px rgba(0, 0, 0, 0.45), 0 0 22px rgba(212, 175, 55, 0.35)',
            }}
          >
            {t('hero.headingLine2')}
          </h2>
        </div>

        <div
          className={`mx-auto mt-8 max-w-3xl rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur-md transition-all duration-1000 delay-300 sm:p-7 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-center text-sm leading-relaxed text-gray-200 sm:text-base">
            {t('hero.description')}
          </p>
        </div>

        <div
          className={`mt-10 flex justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            className="group relative overflow-hidden rounded-md px-8 py-3 text-sm font-semibold tracking-[0.14em] text-gray-900 uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-12 sm:py-4 sm:text-base"
            style={{
              backgroundColor: '#D4AF37',
              boxShadow: '0 14px 36px rgba(212, 175, 55, 0.45)',
            }}
          >
            <span
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(100deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0) 60%)',
                transform: 'translateX(-130%)',
                animation: 'sweep 3.2s ease-in-out infinite',
              }}
            />
            <span className="relative">{t('hero.cta')}</span>
          </button>
        </div>

        <div
          className={`mt-6 flex flex-col items-center justify-center text-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-gray-300 uppercase sm:text-sm">
            {t('hero.exploreHeritage')}
          </p>
          <ChevronDown
            className="mt-2 h-6 w-6 text-[#D4AF37]"
            style={{ animation: 'bounceArrow 1.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-7xl px-4 pb-8 sm:mt-14 sm:px-6 sm:pb-12 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <div
            className={`group relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-b from-white/12 to-white/5 p-5 text-center backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-[#D4AF37]/60 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <p className="text-3xl font-bold sm:text-4xl" style={{ color: '#D4AF37' }}>
              20+
            </p>
            <p className="mt-2 text-xs font-light tracking-wider text-gray-200 uppercase sm:text-sm">
              {t('hero.stats.experience')}
            </p>
          </div>

          <div
            className={`group relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-b from-white/12 to-white/5 p-5 text-center backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-[#D4AF37]/60 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '650ms' }}
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <p className="text-3xl font-bold sm:text-4xl" style={{ color: '#D4AF37' }}>
              50+
            </p>
            <p className="mt-2 text-xs font-light tracking-wider text-gray-200 uppercase sm:text-sm">
              {t('hero.stats.projects')}
            </p>
          </div>

          <div
            className={`group relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-b from-white/12 to-white/5 p-5 text-center backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-[#D4AF37]/60 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <p className="text-3xl font-bold sm:text-4xl" style={{ color: '#D4AF37' }}>
              100%
            </p>
            <p className="mt-2 text-xs font-light tracking-wider text-gray-200 uppercase sm:text-sm">
              {t('hero.stats.materials')}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -18px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.65; }
          50% { opacity: 1; }
        }

        @keyframes backgroundZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        @keyframes sweep {
          0% { transform: translateX(-130%); }
          40% { transform: translateX(140%); }
          100% { transform: translateX(140%); }
        }

        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(8px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
