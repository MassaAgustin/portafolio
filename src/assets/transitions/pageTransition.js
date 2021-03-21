export const pageVariants = {
    initial: {
        opacitity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: '-100vw',
        scale: 1.2
    }
}

export const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 1
}

export const motionEffects = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}