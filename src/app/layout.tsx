import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

const siteUrl = "https://ankit.is-a.dev";
const siteTitle = "Ankit Sharma - Backend & AI Software Engineer";
const siteDescription =
    "Software Engineer at TCS building scalable backend systems, RAG/LLM platforms and distributed systems in Go, Python, TypeScript and Java. See projects, experience and open-source work.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    keywords: ["Software Engineer", "Backend Developer", "Distributed Systems", "Go", "Python", "RAG", "Kafka", "Microservices", "Django", "Next.js", "Portfolio"],
    authors: [{ name: "Ankit Sharma" }],
    creator: "Ankit Sharma",
    alternates: { canonical: "/" },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName: "Ankit Sharma",
        type: "website",
        locale: "en_US",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: siteTitle }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: ["/og.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ankit Sharma",
    url: siteUrl,
    jobTitle: "Software Engineer",
    worksFor: { "@type": "Organization", name: "Tata Consultancy Services" },
    alumniOf: "Rajkiya Engineering College, Azamgarh",
    sameAs: [
        "https://github.com/ankitsharma97",
        "https://www.linkedin.com/in/ankit-sharma-64aa32255/",
        "https://leetcode.com/u/ankit972125/",
    ],
    knowsAbout: ["Distributed Systems", "Backend Engineering", "RAG", "Go", "Python", "Kafka"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            </head>
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    "bg-gray-900 text-white font-sans antialiased overflow-x-hidden"
                )}>
                <ScrollToTop />
                <Providers>{children}</Providers>
                <Analytics />
            </body>
        </html>
    );
}
