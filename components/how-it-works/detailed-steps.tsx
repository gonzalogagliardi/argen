"use client"

import { Card } from "@/components/ui/card"
import { MessageSquare, Video, FileCheck, Plane, Users, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [MessageSquare, Video, FileCheck, Plane, Users, Award]

export function DetailedSteps() {
  const { t } = useLanguage()
  const s = t.detailedSteps

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{s.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{s.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {s.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                      <Icon className="w-10 h-10 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
