"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useScroll } from "@/hooks/useScroll";
import { navigationLinks } from "@/data/navigation";

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const { isScrolled } = useScroll();

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-fg-sand/30" 
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Left: Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center h-full">
                <Image
                  src="/logo/Founder Groundworks Transparent Blue.png"
                  alt="Founder Groundworks"
                  width={200}
                  height={60}
                  className="h-12 lg:h-16 w-auto object-contain"
                  priority
                  unoptimized
                />
              </Link>
            </motion.div>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center flex-1 justify-center gap-8 xl:gap-12">
              {navigationLinks.filter(link => link.href !== '/contact').map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="relative font-inter text-sm font-medium text-fg-navy uppercase tracking-wider py-2 transition-colors duration-200 hover:text-fg-gold"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[1px] bg-fg-gold"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right: CTA Button */}
            <div className="flex items-center gap-4">
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center font-inter font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded-[4px] transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                    style={{
                      backgroundColor: '#0E1F36',
                      color: '#FFFFFF',
                    }}
                  >
                    <span className="relative z-10" style={{ color: '#FFFFFF' }}>Contact Us</span>
                    <motion.span
                      className="relative z-10 ml-2"
                      style={{ color: '#FFFFFF' }}
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      →
                    </motion.span>
                    <motion.div
                      className="absolute inset-0"
                      style={{ backgroundColor: '#C4A463' }}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-fg-navy"
                onClick={toggle}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </motion.svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-fg-navy/60 backdrop-blur-sm lg:hidden"
              onClick={close}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg lg:hidden"
            >
              <div className="max-w-[1400px] mx-auto px-6 py-8">
                <nav className="flex flex-col gap-4 mb-6">
                  {navigationLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="block font-inter text-base font-medium text-fg-navy uppercase tracking-wide py-3 px-4 rounded-md transition-colors duration-200 hover:bg-fg-sand/50"
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigationLinks.length * 0.05, duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center w-full font-inter font-semibold text-sm uppercase tracking-wide text-white bg-fg-navy px-7 py-3.5 rounded-[4px] transition-all duration-300 hover:bg-[#0b182b] hover:shadow-lg relative overflow-hidden"
                      onClick={close}
                    >
                      <span className="relative z-10">Contact Us</span>
                      <motion.span
                        className="relative z-10 ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        →
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 bg-fg-gold"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
