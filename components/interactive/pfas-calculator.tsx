"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function PFASCalculator() {
  const [pfoaIn, setPfoaIn] = useState<string>("250")
  const [pfoaOut, setPfoaOut] = useState<string>("2.5")
  const [pfosIn, setPfosIn] = useState<string>("180")
  const [pfosOut, setPfosOut] = useState<string>("1.8")

  const pfoaInNum = parseFloat(pfoaIn) || 0
  const pfoaOutNum = parseFloat(pfoaOut) || 0
  const pfosInNum = parseFloat(pfosIn) || 0
  const pfosOutNum = parseFloat(pfosOut) || 0

  const pfoaReduction = pfoaInNum > 0 ? ((pfoaInNum - pfoaOutNum) / pfoaInNum) * 100 : 0
  const pfosReduction = pfosInNum > 0 ? ((pfosInNum - pfosOutNum) / pfosInNum) * 100 : 0
  const avgReduction = (pfoaReduction + pfosReduction) / 2

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-xl">PFAS Reduction Calculator</CardTitle>
        <CardDescription>
          Calculate removal efficiency for PFOA & PFOS "forever chemicals" (parts-per-trillion, ppt)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">PFOA (Perfluorooctanoic Acid)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">PFOA In (ppt)</label>
                <Input
                  type="number"
                  value={pfoaIn}
                  onChange={(e) => setPfoaIn(e.target.value)}
                  placeholder="Inlet concentration"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">PFOA Out (ppt)</label>
                <Input
                  type="number"
                  value={pfoaOut}
                  onChange={(e) => setPfoaOut(e.target.value)}
                  placeholder="Outlet concentration"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">PFOS (Perfluorooctane Sulfonic Acid)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">PFOS In (ppt)</label>
                <Input
                  type="number"
                  value={pfosIn}
                  onChange={(e) => setPfosIn(e.target.value)}
                  placeholder="Inlet concentration"
                  min="0"
                  step="0.1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">PFOS Out (ppt)</label>
                <Input
                  type="number"
                  value={pfosOut}
                  onChange={(e) => setPfosOut(e.target.value)}
                  placeholder="Outlet concentration"
                  min="0"
                  step="0.1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-accent/10 rounded-lg space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-border/50">
            <span className="text-sm font-medium">PFOA Reduction</span>
            <span className="text-2xl font-bold text-accent">{pfoaReduction.toFixed(1)}%</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b border-border/50">
            <span className="text-sm font-medium">PFOS Reduction</span>
            <span className="text-2xl font-bold text-accent">{pfosReduction.toFixed(1)}%</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-muted-foreground">Combined Average</span>
            <span className="text-3xl font-bold text-accent">{avgReduction.toFixed(1)}%</span>
          </div>
        </div>

        <div className="p-4 bg-muted/50 rounded-lg space-y-2">
          <p className="text-xs text-muted-foreground">
            <strong>Context:</strong> PFAS are measured in parts-per-trillion (ppt). Some EPA health advisories are as
            low as 4 ppt for PFOA and PFOS.
          </p>
          <Badge variant="secondary" className="text-xs">
            EPA Health Advisory: PFOA ≤ 4 ppt, PFOS ≤ 4 ppt
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

