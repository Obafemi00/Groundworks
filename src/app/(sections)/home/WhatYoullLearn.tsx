"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";

export default function WhatYoullLearn() {
  const outcomes = [
    "Understand the difference between a problem, a solution, and the means of delivering that solution",
    "Be able to explain your idea clearly in plain language",
    "Know the basic structures of business models and early-stage validation",
    "Identify and track simple, meaningful KPIs for your project",
    "Deliver a structured pitch and handle follow-up questions with confidence",
    "Think and speak with the clarity expected of a serious founder",
  ];

  return (
    <Section background="white">
      <Container>
        <HeadingBlock
          title="By the end, you will:"
          subtitle="Outcomes"
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.1}>
          <div className="mt-fg-md">
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-fg-gold flex-shrink-0 font-inter text-lg leading-[1.6]">➤</span>
                  <p className="font-inter text-base md:text-[18px] leading-relaxed flex-1" style={{ color: "#0E1F36" }}>
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </StaggerChildren>
      </Container>
    </Section>
  );
}

