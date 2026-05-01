"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { fadeLeft, fadeRight, fadeUp, transition, viewport } from "@/lib/motion";
import { email, footerLinks } from "../../profile.config";

const contactItems = [
    { icon: "fas fa-envelope", label: "Email", value: email, href: `mailto:${email}` },
    { icon: "fas fa-map-marker-alt", label: "Location", value: "UP, India" },
    { icon: "fas fa-graduation-cap", label: "Education", value: "AKTU, Lucknow" },
    { icon: "fas fa-phone", label: "Mobile", value: "+91 8115080798" },
    { icon: "fas fa-globe", label: "Languages", value: "Sanskrit, Hindi, English" },
];

export const ContactSection = ({ id }: { id: string }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <section className="py-20 md:py-14 lg:py-20 overflow-x-hidden" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Contact"
                    heading2="Let's Connect"
                    paragraph="Ready to bring your next project to life? Let&apos;s discuss how I can help you achieve your goals."
                />

                <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        transition={transition}
                    >
                        <Card className="p-8 md:p-10">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Get In Touch</h3>

                            <div className="space-y-4">
                                {contactItems.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                                                <i className={`${item.icon} text-lg text-gray-950`}></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">{item.label}</h4>
                                                {item.href ? (
                                                    <a href={item.href} className="text-emerald-300 hover:text-emerald-200 transition-colors">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white/70">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-white/10 pt-8">
                                <h4 className="font-semibold text-white mb-4">Find Me Online</h4>
                                <div className="flex gap-4">
                                    {footerLinks.map((link) => (
                                        <a
                                            key={link.title}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-emerald-300 hover:text-gray-950"
                                        >
                                            <i className={`${link.title === "Twitter" ? "fab fa-twitter" : link.title === "Github" ? "fab fa-github" : "fab fa-linkedin"} text-lg`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                        transition={{ ...transition, delay: 0.08 }}
                    >
                        <Card className="p-8 md:p-10">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Send Message</h3>
                            <p className="mb-8 text-white/60">Use the form for project briefs, collaboration ideas, or role discussions.</p>

                            <form
                                className="space-y-6"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    setIsSubmitted(true);
                                }}
                            >
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block font-medium text-white">Name</label>
                                        <input type="text" className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="Your Name" required />
                                    </div>
                                    <div>
                                        <label className="mb-2 block font-medium text-white">Email</label>
                                        <input type="email" className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="your.email@example.com" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block font-medium text-white">Subject</label>
                                    <input type="text" className="focus-ring w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="Project Inquiry / Collaboration" required />
                                </div>

                                <div>
                                    <label className="mb-2 block font-medium text-white">Message</label>
                                    <textarea rows={6} className="focus-ring w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50" placeholder="Tell me about your project, timeline, and specific requirements..." required></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-3 font-semibold text-gray-950 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-emerald-300/25"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 opacity-0 transition-all duration-500 group-hover:from-white/10 group-hover:via-white/20 group-hover:to-white/10 group-hover:opacity-100"></div>
                                    <span className="relative z-10">Send Message</span>
                                    <ArrowUpRightIcon className="relative z-10 size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </button>

                                {isSubmitted && (
                                    <motion.p
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.3 }}
                                        className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200"
                                    >
                                        Form feedback is active. To send real emails, connect this form to an API route or email service.
                                    </motion.p>
                                )}
                            </form>
                        </Card>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    transition={{ ...transition, delay: 0.16 }}
                    className="mt-16"
                >
                    <div className="relative overflow-clip rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-950">
                        <div
                            className="absolute inset-0 -z-10 opacity-5"
                            style={{
                                backgroundImage: `url(${grainImage.src})`,
                            }}
                        ></div>
                        <h3 className="font-serif text-2xl md:text-3xl mb-4">Ready to Start Your Project?</h3>
                        <p className="mx-auto mb-6 max-w-2xl text-lg">
                            Let&apos;s discuss your ideas and turn them into reality. I&apos;m ready to collaborate on your next build.
                        </p>
                        <a
                            href={`mailto:${email}`}
                            className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800"
                        >
                            <span>Get Started Today</span>
                            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
