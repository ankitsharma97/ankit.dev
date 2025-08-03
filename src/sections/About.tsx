"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/srimad-bhagavad-gita-cover.webp";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import bookCoverImage from "@/assets/images/book-cover.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemsRow } from "@/components/ToolboxItemsRow";
import { motion } from "framer-motion";
import { useRef } from "react";
import { hobbies, toolBoxItems, profilesData } from "../../profile.config";

export const AboutSection = ({ id }: { id: string }) => {
    const constraintRef = useRef(null);

    return (
        <div className="py-20 md:py-14 lg:py-20 lg:mt-3">
            <section className="container" id={id}>
                <SectionHeader
                    heading1="About Me"
                    heading2="A Glimpse Into My World"
                    paragraph="Learn more about who I am, what I do, and what inspires me. Currently pursuing BTech in Information Technology at AKTU, Lucknow."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                heading="My Reads"
                                description="Explore the book shaping my perspectives."
                                className="md:py-2.5 md:px-4 lg:px-4 lg:py-1.5"
                            />
                            <Image
                                src={bookImage}
                                alt="Book Cover Image"
                                className="w-40 mx-auto mt-6 md:mt-3 lg:pt-1 rounded-xl"
                            />
                        </Card>
                        <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
                            <CardHeader
                                heading="My Toolbox"
                                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                                className="p-6 pb-0 lg:-mt-0.5"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-4 md:mt-6"
                                itemsWrapperClassName="animate-scroll-left [animation-duration:30s]"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-6"
                                itemsWrapperClassName="animate-scroll-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-6">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-4 lg:-mt-0.5">
                            <CardHeader
                                heading="Beyond the Code"
                                description="Explore my interests and hobbies beyond the digital realm."
                                className="p-6 md:pb-8"
                            />
                            <div className="relative z-0 flex-1 lg:-mt-1" ref={constraintRef}>
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-1.5 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                            zIndex: hobby.zIndex,
                                        }}
                                        drag
                                        dragConstraints={constraintRef}>
                                        <span className="font-semibold text-gray-950">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-2">
                            <Image
                                src={mapImage}
                                alt="Map Image"
                                className="h-full w-full object-cover object-left-top"
                                loading="lazy"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full animate-ping [animation-duration:2s]"></div>
                                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                                <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
                            </div>
                        </Card>
                    </div>
                    
                    {/* Profiles Section */}
                    <div className="mt-20">
                        <SectionHeader
                            heading1="Digital Presence"
                            heading2="Connect With Me"
                            paragraph="Find me on various platforms where I showcase my work, skills, and professional journey."
                        />
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {profilesData.map((profile, index) => (
                                <motion.div
                                    key={profile.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        y: -3,
                                        scale: 1.02
                                    }}
                                    className="group cursor-pointer"
                                >
                                    <Card className="p-6 md:p-8 h-full group-hover:shadow-lg group-hover:shadow-emerald-300/10 transition-all duration-300 hover:bg-white/3">
                                        <div className="flex flex-col items-center text-center h-full">
                                            <div className="w-48 h-32 rounded-lg bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-all duration-300">
                                                <Image
                                                    src={profile.image}
                                                    alt={profile.name}
                                                    className="w-full h-full  object-fit rounded-lg group-hover:scale-110 transition-all duration-300 ease-out"
                                                />
                                            </div>
                                            <h3 className="font-serif text-xl md:text-2xl text-white mb-2 group-hover:text-emerald-200 transition-colors duration-300">
                                                {profile.name}
                                            </h3>
                                            <p className="text-white/70 mb-6 flex-1 group-hover:text-white/80 transition-colors duration-300">
                                                {profile.description}
                                            </p>
                                            <a
                                                href={profile.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 group-hover:scale-105 relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/10 group-hover:via-emerald-300/20 group-hover:to-emerald-300/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                                <span className="relative z-10">Visit Profile</span>
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
                </div>
            </section>
        </div>
    );
};
