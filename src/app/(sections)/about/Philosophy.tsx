"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import PlaceholderImage from "@/components/media/PlaceholderImage";

export default function Philosophy() {
  const principles = [
    "Teach first-time founders how to think in structured ways",
    "Give them practical, realistic tools instead of abstract theory",
    "Build their confidence through clarity, not hype",
    "Prepare them for conversations with serious stakeholders",
  ];

  return (
    <Section>
      <Container>
        <HeadingBlock
          title="Foundations before scale."
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="mt-fg-md space-y-fg-xs">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              We believe that the most important stage of a founder's journey is the beginning. The way you think, speak and operate in the early days shapes everything that follows.
            </p>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed font-semibold">
              Our approach is simple:
            </p>
            <ul className="space-y-fg-xs">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-fg-gold mr-3 mt-1">●</span>
                  <span className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed mt-fg-sm font-semibold">
              We are not a "motivation engine". We are a formation institute.
            </p>
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <PlaceholderImage className="h-64 md:h-96 lg:h-[400px]" />
        </div>
      </Container>
    </Section>
  );
}

