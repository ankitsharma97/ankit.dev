import memojiImage from "@/assets/images/memoji-computer.png";
import heroImage from "@/assets/images/HERO.jpeg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { contactSectionId, projectsSectionId } from "./constants";

export const HeroSection = ({ id }: { id: string }) => {
    return (
        <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id={id}>
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
                    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                        Full-Stack Developer & Problem Solver
                    </h1>
                    <p className="mt-4 text-center font-light text-white/80 tracking-wide md:text-lg">
                        I specialize in creating responsive web applications and solving complex problems.
                        Currently pursuing BTech in Information Technology (2026).
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                    <a href={"#" + projectsSectionId}>
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 hover:border-emerald-300/50 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 hover:from-emerald-300/10 hover:via-emerald-300/20 hover:to-emerald-300/10 transition-all duration-500 transform -translate-x-full hover:translate-x-0"></div>
                            <span className="font-semibold relative z-10 hover:text-emerald-300 transition-colors duration-300">Explore My Work</span>
                            <ArrowDown className="size-4 relative z-10 hover:translate-y-1 transition-transform duration-300" />
                        </button>
                    </a>
                    <a href={"#" + contactSectionId}>
                        <button className="inline-flex items-center gap-2 px-6 h-12 border border-white text-gray-900 bg-white rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-emerald-300/30 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/0 via-emerald-300/0 to-emerald-300/0 group-hover:from-emerald-300/10 group-hover:via-emerald-300/20 group-hover:to-emerald-300/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                            <span className="relative z-10">👋</span>
                            <span className="font-semibold relative z-10 group-hover:text-emerald-700 transition-colors duration-300">Let&apos;s Connect</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};
