import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Globe, Users } from "lucide-react"

export function Testimonials() {
  const milestones = [
    {
      icon: Trophy,
      title: "Competencia de Elite",
      description:
        "Participación histórica en la Manchester United Premier Cup - World Finals 2014 en Old Trafford, representando el talento rosarino.",
      highlight: "Experiencia Internacional",
    },
    {
      icon: Globe,
      title: "Red Global",
      description:
        "Hemos establecido alianzas estratégicas en más de 30 países, conectando academias de todo el mundo con la metodología argentina.",
      highlight: "Trayectoria Comprobada",
    },
    {
      icon: Users,
      title: "Gestión Profesional",
      description:
        "Amplia trayectoria gestionando áreas infantiles, juveniles y profesionales en clubes de primera división aseguran una estructura seria.",
      highlight: "Respaldo Institucional",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Nuestra Trayectoria Habla por Nosotros
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Más que promesas, ofrecemos hechos y experiencia real en el fútbol profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => {
             const Icon = milestone.icon
             return (
              <Card key={index} className="border-0 bg-gradient-to-br from-primary/5 to-white shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-primary text-sm mb-3 uppercase tracking-wider">{milestone.highlight}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{milestone.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}