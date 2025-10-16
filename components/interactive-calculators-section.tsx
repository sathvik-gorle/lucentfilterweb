"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/section-header"
import { NitrateCalculator } from "@/components/interactive/nitrate-calculator"
import { PFASCalculator } from "@/components/interactive/pfas-calculator"
import { UVDoseHelper } from "@/components/interactive/uv-dose-helper"
import { BreakthroughSimulator } from "@/components/interactive/breakthrough-simulator"

export function InteractiveCalculatorsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="container-wide content-space">
          <SectionHeader
            badge="Try It Yourself"
            title="Interactive Performance Calculators"
            description="Explore Lucent's filtration performance with these interactive tools. Calculate nitrate and PFAS removal, estimate UV dose, and simulate resin breakthrough."
          />

          <Tabs defaultValue="nitrate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto h-14 md:h-16 p-1.5">
              <TabsTrigger value="nitrate" className="text-sm md:text-base font-semibold">Nitrate</TabsTrigger>
              <TabsTrigger value="pfas" className="text-sm md:text-base font-semibold">PFAS</TabsTrigger>
              <TabsTrigger value="uv" className="text-sm md:text-base font-semibold">UV Dose</TabsTrigger>
              <TabsTrigger value="breakthrough" className="text-sm md:text-base font-semibold">Breakthrough</TabsTrigger>
            </TabsList>

            <TabsContent value="nitrate" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <NitrateCalculator />
              </div>
            </TabsContent>

            <TabsContent value="pfas" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <PFASCalculator />
              </div>
            </TabsContent>

            <TabsContent value="uv" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <UVDoseHelper />
              </div>
            </TabsContent>

            <TabsContent value="breakthrough" className="mt-8">
              <div className="max-w-3xl mx-auto">
                <BreakthroughSimulator />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

