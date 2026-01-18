"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "next-themes"
import NavDropdown from "./nav-dropdown"
import MobileMenu from "./mobile-menu"
import { resourcesDropdownData } from "./nav-data"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Update header background when scrolled
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check in case page is loaded scrolled down
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle logo click with theme preservation
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Use router.push instead of Link's default behavior
    router.push("/")
  }

  // Determine which logo to show based on theme
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={handleLogoClick}>
              <span className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
                Lester<span className="text-[#71717A]">Borillo</span>
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      href="/"
                      className={`transition-colors ${pathname === "/"
                        ? "text-[#71717A] dark:text-[#71717A]"
                        : "text-black dark:text-white hover:text-[#71717A] dark:hover:text-[#71717A]"
                        }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/#services"
                      className="text-black dark:text-white hover:text-[#71717A] dark:hover:text-[#71717A] transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#about"
                      className="text-black dark:text-white hover:text-[#71717A] dark:hover:text-[#71717A] transition-colors"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={`transition-colors ${pathname === "/portfolio"
                        ? "text-[#71717A] dark:text-[#71717A]"
                        : "text-black dark:text-white hover:text-[#71717A] dark:hover:text-[#71717A]"
                        }`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        window.Calendly.initPopupWidget({
                          url: "https://calendly.com/lesterborillo/30min",
                        })
                      }
                      className="text-black dark:text-white hover:text-[#71717A] dark:hover:text-[#71717A] transition-colors"
                    >
                      Start Project
                    </button>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
