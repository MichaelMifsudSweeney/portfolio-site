export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }, exit: {
        hidden: { opacity: 0 }
    }
}

export const item = {
    hidden: { opacity: 0, y: 5, transition: { type: "spring", duration: 1, bounce: 0 } },
    show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1, bounce: 0 } },
    exit: { opacity: 0, y: 5, transition: { type: "spring", duration: 1, bounce: 0 } },
}