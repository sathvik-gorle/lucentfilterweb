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

      {/* Animated Product Image - Interactive */}
      <motion.div 
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block z-20 cursor-pointer group"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          scale: 1
        }}
        transition={{ 
          duration: 1.2, 
          delay: 0.3,
          ease: "easeOut"
        }}
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          const showcase = document.getElementById('product-gallery');
          showcase?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div 
          className="relative w-[500px] h-[500px]"
          animate={{ 
            rotateY: [0, 8, -8, 0],
            rotateZ: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          {/* Multiple layered glow effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-primary/40 to-accent/50 rounded-full blur-[120px] animate-pulse group-hover:from-accent/70 group-hover:via-primary/60 transition-colors duration-500" 
               style={{ animationDuration: "3s" }} />
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/40 via-accent/30 to-primary/40 rounded-full blur-[100px] animate-pulse" 
               style={{ animationDuration: "4s", animationDelay: "1s" }} />
          
          {/* Product image with transparent background effect */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/product-photos/untitled-design-5.png"
              alt="Lucent Water Filter - Click to see gallery"
              className="relative w-[90%] h-[90%] object-contain rounded-xl transition-all duration-500 group-hover:scale-105"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.35)) contrast(1.15) saturate(1.2) brightness(1.05)",
                mixBlendMode: "normal",
                background: "transparent"
              }}
            />
          </div>
          
          {/* Floating particles effect */}
          <motion.div
            className="absolute top-[20%] left-[20%] w-4 h-4 bg-accent/70 rounded-full blur-sm"
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-primary/70 rounded-full blur-sm"
            animate={{
              y: [30, -30, 30],
              x: [15, -15, 15],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.div
            className="absolute top-[60%] left-[15%] w-2 h-2 bg-accent/60 rounded-full blur-sm"
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Click hint - appears on hover */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="bg-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Click to view gallery →
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        {/* Mobile Product Preview */}
        <motion.div
          className="xl:hidden mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary/30 to-accent/40 rounded-full blur-[80px] animate-pulse" />
            <img
              src="/product-photos/untitled-design-5.png"
              alt="Lucent Water Filter"
              className="relative w-full h-full object-contain rounded-xl"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) contrast(1.1)"
              }}
            />
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center space-y-8 max-w-5xl mx-auto xl:max-w-4xl xl:mr-auto xl:ml-0 xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center xl:justify-start"
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
              PFAS & Nitrate Removal with <span className="gradient-text">UV Disinfection.</span> Lab-Tested.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto xl:max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Regenerable ion-exchange + UV-C in a modular, 3D-printed cartridge—engineered for safe drinking water in rural communities.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center xl:justify-start"
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
              <a href="#product-gallery">View Gallery</a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center xl:justify-start gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
              NSF/ANSI 53/58 Ready
            </Badge>
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
              Lab-Tested Under Controlled Conditions
            </Badge>
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors">
              BPA-Free
            </Badge>
            <Badge variant="secondary" className="px-4 py-2.5 text-sm font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors">
              💎 Diamond Challenge
            </Badge>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
