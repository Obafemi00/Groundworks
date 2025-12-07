"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function ParallaxImage({
  children,
  speed = 0.15,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 50 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

