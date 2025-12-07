"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "white" | "navy" | "sand" | "midnight";
  padding?: "xxl" | "xl" | "lg" | "md" | "sm" | "none";
};

const paddingClasses = {
  xxl: "py-fg-xxl",
  xl: "py-fg-xl",
  lg: "py-fg-lg",
  md: "py-fg-md",
  sm: "py-fg-sm",
  none: "",
};

export default function Section({ 
  children, 
  className,
  background = "white",
  padding = "xl"
}: SectionProps) {
  const bgClasses = {
    white: "bg-fg-white text-fg-navy",
    navy: "bg-fg-navy text-white",
    sand: "bg-fg-sand text-fg-navy",
    midnight: "bg-fg-midnight text-white",
  };

  return (
    <section className={cn(bgClasses[background], paddingClasses[padding], className)}>
      {children}
    </section>
  );
}

