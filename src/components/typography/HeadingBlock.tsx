"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

type HeadingBlockProps = {
  title?: string;
  subtitle?: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  level?: 1 | 2 | 3;
  className?: string;
  animate?: boolean;
  textColor?: string;
  descriptionColor?: string;
  subtitleClassName?: string;
  subtitleStyle?: React.CSSProperties;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
};

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  xl: "max-w-5xl",
  full: "max-w-full",
};

const getHeadingClasses = (level: 1 | 2 | 3, textColor?: string) => {
  const baseClasses = {
    1: "font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold mb-fg-sm",
    2: "font-cormorant text-3xl md:text-4xl lg:text-5xl font-semibold mb-fg-sm",
    3: "font-cormorant text-2xl md:text-3xl font-semibold mb-fg-sm",
  };
  const colorClass = textColor || "text-fg-navy";
  return `${baseClasses[level]} ${colorClass}`;
};

export default function HeadingBlock({
  title,
  subtitle,
  description,
  align = "left",
  maxWidth = "lg",
  level = 2,
  className,
  animate = true,
  textColor,
  descriptionColor = "text-fg-grey",
  subtitleClassName,
  subtitleStyle,
  titleClassName,
  titleStyle,
}: HeadingBlockProps) {
  const HeadingTag = `h${level}` as React.ElementType;

  const content = (
    <div className={cn(
      maxWidthClasses[maxWidth],
      align === "center" && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <p 
          className={cn("font-inter text-sm md:text-base uppercase tracking-wider text-fg-gold mb-fg-sm", subtitleClassName)}
          style={subtitleStyle}
        >
          {subtitle}
        </p>
      )}
      {title && (
        <HeadingTag 
          className={cn(
            getHeadingClasses(level, textColor),
            align === "center" && "text-center",
            titleClassName
          )}
          style={titleStyle || (!textColor ? { color: "#0E1F36" } : {})}
        >
          {title}
        </HeadingTag>
      )}
      {description && (
        <div 
          className={cn("mt-fg-md font-inter text-base md:text-[18px] leading-relaxed", descriptionColor === "" ? "" : descriptionColor)}
          style={descriptionColor === "" ? { color: "#0E1F36" } : undefined}
        >
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );

  if (animate) {
    return (
      <FadeUp delay={0.1} duration={0.7}>
        {content}
      </FadeUp>
    );
  }

  return content;
}

