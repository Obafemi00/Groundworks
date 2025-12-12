"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ViewMode = "journey" | "compare";

type ProgrammeViewToggleProps = {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

export default function ProgrammeViewToggle({
  view,
  onViewChange,
}: ProgrammeViewToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Programme view toggle"
      className="inline-flex items-center bg-[#E9E4DB] rounded-md p-1"
    >
      <button
        role="tab"
        aria-selected={view === "journey"}
        aria-controls="journey-view"
        onClick={() => onViewChange("journey")}
        className={cn(
          "relative px-6 py-2.5 font-inter text-sm font-medium uppercase tracking-wider transition-colors duration-200 rounded-md",
          view === "journey"
            ? "text-[#0E1F36]"
            : "text-[#5A6473] hover:text-[#0E1F36]"
        )}
      >
        {view === "journey" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-white rounded-md shadow-sm"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">Journey</span>
      </button>
      <button
        role="tab"
        aria-selected={view === "compare"}
        aria-controls="compare-view"
        onClick={() => onViewChange("compare")}
        className={cn(
          "relative px-6 py-2.5 font-inter text-sm font-medium uppercase tracking-wider transition-colors duration-200 rounded-md",
          view === "compare"
            ? "text-[#0E1F36]"
            : "text-[#5A6473] hover:text-[#0E1F36]"
        )}
      >
        {view === "compare" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-white rounded-md shadow-sm"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10">Compare</span>
      </button>
    </div>
  );
}

