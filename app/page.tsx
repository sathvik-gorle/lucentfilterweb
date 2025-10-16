import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { ProductHighlights } from "@/components/product-highlights"
import { DemoVideo } from "@/components/demo-video"
import { TechnicalDeepDive } from "@/components/technical-deep-dive"
import { EffectivenessStats } from "@/components/effectiveness-stats"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ComparisonTable } from "@/components/comparison-table"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <DemoVideo />
      <TestimonialCarousel />
      <SocialProof />
      <ProductHighlights />
      <TechnicalDeepDive />
      <EffectivenessStats />
      <ComparisonTable />
      <FAQ />
      <Footer />
    </main>
  )
}
