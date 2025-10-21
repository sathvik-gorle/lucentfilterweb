"use client"

import { FiveBoxSection } from "@/components/five-box-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplet, Zap, Box } from "lucide-react"

export function LucentSolutionSection() {
  return (
    <section id="tech" className="section-padding bg-muted/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="container-wide content-space">
          <SectionHeader
            badge="Multi-Stage Filtration"
            title="The Lucent Solution"
            description="Science-backed multi-stage filtration combining regenerable ion-exchange resin, UV-C disinfection, and 3D-printed modular housing—engineered for comprehensive well water treatment."
          />

          <Tabs defaultValue="ion-exchange" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto h-14 md:h-16 p-1.5">
              <TabsTrigger value="ion-exchange" className="text-sm md:text-base font-semibold">Ion-Exchange</TabsTrigger>
              <TabsTrigger value="uv" className="text-sm md:text-base font-semibold">UV-C</TabsTrigger>
              <TabsTrigger value="3d-printing" className="text-sm md:text-base font-semibold">3D Housing</TabsTrigger>
            </TabsList>

            <TabsContent value="ion-exchange" className="mt-8">
              <div className="space-y-8">
                <FiveBoxSection
                  tldr="Anion-exchange resins selectively capture nitrate (NO₃⁻) and acidic PFAS (PFOA/PFOS). Media is regenerable with brine, cutting waste and cost."
                  whyItMatters={[
                    "Ion exchange is a proven method for nitrate removal in wells",
                    "Strong-base resins achieve 90-99% PFAS removal, often outperforming carbon",
                    "Regenerable design extends cartridge lifespan almost indefinitely",
                  ]}
                  keyFacts={[
                    {
                      fact: "Nitrate-selective resins typically remove >90% of nitrates until breakthrough",
                      citation: "WQA",
                    },
                    {
                      fact: "Anion exchange achieves up to 99% uptake of PFOA/PFOS in treated water",
                      citation: "Lenntech",
                    },
                    {
                      fact: "Resin 'blend' can be customized for local contaminants (arsenate, uranium variants)",
                    },
                  ]}
                  lucentApproach="Specialty anion-exchange resin blend targets nitrates, sulfates, PFAS (PFOA/PFOS), and even some heavy metals. Regenerable with brine like home softeners, reducing ongoing cost and waste."
                  proofSources={[
                    { text: "Ion-exchange proven for nitrate removal in residential wells" },
                    { text: "Anion resins achieve 90-99% PFAS removal efficiency" },
                    { text: "Regenerable design extends filter lifespan" },
                  ]}
                />

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplet className="w-5 h-5 text-accent" />
                      How It Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src="/ion-exchange-resin-diagram-molecular-level-pfas-bi.jpg"
                        alt="Ion-exchange mechanism diagram"
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Functional Groups</h4>
                        <p className="text-muted-foreground">
                          Resin beads contain quaternary ammonium groups (R₄N⁺) that create strong electrostatic
                          attractions with anionic PFAS head groups.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Adsorption Process</h4>
                        <p className="text-muted-foreground">
                          PFAS molecules removed through ion-exchange and hydrophobic interactions. Perfluorinated tail
                          interacts with polymer matrix.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Selectivity</h4>
                        <p className="text-muted-foreground">
                          High selectivity for long-chain PFAS (C6-C14) including PFOA, PFOS, and emerging compounds
                          like GenX, with minimal interference.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="uv" className="mt-8">
              <div className="space-y-8">
                <FiveBoxSection
                  tldr="UV-C (~254 nm) disables microbes instantly by damaging DNA/RNA—no chemicals or byproducts. Placing UV after resin improves dose delivery."
                  whyItMatters={[
                    "UV kills 99.99% of viruses and 99.9999% of bacteria when properly applied",
                    "Effective against all common waterborne microbes, even chlorine-resistant cysts like Giardia",
                    "No chemical taste, no byproducts, and organisms cannot develop resistance",
                  ]}
                  keyFacts={[
                    {
                      fact: "NSF/ANSI 55 Class A requires 99.99% virus and 99.9% bacteria/protozoa inactivation",
                      citation: "WA Health",
                    },
                    {
                      fact: "UV disinfection is instantaneous as water flows and preserves taste",
                      citation: "ESP Water",
                    },
                    {
                      fact: "Resin pre-filtration removes turbidity/particles that could shadow microbes from UV",
                    },
                  ]}
                  lucentApproach="UV-C stage placed after resin filter ensures clear water for optimal dose delivery. Physical DNA/RNA damage inactivates bacteria, viruses, and parasites without chemicals."
                  proofSources={[
                    { text: "UV-C destroys 99.99% of viruses and bacteria" },
                    { text: "NSF/ANSI 55 Class A requires ≥40 mJ/cm² dose" },
                    { text: "More effective than chlorine for many pathogens" },
                  ]}
                />

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      UV-C Technology
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">How UV-C Works</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Ultraviolet light at ~254 nm wavelength penetrates microbial cell walls and disrupts DNA/RNA,
                          preventing reproduction. The UV stage bathes filtered water in germicidal light, ensuring any
                          bacteria, viruses, or protozoan cysts are rendered harmless before exiting the tap.
                        </p>
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <p className="text-sm">
                            <strong>Target Dose:</strong> ≥40 mJ/cm² (NSF/ANSI 55 Class A)
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Benefits of Downstream UV</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Resin removes turbidity for better UV transparency (UVT)</li>
                          <li>• Final safety guarantee even if bacteria pass through resin</li>
                          <li>• No chlorine taste or disinfection byproducts</li>
                          <li>• Works instantly as water flows through chamber</li>
                          <li>• Multi-barrier approach recommended by health experts</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="3d-printing" className="mt-8">
              <div className="space-y-8">
                <FiveBoxSection
                  tldr="Printed internals create longer contact time and easy service. Designs can be fabricated locally for resilience and low cost."
                  whyItMatters={[
                    "Rapid prototyping enables quick design iteration and optimization",
                    "Complex internal geometries maximize water-resin contact time",
                    "Digital designs can be transmitted and fabricated locally, eliminating shipping delays",
                  ]}
                  keyFacts={[
                    {
                      fact: "3D printing enables compact, customized filtration systems using common plastics (PLA/PETG)",
                      citation: "PLOS ONE",
                    },
                    {
                      fact: "Production can be decentralized—regional groups/NGOs could print spare parts on-site",
                      citation: "PopSci",
                    },
                    {
                      fact: "Bill of materials around $40 per unit, drastically lower than typical RO systems",
                    },
                  ]}
                  lucentApproach="Custom-designed 3D-printed cartridge and housing made from food-grade plastics. Modular design means parts like resin cartridge and UV lamp can be replaced without replacing the whole unit."
                  proofSources={[
                    { text: "3D printing enables customized filtration systems" },
                    { text: "Digital files allow local manufacturing worldwide" },
                  ]}
                />

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Box className="w-5 h-5 text-accent" />
                      3D-Printed Modular Housing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Design Advantages</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Custom lattice structures and baffles for optimal flow</li>
                          <li>• All-in-one printed geometry (no assembly)</li>
                          <li>• Easy to modify for different pipe sizes or pre-filters</li>
                          <li>• Lightweight and durable food-grade materials</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Local Production Model</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Share/license digital design files globally</li>
                          <li>• Communities can produce spare parts on-site</li>
                          <li>• Eliminates import costs and shipping delays</li>
                          <li>• Mass customization for local water conditions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Sustainability:</strong> Modular parts support longevity—replace only what's needed
                        (resin, UV lamp, seals) rather than discarding entire units. Regenerable media further reduces
                        waste.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

