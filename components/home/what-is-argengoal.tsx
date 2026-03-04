"use client"

import { Card } from "@/components/ui/card"
import { Globe2, Trophy, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Globe2, Trophy, Heart]

export function WhatIsArgengoal() {
  const { t } = useLanguage()
  const s = t.whatIsArgengoal

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(98,179,229,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(4,142,204,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            {s.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty font-medium">
            {s.descriptionPre}{" "}
            <span className="text-primary font-bold">{s.descriptionHighlight}</span>{" "}
            {s.descriptionPost}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {s.values.map((value, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={index}
                className="relative p-8 border-0 bg-gradient-to-br from-primary/5 to-white shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary" />

                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-3xl font-black text-primary mb-1">{value.stat}</p>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
