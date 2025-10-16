"use client"

import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function DemoVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How Lucent Captures PFAS</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
              Watch our technical demonstration of the ion-exchange filtration process
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video placeholder - larger and more prominent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
                  <img
                    src="/water-filtration-system-diagram-technical.jpg"
                    alt="Demo video thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/70 transition-colors flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-accent flex items-center justify-center"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Explanation points */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                {
                  title: "Resin Bead Architecture",
                  description:
                    "High-affinity functional groups on resin beads create strong ionic bonds with PFAS molecules through adsorption and ion-exchange mechanisms.",
                },
                {
                  title: "Optimized Contact Time",
                  description:
                    "Engineered flow rate ensures sufficient contact time between water and resin for maximum PFAS capture efficiency.",
                },
                {
                  title: "Breakthrough Curve Analysis",
                  description:
                    "Measured breakthrough curves validate filter performance across bed volumes, ensuring consistent removal rates.",
                },
                {
                  title: "Easy Cartridge Replacement",
                  description:
                    "Clear replacement indicators and tool-free cartridge swaps maintain optimal performance throughout the filter lifecycle.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}

              <motion.a
                href="#tech"
                className="inline-flex items-center text-accent hover:underline font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Read the technical overview →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
