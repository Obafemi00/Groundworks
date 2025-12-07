"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  background?: "white" | "navy" | "sand" | "midnight";
  size?: "xxl" | "xl" | "lg" | "md" | "sm";
  animate?: boolean;
};

const sizeClasses = {
  xxl: "py-fg-xxl",
  xl: "py-fg-xl",
  lg: "py-fg-lg",
  md: "py-fg-md",
  sm: "py-fg-sm",
};

const bgClasses = {
  white: "bg-fg-white text-fg-navy",
  navy: "bg-fg-navy text-white",
  sand: "bg-fg-sand text-fg-navy",
  midnight: "bg-fg-midnight text-white",
};

export default function SectionWrapper({
  children,
  className,
  background = "white",
  size = "xl",
  animate = true,
}: SectionWrapperProps) {
  const content = (
    <section className={cn(bgClasses[background], sizeClasses[size], className)}>
      {children}
    </section>
  );

  if (animate) {
    return (
      <FadeUp delay={0.1} duration={0.6}>
        {content}
      </FadeUp>
    );
  }

  return content;
}

