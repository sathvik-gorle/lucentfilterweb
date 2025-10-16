"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Does Lucent remove PFAS from water?",
      answer:
        "Yes. Laboratory testing shows Lucent removes 95-99% of PFOA and PFOS under standard test conditions (200-300 ng/L inlet concentration, 0.5 GPM flow rate, pH 7.5). The ion-exchange resin is specifically designed to capture forever chemicals through high-affinity functional groups. See our lab results for detailed performance data.",
    },
    {
      question: "How does ion-exchange compare to activated carbon for PFAS removal?",
      answer:
        "Ion-exchange resin is significantly more effective than standard activated carbon for PFAS removal. While carbon relies primarily on physical adsorption, ion-exchange creates strong electrostatic bonds with PFAS molecules. This results in higher removal rates (95-99% vs. 50-70%) and longer filter life before breakthrough occurs.",
    },
    {
      question: "How long does a cartridge last?",
      answer:
        "Filter lifespan depends on inlet PFAS concentration and water usage. For a typical household with moderate contamination levels, cartridges last 6-9 months or approximately 1,500 gallons (5,700 liters). The system includes an LED indicator that alerts you when replacement is needed based on throughput and pressure differential.",
    },
    {
      question: "Does the filter reduce TDS (total dissolved solids)?",
      answer:
        "Lucent is designed specifically for PFAS and organic contaminant removal, not general TDS reduction. The ion-exchange process targets specific compounds while preserving beneficial minerals. If you need comprehensive TDS reduction, a reverse osmosis system may be more appropriate, though RO has lower flow rates and higher waste water.",
    },
    {
      question: "What flow rate and water pressure does Lucent provide?",
      answer:
        "Lucent operates at 0.5 gallons per minute (1.9 L/min) under normal household pressure (40-60 PSI). This flow rate is optimized to ensure sufficient contact time between water and resin for maximum PFAS removal. The system can handle pressures up to 80 PSI and temperatures up to 40°C (104°F).",
    },
    {
      question: "How do I dispose of spent cartridges?",
      answer:
        "Spent cartridges should be disposed of according to local regulations for ion-exchange resin waste. The resin contains captured PFAS and should not be placed in regular household trash. We provide a prepaid return program where used cartridges are sent to certified waste facilities for proper handling and potential resin regeneration.",
    },
    {
      question: "What warranty does Lucent come with?",
      answer:
        "Lucent includes a 1-year limited warranty covering manufacturing defects in materials and workmanship. The warranty covers the housing, fittings, and electronic components but does not cover normal filter cartridge replacement. We also offer a 30-day satisfaction guarantee for testing the system in your home.",
    },
    {
      question: "Is Lucent certified by NSF or other third parties?",
      answer:
        "Lucent is designed to meet NSF/ANSI 53 (health effects) and NSF/ANSI 42 (aesthetic effects) standards. All performance claims are verified through third-party laboratory testing following EPA Method 537.1 at NELAC/ELAP accredited facilities. Certification applications are in progress with NSF International and the Water Quality Association.",
    },
  ]

  return (
    <section id="faq" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12">Technical answers to common questions about Lucent</p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
