"use client"
import { motion } from "framer-motion"
import { Search, Building2, Users, Megaphone, CheckCircle2, ArrowRight } from "lucide-react"

interface ServiceCardProps {
  id: number
  title: string
  subtitle: string
  icon: string
  points: string[]
  gradient: string
  accentColor: string
  index: number
}

export default function ServiceCard({
  id,
  title,
  subtitle,
  icon,
  points,
  gradient,
  accentColor,
  index,
}: ServiceCardProps) {
  const getIcon = () => {
    const iconProps = { size: 28, strokeWidth: 1.5 }
    switch (icon) {
      case "search":
        return <Search {...iconProps} />
      case "building":
        return <Building2 {...iconProps} />
      case "users":
        return <Users {...iconProps} />
      case "megaphone":
        return <Megaphone {...iconProps} />
      default:
        return <Search {...iconProps} />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  }

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  const borderVariants = {
    initial: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <motion.div
        variants={hoverVariants}
        className={`relative h-full rounded-2xl bg-gradient-to-br ${gradient} p-8 border border-white/40 backdrop-blur-sm overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300`}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          layoutId={`gradient-${id}`}
        />

        <motion.div
          variants={borderVariants}
          initial="initial"
          whileHover="hover"
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor} origin-left`}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Container */}
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${accentColor} text-white mb-6 shadow-md`}
          >
            {getIcon()}
          </motion.div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
          <p className="text-sm font-medium text-gray-600 mb-6">{subtitle}</p>

          {/* Points List */}
          <ul className="space-y-3 flex-1 mb-6">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/btn"
          >
            Learn more
            <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
