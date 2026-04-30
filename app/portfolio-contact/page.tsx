'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function PortfolioContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ fullName: '', email: '', phone: '', company: '', projectType: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#F6F3EA]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#D4AF37]/10 pt-20 sm:pt-24">
        <div
          className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)',
            animation: 'floatGlow 11s ease-in-out infinite',
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="mb-6 text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
              Our Portfolio
            </p>
            <h1 className="mx-auto max-w-3xl text-5xl leading-tight text-[#F6F3EA] sm:text-6xl lg:text-7xl">
              Portfolio Updating
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#BEB8A7] sm:text-xl">
              Contact us for a confidential presentation of our projects in Italy and the Americas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="border-b border-[#D4AF37]/10 bg-[#060606]">
        <div className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl leading-tight text-[#F5F2EA] sm:text-5xl">
                Request a Confidential <span className="text-[#D4AF37]">Presentation</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#BEB8A7]">
                Our portfolio showcases carefully crafted residences, commercial spaces, and marine-inspired environments across Italy and the Americas. Fill out the form to receive a detailed overview of our most recent projects.
              </p>

              <div className="mt-10 space-y-4">
                {['25+ years of luxury expertise', 'Italian craftsmanship & design', 'Bespoke project solutions', 'Confidential portfolio access'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                      <Check className="h-3 w-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#D4CCBC]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#D4AF37]/20 bg-[#0E0E0E] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border border-[#D4AF37]/20 bg-[#070707] px-4 py-3 text-[#F6F3EA] placeholder-[#5A544D] transition-colors duration-300 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border border-[#D4AF37]/20 bg-[#070707] px-4 py-3 text-[#F6F3EA] placeholder-[#5A544D] transition-colors duration-300 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 w-full border border-[#D4AF37]/20 bg-[#070707] px-4 py-3 text-[#F6F3EA] placeholder-[#5A544D] transition-colors duration-300 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 w-full border border-[#D4AF37]/20 bg-[#070707] px-4 py-3 text-[#F6F3EA] placeholder-[#5A544D] transition-colors duration-300 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border border-[#D4AF37]/20 bg-[#070707] px-4 py-3 text-[#F6F3EA] placeholder-[#5A544D] transition-colors duration-300 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                    >
                      <option value="" disabled>
                        Select a project type
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="marine">Marine</option>
                      <option value="mixed">Mixed-Use</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2 w-full border border-[#D4AF37]/20 bg-[#070707] px-4 py-3 text-[#F6F3EA] placeholder-[#5A544D] transition-colors duration-300 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/30"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-8 w-full border border-[#D4AF37] bg-[#D4AF37] px-6 py-3 text-[11px] font-medium tracking-[0.18em] text-[#0D0D0D] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E0BF58] disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isLoading ? 'Sending...' : 'Request Portfolio'}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3"
                  >
                    <Check className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-300">Thank you! We'll be in touch shortly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
