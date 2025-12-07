import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  className?: string;
  align?: "left" | "center";
};

"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

export default function SectionHeader({
  title,
  subtitle,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <FadeUp delay={0.1} duration={0.7}>
      <div className={cn("mb-fg-md", align === "center" && "text-center", className)}>
        {subtitle && (
          <p className="font-inter text-xs md:text-sm uppercase tracking-wider text-fg-gold mb-fg-sm">
            {subtitle}
          </p>
        )}
        <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mb-fg-md text-fg-navy">
          {title}
        </h2>
        {description && (
          <div className="mt-fg-sm font-inter text-base md:text-[18px] text-fg-grey max-w-3xl leading-relaxed">
            {typeof description === "string" ? <p>{description}</p> : description}
          </div>
        )}
      </div>
    </FadeUp>
  );
}

