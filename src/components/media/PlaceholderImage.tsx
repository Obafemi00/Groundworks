"use client";

import ParallaxImage from "@/components/animations/ParallaxImage";
import FadeUp from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

export default function PlaceholderImage({ className = "" }: { className?: string }) {
  return (
    <ParallaxImage speed={0.12}>
      <FadeUp delay={0.2} duration={0.8}>
        <div
          className={cn(
            "w-full h-64 bg-fg-sand rounded-md shadow-lg",
            "transition-all duration-700",
            className
          )}
          style={{
            aspectRatio: "16/9",
            minHeight: "256px",
          }}
        />
      </FadeUp>
    </ParallaxImage>
  );
}

