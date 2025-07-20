import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Adapt - A card that adapts to the way you live",
  description: "Smart rewards. Personal choices. Tailored just for you.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-alberta antialiased">{children}</body>
    </html>
  )
}
