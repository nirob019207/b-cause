"use client"

import { motion } from "framer-motion"
import { Globe, Award, Briefcase, Zap } from "lucide-react"

export default function StrengthsSection() {
  const strengths = [
    {
      id: 1,
      title: "Global Network",
      description: "Network in 194 countries with 180 languages for communication support.",
      icon: Globe,
      gradient: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-50 to-cyan-50",
      accentColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Industry Pioneer",
      description: "Japan's first recruitment agency specializing in foreign talent.",
      icon: Award,
      gradient: "from-cyan-400 to-teal-400",
      bgColor: "from-cyan-50 to-teal-50",
      accentColor: "text-cyan-600",
    },
    {
      id: 3,
      title: "Trusted Partner",
      description: "Experience with 83,000+ corporate clients for collaboration and sales.",
      icon: Briefcase,
      gradient: "from-teal-400 to-emerald-400",
      bgColor: "from-teal-50 to-emerald-50",
      accentColor: "text-teal-600",
    },
    {
      id: 4,
      title: "Expert Solutions",
      description: "Comprehensive expertise and partnerships for diverse needs.",
      icon: Zap,
      gradient: "from-emerald-400 to-blue-400",
      bgColor: "from-emerald-50 to-blue-50",
      accentColor: "text-emerald-600",
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const hoverVariants = {
    hover: {
      y: -12,
      transition: { duration: 0.3 },
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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "backOut", delay: 0.3 },
    },
  }

  return (
    <section
      className="relative w-full py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden"
      id="strength"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -z-10" />

      {/* Left decorative art */}
      <motion.div
        className="absolute left-0 top-1/3 -translate-y-1/2 opacity-10 md:opacity-15 pointer-events-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <svg width="150" height="300" viewBox="0 0 150 300" fill="none">
          <circle cx="30" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
          <circle cx="80" cy="120" r="25" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
          <circle cx="40" cy="200" r="22" stroke="currentColor" strokeWidth="2" className="text-teal-400" />
          <path d="M30 70 Q60 100 80 120" stroke="currentColor" strokeWidth="1.5" className="text-blue-300" />
          <path d="M80 145 Q60 170 40 200" stroke="currentColor" strokeWidth="1.5" className="text-cyan-300" />
        </svg>
      </motion.div>

      {/* Right decorative art */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 md:opacity-15 pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <svg width="160" height="320" viewBox="0 0 160 320" fill="none">
          <rect
            x="20"
            y="30"
            width="50"
            height="50"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-cyan-400"
          />
          <rect
            x="90"
            y="100"
            width="50"
            height="50"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-teal-400"
          />
          <rect
            x="30"
            y="180"
            width="50"
            height="50"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            className="text-emerald-400"
          />
          <line x1="45" y1="80" x2="115" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-blue-300" />
          <line x1="115" y1="150" x2="55" y2="180" stroke="currentColor" strokeWidth="1.5" className="text-cyan-300" />
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our unique strengths and proven track record make us your ideal partner for Japan market entry
          </motion.p>
        </motion.div>

        {/* Strengths Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {strengths.map((strength) => {
            const Icon = strength.icon
            return (
              <motion.div key={strength.id} variants={cardVariants} whileHover="hover" className="h-full">
                <motion.div
                  variants={hoverVariants}
                  className={`relative h-full rounded-2xl bg-gradient-to-br ${strength.bgColor} p-8 border border-white/60 backdrop-blur-sm overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Top accent line */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${strength.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: strength.id * 0.1 }}
                    viewport={{ once: true }}
                    style={{ originX: 0 }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Number Badge */}
                    <motion.div
                      variants={numberVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <span className="text-sm font-bold text-gray-700">{strength.id}</span>
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${strength.gradient} text-white mb-6 shadow-md`}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{strength.title}</h3>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">{strength.description}</p>

                    {/* Bottom accent */}
                    <motion.div
                      className="mt-6 pt-4 border-t border-white/40"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: strength.id * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      style={{ originX: 0 }}
                    >
                      <span className={`text-xs font-bold uppercase tracking-wider ${strength.accentColor}`}>
                        Strength {strength.id}
                      </span>
                    </motion.div>
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
