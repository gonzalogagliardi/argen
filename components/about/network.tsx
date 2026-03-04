"use client"

import { Globe, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Globe, Users, MapPin]

export function Network() {
  const { t } = useLanguage()
  const s = t.network

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{s.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{s.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {s.stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div key={index} className="relative text-center p-8 rounded-xl bg-white border-0 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary" />
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 mb-6">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl font-bold text-foreground mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
