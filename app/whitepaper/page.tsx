import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Award } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="px-6 py-3 text-base font-bold bg-accent text-accent-foreground shadow-lg">
              <FileText className="w-5 h-5 inline mr-2" />
              Technical Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Lucent Water Filter Whitepaper
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive, research-backed overview of the science and engineering behind regenerable ion-exchange + UV-C filtration
            </p>
            <div className="flex items-center justify-center gap-3 pt-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 inline mr-2" />
                💎 Diamond Challenge Finalist 2025
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto shadow-2xl border-2">
            <CardContent className="p-8 md:p-16">
              <article className="prose prose-lg prose-slate max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-8 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-accent/30 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-accent prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-li:text-lg prose-li:leading-relaxed prose-strong:text-accent prose-strong:font-bold">
                
                <h1>
                  Lucent: A Regenerable Ion-Exchange & UV Well Water Filter for Safe, Affordable Drinking Water
                </h1>

                <div className="not-prose bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg mb-12">
                  <p className="text-base text-muted-foreground mb-2 font-semibold">Executive Summary</p>
                  <p className="text-lg leading-relaxed">
                    Lucent addresses the critical need for affordable, comprehensive water treatment in rural communities. 
                    By combining regenerable ion-exchange resin with UV-C disinfection in a 3D-printed housing, Lucent removes 
                    both chemical contaminants (nitrates, PFAS) and microbial pathogens—filling a crucial gap in current water 
                    treatment solutions.
                  </p>
                </div>

                <h2>1. Introduction</h2>
                
                <p>
                  Access to clean drinking water is a fundamental human right, recognized by the United Nations in 2010. 
                  Yet billions of people worldwide still lack safe water, with rural communities being especially vulnerable. 
                  These communities often rely on untreated well water that may be contaminated with both chemicals and microbes.
                </p>

                <p>
                  Globally, approximately <strong>2.5 billion people</strong> depend on groundwater (wells and aquifers) to meet 
                  basic water needs. In the United States alone, more than <strong>13 million households</strong> rely on private 
                  wells for drinking water. Unlike municipal water supplies, private wells are not regulated by the EPA, leaving 
                  well owners responsible for testing and treating their water. This combination of high dependence on wells and 
                  lack of oversight has created a pressing need for low-cost, effective, and user-friendly water purification 
                  solutions for rural areas.
                </p>

                <div className="not-prose bg-primary/5 border border-primary/20 p-6 rounded-lg my-8">
                  <p className="text-lg font-semibold text-primary mb-2">🏆 Recognition</p>
                  <p className="text-base leading-relaxed">
                    Lucent was recognized as a finalist in the 2025 Diamond Challenge for its innovative design: 
                    "an affordable, 3D-printed well-water filter using regenerable ion exchange resin for safe, easy rural use."
                  </p>
                </div>

                <p>
                  The Lucent filter targets a common gap in current solutions by removing both chemical contaminants and 
                  microbial pathogens from well water. This paper provides a research-backed overview of the science and 
                  engineering behind Lucent, demonstrating why its multi-phase design offers a comprehensive water filtration 
                  solution for rural communities.
                </p>

                <h2>2. The Challenge: Contaminated Well Water in Rural Communities</h2>

                <h3>2.1 Global Reliance on Well Water</h3>
                <p>
                  Millions of rural families obtain drinking water from private wells and boreholes. Groundwater is a critical 
                  resource, supplying roughly half of the world's drinking water and a large share of irrigation water. In the 
                  U.S., an estimated 45 million residents (13+ million households) use private wells. This decentralized water 
                  source often lacks any treatment or regular monitoring.
                </p>

                <h3>2.2 Agricultural Runoff (Nitrates)</h3>
                <p>
                  <strong>Nitrates</strong> are among the most prevalent contaminants in groundwater. Major sources include 
                  chemical fertilizers, livestock manure, and septic systems. Nitrate is odorless and tasteless, but high levels 
                  in drinking water are dangerous—especially for infants—causing methemoglobinemia ("blue baby syndrome") which 
                  interferes with oxygen transport in blood.
                </p>

                <p>
                  The U.S. Geological Survey found nitrate to be the most common inorganic pollutant in private wells, frequently 
                  exceeding the EPA's 10 mg/L limit in agricultural regions. A national risk model estimated over <strong>1 million 
                  private well users</strong> are in areas where groundwater nitrate is above the safe drinking limit. Beyond infant 
                  risks, long-term nitrate intake is linked to higher rates of certain cancers and thyroid disorders.
                </p>

                <h3>2.3 Industrial Pollutants and "Forever Chemicals" (PFAS)</h3>
                <p>
                  Per- and polyfluoroalkyl substances (<strong>PFAS</strong>)—"forever chemicals"—have gained prominence as a 
                  serious drinking water threat. Used in firefighting foams, nonstick coatings, and industrial processes, PFAS 
                  are extraordinarily persistent and have been detected in water supplies across the globe.
                </p>

                <p>
                  A 2022 U.S. Geological Survey study spanning 16 states found PFAS in <strong>20% of tested private wells</strong>. 
                  With approximately 43 million Americans on private well water, this suggests millions of rural residents may be 
                  unknowingly exposed to PFAS. These chemicals pose serious health risks including cancers, developmental issues, 
                  liver and thyroid disease, and immune system suppression. Compounds like PFOS and PFOA are toxic even at 
                  parts-per-trillion levels.
                </p>

                <h3>2.4 Pathogenic Microorganisms</h3>
                <p>
                  Microbial contamination is another frequent hazard for well users. Unlike city water (which is chlorinated/treated), 
                  well water can harbor bacteria, viruses, and parasites from sewage, septic leachate, animal waste, or surface runoff. 
                  Common culprits include coliform bacteria (e.g., E. coli), viruses, and protozoan parasites like Giardia and 
                  Cryptosporidium.
                </p>

                <p>
                  These pathogens cause gastrointestinal illnesses and can be life-threatening, especially for children or 
                  immunocompromised individuals. Surveys in rural areas often find a significant percentage of wells positive for 
                  coliforms, particularly after heavy rains or flooding.
                </p>

                <h3>2.5 Limitations of Current Solutions</h3>
                <p>
                  Households facing contaminated well water have several options, but each has significant drawbacks:
                </p>

                <ul>
                  <li>
                    <strong>Boiling or Chemical Disinfection:</strong> Kills bacteria/viruses but is fuel-intensive, impractical 
                    for large volumes, and doesn't remove chemicals. Boiling can actually increase nitrate concentration by evaporation.
                  </li>
                  <li>
                    <strong>Carbon Filters:</strong> Improve taste/odor but do not remove nitrates at all, and only specialized 
                    carbon filters can partially remove some PFAS. Standard filters also have limited capacity and don't address 
                    microbial contamination.
                  </li>
                  <li>
                    <strong>Reverse Osmosis (RO):</strong> Highly effective broad-spectrum treatment but cost-prohibitive for many 
                    rural households ($500-$3,000+ upfront). RO also wastes 20-50% of feed water as brine, requires high pressure 
                    and power, and produces water slowly.
                  </li>
                  <li>
                    <strong>Ion-Exchange Softeners:</strong> Effective for specific targets (softening, nitrate removal) but 
                    typically don't target PFAS and have no disinfection capability. A homeowner would need multiple systems to 
                    cover all contaminants.
                  </li>
                </ul>

                <div className="not-prose bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-lg my-8">
                  <p className="text-base font-bold text-destructive mb-2">⚠️ The Market Gap</p>
                  <p className="text-base leading-relaxed">
                    There is a clear need for a single, affordable device that can tackle both chemical toxins (nitrates, PFAS) 
                    and microbial risks in well water. This is the gap that Lucent aims to fill.
                  </p>
                </div>

                <h2>3. The Lucent Solution: Science-Backed Multi-Stage Filtration</h2>

                <h3>3.1 Design Overview</h3>
                <p>
                  Lucent is a multi-stage water filtration system that combines a regenerable ion-exchange resin cartridge with 
                  UV disinfection in a robust, 3D-printed housing. Each component addresses a specific category of contaminants, 
                  and together they deliver comprehensive treatment.
                </p>

                <h3>3.2 Ion-Exchange Resin Filter – Removing "Forever Chemicals" & Nitrates</h3>
                <p>
                  The first stage is a cartridge packed with a specialty ion-exchange resin blend. As raw well water flows through, 
                  this resin acts like a magnet for hazardous anions such as nitrate (NO₃⁻) and PFAS molecules. Ion-exchange resins 
                  contain charged functional groups that can swap harmless ions for target contaminants.
                </p>

                <p>
                  In Lucent's case, the resin is formulated to capture nitrate, sulfate, and negatively charged PFAS (like PFOA, PFOS), 
                  and even some heavy metals or arsenic species. As water passes, contaminants stick to the resin, and safe ions 
                  (e.g., chloride) are released, reducing pollutant levels dramatically.
                </p>

                <div className="not-prose bg-accent/5 p-6 rounded-lg my-8">
                  <p className="text-base font-semibold mb-3">📊 Performance Data</p>
                  <ul className="space-y-2 text-base">
                    <li>• <strong>Nitrate Removal:</strong> Nitrate-selective resins can remove <strong>≥90%</strong> of nitrates</li>
                    <li>• <strong>PFAS Removal:</strong> Strong-base resin achieves <strong>90-99%</strong> removal of PFOA/PFOS</li>
                    <li>• <strong>Proven Technology:</strong> Ion exchange is an established method for well water treatment</li>
                  </ul>
                </div>

                <h3>3.3 UV Ultraviolet Disinfection – Neutralizing Bacteria and Viruses</h3>
                <p>
                  After passing through the resin filter, water enters the UV disinfection chamber. Ultraviolet light (specifically 
                  UV-C at ~254 nm wavelength) is a powerful disinfectant that inactivates microorganisms by damaging their DNA/RNA. 
                  Lucent's UV stage bathes the filtered water in germicidal UV light, ensuring that any bacteria, viruses, or 
                  protozoan cysts are rendered harmless.
                </p>

                <div className="not-prose bg-accent/5 p-6 rounded-lg my-8">
                  <p className="text-base font-semibold mb-3">💡 UV-C Effectiveness</p>
                  <ul className="space-y-2 text-base">
                    <li>• Kills <strong>99.99%</strong> of viruses</li>
                    <li>• Kills <strong>99.9999%</strong> of bacteria</li>
                    <li>• Effective against chlorine-resistant cysts like Giardia</li>
                    <li>• No chemicals added—preserves taste and avoids byproducts</li>
                    <li>• Works instantly as water flows</li>
                  </ul>
                </div>

                <p>
                  Lucent's design places the UV stage after the resin filter. This has two key benefits: (a) the resin filter removes 
                  turbidity or particles that could shadow microbes from UV, and (b) the UV provides a final guarantee of safety, 
                  inactivating any bacteria that may have passed through the resin. This two-tier approach ensures the output water 
                  is safe on both chemical and biological counts.
                </p>

                <h3>3.4 3D-Printed Modular Housing</h3>
                <p>
                  All filter components are integrated into a custom-designed 3D-printed cartridge and housing. 3D printing was chosen 
                  for several strategic reasons:
                </p>

                <ul>
                  <li><strong>Rapid Prototyping:</strong> New designs can be printed and tested in days</li>
                  <li><strong>Cost-Effective:</strong> Made from inexpensive, widely available plastics (PLA, PETG)</li>
                  <li><strong>Complex Geometries:</strong> Enables internal structures that would be costly with conventional manufacturing</li>
                  <li><strong>Decentralized Production:</strong> Regional groups, NGOs, or individuals with 3D printers could produce parts on-site</li>
                </ul>

                <p>
                  This approach reduces dependency on large factories and enables local production. The bill of materials is estimated 
                  at approximately <strong>$40 per unit</strong>, enabling a projected retail price of around <strong>$150</strong>—significantly 
                  more affordable than comparable systems.
                </p>

                <h3>3.5 Regenerability and Maintenance</h3>
                <p>
                  A core feature of Lucent is that the resin can be <strong>regenerated</strong> rather than thrown away. Traditional 
                  cartridge filters must be discarded when spent, but Lucent's ion-exchange bed is designed to be periodically 
                  "recharged" with a brine or chemical solution to flush out captured contaminants—similar to how home water softeners 
                  work.
                </p>

                <p>
                  The Lucent kit includes instructions and supplies for regeneration. After treating a certain volume of water, the 
                  user passes a regeneration solution through the cartridge to restore its effectiveness. This extends the cartridge 
                  lifespan almost indefinitely, requiring only periodic addition of salt or regenerant.
                </p>

                <h2>4. Social and Economic Impact</h2>

                <h3>4.1 Affordability and Accessibility</h3>
                <p>
                  At an estimated retail price of $150, Lucent is within reach of many rural households and small communities. 
                  This is particularly significant when compared to alternatives:
                </p>

                <ul>
                  <li>UV purifiers alone: $200+</li>
                  <li>Multi-stage RO systems: $500-$3,000+</li>
                  <li>Multiple specialized filters: $300-$1,000+</li>
                </ul>

                <h3>4.2 Market Opportunity</h3>
                <p>
                  The potential impact is substantial:
                </p>

                <div className="not-prose bg-primary/5 p-6 rounded-lg my-8">
                  <p className="text-base font-semibold mb-3">📈 Market Analysis</p>
                  <ul className="space-y-2 text-base">
                    <li>• <strong>U.S. Market:</strong> 13 million well-reliant households = $1.95 billion market opportunity</li>
                    <li>• <strong>High-Risk Segment:</strong> 2 million households in contaminated areas = $300 million focused market</li>
                    <li>• <strong>Global Need:</strong> Tens of millions of rural families in South Asia, Africa, and elsewhere face similar challenges</li>
                  </ul>
                </div>

                <h3>4.3 Current Deployments</h3>
                <p>
                  Lucent has deployed 8 water filters across Africa and India through partnerships with ForAfrika and 
                  Daffodils Ladies Hostel, providing over <strong>1.3 million liters</strong> of clean water annually to 
                  <strong>670 people</strong>. Field testing continues to validate performance and gather real-world usage data.
                </p>

                <h2>5. Conclusion</h2>

                <p>
                  Lucent represents a holistic solution to the drinking water challenges faced by rural well users. By fusing 
                  advanced water treatment methods with smart, user-centric design, it overcomes the shortcomings of existing 
                  options and provides a single, easy-to-use device that addresses multiple contaminants simultaneously.
                </p>

                <p>
                  The scientific basis for Lucent's effectiveness is well-established—ion-exchange resins have demonstrated 
                  high removal efficiency for toxic anions like nitrates and PFAS, and UV disinfection is proven to inactivate 
                  waterborne pathogens without chemicals. What makes Lucent unique is how these technologies are packaged into 
                  a regenerable, customizable unit tailored for low-resource settings.
                </p>

                <div className="not-prose bg-accent/10 border-2 border-accent/30 p-8 rounded-lg my-12">
                  <p className="text-xl font-bold text-accent mb-4">Looking Forward</p>
                  <p className="text-base leading-relaxed mb-4">
                    The project will continue to gather data from pilot programs, refine resin formulations for different 
                    contaminants, and pursue partnerships to scale production.
                  </p>
                  <p className="text-base leading-relaxed">
                    The vision is to see Lucent filters deployed in communities around the world—from American farmlands to 
                    African communities—providing sustainable, affordable, and comprehensive water filtration for rural areas globally.
                  </p>
                </div>

                <div className="not-prose mt-16 pt-8 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    Created by Sathvik Gorle, Arjun Rawal, and Hadi Abdul<br />
                    💎 Diamond Challenge Finalist 2025
                  </p>
                </div>

              </article>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
