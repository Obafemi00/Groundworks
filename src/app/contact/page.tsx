import PageHero from "@/app/(components)/PageHero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description: "Get in touch with Founder Groundworks to learn more about our programmes and how we can help you build strong foundations. Whether you're a first-time founder, organisation, or institution, we'd like to hear from you.",
  path: "/contact",
  image: "/images/founder-groundworks/contact/contact-hero.jpg",
  imageAlt: "Welcoming professional workspace for collaboration at Founder Groundworks",
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Get in touch." 
        subtitle="Whether you are a first-time founder, an organisation, or an institution, we'd like to hear from you."
        withImage={true}
        imageSrc="/images/founder-groundworks/contact/contact-hero.jpg"
        imageAlt="Welcoming professional workspace for collaboration"
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

