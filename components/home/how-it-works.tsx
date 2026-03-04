"use client"

import { MessageSquare, Video, FileCheck, Plane } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [MessageSquare, Video, FileCheck, Plane]

export function HowItWorks() {
  const { t } = useLanguage()
  const s = t.howItWorksHome

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            {s.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            {s.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
            {s.steps.map((step, index) => {
              const Icon = icons[index]
              return (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-10 relative">
                      <Icon className="w-11 h-11 text-primary" />
                      <div className="absolute -top-2 -right-2 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-5">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  {index < s.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
