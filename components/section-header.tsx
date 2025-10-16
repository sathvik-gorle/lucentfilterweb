"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className
}: SectionHeaderProps) {
  return (
    <motion.div 
      className={cn(
        "space-y-4 md:space-y-6 mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {badge && (
        <motion.div 
          className={cn(centered && "flex justify-center")}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge className="px-5 py-2.5 text-sm font-semibold bg-accent/10 text-accent border-2 border-accent/20 hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 shadow-lg shadow-accent/10">
            {badge}
          </Badge>
        </motion.div>
      )}
      
      <motion.h2 
        className="text-section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className={cn(
            "text-body-lg text-muted-foreground max-w-3xl",
            centered && "mx-auto"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

