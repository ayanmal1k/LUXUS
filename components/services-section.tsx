'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Compass, Leaf, Sparkles, type LucideIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useI18n } from '@/components/i18n-provider';

type ServiceItem = {
  titleKey:
    | 'servicesSection.cards.realEstate.title'
    | 'servicesSection.cards.turnkey.title'
    | 'servicesSection.cards.renovations.title'
    | 'servicesSection.cards.sustainability.title';
  descriptionKey:
    | 'servicesSection.cards.realEstate.description'
    | 'servicesSection.cards.turnkey.description'
    | 'servicesSection.cards.renovations.description'
    | 'servicesSection.cards.sustainability.description';
  actionKey:
    | 'servicesSection.cards.realEstate.action'
    | 'servicesSection.cards.turnkey.action'
    | 'servicesSection.cards.renovations.action'
    | 'servicesSection.cards.sustainability.action';
  focusKeys: Array<
    | 'servicesSection.cards.realEstate.focus.marketIntelligence'
    | 'servicesSection.cards.realEstate.focus.acquisitionStructuring'
    | 'servicesSection.cards.realEstate.focus.masterPlanning'
    | 'servicesSection.cards.turnkey.focus.integratedDelivery'
    | 'servicesSection.cards.turnkey.focus.detailSupervision'
    | 'servicesSection.cards.turnkey.focus.onsiteQA'
    | 'servicesSection.cards.renovations.focus.heritagePreservation'
    | 'servicesSection.cards.renovations.focus.luxurySystems'
    | 'servicesSection.cards.renovations.focus.materialRestoration'
    | 'servicesSection.cards.sustainability.focus.netZeroStrategy'
    | 'servicesSection.cards.sustainability.focus.esgAdvisory'
    | 'servicesSection.cards.sustainability.focus.performanceAudits'
  >;
  metrics: Array<{
    labelKey:
      | 'servicesSection.cards.realEstate.metrics.pipelineValue'
      | 'servicesSection.cards.realEstate.metrics.feasibilityConfidence'
      | 'servicesSection.cards.realEstate.metrics.approvalVelocity'
      | 'servicesSection.cards.turnkey.metrics.onTimeCompletion'
      | 'servicesSection.cards.turnkey.metrics.defectRate'
      | 'servicesSection.cards.turnkey.metrics.craftCompliance'
      | 'servicesSection.cards.renovations.metrics.assetValueUplift'
      | 'servicesSection.cards.renovations.metrics.energyOptimization'
      | 'servicesSection.cards.renovations.metrics.ownerSatisfaction'
      | 'servicesSection.cards.sustainability.metrics.carbonReduction'
      | 'servicesSection.cards.sustainability.metrics.waterEfficiency'
      | 'servicesSection.cards.sustainability.metrics.certificationSuccess';
    value: string;
    progress: number;
  }>;
  Icon: LucideIcon;
};

const services: ServiceItem[] = [
  {
    titleKey: 'servicesSection.cards.realEstate.title',
    descriptionKey: 'servicesSection.cards.realEstate.description',
    actionKey: 'servicesSection.cards.realEstate.action',
    focusKeys: [
      'servicesSection.cards.realEstate.focus.marketIntelligence',
      'servicesSection.cards.realEstate.focus.acquisitionStructuring',
      'servicesSection.cards.realEstate.focus.masterPlanning',
    ],
    metrics: [
      { labelKey: 'servicesSection.cards.realEstate.metrics.pipelineValue', value: '$240M', progress: 82 },
      { labelKey: 'servicesSection.cards.realEstate.metrics.feasibilityConfidence', value: '93%', progress: 93 },
      { labelKey: 'servicesSection.cards.realEstate.metrics.approvalVelocity', value: '4.1x', progress: 76 },
    ],
    Icon: Compass,
  },
  {
    titleKey: 'servicesSection.cards.turnkey.title',
    descriptionKey: 'servicesSection.cards.turnkey.description',
    actionKey: 'servicesSection.cards.turnkey.action',
    focusKeys: [
      'servicesSection.cards.turnkey.focus.integratedDelivery',
      'servicesSection.cards.turnkey.focus.detailSupervision',
      'servicesSection.cards.turnkey.focus.onsiteQA',
    ],
    metrics: [
      { labelKey: 'servicesSection.cards.turnkey.metrics.onTimeCompletion', value: '96%', progress: 96 },
      { labelKey: 'servicesSection.cards.turnkey.metrics.defectRate', value: '0.8%', progress: 88 },
      { labelKey: 'servicesSection.cards.turnkey.metrics.craftCompliance', value: '98%', progress: 98 },
    ],
    Icon: Building2,
  },
  {
    titleKey: 'servicesSection.cards.renovations.title',
    descriptionKey: 'servicesSection.cards.renovations.description',
    actionKey: 'servicesSection.cards.renovations.action',
    focusKeys: [
      'servicesSection.cards.renovations.focus.heritagePreservation',
      'servicesSection.cards.renovations.focus.luxurySystems',
      'servicesSection.cards.renovations.focus.materialRestoration',
    ],
    metrics: [
      { labelKey: 'servicesSection.cards.renovations.metrics.assetValueUplift', value: '+34%', progress: 80 },
      { labelKey: 'servicesSection.cards.renovations.metrics.energyOptimization', value: '29%', progress: 72 },
      { labelKey: 'servicesSection.cards.renovations.metrics.ownerSatisfaction', value: '99%', progress: 99 },
    ],
    Icon: Sparkles,
  },
  {
    titleKey: 'servicesSection.cards.sustainability.title',
    descriptionKey: 'servicesSection.cards.sustainability.description',
    actionKey: 'servicesSection.cards.sustainability.action',
    focusKeys: [
      'servicesSection.cards.sustainability.focus.netZeroStrategy',
      'servicesSection.cards.sustainability.focus.esgAdvisory',
      'servicesSection.cards.sustainability.focus.performanceAudits',
    ],
    metrics: [
      { labelKey: 'servicesSection.cards.sustainability.metrics.carbonReduction', value: '41%', progress: 84 },
      { labelKey: 'servicesSection.cards.sustainability.metrics.waterEfficiency', value: '37%', progress: 78 },
      { labelKey: 'servicesSection.cards.sustainability.metrics.certificationSuccess', value: '95%', progress: 95 },
    ],
    Icon: Leaf,
  },
];

