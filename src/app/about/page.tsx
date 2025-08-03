"use client";
import { AboutSection } from "@/sections/About";
import { aboutSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function AboutPage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <AboutSection id={aboutSectionId} />
            </div>
        </div>
    );
} 