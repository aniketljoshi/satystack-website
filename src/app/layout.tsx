import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SatyaStack | Privacy-Preserving KYC & Zero-Knowledge Compliance for India",
  description: "India's first privacy-preserving KYC platform using zero-knowledge proofs. DPDP compliant, FIU crypto compliance ready, RBI compliance infrastructure for AML compliance India. Prove compliance without revealing personal data.",
  keywords: "privacy preserving KYC, zero knowledge KYC, DPDP compliance, FIU crypto compliance, RBI compliance infrastructure, AML compliance India, privacy preserving AML, zero knowledge proofs, data protection India",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: "SatyaStack | Privacy-Preserving KYC & Zero-Knowledge Compliance",
    description: "India's first privacy-preserving KYC platform. Prove compliance without revealing personal data using zero-knowledge proofs. DPDP, FIU, and RBI compliant.",
    type: "website",
    locale: "en_IN",
    url: "https://satyastack.com",
    siteName: "SatyaStack",
    images: [
      {
        url: "https://satyastack.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SatyaStack - Privacy-Preserving Compliance Infrastructure for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@satyastack",
    creator: "@satyastack",
    title: "SatyaStack | Privacy-Preserving KYC & Zero-Knowledge Compliance",
    description: "India's first privacy-preserving KYC platform using zero-knowledge proofs. DPDP, FIU, and RBI compliant.",
    images: ["https://satyastack.com/og-image.png"],
  },
  alternates: {
    canonical: "https://satyastack.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SatyaStack",
              "url": "https://satyastack.com",
              "logo": "https://satyastack.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@satyastack.com",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://twitter.com/satyastack",
                "https://linkedin.com/company/satyastack",
                "https://github.com/satyastack"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
