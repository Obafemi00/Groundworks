"use client";

import Image from "next/image";
import ParallaxImage from "@/components/animations/ParallaxImage";
import FadeUp from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  noMargin?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
};

export default function SectionImage({ 
  src, 
  alt, 
  className = "", 
  noMargin = false,
  width = 1600,
  height = 1000,
  priority = false
}: SectionImageProps) {
  // Check if className contains a height constraint
  const hasHeightConstraint = /h-\[|h-\d+|h-auto/.test(className);
  
  return (
    <div className={cn(
      !noMargin && "my-8 md:my-12 lg:my-16" // Responsive top and bottom margins
    )}>
      <ParallaxImage speed={0.12}>
        <FadeUp delay={0.2} duration={0.8}>
          <div className={cn(
            "w-full rounded-md shadow-lg overflow-hidden",
            "transition-all duration-700",
            className
          )}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={cn(
                "w-full",
                hasHeightConstraint ? "object-cover h-full" : "h-auto"
              )}
              priority={priority}
              loading={priority ? undefined : "lazy"}
            />
          </div>
        </FadeUp>
      </ParallaxImage>
    </div>
  );
}

