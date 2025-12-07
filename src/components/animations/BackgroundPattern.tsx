"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BackgroundPattern() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.1, 0.08]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ y, opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <style>{`.pattern-line { stroke: #C4A463; stroke-width: 1; fill: none; opacity: 0.08; }`}</style>
        </defs>
        <path
          className="pattern-line"
          d="M0,100 Q200,50 400,80 T800,60 T1200,70 T1600,65"
        />
        <path
          className="pattern-line"
          d="M0,200 Q300,150 600,180 T1200,160 T1800,155"
        />
        <path
          className="pattern-line"
          d="M100,300 Q400,250 700,280 T1300,260 T1900,255"
        />
        <path
          className="pattern-line"
          d="M0,400 Q250,350 500,380 T1000,360 T1500,370 T2000,365"
        />
      </svg>
    </motion.div>
  );
}

