import type { Metadata } from "next"
import { ExperiencesHero } from "@/components/experiences/experiences-hero"
import { ExperiencesGallery } from "@/components/experiences/experiences-gallery"
import { Countries } from "@/components/experiences/countries"
import { Stats } from "@/components/experiences/stats"

export const metadata: Metadata = {
  title: "Experiencias Internacionales | ARGENGOAL",
  description:
    "Explora las experiencias de equipos y jugadores de todo el mundo que han vivido el fútbol argentino con ARGENGOAL.",
  alternates: { canonical: "https://argengoal.com/experiencias" },
}

export default function ExperiencesPage() {
  return (
    <main>
      <ExperiencesHero />
      <ExperiencesGallery />
      <Countries />
      <Stats />
    </main>
  )
}
