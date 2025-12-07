"use client";

import { useRef } from "react";
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
};

function TimelineItemComponent({ item, index, scrollProgress, totalItems }: TimelineItemComponentProps) {
  // Calculate when this item becomes active (based on scroll position)
  const itemStart = index / totalItems;
  const itemEnd = (index + 1) / totalItems;
  
  // Progress for this specific item (0 to 1 as it scrolls into view)
  const itemProgress = useTransform(
    scrollProgress,
    [itemStart - 0.1, itemStart + 0.2, itemEnd],
    [0, 0.5, 1]
  );

  // Color transitions
  const borderColor = useTransform(
    itemProgress,
    [0, 0.3, 1],
    ["#0E1F36", "#C4A463", "#C4A463"]
  );
  
  const textColor = useTransform(
    itemProgress,
    [0, 0.3, 1],
    ["#0E1F36", "#C4A463", "#C4A463"]
  );
  
  const numberColor = useTransform(
    itemProgress,
    [0, 0.3, 1],
    ["#C4A463", "#0E1F36", "#0E1F36"]
  );

  // Rotating accent ring
  const rotation = useTransform(itemProgress, [0, 1], [0, 360]);
  
  // Ring opacity
  const ringOpacity = useTransform(
    itemProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 0.6, 0.6, 0.3]
  );
  
  // Glow intensity
  const glowOpacity = useTransform(
    itemProgress,
    [0, 0.3, 0.7, 1],
    [0.1, 0.3, 0.2, 0.1]
  );

  return (
    <FadeUp delay={index * 0.1} duration={0.6}>
      <div className="relative flex gap-6 md:gap-8">
        {/* Timeline dot with number and rolling accent */}
        <div className="relative z-10 flex-shrink-0">
          {/* Outer rotating ring - the "rolling" accent */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            style={{
              rotate: rotation,
            }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2"
              style={{
                borderColor: borderColor,
                borderStyle: "solid",
                opacity: ringOpacity,
              }}
            />
          </motion.div>

          {/* Inner circle with number */}
          <motion.div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-md relative z-10"
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: borderColor,
            }}
          >
            {item.number !== undefined ? (
              <motion.span
                className="font-cormorant text-xl md:text-2xl font-semibold"
                style={{
                  color: numberColor,
                }}
              >
                {item.number}
              </motion.span>
            ) : (
              <motion.div
                className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                style={{
                  backgroundColor: numberColor,
                }}
              />
            )}
          </motion.div>

          {/* Glow effect that intensifies with progress */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md -z-10"
            style={{
              backgroundColor: useTransform(
                glowOpacity,
                (opacity) => `rgba(196, 164, 99, ${opacity})`
              ),
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 pt-1">
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Calculate line fill height based on scroll
  const lineFillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Vertical line background (navy) */}
      <div className="absolute left-6 md:left-8 top-12 md:top-16 bottom-12 md:bottom-16 w-[1px] bg-fg-navy/20"></div>
      
      {/* Vertical line fill (gold) - animated based on scroll */}
      <motion.div
        className="absolute left-6 md:left-8 top-12 md:top-16 w-[1px] bg-gradient-to-b from-fg-gold via-fg-gold to-fg-gold/60 origin-top"
        style={{
          height: lineFillHeight,
        }}
      />

      <div className="space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <TimelineItemComponent
            key={index}
            item={item}
            index={index}
            scrollProgress={scrollYProgress}
            totalItems={items.length}
          />
        ))}
      </div>
    </div>
  );
}

