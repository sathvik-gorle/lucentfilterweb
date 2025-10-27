"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Droplets, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import pilotsData from "@/data/pilots.json"

export function PilotMap() {
  const [isMounted, setIsMounted] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !mapContainerRef.current) return

    const mapContainer = mapContainerRef.current
    
    // Avoid duplicate maps
    if ((mapContainer as any)._leafletMapInitialized) return
    ;(mapContainer as any)._leafletMapInitialized = true

    const ensureLeafletLoaded = () => {
      return new Promise<any>((resolve) => {
        if (typeof window !== "undefined" && (window as any).L) {
          resolve((window as any).L)
          return
        }

        // Inject CSS if not present
        const existingCss = document.querySelector('link[href*="leaflet.css"]') as HTMLLinkElement | null
        if (!existingCss) {
          const css = document.createElement("link")
          css.rel = "stylesheet"
          css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          css.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          css.crossOrigin = ""
          document.head.appendChild(css)
        }

        // Inject JS if not present
        const existingScript = document.querySelector('script[src*="leaflet@1.9.4"]') as HTMLScriptElement | null
        if (existingScript) {
          existingScript.addEventListener("load", () => resolve((window as any).L))
          return
        }
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        script.crossOrigin = ""
        script.async = true
        script.onload = () => resolve((window as any).L)
        document.body.appendChild(script)
      })
    }

    ensureLeafletLoaded().then((L: any) => {
      if (!L) return
      const map = L.map(mapContainer, {
        center: [15, 10],
        zoom: 2,
        worldCopyJump: true,
      })

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map)

      const bounds: any[] = []
      ;(pilotsData as any).pilots.forEach((p: any) => {
        if (!Array.isArray(p.coords)) return
        const latlng = L.latLng(p.coords[0], p.coords[1])
        bounds.push(latlng)
        const marker = L.circleMarker(latlng, {
          radius: 8,
          color: "#16a34a",
          weight: 2,
          fillColor: "#22c55e",
          fillOpacity: 0.6,
        })
        marker.bindPopup(`<strong>${p.location}</strong><br/>${p.partner ?? ""}`)
        marker.addTo(map)
      })

      if (bounds.length > 0) {
        map.fitBounds(L.latLngBounds(bounds), { padding: [30, 30] })
      }

      // Store map instance for cleanup
      ;(mapContainer as any)._leafletMapInstance = map
    })
  }, [isMounted])

  const pilots = [
    {
      id: "forafrika-africa",
      location: "Clean Water and Sanitation Africa Cameroon",
      country: "🇨🇲 Cameroon",
      coordinates: "5.963°N, 10.159°E",
      partner: "Clean Water and Sanitation Africa Cameroon",
      peopleServed: 480,
      householdsEst: 80,
      dailyWaterLiters: 1440,
      annualWaterLiters: 525600,
      filtersInstalled: 4,
      status: "Active",
      description: "CWASAF is a non-profit organization promoting proper hygiene, sanitation, and environmental protection in Cameroon. Lucent installed 4 filters across community water points to provide reliable daily access to safe drinking water for 480 people.",
      image: "/placeholder.jpg",
      highlights: [
        "4 filters deployed",
        "~90% nitrate reduction",
        "90–99% PFAS removal",
        "99.99% microbe inactivation",
        "96% uptime"
      ],
      website: "https://www.cameroonheroes.gaicam.ngo/member/clean-water-and-sanitation-africa-cwasaf/",
      labelType: "people"
    },
    {
      id: "daffodils-kochi",
      location: "Daffodils Ladies Hostel",
      country: "🇮🇳 Kochi, India",
      coordinates: "10.014°N, 76.363°E",
      partner: "Daffodils Ladies Hostel",
      residentsServed: 190,
      dailyWaterLiters: 570,
      annualWaterLiters: 207900,
      filtersInstalled: 4,
      status: "Active",
      description: "Women's residential hostel near Infopark, Kakkanad. Lucent installed 4 filters providing safe, on-site drinking water for 190 residents and staff.",
      image: "/placeholder.jpg",
      highlights: [
        "4 filters deployed",
        "~190 residents served",
        "90% nitrate reduction",
        "97% PFAS removal",
        "97% uptime"
      ],
      website: "https://www.justdial.com/Ernakulam/Daffodils-Ladies-Hostel-Nr-Motus-Burrows-Apartment-Rajagiri-Valley/0484PX484-X484-190123122328-S2A2_BZDET",
      labelType: "residents"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <Badge className="mb-6 px-6 py-3 text-base font-bold bg-primary/10 text-primary border-2 border-primary/30 shadow-lg">
            🌍 Global Deployments
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Global Deployments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lucent has deployed <strong className="text-foreground">8 water filters</strong> across Cameroon and India through partnerships with Clean Water and Sanitation Africa Cameroon and Daffodils Ladies Hostel, providing approximately <strong className="text-foreground">734,000 liters</strong> of clean water annually to <strong className="text-foreground">670 people</strong>.
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto mt-4">
            * Drinking water only: 3L/person/day × 365 days (WHO standard). Total water needs: 7.5-15L/day per person.
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-2xl mx-auto mt-2">
            Note: Actual filtration throughput varies by cartridge capacity (10,000-40,000L) and contaminant load.
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-2xl mx-auto mt-3 space-y-1">
            <span className="block font-semibold">How we calculated this:</span>
            <span className="block">• CWASAF Cameroon: 480 people × 3L/day × 365 = 525,600 L/year</span>
            <span className="block">• Daffodils: 190 residents × 3L/day × 365 = 207,900 L/year</span>
            <span className="block">• Total: 733,500 L/year drinking water capacity</span>
          </p>
        </motion.div>

        {/* Map Visualization */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-muted/50 to-background border-2 shadow-2xl">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden border-2 border-border/50">
              {isMounted ? (
                <div ref={mapContainerRef} className="absolute inset-0" />
              ) : (
                <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
                  <p className="text-muted-foreground">Loading map...</p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center space-y-2">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">8 Lucent filters deployed</strong> • Serving 670 people across Cameroon & India
              </p>
              <p className="text-xs text-muted-foreground/70">
                Total annual capacity: ~734K L/year (drinking water)
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Pilot Details Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pilots.map((pilot, index) => (
            <motion.div
              key={pilot.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <Card className="h-full card-elevated hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{pilot.location}</h3>
                          <p className="text-sm text-muted-foreground">{pilot.coordinates}</p>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-700 border-green-500/30 font-semibold">
                      {pilot.status}
                    </Badge>
                  </div>

                  {/* Partner */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm">Partner: <strong className="text-foreground">{pilot.partner}</strong></span>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {pilot.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          {pilot.labelType === "residents" ? "Residents Served" : "People Served"}
                        </span>
                      </div>
                      <p className="text-2xl font-bold">
                        {pilot.labelType === "residents" ? pilot.residentsServed : pilot.peopleServed}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Droplets className="w-4 h-4" />
                        <span className="text-xs font-medium">Annual Water (L)</span>
                      </div>
                      <p className="text-2xl font-bold">
                        {pilot.annualWaterLiters >= 1000000 
                          ? `${(pilot.annualWaterLiters / 1000000).toFixed(2)}M`
                          : `${(pilot.annualWaterLiters / 1000).toFixed(0)}K`}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4">
                    {pilot.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

