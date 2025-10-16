"use client"

import { motion } from "framer-motion"

export function SocialProof() {
  const logos = ["Environmental Science", "Water Quality Journal", "Tech Innovation", "Green Living"]

  return (
    <section className="py-16 border-y bg-gradient-to-r from-secondary/20 via-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-center text-sm text-muted-foreground mb-10 font-medium"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          As featured in
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="text-muted-foreground/70 font-semibold text-sm md:text-base hover:text-foreground transition-colors cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
