"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Droplet } from "lucide-react"
import { HeroStats } from "@/components/hero-stats"

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

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        {/* Main Hero Content */}
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <Badge
              variant="secondary"
              className="px-5 py-2.5 text-sm font-semibold gap-2 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              <Droplet className="w-4 h-4" />
              Advanced Ion-Exchange Technology
            </Badge>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              PFAS & nitrate removal with <span className="gradient-text">UV disinfection.</span> Verified.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Regenerable ion-exchange + UV-C in a modular, 3D-printed cartridge—engineered for rural wells.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all h-14 px-8 text-base font-semibold"
              asChild
            >
              <a href="#demo">Watch Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-accent/5 bg-background/50 backdrop-blur h-14 px-8 text-base font-semibold" asChild>
              <a href="#tech">See the Science</a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-accent/5 bg-background/50 backdrop-blur h-14 px-8 text-base font-semibold" asChild>
              <a href="#lab-results">View Lab Data</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
              NSF/ANSI 53/58 Ready
            </Badge>
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
              Lab-Tested
            </Badge>
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
              BPA-Free
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
