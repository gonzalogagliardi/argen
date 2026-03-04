import type { Metadata } from "next"
import { ProcessHero } from "@/components/how-it-works/process-hero"
import { DetailedSteps } from "@/components/how-it-works/detailed-steps"
import { Requirements } from "@/components/how-it-works/requirements"
import { Timeline } from "@/components/how-it-works/timeline"
import { FaqAccordion } from "@/components/faq/faq-accordion"
import { FaqContact } from "@/components/faq/faq-contact"

export const metadata: Metadata = {
  title: "Cómo Funciona | ARGENGOAL",
  description:
    "Descubre el proceso paso a paso para participar en los programas ARGENGOAL. Desde el contacto inicial hasta tu llegada a Argentina.",
  alternates: { canonical: "https://argengoal.com/como-funciona" },
}

export default function HowItWorksPage() {
  return (
    <main>
      <ProcessHero />
      <DetailedSteps />
      <Requirements />
      <Timeline />
      <FaqAccordion />
      <FaqContact />
    </main>
  )
}
