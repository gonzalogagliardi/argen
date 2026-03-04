"use client"

import { Card } from "@/components/ui/card"
import { Award, Globe, Briefcase, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Briefcase, Globe, TrendingUp, Award]

export function Founder() {
  const { t } = useLanguage()
  const s = t.founder

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted shadow-xl">
                <img src="/about.jpeg" alt="Luciano Pellegrini" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Luciano Pellegrini</h2>
              <p className="text-xl text-primary font-semibold mb-6">{s.role}</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>{s.bio1}</p>
                <p>{s.bio2}</p>
                <p>{s.bio3}</p>
                <p>{s.bio4}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {s.achievements.map((achievement, index) => {
              const Icon = icons[index]
              return (
                <Card key={index} className="p-6 border-border text-center hover:border-primary/50 transition-colors shadow-sm">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-foreground mb-2">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
