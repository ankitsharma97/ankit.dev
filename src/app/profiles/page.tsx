"use client";
import { ProfilesSection } from "@/sections/Profiles";
import { profilesSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function ProfilesPage() {
    return (
        <div className="min-h-screen">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <ProfilesSection id={profilesSectionId} />
            </div>
        </div>
    );
} 