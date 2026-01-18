"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutMe() {
    return (
        <section id="about" className="card my-20 relative overflow-hidden shadow-md">
            <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
                {/* Text content - takes full width on mobile, 3/5 on desktop */}
                <div className="w-full md:w-3/5 z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight"
                    >
                        About <span className="text-[#71717A]">Me</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="text-sm md:text-base max-w-2xl text-gray-700 dark:text-gray-300 mb-6">
                            I’m <span className="text-black dark:text-white font-medium">Lester Borillo</span>, an AI Automation Developer focused on building production-grade automation systems using <span className="text-[#71717A]">n8n, Zapier, and Make</span>, integrated through RESTful APIs, webhooks, and custom HTTP services.
                        </p>

                        <p className="text-sm md:text-base max-w-2xl text-gray-700 dark:text-gray-300">
                            I design event-driven workflows that orchestrate data across CRMs, databases, marketing platforms, and project management tools. My goal is to transform complex business processes into seamless, automated systems that scale.
                        </p>
                    </motion.div>
                </div>

                {/* Profile Image - hidden on mobile, visible on md and up */}
                <div className="hidden md:flex md:w-2/5 md:absolute md:right-12 md:top-0 md:bottom-0 items-center justify-center">
                    <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-[#71717A]/20 p-1 bg-gradient-to-tr from-[#71717A]/10 to-transparent">
                        <div className="w-full h-full rounded-full overflow-hidden relative shadow-xl">
                            <Image
                                src="/about-profile.png"
                                alt="Lester Borillo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
