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

    const categoryStyles: Record<string, string> = {
        All: "from-emerald-300 to-sky-400",
        "Distributed Systems": "from-orange-300 to-amber-400",
        "AI / ML": "from-purple-300 to-pink-400",
        Backend: "from-violet-300 to-indigo-400",
        "Full Stack": "from-green-300 to-emerald-400",
        Frontend: "from-blue-300 to-cyan-400",
        "Machine Learning": "from-fuchsia-300 to-rose-400",
    };
    const categoryNames = ["All", ...Array.from(new Set(portfolioProjects.map((project) => project.category)))];
    const projectCategories = categoryNames.map((name) => ({
        name,
        color: categoryStyles[name] ?? categoryStyles.All,
    }));

    const filteredProjects =
        activeFilter === "All"
            ? portfolioProjects
            : portfolioProjects.filter((project) => project.category === activeFilter);

    return (
        <section className="pb-16 lg:py-24 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Selected Work"
                    heading2="Software Engineering Projects"
                    paragraph="Distributed systems, AI platforms and full-stack products, with real metrics where they exist."
                />
                
                {/* Featured spotlight */}
                {activeFilter === "All" && (
                    <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {portfolioProjects.filter((project) => project.featured).slice(0, 2).map((project) => (
                            <motion.div
                                key={`featured-${project.title}`}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewport}
                                transition={transition}
                            >
                                <Card className="h-full p-0">
                                    <div className="relative">
                                        <Image src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                                        <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-950">
                                            Featured
                                        </span>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">{project.category}</p>
                                        <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">{project.title}</h3>
                                        <ul className="mt-4 space-y-2 text-white/70">
                                            {project.results.map((result) => (
                                                <li key={result.title} className="flex items-start gap-3">
                                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300"></span>
                                                    <span>{result.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                )}

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
                                        {project.tags && (
                                            <div className="mb-4 flex flex-wrap gap-1.5">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70">{tag}</span>
                                                ))}
                                            </div>
                                        )}
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
                                        ) : !(project.liveLink || project.sourceLink) ? null : (
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