function ServiceModal({ service }: { service: ServiceItem }) {
  const { t } = useI18n();
  const { titleKey, descriptionKey, focusKeys, metrics, Icon } = service;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-10 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] text-[#D4AF37] uppercase">
          {t(service.actionKey)}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-h-[90vh] max-w-[96vw] overflow-y-auto border-[#D4AF37]/25 bg-[linear-gradient(160deg,#121212_0%,#0B0B0B_100%)] p-0 text-[#F6F3EA] shadow-[0_35px_90px_rgba(0,0,0,0.72)] duration-500 sm:max-w-5xl lg:max-w-6xl"
        showCloseButton
      >
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(212,175,55,0.16),rgba(212,175,55,0)_34%)]" />
          <div className="relative grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
            <div className="border-b border-[#D4AF37]/15 p-7 sm:p-8 md:border-r md:border-b-0 md:p-10 lg:p-12">
              <DialogHeader>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-[#D4AF37]/45 bg-black/20 text-[#D4AF37]">
                  <Icon className="h-5 w-5" />
                </div>
                <DialogTitle className="text-4xl leading-[0.94] text-[#F4F0E5] sm:text-5xl lg:text-6xl">{t(titleKey)}</DialogTitle>
                <DialogDescription className="mt-5 max-w-2xl text-base leading-8 text-[#BEB7A6]">
                  {t(descriptionKey)}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {focusKeys.map((itemKey) => (
                  <div key={itemKey} className="flex items-center gap-3 border border-[#D4AF37]/18 bg-black/20 px-4 py-3 text-sm text-[#D5CEBD]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="tracking-wide">{t(itemKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 sm:p-8 md:p-10 lg:p-12">
              <p className="mb-6 text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">{t('servicesSection.modal.infographics')}</p>
              <div className="space-y-5">
                {metrics.map((metric) => (
                  <div key={metric.labelKey} className="border border-[#D4AF37]/16 bg-black/25 p-4">
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <p className="text-xs tracking-[0.08em] text-[#BBB4A3] uppercase">{t(metric.labelKey)}</p>
                      <p className="text-2xl font-semibold text-[#E7CB7D]">{metric.value}</p>
                    </div>
                    <div className="h-1.5 overflow-hidden bg-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#CFA84C] to-[#E7CB7D] transition-all duration-700 ease-out"
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border border-[#D4AF37]/20 bg-black/30 p-5">
                <p className="text-[10px] tracking-[0.18em] text-[#D4AF37] uppercase">{t('servicesSection.modal.deliveryNoteTitle')}</p>
                <p className="mt-3 text-sm leading-7 text-[#BEB7A6]">
                  {t('servicesSection.modal.deliveryNoteBody')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ServicesIntro() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
      <div className="max-w-2xl">
        <p className="mb-5 text-[10px] font-medium tracking-[0.24em] text-[#D4AF37] uppercase">{t('servicesSection.intro.eyebrow')}</p>
        <h2 className="text-5xl leading-[0.96] text-[#F5F2EA] sm:text-6xl lg:text-7xl">
          {t('servicesSection.intro.headingLine1')}
          <br />
          <span className="italic">{t('servicesSection.intro.headingLine2')}</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#BFB8A7]">
          {t('servicesSection.intro.description')}
        </p>
      </div>

      <div className="group relative min-h-[280px] overflow-hidden border border-[#D4AF37]/20 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:min-h-[340px] lg:min-h-[420px]">
        <video
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/icon%20shine.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
      </div>
    </div>
  );
}

function ServicesCards() {
  const { t } = useI18n();

  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-14 xl:grid-cols-4 xl:gap-0">
      {services.map((service, index) => (
        <article
          key={service.titleKey}
          className={`group relative overflow-hidden border border-[#D4AF37]/12 bg-[linear-gradient(160deg,#131313_0%,#0F0F10_55%,#0B0B0B_100%)] p-7 transition-all duration-700 hover:z-10 hover:border-[#D4AF37]/45 hover:shadow-[0_16px_45px_rgba(0,0,0,0.45)] xl:min-h-[460px] ${
            index === 0
              ? 'xl:-translate-y-6'
              : index === 1
                ? 'xl:translate-y-0'
                : index === 2
                  ? 'xl:-translate-y-3'
                  : 'xl:translate-y-2'
          }`}
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(212,175,55,0.08),rgba(212,175,55,0)_40%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="mb-9 inline-flex h-11 w-11 items-center justify-center border border-[#D4AF37]/35 bg-black/15 text-[#D4AF37] transition-all duration-500 group-hover:border-[#D4AF37]/65 group-hover:bg-black/30">
            <service.Icon className="h-4 w-4" />
          </div>

          <h3 className="max-w-[10ch] text-[40px] leading-[0.98] text-[#F3EFE5] sm:text-[44px]">{t(service.titleKey)}</h3>

          <p className="mt-6 max-w-[28ch] text-sm leading-7 text-[#AEA795]">{t(service.descriptionKey)}</p>

          <ServiceModal service={service} />
        </article>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#060606] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0)_30%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <ServicesIntro />
        <ServicesCards />
      </div>
    </section>
  );
}
