"use client";
import { SkillsSection } from "@/sections/Skills";
import { skillsSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function SkillsPage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <SkillsSection id={skillsSectionId} />
            </div>
        </div>
    );
} 