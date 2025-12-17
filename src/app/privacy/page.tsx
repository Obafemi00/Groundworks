import PageHero from "@/app/(components)/PageHero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Founder Groundworks Privacy Policy. Learn how we collect, use, and protect your personal information when you interact with our website and services.",
  path: "/privacy",
});

export const dynamic = "force-static";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Privacy Policy" 
        subtitle="How we handle your information"
        withImage={false}
        background="white"
      />
      
      <Section padding="sm" className="!pt-4 md:!pt-6 lg:!pt-8">
        <Container maxWidth="narrow">
          <div className="space-y-12">
            <div>
              <p className="font-inter text-base md:text-[18px] leading-relaxed mb-6" style={{ color: "#0E1F36" }}>
                Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="font-inter text-base md:text-[18px] leading-relaxed mb-8" style={{ color: "#0E1F36" }}>
                At Founder Groundworks, we are committed to protecting your privacy and handling your personal information with care and transparency. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website or interact with our services.
              </p>
            </div>

            <div>
              <HeadingBlock
                title="Information We Collect"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  When you interact with our website, we may collect the following types of information:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Contact Information:</strong> Name, email address, and any other details you provide when submitting our contact form or requesting information.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Location Information:</strong> General location data you may provide, such as country or region.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Form Responses:</strong> Any information you share in our contact forms, including questions, comments, or programme inquiries.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited, time spent on pages, and referring websites. This may be collected through standard web analytics tools.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="How We Use Your Information"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We use the information we collect for the following purposes:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>To respond to your inquiries and provide information about our programmes and services.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>To communicate with you about Founder Groundworks, including programme updates, educational content, and relevant information.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>To improve our website and services by understanding how visitors use our site.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>To comply with legal obligations and protect our rights and interests.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Data Storage and Security"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Your information is stored securely using Supabase, a trusted cloud database platform. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  While we strive to protect your personal information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we are committed to maintaining the highest standards of data protection.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Cookies and Analytics"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage information. Cookies are small text files stored on your device that help us understand how you interact with our site.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We may use analytics tools to gather information about website traffic and user behaviour. This information is used in aggregate form to improve our website's functionality and user experience. You can control cookie preferences through your browser settings.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Data Sharing and Disclosure"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>With service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>When required by law or to protect our rights, property, or safety, or that of others.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>In connection with a business transfer, such as a merger or acquisition, with appropriate notice to affected users.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Your Rights"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Access:</strong> You can request access to the personal information we hold about you.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Deletion:</strong> You can request that we delete your personal information, subject to legal and operational requirements.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span><strong>Objection:</strong> You can object to certain uses of your information, such as direct marketing.</span>
                  </li>
                </ul>
                <p className="font-inter text-base md:text-[18px] leading-relaxed mt-4" style={{ color: "#0E1F36" }}>
                  To exercise any of these rights, please contact us using the information provided in the Contact section below.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Data Retention"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymise it.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="International Data Transfers"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  As a global organisation, your information may be transferred to and stored in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy, regardless of where it is processed.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Children's Privacy"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Our services are designed for adults and are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete that information promptly.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Changes to This Privacy Policy"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Contact Us"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-6 space-y-2">
                  <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                    <strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`} className="text-fg-gold hover:underline">{SITE_CONFIG.email}</a>
                  </p>
                  <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                    <strong>Website:</strong> <a href={SITE_CONFIG.url} className="text-fg-gold hover:underline">{SITE_CONFIG.url}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

