'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Expand,
  GalleryHorizontal,
  Layers3,
  Maximize2,
  Play,
  SquareStack,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const DynamicPanoramaViewer = dynamic(
  () => import('react-pannellum-next').then((mod) => mod.PanoramaViewer as React.ComponentType<any>),
  { ssr: false }
);

type Category = 'All' | 'Residential' | 'Commercial' | 'Marine';

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, 'All'>;
  location: string;
  size: string;
  year: string;
  materials: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  gallery: string[];
  panorama: string;
  floorPlan: string;
  timelapse: string;
  stats: Array<{ label: string; value: string }>;
  features: string[];
};

type CaseStudy = {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  stat: string;
};

const categories: Category[] = ['All', 'Residential', 'Commercial', 'Marine'];

const projects: Project[] = [
  {
    slug: 'ocean-reef-villa',
    title: 'Ocean Reef Villa',
    subtitle: 'Made in Italy Luxury',
    category: 'Residential',
    location: 'Ocean Reef Islands, Panama',
    size: '8,400 sq ft',
    year: '2025',
    materials: 'Carrara marble, bronze, teak',
    overview:
      'A waterfront villa shaped like a private gallery, balancing marine resilience with the softness of Tuscan materiality and a restrained, luminous interior palette.',
    challenge:
      'Deliver a residence exposed to salt air, humidity, and changing shoreline conditions without compromising elegance.',
    solution:
      'A yacht-inspired structural envelope, concealed service systems, and carefully tuned spatial thresholds for shade, airflow, and privacy.',
    result:
      'A durable coastal home with museum-grade finishes, generous indoor-outdoor flow, and a calm procession of rooms centered on the water.',
    image: '/hero%20bg.png',
    gallery: ['/hero%20bg.png', '/about%20hero%20bg.png', '/mastering%20bg.png'],
    panorama: '/360%20panorama/1.jpg',
    floorPlan: '/Tuscan%20Travertine.png',
    timelapse: '/icon%20shine.mp4',
    stats: [
      { label: 'Location', value: 'Panama' },
      { label: 'Material Palette', value: 'Italy + Marine Grade' },
      { label: 'Completion', value: '2025' },
    ],
    features: ['Salt-resistant envelope', 'Golden-ratio circulation', 'Private shoreline terrace', 'Bespoke Italian joinery'],
  },
  {
    slug: 'marina-atelier',
    title: 'Marina Atelier',
    subtitle: 'Floating Commercial Showcase',
    category: 'Commercial',
    location: 'Balboa District',
    size: '12,100 sq ft',
    year: '2024',
    materials: 'Ebonized oak, brushed brass, stone',
    overview:
      'A client-facing experience center designed as a quiet destination for hospitality, negotiation, and brand storytelling.',
    challenge:
      'Create a commercial environment that feels intimate, premium, and memorable while accommodating frequent daily use.',
    solution:
      'Layered lighting, acoustic material sequencing, and a central arrival axis that frames the project from the first step inside.',
    result:
      'A refined showroom that functions as both a sales environment and an architectural statement piece.',
    image: '/mastering%20bg.png',
    gallery: ['/mastering%20bg.png', '/about%20hero%20bg.png', '/hero%20bg.png'],
    panorama: '/360%20panorama/2.jpg',
    floorPlan: '/Botticino%20Marble.png',
    timelapse: '/icon%20shine.mp4',
    stats: [
      { label: 'Location', value: 'Balboa' },
      { label: 'Use', value: 'Commercial Showcase' },
      { label: 'Completion', value: '2024' },
    ],
    features: ['Client experience suite', 'Acoustic zoning', 'Feature lighting', 'Flexible meeting rooms'],
  },
  {
    slug: 'aurelia-penthouse',
    title: 'Aurelia Penthouse',
    subtitle: 'Urban Residential Retreat',
    category: 'Residential',
    location: 'Panama City',
    size: '5,700 sq ft',
    year: '2024',
    materials: 'Travertine, linen oak, patinated metal',
    overview:
      'An elevated city residence that translates coastal calm into a restrained vertical composition with rich, tactile surfaces.',
    challenge:
      'Maintain privacy and warmth in a high-rise setting while preserving long-view sightlines and natural light.',
    solution:
      'A perimeter of soft architectural fins, layered drapery, and integrated millwork that conceals function and amplifies serenity.',
    result:
      'A luminous urban retreat with gallery-like walls, quiet transitions, and a distinctly Mediterranean cadence.',
    image: '/about%20hero%20bg.png',
    gallery: ['/about%20hero%20bg.png', '/hero%20bg.png', '/carara%20marble.png'],
    panorama: '/360%20panorama/3.jpeg',
    floorPlan: '/carara%20marble.png',
    timelapse: '/logo%20to%20icon.mp4',
    stats: [
      { label: 'Location', value: 'City Center' },
      { label: 'Type', value: 'Penthouse' },
      { label: 'Completion', value: '2024' },
    ],
    features: ['Perimeter fins', 'Integrated millwork', 'Quiet spa suite', 'Panoramic city views'],
  },
  {
    slug: 'harbor-yard',
    title: 'Harbor Yard',
    subtitle: 'Marine-Grade Floating Residence',
    category: 'Marine',
    location: 'Pacific Coast',
    size: '6,200 sq ft',
    year: '2025',
    materials: 'Marine composites, teak, brushed stainless',
    overview:
      'A residence informed by superyacht engineering, with water-resistant detailing and a spatial rhythm that echoes onboard circulation.',
    challenge:
      'Deliver waterfront durability and visual lightness in a climate where moisture and motion are constant design factors.',
    solution:
      'Marine-grade construction, elevated thresholds, and a material system chosen for both resilience and tactility.',
    result:
      'A stable, atmospheric home with the precision of a vessel and the comfort of a private villa.',
    image: '/Botticino%20Marble.png',
    gallery: ['/Botticino%20Marble.png', '/Tuscan%20Travertine.png', '/hero%20bg.png'],
    panorama: '/360%20panorama/1.jpg',
    floorPlan: '/mastering%20bg.png',
    timelapse: '/icon%20shine.mp4',
    stats: [
      { label: 'Location', value: 'Pacific Coast' },
      { label: 'Type', value: 'Marine Residential' },
      { label: 'Completion', value: '2025' },
    ],
    features: ['Marine composites', 'Elevated thresholds', 'Seaworthy detailing', 'Waterfront lounge deck'],
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: 'Ocean Reef Villa',
    subtitle: 'Made in Italy Luxury',
    challenge: 'A shoreline residence needed to feel timeless while surviving salt, sun, and humidity.',
    solution: 'A marine-grade shell wrapped around warm Italian surfaces and a calm, axial plan.',
    result: 'A waterfront home that feels more like a private museum than a coastal house.',
    image: '/hero%20bg.png',
    stat: '32% faster delivery through prefabricated precision components',
  },
  {
    title: 'Marina Atelier',
    subtitle: 'Commercial Experience Center',
    challenge: 'The brief required a commercial interior that felt editorial, not transactional.',
    solution: 'Layered light, acoustic softness, and a highly controlled arrival sequence.',
    result: 'A premium client environment that elevates the brand through architecture.',
    image: '/mastering%20bg.png',
    stat: '18 curated material touchpoints across the visitor journey',
  },
  {
    title: 'Harbor Yard',
    subtitle: 'Marine-Grade Residence',
    challenge: 'The home had to read as delicate while being engineered for rough coastal conditions.',
    solution: 'Yacht-derived structural logic with tactile finishes and hidden service integration.',
    result: 'A stable and luminous residence with a subtle nautical discipline.',
    image: '/Botticino%20Marble.png',
    stat: '100% coastal-spec materials throughout the envelope',
  },
];

