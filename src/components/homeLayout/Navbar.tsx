"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "TOP", href: "/" },
  { name: "Difference with Government", href: "/difference" },
  { name: "Partner Companies", href: "/partners" },
  { name: "Process & Cost", href: "/process" },
  { name: "Past Cases", href: "/cases" },
  { name: "Company Overview", href: "/overview" },
  { name: "Contact / Estimate / Free Consultation", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700">
          b-cause, Inc.
        </Link>

        <button className="xl:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav
          className={`${
            open ? "block" : "hidden"
          } xl:flex absolute xl:static top-16 left-0 w-full xl:w-auto bg-white xl:bg-transparent shadow-xl xl:shadow-none`}
        >
          <ul className="flex flex-col xl:flex-row xl:items-center text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b xl:border-none">
                <Link
                  href={link.href}
                  className="block px-2 py-3 hover:text-blue-700 transition text-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
