"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function SectionWrapper({
  children,
  className,
  staggerDelay = 0.1,
}: SectionWrapperProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

