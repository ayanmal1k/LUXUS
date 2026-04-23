'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const materials = [
  {
    name: 'Carrara Marble',
    number: '01',
    origin: 'Carrara, Tuscany — Italy',
    image: '/carara marble.png',
    description:
      'Experience the timeless elegance of Carrara marble, renowned for its fine grain and bright veining, perfect for creating statement floors, walls, and accents.',
    tag: 'Signature Collection',
  },
  {
    name: 'Tuscan Travertine',
    number: '02',
    origin: 'Tivoli, Lazio — Italy',
    image: '/Tuscan Travertine.png',
    description:
      'Immerse yourself in the warm textures of handcrafted Tuscan travertine, a geological masterpiece that tells a story of thousands of years.',
    tag: 'Heritage Series',
  },
  {
    name: 'Botticino Marble',
    number: '03',
    origin: 'Botticino, Lombardy — Italy',
    image: '/Botticino Marble.png',
    description:
      'Discover the subtle luxury of Botticino marble, with its creamy tones and understated elegance, ideal for tropical settings.',
    tag: 'Exclusive Reserve',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 72, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function PremiumMaterialSection() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#0B0B0B]">
      {/* Top divider line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-10" />

      {/* Layered background glows */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_75%_5%,rgba(212,175,55,0.11)_0%,transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_15%_95%,rgba(212,175,55,0.08)_0%,transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />

      {/* Animated floating orbs */}
      <motion.div
        className="pointer-events-none absolute -left-48 top-1/3 h-[560px] w-[560px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0) 70%)' }}
        animate={{ x: [0, 22, 0], y: [0, -28, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-48 bottom-1/4 h-[640px] w-[640px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.09) 0%, rgba(212,175,55,0) 70%)' }}
        animate={{ x: [0, -22, 0], y: [0, 28, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mb-20 flex flex-col items-start gap-5">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-10 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[11px] tracking-[0.32em] uppercase font-semibold">
              Curated Selection
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-[5.2rem] font-serif font-bold leading-[1.02]"
          >
            <span className="text-[#F8F6F0]">Our Premium </span>
            <span
              style={{
                color: '#D4AF37',
                textShadow: '0 0 48px rgba(212,175,55,0.28), 0 10px 28px rgba(0,0,0,0.45)',
              }}
            >
              Materials
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            viewport={{ once: true }}
            className="max-w-2xl text-[#BFB8A7] text-lg leading-relaxed font-light"
          >
            We bring you the finest Italian materials — each with a unique geological story and
            unmatched artisanal quality, curated to elevate every space with timeless elegance.
          </motion.p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/15 to-transparent origin-left"
          />
        </div>

        {/* ── Material cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-7"
        >
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#101010] hover:border-[#D4AF37]/55 transition-colors duration-500 cursor-pointer"
              style={{
                boxShadow: '0 8px 56px rgba(0,0,0,0.65), 0 1px 0 rgba(255,255,255,0.04) inset',
              }}
            >
              {/* Large cardinal number — decorative */}
              <div className="absolute top-4 right-5 z-20 font-serif font-bold text-[4.5rem] leading-none select-none text-[#D4AF37]/18 group-hover:text-[#D4AF37]/32 transition-colors duration-700 pointer-events-none">
                {mat.number}
              </div>

              {/* ── Image ── */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.12]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
                {/* layered scrim for content readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/25 to-transparent" />
                {/* Gold shimmer sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/18 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Pill badge */}
                <div className="absolute top-5 left-5 z-20">
                  <div className="flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#0B0B0B]/72 backdrop-blur-sm px-3 py-1.5">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0"
                      style={{ boxShadow: '0 0 7px rgba(212,175,55,0.9)' }}
                    />
                    <span className="text-[#D4AF37] text-[9px] font-semibold tracking-[0.22em] uppercase">
                      {mat.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="flex flex-col gap-3 p-7 flex-1">
                {/* Origin */}
                <div className="flex items-center gap-2">
                  <div className="h-px w-5 bg-[#D4AF37]/60" />
                  <span className="text-[#D4AF37]/65 text-[10px] tracking-[0.22em] uppercase font-medium">
                    {mat.origin}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[1.65rem] font-serif font-bold text-[#F5F2EA] leading-tight group-hover:text-white transition-colors duration-300">
                  {mat.name}
                </h3>

                {/* Description */}
                <p className="text-[#8E877F] text-sm leading-[1.75] font-light flex-1">
                  {mat.description}
                </p>


              </div>

              {/* Bottom gold line reveal on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/70 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Footer row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D4AF37]/10 pt-8"
        >
          <span className="text-[#5A544D] text-xs tracking-[0.26em] uppercase font-medium">
            Italian Craftsmanship · Since 1987
          </span>
          <div className="flex items-center gap-3">
            <Image src="/icon.png" alt="Luxus icon" width={20} height={20} className="opacity-50" />
            <span className="text-[#D4AF37]/55 text-[10px] tracking-[0.28em] uppercase font-medium">
              Luxus Collection
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent z-10" />
    </section>
  );
}
