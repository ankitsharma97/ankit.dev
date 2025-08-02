"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { Card } from "@/components/Card";
import { Navigation } from "@/components/Navigation";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { portfolioProjects, skillsData, experienceData, profilesData } from "../../profile.config";

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
    const previewProfiles = profilesData.slice(0, 3);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen">
            <Navigation />
            {/* Hero Section */}
            <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
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
                        <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
                        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3.5">
                            <div className="bg-green-500 size-2.5 rounded-full relative z-0">
                                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping -z-10"></div>
                            </div>
                            <div className="text-sm font-medium">Available for new projects</div>
                        </div>
                    </div>
                    <div className="max-w-lg mx-auto">
                        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                            Full-Stack Developer & Problem Solver
                        </h1>
                        <p className="mt-4 text-center font-light text-white/80 tracking-wide md:text-lg">
                            I specialize in creating responsive web applications and solving complex problems.
                            Currently pursuing BTech in Information Technology (2026).
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link href="/projects">
                            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                                <span className="font-semibold">Explore My Work</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </button>
                        </Link>
                        <Link href="/contact">
                            <button className="inline-flex items-center gap-2 px-6 h-12 border border-white text-gray-900 bg-white rounded-xl">
                                <span>👋</span>
                                <span className="font-semibold">Let&apos;s Connect</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">12+</div>
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
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">2</div>
                            <div className="text-white/70 text-sm">Internships</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">3+</div>
                            <div className="text-white/70 text-sm">Years Experience</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section className="py-20">
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
                            >
                                <Card className="p-6 h-full">
                                    <div className="flex flex-col h-full">
                                        <div className="mb-4">
                                            <div className="inline-flex gap-2 uppercase font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text tracking-widest text-sm">
                                                <span>{project.company}</span>
                                                <span>&bull;</span>
                                                <span>{project.year}</span>
                                            </div>
                                            <h3 className="font-serif text-xl text-white mt-2">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="flex-1">
                                            <ul className="space-y-2 mb-4">
                                                {project.results.slice(0, 2).map((result, idx) => (
                                                    <li key={idx} className="text-white/70 text-sm">
                                                        • {result.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/projects">
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-colors">
                                View All Projects →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Skills Preview */}
            <section className="py-20">
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
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-colors">
                                View All Skills →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience Preview */}
            <section className="py-20">
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
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-colors">
                                View All Experience →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Profiles Preview */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Connect With Me</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Find me on various platforms where I showcase my work and skills.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {previewProfiles.map((profile, index) => (
                            <motion.div
                                key={profile.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className={`${profile.icon} text-2xl text-gray-950`}></i>
                                    </div>
                                    <h3 className="font-serif text-xl text-white mb-2">
                                        {profile.name}
                                    </h3>
                                    <p className="text-white/70 text-sm mb-4">
                                        {profile.description}
                                    </p>
                                    <a
                                        href={profile.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                                    >
                                        <span>Visit Profile</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/profiles">
                            <button className="text-emerald-300 hover:text-emerald-200 font-semibold text-lg transition-colors">
                                View All Profiles →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Navigation to Full Sections */}
            <section className="py-20">
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
                        <Link href="/profiles">
                            <Card className="p-6 text-center hover:scale-105 transition-transform cursor-pointer">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="fas fa-users text-xl text-gray-950"></i>
                                </div>
                                <h3 className="font-serif text-lg text-white mb-2">Profiles</h3>
                                <p className="text-white/70 text-sm">Connect with me</p>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
