"use client"

import Link from "next/link"
import type React from "react"

interface ContactFormButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function ContactFormButton({ className = "", children }: ContactFormButtonProps) {
  return (
    <a
      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Xc85iwZucYTLiOkoZBKlGsKtCvXCEA0I7TEjy91w6oOMfYfMWNm_fgqhJtdlw7pJ8gf9bRJ8T?gv=true"
      target="_blank"
      rel="noopener noreferrer"
      className={className || "btn-primary"}
    >
      {children || "Schedule Discovery Call"}
    </a>
  )
}
