"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProgrammeViewToggle from "./ProgrammeViewToggle";
import ProgrammeTimeline from "./ProgrammeTimeline";
import ProgrammeCard from "./ProgrammeCard";
import ProgrammeCompareTable from "./ProgrammeCompareTable";
import { programmeData } from "./ProgrammeData";

export default function ProgrammesContent() {
  const [view, setView] = useState<"journey" | "compare">("journey");
  const [activeProgrammeIndex, setActiveProgrammeIndex] = useState(0);

  return (
    <>
      {/* Intro Paragraph */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-inter text-base md:text-[18px] leading-relaxed text-[#0E1F36] mb-8"
            >
              Founder Groundworks is built around a simple path. You start with
              foundations, develop through practice, and finish with a clear
              understanding of where you stand as a founder, and what comes
              next.
            </motion.p>
          </div>
        </div>
      </section>

      {/* View Toggle */}
      <section className="py-8 md:py-12 bg-white border-t border-[#E9E4DB]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <ProgrammeViewToggle view={view} onViewChange={setView} />
          </div>
        </div>
      </section>

      {/* Journey View */}
      {view === "journey" && (
        <section className="py-16 md:py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
              {/* Timeline - Desktop */}
              <div className="hidden lg:block">
                <ProgrammeTimeline
                  activeIndex={activeProgrammeIndex}
                  onProgrammeSelect={setActiveProgrammeIndex}
                  isMobile={false}
                />
              </div>

              {/* Programme Cards */}
              <div className="space-y-12 md:space-y-16 lg:space-y-20">
                {programmeData.map((programme, index) => (
                  <ProgrammeCard
                    key={programme.id}
                    programme={programme}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Compare View */}
      {view === "compare" && (
        <section className="py-16 md:py-20 lg:py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ProgrammeCompareTable />
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="py-20 md:py-24 lg:py-32 bg-[#E9E4DB]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0E1F36] mb-6">
              Start with foundations.
            </h2>
            <p className="font-inter text-base md:text-[18px] leading-relaxed text-[#0E1F36] mb-8">
              If you are serious about developing as a founder, the first step is
              to build your foundations properly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-inter font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded-[4px] transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "#0E1F36",
                  color: "#FFFFFF",
                }}
              >
                Apply to the Foundations Programme
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

