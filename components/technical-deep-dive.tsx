"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function TechnicalDeepDive() {
  const [activeTab, setActiveTab] = useState("mechanism")

  const tabs = [
    { id: "mechanism", label: "Mechanism" },
    { id: "performance", label: "Performance" },
    { id: "materials", label: "Materials" },
    { id: "certifications", label: "Certifications" },
  ]

  return (
    <section id="tech" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Deep Dive</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive technical specifications and performance data
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === tab.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="space-y-8">
            {activeTab === "mechanism" && (
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4">Ion-Exchange Mechanism</h3>
                    <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                      <img
                        src="/ion-exchange-resin-diagram-molecular-level-pfas-bi.jpg"
                        alt="Ion-exchange mechanism diagram"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong className="text-foreground">Functional Groups:</strong> The resin beads contain
                        quaternary ammonium functional groups (R₄N⁺) that create strong electrostatic attractions with
                        the anionic head groups of PFAS molecules (perfluoroalkyl carboxylates and sulfonates).
                      </p>
                      <p>
                        <strong className="text-foreground">Adsorption Process:</strong> PFAS molecules are removed
                        through a combination of ion-exchange and hydrophobic interactions. The perfluorinated tail
                        interacts with the polymer matrix while the charged head group exchanges with counter-ions.
                      </p>
                      <p>
                        <strong className="text-foreground">Selectivity:</strong> The resin demonstrates high
                        selectivity for long-chain PFAS (C6-C14) including PFOA, PFOS, and emerging compounds like GenX,
                        with minimal interference from natural organic matter.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "performance" && (
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4">Performance Data</h3>

                    {/* Performance table */}
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold">Parameter</th>
                            <th className="text-left py-3 px-4 font-semibold">Inlet</th>
                            <th className="text-left py-3 px-4 font-semibold">Outlet</th>
                            <th className="text-left py-3 px-4 font-semibold">Removal %</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b">
                            <td className="py-3 px-4">PFOA (ng/L)</td>
                            <td className="py-3 px-4">250</td>
                            <td className="py-3 px-4">2.5</td>
                            <td className="py-3 px-4 font-semibold text-accent">99.0%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4">PFOS (ng/L)</td>
                            <td className="py-3 px-4">180</td>
                            <td className="py-3 px-4">1.8</td>
                            <td className="py-3 px-4 font-semibold text-accent">99.0%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4">GenX (ng/L)</td>
                            <td className="py-3 px-4">120</td>
                            <td className="py-3 px-4">6.0</td>
                            <td className="py-3 px-4 font-semibold text-accent">95.0%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4">Flow Rate</td>
                            <td className="py-3 px-4" colSpan={3}>
                              0.5 GPM (1.9 L/min)
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4">Temperature</td>
                            <td className="py-3 px-4" colSpan={3}>
                              20°C ± 2°C
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">pH Range</td>
                            <td className="py-3 px-4" colSpan={3}>
                              6.5 - 8.5
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Chart placeholder */}
                    <div className="bg-muted rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Removal Efficiency vs. Bed Volumes</h4>
                      <div className="aspect-[2/1] flex items-center justify-center">
                        <img
                          src="/line-chart-showing-pfas-removal-efficiency-over-be.jpg"
                          alt="Performance chart"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        Breakthrough curve showing consistent &gt;95% removal through 1,500 bed volumes under standard
                        test conditions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "materials" && (
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4">Bill of Materials</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Resin Specifications</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Type: Strong-base anion exchange resin</li>
                            <li>• Matrix: Styrene-divinylbenzene copolymer</li>
                            <li>• Functional group: Quaternary ammonium (Type I)</li>
                            <li>• Particle size: 300-1200 μm</li>
                            <li>• Total capacity: ≥1.0 eq/L</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Housing Materials</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Body: Food-grade polypropylene</li>
                            <li>• Seals: EPDM rubber (NSF-certified)</li>
                            <li>• Fittings: Brass with nickel plating</li>
                            <li>• BPA-free construction</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Operating Limits</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Max temperature: 40°C (104°F)</li>
                            <li>• Max pressure: 80 PSI (5.5 bar)</li>
                            <li>• pH range: 4.0 - 10.0</li>
                            <li>• Chlorine tolerance: &lt;2 ppm</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Filter Lifetime</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• Typical household: 6-9 months</li>
                            <li>• Capacity: ~1,500 gallons (5,700 L)</li>
                            <li>• Depends on inlet PFAS concentration</li>
                            <li>• LED indicator for replacement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-4">Certifications & Standards</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Target Certifications</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 border rounded-lg">
                            <p className="font-medium mb-1">NSF/ANSI 53</p>
                            <p className="text-sm text-muted-foreground">
                              Health effects - contaminant reduction including PFOA/PFOS
                            </p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <p className="font-medium mb-1">NSF/ANSI 58</p>
                            <p className="text-sm text-muted-foreground">
                              Reverse osmosis drinking water treatment systems
                            </p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <p className="font-medium mb-1">NSF/ANSI 42</p>
                            <p className="text-sm text-muted-foreground">
                              Aesthetic effects - taste, odor, and chlorine reduction
                            </p>
                          </div>
                          <div className="p-4 border rounded-lg">
                            <p className="font-medium mb-1">WQA Gold Seal</p>
                            <p className="text-sm text-muted-foreground">Water Quality Association certification</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Compliance</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• RoHS compliant (Restriction of Hazardous Substances)</li>
                          <li>• REACH compliant (EU chemical safety regulation)</li>
                          <li>• FDA food-contact materials approved</li>
                          <li>• ISO 9001:2015 manufacturing quality management</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Testing Methodology</h4>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          All performance data obtained through third-party laboratory testing following EPA Method
                          537.1 for PFAS analysis. Testing conducted at certified environmental laboratories with
                          NELAC/ELAP accreditation.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Test conditions: Synthetic challenge water with 200-300 ng/L total PFAS, 0.5 GPM flow rate,
                          20°C, pH 7.5, 150 mg/L TDS.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Download section */}
            <Card className="bg-accent/5 border-accent/20" id="lab-results">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Technical Documentation</h3>
                    <p className="text-muted-foreground text-sm">
                      Download detailed product specifications and laboratory test reports
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="w-4 h-4" />
                      Product Datasheet
                    </Button>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Download className="w-4 h-4" />
                      Lab Report (PDF)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
