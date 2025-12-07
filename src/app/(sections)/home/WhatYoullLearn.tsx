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
    <Section background="navy">
      <Container>
        <HeadingBlock
          title="By the end, you will:"
          subtitle="Outcomes"
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.1}>
          <div className="mt-fg-md">
            <ul className="space-y-fg-xs">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-fg-gold mr-3 mt-1">●</span>
                  <span className="font-inter text-base md:text-[18px] text-fg-sand leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerChildren>
      </Container>
    </Section>
  );
}

