"use client";

import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import SplitText from "@/components/animations/SplitText";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  background?: "navy" | "white" | "sand";
  withImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({ title, subtitle, background = "navy", withImage = false, imageSrc, imageAlt = "" }: PageHeroProps) {
  const bgClasses = {
    navy: "bg-fg-navy text-white",
    white: "bg-fg-white text-fg-navy",
    sand: "bg-fg-sand text-fg-navy",
  };

  return (
    <section className={`${!withImage ? bgClasses[background] : ""} relative overflow-hidden ${withImage ? "min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] flex items-center mb-[60px] md:mb-[70px] lg:mb-[80px]" : "py-section mb-[60px] md:mb-[70px] lg:mb-[80px]"}`}>
      {/* Full cover image background */}
      {withImage && imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 z-10 bg-fg-navy/50" />
        </>
      )}
      
      {/* Content */}
      <div className={`${withImage ? "relative z-20" : ""} max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 ${withImage ? "w-full py-20 md:py-32 lg:py-40" : ""}`}>
        <div className={`${withImage ? "max-w-3xl" : "max-w-3xl"} ${withImage ? "text-white" : ""}`}>
          <FadeUp delay={0.1} duration={0.8}>
            <SplitText
              as="h1"
              className={`font-cormorant text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 tracking-tight ${withImage ? "text-white" : ""}`}
              staggerDelay={0.06}
            >
              {title}
            </SplitText>
          </FadeUp>
          {subtitle && (
            <FadeUp delay={0.3} duration={0.7}>
              <p className={`font-inter text-base md:text-[18px] lg:text-xl leading-relaxed ${
                withImage 
                  ? "text-white/90" 
                  : background === "navy" 
                    ? "text-fg-sand" 
                    : "text-fg-grey"
              }`}>
                {subtitle}
              </p>
            </FadeUp>
          )}
        </div>
      </div>
    </section>
  );
}

