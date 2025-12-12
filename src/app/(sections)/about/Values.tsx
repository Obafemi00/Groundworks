"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import ValueCard from "@/components/cards/ValueCard";
import { values } from "@/data/values";
import StaggerChildren from "@/components/animations/StaggerChildren";

export default function Values() {
  return (
    <Section className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          title="Our Values"
          description="The core values that define who we are and how we work."
          descriptionColor=""
        />
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-fg-md">
            {values.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </StaggerChildren>
      </Container>
    </Section>
  );
}

