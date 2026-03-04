"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Timeline() {
  const { t } = useLanguage()
  const s = t.timeline

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{s.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{s.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {s.items.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 pb-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm font-semibold text-primary mb-1">{item.phase}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 rounded-lg bg-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">{s.ctaTitle}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{s.ctaDesc}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link href="/contacto">
                {s.ctaBtn}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
