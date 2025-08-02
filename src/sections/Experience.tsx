"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { experienceData } from "../../profile.config";
import { motion } from "framer-motion";

export const ExperienceSection = ({ id }: { id: string }) => {
    return (
        <section className="py-20 md:py-14 lg:py-20" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Experience"
                    heading2="My Internship Journey"
                    paragraph="Explore my professional experience and the impact I've made through various internships."
                />
                <div className="mt-20 flex flex-col gap-12">
                    {experienceData.map((experience, index) => (
                        <motion.div
                            key={experience.company}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 md:p-10 lg:p-12">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                                    <div className="lg:flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                                            <h3 className="font-serif text-2xl md:text-3xl text-white">
                                                {experience.position}
                                            </h3>
                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 rounded-full text-sm font-semibold">
                                                {experience.company}
                                            </span>
                                        </div>
                                        <p className="text-emerald-300 font-medium mb-4">
                                            {experience.duration}
                                        </p>
                                        <p className="text-white/70 mb-6 leading-relaxed">
                                            {experience.description}
                                        </p>
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                                            <ul className="space-y-2">
                                                {experience.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-white/70">
                                                        <span className="text-emerald-300 mt-1">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:w-64 lg:flex-shrink-0">
                                        <a
                                            href={experience.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                                        >
                                            <span>View Certificate</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 