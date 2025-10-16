"use client"

import { Droplet, Zap, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProductHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Droplet,
      title: "Targets PFAS (PFOA, PFOS, GenX)",
      description: "Specialized ion-exchange resin captures forever chemicals with high affinity functional groups.",
    },
    {
      icon: Zap,
      title: "Ion-exchange resin, high capacity",
      description: "Advanced resin architecture maximizes contact time and adsorption efficiency.",
    },
    {
      icon: RefreshCw,
      title: "Long-life cartridges + quick swap",
      description: "Extended filter lifespan with simple cartridge replacement and clear indicators.",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="border-2 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center ring-2 ring-accent/20">
                    <highlight.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-xl leading-tight">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
