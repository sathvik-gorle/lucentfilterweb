"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Droplet } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/40 rounded-full blur-[120px] animate-ripple" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-ripple"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px] animate-ripple"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium gap-2 bg-accent/10 text-accent border-accent/20"
              >
                <Droplet className="w-4 h-4" />
                Advanced Ion-Exchange Technology
              </Badge>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                PFAS-free water, <span className="gradient-text">verified.</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Lucent uses next-gen ion-exchange resin to capture "forever chemicals" and deliver clean, great-tasting
                water for home and small offices.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
                asChild
              >
                <a href="#demo">Watch Demo</a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-accent/5 bg-transparent" asChild>
                <a href="#tech">See the Science</a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50">
                NSF/ANSI 53/58 Ready
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50">
                Lab-Tested
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/50">
                BPA-Free
              </Badge>
            </motion.div>

            <motion.div
              className="pt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm text-muted-foreground">
                Est. removal of PFOA/PFOS: <span className="font-bold text-foreground text-lg">95-99%*</span>
              </p>
              <a href="#lab-results" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                View lab data →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Glow effect behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 blur-3xl rounded-full scale-75" />

              <motion.div
                className="relative"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <img
                  src="/modern-sleek-water-filter-product-white-background.jpg"
                  alt="Lucent Water Filter Product"
                  className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
