"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, ExternalLink, X } from "lucide-react"
import { useTheme } from "next-themes"
import { resourcesDropdownData } from "./nav-data"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && resolvedTheme === "dark"

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const toggleDropdown = (dropdown: string) => {
    setExpandedDropdown(expandedDropdown === dropdown ? null : dropdown)
  }

  if (!isOpen) return null

  // Determine which logo to show based on theme
  const logoSrc = isDarkMode ? "/logo-light.png" : "/logo-dark.png"

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" style={{ display: isOpen ? "block" : "none" }}>
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] shadow-xl overflow-y-auto"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
          <Link href="/" className="flex items-center" onClick={onClose}>
            <span className="text-xl font-bold text-black dark:text-white tracking-tight">
              Lester<span className="text-[#71717A]">Borillo</span>
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className={`flex items-center py-3 px-4 rounded-lg text-base ${pathname === "/"
                  ? "bg-[#71717A]/10 text-[#71717A]"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                onClick={onClose}
              >
                Home
              </Link>
            </li>

            <li>
              <a
                href="/#services"
                className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={onClose}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="/#about"
                className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={onClose}
              >
                About Me
              </a>
            </li>

            <li>
              <Link
                href="/portfolio"
                className={`flex items-center py-3 px-4 rounded-lg text-base ${pathname === "/portfolio"
                  ? "bg-[#71717A]/10 text-[#71717A]"
                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                onClick={onClose}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <button
                onClick={() => {
                  onClose()
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/lesterborillo/30min",
                  })
                }}
                className="flex items-center w-full py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
              >
                Start Project
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 mt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => {
              onClose()
              window.Calendly.initPopupWidget({
                url: "https://calendly.com/lesterborillo/discovery-call",
              })
            }}
            className="flex items-center justify-center w-full py-3 px-4 bg-[#71717A] text-white rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
