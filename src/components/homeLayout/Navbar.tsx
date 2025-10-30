/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "TOP", href: "/" },
  { name: "Difference with Government", href: "#" },
  { name: "Partner Companies", href: "#" },
  { name: "Process & Cost", href: "#process-flow" },
  { name: "Past Cases", href: "#past-performance" },
  { name: "Company Overview", href: "#company-overview" },
  { name: "Contact ", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: any, href: any) => {
    e.preventDefault();
    setOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#5191D6] shadow-md">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-wide">
          b-cause, Inc.
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex space-x-6">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white hover:text-gray-200 transition text-sm font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 transition text-sm font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-[#5191D6] text-white xl:hidden"
            >
              <ul className="flex flex-col text-center divide-y divide-blue-300">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="block py-4 hover:bg-blue-500 transition"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-4 hover:bg-blue-500 transition"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
