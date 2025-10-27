"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function DemoVideo() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const videos = [
    {
      title: "How Lucent Works",
      description: "Ion-exchange + UV-C filtration explained",
      thumbnail: "/water-filtration-system-diagram-technical.jpg",
      duration: "4:32",
    },
    {
      title: "Daffodils Pilot - Field Test",
      description: "Real-world pilot demonstration of our filtration system",
      thumbnail: "/daffodils-testimonial-thumbnail.png",
      videoSrc: "/daffodils-testimonial.mov",
      duration: "2:15",
    },
    {
      title: "Daffodils - Live Water Testing",
      description: "Kerry's feedback from on-site water testing",
      thumbnail: "/daffodils-kerry-testimonial-thumbnail.png",
      videoSrc: "/daffodils-kerry-testimonial.mp4",
      duration: "3:45",
    }
  ]

  return (
    <section id="demo" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <Badge className="mb-6 px-6 py-3 text-base font-bold bg-accent text-accent-foreground shadow-xl">
            📹 Video Demonstrations
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            See Lucent in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world deployments and live feedback from Daffodils pilot testing
          </p>
        </motion.div>

        {/* Main Featured Video */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(0)}>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/50 via-primary/50 to-accent/50 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
            
            <Card className="relative overflow-hidden border-4 border-accent/40 group-hover:border-accent/70 transition-all duration-500 shadow-2xl">
              <div className="relative aspect-video bg-black">
                {/* Thumbnail */}
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  {/* Play Button */}
                  <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-accent flex items-center justify-center shadow-2xl border-8 border-white/30">
                      <Play className="w-18 h-18 md:w-24 md:h-24 text-white ml-2" fill="white" />
                    </div>
                  </motion.div>
                  
                  {/* Video Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 text-white" />
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-white/40 px-4 py-2 text-base font-bold">
                        {videos[0].duration}
                      </Badge>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
                      {videos[0].title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/95 drop-shadow-lg max-w-2xl mx-auto">
                      {videos[0].description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Secondary Videos */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {videos.slice(1).map((video, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedVideo(index + 1)}
            >
              <Card className="overflow-hidden border-4 border-border/80 group-hover:border-accent/70 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                <div className="relative aspect-video bg-black">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-28 h-28 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border-4 border-white/50 group-hover:bg-accent group-hover:border-white/70 transition-all duration-300"
                      whileHover={{ scale: 1.15 }}
                    >
                      <Play className="w-14 h-14 text-white ml-1.5" fill="white" />
                    </motion.div>
                  </div>
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white" />
                        <Badge className="bg-white/25 backdrop-blur-md text-white border-white/40 text-sm font-bold">
                          {video.duration}
                        </Badge>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                        {video.title}
                      </h4>
                      <p className="text-base md:text-lg text-white/90 drop-shadow-md">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
                  aria-label="Close video"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Video Player */}
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                  {videos[selectedVideo].videoSrc ? (
                    <video
                      src={videos[selectedVideo].videoSrc}
                      controls
                      autoPlay
                      className="w-full h-full"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="flex items-center justify-center h-full text-white">
                      <p>Video preview coming soon</p>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="mt-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{videos[selectedVideo].title}</h3>
                  <p className="text-white/80">{videos[selectedVideo].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
