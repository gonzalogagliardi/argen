import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Founder } from "@/components/about/founder"
import { MissionVision } from "@/components/about/mission-vision"
import { Network } from "@/components/about/network"
import { Gallery } from "@/components/about/gallery"

export const metadata: Metadata = {
  title: "Nosotros | ARGENGOAL",
  description:
    "Conoce a ARGENGOAL y su fundador Luciano Pellegrini, con más de 30 años de experiencia en fútbol profesional argentino y una red internacional en más de 30 países.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Founder />
      <MissionVision />
      <Network />
      <Gallery />
    </main>
  )
}
