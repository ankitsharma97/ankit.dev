"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home", icon: "fas fa-home" },
        { href: "/projects", label: "Projects", icon: "fas fa-code" },
        { href: "/skills", label: "Skills", icon: "fas fa-brain" },
        { href: "/experience", label: "Experience", icon: "fas fa-briefcase" },
        { href: "/profiles", label: "Profiles", icon: "fas fa-users" },
        { href: "/about", label: "About", icon: "fas fa-user" },
        { href: "/contact", label: "Contact", icon: "fas fa-envelope" },
    ];

    return (
        <>
            {/* name and logo fixied top */}
            <div className=" md:fixed relative top-4 left-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="font-serif text-lg font-bold text-gray-950">AS</span>
                    </div>
                    <div className="">
                        <span className="font-serif text-lg font-bold text-white">Ankit Sharma</span>
                    </div>
                </div>
            </div>



            <div className=" justify-center items-center fixed sm:top-4 hidden md:flex  w-full z-50 px-4">

                {/* Navigation - Center */}
                <nav className="flex gap-1 p-1 border border-white/30 rounded-full bg-white/10 backdrop-blur">
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
                                <i className={`${item.icon} text-sm md:hidden mr-1`}></i>
                                <span className="hidden lg:inline">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>


            </div>
            {/* for mobile  */}
            <div className=" justify-center flex items-center fixed  bottom-4 md:hidden   w-full z-50 px-4">
                {/* Personal Brand - Left Corner */}

                {/* Navigation - Center */}
                <nav className="flex gap-1 p-1 border border-white/30 rounded-full bg-white/10 backdrop-blur">
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
                                <i className={`${item.icon} text-sm md:hidden mr-1`}></i>
                                <span className="hidden lg:inline">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Right side - Empty for balance */}
                <div className="w-32"></div>
            </div>
        </>
    );
}; 