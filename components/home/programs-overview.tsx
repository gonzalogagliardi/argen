"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const programHrefs = ["/programas#rosario-experience", "/programas#pro-program"]
const programTypes = ["group", "elite"] as const

export function ProgramsOverview() {
  const { t } = useLanguage()
  const s = t.programsOverview

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 text-balance">
            {s.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty font-medium">
            {s.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {s.programs.map((program, index) => {
            const type = programTypes[index]
            const Icon = type === "group" ? Users : Award
            return (
              <Card
                key={index}
                className={`relative overflow-hidden ${type === "elite" ? "border-0 shadow-2xl shadow-primary/20 bg-gradient-to-br from-white to-primary/5" : "border-0 shadow-lg bg-white"} hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${type === "elite" ? "bg-gradient-to-r from-primary via-primary-dark to-primary" : "bg-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-primary-dark group-hover:to-primary transition-all duration-300"}`}
                />

                <CardHeader className="pb-6 pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <Icon className={`w-14 h-14 ${type === "elite" ? "text-primary" : "text-primary group-hover:scale-110 transition-transform"}`} />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-black mb-4 text-foreground">{program.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed font-medium">{program.description}</CardDescription>

                  {type === "group" && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        <Users className="w-4 h-4" />
                        <span>{"tagTeam" in program ? program.tagTeam : ""}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-muted/60 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        <span>{"tagMatches" in program ? program.tagMatches : ""}</span>
                      </div>
                    </div>
                  )}

                  {type === "elite" && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/20">
                        <Award className="w-4 h-4" />
                        <span>{"tagElite" in program ? program.tagElite : ""}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-muted/60 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        <span>{"tagCities" in program ? program.tagCities : ""}</span>
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pb-8">
                  <ul className="space-y-4">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {type === "elite" && "footnote" in program && (
                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{program.footnote}</p>
                  )}
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={type === "elite" ? "default" : "outline"}
                    className={`w-full group text-base py-6 font-bold ${type === "elite" ? "bg-gradient-to-r from-primary to-primary-dark text-black hover:from-primary-dark hover:to-primary shadow-lg shadow-primary/30 hover:shadow-primary/50" : "border-2 hover:bg-primary hover:text-black hover:border-primary"} transition-all duration-300`}
                  >
                    <Link href={programHrefs[index]}>
                      {program.ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
