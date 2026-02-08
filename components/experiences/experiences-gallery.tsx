"use client"


import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Clock, ArrowRight } from "lucide-react"
import { EXPERIENCES } from "@/lib/experiencias"
export function ExperiencesGallery() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", label: "Todas" },
    { id: "players", label: "Jugadores" },
    { id: "coaches", label: "Entrenadores" },
  ]

  const experiences = EXPERIENCES


  const filteredExperiences = filter === "all" ? experiences : experiences.filter((exp) => exp.category === filter)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden border-border hover:border-primary/50 transition-all group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {experience.type === "experience" ? (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {experience.country}
                    </Badge>
                  ) : (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {experience.category === "players" ? "Jugador" : experience.category === "coaches" ? "Entrenador" : "Blog"}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                  {experience.type === "experience" ? (
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{experience.participants} participantes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{experience.date}</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{experience.readTime}</span>
                        </div>
                      </div>
                      <Button asChild variant="ghost" className="w-full -mx-3">
                        <Link href={`/experiencias/${experience.slug}`}>
                          Leer Más
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
