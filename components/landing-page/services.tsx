"use client"

import { motion } from "framer-motion"
import { Link2, Users, Bot, Settings, FileText, BarChart3, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "AI-Powered Workflow Automation",
    description: "Automate repetitive business tasks using Zapier, Make, and n8n. Streamline operations and free up your team for high-value work.",
    icon: Link2,
  },
  {
    id: 2,
    title: "CRM + Lead Pipeline Automation",
    description: "Build automated systems for Asana, HubSpot, GoHighLevel, and others. Never lose a lead or miss a follow-up again.",
    icon: Users,
  },
  {
    id: 3,
    title: "AI Agent & Chatbot Development",
    description: "Create intelligent appointment setters, content assistants, lead qualifiers, and customer support bots powered by AI.",
    icon: Bot,
  },
  {
    id: 4,
    title: "System Integrations (API & Webhooks)",
    description: "Connect and sync your tools for seamless data flow across platforms. Custom integrations that work exactly how you need them.",
    icon: Settings,
  },
  {
    id: 5,
    title: "Operations Optimization & SOP Design",
    description: "Turn complex processes into structured, scalable workflows. Document and automate your operations for consistent growth.",
    icon: FileText,
  },
  {
    id: 6,
    title: "Vibe Coding",
    description: "Build and iterate at the speed of thought using AI-assisted development. Focus on the core logic and intent while AI handles the implementation.",
    icon: BarChart3,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white"
        >
          Services <span className="text-[#71717A]">I Offer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          End-to-end automation solutions designed to transform how your business operates
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-[#272829] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-6 h-6 text-[#71717A]" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <a
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Xc85iwZucYTLiOkoZBKlGsKtCvXCEA0I7TEjy91w6oOMfYfMWNm_fgqhJtdlw7pJ8gf9bRJ8T?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black dark:text-white font-medium hover:gap-3 transition-all duration-300"
        >
          Ready to automate? Let's talk <ArrowRight className="w-4 h-4 text-[#71717A]" />
        </a>
      </motion.div>
    </section>
  )
}
