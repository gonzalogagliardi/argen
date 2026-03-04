"use client"

import { useLanguage } from "@/lib/language-context"

export function ContactHero() {
  const { t } = useLanguage()
  const s = t.contactHero

  return (
    <section className="py-20 lg:py-28 min-h-[600px] flex items-center bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">{s.title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">{s.description}</p>
        </div>
      </div>
    </section>
  )
}
