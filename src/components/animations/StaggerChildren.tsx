"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, Children } from "react";
import { cn } from "@/lib/utils";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childVariants?: Variants;
};

const defaultChildVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  childVariants = defaultChildVariants,
}: StaggerChildrenProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(className)}
    >
      {Children.map(Children.toArray(children), (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

