"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ProgrammeData } from "./ProgrammeData";

type ProgrammeCardProps = {
  programme: ProgrammeData;
  index: number;
};

export default function ProgrammeCard({
  programme,
  index,
}: ProgrammeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-sm border border-[#E9E4DB]"
    >
      {/* Watermark Number */}
      <div
        className="absolute top-8 right-8 font-cormorant text-[120px] md:text-[150px] font-semibold text-[#C4A463]/10 pointer-events-none select-none"
        aria-hidden="true"
      >
        {programme.number}
      </div>

      <div className="relative z-10">
        {/* Programme Label */}
        <p className="font-inter text-xs uppercase tracking-wider text-[#5A6473] mb-2">
          {programme.label}
        </p>

        {/* Programme Name */}
        <h3 className="font-cormorant text-3xl md:text-4xl font-semibold text-[#0E1F36] mb-4">
          {programme.name}
        </h3>

        {/* Summary */}
        <p className="font-inter text-base md:text-[18px] leading-relaxed text-[#0E1F36] mb-6">
          {programme.summary}
        </p>

        {/* Who it's for */}
        <div className="mb-6">
          <p className="font-inter text-sm font-semibold uppercase tracking-wider text-[#5A6473] mb-2">
            Who it's for
          </p>
          <p className="font-inter text-base leading-relaxed text-[#0E1F36]">
            {programme.whoItsFor}
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#E9E4DB] pt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between font-inter text-sm font-semibold uppercase tracking-wider text-[#0E1F36] hover:text-[#C4A463] transition-colors duration-200"
            aria-expanded={isExpanded}
            aria-controls={`programme-details-${programme.id}`}
          >
            <span>View details</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                id={`programme-details-${programme.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-6">
                  {/* Format */}
                  <div>
                    <p className="font-inter text-sm font-semibold uppercase tracking-wider text-[#5A6473] mb-3">
                      Format
                    </p>
                    {programme.format.duration && (
                      <p className="font-inter text-base text-[#0E1F36] mb-2">
                        Duration: {programme.format.duration}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {programme.format.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="font-inter text-base leading-relaxed text-[#0E1F36] flex items-center gap-2"
                        >
                          <span className="text-[#C4A463] flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What you'll cover */}
                  <div>
                    <p className="font-inter text-sm font-semibold uppercase tracking-wider text-[#5A6473] mb-3">
                      {programme.id === "founder-readiness-review"
                        ? "What you receive"
                        : "What you'll cover"}
                    </p>
                    <ul className="space-y-2">
                      {programme.whatYoullCover.map((item, idx) => (
                        <li
                          key={idx}
                          className="font-inter text-base leading-relaxed text-[#0E1F36] flex items-center gap-2"
                        >
                          <span className="text-[#C4A463] flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div>
                    <p className="font-inter text-sm font-semibold uppercase tracking-wider text-[#5A6473] mb-3">
                      Outcome
                    </p>
                    <p className="font-inter text-base leading-relaxed text-[#0E1F36]">
                      {programme.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Button - Only for Programme 01 */}
        {programme.cta && index === 0 && (
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-inter font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded-[4px] transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#0E1F36",
                color: "#FFFFFF",
              }}
            >
              {programme.cta}
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}

