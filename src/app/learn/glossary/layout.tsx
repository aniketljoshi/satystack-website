import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ZKP & Compliance Glossary | SatyaStack',
    description: 'Comprehensive glossary of terms related to Zero-Knowledge Proofs, Privacy-Preserving Compliance, and Indian Regulations (DPDP, FIU-IND).',
    keywords: 'ZKP glossary, privacy compliance terms, zero knowledge definitions, DPDP Act dictionary, SatyaStack glossary',
    openGraph: {
        title: 'ZKP & Compliance Glossary | SatyaStack',
        description: 'Dictionary of Zero-Knowledge and Compliance terms.',
        type: 'article',
        url: 'https://satyastack.com/learn/glossary',
        siteName: 'SatyaStack',
        images: [{ url: 'https://satyastack.com/og-image.png' }],
    },
    alternates: {
        canonical: 'https://satyastack.com/learn/glossary',
    },
};

export default function GlossaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="antialiased bg-[#FDFDFC]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://satyastack.com" },
                            { "@type": "ListItem", "position": 2, "name": "Learn", "item": "https://satyastack.com/learn" },
                            { "@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://satyastack.com/learn/glossary" }
                        ]
                    })
                }}
            />
            {children}
        </div>
    );
}
