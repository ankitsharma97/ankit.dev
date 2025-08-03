"use client";
import { ProjectsSection } from "@/sections/Projects";
import { projectsSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <ProjectsSection id={projectsSectionId} />
            </div>
        </div>
    );
} 