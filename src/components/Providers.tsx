"use client";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
);
