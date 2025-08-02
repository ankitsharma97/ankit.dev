"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { email, footerLinks } from "../../profile.config";

export const ContactSection = ({ id }: { id: string }) => {
    return (
        <section className="py-20 md:py-14 lg:py-20" id={id}>
            <div className="container">
                <SectionHeader
                    heading1="Contact"
                    heading2="Let's Connect"
                    paragraph="Ready to bring your next project to life? Let's discuss how I can help you achieve your goals."
                />
                
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 md:p-10">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
                                Get In Touch
                            </h3>
                            
                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center">
                                        <i className="fas fa-envelope text-lg text-gray-950"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a 
                                            href={`mailto:${email}`}
                                            className="text-emerald-300 hover:text-emerald-200 transition-colors"
                                        >
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center">
                                        <i className="fas fa-map-marker-alt text-lg text-gray-950"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Location</h4>
                                        <p className="text-white/70">UP, India</p>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center">
                                        <i className="fas fa-graduation-cap text-lg text-gray-950"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Education</h4>
                                        <p className="text-white/70">AKTU, Lucknow</p>
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center">
                                        <i className="fas fa-phone text-lg text-gray-950"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Mobile</h4>
                                        <p className="text-white/70">+91 815080798</p>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center">
                                        <i className="fas fa-globe text-lg text-gray-950"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Languages</h4>
                                        <p className="text-white/70">Sanskrit, Hindi, English</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
                                <div className="flex gap-4">
                                    {footerLinks.map((link) => (
                                        <a
                                            key={link.title}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                                        >
                                            <i className={`${link.title === 'Twitter' ? 'fab fa-twitter' : link.title === 'Github' ? 'fab fa-github' : 'fab fa-linkedin'} text-white`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 md:p-10">
                            <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">
                                Send Message
                            </h3>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300 transition-colors"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300 transition-colors"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-white font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300 transition-colors"
                                        placeholder="Project Inquiry / Collaboration"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-white font-medium mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-emerald-300 transition-colors resize-none"
                                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                                        required
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 px-6 py-3 rounded-lg font-semibold hover:from-emerald-200 hover:to-sky-300 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <span>Send Message</span>
                                    <ArrowUpRightIcon className="size-4" />
                                </button>
                            </form>
                        </Card>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 text-center relative overflow-clip">
                    <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImage.src})`,
                        }}></div>
                        <h3 className="font-serif text-2xl md:text-3xl mb-4">
                            Ready to Start Your Project?
                        </h3>
                                                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                                Let&apos;s discuss your ideas and turn them into reality. I&apos;m excited to collaborate on your next project!
                            </p>
                        <a href={`mailto:${email}`}>
                            <button className="bg-gray-900 text-white inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                                <span>Get Started Today</span>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </a>
                    </div>
                </motion.div>
                </div>
            </section>
    );
};
