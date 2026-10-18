"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { skillsData } from "../../profile.config";
import { motion } from "framer-motion";
import { fadeUp, transition, viewport } from "@/lib/motion";

const skillCount = skillsData.reduce((total, category) => total + category.skills.length, 0);

export const SkillsSection = ({ id }: { id: string }) => {
    return (
        <section className="py-20 md:py-14 lg:py-20 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Skills"
                    heading2="My Technical Arsenal"
                    paragraph="Languages, systems and tools I use to build backend, AI and distributed software."
                />

                <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ ...transition, delay: (categoryIndex % 2) * 0.08 }}
                            viewport={viewport}
                        >
                            <Card className="h-full p-6 md:p-8">
                                <div className="mb-6">
                                    <h3 className="mb-2 font-serif text-2xl text-white md:text-3xl">{category.category}</h3>
                                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                                </div>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10"
                                        >
                                            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 transition-transform group-hover:scale-110">
                                                <i className={`${skill.icon} text-sm text-gray-950`} aria-hidden="true"></i>
                                            </div>
                                            <span className="text-sm font-medium text-white">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={transition}
                    viewport={viewport}
                    className="mt-16"
                >
                    <Card className="p-8 text-center md:p-10">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {[
                                { value: String(skillsData.length), label: "Categories" },
                                { value: `${skillCount}`, label: "Technologies" },
                                { value: "1+", label: "Years Professional" },
                                { value: "600+", label: "LeetCode Problems" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="mb-2 text-3xl font-bold text-emerald-300 md:text-4xl">{item.value}</div>
                                    <div className="text-sm text-white/70">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};
