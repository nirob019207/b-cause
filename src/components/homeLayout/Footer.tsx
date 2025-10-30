'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const footerLinks = [
  { name: "TOP", href: "/" },
  { name: "Difference with Government", href: "/difference" },
  { name: "Partner Companies", href: "/partners" },
  { name: "Process & Cost", href: "/process" },
  { name: "Past Cases", href: "/cases" },
  { name: "Contact / Estimate / Free Consultation", href: "/contact" },
]

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16 relative" id='footer'>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white text-sm md:text-base transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="text-center text-xs md:text-sm">
          <Link href="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>
          <p className="mt-2">
            © 2025 Specialized Consulting for Japan Market Entry Support @b-cause, Inc. All Rights Reserved.
          </p>
        </div>

        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            ↑ Top
          </button>
        )}
      </div>
    </footer>
  )
}
