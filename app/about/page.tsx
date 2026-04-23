'use client';

import Image from 'next/image';
import { ArrowRight, Compass, Hammer, Leaf, Sparkles } from 'lucide-react';

const principles = [
  {
    title: 'Sustainability',
    description:
      "Harmonizing architecture with Panama's unique biodiversity. We build for centuries, not seasons.",
    Icon: Leaf,
  },
  {
    title: 'Italian Craftsmanship',
    description:
      'Importing the soul of Italian design where every slab of marble and hand-forged hinge tells a story of mastery.',
    Icon: Hammer,
  },
  {
    title: 'Precision Engineering',
    description:
      'Applying rigorous structural logic to ensure coastal resilience without sacrificing aesthetic weightlessness.',
    Icon: Compass,
  },
];

const leaders = [
  {
    name: 'Paolo Basile',
    role: 'Chief Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Matteo Paolicchi',
    role: 'Head of International Relations',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Martin Dhamo',
    role: 'Head of Construction',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Gianluca Iacoponi',
    role: 'Head of Interiors',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F6F3EA]">
      <section className="relative overflow-hidden border-b border-[#D4AF37]/10 pt-10 sm:pt-14">
        <div
          className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)',
            animation: 'floatGlow 11s ease-in-out infinite',
          }}
        />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center pr-0 lg:pr-12">
            <p
              className="mb-8 text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase reveal"
              style={{ animationDelay: '120ms' }}
            >
              The Genesis
            </p>

            <h1
              className="reveal max-w-xl text-5xl leading-[0.94] text-[#F6F3EA] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: '220ms' }}
            >
              From Tuscan Marble
              <br />
              to American Horizons
            </h1>

            <div
              className="reveal mt-10 max-w-md space-y-6 text-sm leading-7 text-[#BEB8A7]"
              style={{ animationDelay: '320ms' }}
            >
              <p>
                The story of Luxus begins amidst Tuscany&apos;s noble stones and rare materials, where over 25 years of
                luxury villa construction expertise converges with superyacht interior mastery.
              </p>
              <p>
                This unique fusion delivers residences engineered with marine-grade durability, golden-ratio spatial
                flow, and artisanal finishes—creating permanent waterfront galleries that transcend conventional
                architecture across the Americas.
              </p>
            </div>

            <a
              href="#principles"
              className="reveal mt-8 inline-flex w-fit items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-[#D4AF37] uppercase"
              style={{ animationDelay: '420ms' }}
            >
              <span className="inline-block h-px w-10 bg-[#D4AF37]" />
              Discover our heritage
            </a>
          </div>

          <div className="group reveal relative min-h-[420px] overflow-hidden border border-[#D4AF37]/20 shadow-[0_25px_80px_rgba(0,0,0,0.45)] lg:min-h-[760px]" style={{ animationDelay: '280ms' }}>
            <div className="absolute inset-0 transform-gpu transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]">
              <Image
                src="/about%20hero%20bg.png"
                alt="About hero grayscale"
                fill
                className="object-cover object-center grayscale brightness-[0.78]"
                priority
              />
            </div>
            <div className="absolute inset-0 opacity-0 transform-gpu transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-[1.02]">
              <Image
                src="/about%20hero%20bg.png"
                alt="About hero color"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-black/42 to-black/70 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-80" />
            <div className="absolute bottom-6 left-6 max-w-sm border border-[#D4AF37]/30 bg-black/58 p-4 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:border-[#D4AF37]/55 sm:bottom-10 sm:left-10 sm:p-6">
              <p className="text-lg italic leading-8 text-[#E7CB7D]">"Elegance is the only beauty that never fades."</p>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-[#9E998C] uppercase">Audrey Hepburn</p>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="border-b border-[#D4AF37]/10 bg-[linear-gradient(120deg,#111111_0%,#1A1A1A_45%,#141414_100%)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="text-4xl leading-none text-[#F4F0E5] sm:text-5xl lg:text-6xl">
              Our Alchemical
              <br />
              Principles
            </h2>
            <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">The Foundation of Excellence</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {principles.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="reveal group relative overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-b from-white/12 to-white/5 p-6 backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-[#D4AF37]/60"
                style={{ animationDelay: `${180 + index * 120}ms` }}
              >
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center border border-[#D4AF37]/45 bg-black/30 text-[#D4AF37] transition-transform duration-500 group-hover:rotate-6">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-xl text-[#F6F3EA] uppercase">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-200/90">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="border-b border-[#D4AF37]/10 bg-[#070707]">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">The Architects of Experience</p>
            <h2 className="mt-4 text-5xl italic text-[#F5F2EA] sm:text-6xl">Our Leadership</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, index) => (
              <article
                key={leader.name}
                className="reveal group relative overflow-hidden border border-[#D4AF37]/20 bg-[#0E0E0E] transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${220 + index * 120}ms` }}
              >
                <div className="relative h-72 overflow-hidden bg-black transition-transform duration-700 group-hover:scale-[1.03]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover object-center grayscale transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37] transition-transform duration-500 group-hover:rotate-45">
                    <Sparkles className="h-3 w-3" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl text-[#F6F3EA]">{leader.name}</h3>
                  <p className="mt-1 text-[10px] tracking-[0.18em] text-[#D4AF37] uppercase">{leader.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D4AF37]/10 bg-[#060606]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-4xl text-5xl leading-tight text-[#F5F2EA] sm:text-6xl">
            Ready to co-author your
            <br />
            <span className="text-[#D4AF37] italic">Panamanian Legacy?</span>
          </h2>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="border border-[#D4AF37] bg-[#D4AF37] px-10 py-4 text-[11px] font-medium tracking-[0.18em] text-[#0D0D0D] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E0BF58]">
              View the Collection
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/50 px-10 py-4 text-[11px] font-medium tracking-[0.18em] text-[#E8DFC6] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#F2E9D3]">
              Schedule Private Tour
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          animation: riseIn 900ms cubic-bezier(0.2, 0.65, 0.22, 1) both;
        }

        @keyframes riseIn {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -22px, 0);
          }
        }
      `}</style>
    </main>
  );
}
