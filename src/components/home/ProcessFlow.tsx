"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Building2, Users, TrendingUp } from "lucide-react"

export default function ProcessFlow() {
  const stages = [
    {
      id: 1,
      field: "Market Insight & Strategy",
      phase: "Before Entry",
      keyword: "Learn • Plan",
      icon: Lightbulb,
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      id: 2,
      field: "Establishment & Setup",
      phase: "Early Entry",
      keyword: "Laying the Foundation",
      icon: Building2,
      color: "from-cyan-400 to-teal-400",
      bgColor: "from-cyan-50 to-teal-50",
    },
    {
      id: 3,
      field: "Organization & HR",
      phase: "Operational Prep",
      keyword: "Motivating People",
      icon: Users,
      color: "from-teal-400 to-emerald-400",
      bgColor: "from-teal-50 to-emerald-50",
    },
    {
      id: 4,
      field: "Market Entry & Growth",
      phase: "Expansion",
      keyword: "Sell • Grow",
      icon: TrendingUp,
      color: "from-emerald-400 to-blue-400",
      bgColor: "from-emerald-50 to-blue-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "backOut" },
    },
  }

  const hoverVariants = {
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section
      className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-indigo-50/20 to-white overflow-hidden"
      id="process-flow"
    >
      <div className="absolute top-20 left-0 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-56 h-56 bg-cyan-100/20 rounded-full blur-3xl -z-10" />

      {/* Left decorative art */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 md:opacity-20 pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <path d="M50 50 Q100 100 50 150 T50 250" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
          <circle cx="50" cy="50" r="8" fill="currentColor" className="text-blue-400" />
          <circle cx="50" cy="150" r="6" fill="currentColor" className="text-cyan-400" />
          <circle cx="50" cy="250" r="8" fill="currentColor" className="text-teal-400" />
        </svg>
      </motion.div>

      {/* Right decorative art */}
      <motion.div
        className="absolute right-0 top-1/3 opacity-10 md:opacity-20 pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <svg width="180" height="350" viewBox="0 0 180 350" fill="none">
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-cyan-400"
          />
          <rect
            x="100"
            y="80"
            width="60"
            height="60"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-teal-400"
          />
          <rect
            x="40"
            y="160"
            width="60"
            height="60"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-emerald-400"
          />
          <line x1="50" y1="80" x2="130" y2="110" stroke="currentColor" strokeWidth="1.5" className="text-blue-300" />
          <line x1="130" y1="140" x2="70" y2="160" stroke="currentColor" strokeWidth="1.5" className="text-blue-300" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Your Journey to Market Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A structured four-phase approach to ensure smooth and successful market entry
          </p>
        </motion.div>

        {/* Process Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <motion.div key={stage.id} variants={cardVariants} whileHover="hover" className="relative">
                {/* Connecting line */}
                {index < stages.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/3 -right-3 w-6 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 origin-left"
                    variants={lineVariants}
                  />
                )}

                {/* Card */}
                <motion.div
                  variants={hoverVariants}
                  className={`relative h-full rounded-2xl bg-gradient-to-br ${stage.bgColor} p-8 border border-white/60 backdrop-blur-sm overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Top accent line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stage.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ originX: 0 }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <motion.div
                      variants={iconVariants}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} text-white mb-6 shadow-md`}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>

                    {/* Phase Badge */}
                    <div className="inline-block mb-3 px-3 py-1 bg-white/40 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-semibold text-gray-700">{stage.phase}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{stage.field}</h3>

                    {/* Keyword */}
                    <p className="text-sm font-medium text-gray-600 mb-6 flex-1">{stage.keyword}</p>

                    {/* Step number */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Step {stage.id}</span>
                      {index < stages.length - 1 && (
                        <motion.div initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                          <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
