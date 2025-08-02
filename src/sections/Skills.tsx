"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { skillsData } from "../../profile.config";
import { motion } from "framer-motion";

export const SkillsSection = ({ id }: { id: string }) => {
    return (
        <section className="py-20 md:py-14 lg:py-20" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Skills"
                    heading2="My Technical Arsenal"
                    paragraph="A comprehensive overview of my technical skills and expertise across various domains."
                />
                
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        {skillsData.filter(category => 
                            category.category !== "Data Structures & Algorithms"
                        ).slice(0, Math.ceil(skillsData.length / 2)).map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                                            {category.category}
                                        </h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                                viewport={{ once: true }}
                                                className="group"
                                            >
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-emerald-300/30">
                                                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <i className={`${skill.icon} text-sm text-gray-950`}></i>
                                                    </div>
                                                    <span className="font-medium text-white text-sm">{skill.name}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="space-y-8">
                        {/* DSA Section - Always on the right */}
                        {skillsData.filter(category => 
                            category.category === "Data Structures & Algorithms"
                        ).map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                                            {category.category}
                                        </h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                                viewport={{ once: true }}
                                                className="group"
                                            >
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-emerald-300/30">
                                                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <i className={`${skill.icon} text-sm text-gray-950`}></i>
                                                    </div>
                                                    <span className="font-medium text-white text-sm">{skill.name}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                        
                        {/* Other sections for the right column */}
                        {skillsData.filter(category => 
                            category.category !== "Data Structures & Algorithms"
                        ).slice(Math.ceil(skillsData.length / 2)).map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                                            {category.category}
                                        </h3>
                                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                                viewport={{ once: true }}
                                                className="group"
                                            >
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-emerald-300/30">
                                                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                        <i className={`${skill.icon} text-sm text-gray-950`}></i>
                                                    </div>
                                                    <span className="font-medium text-white text-sm">{skill.name}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                {/* Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <Card className="p-8 md:p-10 text-center">
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                            Skills Overview
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">9</div>
                                <div className="text-white/70 text-sm">Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">40+</div>
                                <div className="text-white/70 text-sm">Skills</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">3+</div>
                                <div className="text-white/70 text-sm">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">15+</div>
                                <div className="text-white/70 text-sm">Projects Built</div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}; 