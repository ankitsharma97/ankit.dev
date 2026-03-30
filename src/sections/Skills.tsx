"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeLeft, fadeUp, staggerContainer, transition, viewport } from "@/lib/motion";
import { skillsData } from "../../profile.config";

export const SkillsSection = ({ id }: { id: string }) => {
    const totalSkills = skillsData.reduce((count, category) => count + category.skills.length, 0);
    const strongestCategory = [...skillsData].sort(
        (left, right) =>
            right.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / right.skills.length -
            left.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / left.skills.length
    )[0];

    return (
        <section className="py-20 md:py-14 lg:py-20 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Skills"
                    heading2="Technical Capabilities"
                    paragraph="A simple overview of the tools and engineering areas I work with most often in real projects."
                />

                <div className="mt-16 grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={viewport}
                        className="space-y-6 xl:sticky xl:top-24"
                    >
                        <Card className="p-8 md:p-10">
                            <p className="text-xs uppercase tracking-[0.28em] text-white/40">Overview</p>
                            <h3 className="mt-4 max-w-md font-serif text-3xl text-white md:text-4xl">
                                Clean, practical, full stack engineering.
                            </h3>
                            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                                I focus on building usable interfaces, reliable backend systems, and complete product flows
                                with a modern web stack.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Categories</p>
                                    <p className="mt-3 font-serif text-2xl text-white">{skillsData.length}</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">Skills</p>
                                    <p className="mt-3 font-serif text-2xl text-white">{totalSkills}+</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 md:p-7">
                            <p className="text-xs uppercase tracking-[0.24em] text-white/40">Focus Area</p>
                            <h3 className="mt-3 font-serif text-2xl text-white">{strongestCategory.category}</h3>
                            <p className="mt-4 text-sm leading-7 text-white/68">
                                One of the strongest areas in the stack, with tools I use regularly across product delivery
                                and implementation.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {strongestCategory.skills.slice(0, 5).map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/72"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        className="grid gap-4 md:grid-cols-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        {skillsData.map((category, index) => (
                            <motion.div
                                key={category.category}
                                variants={fadeUp}
                                transition={{ ...transition, delay: index * 0.04 }}
                            >
                                <Card className="h-full p-6 md:p-7">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                                                {String(index + 1).padStart(2, "0")}
                                            </p>
                                            <h3 className="mt-3 font-serif text-2xl text-white">{category.category}</h3>
                                        </div>
                                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55">
                                            {category.skills.length} items
                                        </span>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/75"
                                            >
                                                <i className={`${skill.icon} text-xs text-white/55`} />
                                                <span>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