function ProjectFeature({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 border border-[#D4AF37]/14 bg-black/20 px-4 py-3">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
      <div>
        <p className="text-[10px] tracking-[0.2em] text-[#8F897C] uppercase">{label}</p>
        <p className="mt-1 text-sm text-[#F5F2EA]">{value}</p>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [planPreviewOpen, setPlanPreviewOpen] = useState(false);
  const [panoramaOpen, setPanoramaOpen] = useState(false);

  useEffect(() => {
    setPlanPreviewOpen(false);
    setPanoramaOpen(false);
  }, [project.slug]);

  return (
    <>
      <Dialog open onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-h-[92vh] max-w-[96vw] overflow-y-auto border-[#D4AF37]/22 bg-[linear-gradient(160deg,#111111_0%,#090909_100%)] p-0 text-[#F6F3EA] shadow-[0_40px_100px_rgba(0,0,0,0.75)] duration-500 sm:max-w-5xl lg:max-w-6xl" showCloseButton>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(212,175,55,0.16),rgba(212,175,55,0)_34%),radial-gradient(circle_at_82%_12%,rgba(16,185,129,0.12),rgba(16,185,129,0)_30%)]" />

            <div className="relative h-[38vh] min-h-[320px] w-full border-b border-[#D4AF37]/14">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
              <div className="absolute left-6 right-6 bottom-6 max-w-3xl sm:left-10 sm:bottom-10">
                <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">{project.category}</p>
                <h3 className="mt-3 text-4xl leading-[0.95] text-[#F5F2EA] sm:text-5xl lg:text-6xl">{project.title}</h3>
                <p className="mt-3 text-sm tracking-[0.18em] text-[#B8B2A4] uppercase">{project.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-b border-[#D4AF37]/12 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <DialogHeader className="text-left">
                  <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Project Overview</p>
                  <DialogTitle className="mt-3 text-3xl text-[#F5F2EA] sm:text-4xl">{project.subtitle}</DialogTitle>
                  <DialogDescription className="mt-5 max-w-2xl text-base leading-8 text-[#C1BAAA]">
                    {project.overview}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <ProjectFeature label="Location" value={project.location} />
                  <ProjectFeature label="Size" value={project.size} />
                  <ProjectFeature label="Materials" value={project.materials} />
                  <ProjectFeature label="Completion" value={project.year} />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="border border-[#D4AF37]/14 bg-black/15 p-4">
                      <p className="text-[10px] tracking-[0.22em] text-[#8F897C] uppercase">{stat.label}</p>
                      <p className="mt-2 text-2xl text-[#E7CB7D]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="border border-[#D4AF37]/14 bg-black/20 p-5">
                    <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Challenge</p>
                    <p className="mt-3 text-sm leading-7 text-[#C4BDAD]">{project.challenge}</p>
                  </div>
                  <div className="border border-[#D4AF37]/14 bg-black/20 p-5">
                    <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Solution</p>
                    <p className="mt-3 text-sm leading-7 text-[#C4BDAD]">{project.solution}</p>
                  </div>
                  <div className="border border-[#D4AF37]/14 bg-black/20 p-5">
                    <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Result</p>
                    <p className="mt-3 text-sm leading-7 text-[#C4BDAD]">{project.result}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 text-[#D4AF37]">
                  <GalleryHorizontal className="h-4 w-4" />
                  <p className="text-[10px] tracking-[0.24em] uppercase">Image Carousel</p>
                </div>

                <div className="mt-5">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.gallery.map((image) => (
                        <CarouselItem key={image}>
                          <div className="relative aspect-[16/10] overflow-hidden border border-[#D4AF37]/15 bg-black/20">
                            <Image src={image} alt={project.title} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-3 border-[#D4AF37]/25 bg-black/55 text-[#F5F2EA] hover:bg-[#D4AF37] hover:text-black" />
                    <CarouselNext className="right-3 border-[#D4AF37]/25 bg-black/55 text-[#F5F2EA] hover:bg-[#D4AF37] hover:text-black" />
                  </Carousel>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="flex items-center gap-3 text-[#D4AF37]">
                    <Compass className="h-4 w-4" />
                    <p className="text-[10px] tracking-[0.24em] uppercase">360 Panorama Viewer</p>
                  </div>
                  <div className="rounded-2xl border border-[#D4AF37]/14 bg-black/20 p-4">
                    <div className="relative aspect-[16/8] overflow-hidden rounded-xl border border-[#D4AF37]/15">
                      <Image
                        src={project.panorama}
                        alt={`${project.title} panorama preview`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/20" />
                      <button
                        type="button"
                        onClick={() => setPanoramaOpen(true)}
                        className="absolute left-4 bottom-4 inline-flex items-center gap-2 border border-[#D4AF37]/45 bg-black/60 px-4 py-2 text-[10px] tracking-[0.22em] text-[#E7CB7D] uppercase backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37] hover:text-[#F5F2EA]"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        View 360
                      </button>
                    </div>
                    <p className="mt-3 text-[10px] tracking-[0.2em] text-[#8F897C] uppercase">Open modal and drag horizontally to look around</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="flex items-center gap-3 text-[#D4AF37]">
                    <Play className="h-4 w-4" />
                    <p className="text-[10px] tracking-[0.24em] uppercase">Timelapse Video</p>
                  </div>
                  <div className="overflow-hidden border border-[#D4AF37]/14 bg-black/20">
                    <video className="h-[250px] w-full object-cover" autoPlay muted loop playsInline preload="metadata">
                      <source src={project.timelapse} type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="flex items-center gap-3 text-[#D4AF37]">
                    <Layers3 className="h-4 w-4" />
                    <p className="text-[10px] tracking-[0.24em] uppercase">Floor Plans</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPlanPreviewOpen(true)}
                    className="group relative overflow-hidden border border-[#D4AF37]/20 bg-black/20 text-left transition-all duration-500 hover:border-[#D4AF37]/45"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image src={project.floorPlan} alt={`${project.title} floor plan`} fill className="object-cover object-center grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div className="absolute left-4 bottom-4 flex items-center gap-3 text-[#F5F2EA]">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/35 bg-black/55 text-[#D4AF37]">
                          <Expand className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Tap to zoom</p>
                          <p className="text-sm text-[#F5F2EA]">Open lightbox floor plan</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-2 border border-[#D4AF37]/16 bg-black/15 px-3 py-2 text-[10px] tracking-[0.18em] text-[#D6CFBE] uppercase">
                      <SquareStack className="h-3.5 w-3.5 text-[#D4AF37]" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={planPreviewOpen} onOpenChange={setPlanPreviewOpen}>
        <DialogContent className="max-w-[96vw] border-[#D4AF37]/22 bg-[#0A0A0A] p-4 text-[#F6F3EA] shadow-[0_40px_100px_rgba(0,0,0,0.72)] sm:max-w-4xl" showCloseButton>
          <DialogHeader className="text-left">
            <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Floor Plan Lightbox</p>
            <DialogTitle className="text-3xl text-[#F5F2EA]">{project.title}</DialogTitle>
            <DialogDescription className="text-[#BFB7A6]">
              Zoomed plan view for review and presentation.
            </DialogDescription>
          </DialogHeader>
          <div className="relative mt-2 overflow-auto border border-[#D4AF37]/14 bg-black/20">
            <Image src={project.floorPlan} alt={`${project.title} floor plan detail`} width={1800} height={1100} className="h-auto w-full min-w-[1000px] object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={panoramaOpen} onOpenChange={setPanoramaOpen}>
        <DialogContent className="max-w-[96vw] border-[#D4AF37]/22 bg-[#0A0A0A] p-4 text-[#F6F3EA] shadow-[0_40px_100px_rgba(0,0,0,0.72)] sm:max-w-6xl" showCloseButton>
          <DialogHeader className="text-left">
            <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">360 Panorama</p>
            <DialogTitle className="text-3xl text-[#F5F2EA]">{project.title}</DialogTitle>
            <DialogDescription className="text-[#BFB7A6]">Interactive Pannellum viewer. Drag to look around the panorama.</DialogDescription>
          </DialogHeader>

          <div className="relative mt-2 aspect-[16/7] overflow-hidden border border-[#D4AF37]/14 bg-black/20">
            <DynamicPanoramaViewer imagePath={project.panorama} hotSpots={[]} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="bg-[#050505] text-[#F6F3EA]">
      <section className="relative min-h-screen overflow-hidden border-b border-[#D4AF37]/10">
        <div className="absolute inset-0">
          <Image src="/hero%20bg.png" alt="Luxury portfolio hero" fill priority className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.52)_46%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(212,175,55,0.26)_0%,rgba(212,175,55,0)_34%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.17)_0%,rgba(16,185,129,0)_30%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0))]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20"
        >
          <div className="max-w-4xl border border-[#D4AF37]/18 bg-black/28 p-6 backdrop-blur-[3px] sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/35 bg-black/45 px-3 py-1 text-[10px] tracking-[0.28em] text-[#E7CB7D] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              Our Portfolio
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[0.9] text-[#F5F2EA] sm:text-6xl lg:text-8xl">
              Italian Craftsmanship <br /> in Every Detail
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#D4CCBC] sm:text-lg">
              A curated collection of residences, commercial spaces, and marine-inspired environments built with a
              luxury pacing that favors precision, material depth, and quiet confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="inline-flex items-center border border-[#D4AF37]/25 bg-black/35 px-3 py-1 text-[10px] tracking-[0.2em] text-[#D6CDBD] uppercase">Residential</span>
              <span className="inline-flex items-center border border-[#D4AF37]/25 bg-black/35 px-3 py-1 text-[10px] tracking-[0.2em] text-[#D6CDBD] uppercase">Commercial</span>
              <span className="inline-flex items-center border border-[#D4AF37]/25 bg-black/35 px-3 py-1 text-[10px] tracking-[0.2em] text-[#D6CDBD] uppercase">Marine</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gallery"
                className="inline-flex items-center gap-3 border border-[#D4AF37] bg-[#D4AF37] px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#090909] uppercase transition-transform duration-500 hover:-translate-y-0.5"
              >
                Explore Projects
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@luxus.com?subject=Portfolio%20Inquiry"
                className="inline-flex items-center gap-3 border border-[#D4AF37]/35 px-6 py-3 text-[11px] font-semibold tracking-[0.22em] text-[#F0E7D2] uppercase transition-colors duration-500 hover:border-[#D4AF37] hover:text-[#FFFFFF]"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="gallery" className="border-b border-[#D4AF37]/10 bg-[linear-gradient(160deg,#0C0C0C_0%,#070707_50%,#0A0A0A_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Filterable Project Gallery</p>
              <h2 className="mt-4 text-4xl leading-[0.96] text-[#F5F2EA] sm:text-5xl lg:text-6xl">
                Spaces shaped for <span className="italic">luxury experiences</span>
              </h2>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-1 lg:max-w-none">
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap border px-5 py-3 text-[10px] tracking-[0.24em] uppercase transition-all duration-500 ${
                      active
                        ? 'border-[#D4AF37] bg-[#D4AF37] text-[#090909]'
                        : 'border-[#D4AF37]/20 bg-black/20 text-[#CBBFA8] hover:border-[#D4AF37]/45 hover:text-[#F5F2EA]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleProjects.map((project) => (
                <motion.button
                  key={project.slug}
                  type="button"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative overflow-hidden border border-[#D4AF37]/14 bg-[#0A0A0A] text-left transition-all duration-700 hover:border-[#D4AF37]/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/28 to-black/10 transition-opacity duration-700 group-hover:from-black/72" />
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#D4AF37]/35 transition-colors duration-700" />
                    <div className="absolute right-4 top-4 rounded-full border border-[#D4AF37]/30 bg-black/45 px-3 py-1 text-[10px] tracking-[0.22em] text-[#E7CB7D] uppercase backdrop-blur-sm">
                      {project.category}
                    </div>
                    <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">{project.subtitle}</p>
                        <h3 className="mt-2 text-3xl leading-[0.98] text-[#F5F2EA]">{project.title}</h3>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center border border-[#D4AF37]/30 bg-black/50 text-[#D4AF37] opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 translate-y-full border-t border-[#D4AF37]/20 bg-black/72 px-4 py-4 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-xs leading-6 text-[#D0C7B8]">{project.location}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase">
                        View Project
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#D4AF37]/10 bg-[linear-gradient(165deg,#070707_0%,#0A0A0A_40%,#050505_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,0.14)_0%,rgba(212,175,55,0)_34%),radial-gradient(circle_at_88%_22%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_28%)]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="grid gap-8 border border-[#D4AF37]/14 bg-black/25 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:p-10">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-[#D4AF37] uppercase">Case Studies</p>
              <h2 className="mt-4 text-4xl leading-[0.96] text-[#F5F2EA] sm:text-5xl lg:text-6xl">
                Flagship projects, explained as <span className="italic">outcomes</span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="border border-[#D4AF37]/14 bg-black/35 px-4 py-4">
                <p className="text-[10px] tracking-[0.22em] text-[#8F897C] uppercase">Format</p>
                <p className="mt-2 text-sm text-[#E6DFD0]">Challenge → Strategy → Result</p>
              </div>
              <div className="border border-[#D4AF37]/14 bg-black/35 px-4 py-4">
                <p className="text-[10px] tracking-[0.22em] text-[#8F897C] uppercase">Focus</p>
                <p className="mt-2 text-sm text-[#E6DFD0]">Delivery impact and business value</p>
              </div>
              <div className="border border-[#D4AF37]/14 bg-black/35 px-4 py-4">
                <p className="text-[10px] tracking-[0.22em] text-[#8F897C] uppercase">Curated</p>
                <p className="mt-2 text-sm text-[#E6DFD0]">Residential, Commercial, Marine</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 xl:gap-6">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative grid overflow-hidden border border-[#D4AF37]/16 bg-[linear-gradient(155deg,#121212_0%,#090909_100%)] transition-colors duration-500 hover:border-[#D4AF37]/35 lg:grid-cols-[0.92fr_1.08fr] ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative min-h-[280px] overflow-hidden lg:min-h-[370px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-black/55 px-3 py-1 text-[10px] tracking-[0.22em] text-[#E7CB7D] uppercase backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    {study.subtitle}
                  </div>
                  <div className="absolute left-5 right-5 bottom-5 border border-[#D4AF37]/20 bg-black/60 px-4 py-3 backdrop-blur-sm">
                    <p className="text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase">Outcome Stat</p>
                    <p className="mt-2 text-xl leading-tight text-[#F5F2EA] sm:text-2xl">{study.stat}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                  <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">{study.title}</p>
                  <h3 className="mt-3 text-3xl leading-tight text-[#F5F2EA] sm:text-4xl">{study.subtitle}</h3>

                  <div className="mt-8 grid gap-4">
                    <div className="border-l-2 border-[#8F897C] bg-black/15 px-4 py-4">
                      <p className="text-[10px] tracking-[0.22em] text-[#8F897C] uppercase">Challenge</p>
                      <p className="mt-2 text-sm leading-7 text-[#C7BEAF]">{study.challenge}</p>
                    </div>
                    <div className="border-l-2 border-[#B89A43] bg-black/15 px-4 py-4">
                      <p className="text-[10px] tracking-[0.22em] text-[#B89A43] uppercase">Strategy</p>
                      <p className="mt-2 text-sm leading-7 text-[#D4CCBC]">{study.solution}</p>
                    </div>
                    <div className="border-l-2 border-[#D4AF37] bg-black/20 px-4 py-4">
                      <p className="text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase">Outcome</p>
                      <p className="mt-2 text-sm leading-7 text-[#ECE5D8]">{study.result}</p>
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0)_30%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12)_0%,rgba(16,185,129,0)_28%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          <p className="text-[10px] tracking-[0.24em] text-[#D4AF37] uppercase">Discover Your Future Project</p>
          <h2 className="mt-5 text-4xl leading-[0.96] text-[#F5F2EA] sm:text-5xl lg:text-6xl">
            Ready to shape a project that feels <span className="italic text-[#D4AF37]">inevitable</span>?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#C9C1B2]">
            Speak with the team behind our most precise residences, refined commercial spaces, and marine-inspired
            interiors.
          </p>
          <a
            href="mailto:hello@luxus.com?subject=Portfolio%20Inquiry"
            className="mt-10 inline-flex items-center gap-3 border border-[#D4AF37] bg-[#D4AF37] px-8 py-4 text-[11px] font-semibold tracking-[0.24em] text-[#090909] uppercase transition-transform duration-500 hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </main>
  );
}