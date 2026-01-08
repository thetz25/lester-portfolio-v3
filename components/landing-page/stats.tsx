"use client"

import { useEffect, useRef } from "react"
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion"

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration, ease: "easeOut" })
        }
    }, [isInView, count, value, duration])

    return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Stats() {
    const stats = [
        {
            target: 5,
            suffix: "+",
            label: "Years",
            subLabel: "Experience",
        },
        {
            target: 30,
            suffix: "+",
            label: "Projects",
            subLabel: "Success",
        },
        {
            prefix: "60-",
            target: 80,
            suffix: "%",
            label: "Workload",
            subLabel: "Reduced",
        },
        {
            target: 98,
            suffix: "%",
            label: "Satisfaction",
            subLabel: "Rate",
        },
    ]

    return (
        <section className="py-12 md:py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#71717A] leading-none mb-3">
                            {stat.prefix}
                            <Counter value={stat.target} />
                            {stat.suffix}
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-lg md:text-xl font-medium text-black dark:text-white leading-tight">
                                {stat.label}
                            </span>
                            <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-normal leading-tight">
                                {stat.subLabel}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
