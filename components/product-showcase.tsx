"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { useState } from "react"

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const productImages = [
    {
      src: "/product-photos/IMG_8941.jpg",
      title: "Complete Housing",
      description: "3D-printed modular housing showing integrated cartridge design"
    },
    {
      src: "/product-photos/IMG_8944.jpg",
      title: "Vertical Assembly",
      description: "Standing filter design showing connection points and structure"
    },
    {
      src: "/product-photos/IMG_8949.jpg",
      title: "Exploded View",
      description: "Deconstructed assembly revealing all components and layers"
    },
    {
      src: "/product-photos/IMG_8953.jpg",
      title: "Component Layout",
      description: "Alternative angle showing parts arrangement and assembly order"
    },
    {
      src: "/product-photos/IMG_8956.jpg",
      title: "Scale Reference",
      description: "Physical measurements and dimensional specifications with measuring tools"
    },
    {
      src: "/product-photos/IMG_8959.jpg",
      title: "Measurement Documentation",
      description: "Detailed sizing verification with measurement tools for quality control"
    }
  ]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <section id="product-gallery" className="py-16 md:py-20 bg-background relative overflow-hidden scroll-mt-20">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Minimal Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <ImageIcon className="w-4 h-4" />
                Product Gallery
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                See The Hardware
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Explore our water filtration system in detail
              </p>
            </motion.div>

            {/* Slideshow Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-2 border-border/50 shadow-xl">
                <CardContent className="p-0">
                  {/* Main Featured Image */}
                  <div className="relative bg-gradient-to-br from-muted/30 to-background">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentIndex}
                          src={productImages[currentIndex].src}
                          alt={productImages[currentIndex].title}
                          className="w-full h-full object-contain p-8"
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-border/50 hover:bg-white dark:hover:bg-gray-900 shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-border/50 hover:bg-white dark:hover:bg-gray-900 shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                    </button>

                    {/* Fullscreen Button */}
                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-border/50 hover:bg-white dark:hover:bg-gray-900 shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
                      aria-label="View fullscreen"
                    >
                      <Expand className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                      {currentIndex + 1} / {productImages.length}
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-t border-accent/10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <ImageIcon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">
                            {productImages[currentIndex].title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {productImages[currentIndex].description}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Thumbnail Carousel */}
                  <div className="p-4 bg-muted/20 border-t border-border/50">
                    <div className="relative">
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent hover:scrollbar-thumb-accent/40">
                        {productImages.map((image, index) => (
                          <motion.button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentIndex
                                ? 'border-accent shadow-lg shadow-accent/20 scale-105'
                                : 'border-border/50 hover:border-accent/50 opacity-60 hover:opacity-100'
                            }`}
                            whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <img
                              src={image.src}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {index === currentIndex && (
                              <motion.div
                                className="absolute inset-0 border-2 border-accent rounded-lg"
                                layoutId="thumbnail-border"
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Keyboard Navigation Hint */}
            <motion.p
              className="text-center text-xs text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Use ← → arrow keys to navigate
            </motion.p>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsFullscreen(false)}
        >
          <motion.div
            className="relative w-full max-w-7xl max-h-[95vh] flex flex-col items-center justify-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center hover:rotate-90 duration-300"
              onClick={() => setIsFullscreen(false)}
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation in Fullscreen */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all flex items-center justify-center hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={productImages[currentIndex].src}
                alt={productImages[currentIndex].title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>

            {/* Image Info */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white font-semibold text-lg mb-1">
                {productImages[currentIndex].title}
              </p>
              <p className="text-white/70 text-sm">
                {currentIndex + 1} of {productImages.length}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// Add keyboard navigation
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      document.querySelector('[aria-label="Previous image"]')?.dispatchEvent(new Event('click'))
    } else if (e.key === 'ArrowRight') {
      document.querySelector('[aria-label="Next image"]')?.dispatchEvent(new Event('click'))
    } else if (e.key === 'Escape') {
      document.querySelector('[aria-label="Close"]')?.dispatchEvent(new Event('click'))
    }
  })
}

