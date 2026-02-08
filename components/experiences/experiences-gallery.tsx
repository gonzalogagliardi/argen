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
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-primary to-primary-dark text-black shadow-lg shadow-primary/30 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map((experience, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg bg-white hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group hover:-translate-y-2">
                {/* Border top celeste */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary group-hover:h-1.5 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-primary-dark group-hover:to-primary transition-all duration-300" />

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  {experience.type === "experience" ? (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary-dark text-black font-bold shadow-lg">
                      {experience.country}
                    </Badge>
                  ) : (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary-dark text-black font-bold shadow-lg">
                      {experience.category === "players" ? "Jugador" : experience.category === "coaches" ? "Entrenador" : "Blog"}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-foreground mb-3 text-balance group-hover:text-primary transition-colors">{experience.title}</h3>
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
                      <Button asChild variant="ghost" className="w-full -mx-3 font-bold text-primary hover:text-primary-dark hover:bg-primary/10 transition-all group/btn">
                        <Link href={`/experiencias/${experience.slug}`}>
                          Leer Más
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
