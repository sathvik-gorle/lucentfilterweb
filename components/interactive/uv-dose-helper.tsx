"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Info } from "lucide-react"

export function UVDoseHelper() {
  const [intensity, setIntensity] = useState<string>("10")
  const [exposureTime, setExposureTime] = useState<string>("4")
  const [uvt, setUvt] = useState<string>("95")
  const [flowRate, setFlowRate] = useState<string>("1.9")

  const intensityNum = parseFloat(intensity) || 0
  const exposureTimeNum = parseFloat(exposureTime) || 0
  const uvtNum = parseFloat(uvt) || 100
  const flowRateNum = parseFloat(flowRate) || 0

  // Simplified dose calculation: dose = intensity × time × (UVT/100)
  const dose = intensityNum * exposureTimeNum * (uvtNum / 100)
  const meetsClassA = dose >= 40 // NSF/ANSI 55 Class A target

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-xl">UV Dose Calculator</CardTitle>
        <CardDescription>
          Estimate UV-C dose for microbial disinfection (NSF/ANSI 55 Class A target: ≥40 mJ/cm²)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              UV Intensity (mW/cm²)
              <Info className="inline w-3 h-3 ml-1 text-muted-foreground" />
            </label>
            <Input
              type="number"
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              placeholder="e.g., 10"
              min="0"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Exposure Time (s)</label>
            <Input
              type="number"
              value={exposureTime}
              onChange={(e) => setExposureTime(e.target.value)}
              placeholder="e.g., 4"
              min="0"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">UVT (%)</label>
            <Input
              type="number"
              value={uvt}
              onChange={(e) => setUvt(e.target.value)}
              placeholder="e.g., 95"
              min="0"
              max="100"
              step="1"
            />
            <p className="text-xs text-muted-foreground">UV Transmittance (clarity of water)</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Flow Rate (L/min)</label>
            <Input
              type="number"
              value={flowRate}
              onChange={(e) => setFlowRate(e.target.value)}
              placeholder="e.g., 1.9"
              min="0"
              step="0.1"
            />
          </div>
        </div>

        <div className="p-6 bg-accent/10 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Estimated UV Dose</span>
            <span className="text-3xl font-bold text-accent">{dose.toFixed(1)} mJ/cm²</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">NSF/ANSI 55 Class A</span>
            <div>
              {meetsClassA ? (
                <Badge className="bg-green-600 hover:bg-green-700 gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Meets Target
                </Badge>
              ) : (
                <Badge variant="secondary" className="gap-2">Below 40 mJ/cm² target</Badge>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            ⚠️ <strong>Note:</strong> This is a simplified estimate. Real UV dose depends on reactor geometry,
            flow dynamics, lamp aging, and validated testing per NSF/ANSI 55. Always verify with third-party
            certification.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

