'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Compass, Leaf, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type ServiceItem = {
  title: string;
  description: string;
  action: string;
  focus: string[];
  metrics: Array<{
    label: string;
    value: string;
    progress: number;
  }>;
  Icon: React.ComponentType<{ className?: string }>;
};

const services: ServiceItem[] = [
  {
    title: 'Real Estate Development',
    description:
      'Strategic land acquisition and visionary planning. We identify the pulse of high-growth markets to build lasting value.',
    action: 'Discover',
    focus: ['Market Intelligence', 'Acquisition Structuring', 'Master Planning'],
    metrics: [
      { label: 'Pipeline Value', value: '$240M', progress: 82 },
      { label: 'Feasibility Confidence', value: '93%', progress: 93 },
      { label: 'Approval Velocity', value: '4.1x', progress: 76 },
    ],
    Icon: Compass,
  },
  {
    title: 'Turnkey Construction',
    description:
      'A seamless transition from blueprint to reality. Our master builders handle every structural nuance with surgical precision.',
    action: 'Execute',
    focus: ['Integrated Delivery', 'Detail Supervision', 'On-Site QA'],
    metrics: [
      { label: 'On-Time Completion', value: '96%', progress: 96 },
      { label: 'Defect Rate', value: '0.8%', progress: 88 },
      { label: 'Craft Compliance', value: '98%', progress: 98 },
    ],
    Icon: Building2,
  },
  {
    title: 'Luxury Renovations',
    description:
      'Breathe new life into heritage estates. We blend historic preservation with cutting-edge smart home technology.',
    action: 'Transform',
    focus: ['Heritage Preservation', 'Luxury Systems', 'Material Restoration'],
    metrics: [
      { label: 'Asset Value Uplift', value: '+34%', progress: 80 },
      { label: 'Energy Optimization', value: '29%', progress: 72 },
      { label: 'Owner Satisfaction', value: '99%', progress: 99 },
    ],
    Icon: Sparkles,
  },
  {
    title: 'Sustainable Consulting',
    description:
      'The future of luxury is ethical. LEED-certified methodologies paired with high-efficiency energy systems.',
    action: 'Evolve',
    focus: ['Net-Zero Strategy', 'ESG Advisory', 'Performance Audits'],
    metrics: [
      { label: 'Carbon Reduction', value: '41%', progress: 84 },
      { label: 'Water Efficiency', value: '37%', progress: 78 },
      { label: 'Certification Success', value: '95%', progress: 95 },
    ],
    Icon: Leaf,
  },
];

function ServiceModal({ service }: { service: ServiceItem }) {
  const { title, description, focus, metrics, Icon } = service;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-10 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] text-[#D4AF37] uppercase">
          {service.action}
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
                <DialogTitle className="text-4xl leading-[0.94] text-[#F4F0E5] sm:text-5xl lg:text-6xl">{title}</DialogTitle>
                <DialogDescription className="mt-5 max-w-2xl text-base leading-8 text-[#BEB7A6]">
                  {description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {focus.map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-[#D4AF37]/18 bg-black/20 px-4 py-3 text-sm text-[#D5CEBD]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-7 sm:p-8 md:p-10 lg:p-12">
              <p className="mb-6 text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">Infographics</p>
              <div className="space-y-5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="border border-[#D4AF37]/16 bg-black/25 p-4">
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <p className="text-xs tracking-[0.08em] text-[#BBB4A3] uppercase">{metric.label}</p>
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
                <p className="text-[10px] tracking-[0.18em] text-[#D4AF37] uppercase">Delivery Note</p>
                <p className="mt-3 text-sm leading-7 text-[#BEB7A6]">
                  Every engagement is led by a principal team and tracked through milestone dashboards for complete
                  transparency from concept to handover.
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
  return (
    <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
      <div className="max-w-2xl">
        <p className="mb-5 text-[10px] font-medium tracking-[0.24em] text-[#D4AF37] uppercase">Our Services</p>
        <h2 className="text-5xl leading-[0.96] text-[#F5F2EA] sm:text-6xl lg:text-7xl">
          The Art of
          <br />
          <span className="italic">Modern Living.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#BFB8A7]">
          From raw earth to architectural masterpieces, Luxus provides a comprehensive suite of services that redefine
          high-end residential and commercial landscapes.
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
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-14 xl:grid-cols-4 xl:gap-0">
      {services.map((service, index) => (
        <article
          key={service.title}
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

          <h3 className="max-w-[10ch] text-[40px] leading-[0.98] text-[#F3EFE5] sm:text-[44px]">{service.title}</h3>

          <p className="mt-6 max-w-[28ch] text-sm leading-7 text-[#AEA795]">{service.description}</p>

          <ServiceModal service={service} />
        </article>
      ))}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#D4AF37]/10 bg-[#060606] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0)_30%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <ServicesIntro />
        <ServicesCards />
      </div>
    </section>
  );
}
