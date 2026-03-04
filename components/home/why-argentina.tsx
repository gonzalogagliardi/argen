"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const legends = [
  { name: "Lionel Messi", city: "Rosario" },
  { name: "Ángel Di María", city: "Rosario" },
  { name: "Lionel Scaloni", city: "Pujato, SF" },
]

export function WhyArgentina() {
  const { t } = useLanguage()
  const s = t.whyArgentina

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-bold text-primary tracking-wide">{s.badge}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            {s.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {legends.map((legend, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border-2 border-primary/20"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-bold text-foreground">{legend.name}</span>
                <span className="text-xs text-muted-foreground">· {legend.city}</span>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            {s.descriptionPre}{" "}
            <span className="text-primary font-bold">{s.descriptionHighlight}</span>{" "}
            {s.descriptionPost}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {s.reasons.map((reason, index) => (
            <Card
              key={index}
              className="relative p-8 border-0 bg-white shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                {reason.number}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-black text-sm">
                    {reason.number}
                  </div>
                  <h3 className="text-2xl font-black text-foreground">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{reason.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
