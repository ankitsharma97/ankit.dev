"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { experienceData } from "../../profile.config";
import { motion } from "framer-motion";
import Image from "next/image";

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
                            className="group cursor-pointer"
                        >
                            <Card className="p-8 md:p-10 lg:p-12 group-hover:border-2 group-hover:border-emerald-300/50 transition-all duration-300">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                                    <div className="lg:flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                                            <div className="flex items-center gap-4">
                                                
                                                <div>
                                                    <h3 className="font-serif text-2xl md:text-3xl text-white">
                                                        {experience.position}
                                                    </h3>
                                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 rounded-full text-sm font-semibold">
                                                        {experience.company}
                                                    </span>
                                                </div>
                                            </div>
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
                                    <div className="lg:w-64 lg:flex-shrink-0 flex flex-col gap-4 items-center">
                                        <div>
                                        <a
                                            href={experience.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/30 relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/10 group-hover:via-emerald-300/20 group-hover:to-emerald-300/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                            <span className="relative z-10">View Certificate</span>
                                            <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        </div>
                                        <div className="w-full h-full object-cover bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg flex items-center justify-center mb-4 overflow-hidden rounded-xl">
                                            <Image
                                                src={experience.image}
                                                alt={experience.company}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

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