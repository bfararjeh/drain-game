export function getProgress(): number {
    if (typeof window === "undefined") return 1
    return parseInt(localStorage.getItem("surgecap_progress") ?? "1")
}

export function saveProgress(level: number) {
    const current = getProgress()
    if (level > current) {
        localStorage.setItem("surgecap_progress", String(level))
    }
}