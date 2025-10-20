"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function EffectivenessStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "99", suffix: "%", label: "PFAS Reduction", sublabel: "PFOA/PFOS removal rate" },
    { value: "95", suffix: "%", label: "Taste Improvement", sublabel: "Chlorine & odor reduction" },
    { value: "6-9", suffix: " mo", label: "Filter Lifespan", sublabel: "Typical household usage" },
    { value: "1,500", suffix: " gal", label: "Total Capacity", sublabel: "Per cartridge" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Effectiveness</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Laboratory-verified performance metrics under controlled test conditions
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold tracking-tight">
                  {stat.value}
                  <span className="text-3xl md:text-4xl font-semibold text-primary-foreground/90">{stat.suffix}</span>
                </div>
                <div className="text-xl font-bold">{stat.label}</div>
                <div className="text-sm text-primary-foreground/70 leading-relaxed">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-sm text-primary-foreground/60 mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            *Test methodology: EPA Method 537.1, synthetic challenge water, 0.5 GPM flow rate.{" "}
            <a href="#tech" className="underline hover:text-primary-foreground transition-colors font-medium">
              View detailed lab results
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  )
}
