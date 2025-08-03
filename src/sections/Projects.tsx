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
                            whileHover={{ 
                                y: -12, 
                                scale: 1.03,
                                rotateY: 2,
                                rotateX: 2
                            }}
                            className="group cursor-pointer perspective-1000"
                        >
                            <Card className="p-6 h-full group-hover:shadow-2xl group-hover:shadow-emerald-300/20 group-hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent relative overflow-hidden">
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/3 group-hover:via-emerald-300/8 group-hover:to-emerald-300/3 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/0 via-sky-300/0 to-sky-300/0 group-hover:from-sky-300/3 group-hover:via-sky-300/8 group-hover:to-sky-300/3 transition-all duration-700 delay-100 opacity-0 group-hover:opacity-100"></div>
                                <div className="flex flex-col h-full">
                                    {/* Project Image */}
                                    <div className="mb-4 relative overflow-hidden rounded-lg group-hover:shadow-lg">
                                        {/* Animated Border */}
                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-300 opacity-0 group-hover:opacity-100 transition-all duration-500 p-[2px]">
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-300 animate-spin-slow"></div>
                                        </div>
                                        
                                        <div className="relative rounded-lg overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 group-hover:rotate-0.5 transition-all duration-700 ease-out"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/5 group-hover:to-transparent transition-all duration-300"></div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/5 group-hover:to-emerald-300/3 transition-all duration-300"></div>
                                            
                                            {/* Floating Elements */}
                                            <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                                            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-300"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4 relative">
                                        <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-200 to-sky-300 text-transparent bg-clip-text tracking-widest text-sm group-hover:from-emerald-100 group-hover:to-sky-200 transition-all duration-300 group-hover:scale-105">
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{project.company}</span>
                                            <span className="group-hover:scale-110 transition-transform duration-300">&bull;</span>
                                            <span className="group-hover:-translate-x-1 transition-transform duration-300">{project.year}</span>
                                        </div>
                                        <h4 className="font-serif text-xl md:text-2xl text-white mt-2 group-hover:text-emerald-100 transition-colors duration-300 group-hover:scale-105 group-hover:translate-x-2">
                                            {project.title}
                                        </h4>
                                        
                                        {/* Animated Underline */}
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-sky-300 group-hover:w-full transition-all duration-500 ease-out"></div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <ul className="space-y-2 mb-6">
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-white/70 text-sm group-hover:text-white/80 transition-all duration-300 group-hover:translate-x-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-300 rounded-full group-hover:scale-150 group-hover:bg-sky-300 transition-all duration-300 mt-1.5 flex-shrink-0"></div>
                                                    <span className="group-hover:translate-x-1 transition-transform duration-300">{result.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-auto group-hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                            <button className="relative bg-white text-gray-950 h-10 rounded-xl w-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300 group-hover:shadow-xl hover:scale-105 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 hover:from-emerald-300/10 hover:via-emerald-300/20 hover:to-emerald-300/10 transition-all duration-500 opacity-0 hover:opacity-100"></div>
                                                <span className="relative z-10">{project.linkText}</span>
                                                <ArrowUpRightIcon className="size-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                            </button>
                                        </div>
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
