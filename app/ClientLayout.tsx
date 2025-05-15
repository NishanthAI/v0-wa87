"use client"

import type React from "react"

import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <nav className="flex items-center space-x-2">
                    <Link href="/auth/login">
                      <Button variant="ghost" size="sm">
                        Login
                      </Button>
                    </Link>
                    <Link href="/auth/signup">
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Sign Up
                      </Button>
                    </Link>
                  </nav>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 Blockchain Technology Showcase. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Link href="/terms" className="hover:underline">
                    Terms
                  </Link>
                  <Link href="/privacy" className="hover:underline">
                    Privacy
                  </Link>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex w-full items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-emerald-500"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="2" y1="11" x2="22" y2="11"></line>
        </svg>
        <span className="font-bold">BlockchainTech</span>
      </Link>
      <Button
        variant="ghost"
        className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div
        className={`${isOpen ? "flex" : "hidden"} absolute inset-x-0 top-16 z-50 w-full flex-col items-start border-b border-gray-200 bg-background p-4 shadow-lg animate-in slide-in-from-top-5 md:static md:z-0 md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
      >
        {isOpen && (
          <Button
            variant="ghost"
            className="absolute right-4 top-4 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close Menu</span>
          </Button>
        )}
        <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <Link
            href="/use-cases"
            className="text-sm font-medium transition-colors hover:text-emerald-600"
            onClick={() => setIsOpen(false)}
          >
            Use Cases
          </Link>
          <Link
            href="/dapps"
            className="text-sm font-medium transition-colors hover:text-emerald-600"
            onClick={() => setIsOpen(false)}
          >
            DApp Directory
          </Link>
          <Link
            href="/smart-contracts"
            className="text-sm font-medium transition-colors hover:text-emerald-600"
            onClick={() => setIsOpen(false)}
          >
            Smart Contracts
          </Link>
          <Link
            href="/api"
            className="text-sm font-medium transition-colors hover:text-emerald-600"
            onClick={() => setIsOpen(false)}
          >
            API
          </Link>
          <Link
            href="/explorer"
            className="text-sm font-medium transition-colors hover:text-emerald-600"
            onClick={() => setIsOpen(false)}
          >
            Explorer
          </Link>
        </nav>
      </div>
    </div>
  )
}
