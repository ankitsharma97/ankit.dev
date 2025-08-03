import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Script from "next/script";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"] });

export const metadata: Metadata = {
    title: "Ankit Sharma - Full Stack Developer & Problem Solver",
    description: "Full Stack Developer specializing in React, Django, and Machine Learning. Currently pursuing BTech in Information Technology. View my projects, skills, and experience.",
    keywords: ["Full Stack Developer", "React", "Django", "Machine Learning", "Python", "JavaScript", "Web Development", "Portfolio"],
    authors: [{ name: "Ankit Sharma" }],
    creator: "Ankit Sharma",
    openGraph: {
        title: "Ankit Sharma - Full Stack Developer",
        description: "Full Stack Developer specializing in React, Django, and Machine Learning",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ankit Sharma - Full Stack Developer",
        description: "Full Stack Developer specializing in React, Django, and Machine Learning",
    },
    robots: {
        index: true,
        follow: true,
    },
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
            </head>
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    "bg-gray-900 text-white font-sans antialiased overflow-x-hidden"
                )}>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
