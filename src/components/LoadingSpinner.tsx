"use client";
import { motion } from "framer-motion";

export const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
            <div className="relative">
                <motion.div
                    className="w-16 h-16 border-4 border-emerald-300/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-300 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-emerald-300 text-sm font-semibold">AS</span>
                </div>
            </div>
        </div>
    );
}; 