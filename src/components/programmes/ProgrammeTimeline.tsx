"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { programmeData } from "./ProgrammeData";

type ProgrammeTimelineProps = {
  activeIndex: number;
  onProgrammeSelect?: (index: number) => void;
  isMobile?: boolean;
};

export default function ProgrammeTimeline({
  activeIndex,
  onProgrammeSelect,
  isMobile = false,
}: ProgrammeTimelineProps) {
  if (isMobile) {
    // Mobile: horizontal stepper chips
    return (
      <div className="flex items-center justify-center gap-3 mb-8 overflow-x-auto pb-2">
        {programmeData.map((programme, index) => (
          <button
            key={programme.id}
            onClick={() => onProgrammeSelect?.(index)}
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-full font-inter text-xs font-medium uppercase tracking-wider transition-colors duration-200",
              activeIndex === index
                ? "bg-[#0E1F36] text-white"
                : "bg-[#E9E4DB] text-[#5A6473] hover:bg-[#E9E4DB]/80"
            )}
            aria-current={activeIndex === index ? "step" : undefined}
          >
            {programme.number} {programme.name.split(" ")[0]}
          </button>
        ))}
      </div>
    );
  }

  // Desktop: vertical timeline rail
  return (
    <div className="relative hidden lg:block">
      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-[#5A6473]/30" />
      <div className="space-y-24">
        {programmeData.map((programme, index) => (
          <motion.div
            key={programme.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="relative"
          >
            <div
              className={cn(
                "absolute left-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-cormorant text-lg font-semibold transition-colors duration-200",
                activeIndex === index
                  ? "bg-[#C4A463] border-[#C4A463] text-white"
                  : "bg-white border-[#5A6473]/30 text-[#5A6473]"
              )}
            >
              {programme.number}
            </div>
            <div className="ml-16 pt-1">
              <p className="font-inter text-xs uppercase tracking-wider text-[#5A6473] mb-1">
                {programme.label}
              </p>
              <h3 className="font-cormorant text-xl font-semibold text-[#0E1F36]">
                {programme.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

