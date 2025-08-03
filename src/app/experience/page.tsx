"use client";
import { ExperienceSection } from "@/sections/Experience";
import { CertificationsSection } from "@/sections/Certifications";
import { experienceSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function ExperiencePage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <ExperienceSection id={experienceSectionId} />
                <CertificationsSection id="certifications" />
            </div>
        </div>
    );
} 