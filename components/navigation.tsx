"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Droplet } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg shadow-accent/20">
            <Droplet className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="font-bold text-2xl gradient-text">Lucent</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </a>
          <a href="/#demo" className="text-sm font-medium hover:text-accent transition-colors">
            Demo
          </a>
          <a href="/#tech" className="text-sm font-medium hover:text-accent transition-colors">
            Science
          </a>
          <a href="/#faq" className="text-sm font-medium hover:text-accent transition-colors">
            FAQ
          </a>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all bg-transparent font-medium"
          asChild
        >
          <a href="/whitepaper">Technical Documentation</a>
        </Button>
      </div>
    </nav>
  )
}
