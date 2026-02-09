import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'What is Zero-Knowledge Proof? | Privacy Compliance Guide - SatyaStack',
    description: 'Learn how zero-knowledge proofs enable privacy-preserving KYC. Simple guide for compliance officers, regulators, and developers. No technical background required.',
    keywords: 'zero knowledge proof explained, what is ZKP, ZK proof for beginners, privacy compliance guide, how ZKP works, privacy preserving verification',
    openGraph: {
        title: 'What is Zero-Knowledge Proof? | SatyaStack Educational Guide',
        description: 'Learn how zero-knowledge proofs enable privacy-preserving KYC. A simple guide for non-technical readers.',
        type: 'article',
        locale: 'en_IN',
        url: 'https://satyastack.com/learn/zero-knowledge',
        siteName: 'SatyaStack',
        images: [
            {
                url: 'https://satyastack.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'SatyaStack - Learn Zero-Knowledge Proofs',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@satyastack',
        creator: '@satyastack',
        title: 'What is Zero-Knowledge Proof? | SatyaStack Guide',
        description: 'Learn how ZK proofs enable privacy-preserving compliance. Simple guide for everyone.',
        images: ['https://satyastack.com/og-image.png'],
    },
    alternates: {
        canonical: 'https://satyastack.com/learn/zero-knowledge',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        "headline": "What is Zero-Knowledge Proof? | Privacy Compliance Guide",
                        "description": "Learn how zero-knowledge proofs enable privacy-preserving KYC. Simple guide for compliance officers, regulators, and developers.",
                        "image": "https://satyastack.com/og-image.png",
                        "author": {
                            "@type": "Organization",
                            "name": "SatyaStack"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "SatyaStack",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://satyastack.com/logo.png"
                            }
                        },
                        "datePublished": "2026-02-09",
                        "dateModified": "2026-02-09"
                    })
                }}
            />
            {children}
        </div>
    );
}
