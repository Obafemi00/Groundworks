import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import { generatePageMetadata } from "@/lib/seo";

const baseMetadata = generatePageMetadata({
  title: "Home",
  description: "Building Founders from the Ground Up. Institutional support for founders who want to build responsibly and sustainably.",
});

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: "/logo/Founder Groundworks Transparent White.png",
    shortcut: "/logo/Founder Groundworks Transparent White.png",
    apple: "/logo/Founder Groundworks Transparent White.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className="min-h-screen bg-fg-white text-fg-navy antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

