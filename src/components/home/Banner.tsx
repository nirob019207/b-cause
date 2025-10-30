"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import banners from "@/assets/model.png"

export default function Banner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const cloudVariants = {
    animate: {
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 text-white py-16 md:py-28 px-6 md:px-12">
      <motion.div className="absolute top-8 left-12 opacity-70" variants={cloudVariants} animate="animate">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
          <path
            d="M10 30C5 30 2 27 2 22C2 18 5 15 10 15C12 8 18 3 25 3C33 3 40 8 42 15C47 15 50 18 50 22C50 27 47 30 42 30H10Z"
            fill="white"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 opacity-60"
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
          <path
            d="M15 40C8 40 3 35 3 28C3 22 8 17 15 17C17 8 24 2 32 2C42 2 50 8 52 17C59 17 64 22 64 28C64 35 59 40 52 40H15Z"
            fill="white"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 opacity-50"
        variants={cloudVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <svg width="70" height="45" viewBox="0 0 70 45" fill="none">
          <path
            d="M8 28C3 28 0 25 0 20C0 16 3 13 8 13C10 7 15 2 22 2C30 2 37 7 39 13C44 13 47 16 47 20C47 25 44 28 39 28H8Z"
            fill="white"
          />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold text-blue-50">Market Entry Solutions</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance text-white"
            variants={itemVariants}
          >
            Japan Market Entry Support Consulting Services
          </motion.h1>

          <motion.p className="text-lg md:text-xl leading-relaxed text-blue-50 mb-8 max-w-lg" variants={itemVariants}>
            Leveraging our unique network and years of experience in Japan, we support your entry into the Japanese
            market — from market research and company setup to HR and marketing assistance.
          </motion.p>

         
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="relative" animate="animate" variants={floatingVariants}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 z-10 pointer-events-none" />
              <Image
                src={banners || "/placeholder.svg"}
                alt="Diverse team working together on Japan market entry"
                width={450}
                height={550}
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
