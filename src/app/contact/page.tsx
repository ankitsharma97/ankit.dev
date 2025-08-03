"use client";
import { ContactSection } from "@/sections/Contact";
import { contactSectionId } from "@/sections/constants";
import { Navigation } from "@/components/Navigation";

export default function ContactPage() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />
            {/* Main Content */}
            <div className="pt-20">
                <ContactSection id={contactSectionId} />
            </div>
        </div>
    );
} 