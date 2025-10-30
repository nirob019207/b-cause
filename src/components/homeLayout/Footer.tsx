import Link from "next/link"

const footerLinks = [
  { name: "TOP", href: "/" },
  { name: "Difference with Government", href: "/difference" },
  { name: "Partner Companies", href: "/partners" },
  { name: "Process & Cost", href: "/process" },
  { name: "Past Cases", href: "/cases" },
  { name: "Contact / Estimate / Free Consultation", href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
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
      </div>
    </footer>
  )
}
