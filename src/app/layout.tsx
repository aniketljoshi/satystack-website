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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/shield.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
        alt: "SatyaStack - Verify compliance. Reveal nothing.",
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
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "SatyaStack",
                  "url": "https://satyastack.com",
                  "logo": "https://satyastack.com/logo.png",
                  "description": "India's first privacy-preserving KYC platform using zero-knowledge proofs",
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
                },
                {
                  "@type": "WebSite",
                  "name": "SatyaStack",
                  "url": "https://satyastack.com",
                  "description": "Privacy-preserving compliance infrastructure for India",
                  "publisher": {
                    "@type": "Organization",
                    "name": "SatyaStack"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Privacy-Preserving KYC Infrastructure",
                  "provider": {
                    "@type": "Organization",
                    "name": "SatyaStack"
                  },
                  "description": "Zero-knowledge proof based compliance verification for banks, fintechs, NBFCs, crypto exchanges, and regulated entities. DPDP, FIU-IND, and RBI compliant.",
                  "areaServed": {
                    "@type": "Country",
                    "name": "India"
                  },
                  "serviceType": "RegTech Compliance Infrastructure",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": "Banks, NBFCs, Fintechs, Crypto Exchanges, Payment Gateways"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "SatyaStack SDK",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Cross-platform",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                  },
                  "description": "Developer SDK for integrating privacy-preserving KYC and compliance proofs into fintech applications."
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
