"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Info, BookOpen, Lightbulb, FileText, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface FiveBoxSectionProps {
  tldr: string
  whyItMatters: string[]
  keyFacts: Array<{ fact: string; citation?: string }>
  lucentApproach: string
  proofSources: Array<{ text: string; link?: string }>
  className?: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export function FiveBoxSection({
  tldr,
  whyItMatters,
  keyFacts,
  lucentApproach,
  proofSources,
  className = "",
}: FiveBoxSectionProps) {
  return (
    <motion.div 
      className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Box 1: TL;DR */}
      <motion.div variants={cardVariants}>
        <Card className="group relative overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-background to-background hover:border-accent/50 transition-all duration-500 h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="pb-4 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Info className="w-5 h-5 text-accent" />
              </div>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-accent">TL;DR</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-base leading-relaxed">{tldr}</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Box 2: Why it matters */}
      <motion.div variants={cardVariants}>
        <Card className="group card-elevated hover:shadow-2xl transition-all duration-500 h-full border border-border/50 hover:border-primary/30">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-base font-bold">Why It Matters</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {whyItMatters.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3 text-sm md:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Box 3: Key facts */}
      <motion.div variants={cardVariants}>
        <Card className="group card-elevated hover:shadow-2xl transition-all duration-500 h-full border border-border/50 hover:border-primary/30">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-base font-bold">Key Facts</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {keyFacts.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.fact}
                  {item.citation && (
                    <Badge variant="secondary" className="ml-2 text-xs hover:bg-secondary/70 transition-colors">
                      {item.citation}
                    </Badge>
                  )}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Box 4: Lucent's approach */}
      <motion.div variants={cardVariants} className="md:col-span-2">
        <Card className="group relative overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 via-background to-background hover:border-accent/50 transition-all duration-500 h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="pb-4 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <CardTitle className="text-base font-bold text-accent">Lucent's Approach</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <p className="text-sm md:text-base leading-relaxed">{lucentApproach}</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Box 5: Proof & sources */}
      <motion.div variants={cardVariants}>
        <Card className="group card-elevated hover:shadow-2xl transition-all duration-500 h-full border border-border/50 hover:border-primary/30">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-base font-bold">Proof & Sources</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {proofSources.map((source, index) => (
                <motion.li 
                  key={index} 
                  className="text-sm md:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {source.link ? (
                    <a
                      href={source.link}
                      className="link-accent inline-flex items-center gap-2 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{source.text}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <span>{source.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

