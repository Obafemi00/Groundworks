import PageHero from "@/app/(components)/PageHero";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use",
  description: "Founder Groundworks Terms of Use. Please read these terms carefully before using our website and services.",
  path: "/terms",
});

export const dynamic = "force-static";

export default function TermsPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Terms of Use" 
        subtitle="Our website usage terms"
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
                These Terms of Use govern your access to and use of the Founder Groundworks website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <HeadingBlock
                title="Acceptance of Terms"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  By accessing, browsing, or using the Founder Groundworks website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our website.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Use of Website"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Use the website in any way that violates any applicable law or regulation.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Attempt to gain unauthorised access to any portion of the website or any systems or networks connected to the website.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Transmit any viruses, malware, or other harmful code through the website.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Interfere with or disrupt the website or servers or networks connected to the website.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Use automated systems or software to extract data from the website without our express written permission.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Intellectual Property"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  All content on the Founder Groundworks website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Founder Groundworks or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent, except as follows:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Your computer may temporarily store copies of materials for your personal, non-commercial use.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>You may print or download one copy of a reasonable number of pages for your personal, non-commercial use.</span>
                  </li>
                </ul>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  The "Founder Groundworks" name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Founder Groundworks or its affiliates. You must not use such marks without our prior written permission.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Informational Content and Disclaimers"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  The information on this website is provided for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Any reliance you place on such information is strictly at your own risk. We are not liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from your use of or reliance on information on this website.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="No Guarantees"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Founder Groundworks provides educational programmes and informational resources. We do not guarantee specific outcomes, results, or success in any business venture or entrepreneurial endeavour. Participation in our programmes does not guarantee business success, funding, partnerships, or any other specific outcome.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Our programmes are designed to provide structured education and guidance, but individual results will vary based on numerous factors beyond our control, including market conditions, execution, and individual effort.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Limitation of Liability"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  To the fullest extent permitted by applicable law, Founder Groundworks, its directors, officers, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Your use or inability to use the website or services.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Any conduct or content of third parties on the website.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Any unauthorised access to or use of our servers or any personal information stored therein.</span>
                  </li>
                  <li className="font-inter text-base md:text-[18px] leading-relaxed flex items-start gap-3" style={{ color: "#0E1F36" }}>
                    <span className="text-fg-gold flex-shrink-0 mt-1.5">•</span>
                    <span>Any interruption or cessation of transmission to or from the website.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="External Links"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Our website may contain links to external websites that are not operated by us. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We are not responsible for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Indemnification"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  You agree to defend, indemnify, and hold harmless Founder Groundworks, its directors, officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the website, your violation of these Terms of Use, or your violation of any rights of another.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Governing Law and Jurisdiction"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  These Terms of Use shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising out of or relating to these terms or the website shall be subject to the exclusive jurisdiction of the courts in the jurisdiction where Founder Groundworks operates, though we may seek injunctive relief in any jurisdiction.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  If any provision of these Terms of Use is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these terms shall otherwise remain in full force and effect.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Changes to Terms"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We reserve the right to modify or replace these Terms of Use at any time at our sole discretion. If we make material changes, we will notify you by posting the updated terms on this page and updating the "Last updated" date.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Use. If you do not agree to the modified terms, you must stop using the website.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Severability"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  If any provision of these Terms of Use is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect. The invalid, illegal, or unenforceable provision shall be replaced with a valid, legal, and enforceable provision that comes closest to the intent of the original provision.
                </p>
              </div>
            </div>

            <div>
              <HeadingBlock
                title="Contact Information"
                level={2}
                align="left"
                maxWidth="full"
                animate={false}
              />
              <div className="mt-6 space-y-4">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  If you have any questions about these Terms of Use, please contact us:
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

