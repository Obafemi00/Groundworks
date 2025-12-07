"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SlideInProps = {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
};

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  distance = 40,
  className,
}: SlideInProps) {
  const xInitial = direction === "left" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, x: xInitial }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

