"use client";

import { motion } from "framer-motion";
import { programmeData } from "./ProgrammeData";

export default function ProgrammeCompareTable() {
  const getFormatText = (programme: typeof programmeData[0]) => {
    if (programme.format.duration) {
      return `${programme.format.duration} • ${programme.format.items[0]}`;
    }
    return programme.format.items[0];
  };

  const getFocus = (programme: typeof programmeData[0]) => {
    if (programme.id === "founder-foundations") {
      return "Core fundamentals";
    }
    if (programme.id === "groundworks-clinics") {
      return "Applied practice";
    }
    return "Structured assessment";
  };

  const getEntryRequirement = (programme: typeof programmeData[0]) => {
    if (programme.id === "founder-foundations") {
      return "No previous experience required";
    }
    if (programme.id === "groundworks-clinics") {
      return "Foundations Programme completion";
    }
    return "Earlier programme completion";
  };

  const rows = [
    {
      label: "Duration",
      values: programmeData.map((p) => p.format.duration || "Varies"),
    },
    {
      label: "Format",
      values: programmeData.map(getFormatText),
    },
    {
      label: "Focus",
      values: programmeData.map(getFocus),
    },
    {
      label: "Entry requirement",
      values: programmeData.map(getEntryRequirement),
    },
    {
      label: "Outcome",
      values: programmeData.map((p) => p.outcome),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <div className="min-w-full">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 pb-6 border-b border-[#5A6473]/20">
          <div className="hidden md:block" />
          {programmeData.map((programme) => (
            <div key={programme.id} className="text-center">
              <p className="font-inter text-xs uppercase tracking-wider text-[#5A6473] mb-2">
                {programme.label}
              </p>
              <h3 className="font-cormorant text-xl md:text-2xl font-semibold text-[#0E1F36]">
                {programme.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-8 pt-6">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8"
            >
              <div className="md:border-r border-[#5A6473]/10 pr-0 md:pr-6">
                <p className="font-inter text-sm font-semibold uppercase tracking-wider text-[#5A6473]">
                  {row.label}
                </p>
              </div>
              {row.values.map((value, colIndex) => (
                <div key={colIndex} className="pt-0 md:pt-0 relative">
                  <p className="font-inter text-base leading-relaxed text-[#0E1F36] pr-12 md:pr-0">
                    {value}
                  </p>
                  {/* Programme number - mobile only */}
                  <span className="absolute right-0 top-0 font-cormorant text-2xl md:hidden text-[#C4A463]/20 font-semibold">
                    {programmeData[colIndex].number}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

