"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import PlaceholderImage from "@/components/media/PlaceholderImage";

export default function HowItWorks() {
  const steps = [
    {
      title: "Step 1 – Foundations Programme",
      description: "A structured, cohort-based programme for first-time founders. Weekly sessions, practical assignments and guided frameworks to build your understanding.",
    },
    {
      title: "Step 2 – Groundworks Clinics",
      description: "Small-group clinics focused on real questions: refining your idea, tightening your pitch, and clarifying your direction.",
    },
    {
      title: "Step 3 – Founder Readiness Review",
      description: "At the end, you receive a structured review of where you stand as a founder – your strengths, your gaps, and your next steps.",
    },
  ];

  return (
    <Section>
      <Container>
        <HeadingBlock
          title="A clear, structured path – from first step to readiness."
          subtitle="How it works"
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-fg-md">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="font-cormorant text-5xl md:text-6xl font-semibold text-fg-gold/20 mb-fg-sm">
                  {index + 1}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-fg-navy mb-fg-sm">
                  {step.title}
                </h3>
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <PlaceholderImage className="h-64 md:h-96 lg:h-[400px]" />
        </div>
      </Container>
    </Section>
  );
}

