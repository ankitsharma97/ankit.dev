"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import heroImage from "@/assets/images/HERO.jpeg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { Card } from "@/components/Card";
import { Navigation } from "@/components/Navigation";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { portfolioProjects, skillsData, experienceData } from "../../profile.config";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Get preview data
    const previewProjects = portfolioProjects.slice(0, 3);
    const previewSkills = skillsData.slice(0, 3);
    const previewExperience = experienceData.slice(0, 1);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />
            {/* Hero Section */}
            <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    }}>
                    <div
                        className="absolute inset-0 -z-30 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}></div>
                    <div className="size-[620px] hero-ring"></div>
                    <div className="size-[820px] hero-ring"></div>
                    <div className="size-[1020px] hero-ring"></div>
                    <div className="size-[1220px] hero-ring"></div>
                    <HeroOrbit
                        sizeInPx={430}
                        rotationInDeg={-14}
                        shouldOrbit
                        orbitDuration="30s"
                        shouldSpin
                        spinDuration="3s">
                        <SparkleIcon className="size-8 text-emerald-300/20" />
                    </HeroOrbit>
                    <HeroOrbit
                        sizeInPx={440}
                        rotationInDeg={79}
                        shouldOrbit
                        orbitDuration="32s"
                        shouldSpin
                        spinDuration="3s">
                        <SparkleIcon className="size-5 text-emerald-300/20" />
                    </HeroOrbit>
                    <HeroOrbit sizeInPx={520} rotationInDeg={-41} shouldOrbit orbitDuration="34s">
                        <div className="size-2 rounded-full bg-emerald-300/15" />
                    </HeroOrbit>
                    <HeroOrbit
                        sizeInPx={530}
                        rotationInDeg={178}
                        shouldOrbit
                        orbitDuration="36s"
                        shouldSpin
                        spinDuration="3s">
                        <SparkleIcon className="size-12 text-emerald-300/20" />
                    </HeroOrbit>
                    <HeroOrbit
                        sizeInPx={550}
                        rotationInDeg={20}
                        shouldOrbit
                        orbitDuration="38s"
                        shouldSpin
                        spinDuration="6s">
                        <StarIcon className="size-12 text-emerald-300" />
                    </HeroOrbit>
                    <HeroOrbit
                        sizeInPx={590}
                        rotationInDeg={98}
                        shouldOrbit
                        orbitDuration="40s"
                        shouldSpin
                        spinDuration="6s">
                        <StarIcon className="size-8 text-emerald-300" />
                    </HeroOrbit>
                    <HeroOrbit
                        sizeInPx={710}
                        rotationInDeg={144}
                        shouldOrbit
                        orbitDuration="42s"
                        shouldSpin
                        spinDuration="3s">
                        <SparkleIcon className="size-14 text-emerald-300/20" />
                    </HeroOrbit>
                    <HeroOrbit sizeInPx={720} rotationInDeg={85} shouldOrbit orbitDuration="44s">
                        <div className="size-3 rounded-full bg-emerald-300/15" />
                    </HeroOrbit>
                    <HeroOrbit sizeInPx={650} rotationInDeg={-5} shouldOrbit orbitDuration="46s">
                        <div className="size-2 rounded-full bg-emerald-300/15" />
                    </HeroOrbit>
                    <HeroOrbit
                        sizeInPx={800}
                        rotationInDeg={-72}
                        shouldOrbit
                        orbitDuration="48s"
                        shouldSpin
                        spinDuration="6s">
                        <StarIcon className="size-28 text-emerald-300" />
                    </HeroOrbit>
                </div>
                <div className="container relative z-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative mb-6">
                            {/* Professional Photo */}
                            <div className="relative">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-300/20 shadow-2xl shadow-emerald-300/10 group hover:border-emerald-300/40 transition-all duration-500">
                                    <Image 
                                        src={heroImage} 
                                        alt="Professional headshot" 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        priority
                                    />
                                </div>
                                {/* Animated ring around the photo */}
                                <div className="absolute inset-0 rounded-full border-2 border-emerald-300/30 animate-ping"></div>
                                <div className="absolute inset-0 rounded-full border-2 border-emerald-300/20 animate-pulse"></div>
                            </div>
                        </div>

                    </div>
                    <div className="max-w-lg mx-auto">
                        <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide">
                            Full-Stack Developer & Problem Solver
                        </h1>
                        <p className="mt-4 text-center font-light text-white/80 tracking-wide md:text-lg">
                            I specialize in creating responsive web applications and solving complex problems.
                            Currently pursuing BTech in Information Technology (2026).
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link href="/projects">
                            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:border-emerald-300/50 transition-all duration-300 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 hover:from-emerald-300/10 hover:via-emerald-300/20 hover:to-emerald-300/10 transition-all duration-500 transform -translate-x-full hover:translate-x-0"></div>
                                <span className="font-semibold relative z-10 hover:text-emerald-300 transition-colors duration-300">Explore My Work</span>
                                <svg className="w-4 h-4 relative z-10 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="inline-flex items-center gap-2 px-6 h-12 border border-white text-gray-900 bg-white rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/30 transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/10 group-hover:via-emerald-300/20 group-hover:to-emerald-300/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <span className="relative z-10">👋</span>
                                <span className="font-semibold relative z-10 group-hover:text-emerald-700 transition-colors duration-300">Let&apos;s Connect</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 overflow-x-hidden">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">25+</div>
                            <div className="text-white/70 text-sm">Projects</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">40+</div>
                            <div className="text-white/70 text-sm">Skills</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">3</div>
                            <div className="text-white/70 text-sm">Internships</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">18+</div>
                            <div className="text-white/70 text-sm">Months Experience</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section className="py-20 overflow-x-hidden">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Featured Projects</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            A glimpse of my recent work across different technologies and domains.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {previewProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
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
                                            <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest text-sm group-hover:from-emerald-200 group-hover:to-sky-300 transition-all duration-300 group-hover:scale-105">
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">{project.company}</span>
                                                <span className="group-hover:scale-110 transition-transform duration-300">&bull;</span>
                                                <span className="group-hover:-translate-x-1 transition-transform duration-300">{project.year}</span>
                                            </div>
                                            <h3 className="font-serif text-xl text-white mt-2 group-hover:text-emerald-200 transition-colors duration-300 group-hover:scale-105 group-hover:translate-x-2">
                                                {project.title}
                                            </h3>
                                            
                                            {/* Animated Underline */}
                                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-sky-400 group-hover:w-full transition-all duration-500 ease-out"></div>
                                        </div>
                                        <div className="flex-1">
                                            <ul className="space-y-2 mb-4">
                                                {project.results.slice(0, 2).map((result, idx) => (
                                                    <li key={idx} className="text-white/70 text-sm group-hover:text-white/80 transition-all duration-300 group-hover:translate-x-2 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full group-hover:scale-150 group-hover:bg-sky-400 transition-all duration-300"></span>
                                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{result.title}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Floating Action Button */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 scale-75 group-hover:scale-100">
                                            <div className="text-center relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                                <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 rounded-xl font-semibold text-sm shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                                                    <span>Explore Project</span>
                                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/projects">
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group">
                                <span>View All Projects</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Preview */}
            <section className="py-20 overflow-x-hidden">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Technical Skills</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Expertise across multiple domains and technologies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {previewSkills.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6">
                                    <h3 className="font-serif text-xl text-white mb-4">{category.category}</h3>
                                    <div className="space-y-3">
                                        {category.skills.slice(0, 3).map((skill, skillIndex) => (
                                            <div key={skill.name} className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center">
                                                        <i className={`${skill.icon} text-xs text-gray-950`}></i>
                                                    </div>
                                                    <span className="text-white text-sm">{skill.name}</span>
                                                </div>
                                                <span className="text-emerald-300 text-sm font-semibold">
                                                    {skill.proficiency}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/skills">
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group">
                                <span>View All Skills</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience Preview */}
            <section className="py-20 overflow-x-hidden">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Professional Experience</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Internships and real-world project experience.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {previewExperience.map((experience, index) => (
                            <motion.div
                                key={experience.company}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8">
                                    <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                                        <div className="md:flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                                                <h3 className="font-serif text-2xl text-white">
                                                    {experience.position}
                                                </h3>
                                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 rounded-full text-sm font-semibold">
                                                    {experience.company}
                                                </span>
                                            </div>
                                            <p className="text-emerald-300 font-medium mb-4">
                                                {experience.duration}
                                            </p>
                                            <p className="text-white/70 mb-4">
                                                {experience.description}
                                            </p>
                                            <ul className="space-y-1 mb-6">
                                                {experience.achievements.slice(0, 3).map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                                                        <span className="text-emerald-300 mt-1">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="md:w-48 md:flex-shrink-0">
                                            <Link href="/experience">
                                                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold hover:bg-white/90 transition-colors w-full md:w-auto">
                                                    <span>View Certificate</span>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/experience">
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group">
                                <span>View All Experience</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>



            {/* Navigation to Full Sections */}
            <section className="py-20 overflow-x-hidden">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Explore More</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Dive deeper into my work, skills, and experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/projects">
                            <Card className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-code text-xl text-gray-950"></i>
                                </div>
                                <h3 className="font-serif text-lg text-white mb-2">Projects</h3>
                                <p className="text-white/70 text-sm">View all 12+ projects</p>
                            </Card>
                        </Link>
                        <Link href="/skills">
                            <Card className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-brain text-xl text-gray-950"></i>
                                </div>
                                <h3 className="font-serif text-lg text-white mb-2">Skills</h3>
                                <p className="text-white/70 text-sm">40+ technical skills</p>
                            </Card>
                        </Link>
                        <Link href="/experience">
                            <Card className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-briefcase text-xl text-gray-950"></i>
                                </div>
                                <h3 className="font-serif text-lg text-white mb-2">Experience</h3>
                                <p className="text-white/70 text-sm">Internships & work</p>
                            </Card>
                        </Link>
                        <Link href="/about">
                            <Card className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-user text-xl text-gray-950"></i>
                                </div>
                                <h3 className="font-serif text-lg text-white mb-2">About</h3>
                                <p className="text-white/70 text-sm">Learn more about me</p>
                            </Card>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}
