"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

type SubsectionProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  animate?: boolean;
};

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  full: "max-w-full",
};

export default function Subsection({
  children,
  title,
  subtitle,
  className,
  align = "left",
  maxWidth = "lg",
  animate = true,
}: SubsectionProps) {
  const content = (
    <div className={cn("mt-fg-lg mb-fg-lg", className)}>
      <div className={cn(
        maxWidthClasses[maxWidth],
        align === "center" && "mx-auto text-center"
      )}>
        {subtitle && (
          <p className="font-inter text-sm md:text-base uppercase tracking-wider text-fg-gold mb-fg-sm">
            {subtitle}
          </p>
        )}
        {title && (
          <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-fg-navy mb-fg-md">
            {title}
          </h3>
        )}
        <div className="mt-fg-sm">
          {children}
        </div>
      </div>
    </div>
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

