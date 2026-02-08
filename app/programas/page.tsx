import type { Metadata } from "next"
import { ProgramsHero } from "@/components/programs/programs-hero"
import { RosarioExperience } from "@/components/programs/rosario-experience"
import { ProProgram } from "@/components/programs/pro-program"
import { ProgramComparison } from "@/components/programs/program-comparison"

export const metadata: Metadata = {
  title: "Programas | ARGENGOAL",
  description:
    "Descubre nuestros programas de fútbol internacional: Rosario Experience para equipos y academias, y Pro Program para desarrollo profesional de jugadores.",
}

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />
      <RosarioExperience />
      <ProProgram />
      <ProgramComparison />
    </main>
  )
}
