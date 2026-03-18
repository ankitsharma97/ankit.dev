import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ children, className, style, ...other }: ComponentPropsWithoutRef<"div">) => {
    return (
        <div
            className={twMerge(
                `interactive-card panel-sheen surface-glow bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline after:outline-1 after:-outline-offset-1 after:rounded-3xl after:outline-white/15 after:pointer-events-none p-6`,
                className
            )}
            style={style}
            {...other}>
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                    backgroundImage: `url(${grainImage.src})`,
                }}></div>
            <div className="absolute inset-x-10 top-0 h-20 rounded-full bg-emerald-300/10 blur-3xl"></div>
            {children}
        </div>
    );
};
