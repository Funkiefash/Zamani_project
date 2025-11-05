"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-100 px-4 py-2 text-sm text-gray-600 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#0a2e1a] transition">
            Ways To Connect With Us
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-[#0a2e1a] transition">
            Find A Branch Near You
          </a>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Search ..."
            className="bg-white px-3 py-1 rounded border border-gray-300 text-sm"
          />
          <button className="text-gray-600">🔍</button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-zamani.jpg"
            alt="Zamani Capital Logo"
            width={180}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#0a2e1a] font-medium transition px-4 py-2 flex items-center gap-1">
              About Us
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <div>
                <div className="px-4 py-2 font-semibold text-sm text-[#0a2e1a] bg-gray-50 border-b">Our Team</div>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Management Team
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Board Members
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                  Company Profile
                </Link>

                <div className="px-4 py-2 font-semibold text-sm text-[#0a2e1a] bg-gray-50 border-b">Our Impact</div>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Testimonials
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b">
                  Performance Highlight
                </Link>

                <Link href="#news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  News & Event
                </Link>
              </div>
            </div>
          </div>

          {/* Products & Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#0a2e1a] font-medium transition px-4 py-2 flex items-center gap-1">
              Products & Services
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Investment Portfolios
              </Link>
              <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Wealth Management
              </Link>
              <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Savings Plans
              </Link>
              <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Financial Advisory
              </Link>
            </div>
          </div>

          {/* Careers Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#0a2e1a] font-medium transition px-4 py-2 flex items-center gap-1">
              Careers
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Guarantor Form
              </Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Reference Form
              </Link>
            </div>
          </div>

          {/* Contact Us Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-[#0a2e1a] font-medium transition px-4 py-2 flex items-center gap-1">
              Contact Us
              <span className="text-xs">▼</span>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Contact Form
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Branch Locator
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Customer Support
              </Link>
            </div>
          </div>

          {/* Team Link */}
          <Link href="/#team" className="text-gray-700 hover:text-[#0a2e1a] font-medium transition px-4 py-2">
            Team
          </Link>

          {/* Get Started button */}
          <Link
            href="/signup"
            className="ml-4 bg-[#c4ff00] text-[#0a2e1a] font-bold px-6 py-2 rounded hover:bg-[#b3ff00] transition"
          >
            Get Started
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 px-4 py-4 flex flex-col gap-4 bg-gray-50">
          {/* About Us Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left text-gray-700 hover:text-[#0a2e1a] font-medium transition py-2 flex items-center justify-between"
            >
              About Us
              <span className={`text-xs transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {openDropdown === "about" && (
              <div className="pl-4 border-l-2 border-[#c4ff00] flex flex-col gap-2 mt-2">
                <div className="font-semibold text-sm text-[#0a2e1a]">Our Team</div>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Management Team
                </Link>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Board Members
                </Link>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Company Profile
                </Link>
                <div className="font-semibold text-sm text-[#0a2e1a] mt-2">Our Impact</div>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Testimonials
                </Link>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Performance Highlight
                </Link>
                <Link href="#news" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  News & Event
                </Link>
              </div>
            )}
          </div>

          {/* Products & Services Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full text-left text-gray-700 hover:text-[#0a2e1a] font-medium transition py-2 flex items-center justify-between"
            >
              Products & Services
              <span className={`text-xs transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 border-l-2 border-[#c4ff00] flex flex-col gap-2 mt-2">
                <Link href="/services" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Investment Portfolios
                </Link>
                <Link href="/services" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Wealth Management
                </Link>
                <Link href="/services" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Savings Plans
                </Link>
                <Link href="/services" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Financial Advisory
                </Link>
              </div>
            )}
          </div>

          {/* Careers Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("careers")}
              className="w-full text-left text-gray-700 hover:text-[#0a2e1a] font-medium transition py-2 flex items-center justify-between"
            >
              Careers
              <span className={`text-xs transition-transform ${openDropdown === "careers" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openDropdown === "careers" && (
              <div className="pl-4 border-l-2 border-[#c4ff00] flex flex-col gap-2 mt-2">
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Guarantor Form
                </Link>
                <Link href="#" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Reference Form
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("contact")}
              className="w-full text-left text-gray-700 hover:text-[#0a2e1a] font-medium transition py-2 flex items-center justify-between"
            >
              Contact Us
              <span className={`text-xs transition-transform ${openDropdown === "contact" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {openDropdown === "contact" && (
              <div className="pl-4 border-l-2 border-[#c4ff00] flex flex-col gap-2 mt-2">
                <Link href="/contact" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Contact Form
                </Link>
                <Link href="/contact" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Branch Locator
                </Link>
                <Link href="/contact" className="text-sm text-gray-700 hover:text-[#0a2e1a]">
                  Customer Support
                </Link>
              </div>
            )}
          </div>

          {/* Team Link */}
          <Link href="/#team" className="text-gray-700 hover:text-[#0a2e1a] font-medium transition py-2">
            Team
          </Link>

          {/* Get Started button for mobile */}
          <Link
            href="/signup"
            className="bg-[#c4ff00] text-[#0a2e1a] font-bold px-6 py-2 rounded hover:bg-[#b3ff00] transition text-center"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  )
}
