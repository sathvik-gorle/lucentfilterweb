"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface MetricsData {
  global: {
    householdsServed: number | null
    litersFiltered: number | null
    avgNitrateReductionPct: number | null
    avgPfasReductionPct: number | null
    uvDoseMjCm2: number | null
    uptimePct: number | null
    lastUpdated: string
  }
  sites: Array<{
    id: string
    label: string
    householdsServed: number | null
    litersFiltered: number | null
    nitrateInMgL: number | null
    nitrateOutMgL: number | null
    pfosInPpt: number | null
    pfosOutPpt: number | null
    pfoaInPpt: number | null
    pfoaOutPpt: number | null
    uvDoseMjCm2: number | null
    uptimePct: number | null
  }>
}

export function HeroStats() {
  const [selectedSite, setSelectedSite] = useState<string>("global")
  const [metricsData, setMetricsData] = useState<MetricsData | null>(null)

  useEffect(() => {
    fetch("/data/metrics.json")
      .then((res) => res.json())
      .then((data) => setMetricsData(data))
      .catch((err) => console.error("Failed to load metrics:", err))
  }, [])

  if (!metricsData) return null

  const currentData = selectedSite === "global"
    ? metricsData.global
    : metricsData.sites.find((s) => s.id === selectedSite)

  if (!currentData) return null

  const stats = [
    {
      label: "Households Served",
      value: currentData.householdsServed,
      unit: "",
      tooltip: "Number of households using Lucent filters in pilot programs",
      format: "number"
    },
    {
      label: "Liters Filtered (Annual)",
      value: currentData.litersFiltered,
      unit: "L",
      tooltip: "Annual volume of water treated. Calculated as daily water consumption (5L/person/day for drinking) × 365 days × total people served.",
      format: "large"
    },
    {
      label: "Nitrate Reduction",
      value: currentData.avgNitrateReductionPct || (currentData as any).avgNitrateReductionPct,
      unit: "%",
      tooltip: "Average nitrate removal efficiency vs EPA MCL of 10 mg/L",
    },
    {
      label: "PFAS Reduction",
      value: currentData.avgPfasReductionPct || (currentData as any).avgPfasReductionPct,
      unit: "%",
      tooltip: "Average PFOA/PFOS removal (parts-per-trillion)",
    },
    {
      label: "UV Dose Target",
      value: currentData.uvDoseMjCm2,
      unit: "mJ/cm²",
      tooltip: "UV-C dose for microbial inactivation (NSF/ANSI 55 Class A goal: ≥40 mJ/cm²)",
    },
    {
      label: "System Uptime",
      value: currentData.uptimePct,
      unit: "%",
      tooltip: "Percentage of time systems have been operational",
    },
  ]

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-6 md:p-10 card-glass rounded-3xl space-y-10 border-2 border-accent/10 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Performance Metrics
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-1">
                Real-world data from field deployments
              </p>
              <p className="text-xs text-muted-foreground/70">
                Updated October 2025
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Select value={selectedSite} onValueChange={setSelectedSite}>
              <SelectTrigger className="w-full lg:w-[280px] h-14 border-2 hover:border-accent/50 transition-colors shadow-lg">
                <SelectValue placeholder="Select site" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">🌍 Global Overview</SelectItem>
                {metricsData.sites.map((site) => (
                  <SelectItem key={site.id} value={site.id}>
                    📍 {site.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-7"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div 
                    className="group relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-background via-background to-accent/5 border-2 border-border/50 hover:border-accent/40 hover:shadow-xl transition-all duration-500 cursor-help"
                    variants={{
                      hidden: { opacity: 0, scale: 0.9, y: 20 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="space-y-4 relative">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-bold leading-tight">
                          {stat.label}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Info className="w-4 h-4 text-muted-foreground/50 group-hover:text-accent transition-colors flex-shrink-0" />
                        </motion.div>
                      </div>
                      
                      {stat.value !== null ? (
                        <motion.div 
                          className="flex items-baseline gap-1.5"
                          key={stat.value}
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {(stat as any).format === "large" && stat.value >= 1000000
                              ? `${(stat.value / 1000000).toFixed(2)}M`
                              : (stat as any).format === "large" && stat.value >= 1000
                              ? `${(stat.value / 1000).toFixed(0)}K`
                              : stat.value.toLocaleString()}
                          </p>
                          {stat.unit && (
                            <span className="text-base md:text-lg font-semibold text-muted-foreground">
                              {stat.unit}
                            </span>
                          )}
                        </motion.div>
                      ) : (
                        <Badge variant="secondary" className="text-xs font-semibold px-3 py-1.5">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[320px] p-4 shadow-xl border-2">
                  <p className="text-sm leading-relaxed">{stat.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </motion.div>

        {/* Partner Link */}
        {(currentData as any).link && (
          <motion.div
            className="pt-4 border-t border-border/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href={(currentData as any).link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-accent hover:text-accent/80 transition-colors font-medium group"
            >
              <span>Visit Partner Site</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

