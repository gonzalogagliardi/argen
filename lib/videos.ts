export type VideoTestimonial = {
  id: string
  videoUrl: string
  // Los demás datos están en el video mismo
  participant?: string // Opcional - para uso interno
  country?: string     // Opcional - para uso interno
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "1",
    videoUrl: "/videos/video-1.mp4",
    participant: "Video 1", // Para referencia interna
  },
  {
    id: "2",
    videoUrl: "/videos/video-2.mp4",
    participant: "Video 2",
  },
  {
    id: "3",
    videoUrl: "/videos/video-3.mp4",
    participant: "Video 3",
  },
  {
    id: "4",
    videoUrl: "/videos/video-4.mp4",
    participant: "Video 4",
  },
  {
    id: "5",
    videoUrl: "/videos/video-5.mp4",
    participant: "Video 5",
  },
  {
    id: "6",
    videoUrl: "/videos/video-6.mp4",
    participant: "Video 6",
  },
  {
    id: "7",
    videoUrl: "/videos/video-7.mp4",
    participant: "Video 7",
  },
  {
    id: "8",
    videoUrl: "/videos/video-8.mp4",
    participant: "Video 8",
  },
  {
    id: "9",
    videoUrl: "/videos/video-9.mp4",
    participant: "Video 9",
  },
  {
    id: "10",
    videoUrl: "/videos/video-10.mp4",
    participant: "Video 10",
  },
]
