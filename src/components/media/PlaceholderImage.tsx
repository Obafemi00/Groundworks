"use client";

import ParallaxImage from "@/components/animations/ParallaxImage";
import FadeUp from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  className?: string;
  noMargin?: boolean; // Set to true for hero sections to exclude margins
};

export default function PlaceholderImage({ className = "", noMargin = false }: PlaceholderImageProps) {
  return (
    <div className={cn(
      !noMargin && "my-8 md:my-12 lg:my-16" // Responsive top and bottom margins
    )}>
      <ParallaxImage speed={0.12}>
        <FadeUp delay={0.2} duration={0.8}>
          <div
            className={cn(
              "w-full h-64 bg-gray-300 rounded-md shadow-lg",
              "transition-all duration-700",
              className // Image-specific classes (height, width, etc.)
            )}
            style={{
              aspectRatio: "16/9",
              minHeight: "256px",
            }}
          />
        </FadeUp>
      </ParallaxImage>
    </div>
  );
}

