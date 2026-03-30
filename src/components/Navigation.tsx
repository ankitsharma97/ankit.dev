"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const Navigation = () => {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const [isCondensed, setIsCondensed] = useState(false);

    const navItems = [
        { href: "/", label: "Home", icon: "fas fa-home" },
        { href: "/projects", label: "Projects", icon: "fas fa-code" },
        { href: "/skills", label: "Skills", icon: "fas fa-brain" },
        { href: "/experience", label: "Experience", icon: "fas fa-briefcase" },
        { href: "/about", label: "About", icon: "fas fa-user" },
        { href: "/contact", label: "Contact", icon: "fas fa-envelope" },
    ];

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsCondensed(latest > 0.04);
    });

    return (
        <>
            <motion.div
                animate={{
                    y: isCondensed ? -4 : 0,
                    opacity: 1,
                }}
                transition={{ duration: 0.3 }}
                className="md:fixed relative top-4  md:left-4 z-50 px-4 md:px-0"
            >
                <div className="nav-shell flex items-center gap-3 rounded-2xl px-3 py-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="font-serif text-lg font-bold text-gray-950">AS</span>
                    </div>
                    <div>
                        <span className="font-serif text-lg font-bold text-white">Ankit Sharma</span>
                        <p className="text-xs text-white/60">Builds products, not just pages</p>
                    </div>
                </div>
            </motion.div>

            <div className="justify-center items-center fixed top-4 hidden md:flex w-full z-50 px-4">
                <motion.nav
                    animate={{
                        paddingTop: isCondensed ? 4 : 6,
                        paddingBottom: isCondensed ? 4 : 6,
                    }}
                    transition={{ duration: 0.25 }}
                    className="nav-shell flex gap-1 rounded-full px-1"
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                    ? "text-gray-900"
                                    : "text-white/70 hover:text-white"
                                    }`}
                                title={item.label}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full bg-white shadow-sm"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <i className={`${item.icon} text-sm md:hidden mr-1`}></i>
                                <span className="relative z-10 hidden lg:inline">{item.label}</span>
                            </Link>
                        );
                    })}
                </motion.nav>
            </div>

            <div className="justify-center flex items-center fixed bottom-4 md:hidden w-full z-50 px-4">
                <nav className="nav-shell flex gap-1 rounded-full p-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                                title={item.label}
                            >
                                <i className={`${item.icon} text-sm text-gray-900 mr-1`}></i>
                                <span className="hidden lg:inline">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <motion.div
                className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-gradient-to-r from-emerald-300 via-sky-400 to-white"
                style={{ scaleX: scrollYProgress }}
            />
        </>
    );
};
