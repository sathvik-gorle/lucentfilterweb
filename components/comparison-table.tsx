"use client"

import { Check, X, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"

export function ComparisonTable() {
  return (
    <section className="section-padding-sm bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="container-wide content-space">
          <SectionHeader
            badge="Competitive Analysis"
            title="How Lucent Compares"
            description="Comprehensive comparison of well water treatment methods—chemicals, microbes, cost, and sustainability"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl border-2 border-accent/10">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-4 px-3 font-semibold sticky left-0 bg-muted/50 z-10">Feature</th>
                      <th className="text-center py-4 px-3 font-semibold bg-accent/10 min-w-[100px]">
                        <div className="text-accent font-bold">Lucent</div>
                        <div className="text-xs font-normal text-muted-foreground">Ion-Ex + UV</div>
                      </th>
                      <th className="text-center py-4 px-3 font-semibold min-w-[100px]">
                        <div>Boiling</div>
                        <div className="text-xs font-normal text-muted-foreground">Thermal</div>
                      </th>
                      <th className="text-center py-4 px-3 font-semibold min-w-[100px]">
                        <div>Chlorination</div>
                        <div className="text-xs font-normal text-muted-foreground">Chemical</div>
                      </th>
                      <th className="text-center py-4 px-3 font-semibold min-w-[100px]">
                        <div>Carbon Pitcher</div>
                        <div className="text-xs font-normal text-muted-foreground">Activated C</div>
                      </th>
                      <th className="text-center py-4 px-3 font-semibold min-w-[100px]">
                        <div>Reverse Osmosis</div>
                        <div className="text-xs font-normal text-muted-foreground">RO</div>
                      </th>
                      <th className="text-center py-4 px-3 font-semibold min-w-[100px]">
                        <div>Ion-Ex Softener</div>
                        <div className="text-xs font-normal text-muted-foreground">Cation/Anion</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">Nitrates</td>
                      <td className="text-center py-3 px-3 bg-accent/5">
                        <div className="flex items-center justify-center gap-1">
                          <Check className="w-4 h-4 text-accent" />
                          <span className="font-semibold">{">"} 85%</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-3">
                        <div className="flex items-center justify-center gap-1 text-destructive">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-xs">Concentrates</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <div className="flex items-center justify-center gap-1">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-xs">(anion only)</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">PFAS</td>
                      <td className="text-center py-3 px-3 bg-accent/5">
                        <div className="flex items-center justify-center gap-1">
                          <Check className="w-4 h-4 text-accent" />
                          <span className="font-semibold">90-99%</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3 text-xs text-muted-foreground">Limited</td>
                      <td className="text-center py-3 px-3">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">Microbes (UV)</td>
                      <td className="text-center py-3 px-3 bg-accent/5">
                        <div className="flex items-center justify-center gap-1">
                          <Check className="w-4 h-4 text-accent" />
                          <span className="font-semibold">99.99%</span>
                        </div>
                      </td>
                      <td className="text-center py-3 px-3">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3">
                        <X className="w-4 h-4 text-muted-foreground mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">Wastewater</td>
                      <td className="text-center py-3 px-3 bg-accent/5 font-semibold text-accent">None</td>
                      <td className="text-center py-3 px-3 text-muted-foreground text-xs">None</td>
                      <td className="text-center py-3 px-3 text-muted-foreground text-xs">None</td>
                      <td className="text-center py-3 px-3 text-muted-foreground text-xs">None</td>
                      <td className="text-center py-3 px-3">
                        <div className="text-destructive font-medium text-xs">20-50%</div>
                      </td>
                      <td className="text-center py-3 px-3 text-muted-foreground text-xs">Brine</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">Cost (per unit)</td>
                      <td className="text-center py-3 px-3 bg-accent/5 font-semibold text-accent">~$150</td>
                      <td className="text-center py-3 px-3 text-muted-foreground text-xs">Low (fuel)</td>
                      <td className="text-center py-3 px-3 text-muted-foreground text-xs">Low (bleach)</td>
                      <td className="text-center py-3 px-3 text-xs">$30-50</td>
                      <td className="text-center py-3 px-3 text-xs">$500-3000</td>
                      <td className="text-center py-3 px-3 text-xs">$300-1000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">Maintenance</td>
                      <td className="text-center py-3 px-3 bg-accent/5 font-semibold text-xs">
                        <div>Regenerate</div>
                        <div className="text-muted-foreground">6-9 mo</div>
                      </td>
                      <td className="text-center py-3 px-3 text-xs text-muted-foreground">Daily</td>
                      <td className="text-center py-3 px-3 text-xs text-muted-foreground">Weekly</td>
                      <td className="text-center py-3 px-3 text-xs">2 months</td>
                      <td className="text-center py-3 px-3 text-xs">6-12 mo</td>
                      <td className="text-center py-3 px-3 text-xs">Salt refill</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium sticky left-0 bg-background z-10">Installation</td>
                      <td className="text-center py-3 px-3 bg-accent/5 font-semibold text-xs text-accent">Simple</td>
                      <td className="text-center py-3 px-3 text-xs">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3 text-xs text-muted-foreground">Moderate</td>
                      <td className="text-center py-3 px-3 text-xs">
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      </td>
                      <td className="text-center py-3 px-3 text-xs text-muted-foreground">Complex</td>
                      <td className="text-center py-3 px-3 text-xs text-muted-foreground">Moderate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <motion.div 
            className="mt-10 p-8 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/20 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Why Lucent Stands Out</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Lucent is the <span className="text-foreground font-semibold">only solution</span> that addresses{" "}
                  <span className="text-foreground font-semibold">nitrates, PFAS, and microbes</span> in a single device,
                  with <span className="text-foreground font-semibold">no reject water</span> and{" "}
                  <span className="text-foreground font-semibold">regenerable media</span> for long-term sustainability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
