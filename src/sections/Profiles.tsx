"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { profilesData } from "../../profile.config";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProfilesSection = ({ id }: { id: string }) => {
    return (
        <section className="py-20 md:py-14 lg:py-20" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Profiles"
                    heading2="My Digital Presence"
                    paragraph="Connect with me across various platforms where I showcase my skills, projects, and professional journey."
                />
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profilesData.map((profile, index) => (
                        <motion.div
                            key={profile.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 md:p-8 h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                                        <Image
                                            src={profile.image}
                                            alt={profile.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-serif text-xl md:text-2xl text-white mb-2">
                                        {profile.name}
                                    </h3>
                                    <p className="text-white/70 mb-6 flex-1">
                                        {profile.description}
                                    </p>
                                    <a
                                        href={profile.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                                    >
                                        <span>Visit Profile</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 