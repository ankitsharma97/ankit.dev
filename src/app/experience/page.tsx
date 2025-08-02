"use client";
import { ExperienceSection } from "@/sections/Experience";
import { experienceSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <ExperienceSection id={experienceSectionId} />
            </div>
        </div>
    );
} 