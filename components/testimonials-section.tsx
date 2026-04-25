 'use client';

import { Quote } from 'lucide-react';
import { useI18n } from '@/components/i18n-provider';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <article
      className="group relative overflow-hidden border border-[#D4AF37]/16 bg-[linear-gradient(165deg,#181818_0%,#111111_55%,#0B0B0B_100%)] p-8 shadow-[0_22px_55px_rgba(0,0,0,0.38)] transition-all duration-700 hover:-translate-y-1.5 hover:border-[#D4AF37]/45 sm:p-10"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(212,175,55,0.08),rgba(212,175,55,0)_38%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative">
        <Quote className="h-6 w-6 text-[#D4AF37]" />

        <p className="mt-8 text-3xl leading-[1.35] text-[#D8D1C0] italic sm:text-4xl">
          "{item.quote}"
        </p>

        <div className="mt-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">{item.name}</p>
          <p className="mt-2 text-xs tracking-[0.14em] text-[#A39C8A] uppercase">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const { t } = useI18n();

  const testimonials: Testimonial[] = [
    {
      quote: t('testimonialsSection.items.first.quote'),
      name: t('testimonialsSection.items.first.name'),
      role: t('testimonialsSection.items.first.role'),
    },
    {
      quote: t('testimonialsSection.items.second.quote'),
      name: t('testimonialsSection.items.second.name'),
      role: t('testimonialsSection.items.second.role'),
    },
    {
      quote: t('testimonialsSection.items.third.quote'),
      name: t('testimonialsSection.items.third.name'),
      role: t('testimonialsSection.items.third.role'),
    },
  ];

  return (
    <section className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(212,175,55,0.1)_0%,rgba(212,175,55,0)_32%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="text-5xl text-[#F0EBDD] italic sm:text-6xl">{t('testimonialsSection.heading')}</h2>
          <span className="mx-auto mt-5 block h-px w-24 bg-[#D4AF37]/70" />
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
