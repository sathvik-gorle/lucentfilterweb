"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle } from "lucide-react"

export function BreakthroughSimulator() {
  const [resinVolume, setResinVolume] = useState<string>("1.0")
  const [bedDepth, setBedDepth] = useState<string>("30")
  const [flowRate, setFlowRate] = useState<string>("1.9")
  const [waterTreated, setWaterTreated] = useState<string>("1200")

  const resinVolumeNum = parseFloat(resinVolume) || 1
  const bedDepthNum = parseFloat(bedDepth) || 30
  const flowRateNum = parseFloat(flowRate) || 1.9
  const waterTreatedNum = parseFloat(waterTreated) || 0

  const bedVolumes = waterTreatedNum / resinVolumeNum
  const regenerationThreshold = 1500 // Bed volumes before regeneration
  const progressPercent = Math.min((bedVolumes / regenerationThreshold) * 100, 100)
  const needsRegeneration = bedVolumes >= regenerationThreshold

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-xl">Resin Breakthrough Simulator</CardTitle>
        <CardDescription>
          Track bed volumes processed and estimate when regeneration is needed
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Resin Volume (L)</label>
            <Input
              type="number"
              value={resinVolume}
              onChange={(e) => setResinVolume(e.target.value)}
              placeholder="e.g., 1.0"
              min="0.1"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Bed Depth (cm)</label>
            <Input
              type="number"
              value={bedDepth}
              onChange={(e) => setBedDepth(e.target.value)}
              placeholder="e.g., 30"
              min="1"
              step="1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Flow Rate (L/min)</label>
            <Input
              type="number"
              value={flowRate}
              onChange={(e) => setFlowRate(e.target.value)}
              placeholder="e.g., 1.9"
              min="0.1"
              step="0.1"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Water Treated (L)</label>
            <Input
              type="number"
              value={waterTreated}
              onChange={(e) => setWaterTreated(e.target.value)}
              placeholder="e.g., 1200"
              min="0"
              step="10"
            />
          </div>
        </div>

        <div className="p-6 bg-accent/10 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Bed Volumes Processed</span>
            <span className="text-3xl font-bold text-accent">{bedVolumes.toFixed(0)} BV</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress to Regeneration</span>
              <span className="font-medium">
                {bedVolumes.toFixed(0)} / {regenerationThreshold} BV
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
          </div>
          {needsRegeneration && (
            <Badge variant="destructive" className="w-full justify-center gap-2 py-2">
              <AlertTriangle className="w-4 h-4" />
              Regenerate Soon
            </Badge>
          )}
        </div>

        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Bed Volume (BV):</strong> A measure of resin capacity. ~1,500 BV is a typical target for
            regeneration. Actual breakthrough depends on contaminant concentration and selectivity.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

