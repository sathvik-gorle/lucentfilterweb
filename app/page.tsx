import { Hero } from "@/components/hero"
import { DemoVideo } from "@/components/demo-video"
import { ComparisonTable } from "@/components/comparison-table"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { LucentSolutionSection } from "@/components/content-sections/lucent-solution"
import { HeroStats } from "@/components/hero-stats"
import { PilotMap } from "@/components/pilot-map"
import { ProductShowcase } from "@/components/product-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <DemoVideo />
      {/* <section className="py-12 md:py-14 bg-muted/10">
        <div className="container mx-auto px-4">
          <HeroStats />
        </div>
      </section> */}
      <ProductShowcase />
      {/* <PilotMap /> */}
      <LucentSolutionSection />
      <ComparisonTable />
      <FAQ />
      <Footer />
    </main>
  )
}
