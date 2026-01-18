"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Calendly: any
  }
}

export default function CalendlyScript() {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js")
    head?.appendChild(script)

    const style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", "https://assets.calendly.com/assets/external/widget.css")
    head?.appendChild(style)

    return () => {
      // Cleanup if necessary, though usually not needed for global scripts
      head?.removeChild(script)
      head?.removeChild(style)
    }
  }, [])

  return null
}
