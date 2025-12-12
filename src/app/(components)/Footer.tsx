"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/programmes", label: "Our Programmes" },
        { href: "/partnerships", label: "Partnerships" },
        { href: "/contact", label: "Contact Us" },
      ],
    },
    {
      title: "PROGRAMMES",
      links: [
        { href: "/programmes#founder-foundations", label: "Founder Foundations" },
        { href: "/programmes#groundworks-clinics", label: "Groundworks Clinics" },
        { href: "/programmes#founder-readiness-review", label: "Readiness Review" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { href: "/about", label: "Our Philosophy" },
        { href: "/about", label: "The FG Framework" },
        { href: "/about", label: "Our Values" },
      ],
    },
  ];

  return (
    <footer className="bg-fg-white text-fg-navy mt-20 relative overflow-hidden border-t-2 border-fg-sand/20">
      {/* Enhanced curved line background pattern */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute inset-0">
          <defs>
            <style>{`.curve { stroke: #C4A463; stroke-width: 1; fill: none; }`}</style>
          </defs>
          <path className="curve" d="M0,80 Q200,40 400,60 T800,50 T1200,55" />
          <path className="curve" d="M0,160 Q300,120 600,140 T1200,130" />
          <path className="curve" d="M100,240 Q400,200 700,220 T1300,210" />
          <path className="curve" d="M0,320 Q250,280 500,300 T1000,290 T1500,295" />
        </svg>
      </div>

      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fg-gold/30 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-10 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-8">
            {/* Left: Brand & Contact Info with enhanced design */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="lg:col-span-2"
            >
              {/* Brand Section */}
              <div className="mb-6 pb-6 border-b border-fg-sand/30">
                <h3 className="font-cormorant text-2xl font-semibold text-fg-navy mb-2">
                  Founder Groundworks
                </h3>
                <div className="w-16 h-[2px] mb-3" style={{ backgroundColor: '#C4A463', opacity: 0.4 }}></div>
                <p className="font-inter text-xs uppercase tracking-wider text-fg-grey">
                  PRECISION IN EVERY FOUNDATION
                </p>
              </div>

              {/* Contact Info with icons */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-1 h-1 rounded-full" style={{ backgroundColor: '#C4A463' }}></div>
                  <div>
                    <p className="font-inter text-xs uppercase tracking-wider text-fg-grey mb-1">
                      EMAIL ADDRESS
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-inter text-sm text-fg-navy hover:text-fg-gold transition-colors duration-200"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media with enhanced design */}
              <div className="pt-4 border-t border-fg-sand/20">
                <p className="font-inter text-xs uppercase tracking-wider text-fg-grey mb-3">
                  SOCIAL MEDIA
                </p>
                <motion.a
                  href="https://www.instagram.com/foundergroundworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#0E1F36',
                  }}
                >
                  <Instagram size={20} style={{ color: '#0E1F36' }} />
                </motion.a>
              </div>
            </motion.div>

            {/* Center: Navigation Columns with dividers */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                className="border-l border-fg-sand/20 pl-6"
              >
                <h4 className="font-inter text-xs font-semibold uppercase tracking-wider text-fg-navy mb-4 relative">
                  {section.title}
                  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-4 rounded-full" style={{ backgroundColor: '#C4A463', opacity: 0.3 }}></span>
                </h4>
                <nav className="flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={`${section.title}-${linkIndex}-${link.href}`}
                      href={link.href}
                      className="font-inter text-sm text-fg-grey hover:text-fg-gold transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            ))}
          </div>

          {/* Copyright and Legal Row - Integrated into main footer */}
          <div className="pt-8 border-t-2 border-fg-sand/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                <Link
                  href="/privacy"
                  className="font-inter text-xs text-fg-grey hover:text-fg-gold transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="hidden lg:inline text-fg-sand/30">|</span>
                <Link
                  href="/terms"
                  className="font-inter text-xs text-fg-grey hover:text-fg-gold transition-colors duration-200"
                >
                  Terms of Use
                </Link>
              </div>

              <p className="font-inter text-xs text-fg-grey">
                © COPYRIGHT {new Date().getFullYear()} FOUNDER GROUNDWORKS. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

