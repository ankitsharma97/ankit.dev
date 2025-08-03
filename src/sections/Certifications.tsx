"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "../../profile.config";
import { motion } from "framer-motion";
import Image from "next/image";

export const CertificationsSection = ({ id }: { id: string }) => {
    return (
        <section className="py-20 md:py-14 lg:py-20 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Certifications"
                    heading2="Professional Credentials"
                    paragraph="Industry-recognized certifications that validate my skills and expertise across various technologies."
                />
                
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -8,
                                scale: 1.05,
                                rotateY: 5
                            }}
                            className="group cursor-pointer"
                        >
                            <Card className="p-6 h-full group-hover:shadow-2xl group-hover:shadow-emerald-300/20 transition-all duration-500 hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent relative overflow-hidden">
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/3 group-hover:via-emerald-300/8 group-hover:to-emerald-300/3 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="w-36 h-24 bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center mb-4 overflow-hidden rounded-lg group-hover:shadow-lg group-hover:shadow-emerald-300/30 transition-all duration-300">
                                        <Image
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/10 group-hover:to-emerald-300/5 transition-all duration-300"></div>
                                    </div>
                                    <h3 className="font-serif text-xl md:text-2xl text-white mb-2 group-hover:text-emerald-200 transition-colors duration-300 group-hover:scale-105">
                                        {cert.name}
                                    </h3>
                                    <p className="text-emerald-300 font-medium mb-2 group-hover:text-emerald-200 transition-colors duration-300">
                                        {cert.issuer}
                                    </p>
                                    <p className="text-white/70 text-sm mb-4 group-hover:text-white/80 transition-colors duration-300">
                                        {cert.date}
                                    </p>
                                    <a
                                        href={cert.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-950 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 text-sm group-hover:scale-105 relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/10 group-hover:via-emerald-300/20 group-hover:to-emerald-300/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                        <span className="relative z-10">View Certificate</span>
                                        <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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