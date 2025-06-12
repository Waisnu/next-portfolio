import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alex Chen - Backend Developer",
  description: "Senior Backend Engineer specializing in scalable distributed systems and high-performance APIs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Premium Fonts from Fontshare */}
        <link href="https://api.fontshare.com/v2/css?f[]=gambarino@300,400,500,600,700&f[]=cabinet-grotesk@100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        {/* Devicon for tech stack icons */}
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-cabinet">{children}</body>
    </html>
  )
}
