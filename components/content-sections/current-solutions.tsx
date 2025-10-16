"use client"

import { FiveBoxSection } from "@/components/five-box-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Check, AlertTriangle } from "lucide-react"

export function CurrentSolutionsSection() {
  const solutions = [
    {
      name: "Boiling",
      pros: ["Kills bacteria/viruses", "No equipment needed"],
      cons: ["Fuel-intensive", "Concentrates nitrates", "No chemical removal", "Impractical for large volumes"],
    },
    {
      name: "Chlorination",
      pros: ["Disinfects wells", "Low cost"],
      cons: ["Daily dosing complexity", "Taste/odor issues", "No nitrate/PFAS removal", "Byproduct concerns"],
    },
    {
      name: "Carbon Pitcher",
      pros: ["User-friendly", "Improves taste/odor", "Cheap upfront"],
      cons: ["No nitrate removal", "Limited PFAS", "No microbe protection", "Frequent replacement (2 mo)"],
    },
    {
      name: "Reverse Osmosis",
      pros: ["Broad-spectrum removal", "Effective for nitrates/PFAS"],
      cons: ["High cost ($500-3000)", "20-50% water waste", "Slow flow", "Complex installation", "High pressure needed"],
    },
    {
      name: "Ion-Exchange Softener",
      pros: ["Good for hardness/nitrate (anion)", "Regenerable"],
      cons: ["No PFAS focus", "No disinfection", "Multi-box complexity", "Salt management"],
    },
  ]

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="container-wide content-space">
          <SectionHeader
            badge="Current Landscape"
            title="Limitations of Current Solutions"
            description="Existing well water treatments each have significant drawbacks that limit adoption or effectiveness for comprehensive contamination."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-elevated hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{solution.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {solution.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-muted-foreground">
                          • {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-destructive mb-2 flex items-center gap-1">
                      <X className="w-4 h-4" />
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {solution.cons.map((con, i) => (
                        <li key={i} className="text-xs text-muted-foreground">
                          • {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <FiveBoxSection
              tldr="Current solutions are either too narrow (carbon, chlorine), too expensive (RO), or too complex (multi-system approaches)."
              whyItMatters={[
                "Boiling worsens nitrate concentration by evaporation",
                "RO wastes 20-50% of water and costs $500-3000 upfront",
                "Carbon pitchers don't remove nitrates or fully address PFAS",
              ]}
              keyFacts={[
                {
                  fact: "RO systems require high pressure, power, and produce slow flow with brine waste",
                  citation: "RAdata",
                },
                {
                  fact: "Traditional softeners target hardness/iron, not PFAS, and have no disinfection",
                  citation: "WQA",
                },
                {
                  fact: "Homeowners would need multiple systems (nitrate filter + UV + carbon) for comprehensive coverage",
                },
              ]}
              lucentApproach="Single device with ion-exchange for chemicals + UV for microbes, no reject water, regenerable media, and simple installation."
              proofSources={[
                { text: "RAdata – Nitrates in Your Water", link: "#references" },
                { text: "Guardian – PFAS in Wells", link: "#references" },
                { text: "Water & Wastewater – RO Economics", link: "#references" },
              ]}
            />
          </div>

          <div className="p-8 md:p-10 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/20 rounded-2xl flex items-start gap-6 mt-16 card-elevated">
            <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-7 h-7 text-accent" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">The Market Gap</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                There is a gap in the market for a{" "}
                <span className="text-foreground font-semibold">single, affordable device</span> that can tackle{" "}
                <span className="text-foreground font-semibold">both chemical toxins and microbial risks</span> in well
                water. This gap is what Lucent aims to fill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

