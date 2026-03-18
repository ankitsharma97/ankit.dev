import { motion } from "framer-motion";
import { fadeUp, transition, viewport } from "@/lib/motion";

export const SectionHeader = ({
    heading1,
    heading2,
    paragraph,
}: {
    heading1: string;
    heading2: string;
    paragraph: string;
}) => {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={transition}
        >
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400">
                    {heading1}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-balance">{heading2}</h2>
            <div className="section-divider"></div>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-2xl mx-auto text-balance">{paragraph}</p>
        </motion.div>
    );
};
