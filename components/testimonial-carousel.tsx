"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Daffodils Pilot",
      location: "Field Test",
      quote: "Real-world pilot demonstration showing the effectiveness of our filtration system.",
      rating: 5,
      videoThumb: "/daffodils-testimonial-thumbnail.png",
      videoSrc: "/daffodils-testimonial.mov",
    },
    {
      name: "Kerry - Daffodils",
      location: "Live Water Testing",
      quote: "Live feedback and testimonial from on-site water testing with our filtration technology.",
      rating: 5,
      videoThumb: "/daffodils-kerry-testimonial-thumbnail.png",
      videoSrc: "/daffodils-kerry-testimonial.mp4",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 scroll-mt-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Real Users, Real Results</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
              Hear from customers who trust Lucent for their water filtration needs
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <Card className="max-w-3xl mx-auto shadow-2xl">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Video thumbnail - larger */}
                        <motion.div
                          className="relative aspect-square rounded-lg overflow-hidden bg-muted group cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img
                            src={testimonials[currentIndex].videoThumb || "/placeholder.svg"}
                            alt={`${testimonials[currentIndex].name} testimonial`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                            <motion.div
                              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center"
                              whileHover={{ scale: 1.15 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Testimonial content */}
                        <div className="space-y-6">
                          <div className="flex gap-1" aria-label={`${testimonials[currentIndex].rating} stars`}>
                            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                              >
                                <Star className="w-6 h-6 fill-accent text-accent" />
                              </motion.div>
                            ))}
                          </div>
                          <p className="text-xl leading-relaxed">"{testimonials[currentIndex].quote}"</p>
                          <div>
                            <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
                            <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex ? "bg-accent w-10" : "bg-muted-foreground/30 w-2.5"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
