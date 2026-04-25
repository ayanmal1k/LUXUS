'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/components/i18n-provider';

export default function MasteringTropicalHorizonSection() {
  const { t } = useI18n();

  const stats = [
    { value: '38+', label: t('architecturalVision.stats.projectsDelivered') },
    { value: '12', label: t('architecturalVision.stats.countriesReached') },
    { value: '100%', label: t('architecturalVision.stats.italianCertified') },
  ];

  return (
    <section className="relative w-full py-32 bg-[#0B0B0B] overflow-hidden">
      {/* Top divider */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-10" />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(212,175,55,0.09)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(212,175,55,0.07)_0%,transparent_50%)]" />

      {/* Animated floating orb */}
      <motion.div
        className="pointer-events-none absolute -left-56 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0) 70%)' }}
        animate={{ x: [0, 18, 0], y: [0, -22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left: Image block ── */}
          <motion.div
            className="relative w-full lg:w-[54%] shrink-0"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            {/* Outer gold border frame */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-[#D4AF37]/10 pointer-events-none z-10" />

            <div
              className="group relative overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.72), 0 1px 0 rgba(255,255,255,0.04) inset' }}
            >
              {/* Main image — greyscale → colour on hover */}
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src="/mastering bg.png"
                  alt={t('architecturalVision.imageAlt')}
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.06] transition-all duration-[1.4s] ease-out"
                  priority
                  quality={90}
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/75 via-[#0B0B0B]/15 to-transparent" />
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Floating info card */}
              <motion.div
                className="absolute left-6 bottom-6 right-6 sm:left-8 sm:bottom-8 sm:right-auto sm:w-[320px] bg-[#0D0D0D]/92 border border-[#D4AF37]/22 rounded-xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.6)' }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0"
                    style={{ boxShadow: '0 0 8px rgba(212,175,55,0.9)' }}
                  />
                  <span className="text-[#D4AF37] text-[9px] font-semibold tracking-[0.26em] uppercase">
                    {t('architecturalVision.infoCard.location')}
                  </span>
                </div>
                <div className="text-[1.05rem] font-serif font-semibold text-white mb-2 leading-snug">
                  {t('architecturalVision.infoCard.title')}
                </div>
                <div className="text-[#8E877F] text-xs leading-[1.75]">
                  {t('architecturalVision.infoCard.description')}
                </div>
                {/* Bottom gold line */}
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Text content ── */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-10 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[11px] tracking-[0.32em] uppercase font-semibold">
                {t('architecturalVision.eyebrow')}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-serif font-bold leading-[1.06] text-[#F5F2EA]"
            >
              {t('architecturalVision.headingLine1')} <br />
              <span
                style={{
                  color: '#D4AF37',
                  textShadow: '0 0 40px rgba(212,175,55,0.25), 0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                {t('architecturalVision.headingLine2')}
              </span>
              
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/12 to-transparent origin-left"
            />

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              viewport={{ once: true }}
              className="text-[#BFB8A7] text-base leading-[1.9] font-light max-w-lg"
            >
              {t('architecturalVision.description')}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34 }}
              viewport={{ once: true }}
              className="flex gap-10 pt-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-2xl font-serif font-bold"
                    style={{ color: '#D4AF37', textShadow: '0 0 18px rgba(212,175,55,0.3)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[#5A544D] text-[10px] tracking-[0.2em] uppercase font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA link */}
            <motion.a
              href="/portfolio"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              viewport={{ once: true }}
              className="group/link inline-flex items-center gap-3 w-fit mt-2"
            >
              <span className="text-[#D4AF37] text-[11px] tracking-[0.3em] uppercase font-semibold group-hover/link:text-white transition-colors duration-300">
                {t('architecturalVision.cta')}
              </span>
              <div className="h-[1px] w-8 bg-[#D4AF37]/50 group-hover/link:w-16 group-hover/link:bg-white transition-all duration-500" />
            </motion.a>
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-10" />
    </section>
  );
}
