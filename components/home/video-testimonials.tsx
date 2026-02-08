"use client"

import { useState, useCallback, useEffect } from "react"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { VIDEO_TESTIMONIALS } from "@/lib/videos"
import { VideoModal } from "./video-modal"

export function VideoTestimonials() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    slidesToScroll: 1,
  })

  // Auto-scroll carousel
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext()
      }
    }, 4000)

    return () => clearInterval(autoplay)
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const openVideo = (index: number) => {
    setSelectedVideoIndex(index)
  }

  const closeVideo = () => {
    setSelectedVideoIndex(null)
  }

  const nextVideo = () => {
    if (selectedVideoIndex === null) return
    setSelectedVideoIndex((selectedVideoIndex + 1) % VIDEO_TESTIMONIALS.length)
  }

  const previousVideo = () => {
    if (selectedVideoIndex === null) return
    setSelectedVideoIndex(
      (selectedVideoIndex - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length
    )
  }

  return (
    <>
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ellos Ya Lo Vivieron
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Escucha directamente a los jugadores que experimentaron el fútbol profesional argentino
              </p>
            </div>

            {/* Video Carousel with Navigation */}
            <div className="relative">
              {/* Previous Button */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 md:p-4 transition-all hover:scale-110 hidden md:flex items-center justify-center"
                aria-label="Video anterior"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
              </button>

              {/* Next Button */}
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 md:p-4 transition-all hover:scale-110 hidden md:flex items-center justify-center"
                aria-label="Siguiente video"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
              </button>

              {/* Carousel */}
              <div className="overflow-hidden px-8 md:px-16" ref={emblaRef}>
                <div className="flex gap-6 md:gap-8">
                  {VIDEO_TESTIMONIALS.map((video, index) => (
                    <div
                      key={video.id}
                      className="flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_28%] min-w-0"
                    >
                      <button
                        onClick={() => openVideo(index)}
                        className="group relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        {/* Video thumbnail */}
                        <video
                          src={video.videoUrl}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />

                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all shadow-2xl backdrop-blur-sm">
                            <Play className="w-10 h-10 md:w-12 md:h-12 text-primary ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hint text */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Usa las flechas o desliza para ver más testimonios
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideoIndex !== null && (
        <VideoModal
          video={VIDEO_TESTIMONIALS[selectedVideoIndex]}
          isOpen={selectedVideoIndex !== null}
          onClose={closeVideo}
          onNext={nextVideo}
          onPrevious={previousVideo}
          currentIndex={selectedVideoIndex}
          totalVideos={VIDEO_TESTIMONIALS.length}
        />
      )}
    </>
  )
}
