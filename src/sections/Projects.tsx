"use client";
import { useState } from "react";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "../../profile.config";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, transition, viewport } from "@/lib/motion";

export const ProjectsSection = ({ id }: { id: string }) => {
    const [activeFilter, setActiveFilter] = useState("All");

    // Define project categories and their filters
    const projectCategories = [
        { 
            name: "All", 
            filter: () => portfolioProjects,
            color: "from-emerald-300 to-sky-400"
        },
        { 
            name: "Frontend", 
            filter: () => portfolioProjects.filter(project => 
                project.company.includes("PassGenerator") || 
                project.company.includes("Currency") || 
                project.company.includes("Atomic-saga") ||
                project.company.includes("Facial Recognition System") ||
                project.company.includes("Artistically Platform") ||
                project.company.includes("Travel Norway") ||
                project.company.includes("Huzzle") ||
                project.company.includes("TeenHive")
            ),
            color: "from-blue-300 to-cyan-400"
        },
        { 
            name: "Backend", 
            filter: () => portfolioProjects.filter(project => 
                project.company.includes("CodeSync Backend") ||
                project.company.includes("Leave Management") ||
                project.company.includes("DJ Chess") ||
                project.company.includes("Stock Exchange") ||
                project.company.includes("Code Interpreter")
            ),
            color: "from-purple-300 to-pink-400"
        },
        { 
            name: "Full Stack", 
            filter: () => portfolioProjects.filter(project => 
                project.company.includes("Blog") || 
                project.company.includes("College") || 
                project.company.includes("E-commerce") ||
                project.company.includes("ChatBot") ||
                project.company.includes("Hospital") ||
                project.company.includes("Social") ||
                project.company.includes("Office") ||
                project.company.includes("StudySphere") ||
                project.company.includes("Code with Friend") ||
                project.company.includes("Real-time Chatting")
            ),
            color: "from-green-300 to-emerald-400"
        },
        { 
            name: "Machine Learning", 
            filter: () => portfolioProjects.filter(project => 
                project.company.includes("Heart") || 
                project.company.includes("Skin")
            ),
            color: "from-purple-300 to-pink-400"
        }
    ];

    const filteredProjects = projectCategories.find(cat => cat.name === activeFilter)?.filter() || portfolioProjects;

    return (
        <section className="pb-16 lg:py-24 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Engineering Excellence"
                    heading2="Software Engineering Projects"
                    paragraph="Comprehensive software solutions demonstrating technical depth, scalability, and innovation across diverse domains."
                />
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
                    {projectCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveFilter(category.name)}
                            className={`relative px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                                activeFilter === category.name
                                    ? "text-gray-950 shadow-lg"
                                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20"
                            }`}
                        >
                            {activeFilter === category.name && (
                                <motion.span
                                    layoutId="project-filter-pill"
                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
                                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{category.name}</span>
                        </button>
                    ))}
                </div>
                
                {/* Filtered Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={fadeUp}
                                transition={{ ...transition, delay: index * 0.06 }}
                                layout
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.01
                                }}
                                className="group cursor-pointer perspective-1000"
                            >
                            <Card className="p-6 h-full relative overflow-hidden">
                                <div className="flex flex-col h-full">
                                    {/* Project Image */}
                                    <div className="mb-4 relative overflow-hidden rounded-lg">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-all duration-500"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4 relative">
                                        <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-200 to-sky-300 text-transparent bg-clip-text tracking-widest text-sm">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h4 className="font-serif text-xl md:text-2xl text-white mt-2 group-hover:text-emerald-100 transition-colors duration-300">
                                            {project.title}
                                        </h4>
                                        
                                        {/* Animated Underline */}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-sky-300 group-hover:w-full transition-all duration-500 ease-out"></div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <ul className="space-y-2 mb-6">
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-white/70 text-sm group-hover:text-white/80 transition-colors duration-300">
                                                    <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <span>{result.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        {/* Two buttons layout when both links are available */}
                                        {(project.liveLink && project.sourceLink) ? (
                                            <div className="grid grid-cols-2 gap-2">
                                                {/* Live Demo Button */}
                                                <a 
                                                    href={project.liveLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="block rounded-lg"
                                                >
                                                    <span className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white h-9 rounded-lg font-medium text-xs hover:bg-white/20 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-1.5">
                                                        <span>Live</span>
                                                        <ArrowUpRightIcon className="size-3" />
                                                    </span>
                                                </a>
                                                
                                                {/* Source Code Button */}
                                                <a 
                                                    href={project.sourceLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="block rounded-lg"
                                                >
                                                    <span className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white h-9 rounded-lg font-medium text-xs hover:bg-white/20 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-1.5">
                                                        <span>Code</span>
                                                        <ArrowUpRightIcon className="size-3" />
                                                    </span>
                                                </a>
                                            </div>
                                        ) : (
                                            /* Single button layout when only one link is available */
                                            <a 
                                                href={project.liveLink || project.sourceLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="block rounded-lg"
                                            >
                                                <span className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white h-9 rounded-lg font-medium text-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2">
                                                    <span>{project.liveLink ? "Live Demo" : "View Code"}</span>
                                                    <ArrowUpRightIcon className="size-3" />
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={transition}
                        className="text-center py-12"
                    >
                        <p className="text-white/60 text-lg">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
