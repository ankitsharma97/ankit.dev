"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import bookImage from "@/assets/images/srimad-bhagavad-gita-cover.webp";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItemsRow } from "@/components/ToolboxItemsRow";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, transition, viewport } from "@/lib/motion";
import { hobbies, toolBoxItems, profilesData } from "../../profile.config";

export const AboutSection = ({ id }: { id: string }) => {
    const featuredProfiles = profilesData.slice(0, 6);

    return (
        <section className="py-20 md:py-14 lg:py-20" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="About Me"
                    heading2="Software Engineer With A Product Mindset"
                    paragraph="I focus on building software that is usable, reliable, and thoughtfully designed, with equal attention to frontend polish and backend clarity."
                />

                <div className="mt-16 grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={viewport}
                        className="space-y-8"
                    >
                        <Card className="p-8 md:p-10">
                            <p className="text-xs uppercase tracking-[0.28em] text-white/40">Overview</p>
                            <h3 className="mt-4 max-w-2xl font-serif text-3xl text-white md:text-5xl">
                                I build complete digital products with a bias toward clarity, structure, and execution.
                            </h3>
                            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                                My work sits at the intersection of software engineering, product thinking, and continuous
                                learning. I enjoy turning ideas into practical systems that feel polished on the surface and
                                dependable underneath.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Focus</p>
                                    <p className="mt-3 font-serif text-xl text-white">Full Stack</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Toolbox</p>
                                    <p className="mt-3 font-serif text-xl text-white">{toolBoxItems.length}+ Tools</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Profiles</p>
                                    <p className="mt-3 font-serif text-xl text-white">{profilesData.length} Platforms</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-0 overflow-hidden">
                            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                                <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
                                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">Currently Reading</p>
                                    <h3 className="mt-4 font-serif text-3xl text-white">Books That Shape Perspective</h3>
                                    <p className="mt-4 text-base leading-8 text-white/68">
                                        I value material that sharpens discipline, focus, and long-term thinking beyond day-to-day coding work.
                                    </p>
                                    <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
                                        Srimad Bhagavad Gita
                                    </div>
                                </div>

                                <div className="flex items-center justify-center p-8 md:p-10">
                                    <div className="w-full max-w-[220px] rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                                        <Image
                                            src={bookImage}
                                            alt="Srimad Bhagavad Gita book cover"
                                            className="h-auto w-full rounded-[20px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={viewport}
                        className="space-y-8 xl:sticky xl:top-24"
                    >
                        <Card className="p-0 overflow-hidden">
                            <div className="relative min-h-[320px]">
                                <Image
                                    src={mapImage}
                                    alt="Map background"
                                    className="absolute inset-0 h-full w-full object-cover object-left-top"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/45 to-gray-950/10" />

                                <div className="relative z-10 flex h-full min-h-[320px] flex-col justify-between p-8 md:p-10">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">Location</p>
                                        <h3 className="mt-4 font-serif text-3xl text-white">Building From India</h3>
                                        <p className="mt-4 max-w-sm text-base leading-8 text-white/72">
                                            Rooted in disciplined learning, collaborative work, and a strong interest in meaningful software.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm">
                                            <div className="absolute inset-0 rounded-full border border-emerald-300/30 animate-ping [animation-duration:2.4s]"></div>
                                            <Image src={smileMemoji} alt="Smile memoji" className="size-14" />
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-sm">
                                            <p className="text-sm text-white/80">Open to opportunities, collaboration, and product work.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8 md:p-10">
                            <p className="text-xs uppercase tracking-[0.24em] text-white/40">Beyond Work</p>
                            <h3 className="mt-4 font-serif text-3xl text-white">Interests That Keep Me Sharp</h3>
                            <p className="mt-4 text-base leading-8 text-white/68">
                                Outside project delivery, I spend time on problem solving, continuous learning, and fields that improve the way I think and collaborate.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.title}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/78"
                                    >
                                        <span>{hobby.emoji}</span>
                                        <span>{hobby.title}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ ...transition, delay: 0.05 }}
                    viewport={viewport}
                    className="mt-8"
                >
                    <Card className="p-0 overflow-hidden">
                        <div className="border-b border-white/10 p-6 md:p-8">
                            <CardHeader
                                heading="Toolbox"
                                description="Technologies and tools I use regularly across frontend, backend, and workflow."
                                className="p-0 md:p-0"
                            />
                        </div>
                        <div className="py-6">
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-1"
                                itemsWrapperClassName="animate-scroll-left [animation-duration:32s]"
                            />
                            <ToolboxItemsRow
                                items={toolBoxItems}
                                className="mt-4"
                                itemsWrapperClassName="animate-scroll-right [animation-duration:20s]"
                            />
                        </div>
                    </Card>
                </motion.div>

                <div className="mt-20">
                    <SectionHeader
                        heading1="Digital Presence"
                        heading2="Profiles & Platforms"
                        paragraph="A curated set of platforms where I share work, solve problems, and maintain an active technical presence."
                    />

                    <motion.div
                        className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        {featuredProfiles.map((profile, index) => (
                            <motion.a
                                key={profile.name}
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                transition={{ ...transition, delay: index * 0.05 }}
                                className="group"
                            >
                                <Card className="h-full p-5 md:p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                                            <Image
                                                src={profile.image}
                                                alt={profile.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="font-serif text-xl text-white">{profile.name}</h3>
                                                <span className="text-sm text-white/35 transition-transform duration-300 group-hover:translate-x-1">
                                                    ↗
                                                </span>
                                            </div>
                                            <p className="mt-2 text-sm leading-7 text-white/65">{profile.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
