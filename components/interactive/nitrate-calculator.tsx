"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Droplets } from "lucide-react"
import { motion } from "framer-motion"

export function NitrateCalculator() {
  const [nitrateIn, setNitrateIn] = useState<string>("15")
  const [nitrateOut, setNitrateOut] = useState<string>("1.5")

  const nitrateInNum = parseFloat(nitrateIn) || 0
  const nitrateOutNum = parseFloat(nitrateOut) || 0
  const reduction = nitrateInNum > 0 ? ((nitrateInNum - nitrateOutNum) / nitrateInNum) * 100 : 0
  const meetsMCL = nitrateOutNum <= 10

  return (
    <Card className="border-2 border-accent/20 shadow-2xl hover:shadow-accent/10 transition-all duration-500 bg-gradient-to-br from-background via-background to-accent/5">
      <CardHeader className="space-y-4 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
            <Droplets className="w-6 h-6 text-accent" />
          </div>
          <div>
            <CardTitle className="text-2xl">Nitrate Reduction Calculator</CardTitle>
            <CardDescription className="text-base mt-1">
              Calculate nitrate removal efficiency vs EPA's Maximum Contaminant Level (MCL) of 10 mg/L
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Nitrate In (mg/L NO₃⁻)
            </label>
            <Input
              type="number"
              value={nitrateIn}
              onChange={(e) => setNitrateIn(e.target.value)}
              placeholder="Enter inlet concentration"
              min="0"
              step="0.1"
              className="h-12 text-base border-2 focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Nitrate Out (mg/L NO₃⁻)
            </label>
            <Input
              type="number"
              value={nitrateOut}
              onChange={(e) => setNitrateOut(e.target.value)}
              placeholder="Enter outlet concentration"
              min="0"
              step="0.1"
              className="h-12 text-base border-2 focus:border-accent transition-colors"
            />
          </div>
        </div>

        <motion.div 
          className="p-8 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-2xl border-2 border-accent/20 space-y-6 shadow-xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-foreground">Reduction Efficiency</span>
            <motion.span 
              className="text-4xl md:text-5xl font-bold text-accent"
              key={reduction}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {reduction.toFixed(1)}%
            </motion.span>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-foreground">EPA MCL Compliance</span>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {meetsMCL ? (
                <Badge className="bg-green-600 hover:bg-green-700 gap-2 px-4 py-2 text-sm font-semibold shadow-lg">
                  <CheckCircle2 className="w-4 h-4" />
                  Meets Standard
                </Badge>
              ) : (
                <Badge variant="destructive" className="gap-2 px-4 py-2 text-sm font-semibold shadow-lg">
                  <AlertCircle className="w-4 h-4" />
                  Exceeds MCL
                </Badge>
              )}
            </motion.div>
          </div>
        </motion.div>

        <div className="p-6 bg-muted/30 border-2 border-muted rounded-xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Note:</strong> Boiling water concentrates nitrates rather than removing them. Ion-exchange is
              the recommended method for nitrate reduction in well water.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

