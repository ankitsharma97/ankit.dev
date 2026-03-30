"use client";
import { useState } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { experienceData } from "../../profile.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, transition, viewport } from "@/lib/motion";

export const ExperienceSection = ({ id }: { id: string }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showAllAchievements, setShowAllAchievements] = useState(false);

    const selectedExperience = experienceData[selectedIndex];
    const achievements = showAllAchievements
        ? selectedExperience.achievements
        : selectedExperience.achievements.slice(0, 4);

    return (
        <section className="py-20 md:py-14 lg:py-20 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Experience"
                    heading2="My Internship Journey"
                    paragraph="Browse the timeline, then open one role at a time to explore the work, stack, and impact in more detail."
                />
                <div className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-4 md:p-5 lg:sticky lg:top-24">
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Timeline</p>
                                    <h3 className="mt-2 font-serif text-2xl text-white">Select a role</h3>
                                </div>
                                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                                    {experienceData.length} roles
                                </div>
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible">
                                {experienceData.map((experience, index) => {
                                    const isActive = index === selectedIndex;
                                    const isCurrent = experience.duration.includes("Present");

                                    return (
                                        <button
                                            key={`${experience.company}-${experience.position}-${index}`}
                                            type="button"
                                            onClick={() => {
                                                setSelectedIndex(index);
                                                setShowAllAchievements(false);
                                            }}
                                            className={`group relative min-w-[280px] rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 lg:w-full ${
                                                isActive
                                                    ? "border-emerald-300/60 bg-gradient-to-br from-emerald-300/15 to-sky-400/10"
                                                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                                            }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex flex-col items-center">
                                                    <span
                                                        className={`mt-1 h-3 w-3 rounded-full transition-colors duration-300 ${
                                                            isActive ? "bg-emerald-300" : "bg-white/30"
                                                        }`}
                                                    />
                                                    {index !== experienceData.length - 1 && (
                                                        <span className="mt-2 hidden h-16 w-px bg-white/10 lg:block" />
                                                    )}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <h4 className="font-serif text-lg text-white">{experience.position}</h4>
                                                        {isCurrent && (
                                                            <span className="rounded-full bg-emerald-300 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-gray-950">
                                                                Current
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-emerald-300">{experience.company}</p>
                                                    <p className="mt-2 text-sm text-white/60">{experience.duration}</p>
                                                    {experience.location && (
                                                        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">
                                                            {experience.location}
                                                        </p>
                                                    )}
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {experience.technologies?.slice(0, 3).map((technology) => (
                                                            <span
                                                                key={technology}
                                                                className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/65"
                                                            >
                                                                {technology}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        key={`${selectedExperience.company}-${selectedExperience.position}-${selectedIndex}`}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 md:p-8 lg:p-10">
                            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px]">
                                <div>
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Selected Experience</p>
                                            <h3 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                                                {selectedExperience.position}
                                            </h3>
                                            <div className="mt-3 flex flex-wrap items-center gap-3">
                                                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-4 py-1.5 text-sm font-semibold text-gray-950">
                                                    {selectedExperience.company}
                                                </span>
                                                <span className="text-sm text-white/60">{selectedExperience.duration}</span>
                                                {selectedExperience.location && (
                                                    <span className="text-sm text-white/40">{selectedExperience.location}</span>
                                                )}
                                            </div>
                                        </div>
                                        {selectedExperience.certificate && (
                                            <a
                                                href={selectedExperience.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 hover:shadow-lg hover:shadow-emerald-300/20"
                                            >
                                                <span>View Certificate</span>
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>

                                    <p className="mt-6 max-w-3xl text-base leading-8 text-white/72">
                                        {selectedExperience.description}
                                    </p>

                                    <div className="mt-8">
                                        <div className="mb-4 flex items-center justify-between gap-4">
                                            <h4 className="font-semibold text-white">Key Achievements</h4>
                                            <span className="text-sm text-white/40">
                                                {selectedExperience.achievements.length} highlights
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            {achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-white/72">
                                                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        {selectedExperience.achievements.length > 4 && (
                                            <button
                                                type="button"
                                                onClick={() => setShowAllAchievements((current) => !current)}
                                                className="mt-4 text-sm font-medium text-emerald-300 transition-colors hover:text-sky-400"
                                            >
                                                {showAllAchievements ? "Show less" : "Show more achievements"}
                                            </button>
                                        )}
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="mb-4 font-semibold text-white">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedExperience.technologies?.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-100"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-300/20 via-sky-400/15 to-transparent p-2">
                                        <div className="overflow-hidden rounded-[20px]">
                                            <Image
                                                src={selectedExperience.image}
                                                alt={selectedExperience.company}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-[0.25em] text-white/40">Focus</p>
                                        <p className="mt-3 text-sm leading-7 text-white/65">
                                            {selectedExperience.position} at {selectedExperience.company} focused on shipping
                                            reliable product work across engineering, delivery, and iteration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
