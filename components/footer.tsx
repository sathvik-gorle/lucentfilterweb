"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic would go here
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">L</span>
                </div>
                <span className="font-bold text-xl">Lucent</span>
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Advanced ion-exchange + UV-C filtration for safe, clean water.
              </p>
            </div>

            {/* Technical */}
            <div>
              <h3 className="font-semibold mb-4">Technical</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#tech"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Technology Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#product-gallery"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Product Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Demo Videos
                  </a>
                </li>
                <li>
                  <a
                    href="/whitepaper"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#tech" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/whitepaper" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Stay Informed</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Technical updates and water quality insights.
              </p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  required
                />
                <Button type="submit" variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-foreground/20 space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
              <p>© {new Date().getFullYear()} Lucent Water Systems. Educational project demonstration.</p>
              <div className="text-primary-foreground/60">
                Made with Next.js and Tailwind CSS
              </div>
            </div>
            <div className="text-center text-sm text-primary-foreground/50 pt-2">
              <p className="font-medium">Created by Sathvik Gorle, Arjun Rawal, and Hadi Abdul</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
