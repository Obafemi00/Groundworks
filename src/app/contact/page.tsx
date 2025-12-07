import PageHero from "@/app/(components)/PageHero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: "Get in touch to learn more about our programmes and how we can help you build strong foundations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Get in touch." 
        subtitle="Whether you are a first-time founder, an organisation, or an institution, we'd like to hear from you."
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-inter text-base md:text-[18px] text-fg-grey mb-6 leading-relaxed">
                Please complete the form below and we will respond with the most appropriate next step.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

