import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Zero-Knowledge Compliance Architecture | SatyaStack Trust Model",
    description: "Explore SatyaStack's ZK proof architecture. See how we enable banks and fintechs to verify compliance without storing PII. DPDP & RBI aligned.",
    keywords: "ZK proof architecture, zero knowledge compliance infrastructure, privacy preserving compliance design, trust model, data privacy compliance, SatyaStack architecture",
    openGraph: {
        title: "Zero-Knowledge Compliance Architecture | SatyaStack",
        description: "Explore SatyaStack's ZK proof architecture. See how banks and fintechs verify compliance without storing PII.",
        type: "article",
        locale: "en_IN",
        url: "https://satyastack.com/architecture",
        siteName: "SatyaStack",
        images: [
            {
                url: "https://satyastack.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "SatyaStack Architecture & Trust Model",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@satyastack",
        creator: "@satyastack",
        title: "Zero-Knowledge Compliance Architecture | SatyaStack",
        description: "Explore SatyaStack's ZK proof architecture for privacy-preserving compliance verification.",
        images: ["https://satyastack.com/og-image.png"],
    },
    alternates: {
        canonical: "https://satyastack.com/architecture",
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

export default function ArchitectureLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
