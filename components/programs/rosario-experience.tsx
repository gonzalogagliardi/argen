"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Users, Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function RosarioExperience() {
  const { t } = useLanguage()
  const s = t.rosarioExperience

  return (
    <section id="rosario-experience" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="secondary" className="text-sm px-3 py-1">{s.badge1}</Badge>
            <Badge className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/15">{s.badge2}</Badge>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">{s.title}</h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-8 italic">{s.tagline}</p>

          <div className="p-6 mb-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-2 border-primary/30">
            <p className="text-xl md:text-2xl font-bold text-center text-foreground">{s.guarantee}</p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty mb-10">{s.description}</p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">{s.ageRange}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">{s.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">{s.location}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6 italic">{s.availability}</p>
        </div>

        {/* Day-to-day */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="p-8 md:p-10 border-primary/25 bg-primary/5">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{s.dailyTitle}</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{s.dailyDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background/60 border border-border">
                <p className="font-semibold text-foreground mb-1">{s.weekdays}</p>
                <p className="text-sm text-muted-foreground">{s.weekdaysDesc}</p>
              </div>
              <div className="p-4 rounded-lg bg-background/60 border border-border">
                <p className="font-semibold text-foreground mb-1">{s.weekends}</p>
                <p className="text-sm text-muted-foreground">{s.weekendsDesc}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          {/* What's Included */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">{s.includedTitle}</h3>
            <div className="space-y-4">
              {s.included.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">{s.idealTitle}</h3>
            <Card className="p-6 border-border bg-muted/30">
              <ul className="space-y-4">
                {s.idealItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {/* Sample Itinerary */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4 text-center">{s.itineraryTitle}</h3>
          <p className="text-center text-sm text-muted-foreground mb-10">{s.itinerarySubtitle}</p>

          <div className="space-y-6">
            {s.itinerary.map((day, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary font-bold text-xl shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">{day.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 font-medium">{day.day}</p>
                    <ul className="space-y-3 bg-muted/30 rounded-lg p-4">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 border-primary/30 bg-primary/5 shadow-xl">
            <div className="mb-10">
              <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">{s.pricingLabel}</p>
              <p className="text-5xl font-bold text-foreground mb-3">{s.price}</p>
              <p className="text-sm text-muted-foreground">{s.pricingDesc}</p>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto bg-primary text-primary-foreground text-lg px-12 py-7 h-auto shadow-xl shadow-primary/25 font-semibold">
              <Link href="/contacto">
                {s.pricingCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
