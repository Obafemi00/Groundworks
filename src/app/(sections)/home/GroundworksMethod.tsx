"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function GroundworksMethod() {
  const methods = [
    {
      title: "Foundations of Thinking",
      description: "We begin by reshaping how you think about problems, solutions and value. You'll learn to separate the idea from the delivery, understand markets, and articulate why your solution matters.",
    },
    {
      title: "Practical Structure",
      description: "We then introduce simple, serious tools, from basic business models to MVP thinking and KPIs. You learn how to move from assumption to evidence, and from vague ambition to practical planning.",
    },
    {
      title: "Communication & Presence",
      description: "Finally, we refine how you speak as a founder. You'll practice pitching, answering hard questions, and presenting your work in a way that investors, partners and institutions take seriously.",
    },
  ];

  return (
    <Section background="sand">
      <Container>
        <HeadingBlock
          title="From unclear ideas to disciplined founder."
          subtitle="The Groundworks Method™"
          description={`Our method is designed to move people from "I don't know where to start" to "I understand how to build and present a serious business."`}
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-fg-md">
            {methods.map((method, index) => (
              <div key={index} className="bg-white rounded-md p-6 md:p-8">
                <div className="font-cormorant text-3xl md:text-4xl font-semibold text-fg-gold/30 mb-fg-sm">
                  {index + 1}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-fg-navy mb-fg-sm">
                  {method.title}
                </h3>
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/programmes/programmes-01.jpg"
            alt="Founders applying the Groundworks Method through structured training and practical frameworks"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

