"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

type TimelineItem = {
  title: string;
  description: string;
  number?: number;
};

type TimelineProps = {
  items: TimelineItem[];
  className?: string;
  variant?: "default" | "compact";
};

type TimelineItemComponentProps = {
  item: TimelineItem;
  index: number;
  scrollProgress: any;
  totalItems: number;
  markerRef?: (node: HTMLDivElement | null) => void;
  isFirst?: boolean;
  isLast?: boolean;
};

function TimelineItemComponent({ item, index, scrollProgress, totalItems, markerRef, isFirst, isLast }: TimelineItemComponentProps) {
  // Calculate when this item becomes active (based on scroll position)
  const itemStart = index / totalItems;
  const itemEnd = (index + 1) / totalItems;
  
  // Progress for this specific item (0 to 1 as it scrolls into view)
  const itemProgress = useTransform(
    scrollProgress,
    [itemStart - 0.1, itemStart + 0.2, itemEnd],
    [0, 0.5, 1]
  );

  // Color transitions - square marker changes from navy to gold
  const markerColor = useTransform(
    itemProgress,
    [0, 0.3, 1],
    ["#0E1F36", "#C4A463", "#C4A463"]
  );
  
  // Text color transitions
  const textColor = useTransform(
    itemProgress,
    [0, 0.3, 1],
    ["#0E1F36", "#C4A463", "#C4A463"]
  );

  return (
    <FadeUp delay={index * 0.1} duration={0.6}>
      <div className="relative flex gap-6 md:gap-8">
        {/* Square marker on the vertical line */}
        <div 
          ref={markerRef}
          className="relative z-10 flex-shrink-0"
        >
          <motion.div
            className="w-3 h-3 md:w-4 md:h-4"
            style={{
              backgroundColor: markerColor,
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 pt-0.5">
          <motion.h3
            className="font-cormorant text-2xl md:text-3xl font-semibold mb-3 leading-tight"
            style={{
              color: textColor,
            }}
          >
            {item.title}
          </motion.h3>
          <p className="font-inter text-base md:text-[17px] text-fg-grey leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Timeline({ items, className, variant = "default" }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstMarkerRef = useRef<HTMLDivElement>(null);
  const lastMarkerRef = useRef<HTMLDivElement>(null);
  const [lineStart, setLineStart] = useState(0);
  const [lineEnd, setLineEnd] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Calculate marker positions when component mounts or resizes
  useEffect(() => {
    const calculateLinePositions = () => {
      if (firstMarkerRef.current && lastMarkerRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstRect = firstMarkerRef.current.getBoundingClientRect();
        const lastRect = lastMarkerRef.current.getBoundingClientRect();

        // Calculate positions relative to container
        const firstTop = firstRect.top - containerRect.top + firstRect.height / 2;
        const lastTop = lastRect.top - containerRect.top + lastRect.height / 2;

        setLineStart(firstTop);
        setLineEnd(lastTop);
        setLineHeight(lastTop - firstTop);
      }
    };

    calculateLinePositions();
    window.addEventListener("resize", calculateLinePositions);
    
    // Recalculate after a short delay to ensure all elements are rendered
    const timeout = setTimeout(calculateLinePositions, 100);

    return () => {
      window.removeEventListener("resize", calculateLinePositions);
      clearTimeout(timeout);
    };
  }, [items.length]);

  // Calculate line fill height based on scroll (from 0 to lineHeight)
  const lineFillHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, lineHeight]
  );

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Vertical connecting line (gold) - starts at first marker, ends at last marker */}
      {lineHeight > 0 && (
        <>
          {/* Background line (navy) - full length */}
          <div 
            className="absolute left-[5px] md:left-[6px] w-[1px] bg-fg-navy/30"
            style={{
              top: `${lineStart}px`,
              height: `${lineHeight}px`,
            }}
          />
          
          {/* Animated fill line (gold) - fills based on scroll */}
          <motion.div
            className="absolute left-[5px] md:left-[6px] w-[1px] bg-fg-gold origin-top"
            style={{
              top: `${lineStart}px`,
              height: lineFillHeight,
            }}
          />
        </>
      )}

      <div className="space-y-12 md:space-y-16 pl-6 md:pl-8">
        {items.map((item, index) => (
          <TimelineItemComponent
            key={index}
            item={item}
            index={index}
            scrollProgress={scrollYProgress}
            totalItems={items.length}
            markerRef={index === 0 ? (node) => { firstMarkerRef.current = node; } : index === items.length - 1 ? (node) => { lastMarkerRef.current = node; } : undefined}
            isFirst={index === 0}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

