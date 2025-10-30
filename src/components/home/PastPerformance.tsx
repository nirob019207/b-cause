"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export default function PastPerformance() {
  const examples = [
    "Survey of 63 countries for major bank name selection.",
    "Business alliance between Japanese and Korean steel companies.",
    "Embassy business briefing event coordination.",
    "Dispatched 400 interpreters for 4-day international exhibition.",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      id="past-performance"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Past Performance</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 1998, b-cause, Inc. has completed over 2,700 multilingual projects, offering solutions for
            translation, recruitment, and market expansion.
          </p>
        </motion.div>

        {/* Examples Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {examples.map((example, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ x: 8 }} className="group">
              <div className="h-full rounded-xl bg-white p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
                <motion.div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex gap-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed">{example}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
