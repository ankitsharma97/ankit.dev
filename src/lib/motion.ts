export const viewport = { once: true, amount: 0.25 };

export const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
};

export const fadeLeft = {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const transition = {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
};
