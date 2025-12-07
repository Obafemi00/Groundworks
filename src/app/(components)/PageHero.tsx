"use client";

import FadeUp from "@/components/animations/FadeUp";
import SplitText from "@/components/animations/SplitText";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  background?: "navy" | "white" | "sand";
};

export default function PageHero({ title, subtitle, background = "navy" }: PageHeroProps) {
  const bgClasses = {
    navy: "bg-fg-navy text-white",
    white: "bg-fg-white text-fg-navy",
    sand: "bg-fg-sand text-fg-navy",
  };

  return (
    <section className={`${bgClasses[background]} py-section relative overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-3xl">
          <FadeUp delay={0.1} duration={0.8}>
            <SplitText
              as="h1"
              className="font-cormorant text-4xl md:text-5xl font-semibold mb-6 tracking-tight"
              staggerDelay={0.06}
            >
              {title}
            </SplitText>
          </FadeUp>
          {subtitle && (
            <FadeUp delay={0.3} duration={0.7}>
              <p className={`font-inter text-base md:text-[18px] leading-relaxed ${
                background === "navy" ? "text-fg-sand" : "text-fg-grey"
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

