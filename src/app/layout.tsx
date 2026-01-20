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
  title: "SatyaStack | Privacy-Preserving Compliance Infrastructure",
  description: "SatyaStack is the privacy-preserving compliance stack for India’s regulated digital economy. Built with Zero-Knowledge Proofs to meet DPDP, FIU, and RBI requirements without storing PII.",
  openGraph: {
    title: "SatyaStack | Privacy-Preserving Compliance Infrastructure",
    description: "Prove Compliance Without Revealing Personal Data. Built with Zero-Knowledge Proofs.",
    type: "website",
    locale: "en_IN",
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
