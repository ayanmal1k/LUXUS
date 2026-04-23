'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const allLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/portfolio' },
];

const leftLinks = allLinks.slice(0, 2);
const rightLinks = allLinks.slice(2);

function isHashLink(href: string) {
  return href.includes('#');
}

export default function GlassmorphismNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen
            ? 'rgba(10, 10, 10, 0.72)'
            : 'rgba(10, 10, 10, 0.25)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: scrolled || menuOpen
            ? '1px solid rgba(212,175,55,0.18)'
            : '1px solid rgba(212,175,55,0.07)',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* ── Desktop bar ── */}
        <div className="mx-auto max-w-7xl flex items-center h-[76px] px-6 relative">

          {/* Left links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {leftLinks.map((link) => (
              isHashLink(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[11px] tracking-[0.26em] uppercase font-medium text-[#c9c2b4] hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[11px] tracking-[0.26em] uppercase font-medium text-[#c9c2b4] hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </Link>
              )
            ))}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:block">
            <Link href="/" className="flex items-center justify-center" onClick={() => setMenuOpen(false)}>
              <Image
                src="/logo-nobg.png"
                alt="LUXUS"
                width={96}
                height={96}
                className="object-contain drop-shadow-[0_0_22px_rgba(212,175,55,0.28)] hover:drop-shadow-[0_0_36px_rgba(212,175,55,0.5)] transition-all duration-500"
                priority
              />
            </Link>
          </div>

          {/* Right links + Contact — hidden on mobile */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              isHashLink(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[11px] tracking-[0.26em] uppercase font-medium text-[#c9c2b4] hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[11px] tracking-[0.26em] uppercase font-medium text-[#c9c2b4] hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </Link>
              )
            ))}
            <Link
              href="/#contact"
              className="relative inline-flex items-center rounded-full border border-[#D4AF37]/40 px-5 py-2 text-[10px] tracking-[0.28em] uppercase font-semibold text-[#D4AF37] hover:text-[#0B0B0B] overflow-hidden transition-colors duration-400 group"
            >
              <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out rounded-full" />
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Hamburger — visible on mobile only, pushed to right */}
          <div className="flex md:hidden items-center justify-end flex-1">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
            >
              <span
                className="block h-[1.5px] bg-[#D4AF37] transition-all duration-400 origin-center"
                style={{
                  width: menuOpen ? '22px' : '22px',
                  transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block h-[1.5px] bg-[#D4AF37] transition-all duration-300"
                style={{
                  width: '16px',
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? 'scaleX(0)' : 'none',
                }}
              />
              <span
                className="block h-[1.5px] bg-[#D4AF37] transition-all duration-400 origin-center"
                style={{
                  width: '22px',
                  transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>

        </div>

        {/* ── Mobile dropdown menu ── */}
        <div
          className="md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ maxHeight: menuOpen ? '420px' : '0px' }}
        >
          <div className="flex flex-col items-center gap-1 px-6 pb-8 pt-4 border-t border-[#D4AF37]/10">
            {allLinks.map((link, i) => (
              isHashLink(link.href) ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3 text-[11px] tracking-[0.28em] uppercase font-medium text-[#c9c2b4] hover:text-white border-b border-[#D4AF37]/08 transition-colors duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${i * 55}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'none' : 'translateY(8px)',
                    transition: `opacity 0.4s ${i * 55}ms, transform 0.4s ${i * 55}ms, color 0.3s`,
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3 text-[11px] tracking-[0.28em] uppercase font-medium text-[#c9c2b4] hover:text-white border-b border-[#D4AF37]/08 transition-colors duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${i * 55}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'none' : 'translateY(8px)',
                    transition: `opacity 0.4s ${i * 55}ms, transform 0.4s ${i * 55}ms, color 0.3s`,
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 w-full text-center rounded-full border border-[#D4AF37]/50 py-3 text-[10px] tracking-[0.3em] uppercase font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B] transition-all duration-400"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}

