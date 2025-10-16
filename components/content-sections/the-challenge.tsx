"use client"

import { FiveBoxSection } from "@/components/five-box-section"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"

export function TheChallengeSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="container-wide content-space">
          <SectionHeader
            badge="The Problem"
            title="The Challenge: Contaminated Well Water"
            description="Rural communities worldwide rely on private wells that often go unregulated and untreated, exposing millions to dangerous chemical and biological contaminants."
          />

          <FiveBoxSection
            tldr="Rural families rely on private wells that often go unregulated and untreated, exposing them to nitrates, PFAS, and microbial pathogens."
            whyItMatters={[
              "Billions lack safe water; ~2.5B depend on groundwater globally",
              "In the U.S., 13M+ households use private wells (not EPA-regulated)",
              "Risks include nitrates (agricultural runoff), PFAS (industrial 'forever chemicals'), and microbes (E. coli, Giardia, viruses)",
            ]}
            keyFacts={[
              {
                fact: "Nitrate often exceeds 10 mg/L MCL in agricultural regions, causing infant methemoglobinemia and linked to cancers",
                citation: "WQA",
              },
              {
                fact: "USGS detected PFAS in ~20% of private wells tested (parts-per-trillion concern)",
                citation: "Guardian",
              },
              {
                fact: "Microbial contamination spikes after rains/flooding; boiling concentrates nitrates rather than removing them",
                citation: "EPA",
              },
            ]}
            lucentApproach="Design for BOTH chemicals AND microbes in one affordable, regenerable unit combining ion-exchange resin (for nitrates & PFAS) with UV-C disinfection (for pathogens)."
            proofSources={[
              { text: "EPA – Private Wells", link: "#references" },
              { text: "WQA – Nitrate/Nitrite", link: "#references" },
              { text: "USGS/PFAS Study", link: "#references" },
              { text: "WA Health – UV Disinfection", link: "#references" },
            ]}
          />

          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: "🌾",
                title: "Agricultural Runoff",
                description: "Fertilizers, livestock manure, and septic systems leach nitrates into groundwater. High levels cause \"blue baby syndrome\" in infants and are linked to thyroid disorders and certain cancers.",
                delay: 0
              },
              {
                icon: "⚠️",
                title: "Forever Chemicals",
                description: "PFAS from firefighting foams, nonstick coatings, and industrial processes persist indefinitely in water. Exposure is linked to cancers, developmental issues, liver disease, and immune suppression.",
                delay: 0.1
              },
              {
                icon: "🦠",
                title: "Pathogenic Microorganisms",
                description: "Bacteria (E. coli), viruses, and parasites (Giardia, Cryptosporidium) from sewage, septic leachate, and animal waste cause gastrointestinal illness and can be life-threatening.",
                delay: 0.2
              }
            ].map((threat, index) => (
              <motion.div
                key={index}
                className="group relative card-elevated p-8 bg-gradient-to-br from-destructive/10 via-destructive/5 to-background border-2 border-destructive/20 hover:border-destructive/40 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: threat.delay }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-destructive/20 flex items-center justify-center mb-6 group-hover:bg-destructive/30 transition-all duration-300 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-3xl">{threat.icon}</span>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-destructive relative">{threat.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative">
                  {threat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

