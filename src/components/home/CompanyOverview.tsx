"use client"

import { motion } from "framer-motion"
import { Globe, Users, Briefcase, Languages } from "lucide-react"

export default function CompanyOverview() {
  const stats = [
    { icon: Globe, label: "Countries", value: "194" },
    { icon: Languages, label: "Languages", value: "180" },
    { icon: Users, label: "Corporate Clients", value: "83,347" },
    { icon: Briefcase, label: "Operating Countries", value: "4" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden"
      id="company-overview"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">b-cause, Inc. Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 1998 and incorporated in 2001, b-cause, Inc. operates across Japan, South Korea, the Philippines,
            and Bangladesh. With clients in 194 countries, we provide translation, staffing, marketing, and global
            communication services to 83,347 companies worldwide.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="group">
                <div className="h-full rounded-xl bg-white p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative text-center">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>

                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
