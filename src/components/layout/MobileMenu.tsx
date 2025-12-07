"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigationLinks } from "@/data/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-fg-navy/60 backdrop-blur-md z-40 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md border-b-2 border-fg-navy/10 z-50 md:hidden shadow-2xl"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-8">
              <nav className="flex flex-col gap-4 mb-8">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="relative font-inter text-lg font-medium text-fg-navy uppercase tracking-wide block py-3 px-4 rounded-md transition-all duration-300 hover:bg-fg-navy/5 hover:translate-x-2 group"
                      onClick={onClose}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-fg-navy rounded-r-md scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center w-full px-6 py-4 font-inter font-semibold text-sm uppercase tracking-wide text-white bg-fg-navy rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-fg-navy/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative z-10">Contact Us</span>
                  <span className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
