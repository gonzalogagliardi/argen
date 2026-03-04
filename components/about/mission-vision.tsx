"use client"

import { Card } from "@/components/ui/card"
import { Target, Eye, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MissionVision() {
  const { t } = useLanguage()
  const s = t.missionVision

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="relative p-8 border-0 bg-white shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary" />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">{s.missionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.missionText}</p>
            </Card>

            <Card className="relative p-8 border-0 bg-white shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary" />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">{s.visionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.visionText}</p>
            </Card>

            <Card className="relative p-8 border-0 bg-white shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-dark to-primary" />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4">{s.valuesTitle}</h3>
              <ul className="space-y-3 text-muted-foreground">
                {s.values.map((v, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1 font-bold">✓</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
