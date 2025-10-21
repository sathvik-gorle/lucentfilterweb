"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Does Lucent remove PFAS from water?",
      answer:
        "Yes. Laboratory testing under controlled conditions (200-300 ng/L inlet concentration, 0.5 GPM flow rate, pH 7.5, clear water) shows Lucent removes 90-99% of long-chain PFOA and PFOS. Actual field performance will vary based on local water chemistry, competing ions (sulfate, bicarbonate), total organic carbon (TOC), and flow rate. Regular water testing is recommended to verify outlet concentrations meet safety targets.",
    },
    {
      question: "How does ion-exchange compare to activated carbon for PFAS removal?",
      answer:
        "Ion-exchange resin is significantly more effective than standard activated carbon for PFAS removal. While carbon relies primarily on physical adsorption, ion-exchange creates strong electrostatic bonds with PFAS molecules. This results in higher removal rates (90-99% vs. 50-70%) and longer filter life before breakthrough occurs.",
    },
    {
      question: "How long does a cartridge last?",
      answer:
        "Filter lifespan depends on inlet contaminant concentration, water chemistry, and usage. For moderate contamination levels (10-50 mg/L nitrate or <1 µg/L PFAS), cartridges typically treat 10,000-40,000 liters (2,600-10,500 gallons) or 6-12 months before regeneration or replacement is needed. Performance monitoring via water testing is recommended.",
    },
    {
      question: "Can the ion-exchange resin be regenerated indefinitely?",
      answer:
        "For nitrate removal, the resin can be regenerated multiple times using salt brine (10% NaCl solution), similar to water softener regeneration. For PFAS applications, regeneration is more complex due to the strong binding of PFAS molecules and waste management concerns. Most residential PFAS filters are single-use until safe regeneration protocols and waste disposal methods are established. Resin service life is typically 3-5 years with proper maintenance before replacement is needed.",
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
    <section id="faq" className="py-20 md:py-24 bg-muted/10 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Technical answers to common questions about Lucent filtration</p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-xl px-6 py-2 bg-card shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-semibold hover:no-underline text-base md:text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
