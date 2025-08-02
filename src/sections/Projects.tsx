"use client";
import { useState } from "react";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { portfolioProjects } from "../../profile.config";
import { motion } from "framer-motion";

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
        <section className="pb-16 lg:py-24" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Real-world Results"
                    heading2="Featured Projects"
                    paragraph="See how I transformed concepts into engaging digital experiences across different technologies."
                />
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
                    {projectCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveFilter(category.name)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                                activeFilter === category.name
                                    ? `bg-gradient-to-r ${category.color} text-gray-950 shadow-lg`
                                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                
                {/* Filtered Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            layout
                        >
                            <Card className="p-6 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest text-sm">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h4 className="font-serif text-xl md:text-2xl text-white mt-2">
                                            {project.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <ul className="space-y-2 mb-6">
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                                                    <CheckIcon className="size-4 mt-0.5 flex-shrink-0" />
                                                    <span>{result.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-auto"
                                    >
                                        <button className="bg-white text-gray-950 h-10 rounded-xl w-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                                            <span>{project.linkText}</span>
                                            <ArrowUpRightIcon className="size-4" />
                                        </button>
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                
                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-white/60 text-lg">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
