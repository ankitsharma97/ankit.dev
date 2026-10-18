"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/images/HERO.jpeg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { Card } from "@/components/Card";
import { Navigation } from "@/components/Navigation";
import { fadeUp, staggerContainer, transition, viewport } from "@/lib/motion";
import { experienceData, openSource, portfolioProjects, skillsData } from "../../profile.config";

const stats = [
    { value: "10k+", label: "RAG queries/day in production" },
    { value: "<200ms", label: "Semantic search latency" },
    { value: "500+", label: "Weekly npm downloads" },
    { value: "600+", label: "LeetCode problems solved" },
];

export default function Home() {
    const previewProjects = portfolioProjects.filter((project) => project.featured).slice(0, 3);
    const previewSkills = skillsData.slice(0, 3);
    const previewExperience = experienceData[0];

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navigation />

            <section className="relative overflow-hidden pb-24 pt-28 md:pb-28 md:pt-40 lg:pb-32 lg:pt-44">
                <div
                    className="absolute inset-0"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                    }}
                >
                    <div
                        className="absolute inset-0 -z-30 opacity-5"
                        style={{ backgroundImage: `url(${grainImage.src})` }}
                    ></div>
                    <div className="size-[620px] hero-ring"></div>
                    <div className="size-[820px] hero-ring"></div>
                    <div className="size-[1020px] hero-ring"></div>
                    <div className="size-[1220px] hero-ring"></div>
                    <HeroOrbit sizeInPx={430} rotationInDeg={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
                        <SparkleIcon className="size-8 text-emerald-300/20" />
                    </HeroOrbit>
                    <HeroOrbit sizeInPx={550} rotationInDeg={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
                        <StarIcon className="size-12 text-emerald-300" />
                    </HeroOrbit>
                    <HeroOrbit sizeInPx={710} rotationInDeg={144} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
                        <SparkleIcon className="size-14 text-emerald-300/20" />
                    </HeroOrbit>
                    <HeroOrbit sizeInPx={800} rotationInDeg={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
                        <StarIcon className="size-28 text-emerald-300" />
                    </HeroOrbit>
                </div>

                <motion.div
                    className="container relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                        <motion.div variants={fadeUp} transition={transition} className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur">
                            <span className="inline-flex size-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.8)]"></span>
                            Systems Engineer at TCS · Open to interesting opportunities
                        </motion.div>

                        <motion.div variants={fadeUp} transition={transition} className="relative mb-8">
                            <div className="absolute inset-[-12%] rounded-full bg-emerald-300/20 blur-3xl"></div>
                            <div className="relative size-36 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.35)] md:size-44">
                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-300/10 via-transparent to-sky-400/10"></div>
                                <Image
                                    src={heroImage}
                                    alt="Professional headshot"
                                    className="h-full w-full rounded-[1.4rem] object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.p variants={fadeUp} transition={transition} className="mb-4 uppercase tracking-[0.35em] text-emerald-300/80">
                            Backend • Distributed Systems • AI
                        </motion.p>
                        <motion.h1 variants={fadeUp} transition={transition} className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
                            Backend & AI engineer building
                            <span className="text-shimmer"> systems that scale.</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} transition={transition} className="mt-6 max-w-2xl text-base text-white/70 md:text-xl">
                            RAG platforms serving 10k+ queries a day, Kafka pipelines processing 1000+ messages a second, and an open-source npm library. I build in Go, Python, TypeScript and Java.
                        </motion.p>

                        <motion.div variants={fadeUp} transition={transition} className="mt-10 flex flex-col items-center gap-4 md:flex-row">
                            <Link
                                href="/projects"
                                className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 font-semibold text-white transition-all duration-300 hover:border-emerald-300/50 hover:bg-white/10"
                            >
                                <span>Explore My Work</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-300/20"
                            >
                                <span>Let&apos;s Connect</span>
                                <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">→</span>
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-300/40 px-6 font-semibold text-emerald-200 transition-all duration-300 hover:bg-emerald-300/10"
                            >
                                <span>Download Resume</span>
                                <span aria-hidden>↓</span>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section className="pb-12">
                <motion.div
                    className="container grid grid-cols-2 gap-4 md:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                >
                    {stats.map((stat) => (
                        <motion.div key={stat.label} variants={fadeUp} transition={transition}>
                            <Card className="p-6 text-center">
                                <div className="text-3xl font-bold text-emerald-300 md:text-4xl">{stat.value}</div>
                                <div className="mt-2 text-sm text-white/65">{stat.label}</div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section className="py-16">
                <div className="container">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={transition} className="mb-12 text-center">
                        <p className="uppercase tracking-[0.35em] text-emerald-300/75">Selected Work</p>
                        <h2 className="mt-4 font-serif text-3xl md:text-5xl">Featured projects built for scale</h2>
                        <div className="section-divider"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {previewProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewport}
                                transition={{ ...transition, delay: index * 0.08 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <Card className="h-full p-6">
                                    <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>
                                    </div>
                                    <div className="mb-3 inline-flex gap-2 text-xs uppercase tracking-[0.3em] text-emerald-300/80">
                                        <span>{project.company}</span>
                                        <span>•</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-white">{project.title}</h3>
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {project.tags?.slice(0, 4).map((tag) => (
                                            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70">{tag}</span>
                                        ))}
                                    </div>
                                    <ul className="mt-4 space-y-3 text-sm text-white/65">
                                        {project.results.slice(0, 3).map((result) => (
                                            <li key={result.title} className="flex items-start gap-3">
                                                <span className="mt-1.5 size-1.5 rounded-full bg-emerald-300"></span>
                                                <span>{result.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/projects" className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-300">
                                        See all projects
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </Link>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={transition}>
                        <Card className="h-full p-8">
                            <p className="uppercase tracking-[0.3em] text-emerald-300/75">Core Stack</p>
                            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Skills that move from prototype to production</h2>
                            <div className="mt-8 grid gap-4 md:grid-cols-3">
                                {previewSkills.map((category, categoryIndex) => (
                                    <motion.div
                                        key={category.category}
                                        variants={fadeUp}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewport}
                                        transition={{ ...transition, delay: categoryIndex * 0.08 }}
                                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                                    >
                                        <h3 className="font-serif text-xl text-white">{category.category}</h3>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {category.skills.slice(0, 5).map((skill) => (
                                                <span key={skill.name} className="rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1 text-sm text-white/80">
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <Link href="/skills" className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-300">
                                View full technical arsenal
                                <span>→</span>
                            </Link>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...transition, delay: 0.08 }}>
                        <Card className="h-full p-8">
                            <p className="uppercase tracking-[0.3em] text-emerald-300/75">Experience Snapshot</p>
                            <h2 className="mt-4 font-serif text-3xl">{previewExperience.position}</h2>
                            <div className="mt-4 inline-flex rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-4 py-1 text-sm font-semibold text-gray-950">
                                {previewExperience.company}
                            </div>
                            <p className="mt-4 text-sm font-medium text-emerald-300">{previewExperience.duration}</p>
                            <p className="mt-4 text-white/70">{previewExperience.description}</p>
                            <ul className="mt-6 space-y-3 text-sm text-white/65">
                                {previewExperience.achievements.slice(0, 3).map((achievement) => (
                                    <li key={achievement} className="flex items-start gap-3">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-sky-300"></span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/experience"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition-colors hover:border-emerald-300/40 hover:text-emerald-200"
                            >
                                Explore experience
                                <span>↗</span>
                            </Link>
                        </Card>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={transition} className="mb-12 text-center">
                        <p className="uppercase tracking-[0.35em] text-emerald-300/75">Open Source</p>
                        <h2 className="mt-4 font-serif text-3xl md:text-5xl">Building in public</h2>
                        <div className="section-divider"></div>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        {openSource.map((item) => (
                            <motion.div key={item.project} variants={fadeUp} transition={transition}>
                                <Card className="h-full p-6">
                                    <h3 className="font-serif text-2xl text-white">{item.project}</h3>
                                    <p className="mt-3 text-white/70">{item.detail}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="pb-20 pt-8">
                <motion.div
                    className="container"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={transition}
                >
                    <Card className="overflow-hidden p-8 md:p-10">
                        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                            <div>
                                <p className="uppercase tracking-[0.3em] text-emerald-300/75">Next Move</p>
                                <h2 className="mt-4 font-serif text-3xl md:text-5xl">Hiring for backend, AI or distributed systems work?</h2>
                                <p className="mt-4 max-w-2xl text-white/70">
                                    I design reliable services, ship production AI features, and care about performance. Let&apos;s talk.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-300 to-sky-400 px-8 font-semibold text-gray-950 transition-transform duration-300 hover:scale-[1.02]"
                            >
                                Start a conversation
                            </Link>
                        </div>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
}
