"use client"
import { motion } from "framer-motion"
import { services } from "@/constants/services"
import ServiceCard from "./ServiceCard"

export default function ServicesSection() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
    },
  }

  return (
    <section
      className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
      id="services"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Our Comprehensive Services
            </h2>
          </motion.div>

          <motion.p variants={subtitleVariants} className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to successfully enter and establish your business in the Japanese market
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
