"use client"

import { motion } from "framer-motion"

const techStack = [
    {
        name: "N8N",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M4 17L12 21L20 17M4 12L12 16L20 12M12 3L4 7L12 11L20 7L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "ZAPIER",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "MAKE",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        name: "GOHIGHLEVEL",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        name: "AIRTABLE",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        name: "REACT",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
            </svg>
        ),
    },
]

export default function TechStack() {
    return (
        <section className="py-20 md:py-28">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                    Tech <span className="text-[#71717A]">Stack</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    Technologies and platforms I use to build powerful automation solutions
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center group"
                    >
                        <div className="w-24 h-24 md:w-28 md:h-28 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 text-gray-600 dark:text-gray-300 group-hover:text-[#71717A] dark:group-hover:text-white">
                            {tech.icon}
                        </div>
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 dark:text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white uppercase">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
