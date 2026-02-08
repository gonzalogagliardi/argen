"use client"

import { useEffect, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { VideoTestimonial } from "@/lib/videos"

type VideoModalProps = {
  video: VideoTestimonial
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  currentIndex: number
  totalVideos: number
}

export function VideoModal({
  video,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalVideos,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrevious()
      if (e.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen, video.id])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white hover:text-white/80 transition-colors"
        aria-label="Cerrar"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation buttons */}
      {totalVideos > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
            aria-label="Video anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
            aria-label="Siguiente video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Video container */}
      <div
        className="relative w-full max-w-lg md:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video - optimizado para formato vertical 9:16 */}
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl">
          <video
            ref={videoRef}
            src={video.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-contain"
            playsInline
          />
        </div>
      </div>
    </div>
  )
}
