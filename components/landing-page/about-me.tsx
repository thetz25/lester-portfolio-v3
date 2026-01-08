"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
    return (
        <section id="about" className="py-20 px-4 md:px-8 lg:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container mx-auto max-w-5xl bg-gray-50 dark:bg-[#18181B] rounded-[2.5rem] p-10 md:p-16 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden"
            >
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white"
                    >
                        About <span className="text-[#71717A]">Me</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            I’m <span className="text-black dark:text-white font-bold">Lester Borillo</span>, an AI Automation Developer focused on building production-grade automation systems using <span className="text-[#71717A]">n8n, Zapier, and Make</span>, integrated through RESTful APIs, webhooks, and custom HTTP services.
                        </p>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                            I design event-driven workflows that orchestrate data across CRMs, databases, marketing platforms, and project management tools. My goal is to transform complex business processes into seamless, automated systems that scale.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#71717A]/5 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#71717A]/5 rounded-tr-full -ml-8 -mb-8"></div>
            </motion.div>
        </section>
    )
}
