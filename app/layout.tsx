import type React from "react"
import ClientLayout from "./ClientLayout"

export const metadata = {
  title: "Blockchain Technology Showcase",
  description: "Explore specialized applications leveraging blockchain technology across various domains",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'