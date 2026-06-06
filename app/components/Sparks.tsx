"use client"
import { useState, useEffect } from "react"

type Spark = {
    id: number
    left: string
    top: string
    size: string
    duration: string
    delay: string
}

export default function Sparks() {
    const [mounted, setMounted] = useState(false)
    const [sparks, setSparks] = useState<Spark[]>([])

    useEffect(() => {
        setSparks(Array.from({ length: 30 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${2 + Math.random() * 3}px`,
            duration: `${2 + Math.random() * 3}s`,
            delay: `-${Math.random() * 3}s`
        })))
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="spark-container">
            {sparks.map(spark => (
                <div
                    key={spark.id}
                    className="spark"
                    style={{
                        left: spark.left,
                        top: spark.top,
                        '--size': spark.size,
                        '--duration': spark.duration,
                        '--delay': spark.delay,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    )
}