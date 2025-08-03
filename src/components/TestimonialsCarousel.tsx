"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../profile.config";
import Image from "next/image";

export const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative overflow-hidden overflow-x-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="mb-8">
                        <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-emerald-300"
                        />
                        <blockquote className="text-lg text-white/80 italic mb-4 max-w-3xl mx-auto">
                            &ldquo;{testimonials[currentIndex].text}&rdquo;
                        </blockquote>
                        <div>
                            <h4 className="font-semibold text-white text-lg">
                                {testimonials[currentIndex].name}
                            </h4>
                            <p className="text-emerald-300 text-sm">
                                {testimonials[currentIndex].position}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentIndex
                                ? "bg-emerald-300 w-6"
                                : "bg-white/30 hover:bg-white/50"
                        }`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
                <i className="fas fa-chevron-left text-white"></i>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
                <i className="fas fa-chevron-right text-white"></i>
            </button>
        </div>
    );
}; 